(() => {
  const gradeSelect = document.getElementById("khoi-hoc");
  const subjectSelect = document.getElementById("gt-mon");
  const branchSelect = document.getElementById("gt-phan-mon");
  const branchLabel = document.getElementById("gt-nhan-phan-mon");
  const content = document.getElementById("gt-noi-dung");
  const lessonNav = document.getElementById("gt-danh-sach-bai");
  const lessonCount = document.getElementById("gt-so-bai");
  const lessonLevels = ["nhan-biet", "thong-hieu", "van-dung", "van-dung-cao"];
  const levelNames = {
    "nhan-biet": "Nhận biết",
    "thong-hieu": "Thông hiểu",
    "van-dung": "Vận dụng",
    "van-dung-cao": "Vận dụng cao · HSG"
  };
  let selectedLessonId = "";
  let questionRecords = [];
  let correctAnswers = 0;

  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function shuffled(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  }

  function selectedCourse() {
    const grade = gradeSelect.value;
    const subject = subjectSelect.value;
    const course = window.studyMapData.grades[grade]?.[subject];
    if (!course) throw new Error(`Chưa có dữ liệu môn ${subject}, lớp ${grade}.`);
    return course;
  }

  function filteredLessons(course) {
    if (branchSelect.value === "tat-ca") return course.lessons;
    return course.lessons.filter((lesson) => lesson.area?.includes(branchSelect.value));
  }

  function renderEmptyState(lessons) {
    const panel = element("article", undefined, "gt-trang-thai-bai");
    panel.append(element("span", "📖", "gt-trang-thai-icon"));
    panel.append(element("h3", lessons.length ? "Chọn một bài trong mục lục" : "Chưa có bài học"));
    panel.append(element(
      "p",
      lessons.length
        ? "Bấm vào bài muốn học. Lý thuyết và bài tập từ dễ đến khó sẽ mở tại đây."
        : "Phân môn này chưa có bài học ở khối đang chọn."
    ));
    content.replaceChildren(panel);
  }

  function syncSelectors() {
    try {
      const lessons = filteredLessons(selectedCourse());
      selectedLessonId = "";
      questionRecords = [];
      lessonCount.textContent = `${lessons.length} bài`;
      lessonNav.replaceChildren();

      const randomButton = element("button", "🔀 Ôn tập ngẫu nhiên toàn môn", "gt-muc-luc-tat-ca");
      randomButton.type = "button";
      randomButton.dataset.lessonId = "";
      randomButton.dataset.gtSound = "true";
      randomButton.addEventListener("click", () => {
        if (lessons.length) openLesson(lessons[Math.floor(Math.random() * lessons.length)]);
      });
      lessonNav.append(randomButton);

      lessons.forEach((lesson, index) => {
        const button = element("button", undefined, "gt-bai-muc-luc");
        button.type = "button";
        button.dataset.lessonId = lesson.id;
        button.dataset.gtSound = "true";
        button.style.setProperty("--gt-delay", `${Math.min(index, 8) * 45}ms`);
        button.append(
          element("span", String(index + 1).padStart(2, "0"), "gt-so-thu-tu"),
          element("span", lesson.title, "gt-ten-bai-muc-luc")
        );
        if (lesson.area) button.append(element("small", lesson.area, "gt-phan-mon-bai"));
        button.addEventListener("click", () => openLesson(lesson));
        lessonNav.append(button);
      });
      render();
    } catch (error) {
      console.error("Không thể tải nội dung chương trình:", error);
      content.replaceChildren(element("p", error.message, "gt-phan-hoi gt-sai"));
    }
  }

  function openLesson(lesson) {
    selectedLessonId = lesson.id;
    window.phatAmTuongTac("bat-dau");
    render();
  }

  function addQuestion(container, question, groupId) {
    const optionOrder = shuffled(question.options.map((_, index) => index));
    const displayedQuestion = {
      ...question,
      options: optionOrder.map((index) => question.options[index]),
      answer: optionOrder.indexOf(question.answer)
    };
    const fieldset = element("fieldset", undefined, "gt-cau-hoi");
    fieldset.append(element("legend", displayedQuestion.question));
    const radios = [];
    displayedQuestion.options.forEach((option, index) => {
      const label = element("label", undefined, "gt-dap-an");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = groupId;
      input.value = String(index);
      label.append(input, element("span", `${String.fromCharCode(65 + index)}. ${option}`));
      fieldset.append(label);
      radios.push(input);
    });
    const card = element("article", undefined, "gt-bai-tap-cau");
    card.append(fieldset);
    const actions = element("div", undefined, "gt-actions");
    const check = element("button", "Kiểm tra đáp án");
    check.type = "button";
    actions.append(check);
    card.append(actions);
    container.append(card);
    return { card, fieldset, radios, question: displayedQuestion, answered: false, check };
  }

  function showAnswer(record, selectedIndex) {
    const correct = selectedIndex === record.question.answer;
    const result = element(
      "p",
      `${correct ? "Chính xác." : "Chưa đúng."} Đáp án: ${String.fromCharCode(65 + record.question.answer)}. ${record.question.options[record.question.answer]}. ${record.question.explanation}`,
      `gt-phan-hoi ${correct ? "gt-dung" : "gt-sai"}`
    );
    record.fieldset.append(result);
    record.radios.forEach((radio) => { radio.disabled = true; });
    record.answered = true;
    return correct;
  }

  function renderLesson(course) {
    const lesson = filteredLessons(course).find((item) => item.id === selectedLessonId);
    if (!lesson) {
      renderEmptyState(filteredLessons(course));
      return;
    }

    const questions = lessonLevels.flatMap((level) =>
      shuffled(lesson.exercises.filter((question) => question.level === level))
    );
    if (!questions.length) throw new Error(`Bài "${lesson.title}" chưa có câu hỏi luyện tập.`);
    questionRecords = [];
    correctAnswers = 0;

    const panel = element("article", undefined, "gt-bai-hoc gt-bai-vua-mo");
    const header = element("div", undefined, "gt-bai-dau-noi-dung");
    const headingGroup = element("div");
    headingGroup.append(element("p", "BÀI HỌC", "gt-eyebrow"));
    headingGroup.append(element("h3", lesson.title));
    if (lesson.area) headingGroup.append(element("p", lesson.area, "gt-phan-hoi"));
    const back = element("button", "← Mục lục bài học", "gt-quay-lai-muc-luc");
    back.type = "button";
    back.addEventListener("click", () => {
      selectedLessonId = "";
      render();
    });
    header.append(headingGroup, back);
    panel.append(header);
    panel.append(element("h4", "Lý thuyết trọng tâm", "gt-muc-noi-dung"));
    panel.append(element("p", lesson.theory, "gt-ly-thuyet"));
    panel.append(element("h4", "Luyện tập · từ cơ bản đến nâng cao", "gt-muc-noi-dung"));
    panel.append(element("p", "Các câu được tự sắp xếp theo bốn mức: Nhận biết → Thông hiểu → Vận dụng → Vận dụng cao. Thứ tự câu và đáp án sẽ đổi mỗi lượt.", "gt-huong-dan-luyen"));

    const progress = element("p", `Đã trả lời 0/${questions.length} câu · đúng 0`, "gt-tien-do-bai");
    panel.append(progress);
    const progressBar = element("div", undefined, "gt-thanh-tien-do");
    const progressFill = element("i");
    progressBar.append(progressFill);
    panel.append(progressBar);

    const questionList = element("div", undefined, "gt-danh-sach-cau-hoi");
    questions.forEach((question, index) => {
      const questionPanel = element("section", undefined, "gt-cau-theo-bai");
      const badge = element("span", levelNames[question.level], `gt-nhan-muc gt-muc-${question.level}`);
      questionPanel.append(badge, element("span", `Câu ${index + 1}/${questions.length}`, "gt-so-cau"));
      const record = addQuestion(questionPanel, question, `lesson-${lesson.id}-${index}`);
      record.check.addEventListener("click", () => {
        const selected = record.radios.find((radio) => radio.checked);
        if (!selected) {
          let warning = record.card.querySelector(".gt-luu-y");
          if (!warning) {
            warning = element("span", "Chọn một đáp án trước nhé.", "gt-phan-hoi gt-sai gt-luu-y");
            record.card.querySelector(".gt-actions").append(warning);
          }
          return;
        }
        if (showAnswer(record, Number(selected.value))) correctAnswers += 1;
        record.check.disabled = true;
        const answered = questionRecords.filter((item) => item.answered).length;
        progressFill.style.width = `${answered / questions.length * 100}%`;
        progress.textContent = answered === questions.length
          ? `Hoàn thành bài · ${correctAnswers}/${questions.length} câu đúng · ${(correctAnswers * 10 / questions.length).toFixed(1)}/10 điểm`
          : `Đã trả lời ${answered}/${questions.length} câu · đúng ${correctAnswers}`;
        if (answered === questions.length) progress.classList.add("gt-hoan-thanh-bai");
      });
      questionRecords.push(record);
      questionList.append(questionPanel);
    });
    panel.append(questionList);

    const retry = element("button", "🔀 Làm lại · đảo câu và đáp án", "gt-lam-lai-bai");
    retry.type = "button";
    retry.addEventListener("click", () => render());
    panel.append(retry);
    content.replaceChildren(panel);
  }

  function render() {
    content.replaceChildren();
    lessonNav.querySelectorAll("button").forEach((button) => {
      const active = button.dataset.lessonId === selectedLessonId && selectedLessonId !== "";
      button.classList.toggle("dang-chon", active);
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    branchLabel.classList.toggle("an", subjectSelect.value !== "khtn");
    renderLesson(selectedCourse());
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise([content]).catch((error) => {
        console.error("Không thể hiển thị công thức trong chương trình:", error);
      });
    }
  }

  [gradeSelect, subjectSelect].forEach((select) => select.addEventListener("change", () => {
    branchSelect.value = "tat-ca";
    syncSelectors();
  }));
  branchSelect.addEventListener("change", syncSelectors);
  syncSelectors();
})();
