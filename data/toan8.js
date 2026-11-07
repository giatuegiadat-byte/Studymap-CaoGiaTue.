(() => {
  const { exercise: q, register } = window.studyMapData;
  const levels = [
    "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet",
    "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu",
    "van-dung", "van-dung", "van-dung", "van-dung", "van-dung",
    "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao"
  ];
  const curriculum = [
    ["Đa thức nhiều biến. Các phép tính cộng, trừ, nhân đa thức", "Đa thức nhiều biến là tổng các đơn thức. Cộng trừ các hạng tử đồng dạng; nhân theo tính phân phối và thu gọn kết quả.", "polynomial"],
    ["Phép chia đa thức cho đơn thức", "Chia từng hạng tử của đa thức cho đơn thức; chia hệ số và trừ số mũ của từng biến tương ứng.", "division"],
    ["Hằng đẳng thức đáng nhớ (Bình phương của một tổng, một hiệu; Hiệu hai bình phương)", "(a+b)²=a²+2ab+b²; (a−b)²=a²−2ab+b²; a²−b²=(a−b)(a+b).", "square"],
    ["Hằng đẳng thức đáng nhớ (Lập phương của một tổng, một hiệu; Tổng và hiệu hai lập phương)", "(a+b)³=a³+3a²b+3ab²+b³; (a−b)³=a³−3a²b+3ab²−b³; tổng/hiệu hai lập phương có công thức phân tích tương ứng.", "cube"],
    ["Phân tích đa thức thành nhân tử bằng phương pháp đặt nhân tử chung và dùng hằng đẳng thức", "Đặt nhân tử chung bằng cách đưa thừa số chung ra ngoài ngoặc; nhận dạng các hằng đẳng thức để phân tích tiếp.", "factor"],
    ["Phân tích đa thức thành nhân tử bằng phương pháp nhóm hạng tử và phối hợp nhiều phương pháp", "Nhóm các hạng tử thích hợp để xuất hiện nhân tử chung, sau đó tiếp tục đặt nhân tử chung hoặc dùng hằng đẳng thức.", "factor"],
    ["Phân thức đại số và tính chất cơ bản của phân thức đại số", "Phân thức A/B xác định khi B≠0. Nhân hoặc chia cả tử và mẫu cho cùng một biểu thức khác 0 không làm đổi giá trị phân thức.", "fraction"],
    ["Phép cộng và phép trừ phân thức đại số", "Muốn cộng trừ phân thức khác mẫu, quy đồng mẫu thức rồi cộng trừ tử và giữ nguyên mẫu chung.", "fraction-add"],
    ["Phép nhân và phép chia phân thức đại số", "Nhân phân thức bằng cách nhân tử với tử, mẫu với mẫu; chia cho phân thức khác 0 bằng cách nhân với phân thức nghịch đảo.", "fraction-multiply"],
    ["Tọa độ của một điểm trong mặt phẳng tọa độ", "Điểm M(x;y) có hoành độ x và tung độ y; hai trục tọa độ vuông góc tại gốc O.", "coordinate"],
    ["Khái niệm hàm số và đồ thị hàm số", "Đại lượng y là hàm số của x nếu mỗi giá trị x thuộc tập xác định tương ứng đúng một giá trị y. Đồ thị gồm các điểm biểu diễn các cặp (x;y).", "function"],
    ["Hàm số bậc nhất y = ax + b (a ≠ 0)", "Hàm số y=ax+b với a≠0 là hàm số bậc nhất; a là hệ số của x, b là tung độ giao điểm với trục Oy.", "linear"],
    ["Đồ thị của hàm số bậc nhất y = ax + b (a ≠ 0)", "Đồ thị y=ax+b là đường thẳng; có thể xác định bằng hai điểm thuộc đồ thị.", "linear-graph"],
    ["Hệ số góc của đường thẳng y = ax + b (a ≠ 0)", "Trong y=ax+b, hệ số góc là a; dấu và độ lớn của a mô tả chiều biến thiên và độ dốc của đường thẳng.", "slope"],
    ["Phương trình bậc nhất một ẩn và cách giải", "Phương trình ax+b=0 với a≠0 có nghiệm x=−b/a. Thực hiện các phép biến đổi tương đương để giữ nguyên tập nghiệm.", "equation"],
    ["Giải bài toán bằng cách lập phương trình bậc nhất", "Đặt ẩn và điều kiện phù hợp, biểu diễn các đại lượng theo ẩn, lập phương trình, giải rồi đối chiếu điều kiện và trả lời.", "word-equation"],
    ["Bất đẳng thức và tính chất", "Cộng cùng một số vào hai vế bất đẳng thức giữ nguyên chiều; nhân hoặc chia với số âm phải đổi chiều bất đẳng thức.", "inequality"],
    ["Bất phương trình bậc nhất một ẩn và cách giải", "Giải bất phương trình bậc nhất bằng các phép biến đổi tương đương; khi nhân hoặc chia hai vế với số âm phải đổi chiều.", "inequality"],
    ["Tứ giác. Định lý tổng các góc của một tứ giác", "Tổng số đo bốn góc trong một tứ giác bằng 360°.", "quadrilateral"],
    ["Hình thang. Hình thang cân", "Hình thang có một cặp cạnh đối song song. Hình thang cân có hai cạnh bên bằng nhau và hai góc kề mỗi đáy bằng nhau.", "trapezoid"],
    ["Hình bình hành", "Hình bình hành có các cặp cạnh đối song song và bằng nhau; các góc đối bằng nhau, hai đường chéo cắt nhau tại trung điểm mỗi đường.", "parallelogram"],
    ["Hình thoi", "Hình thoi có bốn cạnh bằng nhau; hai đường chéo vuông góc, cắt nhau tại trung điểm và là các đường phân giác của góc.", "rhombus"],
    ["Hình chữ nhật", "Hình chữ nhật có bốn góc vuông; hai đường chéo bằng nhau và cắt nhau tại trung điểm mỗi đường.", "rectangle"],
    ["Hình vuông", "Hình vuông vừa là hình chữ nhật vừa là hình thoi; bốn cạnh bằng nhau và bốn góc vuông.", "square-geometry"],
    ["Định lý Thales trong tam giác", "Một đường thẳng song song với một cạnh tam giác và cắt hai cạnh còn lại tạo các đoạn thẳng tương ứng tỉ lệ.", "thales"],
    ["Định lý Thales đảo và hệ quả của định lý Thales", "Nếu một đường thẳng cắt hai cạnh của tam giác và tạo các đoạn tương ứng tỉ lệ thì đường thẳng đó song song với cạnh còn lại.", "thales-reverse"],
    ["Đường trung bình của tam giác", "Đường trung bình nối trung điểm hai cạnh tam giác; nó song song với cạnh thứ ba và có độ dài bằng một nửa cạnh ấy.", "midline"],
    ["Tính chất đường phân giác của tam giác", "Đường phân giác trong tam giác chia cạnh đối diện thành hai đoạn tỉ lệ với hai cạnh kề.", "bisector"],
    ["Hai tam giác đồng dạng", "Hai tam giác đồng dạng có các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ; tỉ số diện tích bằng bình phương tỉ số đồng dạng.", "similarity"],
    ["Các trường hợp đồng dạng của hai tam giác (c-c-c, c-g-c, g-c-g)", "Hai tam giác đồng dạng nếu ba cặp cạnh tương ứng tỉ lệ, hai cặp cạnh tỉ lệ và góc xen giữa bằng nhau, hoặc hai cặp góc tương ứng bằng nhau.", "similarity"],
    ["Các trường hợp đồng dạng của hai tam giác vuông", "Hai tam giác vuông đồng dạng khi có một cặp góc nhọn bằng nhau hoặc hai cặp cạnh góc vuông tương ứng tỉ lệ.", "similarity"],
    ["Đồng dạng phối cảnh và hình đồng dạng", "Các hình đồng dạng có hình dạng như nhau; độ dài tương ứng cùng tỉ lệ, còn diện tích biến đổi theo bình phương tỉ số đồng dạng.", "similarity"],
    ["Hình lăng trụ đứng tam giác", "Lăng trụ đứng tam giác có hai đáy là tam giác bằng nhau, các mặt bên là hình chữ nhật; thể tích bằng diện tích đáy nhân chiều cao.", "prism"],
    ["Hình lăng trụ đứng tứ giác", "Lăng trụ đứng tứ giác có hai đáy là tứ giác bằng nhau, các mặt bên là hình chữ nhật; thể tích V=Sđáy·h.", "prism"],
    ["Hình chóp tam giác đều", "Hình chóp tam giác đều có đáy là tam giác đều, các mặt bên là những tam giác cân bằng nhau; thể tích bằng một phần ba diện tích đáy nhân chiều cao.", "pyramid"],
    ["Hình chóp tứ giác đều", "Hình chóp tứ giác đều có đáy là hình vuông, các mặt bên là tam giác cân bằng nhau; thể tích V=(1/3)Sđáy·h.", "pyramid"],
    ["Thu thập và tổ chức dữ liệu", "Dữ liệu cần được thu thập phù hợp với mục tiêu và tổ chức bằng bảng để thuận tiện đọc, so sánh, phân tích.", "data"],
    ["Lựa chọn dạng biểu đồ để biểu diễn dữ liệu", "Chọn biểu đồ theo mục đích: cột để so sánh, đoạn thẳng để theo dõi thay đổi theo thời gian, quạt tròn để thể hiện cơ cấu.", "chart"],
    ["Mô tả xác suất của biến cố ngẫu nhiên trong một số trò chơi đơn giản", "Với các kết quả đồng khả năng, xác suất bằng số kết quả thuận lợi chia tổng số kết quả có thể xảy ra.", "probability"]
  ];
  function makeQuestion(lessonIndex, topic, index) {
    const n = index + 1;
    let prompt;
    let answer;
    let explanation;
    let choices;
    if (topic === "polynomial") {
      answer = n + 2;
      prompt = `Hệ số của x² trong (${n + 2})x²+${n}xy+3y là:`;
      explanation = `Hạng tử chứa x² là (${n + 2})x² nên hệ số của x² bằng ${answer}.`;
    } else if (topic === "division") {
      answer = n + 1;
      prompt = `Tính giá trị của ( ${n}x²+${n}x ) : (${n}x) tại x=${n}.`;
      explanation = `Rút gọn thương được x+1; thay x=${n} ta có ${n}+1=${answer}.`;
    } else if (topic === "square") {
      answer = 2 * n;
      prompt = `Trong khai triển (x+${n})², hệ số của x là:`;
      explanation = `(x+${n})²=x²+2×${n}×x+${n}² nên hệ số của x là ${answer}.`;
    } else if (topic === "cube") {
      answer = 3;
      prompt = `Trong khai triển (x+1)³, hệ số của x² là:`;
      explanation = `(x+1)³=x³+3x²+3x+1 nên hệ số của x² là 3.`;
    } else if (topic === "factor") {
      answer = `(x+${n})²`;
      prompt = `Phân tích x²+${2 * n}x+${n * n} thành nhân tử.`;
      explanation = `Nhận dạng a²+2ab+b² với a=x, b=${n}: kết quả là (x+${n})².`;
      choices = [answer, `(x-${n})²`, `(x+${n})(x-${n})`, `x(x+${2 * n})`];
    } else if (topic === "fraction") {
      answer = `x≠${n}`;
      prompt = `Điều kiện xác định của phân thức ${n}/(x−${n}) là:`;
      explanation = `Mẫu thức phải khác 0: x−${n}≠0, do đó x≠${n}.`;
      choices = [answer, `x=${n}`, `x>${n}`, "mọi x"];
    } else if (topic === "fraction-add") {
      answer = "1";
      prompt = `Tính x/(x+${n}) + ${n}/(x+${n}) tại x=${n}.`;
      explanation = `Thay x=${n}: ${n}/${2 * n}+${n}/${2 * n}=1.`;
    } else if (topic === "fraction-multiply") {
      answer = 1;
      prompt = `Tính (${n}/${n + 1}) × (${n + 1}/${n}).`;
      explanation = `Hai phân thức nghịch đảo của nhau nên tích bằng 1.`;
    } else if (topic === "coordinate") {
      answer = "IV";
      prompt = `Điểm M(${n};−${n}) nằm ở góc phần tư thứ mấy?`;
      explanation = `Hoành độ dương, tung độ âm nên M nằm ở góc phần tư IV.`;
      choices = ["IV", "I", "II", "III"];
    } else if (topic === "function") {
      answer = 3 * n;
      prompt = `Cho y=2x+${n}. Tính y khi x=${n}.`;
      explanation = `Thay x=${n}: y=2×${n}+${n}=${answer}.`;
    } else if (topic === "linear" || topic === "linear-graph") {
      answer = 3 * n;
      prompt = `Với hàm số y=2x+${n}, giá trị y khi x=${n} là:`;
      explanation = `y=2×${n}+${n}=${answer}.`;
    } else if (topic === "slope") {
      answer = n;
      prompt = `Hệ số góc của đường thẳng y=${n}x+2 là:`;
      explanation = `Trong y=ax+b, hệ số góc là a; ở đây a=${n}.`;
    } else if (topic === "equation") {
      answer = n;
      prompt = `Giải phương trình 2x=${2 * n}.`;
      explanation = `Chia hai vế cho 2 được x=${n}.`;
    } else if (topic === "word-equation") {
      answer = n;
      prompt = `Một số cộng với ${n} bằng hai lần số đó. Số ấy là:`;
      explanation = `Gọi số cần tìm là x: x+${n}=2x, suy ra x=${n}.`;
    } else if (topic === "inequality") {
      answer = `x>${n}`;
      prompt = `Nghiệm của bất phương trình x+${n}>2${n} là:`;
      explanation = `Trừ ${n} ở hai vế được x>${n}.`;
      choices = [answer, `x<${n}`, `x≥${n}`, `x≤${n}`];
    } else if (topic === "quadrilateral") {
      answer = 140 - n;
      prompt = `Tứ giác có ba góc ${90}°, ${90}° và ${40 + n}°. Góc thứ tư bằng:`;
      explanation = `Tổng góc tứ giác là 360°; góc còn lại 360°−90°−90°−${40 + n}°=${answer}°.`;
    } else if (topic === "trapezoid") {
      answer = 180 - (30 + n);
      prompt = `Hình thang có hai đáy song song. Một cặp góc trong cùng phía có một góc ${30 + n}°. Góc kia bằng:`;
      explanation = `Hai góc trong cùng phía bù nhau nên góc kia là 180°−${30 + n}°=${answer}°.`;
    } else if (topic === "parallelogram") {
      answer = 50 + n;
      prompt = `Một góc của hình bình hành bằng ${answer}°. Góc đối diện bằng:`;
      explanation = `Hai góc đối của hình bình hành bằng nhau nên góc đối diện cũng bằng ${answer}°.`;
    } else if (topic === "rhombus") {
      answer = 90;
      prompt = `Hai đường chéo hình thoi cắt nhau tạo góc:`;
      explanation = `Hai đường chéo hình thoi vuông góc nên góc tạo bởi chúng bằng 90°.`;
      choices = ["90", "45", "60", "180"];
    } else if (topic === "rectangle") {
      answer = 5 * n;
      prompt = `Hình chữ nhật có hai cạnh ${3 * n} cm và ${4 * n} cm. Độ dài đường chéo là:`;
      explanation = `Đường chéo là √((${3 * n})²+(${4 * n})²)=5×${n}=${answer} cm.`;
    } else if (topic === "square-geometry") {
      answer = n * n;
      prompt = `Hình vuông cạnh ${n} cm có diện tích bằng:`;
      explanation = `Diện tích hình vuông bằng cạnh bình phương: ${n}²=${answer} cm².`;
    } else if (topic === "thales" || topic === "thales-reverse") {
      answer = `${2 * n}/${3}`;
      prompt = `Theo tỉ lệ Thales, x/${2 * n}=1/3. Giá trị x là:`;
      explanation = `Nhân hai vế với ${2 * n}: x=${2 * n}/3.`;
      choices = [answer, `${n}/3`, `${2 * n}/2`, `${3 * n}/2`];
    } else if (topic === "midline") {
      answer = 2 * n;
      prompt = `Cạnh thứ ba của tam giác dài gấp đôi đường trung bình ${n} cm là:`;
      explanation = `Đường trung bình bằng một nửa cạnh thứ ba nên cạnh thứ ba dài 2×${n}=${answer} cm.`;
    } else if (topic === "bisector") {
      answer = "2/3";
      prompt = `Đường phân giác chia cạnh đối diện thành hai đoạn tỉ lệ 2:3. Tỉ số đoạn thứ nhất so với đoạn thứ hai là:`;
      explanation = `Theo tính chất đường phân giác, tỉ số hai đoạn là 2/3.`;
      choices = ["2/3", "3/2", "2/5", "3/5"];
    } else if (topic === "similarity") {
      answer = "4/9";
      prompt = `Hai tam giác đồng dạng có tỉ số đồng dạng 2:3. Tỉ số diện tích là:`;
      explanation = `Tỉ số diện tích bằng bình phương tỉ số đồng dạng: 2²:3²=4:9.`;
      choices = ["4/9", "2/3", "3/2", "8/27"];
    } else if (topic === "prism") {
      answer = 6 * n;
      prompt = `Lăng trụ đứng có diện tích đáy ${2 * n} cm² và chiều cao 3 cm. Thể tích là:`;
      explanation = `V=Sđáy×h=${2 * n}×3=${answer} cm³.`;
    } else if (topic === "pyramid") {
      answer = 2 * n;
      prompt = `Hình chóp có diện tích đáy ${3 * n} cm², chiều cao 2 cm. Thể tích là:`;
      explanation = `V=(1/3)Sđáy×h=(1/3)×${3 * n}×2=${answer} cm³.`;
    } else if (topic === "data") {
      answer = n + 2;
      prompt = `Bốn số liệu liên tiếp cách đều là ${n}, ${n + 1}, ${n + 2}, ${n + 3}. Tổng của chúng là:`;
      answer = 4 * n + 6;
      explanation = `Cộng các số liệu: ${n}+${n + 1}+${n + 2}+${n + 3}=${answer}.`;
    } else if (topic === "chart") {
      answer = "biểu đồ cột";
      prompt = `Muốn so sánh số lượng của nhiều nhóm, nên chọn:`;
      explanation = `Biểu đồ cột giúp so sánh trực quan số lượng giữa các nhóm.`;
      choices = ["biểu đồ cột", "biểu đồ quạt tròn", "sơ đồ đoạn thẳng", "bản đồ"];
    } else {
      answer = "1/2";
      prompt = `Trong ${2 * n} kết quả đồng khả năng, có ${n} kết quả thuận lợi. Xác suất bằng:`;
      explanation = `Xác suất=${n}/${2 * n}=1/2.`;
      choices = ["1/2", "1/3", "2/3", "1"];
    }
    const correct = String(answer);
    const options = choices || [correct, String(Number(answer) + 1), String(Number(answer) - 1), String(Number(answer) + 2)];
    return q(`t8-b${String(lessonIndex + 1).padStart(2, "0")}-q${String(index + 1).padStart(2, "0")}`, levels[index], prompt, options, 0, explanation);
  }
  const lessons = curriculum.map(([title, theory, topic], lessonIndex) => {
    const chapter = lessonIndex < 6 ? "Chương 1 · Đa thức và hằng đẳng thức"
      : lessonIndex < 9 ? "Chương 2 · Phân thức đại số"
      : lessonIndex < 14 ? "Chương 3 · Hàm số và đồ thị"
      : lessonIndex < 18 ? "Chương 4 · Phương trình và bất phương trình"
      : lessonIndex < 24 ? "Chương 5 · Tứ giác"
      : lessonIndex < 32 ? "Chương 6 · Thales và tam giác đồng dạng"
      : lessonIndex < 36 ? "Chương 7 · Hình học khối không gian"
      : "Chương 8 · Thống kê và xác suất";
    return {
      id: `toan8-bai-${lessonIndex + 1}`,
      title,
      area: chapter,
      theory,
      exercises: Array.from({ length: 20 }, (_, index) => makeQuestion(lessonIndex, topic, index))
    };
  });
  const course = {
    title: "Toán 8 · Kết nối tri thức",
    lessons,
    exams: [
      { id: "t8-15p", type: "15p", title: "Kiểm tra 15 phút · Toán 8", duration: 15, questionIds: ["t8-b01-q01", "t8-b07-q02", "t8-b10-q03", "t8-b19-q04", "t8-b37-q05"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm." },
      { id: "t8-giuaki", type: "giuaki", title: "Kiểm tra giữa kì · Toán 8", duration: 45, questionIds: ["t8-b05-q11", "t8-b16-q12", "t8-b25-q13", "t8-b30-q14", "t8-b34-q15"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm; ghi điều kiện và bước tính." },
      { id: "t8-cuoiki", type: "cuoiki", title: "Kiểm tra cuối kì · Toán 8", duration: 60, questionIds: ["t8-b18-q16", "t8-b24-q17", "t8-b32-q18", "t8-b36-q19", "t8-b39-q20"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm; trình bày lập luận." }
    ]
  };
  register(8, "toan", course);
})();
