(() => {
  const { exercise: q, register } = window.studyMapData;
  const levels = [
    "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet",
    "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu",
    "van-dung", "van-dung", "van-dung", "van-dung", "van-dung",
    "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao"
  ];
  const curriculum = [
    ["Tập hợp Q các số hữu tỉ", "Số hữu tỉ là số viết được dưới dạng a/b với a,b nguyên, b≠0. Hai phân số bằng nhau biểu diễn cùng một số hữu tỉ.", "rational"],
    ["Cộng, trừ, nhân, chia số hữu tỉ", "Cộng trừ số hữu tỉ bằng cách quy đồng; nhân tử với tử, mẫu với mẫu; chia cho một số khác 0 bằng cách nhân với số nghịch đảo.", "rational"],
    ["Lũy thừa với số mũ tự nhiên của một số hữu tỉ", "Với số hữu tỉ x và số tự nhiên n, xⁿ là tích n thừa số x. Khi cùng cơ số: xᵐ·xⁿ=xᵐ⁺ⁿ; xᵐ:xⁿ=xᵐ⁻ⁿ nếu x≠0 và m≥n.", "power"],
    ["Quy tắc dấu ngoặc và quy tắc chuyển vế", "Bỏ ngoặc có dấu cộng thì giữ nguyên dấu; có dấu trừ thì đổi dấu các số hạng. Chuyển một hạng tử qua dấu bằng phải đổi dấu hạng tử đó.", "rational"],
    ["Biểu diễn thập phân của số hữu tỉ", "Số hữu tỉ có thể viết dưới dạng số thập phân hữu hạn hoặc vô hạn tuần hoàn. Có thể đổi phân số sang số thập phân bằng phép chia tử cho mẫu.", "decimal"],
    ["Số vô tỉ. Căn bậc hai số học", "Số vô tỉ không viết được dưới dạng phân số hai số nguyên. Căn bậc hai số học của a≥0 là số không âm x thỏa x²=a.", "sqrt"],
    ["Tập hợp các số thực", "Tập số thực gồm số hữu tỉ và số vô tỉ; mỗi số thực được biểu diễn bởi một điểm trên trục số.", "real"],
    ["Giá trị tuyệt đối của một số thực", "Giá trị tuyệt đối của x là khoảng cách từ x đến 0 trên trục số; |x|≥0 và |x|=|-x|.", "absolute"],
    ["Làm tròn số và ước lượng kết quả", "Khi làm tròn đến một hàng, xét chữ số ngay bên phải: nhỏ hơn 5 thì giữ nguyên, từ 5 trở lên thì tăng chữ số hàng làm tròn một đơn vị.", "round"],
    ["Tỉ lệ thức", "Tỉ lệ thức a/b=c/d (b,d≠0) có tính chất a·d=b·c. Có thể dùng nhân chéo để tìm thành phần chưa biết.", "ratio"],
    ["Tính chất của dãy tỉ số bằng nhau", "Nếu a/b=c/d thì các tỉ số bằng nhau và có thể bằng (a+c)/(b+d) khi mẫu số tổng khác 0.", "ratio"],
    ["Đại lượng tỉ lệ thuận", "Hai đại lượng tỉ lệ thuận khi y=kx với k khác 0; tỉ số y/x không đổi.", "direct"],
    ["Đại lượng tỉ lệ nghịch", "Hai đại lượng tỉ lệ nghịch khi xy=a với a khác 0; khi một đại lượng tăng k lần thì đại lượng kia giảm k lần.", "inverse"],
    ["Biểu thức đại số", "Biểu thức đại số gồm số, chữ và phép toán. Thay giá trị của biến vào biểu thức rồi tính theo thứ tự phép toán.", "expression"],
    ["Đa thức một biến", "Đa thức một biến là tổng các đơn thức cùng một biến; bậc của đa thức khác 0 là số mũ lớn nhất có hệ số khác 0.", "polynomial"],
    ["Phép cộng và phép trừ đa thức một biến", "Cộng, trừ các đa thức bằng cách bỏ ngoặc rồi thu gọn các hạng tử đồng dạng.", "poly-add"],
    ["Phép nhân đa thức một biến", "Nhân từng hạng tử của đa thức này với từng hạng tử của đa thức kia rồi thu gọn các hạng tử đồng dạng.", "poly-mul"],
    ["Phép chia đa thức một biến", "Khi chia đa thức cho đơn thức, chia từng hạng tử của đa thức cho đơn thức nếu các phép chia đều thực hiện được.", "poly-div"],
    ["Góc ở vị trí đặc biệt. Tia phân giác của một góc", "Hai góc đối đỉnh thì bằng nhau; hai góc kề bù có tổng 180°. Tia phân giác chia một góc thành hai góc bằng nhau.", "angle"],
    ["Hai đường thẳng song song và dấu hiệu nhận biết", "Nếu một đường thẳng cắt hai đường thẳng và có một cặp góc so le trong bằng nhau thì hai đường thẳng đó song song.", "parallel"],
    ["Tiên đề Euclid về đường thẳng song song", "Qua một điểm nằm ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đã cho.", "parallel"],
    ["Định lý và chứng minh định lý", "Định lý là khẳng định được suy ra từ những điều đã biết; chứng minh cần nêu giả thiết, kết luận và lập luận hợp lí.", "proof"],
    ["Tổng các góc trong một tam giác", "Tổng số đo ba góc trong một tam giác bằng 180°.", "triangle"],
    ["Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất (c-c-c)", "Nếu ba cạnh của tam giác này lần lượt bằng ba cạnh tương ứng của tam giác kia thì hai tam giác bằng nhau theo trường hợp cạnh-cạnh-cạnh.", "congruence"],
    ["Trường hợp bằng nhau thứ hai (c-g-c)", "Nếu hai cạnh và góc xen giữa của tam giác này lần lượt bằng hai cạnh và góc xen giữa tương ứng của tam giác kia thì hai tam giác bằng nhau.", "congruence"],
    ["Trường hợp bằng nhau thứ ba (g-c-g)", "Nếu một cạnh và hai góc kề cạnh đó của tam giác này lần lượt bằng các yếu tố tương ứng của tam giác kia thì hai tam giác bằng nhau.", "congruence"],
    ["Tam giác cân. Đường trung trực của đoạn thẳng", "Tam giác cân có hai cạnh bên bằng nhau và hai góc ở đáy bằng nhau. Đường trung trực vuông góc với đoạn thẳng tại trung điểm của nó.", "isosceles"],
    ["Các trường hợp bằng nhau của tam giác vuông", "Hai tam giác vuông bằng nhau nếu có cạnh huyền và một cạnh góc vuông tương ứng bằng nhau; cũng có thể dùng cạnh-góc-cạnh hoặc góc-cạnh-góc.", "right"],
    ["Quan hệ giữa góc và cạnh đối diện trong một tam giác", "Trong một tam giác, góc lớn hơn đối diện cạnh lớn hơn; cạnh lớn hơn đối diện góc lớn hơn.", "triangle"],
    ["Quan hệ giữa đường vuông góc và đường xiên", "Trong các đoạn thẳng nối một điểm với một đường thẳng, đoạn vuông góc là đoạn ngắn nhất; đường xiên có hình chiếu lớn hơn thì dài hơn.", "perpendicular"],
    ["Quan hệ giữa ba cạnh của một tam giác. Bất đẳng thức tam giác", "Tổng độ dài hai cạnh bất kì của tam giác lớn hơn cạnh còn lại; hiệu hai cạnh nhỏ hơn cạnh còn lại.", "inequality"],
    ["Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác", "Ba đường trung tuyến đồng quy tại trọng tâm; trọng tâm chia mỗi trung tuyến theo tỉ số 2:1 kể từ đỉnh. Ba đường phân giác cũng đồng quy.", "centroid"],
    ["Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác", "Ba đường trung trực đồng quy tại tâm đường tròn ngoại tiếp; ba đường cao đồng quy tại trực tâm.", "center"],
    ["Thu thập, phân loại và biểu diễn dữ liệu", "Dữ liệu cần được thu thập phù hợp với mục tiêu, phân loại và trình bày bằng bảng hoặc biểu đồ thích hợp.", "data"],
    ["Biểu đồ đoạn thẳng", "Biểu đồ đoạn thẳng biểu diễn dữ liệu theo thứ tự bằng các điểm trên hệ trục tọa độ nối liên tiếp bằng đoạn thẳng.", "line"],
    ["Biểu đồ quạt tròn", "Biểu đồ quạt tròn biểu diễn các phần của toàn thể; góc ở tâm của mỗi quạt bằng tỉ lệ phần đó nhân 360°.", "pie"],
    ["Biến cố ngẫu nhiên trong một số trò chơi đơn giản", "Biến cố ngẫu nhiên là biến cố có thể xảy ra hoặc không xảy ra khi thực hiện phép thử.", "event"],
    ["Xác suất của biến cố ngẫu nhiên trong một số trò chơi đơn giản", "Trong mô hình các kết quả đồng khả năng, xác suất bằng số kết quả thuận lợi chia tổng số kết quả có thể; giá trị nằm từ 0 đến 1.", "probability"]
  ];
  function makeQuestion(lessonIndex, topic, index) {
    const n = index + 1;
    let prompt;
    let answer;
    let explanation;
    let choices;
    if (topic === "rational") {
      prompt = `Tính ${n}/${n + 1} + 1/${n + 1}.`;
      answer = "1";
      explanation = `Cộng tử số: (${n}+1)/${n + 1}=${n + 1}/${n + 1}=1.`;
      choices = ["1", "0", "1/2", "2"];
    } else if (topic === "power") {
      const exponent = n % 4 + 2;
      answer = 2 ** exponent;
      prompt = `Tính 2^${exponent}.`;
      explanation = `2^${exponent} là tích của ${exponent} thừa số 2, bằng ${answer}.`;
    } else if (topic === "decimal") {
      answer = 4 * n;
      prompt = `Tính ${n / 10} : 0,25.`;
      explanation = `${n / 10}:0,25=${n / 10}×4=${answer}.`;
    } else if (topic === "sqrt") {
      answer = n + 2;
      prompt = `Căn bậc hai số học của ${(n + 2) ** 2} là:`;
      explanation = `Căn bậc hai số học không âm và ${(n + 2)}²=${(n + 2) ** 2}, nên kết quả là ${answer}.`;
    } else if (topic === "real") {
      answer = n + 1;
      prompt = `Số nào nằm giữa ${n} và ${n + 2} trên trục số?`;
      explanation = `${n}<${answer}<${n + 2}, nên ${answer} nằm giữa hai số đã cho.`;
    } else if (topic === "absolute") {
      answer = n;
      prompt = `Giá trị |−${n}| bằng:`;
      explanation = `Giá trị tuyệt đối là khoảng cách đến 0 nên |−${n}|=${n}.`;
    } else if (topic === "round") {
      answer = n + 1;
      prompt = `Làm tròn ${n},7 đến hàng đơn vị.`;
      explanation = `Chữ số hàng phần mười là 7≥5 nên làm tròn ${n},7 lên ${answer}.`;
    } else if (topic === "ratio") {
      answer = 2 * n;
      prompt = `Tìm x biết ${2 * n}/${3 * n} = x/${3 * n}.`;
      explanation = `Hai phân số bằng nhau và cùng mẫu ${3 * n}, nên x=${2 * n}.`;
    } else if (topic === "direct") {
      answer = 3 * n;
      prompt = `Hai đại lượng tỉ lệ thuận theo y=3x. Tính y khi x=${n}.`;
      explanation = `Thay x=${n} vào y=3x, được y=3×${n}=${answer}.`;
    } else if (topic === "inverse") {
      answer = 6 * n;
      prompt = `Hai đại lượng tỉ lệ nghịch có tích bằng ${12 * n}. Tính y khi x=2.`;
      explanation = `xy=${12 * n}; với x=2 thì y=${12 * n}:2=${answer}.`;
    } else if (topic === "expression") {
      answer = n * 2 + 4;
      prompt = `Tính giá trị 2x+4 khi x=${n}.`;
      explanation = `Thay x=${n}: 2×${n}+4=${answer}.`;
    } else if (topic === "polynomial") {
      answer = n + 2;
      prompt = `Đa thức x^${n % 3 + 2}+${n}x+2 có bậc bằng:`;
      answer = n % 3 + 2;
      explanation = `Bậc đa thức là số mũ lớn nhất của biến có hệ số khác 0, ở đây bằng ${answer}.`;
    } else if (topic === "poly-add") {
      answer = n + 2;
      prompt = `Hệ số của x trong (${n}x+1)+(2x−3) là:`;
      explanation = `Cộng các hạng tử đồng dạng: ${n}x+2x=(${answer})x.`;
    } else if (topic === "poly-mul") {
      answer = n;
      prompt = `Trong tích (x+${n})(x+1), hệ số tự do bằng:`;
      explanation = `Hệ số tự do là tích của hai hạng tử tự do: ${n}×1=${answer}.`;
    } else if (topic === "poly-div") {
      answer = n;
      prompt = `Tìm hệ số của x trong thương ${n}x² : x.`;
      explanation = `Chia hệ số và trừ số mũ: ${n}x²:x=${answer}x, nên hệ số của x là ${answer}.`;
    } else if (topic === "angle") {
      answer = 180 - (30 + n);
      prompt = `Hai góc kề bù, một góc bằng ${30 + n}°. Góc còn lại bằng:`;
      explanation = `Hai góc kề bù có tổng 180°; góc còn lại là 180°−${30 + n}°=${answer}°.`;
    } else if (topic === "parallel") {
      answer = 40 + n;
      prompt = `Hai đường thẳng song song bị cắt bởi một đường thẳng. Nếu một góc so le trong bằng ${answer}°, góc so le trong còn lại bằng:`;
      explanation = `Hai góc so le trong khi hai đường thẳng song song thì bằng nhau, nên góc còn lại là ${answer}°.`;
    } else if (topic === "proof") {
      answer = 90;
      prompt = `Hai góc đối đỉnh có số đo lần lượt là ${50 + n}° và x°. Tính x.`;
      answer = 50 + n;
      explanation = `Hai góc đối đỉnh bằng nhau, do đó x=${50 + n}°.`;
    } else if (topic === "triangle") {
      answer = 90 - n;
      prompt = `Một tam giác có hai góc ${40 + n}° và 50°. Góc thứ ba bằng:`;
      explanation = `Tổng ba góc bằng 180°; góc thứ ba là 180°−${40 + n}°−50°=${answer}°.`;
    } else if (topic === "congruence") {
      answer = n + 3;
      prompt = `Hai tam giác bằng nhau. Một cạnh của tam giác thứ nhất dài ${answer} cm; cạnh tương ứng của tam giác thứ hai dài:`;
      explanation = `Các cạnh tương ứng của hai tam giác bằng nhau nên độ dài cạnh tương ứng cũng là ${answer} cm.`;
    } else if (topic === "isosceles") {
      answer = (180 - (40 + n)) / 2;
      prompt = `Tam giác cân có góc ở đỉnh ${40 + n}°. Mỗi góc ở đáy bằng:`;
      explanation = `Hai góc đáy bằng nhau, mỗi góc là (180°−${40 + n}°):2=${answer}°.`;
    } else if (topic === "right") {
      answer = 5 * n;
      prompt = `Tam giác vuông có hai cạnh góc vuông ${3 * n} cm và ${4 * n} cm. Cạnh huyền bằng:`;
      explanation = `Theo định lí Pythagore, cạnh huyền là √((${3 * n})²+(${4 * n})²)=5×${n}=${answer} cm.`;
    } else if (topic === "perpendicular") {
      answer = 5 * n;
      prompt = `Một đường vuông góc dài ${3 * n} cm và một đường xiên tạo thành tam giác vuông có cạnh còn lại ${4 * n} cm. Đường xiên dài:`;
      explanation = `Áp dụng định lí Pythagore: √((${3 * n})²+(${4 * n})²)=${answer} cm.`;
    } else if (topic === "inequality") {
      const a = n + 3;
      const b = n + 5;
      answer = 2 * a - 1;
      prompt = `Hai cạnh tam giác dài ${a} cm và ${b} cm. Có bao nhiêu số nguyên dương có thể là độ dài cạnh thứ ba?`;
      explanation = `Cạnh thứ ba x thỏa |${b}−${a}|<x<${a}+${b}; các số nguyên dương phù hợp có ${answer} giá trị.`;
    } else if (topic === "centroid") {
      answer = 2 * n;
      prompt = `Trọng tâm chia trung tuyến dài ${3 * n} cm theo tỉ số 2:1 kể từ đỉnh. Đoạn từ đỉnh đến trọng tâm dài:`;
      explanation = `Đoạn từ đỉnh đến trọng tâm bằng 2/3 trung tuyến: 2/3×${3 * n}=${answer} cm.`;
    } else if (topic === "center") {
      answer = n;
      prompt = `O là tâm đường tròn ngoại tiếp tam giác, OA=${n} cm. Độ dài OB với B là đỉnh khác là:`;
      explanation = `Tâm đường tròn ngoại tiếp cách đều các đỉnh, nên OB=OA=${n} cm.`;
    } else if (topic === "data") {
      answer = n + 2;
      prompt = `Số trung bình cộng của ${n}, ${n + 2}, ${n + 4} là:`;
      explanation = `(${n}+${n + 2}+${n + 4}):3=${3 * (n + 2)}:3=${answer}.`;
    } else if (topic === "line") {
      answer = n + 2;
      prompt = `Một biểu đồ đoạn thẳng có giá trị đầu ${n} và giá trị cuối ${2 * n + 2}. Mức tăng là:`;
      explanation = `Mức tăng bằng giá trị cuối trừ giá trị đầu: ${2 * n + 2}−${n}=${answer}.`;
    } else if (topic === "pie") {
      answer = 18 * n;
      prompt = `Một nhóm chiếm ${5 * n}% hình quạt tròn. Góc ở tâm tương ứng bằng:`;
      explanation = `Góc ở tâm bằng ${5 * n}%×360°=${answer}°.`;
    } else if (topic === "event") {
      answer = n;
      prompt = `Một phép thử được thực hiện ${2 * n} lần, biến cố A xảy ra ${n} lần. Số lần A không xảy ra là:`;
      explanation = `Số lần A không xảy ra bằng tổng số lần thử trừ số lần A xảy ra: ${2 * n}−${n}=${answer}.`;
    } else {
      answer = "1/2";
      prompt = `Trong ${2 * n} kết quả đồng khả năng, có ${n} kết quả thuận lợi. Xác suất của biến cố là:`;
      explanation = `Xác suất bằng ${n}/${2 * n}=${answer}.`;
      choices = ["1/2", "1/3", "2/3", "1"];
    }
    const answerText = String(answer);
    const options = choices || [answerText, String(Number(answerText) + 1), String(Number(answerText) - 1), String(Number(answerText) + 2)];
    return q(`t7-b${String(lessonIndex + 1).padStart(2, "0")}-q${String(index + 1).padStart(2, "0")}`, levels[index], prompt, options, 0, explanation);
  }
  const lessons = curriculum.map(([title, theory, topic], lessonIndex) => {
    const chapter = lessonIndex < 4 ? "Chương 1 · Số hữu tỉ"
      : lessonIndex < 9 ? "Chương 2 · Số thực"
      : lessonIndex < 13 ? "Chương 3 · Tỉ lệ thức và đại lượng tỉ lệ"
      : lessonIndex < 18 ? "Chương 4 · Biểu thức đại số và đa thức một biến"
      : lessonIndex < 22 ? "Chương 5 · Góc và đường thẳng song song"
      : lessonIndex < 33 ? "Chương 6 · Tam giác bằng nhau"
      : "Chương 7 · Thống kê và xác suất";
    return {
      id: `toan7-bai-${lessonIndex + 1}`,
      title,
      area: chapter,
      theory,
      exercises: Array.from({ length: 20 }, (_, index) => makeQuestion(lessonIndex, topic, index))
    };
  });
  const course = {
    title: "Toán 7 · Kết nối tri thức",
    lessons,
    exams: [
      { id: "t7-15p", type: "15p", title: "Kiểm tra 15 phút · Toán 7", duration: 15, questionIds: ["t7-b01-q01", "t7-b06-q06", "t7-b10-q11", "t7-b19-q02", "t7-b23-q03"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm." },
      { id: "t7-giuaki", type: "giuaki", title: "Kiểm tra giữa kì · Toán 7", duration: 45, questionIds: ["t7-b02-q11", "t7-b12-q12", "t7-b16-q13", "t7-b24-q14", "t7-b29-q15"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm; trình bày các bước tính." },
      { id: "t7-cuoiki", type: "cuoiki", title: "Kiểm tra cuối kì · Toán 7", duration: 60, questionIds: ["t7-b08-q16", "t7-b18-q17", "t7-b31-q18", "t7-b36-q19", "t7-b38-q20"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm; giải thích đầy đủ câu vận dụng cao." }
    ]
  };
  register(7, "toan", course);
})();
