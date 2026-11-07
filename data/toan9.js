(() => {
  const { exercise: q, register } = window.studyMapData;
  const levels = [
    "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet",
    "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu",
    "van-dung", "van-dung", "van-dung", "van-dung", "van-dung",
    "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao"
  ];
  const curriculum = [
    ["Khái niệm phương trình bậc nhất hai ẩn", "Phương trình bậc nhất hai ẩn có dạng ax+by=c, trong đó a,b không đồng thời bằng 0. Mỗi nghiệm là một cặp số thỏa mãn phương trình.", "linear-two"],
    ["Hệ hai phương trình bậc nhất hai ẩn", "Nghiệm của hệ là cặp số đồng thời thỏa mãn cả hai phương trình. Hai đường thẳng biểu diễn hệ có thể cắt nhau, song song hoặc trùng nhau.", "system"],
    ["Giải hệ hai phương trình bậc nhất hai ẩn bằng phương pháp thế", "Từ một phương trình biểu diễn một ẩn theo ẩn còn lại, thế vào phương trình kia, giải rồi tìm ẩn còn lại.", "substitution"],
    ["Giải hệ hai phương trình bậc nhất hai ẩn bằng phương pháp cộng đại số", "Nhân các phương trình với hệ số thích hợp để hệ số một ẩn đối nhau; cộng hai phương trình để khử ẩn.", "elimination"],
    ["Giải bài toán bằng cách lập hệ phương trình", "Chọn hai ẩn phù hợp, biểu diễn các đại lượng theo ẩn, lập hệ từ điều kiện bài toán, giải hệ và kiểm tra điều kiện.", "system-word"],
    ["Căn bậc hai và căn thức bậc hai", "Với a≥0, √a là căn bậc hai số học không âm. Căn thức √A xác định khi A≥0.", "sqrt"],
    ["Tính chất của căn bậc hai số học", "Với a,b≥0: √(ab)=√a·√b; với b>0, √(a/b)=√a/√b. Bình phương hai vế cần xét điều kiện.", "sqrt-property"],
    ["Biến đổi đơn giản biểu thức chứa căn thức bậc hai", "Có thể đưa thừa số chính phương ra ngoài dấu căn và trục căn thức ở mẫu bằng cách nhân biểu thức liên hợp thích hợp.", "simplify-root"],
    ["Phép nhân và phép chia căn thức bậc hai", "Với các biểu thức không âm, √A·√B=√(AB); √A/√B=√(A/B) khi B>0.", "root-product"],
    ["Căn bậc ba và tính chất", "Căn bậc ba của a là số x sao cho x³=a. Căn bậc ba xác định với mọi số thực a và giữ dấu của a.", "cube-root"],
    ["Hàm số y = ax² (a ≠ 0) và đồ thị", "Hàm số y=ax² có đồ thị là parabol nhận trục Oy làm trục đối xứng; a>0 parabol mở lên, a<0 mở xuống.", "quadratic-function"],
    ["Phương trình bậc hai một ẩn", "Phương trình bậc hai có dạng ax²+bx+c=0 với a≠0. Nghiệm là giá trị x làm vế trái bằng 0.", "quadratic"],
    ["Công thức nghiệm và công thức nghiệm thu gọn của phương trình bậc hai", "Với Δ=b²−4ac: Δ>0 có hai nghiệm phân biệt, Δ=0 có nghiệm kép, Δ<0 vô nghiệm thực. Có thể dùng Δ'=b'²−ac khi b=2b'.", "discriminant"],
    ["Định lý Vi-ét và ứng dụng", "Nếu phương trình bậc hai có hai nghiệm x₁,x₂ thì x₁+x₂=−b/a và x₁x₂=c/a.", "viet"],
    ["Phương trình quy về phương trình bậc hai", "Đặt ẩn phụ hoặc biến đổi phù hợp để đưa phương trình về phương trình bậc hai; cần kiểm tra điều kiện và nghiệm nhận được.", "reduced-quadratic"],
    ["Giải bài toán bằng cách lập phương trình bậc hai", "Chọn ẩn và điều kiện, lập phương trình bậc hai từ dữ kiện, giải phương trình rồi loại nghiệm không phù hợp với tình huống.", "quadratic-word"],
    ["Bảng tần số và bảng tần số tương đối", "Tần số là số lần giá trị xuất hiện; tần số tương đối bằng tần số chia tổng số quan sát, thường viết dưới dạng phần trăm.", "frequency"],
    ["Biểu đồ tần số và biểu đồ tần số tương đối", "Biểu đồ tần số biểu diễn số lần xuất hiện; biểu đồ tần số tương đối biểu diễn tỉ lệ hoặc phần trăm tương ứng.", "frequency-chart"],
    ["Bảng tần số ghép nhóm và biểu đồ tần số ghép nhóm", "Dữ liệu số được chia thành các khoảng nhóm; tần số nhóm là số quan sát thuộc khoảng đó.", "grouped-frequency"],
    ["Một số hệ thức về cạnh và đường cao trong tam giác vuông", "Trong tam giác vuông, bình phương cạnh góc vuông bằng tích cạnh huyền với hình chiếu của cạnh ấy; bình phương đường cao bằng tích hai hình chiếu.", "right-relations"],
    ["Tỉ số lượng giác của góc nhọn", "Trong tam giác vuông: sin bằng đối/huyền, cos bằng kề/huyền, tan bằng đối/kề, cot bằng kề/đối.", "trig"],
    ["Mối quan hệ giữa tỉ số lượng giác của các góc phụ nhau", "Với hai góc nhọn phụ nhau: sin góc này bằng cos góc kia; tan góc này bằng cot góc kia.", "complementary"],
    ["Giải tam giác vuông và ứng dụng thực tế", "Dùng hệ thức cạnh, tỉ số lượng giác và tổng hai góc nhọn bằng 90° để tìm các cạnh, góc chưa biết.", "solve-triangle"],
    ["Khái niệm đường tròn và tính chất đối xứng", "Đường tròn tâm O bán kính R gồm các điểm cách O một khoảng R; đường tròn có tâm đối xứng O và nhiều trục đối xứng.", "circle"],
    ["Mối liên hệ giữa đường kính và dây của đường tròn", "Đường kính vuông góc với một dây thì đi qua trung điểm dây; đường kính là dây dài nhất của đường tròn.", "chord"],
    ["Vị trí tương đối của đường thẳng và đường tròn", "Với khoảng cách d từ tâm đến đường thẳng và bán kính R: d>R không giao, d=R tiếp xúc, d<R cắt tại hai điểm.", "line-circle"],
    ["Tiếp tuyến của đường tròn và tính chất hai tiếp tuyến cắt nhau", "Tiếp tuyến vuông góc bán kính tại tiếp điểm. Hai tiếp tuyến kẻ từ một điểm ngoài đường tròn có độ dài bằng nhau.", "tangent"],
    ["Góc ở tâm. Góc nội tiếp", "Góc ở tâm có đỉnh tại tâm; góc nội tiếp chắn cùng cung bằng nửa góc ở tâm.", "central-inscribed"],
    ["Góc tạo bởi tia tiếp tuyến và dây cung", "Số đo góc tạo bởi tia tiếp tuyến và dây cung bằng nửa số đo cung bị chắn, tương đương góc nội tiếp chắn cung đó.", "tangent-chord"],
    ["Tứ giác nội tiếp đường tròn", "Tứ giác nội tiếp có bốn đỉnh cùng nằm trên một đường tròn; tổng hai góc đối bằng 180°.", "cyclic"],
    ["Hình trụ - Diện tích xung quanh và thể tích", "Hình trụ bán kính đáy r, chiều cao h có diện tích xung quanh 2πrh và thể tích πr²h.", "cylinder"],
    ["Hình nón - Diện tích xung quanh và thể tích", "Hình nón bán kính đáy r, đường sinh l, chiều cao h có diện tích xung quanh πrl và thể tích (1/3)πr²h.", "cone"],
    ["Hình cầu - Diện tích mặt cầu và thể tích khối cầu", "Hình cầu bán kính r có diện tích mặt cầu 4πr² và thể tích khối cầu (4/3)πr³.", "sphere"]
  ];
  function makeQuestion(lessonIndex, topic, index) {
    const n = index + 1;
    let prompt;
    let answer;
    let explanation;
    let choices;
    if (topic === "linear-two") {
      answer = 2 * n;
      prompt = `Cặp số nào thỏa mãn phương trình x+y=${3 * n}, nếu x=${n}? Giá trị y là:`;
      explanation = `Thay x=${n}: y=${3 * n}−${n}=${answer}.`;
    } else if (topic === "system") {
      answer = `(${2 * n},${n})`;
      prompt = `Nghiệm của hệ x+y=${3 * n}, x−y=${n} là:`;
      explanation = `Cộng hai phương trình: 2x=${4 * n}, x=${2 * n}; suy ra y=${n}.`;
      choices = [answer, `(${n},${2 * n})`, `(${3 * n},0)`, `(0,${3 * n})`];
    } else if (topic === "substitution") {
      answer = n;
      prompt = `Giải hệ y=x+${n}, 2x+y=${4 * n}. Giá trị x là:`;
      explanation = `Thế y=x+${n}: 3x+${n}=${4 * n}, nên x=${n}.`;
    } else if (topic === "elimination") {
      answer = n;
      prompt = `Trong hệ x+y=${3 * n}, x−y=${n}, nghiệm x bằng:`;
      explanation = `Cộng hai phương trình được 2x=${4 * n}, do đó x=${n * 2}.`;
      answer = 2 * n;
    } else if (topic === "system-word") {
      answer = 2 * n;
      prompt = `Hai số có tổng ${3 * n} và hiệu ${n}. Số lớn bằng:`;
      explanation = `Số lớn bằng (tổng+hiệu):2=(${3 * n}+${n}):2=${answer}.`;
    } else if (topic === "sqrt") {
      answer = n + 2;
      prompt = `Căn bậc hai số học của ${(n + 2) ** 2} là:`;
      explanation = `${n + 2} không âm và (${n + 2})²=${(n + 2) ** 2}, nên căn bậc hai số học là ${answer}.`;
    } else if (topic === "sqrt-property") {
      answer = 2 * n;
      prompt = `Tính √(${4 * n * n}).`;
      explanation = `√(${4 * n * n})=√(4×${n * n})=2×${n}=${answer}.`;
    } else if (topic === "simplify-root") {
      answer = `${n}√2`;
      if (n === 1) answer = "√2";
      prompt = `Rút gọn √(${2 * n * n}).`;
      explanation = `√(${2 * n * n})=√(${n * n}×2)=${n}√2.`;
      choices = [answer, `${2 * n}√2`, `${n + 1}√${n}`, `${n * n + 2}√2`];
    } else if (topic === "root-product") {
      answer = 2 * n;
      prompt = `Tính √(${4 * n}) × √(${n}).`;
      explanation = `√(${4 * n}×${n})=√(${4 * n * n})=${answer}.`;
    } else if (topic === "cube-root") {
      answer = n;
      prompt = `Tính ∛(${n ** 3}).`;
      explanation = `Vì ${n}³=${n ** 3}, nên ∛(${n ** 3})=${n}.`;
    } else if (topic === "quadratic-function") {
      answer = 4 * n;
      prompt = `Cho y=${n}x². Tính y khi x=2.`;
      explanation = `Thay x=2: y=${n}×2²=${answer}.`;
    } else if (topic === "quadratic") {
      answer = `(${n},${n + 1})`;
      prompt = `Phương trình (x−${n})(x−${n + 1})=0 có nghiệm là:`;
      explanation = `Tích bằng 0 khi x−${n}=0 hoặc x−${n + 1}=0, nên hai nghiệm là ${n} và ${n + 1}.`;
      choices = [answer, `(-${n},-${n + 1})`, `(0,${n + 1})`, `(${n},-${n + 1})`];
    } else if (topic === "discriminant") {
      answer = 0;
      prompt = `Biệt thức Δ của x²−${2 * n}x+${n * n}=0 bằng:`;
      explanation = `Δ=b²−4ac=(${2 * n})²−4×1×${n * n}=0.`;
    } else if (topic === "viet") {
      answer = 2 * n + 2;
      prompt = `Một phương trình bậc hai có hai nghiệm ${n} và ${n + 2}. Tổng hai nghiệm bằng:`;
      explanation = `Tổng hai nghiệm là ${n}+${n + 2}=${answer}.`;
    } else if (topic === "reduced-quadratic") {
      answer = `±${n}`;
      prompt = `Giải phương trình x²=${n * n}.`;
      explanation = `Hai số có bình phương bằng ${n * n} là ${n} và −${n}.`;
      choices = [answer, `${n}`, `-${n}`, `${n * n + 1}`];
    } else if (topic === "quadratic-word") {
      answer = n;
      prompt = `Một hình chữ nhật có chiều rộng x cm, chiều dài x+1 cm và diện tích ${n * (n + 1)} cm². Chiều rộng là:`;
      explanation = `x(x+1)=${n * (n + 1)}; nghiệm dương phù hợp là x=${n} cm.`;
    } else if (topic === "frequency") {
      answer = 4 * n;
      prompt = `Một bảng tần số có ba giá trị với tần số ${n}, ${n + 1}, ${2 * n - 1}. Tổng số quan sát là:`;
      explanation = `Tổng tần số bằng ${n}+${n + 1}+${2 * n - 1}=${4 * n}.`;
    } else if (topic === "frequency-chart") {
      answer = 100;
      prompt = `Tổng tần số tương đối của toàn bộ các giá trị trong mẫu là bao nhiêu phần trăm?`;
      explanation = `Các tần số tương đối bao quát toàn bộ mẫu nên tổng bằng 100%.`;
      choices = ["100", "50", "10", "0"];
    } else if (topic === "grouped-frequency") {
      answer = n;
      prompt = `Khoảng [${n},${n + 5}) có ${n} số liệu. Tần số của nhóm này là:`;
      explanation = `Tần số nhóm chính là số quan sát thuộc nhóm, ở đây bằng ${n}.`;
    } else if (topic === "right-relations") {
      answer = 5 * n;
      prompt = `Tam giác vuông có hai cạnh góc vuông ${3 * n} cm và ${4 * n} cm. Cạnh huyền là:`;
      explanation = `Theo Pythagore, cạnh huyền bằng √((${3 * n})²+(${4 * n})²)=5×${n}=${answer} cm.`;
    } else if (topic === "trig") {
      answer = "3/5";
      prompt = `Trong tam giác vuông, cạnh đối góc α dài 3 và cạnh huyền dài 5. sin α bằng:`;
      explanation = `sin α=cạnh đối/cạnh huyền=3/5.`;
      choices = ["3/5", "4/5", "3/4", "5/3"];
    } else if (topic === "complementary") {
      answer = "cos α";
      prompt = `Hai góc α và β phụ nhau. sin β bằng:`;
      explanation = `Vì α+β=90°, hệ thức góc phụ nhau cho sin β=cos α.`;
      choices = ["cos α", "sin α", "tan α", "cot α"];
    } else if (topic === "solve-triangle") {
      answer = 90 - n;
      prompt = `Một tam giác vuông có một góc nhọn ${30 + n}°. Góc nhọn còn lại bằng:`;
      explanation = `Hai góc nhọn trong tam giác vuông phụ nhau nên góc còn lại=90°−(${30 + n}°)=${60 - n}°.`;
      answer = 60 - n;
    } else if (topic === "circle") {
      answer = 2 * n;
      prompt = `Đường tròn bán kính ${n} cm có đường kính dài:`;
      explanation = `Đường kính bằng hai lần bán kính: d=2×${n}=${answer} cm.`;
    } else if (topic === "chord") {
      answer = 2 * n;
      prompt = `Đường tròn bán kính ${n} cm có dây lớn nhất dài:`;
      explanation = `Dây lớn nhất là đường kính, dài 2R=2×${n}=${answer} cm.`;
    } else if (topic === "line-circle") {
      answer = "tiếp xúc";
      prompt = `Đường thẳng cách tâm đường tròn bán kính ${n} cm một khoảng ${n} cm có vị trí tương đối nào?`;
      explanation = `Khoảng cách từ tâm đến đường thẳng bằng bán kính nên đường thẳng tiếp xúc đường tròn.`;
      choices = ["tiếp xúc", "không giao nhau", "cắt tại hai điểm", "đi qua tâm"];
    } else if (topic === "tangent") {
      answer = n;
      prompt = `Từ điểm P ngoài đường tròn kẻ hai tiếp tuyến PA và PB. Nếu PA=${n} cm thì PB bằng:`;
      explanation = `Hai tiếp tuyến kẻ từ một điểm ngoài đường tròn có độ dài bằng nhau, nên PB=${n} cm.`;
    } else if (topic === "central-inscribed") {
      answer = 50 + n;
      prompt = `Góc ở tâm chắn một cung bằng ${2 * (50 + n)}°. Góc nội tiếp cùng chắn cung đó bằng:`;
      explanation = `Góc nội tiếp bằng nửa góc ở tâm: ${2 * (50 + n)}°:2=${answer}°.`;
    } else if (topic === "tangent-chord") {
      answer = 30 + n;
      prompt = `Góc nội tiếp chắn cung AB bằng ${answer}°. Góc giữa tiếp tuyến và dây AB bằng:`;
      explanation = `Góc giữa tiếp tuyến và dây cung bằng góc nội tiếp cùng chắn cung, nên bằng ${answer}°.`;
    } else if (topic === "cyclic") {
      answer = 180 - (50 + n);
      prompt = `Tứ giác nội tiếp có một góc bằng ${50 + n}°. Góc đối diện bằng:`;
      explanation = `Hai góc đối của tứ giác nội tiếp bù nhau nên góc đối diện=180°−${50 + n}°=${answer}°.`;
    } else if (topic === "cylinder") {
      answer = `${2 * n}π`;
      prompt = `Hình trụ bán kính đáy ${n} cm và chiều cao 1 cm có diện tích xung quanh bằng:`;
      explanation = `Sxq=2πrh=2π×${n}×1=${answer} cm².`;
      choices = [answer, `${2 * n + 1}π`, `${2 * n - 1}π`, `${4 * n}π`];
    } else if (topic === "cone") {
      answer = `${n * n}π/3`;
      prompt = `Hình nón có bán kính đáy ${n} cm và chiều cao 1 cm có thể tích bằng:`;
      explanation = `V=(1/3)πr²h=(1/3)π×${n * n}×1=${answer} cm³.`;
      choices = [answer, `${n * n + 1}π/3`, `${n * n + 2}π/3`, `${n * n + 3}π/3`];
    } else if (topic === "sphere") {
      answer = `${4 * n * n}π`;
      prompt = `Hình cầu bán kính ${n} cm có diện tích mặt cầu bằng:`;
      explanation = `S=4πr²=4π×${n * n}=${answer} cm².`;
      choices = [answer, `${n * n}π`, `${2 * n * n}π`, `${3 * n * n}π`];
    }
    const correct = String(answer);
    const options = choices || [correct, String(Number(answer) + 1), String(Number(answer) - 1), String(Number(answer) + 2)];
    return q(`t9-b${String(lessonIndex + 1).padStart(2, "0")}-q${String(index + 1).padStart(2, "0")}`, levels[index], prompt, options, 0, explanation);
  }
  const lessons = curriculum.map(([title, theory, topic], lessonIndex) => {
    const chapter = lessonIndex < 5 ? "Chương 1 · Phương trình và hệ phương trình"
      : lessonIndex < 10 ? "Chương 2 · Căn bậc hai và căn bậc ba"
      : lessonIndex < 16 ? "Chương 3 · Hàm số và phương trình bậc hai"
      : lessonIndex < 19 ? "Chương 4 · Tần số và tần số tương đối"
      : lessonIndex < 23 ? "Chương 5 · Hệ thức lượng trong tam giác vuông"
      : lessonIndex < 30 ? "Chương 6 · Đường tròn"
      : "Chương 7 · Hình khối tròn xoay";
    return {
      id: `toan9-bai-${lessonIndex + 1}`,
      title,
      area: chapter,
      theory,
      exercises: Array.from({ length: 20 }, (_, index) => makeQuestion(lessonIndex, topic, index))
    };
  });
  const course = {
    title: "Toán 9 · Kết nối tri thức",
    lessons,
    exams: [
      { id: "t9-15p", type: "15p", title: "Kiểm tra 15 phút · Toán 9", duration: 15, questionIds: ["t9-b01-q01", "t9-b06-q02", "t9-b11-q03", "t9-b17-q04", "t9-b20-q05"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm." },
      { id: "t9-giuaki", type: "giuaki", title: "Kiểm tra giữa kì · Toán 9", duration: 45, questionIds: ["t9-b05-q11", "t9-b13-q12", "t9-b21-q13", "t9-b28-q14", "t9-b31-q15"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm. Ghi điều kiện, phép biến đổi và kết luận." },
      { id: "t9-cuoiki", type: "cuoiki", title: "Kiểm tra cuối kì · Toán 9", duration: 60, questionIds: ["t9-b16-q16", "t9-b19-q17", "t9-b23-q18", "t9-b30-q19", "t9-b33-q20"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm. Nêu đủ lập luận ở các câu vận dụng cao." }
    ]
  };
  register(9, "toan", course);
})();
