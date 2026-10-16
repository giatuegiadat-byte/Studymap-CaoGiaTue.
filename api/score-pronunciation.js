const MAX_AUDIO_BYTES = 2.8 * 1024 * 1024;
const ALLOWED_MIME_TYPES = new Set(["audio/wav"]);
const GEMINI_MODELS = [
  "gemini-3.8-flash",
  "gemini-3.7-flash",
  "gemini-3.6-flash",
  "gemini-3-flash-preview",
  "gemini-3.5-flash"
];
const GEMINI_TIMEOUT_MS = 10000;
const RESPONSE_SCHEMA = {
  type: "OBJECT",
  properties: {
    score: { type: "INTEGER" },
    pronunciation: { type: "INTEGER" },
    clarity: { type: "INTEGER" },
    rhythm: { type: "INTEGER" },
    transcript: { type: "STRING" },
    wordIssues: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          word: { type: "STRING" },
          heardAs: { type: "STRING" },
          tip: { type: "STRING" }
        },
        required: ["word", "heardAs", "tip"]
      }
    },
    feedback: { type: "STRING" },
    practiceTip: { type: "STRING" }
  },
  required: [
    "score",
    "pronunciation",
    "clarity",
    "rhythm",
    "transcript",
    "wordIssues",
    "feedback",
    "practiceTip"
  ]
};

function sendJson(res, status, body) {
  res.status(status).json(body);
}

function isValidScore(value) {
  return Number.isInteger(value) && value >= 0 && value <= 100;
}

function isSameOrigin(req) {
  const origin = req.headers.origin;
  const host = req.headers.host;
  if (typeof origin !== "string" || typeof host !== "string") return false;

  try {
    const parsedOrigin = new URL(origin);
    return parsedOrigin.host.toLowerCase() === host.toLowerCase()
      && (parsedOrigin.protocol === "https:"
        || parsedOrigin.hostname === "localhost"
        || parsedOrigin.hostname === "127.0.0.1");
  } catch {
    return false;
  }
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Phương thức không được hỗ trợ." });
  }
  if (!isSameOrigin(req)) {
    return sendJson(res, 403, { error: "Yêu cầu không cùng nguồn với StudyMap." });
  }
  if (!req.headers["content-type"]?.startsWith("application/json")) {
    return sendJson(res, 415, { error: "Yêu cầu phải sử dụng application/json." });
  }
  if (!process.env.GEMINI_API_KEY) {
    return sendJson(res, 503, { error: "Dịch vụ chấm phát âm chưa được cấu hình trên máy chủ." });
  }

  const contentLength = Number(req.headers["content-length"] || 0);
  if (contentLength > 4.2 * 1024 * 1024) {
    return sendJson(res, 413, { error: "Bản ghi quá lớn. Hãy đọc câu ngắn hơn." });
  }

  const { referenceText, audio, mimeType } = req.body || {};
  if (typeof referenceText !== "string" || !referenceText.trim() || referenceText.length > 600
    || typeof audio !== "string" || !/^[A-Za-z0-9+/]+={0,2}$/.test(audio)
    || typeof mimeType !== "string" || !ALLOWED_MIME_TYPES.has(mimeType)) {
    return sendJson(res, 400, { error: "Dữ liệu ghi âm hoặc câu mẫu không hợp lệ." });
  }

  const audioBuffer = Buffer.from(audio, "base64");
  if (!audioBuffer.length || audioBuffer.length > MAX_AUDIO_BYTES
    || audioBuffer.toString("base64") !== audio) {
    return sendJson(res, 413, { error: "Bản ghi không hợp lệ hoặc vượt quá giới hạn dung lượng." });
  }

  const prompt = [
    "Hãy đánh giá bản ghi âm của học sinh đang đọc câu mẫu tiếng Anh được cung cấp.",
    `Câu mẫu: "${referenceText.trim()}"`,
    "Chấm điểm phát âm tổng quát từ 0 đến 100, đồng thời cho điểm pronunciation, clarity, rhythm.",
    "Đánh giá dựa trên âm thanh thực tế và mức độ đọc đúng câu mẫu; không suy đoán lỗi nếu âm thanh không đủ rõ.",
    "Không trừ điểm chỉ vì giọng vùng miền hoặc khác biệt giọng Anh-Mỹ/Anh-Anh.",
    "Viết feedback, practiceTip và tip bằng tiếng Việt; wordIssues chỉ liệt kê tối đa 8 từ thực sự cần luyện.",
    "Nếu không nghe rõ, hãy phản ánh trung thực trong transcript và feedback, không tự bịa lời nói."
  ].join("\n");

  const requestBody = JSON.stringify({
    systemInstruction: {
      parts: [{
        text: "Bạn là giáo viên tiếng Anh thân thiện, công tâm, chuyên hướng dẫn phát âm cho học sinh. Chấm theo âm thanh, không đánh đồng nhận dạng từ với chất lượng phát âm. Trả về nội dung theo đúng JSON schema được yêu cầu."
      }]
    },
    contents: [{
      role: "user",
      parts: [
        { text: prompt },
        { inlineData: { mimeType, data: audio } }
      ]
    }],
    generationConfig: {
      temperature: 0.2,
      responseMimeType: "application/json",
      responseSchema: RESPONSE_SCHEMA
    }
  });
  let geminiResponse = null;
  let payload = null;
  let modelUsed = "";
  let lastFailure = null;
  for (const model of GEMINI_MODELS) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), GEMINI_TIMEOUT_MS);
    try {
      geminiResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: "POST",
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": process.env.GEMINI_API_KEY
          },
          body: requestBody
        }
      );
      payload = await geminiResponse.json();
    } catch (error) {
      lastFailure = error;
      console.warn("Gemini pronunciation model request failed; trying fallback:", model, error.name);
      continue;
    } finally {
      clearTimeout(timeout);
    }

    if (geminiResponse.ok) {
      modelUsed = model;
      break;
    }

    const status = geminiResponse.status;
    const upstreamMessage = payload?.error?.message;
    const isHighDemand = typeof upstreamMessage === "string"
      && /high demand|overload|temporarily unavailable/i.test(upstreamMessage);
    const isTransient = [404, 429, 500, 502, 503, 504].includes(status) || isHighDemand;
    if (status === 401 || status === 403) {
      console.error("Gemini rejected pronunciation API credentials:", status);
      return sendJson(res, 502, {
        error: "Gemini từ chối API key hoặc quyền truy cập model. Hãy kiểm tra lại GEMINI_API_KEY trong cấu hình máy chủ."
      });
    }
    if (!isTransient) {
      console.error("Gemini pronunciation API returned a non-retryable status:", status);
      return sendJson(res, 502, {
        error: "Gemini từ chối bản ghi. Hãy thử ghi âm lại; nếu lỗi tiếp diễn, kiểm tra cấu hình API."
      });
    }
    lastFailure = { status };
    console.warn("Gemini pronunciation model unavailable; trying fallback:", model, status);
  }

  if (!modelUsed) {
    if (lastFailure?.status === 404) {
      return sendJson(res, 503, {
        error: "Các model Gemini dự phòng hiện không khả dụng cho API key này. Hãy kiểm tra quyền model trong Google AI Studio."
      });
    }
    console.error("All Gemini pronunciation models failed.", lastFailure?.name || lastFailure?.status || "unknown");
    return sendJson(res, 503, {
      error: "Gemini đang quá tải hoặc tạm thời mất kết nối. Hệ thống đã thử các model dự phòng; vui lòng đợi một chút rồi ghi âm lại."
    });
  }

  const resultText = payload?.candidates?.[0]?.content?.parts
    ?.map((part) => part.text || "")
    .join("")
    .trim();
  if (!resultText) {
    return sendJson(res, 502, { error: "Gemini không trả về kết quả. Hãy thử ghi âm lại." });
  }

  let result;
  try {
    result = JSON.parse(resultText);
  } catch {
    console.error("Gemini pronunciation response was not valid JSON.");
    return sendJson(res, 502, { error: "Kết quả từ Gemini không đúng định dạng. Hãy thử lại." });
  }

  const isValidText = (value, maxLength) =>
    typeof value === "string" && value.length <= maxLength;
  if (!isValidScore(result.score) || !isValidScore(result.pronunciation)
    || !isValidScore(result.clarity) || !isValidScore(result.rhythm)
    || !isValidText(result.transcript, 1000)
    || !isValidText(result.feedback, 2000)
    || !isValidText(result.practiceTip, 1000)
    || !Array.isArray(result.wordIssues)
    || !result.wordIssues.every((item) => item
      && isValidText(item.word, 100)
      && isValidText(item.heardAs, 100)
      && isValidText(item.tip, 500))) {
    return sendJson(res, 502, { error: "Gemini trả về dữ liệu chấm không hợp lệ. Hãy thử lại." });
  }

  return sendJson(res, 200, {
    result: {
      score: result.score,
      pronunciation: result.pronunciation,
      clarity: result.clarity,
      rhythm: result.rhythm,
      transcript: result.transcript,
      wordIssues: result.wordIssues.slice(0, 8),
      feedback: result.feedback,
      practiceTip: result.practiceTip
    }
  });
};
