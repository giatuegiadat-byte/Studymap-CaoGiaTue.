(() => {
  const { exercise: q, register } = window.studyMapData;
  const levels = [
    "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet",
    "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu",
    "van-dung", "van-dung", "van-dung", "van-dung", "van-dung",
    "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao"
  ];
  const curriculum = [
    ["Biến đổi vật lý và biến đổi hóa học", "Biến đổi vật lý không tạo chất mới; biến đổi hóa học tạo chất mới. Dấu hiệu phản ứng có thể gồm đổi màu, tạo khí hoặc kết tủa, phát sáng hay tỏa nhiệt.", "Hóa học", "changes"],
    ["Phản ứng hóa học và năng lượng phản ứng", "Phản ứng hóa học tạo chất mới từ chất ban đầu. Phản ứng tỏa năng lượng truyền năng lượng ra môi trường; phản ứng thu năng lượng nhận năng lượng từ môi trường.", "Hóa học", "reaction"],
    ["Định luật bảo toàn khối lượng và phương trình hóa học", "Trong phản ứng kín, tổng khối lượng chất tham gia bằng tổng khối lượng sản phẩm. Phương trình hóa học được cân bằng để bảo toàn số nguyên tử từng nguyên tố.", "Hóa học", "equation"],
    ["Mol và tỉ khối của chất khí", "Số mol n=m/M. Tỉ khối khí A so với khí B là dA/B=MA/MB; tỉ khối khí A so với không khí xấp xỉ MA/29.", "Hóa học", "mole"],
    ["Tính toán theo phương trình hóa học", "Hệ số phương trình đã cân bằng cho biết tỉ lệ số mol các chất. Từ lượng chất đã biết có thể tính lượng chất tham gia hoặc sản phẩm.", "Hóa học", "stoich"],
    ["Nồng độ dung dịch (C% và CM)", "C%=m chất tan/m dung dịch×100%; CM=n chất tan/V dung dịch. Khi pha loãng, số mol chất tan được bảo toàn.", "Hóa học", "concentration"],
    ["Tốc độ phản ứng và chất xúc tác", "Tốc độ phản ứng cho biết mức độ nhanh chậm của phản ứng. Nhiệt độ, nồng độ, diện tích tiếp xúc và chất xúc tác có thể làm thay đổi tốc độ.", "Hóa học", "rate"],
    ["Khái niệm về Acid", "Acid là hợp chất có hydrogen có thể được thay thế bằng kim loại trong phản ứng phù hợp. Dung dịch acid làm quỳ tím hóa đỏ; acid tác dụng với base tạo muối và nước.", "Hóa học", "acid"],
    ["Base và Thang pH", "Base là hợp chất có nguyên tử kim loại liên kết với nhóm hydroxide. Dung dịch base làm quỳ tím hóa xanh; pH<7 là acid, pH=7 trung tính, pH>7 là base.", "Hóa học", "base"],
    ["Oxide", "Oxide là hợp chất gồm hai nguyên tố, trong đó có oxygen. Oxide kim loại thường là oxide base; một số oxide phi kim là oxide acid.", "Hóa học", "oxide"],
    ["Salt (Muối)", "Muối gồm cation kim loại hoặc ammonium và anion gốc acid. Muối có thể được tạo thành trong phản ứng acid-base và một số phản ứng trao đổi.", "Hóa học", "salt"],
    ["Phân bón hóa học", "Phân bón cung cấp nguyên tố dinh dưỡng cho cây. N, P, K là các nguyên tố dinh dưỡng đa lượng; dùng phân bón đúng loại, liều lượng và thời điểm giúp hạn chế ô nhiễm.", "Hóa học", "fertilizer"],
    ["Khối lượng riêng và áp suất chất rắn", "Khối lượng riêng D=m/V. Áp suất chất rắn p=F/S; với cùng lực, diện tích tiếp xúc nhỏ hơn tạo áp suất lớn hơn.", "Vật lý", "density"],
    ["Áp suất chất lỏng và áp suất khí quyển", "Áp suất chất lỏng tăng theo độ sâu và khối lượng riêng. Chất lỏng gây áp suất theo mọi phương; khí quyển cũng gây áp suất lên các vật.", "Vật lý", "liquid-pressure"],
    ["Lực đẩy Archimedes", "Vật nhúng trong chất lỏng chịu lực đẩy hướng lên, có độ lớn bằng trọng lượng phần chất lỏng bị vật chiếm chỗ. Vật nổi cân bằng khi lực đẩy bằng trọng lượng.", "Vật lý", "archimedes"],
    ["Tác dụng làm quay của lực - Momen lực", "Momen lực đặc trưng cho tác dụng làm quay của lực, phụ thuộc độ lớn lực và cánh tay đòn; M=F×d.", "Vật lý", "moment"],
    ["Đòn bẩy và ứng dụng", "Đòn bẩy là máy cơ đơn giản có điểm tựa. Tác dụng của lực phụ thuộc khoảng cách từ giá lực đến điểm tựa; đòn bẩy có thể đổi hướng hoặc độ lớn lực.", "Vật lý", "lever"],
    ["Biểu diễn lực và tác dụng của lực", "Lực được biểu diễn bằng mũi tên chỉ điểm đặt, phương, chiều và độ lớn theo tỉ xích. Lực có thể làm thay đổi chuyển động hoặc biến dạng vật.", "Vật lý", "force"],
    ["Điện tích và sự nhiễm điện", "Vật có thể nhiễm điện do cọ xát. Điện tích cùng loại đẩy nhau, khác loại hút nhau; vật nhiễm điện có thể hút vật nhẹ trung hòa.", "Vật lý", "charge"],
    ["Dòng điện và nguồn điện", "Dòng điện là dòng chuyển dời có hướng của các hạt mang điện. Nguồn điện duy trì hiệu điện thế để tạo dòng điện trong mạch kín.", "Vật lý", "current"],
    ["Mạch điện đơn giản và sơ đồ mạch điện", "Mạch điện cơ bản gồm nguồn điện, dây dẫn, thiết bị tiêu thụ và công tắc. Mạch kín cho dòng điện chạy; sơ đồ dùng kí hiệu quy ước.", "Vật lý", "circuit"],
    ["Tác dụng của dòng điện", "Dòng điện có thể gây tác dụng nhiệt, phát sáng, từ, hóa học và sinh lí. Thiết bị điện được thiết kế để khai thác một hay nhiều tác dụng.", "Vật lý", "electric-effects"],
    ["Cường độ dòng điện và hiệu điện thế", "Cường độ dòng điện I đo bằng ampe kế, đơn vị ampere (A); hiệu điện thế U đo bằng vôn kế, đơn vị volt (V). Dụng cụ đo được mắc đúng cách trong mạch.", "Vật lý", "measure-electric"],
    ["Năng lượng nhiệt và nhiệt độ", "Nhiệt độ biểu thị mức độ nóng lạnh; năng lượng nhiệt gắn với chuyển động hỗn độn của các hạt cấu tạo nên vật. Nhiệt độ và năng lượng nhiệt không đồng nhất.", "Vật lý", "thermal-energy"],
    ["Sự truyền nhiệt (Dẫn nhiệt, đối lưu, bức xạ nhiệt)", "Nhiệt truyền từ nơi có nhiệt độ cao sang nơi thấp hơn. Dẫn nhiệt phổ biến ở chất rắn; đối lưu xảy ra trong chất lỏng, chất khí; bức xạ nhiệt truyền được trong chân không.", "Vật lý", "heat-transfer"],
    ["Sự nở vì nhiệt", "Phần lớn chất rắn, lỏng, khí nở ra khi nóng lên và co lại khi lạnh đi. Các chất nở vì nhiệt khác nhau; hiện tượng này cần được tính đến trong kĩ thuật.", "Vật lý", "expansion"],
    ["Khái quát cơ thể người", "Cơ thể người được tổ chức từ tế bào, mô, cơ quan đến hệ cơ quan. Các hệ phối hợp và điều hòa để duy trì hoạt động sống.", "Sinh học", "human-body"],
    ["Hệ vận động ở người", "Hệ vận động gồm xương, khớp và cơ. Bộ xương nâng đỡ, bảo vệ cơ thể; cơ co và dãn tạo vận động; tư thế và vận động hợp lí giúp bảo vệ hệ này.", "Sinh học", "movement"],
    ["Dinh dưỡng và hệ tiêu hóa ở người", "Hệ tiêu hóa biến đổi thức ăn, hấp thụ chất dinh dưỡng và thải bã. Ăn đa dạng, đủ chất và bảo đảm vệ sinh giúp duy trì sức khỏe.", "Sinh học", "digestion"],
    ["Máu và hệ tuần hoàn ở người", "Máu gồm huyết tương và các tế bào máu. Tim bơm máu qua mạch; hệ tuần hoàn vận chuyển khí, chất dinh dưỡng, chất thải và góp phần điều hòa cơ thể.", "Sinh học", "circulation"],
    ["Miễn dịch và phòng bệnh ở người", "Hệ miễn dịch nhận biết và chống tác nhân gây bệnh. Tiêm chủng, vệ sinh, dinh dưỡng hợp lí và phòng lây nhiễm góp phần bảo vệ sức khỏe.", "Sinh học", "immunity"],
    ["Hệ hô hấp ở người", "Hệ hô hấp gồm đường dẫn khí và phổi; trao đổi khí đưa oxygen vào máu và thải carbon dioxide. Tránh khói thuốc, bụi và luyện tập phù hợp giúp bảo vệ hô hấp.", "Sinh học", "respiration"],
    ["Hệ bài tiết ở người", "Hệ bài tiết nước tiểu gồm thận, ống dẫn nước tiểu, bóng đái và ống đái. Thận lọc máu, tạo nước tiểu và góp phần duy trì cân bằng nước, muối.", "Sinh học", "excretion"],
    ["Hệ thần kinh và các giác quan ở người", "Hệ thần kinh tiếp nhận, xử lí thông tin và điều khiển hoạt động. Cơ quan cảm giác tiếp nhận kích thích; cần bảo vệ mắt, tai và duy trì giấc ngủ hợp lí.", "Sinh học", "nervous"],
    ["Hệ nội tiết ở người", "Tuyến nội tiết tiết hormone vào máu để điều hòa hoạt động cơ thể. Hormone có tác dụng đặc hiệu; sự phối hợp thần kinh-nội tiết giúp duy trì ổn định.", "Sinh học", "endocrine"],
    ["Đa dạng sinh thái và môi trường sống", "Môi trường sống gồm các nhân tố sinh thái vô sinh và hữu sinh. Đa dạng sinh thái thể hiện sự phong phú về hệ sinh thái, môi trường và sinh vật.", "Sinh học", "environment"],
    ["Quần thể sinh vật và quần xã sinh vật", "Quần thể gồm các cá thể cùng loài sống trong khu vực, thời gian xác định và có khả năng sinh sản. Quần xã gồm nhiều quần thể khác loài cùng sống và tương tác.", "Sinh học", "population"],
    ["Hệ sinh thái - Chuỗi và lưới thức ăn", "Hệ sinh thái gồm quần xã sinh vật và môi trường sống, có trao đổi vật chất và năng lượng. Chuỗi thức ăn thể hiện quan hệ dinh dưỡng; nhiều chuỗi liên kết thành lưới thức ăn.", "Sinh học", "ecosystem"]
  ];
  function makeQuestion(lessonIndex, lesson, index) {
    const n = index + 1;
    const v = index % 5 + 1;
    const stage = Math.floor(index / 5);
    let prompt;
    let answer;
    let distractors;
    let explanation;
    const set = (p, a, wrong, why) => {
      prompt = p;
      answer = String(a);
      distractors = wrong.map(String);
      explanation = why;
    };
    const numeric = (p, value, unit, why) => set(
      p, `${value} ${unit}`,
      [`${value + 1} ${unit}`, `${value + 2} ${unit}`, `${value + 3} ${unit}`],
      why
    );
    const pick = (items) => items[(v - 1) % items.length];

    if (lesson.topic === "changes") {
      const examples = [
        ["nước đá tan thành nước", "biến đổi vật lý"],
        ["sắt để lâu ngoài trời bị gỉ", "biến đổi hóa học"],
        ["đường hòa tan vào nước", "biến đổi vật lý"],
        ["đốt cháy giấy tạo tro và khí", "biến đổi hóa học"],
        ["nước lỏng bay hơi", "biến đổi vật lý"]
      ];
      const [example, kind] = pick(examples);
      set(`Hiện tượng ${example} là:`, kind,
        ["biến đổi vật lý", "biến đổi hóa học", "không có sự biến đổi", "luôn là phản ứng tỏa nhiệt"].filter((x) => x !== kind).slice(0, 3),
        kind === "biến đổi hóa học" ? "Biến đổi này tạo thành chất mới." : "Chất không biến đổi thành chất mới; đây là biến đổi vật lý.");
    } else if (lesson.topic === "reaction") {
      const reactions = [
        ["đốt cháy nhiên liệu", "tỏa năng lượng"],
        ["quang hợp cần nhận năng lượng ánh sáng", "thu năng lượng"],
        ["trung hòa acid-base thường làm dung dịch ấm lên", "tỏa năng lượng"],
        ["một số phản ứng phân hủy cần cung cấp nhiệt", "thu năng lượng"],
        ["pin điện hóa biến đổi hóa năng thành điện năng", "tỏa năng lượng ra mạch ngoài"]
      ];
      const [context, result] = pick(reactions);
      set(`Trong trường hợp ${context}, nhận định phù hợp là:`, result,
        ["tỏa năng lượng", "thu năng lượng", "không thể có chuyển hóa năng lượng", "luôn làm nhiệt độ giảm"].filter((x) => x !== result).slice(0, 3),
        "Phản ứng có thể giải phóng hoặc hấp thụ năng lượng; cần xét quá trình cụ thể.");
    } else if (lesson.topic === "equation") {
      if (stage === 0) set("Trong phản ứng hóa học, tổng khối lượng các chất trong hệ kín:", "được bảo toàn",
        ["luôn tăng", "luôn giảm", "bằng không"], "Định luật bảo toàn khối lượng áp dụng cho phản ứng trong hệ kín.");
      else if (stage === 1) {
        const mass = 10 + v * 3;
        const first = 4 + v;
        numeric(`Trong hệ kín, ${first} g chất A phản ứng với ${mass} g chất B. Tổng khối lượng sản phẩm là:`, first + mass, "g",
          "Tổng khối lượng sản phẩm bằng tổng khối lượng chất tham gia.");
      } else if (stage === 2) {
        const equations = [
          ["H₂ + O₂ → H₂O", "2, 1, 2", ["1, 1, 1", "1, 2, 1", "2, 2, 1"]],
          ["N₂ + H₂ → NH₃", "1, 3, 2", ["1, 1, 1", "2, 3, 1", "1, 2, 2"]],
          ["Fe + O₂ → Fe₂O₃", "4, 3, 2", ["2, 1, 1", "1, 1, 1", "2, 3, 1"]],
          ["Mg + HCl → MgCl₂ + H₂", "1, 2, 1, 1", ["1, 1, 1, 1", "2, 1, 2, 1", "1, 2, 2, 1"]],
          ["CH₄ + O₂ → CO₂ + H₂O", "1, 2, 1, 2", ["1, 1, 1, 1", "2, 1, 2, 2", "1, 4, 1, 2"]]
        ];
        const [eq, correct, wrong] = pick(equations);
        set(`Cân bằng phương trình ${eq}. Bộ hệ số tối giản là:`, correct, wrong, "Chọn hệ số để số nguyên tử mỗi nguyên tố bằng nhau ở hai vế.");
      } else {
        const known = 8 + v * 2;
        const product = known + 12 + v;
        numeric(`Phản ứng kín tạo ${product} g sản phẩm; một chất tham gia có khối lượng ${known} g. Chất còn lại có khối lượng:`, product - known, "g",
          "Theo bảo toàn khối lượng, khối lượng chất còn lại bằng tổng sản phẩm trừ chất đã biết.");
      }
    } else if (lesson.topic === "mole") {
      if (stage === 0) set("Công thức tính số mol từ khối lượng và khối lượng mol là:", "n=m/M",
        ["n=m×M", "n=M/m", "n=m+M", "n=V/M"], "Số mol bằng khối lượng chia khối lượng mol.");
      else if (stage === 1) {
        const mass = 4 * v;
        const molarMass = 8 * v;
        numeric(`Một chất có khối lượng ${mass} g và M=${molarMass} g/mol. Số mol là:`, 0.5, "mol",
          "n=m/M; thay số được n=0,5 mol.");
      } else if (stage === 2) {
        const masses = [2, 16, 28, 32, 44];
        const gas = pick(["H₂", "CH₄", "N₂", "O₂", "CO₂"]);
        const M = gas === "H₂" ? 2 : gas === "CH₄" ? 16 : gas === "N₂" ? 28 : gas === "O₂" ? 32 : 44;
        const airRatio = Number((M / 29).toFixed(2));
        set(`Tỉ khối gần đúng của khí ${gas} so với không khí (lấy M không khí = 29) là:`,
          airRatio,           [0.5, 0.97, 1.52, 2].filter((x) => x !== airRatio).slice(0, 3),
          `d=${M}/29≈${airRatio}.`);
      } else {
        const mass = 6 * v;
        const M = 12 * v;
        numeric(`Cần bao nhiêu gam chất có M=${M} g/mol để có 0,5 mol?`, mass, "g",
          "m=nM=0,5×M.");
      }
    } else if (lesson.topic === "stoich") {
      const coefficients = [1, 2, 3, 4, 5][v - 1];
      if (stage === 0) set("Hệ số trong phương trình hóa học đã cân bằng cho biết:", "tỉ lệ số mol giữa các chất",
        ["khối lượng riêng các chất", "nhiệt độ phản ứng", "màu sắc của sản phẩm", "tốc độ phản ứng chính xác"], "Tỉ lệ các hệ số là tỉ lệ số hạt hoặc số mol các chất.");
      else if (stage === 1) numeric(`Theo N₂ + 3H₂ → 2NH₃, ${coefficients} mol N₂ tạo thành bao nhiêu mol NH₃ nếu H₂ dư?`,
        coefficients * 2, "mol", "Tỉ lệ N₂:NH₃ là 1:2.");
      else if (stage === 2) {
        const nO2 = v;
        numeric(`Theo 2H₂ + O₂ → 2H₂O, ${nO2} mol O₂ phản ứng vừa đủ tạo bao nhiêu mol H₂O?`,
          nO2 * 2, "mol", "Tỉ lệ O₂:H₂O là 1:2.");
      } else {
        const nZn = v;
        numeric(`Zn + 2HCl → ZnCl₂ + H₂. ${nZn} mol Zn phản ứng hết tạo bao nhiêu mol H₂?`,
          nZn, "mol", "Tỉ lệ Zn:H₂ là 1:1.");
      }
    } else if (lesson.topic === "concentration") {
      if (stage === 0) set("Công thức nồng độ phần trăm C% là:", "m chất tan / m dung dịch × 100%",
        ["m dung môi / m dung dịch × 100%", "n / V", "m dung dịch / m chất tan", "M / n"], "C% được tính bằng khối lượng chất tan chia khối lượng dung dịch nhân 100%.");
      else if (stage === 1) {
        const solute = 2 * v;
        const solution = 20 * v;
        numeric(`Dung dịch có ${solute} g chất tan trong ${solution} g dung dịch. C% là:`, 10, "%",
          "C%=m chất tan/m dung dịch×100%=10%.");
      } else if (stage === 2) {
        const mol = v;
        const volume = 2 * v;
        numeric(`Hòa tan ${mol} mol chất trong ${volume} L dung dịch. Nồng độ mol là:`, 0.5, "mol/L",
          "CM=n/V=0,5 mol/L.");
      } else {
        const initialMass = 10 * v;
        const water = 10 * v;
        numeric(`Có ${initialMass} g dung dịch 20%; thêm ${water} g nước. Nồng độ mới là:`, 10, "%",
          "Lượng chất tan không đổi; khối lượng dung dịch tăng gấp đôi nên nồng độ còn 10%.");
      }
    } else if (lesson.topic === "rate") {
      const factors = [
        ["tăng nhiệt độ phù hợp", "nhiệt độ"],
        ["tăng nồng độ chất phản ứng", "nồng độ"],
        ["nghiền nhỏ chất rắn", "diện tích tiếp xúc"],
        ["thêm chất xúc tác thích hợp", "chất xúc tác"],
        ["khuấy đều hỗn hợp phản ứng", "mức độ tiếp xúc"]
      ];
      const [action, factor] = pick(factors);
      if (stage === 0) set("Tốc độ phản ứng cho biết:", "mức độ nhanh hay chậm của phản ứng",
        ["khối lượng riêng sản phẩm", "màu của chất phản ứng", "số nguyên tố trong chất", "nhiệt độ nóng chảy"], "Tốc độ phản ứng mô tả mức độ nhanh chậm của quá trình.");
      else set(`Để thường làm phản ứng xảy ra nhanh hơn, có thể ${action}. Yếu tố thay đổi là:`, factor,
        ["khối lượng sản phẩm", "màu sắc dung dịch", "khối lượng mol", "số nguyên tử trong hạt"], "Yếu tố được nêu làm thay đổi tốc độ phản ứng.");
    } else if (lesson.topic === "acid") {
      const acids = ["HCl", "H₂SO₄", "HNO₃", "H₃PO₄", "CH₃COOH"];
      const acid = pick(acids);
      if (stage === 0) set("Dung dịch acid làm quỳ tím:", "hóa đỏ",
        ["hóa xanh", "không đổi màu trong mọi trường hợp", "hóa đen", "phát sáng"], "Acid làm quỳ tím chuyển đỏ.");
      else if (stage === 1) set(`Chất nào trong các chất sau là acid?`, acid,
        ["NaOH", "CaO", "NaCl"], `${acid} thuộc nhóm acid.`);
      else if (stage === 2) set("Phản ứng trung hòa acid với base thường tạo:", "muối và nước",
        ["kim loại và oxygen", "oxide và hydrogen", "chỉ khí", "hai acid"], "Acid tác dụng với base tạo muối và nước.");
      else {
        const amount = v;
        numeric(`HCl + NaOH → NaCl + H₂O. ${amount} mol HCl phản ứng vừa đủ cần bao nhiêu mol NaOH?`,
          amount, "mol", "Tỉ lệ mol HCl:NaOH là 1:1.");
      }
    } else if (lesson.topic === "base") {
      if (stage === 0) set("Dung dịch có pH=12 có môi trường:", "base",
        ["acid", "trung tính", "không xác định", "không chứa ion"], "pH lớn hơn 7 biểu thị môi trường base.");
      else if (stage === 1) set("Dung dịch base làm quỳ tím:", "hóa xanh",
        ["hóa đỏ", "không đổi màu", "hóa vàng", "tan biến"], "Base làm quỳ tím chuyển xanh.");
      else if (stage === 2) {
        const pH = v + 1;
        set(`Dung dịch có pH=${pH} thuộc môi trường:`, pH < 7 ? "acid" : "base",
          ["acid", "trung tính", "base", "không xác định"].filter((x) => x !== (pH < 7 ? "acid" : "base")).slice(0, 3),
          pH < 7 ? "pH nhỏ hơn 7 là môi trường acid." : "pH lớn hơn 7 là môi trường base.");
      } else set("Ở 25°C, dung dịch trung tính có pH bằng:", "7",
        ["1", "5", "9", "14"], "Dung dịch trung tính có pH=7.");
    } else if (lesson.topic === "oxide") {
      const oxides = [["CO₂", "oxide acid"], ["CaO", "oxide base"], ["SO₂", "oxide acid"], ["MgO", "oxide base"], ["Fe₂O₃", "oxide base"]];
      const [formula, type] = pick(oxides);
      if (stage === 0) set("Oxide là hợp chất gồm:", "hai nguyên tố, trong đó có oxygen",
        ["chỉ oxygen", "kim loại và hydrogen", "ba nguyên tố bất kì", "chỉ phi kim"], "Oxide gồm hai nguyên tố, một trong số đó là oxygen.");
      else if (stage === 1) set(`${formula} thường được xếp vào loại:`, type,
        ["acid", "base", "muối", "đơn chất"].filter((x) => x !== type).slice(0, 3), "Phân loại dựa vào thành phần và tính chất hóa học của oxide.");
      else if (stage === 2) set("Oxide nào sau đây thường là oxide acid?", "SO₂",
        ["Na₂O", "CaO", "MgO"], "SO₂ là oxide của phi kim và có tính oxide acid.");
      else set("Oxide base tác dụng với acid thường tạo:", "muối và nước",
        ["kim loại và oxygen", "base và hydrogen", "hai oxide", "chỉ khí"], "Oxide base phản ứng với acid tạo muối và nước.");
    } else if (lesson.topic === "salt") {
      const salts = ["NaCl", "KNO₃", "CaCO₃", "CuSO₄", "Na₂SO₄"];
      const salt = pick(salts);
      if (stage === 0) set("Muối thường gồm:", "cation kim loại (hoặc NH₄⁺) và anion gốc acid",
        ["chỉ nguyên tử oxygen", "hydrogen và hydroxide", "một nguyên tố duy nhất", "chỉ các phân tử nước"], "Muối gồm cation và anion gốc acid.");
      else if (stage === 1) set(`Chất nào sau đây là muối?`, salt,
        ["HCl", "NaOH", "CO₂"], `${salt} là hợp chất thuộc nhóm muối.`);
      else if (stage === 2) set("Phản ứng acid + base thường tạo sản phẩm nào thuộc nhóm muối?", "NaCl trong phản ứng HCl + NaOH",
        ["O₂ trong phản ứng đốt cháy", "H₂ trong phản ứng phân hủy nước", "CO₂ trong hô hấp", "N₂ trong không khí"], "HCl + NaOH tạo NaCl và nước.");
      else set("Khi dùng muối ăn trong chế biến, nguyên tắc có lợi cho sức khỏe là:", "dùng lượng vừa phải",
        ["dùng càng nhiều càng tốt", "loại bỏ hoàn toàn nước uống", "chỉ ăn thức ăn mặn", "không cần quan tâm lượng dùng"], "Sử dụng muối hợp lí giúp hạn chế nguy cơ sức khỏe do ăn quá mặn.");
    } else if (lesson.topic === "fertilizer") {
      const nutrient = pick([["N", "sinh trưởng thân, lá"], ["P", "phát triển rễ và sinh sản"], ["K", "tăng sức chống chịu"], ["N", "tổng hợp protein"], ["P", "phát triển bộ rễ"]]);
      if (stage === 0) set("Ba nguyên tố dinh dưỡng đa lượng thường ghi trên phân NPK là:", "nitrogen, phosphorus, potassium",
        ["carbon, hydrogen, oxygen", "iron, copper, zinc", "sodium, chlorine, helium", "calcium, neon, argon"], "N, P, K lần lượt là nitrogen, phosphorus và potassium.");
      else if (stage === 1) set(`${nutrient[0]} trong phân bón chủ yếu hỗ trợ:`, nutrient[1],
        ["quang hợp ngừng hoàn toàn", "cây không cần nước", "đất mất mọi chất dinh dưỡng", "cây không còn hô hấp"], "Các nguyên tố N, P, K có vai trò dinh dưỡng khác nhau đối với cây.");
      else if (stage === 2) set("Bón phân hợp lí cần:", "đúng loại, đúng liều lượng và đúng thời điểm",
        ["bón càng nhiều càng tốt", "bón sát nguồn nước", "chỉ dùng một loại phân", "không cần xét loại đất"], "Bón đúng cách tăng hiệu quả và giảm ô nhiễm.");
      else set("Bón thừa phân hóa học có thể gây:", "rửa trôi dinh dưỡng và ô nhiễm nguồn nước",
        ["tăng vô hạn độ phì đất", "làm nước sạch hơn", "không ảnh hưởng môi trường", "ngăn mọi sâu bệnh"], "Phân dư thừa có thể bị rửa trôi, gây phú dưỡng và ô nhiễm.");
    } else if (lesson.topic === "density") {
      if (stage === 0) set("Công thức tính khối lượng riêng là:", "D=m/V",
        ["D=V/m", "D=m×V", "D=m+V", "D=F/S"], "Khối lượng riêng bằng khối lượng chia thể tích.");
      else if (stage === 1) {
        const mass = 2 * v;
        const volume = v;
        numeric(`Vật có khối lượng ${mass} kg, thể tích ${volume} m³. Khối lượng riêng là:`, 2, "kg/m³", "D=m/V=2 kg/m³.");
      } else if (stage === 2) {
        const force = 20 * v;
        const area = 0.1 * v;
        numeric(`Lực ${force} N ép lên diện tích ${area} m² tạo áp suất:`, 200, "Pa", "p=F/S=200 Pa.");
      } else {
        const force = 30 * v;
        const pressure = 100 * v;
        numeric(`Muốn tạo áp suất ${pressure} Pa bằng lực ${force} N, diện tích bị ép là:`, 0.3, "m²", "S=F/p=0,3 m².");
      }
    } else if (lesson.topic === "liquid-pressure") {
      if (stage === 0) set("Áp suất trong chất lỏng thường:", "tăng khi độ sâu tăng",
        ["giảm khi độ sâu tăng", "không phụ thuộc độ sâu", "chỉ hướng xuống", "bằng không ở mọi điểm"], "Áp suất chất lỏng tăng theo độ sâu.");
      else if (stage === 1) set("Chất lỏng gây áp suất lên đáy bình và thành bình:", "theo mọi phương",
        ["chỉ hướng xuống", "chỉ hướng lên", "chỉ theo phương ngang", "không gây áp suất"], "Chất lỏng gây áp suất theo mọi phương.");
      else if (stage === 2) {
        const depth = v * 0.1;
        numeric(`Lấy trọng lượng riêng của nước là 10 000 N/m³. Áp suất ở độ sâu ${depth} m là:`,
          Math.round(10000 * depth), "Pa", "p=d·h.");
      } else set("Áp suất khí quyển tồn tại vì:", "không khí có trọng lượng và ép lên các vật",
        ["không khí không có khối lượng", "Trái Đất không có lực hút", "chỉ có nước tạo áp suất", "mọi vật đều tự phát sáng"], "Không khí có trọng lượng nên tạo áp suất khí quyển.");
    } else if (lesson.topic === "archimedes") {
      if (stage === 0) set("Lực đẩy Archimedes có chiều:", "từ dưới lên",
        ["từ trên xuống", "nằm ngang", "luôn cùng chiều chuyển động", "không có phương"], "Lực đẩy Archimedes có phương thẳng đứng, chiều từ dưới lên.");
      else if (stage === 1) set("Độ lớn lực đẩy Archimedes bằng:", "trọng lượng chất lỏng bị vật chiếm chỗ",
        ["trọng lượng toàn bộ vật trong mọi trường hợp", "khối lượng vật nhân thể tích", "áp suất khí quyển", "lực ma sát của vật"], "Định luật Archimedes xác định lực đẩy bằng trọng lượng phần chất lỏng bị chiếm chỗ.");
      else if (stage === 2) {
        const volume = 0.001 * v;
        numeric(`Vật chiếm chỗ ${volume} m³ nước; lấy trọng lượng riêng nước 10 000 N/m³. Lực đẩy là:`,
          Math.round(volume * 10000), "N", "F_A=dV.");
      } else set("Một vật nổi cân bằng trên mặt nước khi:", "lực đẩy Archimedes bằng trọng lượng vật",
        ["lực đẩy bằng không", "trọng lượng lớn hơn lực đẩy", "vật không chịu lực", "lực đẩy luôn tăng vô hạn"], "Vật nổi cân bằng khi hợp lực theo phương thẳng đứng bằng không.");
    } else if (lesson.topic === "moment") {
      if (stage === 0) set("Công thức tính momen lực là:", "M=F×d",
        ["M=F/d", "M=F+d", "M=d/F", "M=F×V"], "Momen lực bằng lực nhân cánh tay đòn.");
      else if (stage === 1) set("Cùng một lực, tăng cánh tay đòn thì tác dụng làm quay:", "tăng",
        ["giảm", "không đổi trong mọi trường hợp", "bằng không", "đổi thành lực ma sát"], "M=F×d nên tăng d làm momen tăng.");
      else if (stage === 2) numeric(`Lực ${10 * v} N có cánh tay đòn ${v} m. Momen lực là:`, 10 * v * v, "N·m", "M=F×d.");
      else numeric(`Muốn tạo momen ${20 * v} N·m bằng lực ${10 * v} N, cánh tay đòn cần là:`, 2, "m", "d=M/F=2 m.");
    } else if (lesson.topic === "lever") {
      if (stage === 0) set("Đòn bẩy là máy cơ đơn giản có:", "điểm tựa",
        ["nguồn điện", "thấu kính", "nam châm điện", "nhiên liệu"], "Đòn bẩy quay quanh một điểm tựa.");
      else if (stage === 1) set("Dùng cánh tay đòn dài hơn giúp:", "giảm lực cần thiết trong điều kiện cân bằng",
        ["luôn tăng lực cần thiết", "làm mất điểm tựa", "tạo thêm năng lượng", "không làm đổi tác dụng lực"], "Cánh tay đòn dài tạo momen lớn hơn với cùng lực.");
      else if (stage === 2) set("Dụng cụ nào hoạt động theo nguyên tắc đòn bẩy?", pick(["xà beng", "kéo", "bập bênh", "cả xà beng, kéo và bập bênh"]),
        ["nhiệt kế", "bóng đèn", "pin điện", "ống hút"], "Xà beng, kéo và bập bênh đều có thể hoạt động như đòn bẩy.");
      else set("Khi dùng xà beng để nâng vật nặng, nên đặt điểm tựa:", "gần vật cần nâng để tăng cánh tay đòn của lực tác dụng",
        ["xa vật nhất có thể", "ở ngoài xà beng", "không cần điểm tựa", "trên chính vật"], "Đặt điểm tựa gần vật giúp cánh tay đòn của lực tác dụng dài hơn.");
    } else if (lesson.topic === "force") {
      if (stage === 0) set("Mũi tên biểu diễn lực cho biết:", "điểm đặt, phương, chiều và độ lớn",
        ["chỉ màu sắc của vật", "chỉ khối lượng riêng", "nhiệt độ và thể tích", "chỉ thời gian tác dụng"], "Vectơ lực biểu diễn đủ điểm đặt, phương, chiều và độ lớn theo tỉ xích.");
      else if (stage === 1) set("Lực có thể làm vật:", "thay đổi chuyển động hoặc biến dạng",
        ["chỉ đổi màu", "biến mất hoàn toàn", "không tương tác", "chỉ thay đổi nhiệt độ"], "Tác dụng của lực có thể làm đổi chuyển động hoặc làm vật biến dạng.");
      else if (stage === 2) set("Hai lực cùng phương, cùng chiều có hợp lực:", "cùng chiều và có độ lớn bằng tổng hai lực",
        ["bằng hiệu hai lực, ngược chiều", "luôn bằng không", "vuông góc với hai lực", "không xác định"], "Hai lực cùng phương, cùng chiều được cộng độ lớn.");
      else set("Hai lực 8 N và 3 N cùng phương, ngược chiều tác dụng lên vật. Hợp lực có độ lớn:", "5 N",
        ["11 N", "24 N", "3 N", "0 N"], "Hai lực ngược chiều nên độ lớn hợp lực bằng hiệu 8−3=5 N.");
    } else if (lesson.topic === "charge") {
      if (stage === 0) set("Hai vật nhiễm điện cùng loại đặt gần nhau sẽ:", "đẩy nhau",
        ["hút nhau", "không tác dụng lực", "luôn phát sáng", "tan vào nhau"], "Các điện tích cùng loại đẩy nhau.");
      else if (stage === 1) set("Hai vật nhiễm điện khác loại đặt gần nhau sẽ:", "hút nhau",
        ["đẩy nhau", "không tương tác", "luôn nóng chảy", "biến thành nguồn điện"], "Các điện tích khác loại hút nhau.");
      else if (stage === 2) set("Thước nhựa sau khi cọ xát có thể hút các mẩu giấy nhỏ vì:", "thước đã bị nhiễm điện",
        ["giấy tự phát sáng", "thước biến thành nam châm vĩnh cửu", "không khí mất khối lượng", "giấy bị nóng chảy"], "Vật nhiễm điện có thể hút vật nhẹ.");
      else set("Một vật trung hòa bị hút bởi vật nhiễm điện. Điều này cho thấy:", "vật nhiễm điện có thể hút vật nhẹ trung hòa",
        ["chỉ điện tích cùng dấu mới hút nhau", "vật trung hòa không thể tương tác", "mọi vật đều mang điện dương", "lực điện chỉ tác dụng khi tiếp xúc"], "Vật nhiễm điện có thể gây phân bố lại điện tích trong vật trung hòa và hút vật.");
    } else if (lesson.topic === "current") {
      if (stage === 0) set("Dòng điện là:", "dòng chuyển dời có hướng của các hạt mang điện",
        ["dòng chuyển động hỗn độn của phân tử", "dòng truyền nhiệt", "sự truyền âm", "chuyển động của mọi vật"], "Dòng điện là dòng chuyển dời có hướng của điện tích.");
      else if (stage === 1) set("Vai trò của nguồn điện trong mạch là:", "duy trì hiệu điện thế để tạo dòng điện",
        ["tiêu thụ toàn bộ dòng điện", "đóng vai trò dây dẫn", "đo nhiệt độ", "làm mạch luôn hở"], "Nguồn điện duy trì hiệu điện thế giữa hai cực.");
      else if (stage === 2) set("Thiết bị nào có thể là nguồn điện?", pick(["pin", "ắc quy", "pin mặt trời", "cả pin, ắc quy và pin mặt trời"]),
        ["bóng đèn", "công tắc", "dây nối", "cầu chì"], "Pin, ắc quy và pin mặt trời có thể cung cấp điện năng cho mạch.");
      else set("Một bóng đèn mắc với pin nhưng công tắc đang mở. Mạch điện:", "hở nên không có dòng điện chạy liên tục",
        ["kín nên đèn sáng", "tạo ra dòng điện vô hạn", "không cần nguồn điện", "luôn bị đoản mạch"], "Công tắc mở làm mạch hở, ngắt dòng điện.");
    } else if (lesson.topic === "circuit") {
      if (stage === 0) set("Mạch điện đơn giản thường gồm:", "nguồn điện, dây dẫn và thiết bị điện",
        ["chỉ một dây dẫn", "nước và không khí", "thấu kính và gương", "chỉ công tắc"], "Mạch cần nguồn, dây dẫn và thiết bị tiêu thụ điện.");
      else if (stage === 1) set("Bóng đèn trong mạch kín không sáng có thể do:", "mạch bị hở hoặc nguồn điện không hoạt động",
        ["mạch có dây dẫn", "có công tắc đóng", "đèn nhận đủ điện", "mọi bộ phận hoạt động bình thường"], "Mạch hở hoặc nguồn hỏng làm dòng điện không chạy qua đèn.");
      else if (stage === 2) set("Công tắc trong mạch điện dùng để:", "đóng hoặc ngắt mạch",
        ["tăng khối lượng pin", "đo nhiệt độ", "tạo ánh sáng không cần nguồn", "thay thế mọi dây dẫn"], "Công tắc điều khiển trạng thái kín/hở của mạch.");
      else set("Khi vẽ sơ đồ mạch, các thiết bị được biểu diễn bằng:", "kí hiệu quy ước",
        ["hình ảnh chụp thật", "tên người sử dụng", "màu tùy ý không thống nhất", "các con số ngẫu nhiên"], "Sơ đồ mạch dùng kí hiệu quy ước để thể hiện phần tử và cách nối.");
    } else if (lesson.topic === "electric-effects") {
      const cases = [
        ["bàn là nóng lên", "tác dụng nhiệt"],
        ["nam châm điện hút đinh sắt", "tác dụng từ"],
        ["đèn LED phát sáng", "tác dụng phát sáng"],
        ["mạ kim loại bằng điện", "tác dụng hóa học"],
        ["điện giật gây co cơ", "tác dụng sinh lí"]
      ];
      const [example, effect] = pick(cases);
      set(`Hiện tượng ${example} thể hiện tác dụng nào của dòng điện?`, effect,
        ["tác dụng nhiệt", "tác dụng từ", "tác dụng phát sáng", "tác dụng hóa học"].filter((x) => x !== effect).slice(0, 3),
        "Dòng điện có thể gây nhiều tác dụng khác nhau, tùy thiết bị và môi trường.");
    } else if (lesson.topic === "measure-electric") {
      if (stage === 0) set("Cường độ dòng điện được đo bằng:", "ampe kế",
        ["vôn kế", "nhiệt kế", "lực kế", "thước đo"], "Ampe kế dùng để đo cường độ dòng điện.");
      else if (stage === 1) set("Hiệu điện thế được đo bằng:", "vôn kế",
        ["ampe kế", "cân", "nhiệt kế", "đồng hồ bấm giây"], "Vôn kế dùng để đo hiệu điện thế.");
      else if (stage === 2) set("Đơn vị của cường độ dòng điện là:", "ampe (A)",
        ["volt (V)", "ohm (Ω)", "joule (J)", "watt (W)"], "Cường độ dòng điện có đơn vị ampere (A).");
      else set("Để đo hiệu điện thế giữa hai đầu bóng đèn, vôn kế được mắc:", "song song với bóng đèn",
        ["nối tiếp với toàn mạch", "thay cho nguồn điện", "nối tắt hai cực pin", "ngoài mạch và không nối dây"], "Vôn kế được mắc song song với bộ phận cần đo hiệu điện thế.");
    } else if (lesson.topic === "thermal-energy") {
      if (stage === 0) set("Nhiệt độ biểu thị:", "mức độ nóng, lạnh của vật",
        ["khối lượng của vật", "thể tích của vật", "lượng chất tan", "tốc độ dòng điện"], "Nhiệt độ cho biết mức độ nóng lạnh.");
      else if (stage === 1) set("Hai vật cân bằng nhiệt khi:", "có cùng nhiệt độ và không còn truyền nhiệt ròng",
        ["có cùng khối lượng", "có cùng thể tích", "đều ở thể rắn", "có cùng màu"], "Khi cân bằng nhiệt, nhiệt độ hai vật bằng nhau.");
      else if (stage === 2) set("Nhiệt tự truyền từ vật:", "có nhiệt độ cao sang vật có nhiệt độ thấp",
        ["lạnh sang nóng trong mọi trường hợp", "nhẹ sang nặng", "có thể tích nhỏ sang lớn", "có khối lượng lớn sang nhỏ"], "Nhiệt truyền tự nhiên theo chiều từ nóng sang lạnh.");
      else set("Một cốc nước nóng để trong phòng mát dần vì:", "nước truyền nhiệt ra môi trường lạnh hơn",
        ["môi trường truyền hết khối lượng vào cốc", "nước tự tạo thêm năng lượng vô hạn", "nhiệt độ không liên quan trao đổi nhiệt", "cốc ngừng tương tác với không khí"], "Nhiệt truyền từ nước nóng sang môi trường có nhiệt độ thấp hơn.");
    } else if (lesson.topic === "heat-transfer") {
      const cases = [
        ["thìa kim loại nóng lên khi một đầu nhúng trong nước nóng", "dẫn nhiệt"],
        ["nước nóng chuyển động lên trên trong nồi", "đối lưu"],
        ["Mặt Trời sưởi ấm Trái Đất", "bức xạ nhiệt"],
        ["không khí nóng lưu thông trong phòng", "đối lưu"],
        ["nhiệt truyền qua đáy nồi kim loại", "dẫn nhiệt"]
      ];
      const [example, kind] = pick(cases);
      set(`Trường hợp ${example} chủ yếu là:`, kind,
        ["dẫn nhiệt", "đối lưu", "bức xạ nhiệt", "bay hơi"].filter((x) => x !== kind).slice(0, 3),
        "Dẫn nhiệt chủ yếu trong chất rắn, đối lưu trong chất lỏng/khí, bức xạ truyền được qua chân không.");
    } else if (lesson.topic === "expansion") {
      if (stage === 0) set("Phần lớn chất rắn khi nóng lên sẽ:", "nở ra",
        ["co lại", "không đổi kích thước trong mọi trường hợp", "biến thành chất lỏng", "mất khối lượng hoàn toàn"], "Phần lớn chất rắn nở vì nhiệt.");
      else if (stage === 1) set("Khe co giãn trên cầu được bố trí để:", "cho cầu giãn nở khi nhiệt độ tăng",
        ["làm cầu nặng hơn", "ngăn mọi lực tác dụng", "tạo dòng điện", "giữ cầu luôn lạnh"], "Kết cấu cần chỗ để giãn nở, tránh cong vênh hoặc nứt.");
      else if (stage === 2) set("Chất nào thường nở vì nhiệt nhiều nhất khi tăng cùng nhiệt độ?", "chất khí",
        ["chất rắn", "chất lỏng", "mọi chất nở như nhau"], "Chất khí thường nở vì nhiệt nhiều hơn chất lỏng và chất rắn.");
      else set("Không nên đổ đầy chất lỏng vào chai rồi đậy kín trước khi đem phơi nóng vì:", "chất lỏng nở ra có thể tràn hoặc làm tăng áp suất",
        ["chất lỏng co lại khi nóng", "chai tự tạo thêm chất lỏng", "nhiệt độ không ảnh hưởng thể tích", "khối lượng riêng luôn bằng không"], "Chất lỏng thường nở vì nhiệt; thể tích tăng trong bình kín có thể gây nguy hiểm.");
    } else if (lesson.topic === "human-body") {
      if (stage === 0) set("Thứ tự tổ chức cơ thể người từ đơn giản đến phức tạp là:", "tế bào → mô → cơ quan → hệ cơ quan",
        ["mô → tế bào → hệ cơ quan → cơ quan", "cơ quan → tế bào → mô → hệ cơ quan", "hệ cơ quan → mô → tế bào → cơ quan", "tế bào → cơ quan → mô → hệ cơ quan"], "Tế bào hợp thành mô, mô tạo cơ quan, các cơ quan phối hợp thành hệ cơ quan.");
      else if (stage === 1) set("Các hệ cơ quan trong cơ thể người:", "phối hợp và điều hòa hoạt động",
        ["hoạt động hoàn toàn tách biệt", "chỉ hoạt động khi ngủ", "không cần trao đổi chất", "có thể thay thế hoàn toàn cho nhau"], "Các hệ cơ quan phối hợp để duy trì hoạt động sống.");
      else if (stage === 2) set("Đơn vị cấu tạo và chức năng cơ bản của cơ thể là:", "tế bào",
        ["mô", "cơ quan", "hệ cơ quan", "xương"], "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể.");
      else set("Khi một hệ cơ quan hoạt động kém, cơ thể có thể bị ảnh hưởng vì:", "các hệ cơ quan có liên hệ và phối hợp với nhau",
        ["mỗi hệ hoạt động độc lập tuyệt đối", "cơ thể không cần điều hòa", "mọi hệ đều có cùng một chức năng", "tế bào không phụ thuộc môi trường"], "Các hệ cơ quan liên hệ và phụ thuộc nhau.");
    } else if (lesson.topic === "movement") {
      if (stage === 0) set("Hệ vận động ở người gồm:", "xương, khớp và cơ",
        ["tim, phổi và thận", "não và các giác quan", "dạ dày và ruột", "máu và mạch máu"], "Hệ vận động gồm bộ xương, khớp và hệ cơ.");
      else if (stage === 1) set("Cơ tạo vận động chủ yếu nhờ:", "co và dãn",
        ["hóa thành xương", "tiết hormone vào máu", "lọc chất thải", "trao đổi khí"], "Cơ co-dãn, thường phối hợp với xương qua khớp để tạo vận động.");
      else if (stage === 2) set("Thói quen giúp bảo vệ hệ vận động là:", "giữ tư thế đúng và vận động phù hợp",
        ["mang vật quá nặng lệch một bên", "ngồi sai tư thế lâu dài", "không vận động", "tự ý dùng thuốc tăng cơ"], "Tư thế và vận động hợp lí giúp hạn chế tổn thương.");
      else set("Khi cánh tay gập lại, cơ ở hai phía khớp khuỷu phối hợp vì:", "một nhóm cơ co, nhóm đối kháng dãn",
        ["mọi cơ đều biến thành xương", "khớp tự tạo lực mà không cần cơ", "xương ngừng chuyển động", "cơ không tham gia vận động"], "Các nhóm cơ đối kháng phối hợp co-dãn để làm xương chuyển động.");
    } else if (lesson.topic === "digestion") {
      if (stage === 0) set("Phần lớn chất dinh dưỡng được hấp thụ vào máu ở:", "ruột non",
        ["thực quản", "khí quản", "ruột già", "miệng"], "Ruột non có bề mặt hấp thụ lớn và là nơi hấp thụ phần lớn chất dinh dưỡng.");
      else if (stage === 1) set("Vai trò chính của hệ tiêu hóa là:", "biến đổi thức ăn, hấp thụ chất dinh dưỡng và thải bã",
        ["bơm máu", "trao đổi khí với môi trường", "lọc nước tiểu", "điều khiển phản xạ"], "Hệ tiêu hóa xử lí thức ăn và hấp thụ chất dinh dưỡng.");
      else if (stage === 2) set("Thói quen bảo vệ hệ tiêu hóa là:", "ăn chín, uống sôi và rửa tay trước khi ăn",
        ["ăn thức ăn ôi thiu", "bỏ qua vệ sinh thực phẩm", "chỉ ăn đồ ngọt", "dùng chung dụng cụ ăn uống bẩn"], "Vệ sinh ăn uống giúp hạn chế tác nhân gây bệnh đường tiêu hóa.");
      else set("Một bữa ăn cân đối nên:", "đa dạng thực phẩm và phù hợp nhu cầu cơ thể",
        ["chỉ gồm một loại thức ăn", "loại bỏ hoàn toàn nước", "chỉ ăn chất béo", "ăn càng nhiều muối càng tốt"], "Đa dạng thực phẩm giúp cung cấp các nhóm chất cần thiết.");
    } else if (lesson.topic === "circulation") {
      if (stage === 0) set("Hồng cầu có vai trò chủ yếu:", "vận chuyển oxygen nhờ hemoglobin",
        ["tạo hormone tiêu hóa", "lọc nước tiểu", "điều khiển vận động", "tiêu hóa tinh bột"], "Hemoglobin trong hồng cầu gắn và vận chuyển oxygen.");
      else if (stage === 1) set("Tim có chức năng:", "co bóp bơm máu đi trong hệ tuần hoàn",
        ["lọc không khí", "hấp thụ chất dinh dưỡng", "tạo nước tiểu", "phân tích âm thanh"], "Tim co bóp tạo lực đẩy máu lưu thông.");
      else if (stage === 2) set("Thói quen hỗ trợ sức khỏe tuần hoàn là:", "vận động phù hợp, ăn cân đối và không hút thuốc",
        ["hút thuốc thường xuyên", "ăn quá mặn mỗi ngày", "ngồi liên tục không nghỉ", "tự ý dùng thuốc"], "Lối sống lành mạnh góp phần bảo vệ tim và mạch máu.");
      else set("Khi cơ hoạt động mạnh, tuần hoàn tăng cường đưa đến cơ:", "oxygen và chất dinh dưỡng, đồng thời mang chất thải đi",
        ["chỉ nước tiểu", "không có chất nào", "khí nitrogen để tiêu hóa", "chất thải để tích tụ"], "Máu vận chuyển nguyên liệu đến tế bào và mang sản phẩm chuyển hóa đi.");
    } else if (lesson.topic === "immunity") {
      if (stage === 0) set("Chức năng của hệ miễn dịch là:", "nhận biết và chống tác nhân gây bệnh",
        ["tiêu hóa thức ăn", "tạo chuyển động cho xương", "lọc ánh sáng", "bơm khí vào phổi"], "Hệ miễn dịch bảo vệ cơ thể trước tác nhân gây bệnh.");
      else if (stage === 1) set("Tiêm chủng giúp cơ thể:", "tạo khả năng đáp ứng miễn dịch với tác nhân cụ thể",
        ["không bao giờ mắc mọi bệnh", "thay thế hoàn toàn vệ sinh", "ngừng tạo tế bào máu", "loại bỏ nhu cầu dinh dưỡng"], "Vaccine kích thích đáp ứng miễn dịch đặc hiệu.");
      else if (stage === 2) set("Biện pháp hạn chế lây bệnh qua đường hô hấp là:", "che miệng khi ho, rửa tay và thông thoáng nơi ở",
        ["dùng chung khẩu trang", "không vệ sinh tay", "khạc nhổ nơi công cộng", "ở nơi kín gió khi đông người"], "Vệ sinh hô hấp và thông khí giúp hạn chế lây truyền.");
      else set("Dùng kháng sinh khi mắc bệnh do virus:", "không có tác dụng diệt virus và cần theo chỉ định chuyên môn",
        ["luôn chữa khỏi ngay", "thay thế vaccine", "làm virus biến thành vi khuẩn", "không cần quan tâm liều dùng"], "Kháng sinh điều trị một số nhiễm khuẩn, không diệt virus; dùng thuốc cần theo hướng dẫn chuyên môn.");
    } else if (lesson.topic === "respiration") {
      if (stage === 0) set("Cơ quan trao đổi khí chủ yếu của người là:", "phổi",
        ["dạ dày", "thận", "tim", "ruột non"], "Phổi là cơ quan chính trao đổi oxygen và carbon dioxide.");
      else if (stage === 1) set("Khi hít vào, cơ thể chủ yếu nhận:", "oxygen",
        ["carbon dioxide", "nitrogen tinh khiết", "hydrogen", "hơi muối"], "Không khí hít vào cung cấp oxygen cho cơ thể.");
      else if (stage === 2) set("Biện pháp bảo vệ hệ hô hấp là:", "tránh khói thuốc và hạn chế hít bụi",
        ["hút thuốc", "đốt rác trong phòng kín", "tập luyện giữa vùng khói bụi", "không thông khí nơi ở"], "Tránh khói thuốc, bụi và ô nhiễm giúp bảo vệ đường hô hấp.");
      else set("Khi vận động, nhịp thở tăng nhằm:", "đưa thêm oxygen vào máu và thải carbon dioxide",
        ["ngừng trao đổi khí", "giảm cung cấp oxygen cho cơ", "làm phổi ngừng hoạt động", "tạo chất dinh dưỡng"], "Cơ hoạt động tăng nhu cầu oxygen và thải nhiều carbon dioxide hơn.");
    } else if (lesson.topic === "excretion") {
      if (stage === 0) set("Cơ quan lọc máu và tạo nước tiểu là:", "thận",
        ["phổi", "dạ dày", "tim", "ruột non"], "Thận lọc máu và tạo nước tiểu.");
      else if (stage === 1) set("Hệ bài tiết nước tiểu giúp:", "loại bỏ chất thải và điều hòa nước, muối",
        ["tiêu hóa thức ăn", "bơm máu", "tạo âm thanh", "nhận biết ánh sáng"], "Bài tiết góp phần loại chất thải và duy trì cân bằng nội môi.");
      else if (stage === 2) set("Thói quen có lợi cho hệ bài tiết là:", "uống đủ nước phù hợp và không nhịn tiểu kéo dài",
        ["nhịn tiểu thường xuyên", "tự ý dùng thuốc", "uống nước không an toàn", "ăn mặn quá mức"], "Thói quen hợp lí hỗ trợ chức năng bài tiết và sức khỏe đường tiết niệu.");
      else set("Khi cơ thể mất nước, thận thường:", "tăng tái hấp thu nước để giảm lượng nước tiểu",
        ["ngừng lọc máu vĩnh viễn", "thải thêm nước tối đa", "biến nước thành oxygen", "không chịu ảnh hưởng"], "Thận điều chỉnh tái hấp thu nước góp phần cân bằng nước.");
    } else if (lesson.topic === "nervous") {
      if (stage === 0) set("Hệ thần kinh có chức năng:", "tiếp nhận, xử lí thông tin và điều khiển hoạt động",
        ["tiêu hóa thức ăn", "lọc máu tạo nước tiểu", "vận chuyển oxygen bằng hồng cầu", "tạo xương"], "Hệ thần kinh điều khiển và phối hợp hoạt động cơ thể.");
      else if (stage === 1) set("Cơ quan tiếp nhận ánh sáng là:", "mắt",
        ["tai", "mũi", "lưỡi", "da"], "Mắt tiếp nhận kích thích ánh sáng.");
      else if (stage === 2) set("Để bảo vệ mắt khi học tập, nên:", "đọc nơi đủ ánh sáng và giữ khoảng cách phù hợp",
        ["nhìn màn hình trong bóng tối lâu", "đọc sách quá sát mắt", "dùng chung khăn bẩn", "nhìn trực tiếp Mặt Trời"], "Ánh sáng và khoảng cách hợp lí giúp hạn chế mỏi mắt.");
      else set("Phản xạ rút tay khỏi vật nóng diễn ra nhanh vì:", "hệ thần kinh tiếp nhận kích thích và điều khiển đáp ứng",
        ["hệ tiêu hóa tạo phản xạ", "xương tự cảm nhận nhiệt", "máu ngừng lưu thông", "cơ thể không nhận kích thích"], "Thần kinh nhận tín hiệu và phối hợp đáp ứng bảo vệ cơ thể.");
    } else if (lesson.topic === "endocrine") {
      if (stage === 0) set("Tuyến nội tiết đưa hormone chủ yếu vào:", "máu",
        ["ống tiêu hóa", "phế quản", "bề mặt xương", "khoang miệng"], "Hormone được tuyến nội tiết tiết vào máu.");
      else if (stage === 1) set("Hormone có tác dụng:", "điều hòa hoạt động của cơ quan đích",
        ["tiêu hóa mọi chất trong thức ăn", "thay thế mọi tế bào máu", "chỉ tạo lực cơ học", "làm mất chức năng thần kinh"], "Hormone tác động đặc hiệu lên tế bào/cơ quan đích.");
      else if (stage === 2) set("Điều hòa đường huyết có sự tham gia quan trọng của:", "hormone insulin và glucagon",
        ["hemoglobin và keratin", "amylase và pepsin", "adrenaline và nước bọt", "collagen và cellulose"], "Insulin và glucagon góp phần điều hòa nồng độ glucose máu.");
      else set("Hệ thần kinh và nội tiết phối hợp giúp:", "điều hòa và duy trì ổn định hoạt động cơ thể",
        ["mọi cơ quan ngừng hoạt động", "cơ thể không cần môi trường", "chỉ điều khiển tiêu hóa", "thay thế hoàn toàn hệ tuần hoàn"], "Hai hệ phối hợp điều khiển và điều hòa nhiều hoạt động sống.");
    } else if (lesson.topic === "environment") {
      if (stage === 0) set("Yếu tố nào là nhân tố vô sinh của môi trường?", "ánh sáng",
        ["cây xanh", "vi khuẩn", "động vật ăn cỏ", "nấm"], "Ánh sáng là nhân tố vô sinh; các sinh vật là nhân tố hữu sinh.");
      else if (stage === 1) set("Môi trường sống của sinh vật gồm:", "các nhân tố vô sinh và hữu sinh tác động đến sinh vật",
        ["chỉ thức ăn", "chỉ các động vật", "chỉ nhiệt độ", "chỉ nơi sinh sản"], "Môi trường bao gồm nhiều nhân tố vô sinh và hữu sinh.");
      else if (stage === 2) set("Đa dạng sinh thái được thể hiện qua:", "sự phong phú về hệ sinh thái và môi trường sống",
        ["chỉ số lượng một loài", "màu sắc của một cá thể", "khối lượng của một quần thể", "số lượng tế bào trong cơ thể"], "Đa dạng sinh thái phản ánh sự phong phú các hệ sinh thái.");
      else set("Phá hủy rừng ngập mặn có thể làm giảm đa dạng sinh học vì:", "mất nơi sống và nguồn sống của nhiều loài",
        ["mọi loài đều chuyển thành cây", "môi trường không ảnh hưởng sinh vật", "số loài luôn tăng", "chuỗi thức ăn không bị tác động"], "Sinh cảnh bị mất ảnh hưởng nơi ở, thức ăn và quan hệ sinh thái.");
    } else if (lesson.topic === "population") {
      if (stage === 0) set("Quần thể sinh vật gồm các cá thể:", "cùng loài, sống trong khu vực và thời gian xác định",
        ["khác loài, sống bất kì nơi nào", "chỉ thuộc một giới tính", "không tương tác", "chỉ sống trong phòng thí nghiệm"], "Quần thể là nhóm cá thể cùng loài có khả năng sinh sản trong khu vực xác định.");
      else if (stage === 1) set("Quần xã sinh vật gồm:", "nhiều quần thể khác loài cùng sống và tương tác",
        ["một cá thể duy nhất", "các cá thể cùng một loài", "chỉ nhân tố vô sinh", "một cơ quan của sinh vật"], "Quần xã gồm nhiều quần thể thuộc các loài khác nhau.");
      else if (stage === 2) set("Một đàn cá rô cùng loài sống trong hồ, có khả năng sinh sản, là:", "quần thể",
        ["quần xã", "hệ sinh thái", "nhân tố vô sinh", "chuỗi thức ăn"], "Các cá thể cùng loài trong khu vực xác định tạo thành quần thể.");
      else set("Trong một khu rừng có cây, chim, côn trùng và nấm cùng sống. Tập hợp các quần thể này là:", "quần xã sinh vật",
        ["một quần thể đơn loài", "một cá thể", "nhân tố vô sinh", "cơ quan"], "Nhiều quần thể khác loài cùng sống tạo thành quần xã.");
    } else if (lesson.topic === "ecosystem") {
      if (stage === 0) set("Hệ sinh thái gồm:", "quần xã sinh vật và môi trường sống của chúng",
        ["chỉ một cá thể", "chỉ các loài động vật", "chỉ đất và nước", "một chuỗi thức ăn duy nhất"], "Hệ sinh thái gồm sinh vật và môi trường, có tương tác với nhau.");
      else if (stage === 1) set("Trong chuỗi cỏ → châu chấu → ếch, sinh vật sản xuất là:", "cỏ",
        ["châu chấu", "ếch", "cả châu chấu và ếch", "không có sinh vật sản xuất"], "Cỏ tự tổng hợp chất hữu cơ nên là sinh vật sản xuất.");
      else if (stage === 2) set("Lưới thức ăn là:", "nhiều chuỗi thức ăn có mắt xích chung liên kết với nhau",
        ["một sinh vật đứng riêng", "một chuỗi chỉ có sinh vật sản xuất", "tập hợp các nhân tố vô sinh", "dòng nước trong đất"], "Lưới thức ăn gồm các chuỗi thức ăn liên kết.");
      else set("Nếu sinh vật sản xuất giảm mạnh, hệ sinh thái có thể:", "giảm nguồn năng lượng và thức ăn cho nhiều bậc dinh dưỡng",
        ["không bị ảnh hưởng", "tăng vô hạn mọi quần thể", "ngừng mọi quan hệ sinh thái", "tạo thêm năng lượng từ hư không"], "Sinh vật sản xuất là nền tảng nguồn vật chất và năng lượng của lưới thức ăn.");
    } else {
      throw new Error(`Chưa có bộ sinh câu hỏi cho chủ đề KHTN 8: ${lesson.topic}`);
    }

    const options = [answer, ...distractors.slice(0, 3)];
    if (options.length !== 4 || new Set(options).size !== 4) {
      throw new Error(`Lựa chọn không hợp lệ: k8-b${lessonIndex + 1}-q${index + 1}`);
    }
    return q(
      `k8-b${String(lessonIndex + 1).padStart(2, "0")}-q${String(index + 1).padStart(2, "0")}`,
      levels[index],
      prompt,
      options,
      0,
      explanation
    );
  }

  const lessons = curriculum.map(([title, theory, area, topic], lessonIndex) => ({
    id: `khtn8-bai-${lessonIndex + 1}`,
    title,
    theory,
    area,
    topic,
    exercises: Array.from({ length: 20 }, (_, index) =>
      makeQuestion(lessonIndex, { title, topic }, index)
    )
  }));
  const course = {
    title: "Khoa học tự nhiên 8 · Kết nối tri thức",
    lessons,
    exams: [
      { id: "k8-15p", type: "15p", title: "Kiểm tra 15 phút · KHTN 8", duration: 15, questionIds: ["k8-b01-q01", "k8-b04-q02", "k8-b13-q03", "k8-b27-q04", "k8-b38-q05"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm." },
      { id: "k8-giuaki", type: "giuaki", title: "Kiểm tra giữa kì · KHTN 8", duration: 45, questionIds: ["k8-b03-q11", "k8-b06-q12", "k8-b15-q13", "k8-b23-q14", "k8-b30-q15"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm. Ghi rõ phép tính và đơn vị." },
      { id: "k8-cuoiki", type: "cuoiki", title: "Kiểm tra cuối kì · KHTN 8", duration: 60, questionIds: ["k8-b12-q16", "k8-b18-q17", "k8-b26-q18", "k8-b35-q19", "k8-b38-q20"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm; giải thích căn cứ khoa học." }
    ]
  };
  register(8, "khtn", course);
})();
