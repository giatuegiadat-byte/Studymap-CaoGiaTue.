(() => {
  const grades = Object.fromEntries(["6", "7", "8", "9"].map((grade) => [grade, {}]));

  function exercise(id, level, question, options, answer, explanation) {
    return { id, level, question, options, answer, explanation };
  }

  function register(grade, subject, course) {
    const validLevels = ["nhan-biet", "thong-hieu", "van-dung", "van-dung-cao"];
    const exerciseIds = new Set();
    if (!grades[String(grade)] || !["toan", "khtn", "tienganh"].includes(subject)) {
      throw new Error(`Môn/khối không hợp lệ: ${subject}${grade}`);
    }
    if (!course.lessons.length || !course.exams.length) {
      throw new Error(`Khóa học ${subject}${grade} cần có bài học và đề kiểm tra.`);
    }
    course.lessons.forEach((lesson) => {
      if (!lesson.id || !lesson.title || !lesson.theory || !Array.isArray(lesson.exercises)) {
        throw new Error(`Bài học chưa đủ nội dung hoặc danh sách bài tập: ${lesson.id}`);
      }
      const lessonLevels = new Set();
      lesson.exercises.forEach((item) => {
        if (!item.id || !validLevels.includes(item.level) || item.options.length !== 4
          || !Number.isInteger(item.answer) || item.answer < 0 || item.answer > 3
          || !item.explanation || exerciseIds.has(item.id)) {
          throw new Error(`Câu hỏi không hợp lệ hoặc trùng mã: ${item.id}`);
        }
        exerciseIds.add(item.id);
        lessonLevels.add(item.level);
      });
      if (validLevels.some((level) => !lessonLevels.has(level))) {
        throw new Error(`Bài học chưa có đủ bốn mức độ: ${lesson.id}`);
      }
    });
    course.questionBankComplete = course.lessons.every((lesson) =>
      validLevels.every((level) => lesson.exercises.filter((item) => item.level === level).length >= 5)
    );
    course.exams.forEach((exam) => {
      if (!["15p", "giuaki", "cuoiki"].includes(exam.type) || exam.questionIds.length < 5
        || !exam.rubric || exam.questionIds.some((id) => !exerciseIds.has(id))) {
        throw new Error(`Đề kiểm tra không hợp lệ: ${exam.id}`);
      }
      const levelMix = {
        "15p": ["nhan-biet", "thong-hieu"],
        "giuaki": ["thong-hieu", "van-dung"],
        "cuoiki": ["van-dung", "van-dung-cao"]
      }[exam.type];
      const levels = course.lessons.flatMap((lesson) => lesson.exercises);
      const candidates = levels.filter((item) => levelMix.includes(item.level));
      const perLevel = Math.floor(Math.min(5, candidates.length) / 2);
      const remainder = Math.min(5, candidates.length) % 2;
      const firstCount = perLevel + remainder;
      const levelCounts = {
        [levelMix[0]]: firstCount,
        [levelMix[1]]: perLevel
      };
      if (levelMix.some((level) => levels.filter((item) => item.level === level).length < levelCounts[level])) {
        throw new Error(`Không đủ câu hỏi theo ma trận mức độ cho đề: ${exam.id}`);
      }
      exam.sampleQuestionIds = exam.questionIds;
      exam.questionIds = candidates.map((item) => item.id);
      exam.levelCounts = levelCounts;
    });
    grades[String(grade)][subject] = course;
  }

  window.studyMapData = { grades, exercise, register };
})();
