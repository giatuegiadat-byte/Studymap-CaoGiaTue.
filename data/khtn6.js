(() => {
  const { exercise: q, register } = window.studyMapData;
  const levels = [
    "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet",
    "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu",
    "van-dung", "van-dung", "van-dung", "van-dung", "van-dung",
    "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao"
  ];
  const curriculum = [
    ["Giới thiệu về Khoa học tự nhiên", "Khoa học tự nhiên tìm hiểu các sự vật, hiện tượng và quy luật trong tự nhiên bằng quan sát, đặt câu hỏi, hình thành giả thuyết, thực hiện kiểm chứng và rút kết luận.", "Kĩ năng khoa học", "method"],
    ["An toàn trong phòng thực hành", "Tuân thủ hướng dẫn, sử dụng kính và dụng cụ bảo hộ khi cần; không nếm, ngửi trực tiếp hóa chất; báo ngay cho giáo viên khi có sự cố.", "Kĩ năng khoa học", "safety"],
    ["Sử dụng kính hiển vi và kính lúp", "Kính lúp giúp quan sát vật nhỏ; kính hiển vi dùng để quan sát vật rất nhỏ. Độ phóng đại toàn phần của kính hiển vi bằng tích độ phóng đại vật kính và thị kính.", "Kĩ năng khoa học", "magnify"],
    ["Đo độ dài", "Đơn vị độ dài cơ bản trong hệ SI là mét (m). Chọn thước có giới hạn đo phù hợp, đặt vạch đầu trùng đầu vật và đọc kết quả đúng cách.", "Kĩ năng khoa học", "length"],
    ["Đo khối lượng", "Đơn vị khối lượng cơ bản là kilôgam (kg). Khi dùng cân cần đặt cân ổn định, chỉnh về số 0 và đọc số chỉ đúng đơn vị.", "Kĩ năng khoa học", "mass"],
    ["Đo thời gian", "Đơn vị thời gian trong hệ SI là giây (s). Có thể dùng đồng hồ bấm giây; cần xác định đúng thời điểm bắt đầu và kết thúc.", "Kĩ năng khoa học", "time"],
    ["Đo nhiệt độ", "Nhiệt độ thường đo bằng nhiệt kế; đơn vị Celsius kí hiệu °C. Đặt bầu nhiệt kế tiếp xúc phù hợp với vật cần đo và đọc khi số chỉ ổn định.", "Kĩ năng khoa học", "temperature"],
    ["Sự đa dạng của chất và các thể của chất", "Chất có thể tồn tại ở thể rắn, lỏng hoặc khí. Các hạt cấu tạo chất luôn chuyển động; khoảng cách và cách sắp xếp hạt khác nhau giữa các thể.", "Hóa học", "state"],
    ["Sự biến đổi thể của chất", "Nóng chảy: rắn thành lỏng; đông đặc: lỏng thành rắn; bay hơi: lỏng thành khí; ngưng tụ: khí thành lỏng.", "Hóa học", "phase"],
    ["Oxygen và không khí", "Oxygen cần cho sự hô hấp và sự cháy. Không khí là hỗn hợp khí, trong đó oxygen chiếm khoảng 21% thể tích.", "Hóa học", "oxygen"],
    ["Một số vật liệu thông dụng", "Vật liệu được lựa chọn theo tính chất và mục đích sử dụng; kim loại thường dẫn điện, nhiều loại chất dẻo nhẹ và cách điện.", "Hóa học", "material"],
    ["Một số nhiên liệu thông dụng", "Nhiên liệu giải phóng năng lượng khi cháy; ví dụ than, xăng, khí gas. Sử dụng nhiên liệu cần tiết kiệm và bảo đảm an toàn, hạn chế ô nhiễm.", "Hóa học", "fuel"],
    ["Một số nguyên liệu thông dụng", "Nguyên liệu là vật liệu ban đầu được dùng trong sản xuất; cần khai thác, sử dụng hợp lí và giảm thất thoát.", "Hóa học", "raw"],
    ["Hỗn hợp đồng nhất và không đồng nhất", "Hỗn hợp gồm từ hai chất trở lên. Hỗn hợp đồng nhất có thành phần phân bố đều; hỗn hợp không đồng nhất có thể nhận ra các phần khác nhau.", "Hóa học", "mixture"],
    ["Phương pháp tách chất ra khỏi hỗn hợp", "Chọn cách tách dựa trên tính chất khác nhau của các chất: lọc chất rắn không tan, cô cạn thu chất tan rắn, chiết chất lỏng không trộn lẫn, dùng nam châm tách sắt.", "Hóa học", "separation"],
    ["Tế bào - Đơn vị cơ sở của sự sống", "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống. Cơ thể sinh vật có thể gồm một tế bào hoặc nhiều tế bào.", "Sinh học", "cell"],
    ["Cấu tạo và chức năng của tế bào", "Tế bào thường gồm màng tế bào, tế bào chất và nhân hoặc vùng nhân. Màng trao đổi chất; tế bào chất diễn ra nhiều hoạt động; nhân chứa vật chất di truyền.", "Sinh học", "cell-parts"],
    ["Sự lớn lên và phân chia của tế bào", "Tế bào lớn lên rồi phân chia tạo tế bào mới; quá trình này góp phần làm cơ thể sinh trưởng và thay thế tế bào già, hỏng.", "Sinh học", "division"],
    ["Cơ thể đơn bào và cơ thể đa bào", "Cơ thể đơn bào chỉ gồm một tế bào đảm nhiệm các hoạt động sống; cơ thể đa bào gồm nhiều tế bào có thể chuyên hóa.", "Sinh học", "organism"],
    ["Các cấp tổ chức trong cơ thể đa bào", "Các cấp tổ chức thường theo thứ tự: tế bào → mô → cơ quan → hệ cơ quan → cơ thể.", "Sinh học", "organization"],
    ["Phân loại thế giới sống", "Phân loại sinh vật dựa trên đặc điểm chung và khác biệt, giúp nhận biết quan hệ giữa các nhóm sinh vật.", "Sinh học", "classification"],
    ["Vi khuẩn", "Vi khuẩn là sinh vật đơn bào nhân sơ, kích thước nhỏ; một số có ích, một số gây bệnh. Có thể phòng bệnh bằng vệ sinh và thực hành an toàn.", "Sinh học", "bacteria"],
    ["Nấm", "Nấm không có diệp lục, sống dị dưỡng; nấm men, nấm mốc và nấm lớn là các dạng nấm. Một số nấm dùng làm thực phẩm, một số có thể gây độc.", "Sinh học", "fungi"],
    ["Đa dạng thực vật", "Thực vật có khả năng quang hợp nhờ diệp lục; các nhóm thực vật đa dạng về cấu tạo, cơ quan sinh sản và môi trường sống.", "Sinh học", "plants"],
    ["Đa dạng động vật không xương sống", "Động vật không xương sống không có cột sống; nhóm này rất đa dạng, gồm nhiều ngành như ruột khoang, giun, thân mềm và chân khớp.", "Sinh học", "invertebrates"],
    ["Đa dạng động vật có xương sống", "Động vật có xương sống có cột sống; các nhóm chính gồm cá, lưỡng cư, bò sát, chim và thú.", "Sinh học", "vertebrates"],
    ["Lực và tác dụng của lực", "Lực có thể làm thay đổi chuyển động hoặc làm vật biến dạng. Đơn vị lực trong hệ SI là niutơn (N).", "Vật lý", "force"],
    ["Lực tiếp xúc và lực không tiếp xúc", "Lực tiếp xúc xuất hiện khi các vật tiếp xúc; lực không tiếp xúc có thể tác dụng từ xa, như lực hấp dẫn hoặc lực từ.", "Vật lý", "contact-force"],
    ["Trọng lực và trọng lượng", "Trọng lực là lực hút của Trái Đất tác dụng lên vật; trọng lượng là độ lớn của trọng lực, đo bằng niutơn (N).", "Vật lý", "gravity"],
    ["Lực đàn hồi", "Vật đàn hồi bị biến dạng khi chịu lực và có xu hướng trở lại hình dạng ban đầu khi lực thôi tác dụng; lực đàn hồi chống lại biến dạng.", "Vật lý", "elastic"],
    ["Lực ma sát", "Lực ma sát xuất hiện ở bề mặt tiếp xúc và cản trở chuyển động tương đối. Ma sát có thể có lợi hoặc có hại tùy tình huống.", "Vật lý", "friction"],
    ["Năng lượng và sự chuyển hóa năng lượng", "Năng lượng có nhiều dạng như hóa năng, điện năng, nhiệt năng, quang năng và động năng; năng lượng có thể truyền hoặc chuyển hóa từ dạng này sang dạng khác.", "Vật lý", "energy"],
    ["Năng lượng tái tạo và bảo toàn năng lượng", "Năng lượng mặt trời, gió và nước là các nguồn tái tạo. Năng lượng không tự sinh ra hoặc mất đi mà chuyển hóa, truyền từ vật này sang vật khác.", "Vật lý", "renewable"],
    ["Chuyển động nhìn thấy của Mặt Trời", "Mặt Trời có vẻ mọc ở phía đông và lặn ở phía tây do Trái Đất tự quay quanh trục theo hướng từ tây sang đông.", "Vật lý", "sun"],
    ["Các pha của Mặt Trăng", "Các pha Mặt Trăng thay đổi theo phần bề mặt được chiếu sáng mà ta nhìn thấy khi Mặt Trăng chuyển động quanh Trái Đất.", "Vật lý", "moon"],
    ["Hệ Mặt Trời và Ngân Hà", "Hệ Mặt Trời gồm Mặt Trời và các thiên thể chịu ảnh hưởng hấp dẫn của nó; Trái Đất là một hành tinh. Hệ Mặt Trời nằm trong Ngân Hà.", "Vật lý", "solar-system"]
  ];
  const factBank = {
    method: ["quan sát", "đặt câu hỏi", "đưa ra giả thuyết", "kiểm chứng bằng thí nghiệm"],
    safety: ["đeo kính bảo hộ theo hướng dẫn", "báo giáo viên khi hóa chất đổ", "không nếm hóa chất", "không tự ý trộn hóa chất"],
    state: ["rắn", "lỏng", "khí", "các hạt vẫn chuyển động"],
    phase: ["nóng chảy", "đông đặc", "bay hơi", "ngưng tụ"],
    material: ["kim loại thường dẫn điện", "chất dẻo thường cách điện", "thủy tinh có thể giòn", "chọn vật liệu theo công dụng"],
    fuel: ["than", "xăng", "khí gas", "cần thông gió và tránh nguồn lửa khi rò rỉ gas"],
    raw: ["gỗ", "quặng", "dầu mỏ", "cần sử dụng nguyên liệu hợp lí"],
    mixture: ["nước muối là hỗn hợp đồng nhất", "nước và cát là hỗn hợp không đồng nhất", "không khí là hỗn hợp khí", "thành phần hỗn hợp có thể tách bằng phương pháp phù hợp"],
    separation: ["lọc để tách chất rắn không tan", "cô cạn để thu chất rắn hòa tan", "chiết để tách hai chất lỏng không trộn lẫn", "nam châm có thể hút sắt"],
    cell: ["tế bào", "màng tế bào", "tế bào chất", "nhân hoặc vùng nhân"],
    "cell-parts": ["màng tế bào", "tế bào chất", "nhân", "vùng nhân ở tế bào nhân sơ"],
    organism: ["một tế bào", "nhiều tế bào", "cơ thể đơn bào", "cơ thể đa bào"],
    organization: ["tế bào", "mô", "cơ quan", "hệ cơ quan"],
    classification: ["đặc điểm cấu tạo", "đặc điểm sinh sản", "môi trường sống", "đặc điểm chung"],
    bacteria: ["sinh vật đơn bào", "nhân sơ", "một số có ích", "một số gây bệnh"],
    fungi: ["không có diệp lục", "sống dị dưỡng", "nấm men", "nấm mốc"],
    plants: ["quang hợp", "diệp lục", "rễ", "lá"],
    invertebrates: ["không có cột sống", "thân mềm", "giun", "chân khớp"],
    vertebrates: ["có cột sống", "cá", "chim", "thú"],
    force: ["niutơn (N)", "làm vật biến dạng", "làm đổi chuyển động", "có thể vừa biến dạng vừa đổi chuyển động"],
    "contact-force": ["lực đẩy của tay lên vật", "lực ma sát", "lực căng dây", "lực đàn hồi khi các vật tiếp xúc"],
    gravity: ["lực hút của Trái Đất", "hướng về phía Trái Đất", "trọng lượng đo bằng niutơn", "trọng lực tác dụng lên vật"],
    elastic: ["lò xo bị kéo dãn", "dây cao su bị kéo", "lực chống lại biến dạng", "vật trở lại hình dạng ban đầu"],
    friction: ["cản trở chuyển động tương đối", "giúp ta đi không bị trượt", "làm mòn bề mặt", "xuất hiện ở bề mặt tiếp xúc"],
    energy: ["hóa năng", "điện năng", "nhiệt năng", "quang năng"],
    renewable: ["năng lượng Mặt Trời", "năng lượng gió", "năng lượng nước", "năng lượng được chuyển hóa"],
    sun: ["phía đông", "phía tây", "Trái Đất tự quay", "tây sang đông"],
    moon: ["trăng non", "trăng bán nguyệt", "trăng tròn", "phần được chiếu sáng nhìn thấy thay đổi"],
    "solar-system": ["Mặt Trời", "hành tinh", "Trái Đất", "Ngân Hà"]
  };
  const factPrompts = [
    "Chọn nhận định đúng:",
    "Kiến thức nào phù hợp với bài học?",
    "Phát biểu nào mô tả chính xác nội dung này?",
    "Khi ôn bài, cần ghi nhớ điều nào?"
  ];
  function makeQuestion(lessonIndex, topic, index) {
    const n = index + 1;
    let prompt;
    let answer;
    let explanation;
    let choices;
    if (topic === "length") {
      answer = `${n * 10} mm`;
      prompt = `Đổi ${n} cm ra milimét.`;
      explanation = `1 cm=10 mm nên ${n} cm=${n * 10} mm.`;
      choices = [`${n * 10} mm`, `${n} mm`, `${n * 100} mm`, `${n * 10} cm`];
    } else if (topic === "mass") {
      answer = `${n * 1000} g`;
      prompt = `Đổi ${n} kg ra gam.`;
      explanation = `1 kg=1000 g nên ${n} kg=${n * 1000} g.`;
      choices = [`${n * 1000} g`, `${n * 100} g`, `${n} g`, `${n * 1000} kg`];
    } else if (topic === "time") {
      answer = `${n * 60} s`;
      prompt = `Đổi ${n} phút ra giây.`;
      explanation = `1 phút=60 giây nên ${n} phút=${n * 60} giây.`;
      choices = [`${n * 60} s`, `${n} s`, `${n * 100} s`, `${n * 60} phút`];
    } else if (topic === "temperature") {
      answer = `${n + 5}°C`;
      prompt = `Nhiệt độ của vật tăng ${n}°C từ 5°C. Nhiệt độ sau khi tăng là:`;
      explanation = `Nhiệt độ sau khi tăng là 5+${n}=${n + 5}°C.`;
      choices = [`${n + 5}°C`, `${n + 7}°C`, `${n + 3}°C`, `${n + 1}°C`];
    } else if (topic === "magnify") {
      answer = n * 10;
      prompt = `Kính hiển vi có vật kính ${n}× và thị kính 10×. Độ phóng đại toàn phần là:`;
      explanation = `Độ phóng đại toàn phần=${n}×10=${answer} lần.`;
    } else if (topic === "division") {
      answer = 2 ** (n % 5 + 1);
      prompt = `Một tế bào phân chia liên tiếp ${n % 5 + 1} lần. Từ một tế bào ban đầu tạo ra bao nhiêu tế bào?`;
      explanation = `Mỗi lần số lượng tăng gấp đôi, nên có 2^${n % 5 + 1}=${answer} tế bào.`;
    } else if (topic === "oxygen") {
      answer = "21%";
      prompt = "Oxygen chiếm khoảng bao nhiêu phần trăm thể tích không khí?";
      explanation = "Oxygen chiếm khoảng 21% thể tích không khí.";
      choices = ["21%", "50%", "78%", "1%"];
    } else if (topic === "sun") {
      answer = "từ tây sang đông";
      prompt = "Trái Đất tự quay quanh trục theo hướng nào?";
      explanation = "Trái Đất tự quay từ tây sang đông, làm Mặt Trời có vẻ chuyển động từ đông sang tây.";
      choices = ["từ tây sang đông", "từ đông sang tây", "từ bắc xuống nam", "từ nam lên bắc"];
    } else if (topic === "organization") {
      answer = ["tế bào", "mô", "cơ quan", "hệ cơ quan", "cơ thể"][n % 5];
      prompt = `Trong thứ tự tổ chức cơ thể đa bào, cấp thứ ${(n % 5) + 1} là cấp nào?`;
      explanation = "Thứ tự từ thấp đến cao: tế bào, mô, cơ quan, hệ cơ quan, cơ thể.";
      choices = ["tế bào", "mô", "cơ quan", "hệ cơ quan"];
      const position = (n % 5);
      if (position === 4) {
        choices = ["cơ thể", "hệ cơ quan", "mô", "tế bào"];
      } else {
        choices = [answer, ...choices.filter((item) => item !== answer)].slice(0, 4);
      }
    } else if (topic === "state") {
      const stateFacts = [
        ["Nước đá ở điều kiện thường tồn tại ở thể nào?", "rắn", "Nước đá là nước ở thể rắn."],
        ["Nước trong cốc ở điều kiện thường tồn tại ở thể nào?", "lỏng", "Nước trong cốc thường ở thể lỏng."],
        ["Không khí chủ yếu tồn tại ở thể nào?", "khí", "Không khí là hỗn hợp các chất khí."],
        ["Các hạt cấu tạo nên chất có đặc điểm nào?", "luôn chuyển động", "Các hạt cấu tạo chất luôn chuyển động."]
      ];
      const [stem, correct, reason] = stateFacts[n % stateFacts.length];
      answer = correct;
      prompt = stem;
      explanation = reason;
      choices = [correct, "đứng yên tuyệt đối", "không có khối lượng", "chỉ tồn tại trong chân không"];
    } else if (topic === "phase") {
      const phases = [
        ["nước đá tan thành nước", "nóng chảy"],
        ["nước lỏng thành nước đá", "đông đặc"],
        ["nước trên mặt đường thành hơi", "bay hơi"],
        ["hơi nước tạo giọt trên cốc lạnh", "ngưng tụ"]
      ];
      const [situation, phase] = phases[n % phases.length];
      answer = phase;
      prompt = `Quá trình ${situation} được gọi là:`;
      explanation = `${phase} là sự chuyển thể phù hợp với tình huống đã nêu.`;
      choices = [phase, ...phases.map((item) => item[1]).filter((item) => item !== phase)];
    } else {
      const facts = factBank[topic] || factBank.method;
      answer = facts[n % facts.length];
      prompt = `${factPrompts[n % factPrompts.length]} liên quan đến bài ${curriculum[lessonIndex][0]}.`;
      explanation = `${answer} là kiến thức cốt lõi trong bài ${curriculum[lessonIndex][0].toLowerCase()}.`;
      const generalWrong = ["không liên quan đến nội dung bài", "luôn đúng trong mọi tình huống", "làm mất hoàn toàn quy luật khoa học"];
      choices = [answer, ...generalWrong];
    }
    const correct = String(answer);
    const options = choices || [correct, `${correct} (sai)`, "không xác định", "không có"];
    const answerIndex = options.findIndex((option) => String(option) === correct);
    return q(`k6-b${String(lessonIndex + 1).padStart(2, "0")}-q${String(index + 1).padStart(2, "0")}`, levels[index], prompt, options.map(String), answerIndex, explanation);
  }
  const lessons = curriculum.map(([title, theory, area, topic], lessonIndex) => ({
    id: `khtn6-bai-${lessonIndex + 1}`,
    title,
    area,
    theory,
    exercises: Array.from({ length: 20 }, (_, index) => makeQuestion(lessonIndex, topic, index))
  }));
  const course = {
    title: "Khoa học tự nhiên 6 · Kết nối tri thức",
    lessons,
    exams: [
      { id: "k6-15p", type: "15p", title: "Kiểm tra 15 phút · KHTN 6", duration: 15, questionIds: ["k6-b01-q01", "k6-b08-q02", "k6-b16-q03", "k6-b27-q04", "k6-b34-q05"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm." },
      { id: "k6-giuaki", type: "giuaki", title: "Kiểm tra giữa kì · KHTN 6", duration: 45, questionIds: ["k6-b04-q11", "k6-b09-q12", "k6-b20-q13", "k6-b29-q14", "k6-b32-q15"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm; ghi rõ đơn vị và giải thích." },
      { id: "k6-cuoiki", type: "cuoiki", title: "Kiểm tra cuối kì · KHTN 6", duration: 60, questionIds: ["k6-b07-q16", "k6-b15-q17", "k6-b23-q18", "k6-b30-q19", "k6-b36-q20"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm. Nêu căn cứ khoa học cho đáp án." }
    ]
  };
  register(6, "khtn", course);
})();
