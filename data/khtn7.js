(() => {
  const { exercise: q, register } = window.studyMapData;
  const levels = [
    "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet",
    "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu",
    "van-dung", "van-dung", "van-dung", "van-dung", "van-dung",
    "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao"
  ];
  const curriculum = [
    ["Phương pháp học tập và nghiên cứu môn KHTN", "Nghiên cứu KHTN gồm quan sát, đặt câu hỏi, hình thành giả thuyết, thiết kế và tiến hành kiểm chứng, xử lí kết quả và rút kết luận.", "Kĩ năng khoa học", "method"],
    ["Nguyên tử và cấu tạo nguyên tử", "Nguyên tử gồm hạt nhân mang điện dương và electron mang điện âm. Hạt nhân có proton và neutron; nguyên tử trung hòa có số proton bằng số electron.", "Hóa học", "atom"],
    ["Nguyên tố hóa học", "Nguyên tố hóa học gồm các nguyên tử có cùng số proton. Số proton là số hiệu nguyên tử và xác định nguyên tố.", "Hóa học", "element"],
    ["Sơ lược về bảng tuần hoàn các nguyên tố hóa học", "Bảng tuần hoàn sắp xếp các nguyên tố theo chiều tăng dần điện tích hạt nhân; mỗi ô nguyên tố cho biết các thông tin cơ bản.", "Hóa học", "periodic"],
    ["Phân tử - Đơn chất - Hợp chất", "Phân tử gồm các nguyên tử liên kết. Đơn chất tạo nên từ một nguyên tố; hợp chất tạo nên từ hai nguyên tố hóa học trở lên.", "Hóa học", "molecule"],
    ["Liên kết hóa học (Liên kết ion và cộng hóa trị)", "Liên kết ion hình thành do lực hút giữa các ion trái dấu; liên kết cộng hóa trị hình thành khi các nguyên tử dùng chung electron.", "Hóa học", "bond"],
    ["Hóa trị và công thức hóa học", "Hóa trị biểu thị khả năng liên kết của nguyên tử. Trong công thức hợp chất, quy tắc hóa trị giúp xác định chỉ số nguyên tử.", "Hóa học", "valency"],
    ["Tốc độ chuyển động", "Tốc độ đặc trưng cho mức độ nhanh hay chậm của chuyển động; v=s/t, trong đó s là quãng đường, t là thời gian.", "Vật lý", "speed"],
    ["Đo tốc độ", "Tốc độ có thể đo trực tiếp bằng tốc kế hoặc xác định từ quãng đường và thời gian. Đơn vị thường dùng là m/s và km/h; 1 m/s=3,6 km/h.", "Vật lý", "speed-measure"],
    ["Đồ thị quãng đường - thời gian", "Đồ thị quãng đường-thời gian biểu diễn sự phụ thuộc của quãng đường vào thời gian; độ dốc lớn hơn thể hiện tốc độ lớn hơn.", "Vật lý", "graph"],
    ["Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông", "Tốc độ càng lớn thì quãng đường dừng xe thường càng dài và hậu quả va chạm càng nghiêm trọng; cần tuân thủ giới hạn tốc độ.", "Vật lý", "traffic"],
    ["Sóng âm và sự truyền âm", "Âm phát ra do vật dao động; âm truyền qua môi trường vật chất như khí, lỏng, rắn và không truyền trong chân không.", "Vật lý", "sound"],
    ["Độ cao và độ to của âm", "Độ cao của âm liên quan đến tần số dao động; tần số càng lớn âm càng cao. Độ to liên quan đến biên độ dao động.", "Vật lý", "pitch"],
    ["Phản xạ âm và chống ô nhiễm tiếng ồn", "Âm gặp vật cản có thể bị phản xạ. Giảm tiếng ồn bằng cách giảm nguồn âm, ngăn đường truyền hoặc bảo vệ người nghe.", "Vật lý", "noise"],
    ["Năng lượng ánh sáng - Tia sáng - Vùng bóng tối", "Ánh sáng truyền theo đường thẳng trong môi trường trong suốt, đồng tính. Vật cản sáng tạo bóng tối phía sau vật.", "Vật lý", "light"],
    ["Định luật phản xạ ánh sáng", "Trong phản xạ ánh sáng, tia tới, tia phản xạ và pháp tuyến cùng nằm trong một mặt phẳng; góc phản xạ bằng góc tới.", "Vật lý", "reflection"],
    ["Ảnh của vật tạo bởi gương phẳng", "Ảnh qua gương phẳng là ảnh ảo, không hứng được trên màn; ảnh và vật đối xứng qua mặt gương, khoảng cách đến gương bằng nhau.", "Vật lý", "mirror"],
    ["Nam châm và lực từ", "Nam châm hút một số vật liệu như sắt, thép; hai cực cùng tên đẩy nhau, khác tên hút nhau.", "Vật lý", "magnet"],
    ["Từ trường và từ trường Trái Đất", "Từ trường tồn tại quanh nam châm và dòng điện, có thể tác dụng lực từ. Trái Đất có từ trường và kim la bàn định hướng theo nó.", "Vật lý", "field"],
    ["Chế tạo nam châm điện đơn giản", "Dòng điện chạy qua cuộn dây tạo từ trường; quấn dây quanh lõi sắt và nối nguồn điện có thể tạo nam châm điện.", "Vật lý", "electromagnet"],
    ["Trao đổi chất và chuyển hóa năng lượng ở sinh vật", "Sinh vật thu nhận chất và năng lượng, biến đổi chúng để duy trì hoạt động sống, đồng thời thải sản phẩm ra môi trường.", "Sinh học", "exchange"],
    ["Quang hợp ở thực vật", "Quang hợp sử dụng nước và carbon dioxide, nhờ năng lượng ánh sáng và diệp lục, tạo chất hữu cơ và oxygen.", "Sinh học", "photosynthesis"],
    ["Một số yếu tố ảnh hưởng đến quang hợp", "Cường độ ánh sáng, nồng độ carbon dioxide, nước và nhiệt độ ảnh hưởng đến tốc độ quang hợp.", "Sinh học", "photo-factor"],
    ["Hô hấp tế bào", "Hô hấp tế bào phân giải chất hữu cơ, thường sử dụng oxygen, giải phóng năng lượng và tạo carbon dioxide, nước.", "Sinh học", "respiration"],
    ["Trao đổi khí ở sinh vật", "Sinh vật trao đổi khí với môi trường; thực vật trao đổi khí qua khí khổng, nhiều động vật trao đổi qua cơ quan hô hấp chuyên hóa.", "Sinh học", "gas"],
    ["Trao đổi nước và dinh dưỡng ở thực vật", "Rễ hấp thụ nước và ion khoáng; mạch gỗ vận chuyển nước, muối khoáng lên thân lá; mạch rây vận chuyển chất hữu cơ.", "Sinh học", "plant-water"],
    ["Trao đổi nước và dinh dưỡng ở động vật", "Động vật lấy nước và chất dinh dưỡng qua thức ăn, tiêu hóa và hấp thụ vào cơ thể; chất thải được đào thải.", "Sinh học", "animal-water"],
    ["Cảm ứng ở sinh vật và tập tính ở động vật", "Cảm ứng là khả năng tiếp nhận và phản ứng với kích thích. Tập tính là chuỗi phản ứng của động vật trước kích thích từ môi trường.", "Sinh học", "response"],
    ["Sinh trưởng và phát triển ở sinh vật", "Sinh trưởng là tăng kích thước, khối lượng cơ thể; phát triển gồm biến đổi về cấu trúc và chức năng trong vòng đời.", "Sinh học", "growth"],
    ["Sinh sản vô tính ở sinh vật", "Sinh sản vô tính không có sự kết hợp giao tử; con thường giống cơ thể mẹ về đặc điểm di truyền, trừ biến đổi phát sinh.", "Sinh học", "asexual"],
    ["Sinh sản hữu tính ở sinh vật", "Sinh sản hữu tính có sự kết hợp giao tử đực và giao tử cái tạo hợp tử; con nhận vật chất di truyền từ cả bố và mẹ.", "Sinh học", "sexual"]
  ];
  function makeQuestion(lessonIndex, topic, index) {
    const n = index + 1;
    let prompt;
    let answer;
    let explanation;
    let choices;
    if (topic === "method") {
      answer = "kiểm chứng giả thuyết bằng quan sát hoặc thí nghiệm";
      prompt = "Sau khi hình thành giả thuyết, bước nào giúp kiểm tra giả thuyết?";
      explanation = "Cần thiết kế và tiến hành quan sát hoặc thí nghiệm để kiểm chứng giả thuyết.";
      choices = [answer, "chọn kết luận trước khi thu thập dữ liệu", "bỏ qua kết quả không phù hợp", "thay đổi số liệu đo"];
    } else if (topic === "atom") {
      answer = n + 4;
      prompt = `Nguyên tử trung hòa có ${answer} proton thì có bao nhiêu electron?`;
      explanation = `Nguyên tử trung hòa có số electron bằng số proton, nên có ${answer} electron.`;
    } else if (topic === "element") {
      answer = "nguyên tố hóa học";
      prompt = `Một nguyên tử có ${n + 3} proton. Số proton này xác định điều gì?`;
      explanation = `Số proton trong hạt nhân xác định nguyên tố hóa học.`;
      choices = ["nguyên tố hóa học", "số neutron chính xác", "trạng thái vật chất", "số phân tử trong mẫu"];
    } else if (topic === "periodic") {
      answer = "điện tích hạt nhân";
      prompt = `Trong bảng tuần hoàn hiện đại, các nguyên tố được sắp xếp theo chiều tăng dần của:`;
      explanation = "Các nguyên tố được sắp xếp theo chiều tăng dần điện tích hạt nhân, tương ứng số hiệu nguyên tử.";
      choices = ["điện tích hạt nhân", "khối lượng mẫu", "nhiệt độ nóng chảy", "số phân tử"];
    } else if (topic === "molecule") {
      const atoms = n % 4 + 2;
      answer = atoms;
      prompt = `Một phân tử có công thức X${atoms}. Phân tử đó gồm bao nhiêu nguyên tử X?`;
      explanation = `Chỉ số ${atoms} trong công thức cho biết mỗi phân tử có ${atoms} nguyên tử X.`;
    } else if (topic === "bond") {
      answer = "dùng chung electron";
      prompt = "Liên kết cộng hóa trị hình thành khi các nguyên tử:";
      explanation = "Trong liên kết cộng hóa trị, các nguyên tử dùng chung một hay nhiều cặp electron.";
      choices = [answer, "mất toàn bộ proton", "không tương tác", "cùng mang điện tích dương"];
    } else if (topic === "valency") {
      answer = "Al₂O₃";
      prompt = "Nhôm hóa trị III, oxygen hóa trị II. Công thức hợp chất tạo bởi hai nguyên tố này là:";
      explanation = "Quy tắc hóa trị cho tỉ lệ Al:O=2:3, nên công thức là Al₂O₃.";
      choices = ["Al₂O₃", "AlO", "Al₃O₂", "AlO₃"];
    } else if (topic === "speed" || topic === "speed-measure") {
      const distance = 6 * n;
      const time = 2 * n;
      answer = "3 m/s";
      prompt = `Một vật đi được ${distance} m trong ${time} s. Tốc độ của vật là:`;
      explanation = `v=s/t=${distance}:${time}=3 m/s.`;
      choices = [answer, "2 m/s", "4 m/s", "12 m/s"];
    } else if (topic === "graph") {
      answer = "4 m/s";
      prompt = `Trên đồ thị quãng đường-thời gian, vật đi ${4 * n} m trong ${n} s. Tốc độ là:`;
      explanation = `Tốc độ bằng độ tăng quãng đường chia thời gian: ${4 * n}:${n}=4 m/s.`;
      choices = [answer, "2 m/s", "6 m/s", "8 m/s"];
    } else if (topic === "traffic") {
      answer = 20 * n;
      prompt = `Một xe đi với tốc độ 20 m/s trong ${n} s. Quãng đường xe đi được là:`;
      explanation = `s=vt=20×${n}=${answer} m; đi đúng tốc độ giúp có thêm thời gian phản ứng.`;
    } else if (topic === "sound") {
      answer = "dao động";
      prompt = "Âm phát ra khi nguồn âm:";
      explanation = "Nguồn âm phát ra âm khi dao động.";
      choices = ["dao động", "đứng yên tuyệt đối", "biến mất", "không có môi trường"];
    } else if (topic === "pitch") {
      answer = "tần số dao động";
      prompt = "Độ cao của âm phụ thuộc chủ yếu vào:";
      explanation = "Tần số dao động càng lớn thì âm nghe càng cao.";
      choices = ["tần số dao động", "màu sắc nguồn âm", "khối lượng không khí", "khoảng cách đến nguồn trong mọi trường hợp"];
    } else if (topic === "noise") {
      answer = "giảm tiếng ồn tại nguồn hoặc ngăn đường truyền âm";
      prompt = "Biện pháp nào phù hợp để hạn chế ô nhiễm tiếng ồn?";
      explanation = "Có thể giảm tiếng ồn bằng cách giảm nguồn âm, ngăn đường truyền hoặc bảo vệ người nghe.";
      choices = [answer, "tăng âm lượng loa", "đứng sát nguồn ồn", "mở thêm nhiều nguồn âm"];
    } else if (topic === "light") {
      answer = "đường thẳng";
      prompt = "Trong môi trường trong suốt và đồng tính, ánh sáng truyền theo:";
      explanation = "Ánh sáng truyền theo đường thẳng trong môi trường trong suốt, đồng tính.";
      choices = ["đường thẳng", "đường gấp khúc bất kì", "đường tròn", "đường xoắn ốc"];
    } else if (topic === "reflection") {
      answer = 30 + n;
      prompt = `Góc tới bằng ${answer}°. Góc phản xạ bằng:`;
      explanation = `Theo định luật phản xạ ánh sáng, góc phản xạ bằng góc tới: ${answer}°.`;
    } else if (topic === "mirror") {
      answer = n;
      prompt = `Vật cách gương phẳng ${n} cm. Ảnh cách gương bao nhiêu?`;
      explanation = "Ảnh qua gương phẳng cách gương một khoảng bằng khoảng cách từ vật đến gương.";
    } else if (topic === "magnet") {
      answer = "hút nhau";
      prompt = "Đưa hai cực khác tên của hai nam châm lại gần nhau, chúng sẽ:";
      explanation = "Hai cực khác tên hút nhau; hai cực cùng tên đẩy nhau.";
      choices = ["hút nhau", "đẩy nhau", "không tác dụng lực", "luôn nóng chảy"];
    } else if (topic === "field") {
      answer = "kim la bàn định hướng theo từ trường Trái Đất";
      prompt = "Vì sao kim la bàn có thể định hướng?";
      explanation = "Kim nam châm của la bàn chịu tác dụng của từ trường Trái Đất.";
      choices = [answer, "do không khí đẩy kim về phía bắc", "do kim tự phát sáng", "do trọng lực làm kim quay ngang"];
    } else if (topic === "electromagnet") {
      answer = "quấn dây dẫn thành cuộn quanh lõi sắt và cho dòng điện chạy qua";
      prompt = "Cách đơn giản để tạo nam châm điện là:";
      explanation = "Dòng điện trong cuộn dây tạo từ trường; lõi sắt làm tăng tác dụng từ.";
      choices = [answer, "đặt dây rời cạnh giấy", "làm lạnh một thanh gỗ", "ngắt dòng điện khỏi cuộn dây"];
    } else if (topic === "exchange") {
      answer = "thu nhận, biến đổi và thải chất";
      prompt = "Trao đổi chất và chuyển hóa năng lượng ở sinh vật gồm hoạt động nào?";
      explanation = "Sinh vật thu nhận chất và năng lượng, biến đổi chúng để duy trì hoạt động sống, rồi thải sản phẩm ra môi trường.";
      choices = [answer, "chỉ tăng kích thước cơ thể", "chỉ di chuyển đến nơi có thức ăn", "ngừng trao đổi với môi trường"];
    } else if (topic === "photosynthesis" || topic === "photo-factor") {
      answer = "ánh sáng";
      prompt = "Yếu tố nào cần cho quang hợp của thực vật?";
      explanation = "Quang hợp cần ánh sáng, nước, carbon dioxide và diệp lục.";
      choices = ["ánh sáng", "bóng tối hoàn toàn", "không cần nước", "không cần carbon dioxide"];
    } else if (topic === "respiration") {
      answer = "giải phóng năng lượng từ chất hữu cơ";
      prompt = "Vai trò chính của hô hấp tế bào là:";
      explanation = "Hô hấp tế bào phân giải chất hữu cơ và giải phóng năng lượng cho hoạt động sống.";
      choices = [answer, "tạo ánh sáng Mặt Trời", "ngừng mọi hoạt động tế bào", "biến oxygen thành chất hữu cơ"];
    } else if (topic === "gas") {
      answer = "trao đổi khí với môi trường";
      prompt = "Trao đổi khí ở sinh vật là quá trình:";
      explanation = "Sinh vật lấy khí cần thiết và thải khí sản phẩm ra môi trường.";
      choices = [answer, "chỉ trao đổi chất rắn", "không liên quan đến hoạt động sống", "chỉ xảy ra ở đá"];
    } else if (topic === "plant-water") {
      answer = "mạch gỗ";
      prompt = "Ở thực vật, nước và muối khoáng được vận chuyển chủ yếu lên thân, lá qua:";
      explanation = "Mạch gỗ vận chuyển nước và muối khoáng từ rễ lên các bộ phận phía trên.";
      choices = ["mạch gỗ", "mạch rây", "khí khổng", "lục lạp"];
    } else if (topic === "animal-water") {
      answer = "thức ăn và nước uống";
      prompt = "Động vật thường thu nhận nước và chất dinh dưỡng từ:";
      explanation = "Động vật lấy thức ăn và nước uống, sau đó tiêu hóa và hấp thụ chất cần thiết.";
      choices = [answer, "ánh sáng trực tiếp", "đất qua lá", "đá rắn"];
    } else if (topic === "response") {
      answer = "phản ứng trước kích thích";
      prompt = "Cảm ứng ở sinh vật là khả năng:";
      explanation = "Cảm ứng giúp sinh vật nhận biết và phản ứng với kích thích từ môi trường.";
      choices = [answer, "tạo ra ánh sáng", "ngừng trao đổi chất", "chỉ tăng kích thước"];
    } else if (topic === "growth") {
      answer = "tăng kích thước hoặc khối lượng cơ thể";
      prompt = "Sinh trưởng ở sinh vật được biểu hiện chủ yếu bằng:";
      explanation = "Sinh trưởng là sự tăng kích thước và khối lượng cơ thể.";
      choices = [answer, "mất toàn bộ tế bào", "ngừng phát triển", "chỉ thay đổi nơi sống"];
    } else if (topic === "asexual") {
      answer = "không có sự kết hợp giao tử";
      prompt = "Đặc điểm của sinh sản vô tính là:";
      explanation = "Sinh sản vô tính không có sự kết hợp giao tử đực và cái.";
      choices = [answer, "luôn cần hai cơ thể bố mẹ", "có sự thụ tinh", "không tạo cá thể mới"];
    } else if (topic === "sexual") {
      answer = "sự kết hợp giao tử đực và giao tử cái";
      prompt = "Sinh sản hữu tính có đặc điểm cơ bản là:";
      explanation = "Giao tử đực và giao tử cái kết hợp tạo thành hợp tử.";
      choices = [answer, "không tạo hợp tử", "chỉ phân đôi một tế bào", "không truyền vật chất di truyền"];
    }
    const correct = String(answer);
    const options = choices || [correct, String(Number(answer) + 1), String(Number(answer) - 1), String(Number(answer) + 2)];
    return q(`k7-b${String(lessonIndex + 1).padStart(2, "0")}-q${String(index + 1).padStart(2, "0")}`, levels[index], prompt, options, 0, explanation);
  }
  const lessons = curriculum.map(([title, theory, area, topic], lessonIndex) => ({
    id: `khtn7-bai-${lessonIndex + 1}`,
    title,
    area,
    theory,
    exercises: Array.from({ length: 20 }, (_, index) => makeQuestion(lessonIndex, topic, index))
  }));
  const course = {
    title: "Khoa học tự nhiên 7 · Kết nối tri thức",
    lessons,
    exams: [
      { id: "k7-15p", type: "15p", title: "Kiểm tra 15 phút · KHTN 7", duration: 15, questionIds: ["k7-b01-q01", "k7-b02-q02", "k7-b08-q03", "k7-b12-q04", "k7-b21-q05"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm." },
      { id: "k7-giuaki", type: "giuaki", title: "Kiểm tra giữa kì · KHTN 7", duration: 45, questionIds: ["k7-b07-q11", "k7-b10-q12", "k7-b16-q13", "k7-b25-q14", "k7-b28-q15"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm; ghi rõ công thức và giải thích." },
      { id: "k7-cuoiki", type: "cuoiki", title: "Kiểm tra cuối kì · KHTN 7", duration: 60, questionIds: ["k7-b11-q16", "k7-b20-q17", "k7-b22-q18", "k7-b30-q19", "k7-b31-q20"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm; nêu căn cứ khoa học." }
    ]
  };
  register(7, "khtn", course);
})();
