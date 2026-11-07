(() => {
  const { exercise: q, register } = window.studyMapData;
  const levels = [
    "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet",
    "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu",
    "van-dung", "van-dung", "van-dung", "van-dung", "van-dung",
    "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao"
  ];
  const curriculum = [
    ["Tính chất hóa học chung của kim loại", "Kim loại thường tác dụng với oxygen tạo oxide, một số kim loại tác dụng với nước hoặc acid tạo sản phẩm đặc trưng. Mức độ phản ứng phụ thuộc bản chất kim loại và điều kiện.", "Hóa học", "metals"],
    ["Dãy hoạt động hóa học của kim loại", "Dãy hoạt động hóa học sắp xếp kim loại theo mức độ hoạt động. Kim loại đứng trước có thể đẩy kim loại đứng sau ra khỏi dung dịch muối trong điều kiện phù hợp; kim loại đứng trước hydrogen có thể phản ứng với một số acid.", "Hóa học", "activity"],
    ["Tách kim loại và sản xuất gang, thép", "Kim loại hoạt động mạnh thường được điều chế bằng điện phân nóng chảy; một số kim loại hoạt động trung bình được tách bằng chất khử. Gang, thép là hợp kim của sắt với carbon và một số nguyên tố.", "Hóa học", "extraction"],
    ["Sự ăn mòn kim loại và bảo vệ kim loại", "Ăn mòn kim loại là sự phá hủy kim loại do tác động hóa học của môi trường. Có thể hạn chế bằng sơn phủ, mạ, giữ khô hoặc dùng phương pháp bảo vệ điện hóa.", "Hóa học", "corrosion"],
    ["Tính chất chung của phi kim", "Phi kim thường dẫn điện, dẫn nhiệt kém hơn kim loại; nhiều phi kim tác dụng với oxygen tạo oxide. Tính chất cụ thể khác nhau tùy nguyên tố và điều kiện.", "Hóa học", "nonmetals"],
    ["Clor và Cacbon", "Chlorine là khí màu vàng lục, có tính oxi hóa và độc. Carbon có các dạng thù hình như than chì, kim cương; carbon và một số hợp chất có vai trò trong đời sống, cần sử dụng an toàn.", "Hóa học", "chlorine-carbon"],
    ["Khái niệm về hợp chất hữu cơ", "Hợp chất hữu cơ là hợp chất của carbon, trừ một số hợp chất đơn giản được xếp vào nhóm vô cơ như CO, CO₂, muối carbonate. Nhiều hợp chất hữu cơ chứa hydrogen và oxygen.", "Hóa học", "organic"],
    ["Mêtan (CH4) và Etilen (C2H4)", "Methane CH₄ là hydrocarbon no đơn giản; ethylene C₂H₄ có liên kết đôi, có thể tham gia phản ứng cộng. Cả hai cháy tạo carbon dioxide và nước khi đủ oxygen.", "Hóa học", "methane-ethylene"],
    ["Axetilen (C2H2) và Benzene (C6H6)", "Acetylene C₂H₂ có liên kết ba và có thể tham gia phản ứng cộng. Benzene C₆H₆ có cấu trúc vòng, là chất lỏng độc, dễ cháy và cần tránh tiếp xúc.", "Hóa học", "acetylene-benzene"],
    ["Dầu mỏ và khí thiên nhiên", "Dầu mỏ và khí thiên nhiên là hỗn hợp hydrocarbon, hình thành qua thời gian địa chất. Chưng cất phân đoạn dầu mỏ tách các phân đoạn theo nhiệt độ sôi; nhiên liệu hóa thạch hữu hạn và phát thải khi đốt.", "Hóa học", "petroleum"],
    ["Rượu Etylic (C2H5OH)", "Ethanol C₂H₅OH là chất lỏng dễ cháy, tan vô hạn trong nước. Ethanol cháy tạo CO₂ và H₂O; không uống cồn công nghiệp và không tự ý sử dụng hóa chất.", "Hóa học", "ethanol"],
    ["Axit Axetic (CH3COOH)", "Acetic acid CH₃COOH có trong giấm ăn loãng, có tính acid và phản ứng với base tạo muối acetate cùng nước. Cần phân biệt giấm ăn với acid đậm đặc nguy hiểm.", "Hóa học", "acetic"],
    ["Chất béo", "Chất béo là thành phần dinh dưỡng cung cấp năng lượng, thường không tan trong nước. Cần sử dụng lượng phù hợp, cân đối với các nhóm chất khác.", "Hóa học", "fats"],
    ["Glucozơ và Saccarozơ", "Glucose là đường đơn có công thức C₆H₁₂O₆; sucrose là đường đôi có trong mía, củ cải đường. Cả hai đều là carbohydrate và có thể cung cấp năng lượng.", "Hóa học", "sugars"],
    ["Tinh bột và Xenlulozơ", "Tinh bột và cellulose đều là polysaccharide tạo từ nhiều mắt xích glucose nhưng có cấu trúc, tính chất và vai trò khác nhau. Tinh bột là chất dự trữ ở thực vật; cellulose là thành phần thành tế bào thực vật.", "Hóa học", "starch"],
    ["Protein", "Protein là đại phân tử sinh học được cấu tạo từ amino acid, có vai trò cấu trúc, xúc tác và điều hòa. Nhiệt độ cao hoặc hóa chất có thể làm biến tính protein.", "Hóa học", "protein"],
    ["Polime - Nhựa, cao su và tơ", "Polymer là chất có phân tử khối lớn gồm nhiều mắt xích liên kết. Nhựa, cao su và tơ polymer có ứng dụng rộng; cần giảm rác thải nhựa và tăng tái sử dụng, tái chế phù hợp.", "Hóa học", "polymer"],
    ["Công cơ học và công suất", "Công cơ học A=F.s khi lực cùng hướng chuyển dời; công suất P=A/t biểu thị tốc độ thực hiện công. Đơn vị công là joule, công suất là watt.", "Vật lý", "work"],
    ["Động năng - Thế năng - Cơ năng", "Vật chuyển động có động năng; vật có vị trí hoặc biến dạng có thể có thế năng. Cơ năng là tổng động năng và thế năng trong hệ đang xét.", "Vật lý", "energy"],
    ["Định luật bảo toàn cơ năng", "Khi bỏ qua ma sát và lực cản, tổng động năng và thế năng của vật được bảo toàn trong quá trình chuyển động.", "Vật lý", "conservation"],
    ["Định luật Ohm (I = U/R)", "Định luật Ohm cho đoạn mạch: I=U/R. Với điện trở không đổi, cường độ dòng điện tỉ lệ thuận với hiệu điện thế và tỉ lệ nghịch với điện trở.", "Vật lý", "ohm"],
    ["Đoạn mạch nối tiếp và đoạn mạch song song", "Mạch nối tiếp có cùng cường độ dòng điện qua các phần tử; hiệu điện thế toàn mạch bằng tổng các hiệu điện thế thành phần. Mạch song song có cùng hiệu điện thế trên các nhánh.", "Vật lý", "circuits"],
    ["Điện trở dây dẫn và biến trở", "Điện trở dây dẫn phụ thuộc vật liệu, chiều dài và tiết diện: dây dài hơn thường có điện trở lớn hơn, tiết diện lớn hơn thường có điện trở nhỏ hơn. Biến trở điều chỉnh điện trở trong mạch.", "Vật lý", "resistance"],
    ["Công suất điện và điện năng tiêu thụ", "Công suất điện P=UI; điện năng tiêu thụ A=Pt=UIt. Cần chọn thiết bị đúng công suất, sử dụng an toàn và tiết kiệm điện.", "Vật lý", "electric-power"],
    ["Từ trường của ống dây có dòng điện chạy qua", "Dòng điện qua ống dây tạo từ trường có dạng gần giống từ trường nam châm thẳng. Chiều đường sức và cực từ phụ thuộc chiều dòng điện.", "Vật lý", "coil"],
    ["Hiện tượng cảm ứng điện từ", "Khi từ thông qua cuộn dây biến đổi, trong cuộn dây có thể xuất hiện dòng điện cảm ứng. Tăng tốc độ biến đổi từ trường thường làm dòng cảm ứng lớn hơn.", "Vật lý", "induction"],
    ["Dòng điện xoay chiều", "Dòng điện xoay chiều đổi chiều luân phiên theo thời gian. Máy phát điện xoay chiều biến đổi cơ năng thành điện năng dựa trên hiện tượng cảm ứng điện từ.", "Vật lý", "alternating"],
    ["Hiện tượng khúc xạ ánh sáng", "Khúc xạ là sự đổi hướng truyền của ánh sáng khi đi xiên qua mặt phân cách giữa hai môi trường trong suốt. Tia khúc xạ và tia tới nằm trong mặt phẳng tới.", "Vật lý", "refraction"],
    ["Thấu kính hội tụ và ảnh tạo bởi thấu kính hội tụ", "Thấu kính hội tụ dày ở giữa, mỏng ở rìa. Tùy vị trí vật so với tiêu cự, ảnh có thể là ảnh thật hoặc ảnh ảo với đặc điểm khác nhau.", "Vật lý", "converging-lens"],
    ["Thấu kính phân kỳ và ảnh tạo bởi thấu kính phân kỳ", "Thấu kính phân kỳ mỏng ở giữa, dày ở rìa. Với vật thật, ảnh tạo bởi thấu kính phân kỳ thường là ảnh ảo, cùng chiều và nhỏ hơn vật.", "Vật lý", "diverging-lens"],
    ["Mắt và các tật của mắt", "Mắt tạo ảnh trên võng mạc. Cận thị thường được điều chỉnh bằng thấu kính phân kỳ; viễn thị thường được điều chỉnh bằng thấu kính hội tụ theo chỉ dẫn chuyên môn.", "Vật lý", "eye"],
    ["Kính hiển vi và kính thiên văn", "Kính hiển vi dùng hệ thấu kính để quan sát vật rất nhỏ; kính thiên văn hỗ trợ quan sát vật ở rất xa. Cần phân biệt công dụng và sử dụng an toàn.", "Vật lý", "instruments"],
    ["Men-đen và ngành Di truyền học", "Mendel dùng phương pháp lai và phân tích thế hệ con để phát hiện quy luật di truyền. Tính trạng là đặc điểm có thể di truyền; allele là các trạng thái khác nhau của cùng một gene.", "Sinh học", "mendel"],
    ["Lai một cặp tính trạng", "Trong phép lai một cặp tính trạng trội hoàn toàn với hai cá thể dị hợp Aa×Aa, kiểu gene F₂ có tỉ lệ 1AA:2Aa:1aa và kiểu hình 3 trội:1 lặn.", "Sinh học", "monohybrid"],
    ["Lai hai cặp tính trạng", "Trong phép lai AaBb×AaBb với các gene phân li độc lập và trội hoàn toàn, kiểu hình F₂ có tỉ lệ 9:3:3:1. Kết quả phụ thuộc các giả định di truyền của phép lai.", "Sinh học", "dihybrid"],
    ["ADN và bản chất của gen", "DNA gồm hai mạch polynucleotide xoắn kép; các base bổ sung A-T và G-C. Gene là một đoạn DNA mang thông tin quy định sản phẩm chức năng.", "Sinh học", "dna"],
    ["Quá trình nhân đôi ADN và tổng hợp ARN", "DNA nhân đôi theo nguyên tắc bổ sung và bán bảo toàn. Khi phiên mã, một mạch DNA làm khuôn tổng hợp RNA; trong RNA, uracil (U) thay thymine (T).", "Sinh học", "replication"],
    ["Protein và mối quan hệ ADN - ARN - Protein", "Thông tin di truyền được biểu hiện qua dòng thông tin DNA → RNA → protein. Protein được tổng hợp từ amino acid theo trình tự codon trên mRNA.", "Sinh học", "gene-expression"],
    ["Nhiễm sắc thể (NST) và quá trình nguyên phân, giảm phân", "Nhiễm sắc thể chứa DNA và protein. Nguyên phân tạo hai tế bào con thường giữ nguyên bộ nhiễm sắc thể; giảm phân tạo giao tử có bộ nhiễm sắc thể giảm một nửa.", "Sinh học", "chromosome"],
    ["Đột biến gen", "Đột biến gene là biến đổi trong cấu trúc DNA của gene. Đột biến có thể có lợi, có hại hoặc trung tính tùy gene, môi trường và tổ hợp di truyền.", "Sinh học", "gene-mutation"],
    ["Đột biến cấu trúc và số lượng nhiễm sắc thể", "Đột biến nhiễm sắc thể gồm biến đổi cấu trúc như mất, lặp, đảo, chuyển đoạn và biến đổi số lượng như lệch bội, đa bội. Tác động phụ thuộc dạng đột biến.", "Sinh học", "chromosome-mutation"],
    ["Di truyền học người và ứng dụng", "Di truyền học người góp phần giải thích một số bệnh, tư vấn sức khỏe và ứng dụng trong y học. Thông tin di truyền cá nhân cần được sử dụng có đạo đức và bảo mật.", "Sinh học", "human-genetics"]
  ];

  function makeQuestion(lessonIndex, topic, index) {
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

    if (topic === "metals") {
      if (stage === 0) set("Tính chất vật lí thường gặp của kim loại là:", pick(["dẫn điện", "dẫn nhiệt", "có ánh kim", "có tính dẻo", "dẫn điện và nhiệt"]),
        ["dễ bay hơi ở nhiệt độ thường", "không bao giờ phản ứng", "luôn ở thể khí", "tan trong mọi dung môi"], "Kim loại thường có ánh kim, dẫn điện và dẫn nhiệt; nhiều kim loại có tính dẻo.");
      else if (stage === 1) set("Một số kim loại tác dụng với acid loãng tạo muối và khí:", "hydrogen",
        ["oxygen", "nitrogen", "carbon dioxide"], "Kim loại đứng trước hydrogen trong dãy hoạt động có thể đẩy hydrogen khỏi một số acid.");
      else if (stage === 2) {
        const metals = [["Mg", "H₂"], ["Zn", "H₂"], ["Fe", "H₂"], ["Al", "H₂"], ["Cu", "không giải phóng H₂ với HCl loãng"]];
        const [metal, result] = pick(metals);
        set(`${metal} tác dụng với HCl loãng dư tạo khí nào?`, result,
          ["oxygen", "nitrogen", "carbon dioxide"], "Kim loại đứng trước hydrogen phản ứng với HCl loãng giải phóng H₂; copper không phản ứng theo cách này.");
      } else set("Phản ứng của magnesium với oxygen tạo:", "magnesium oxide",
        ["magnesium chloride", "hydrogen", "carbon dioxide"], "Magnesium cháy trong oxygen tạo MgO.");
    } else if (topic === "activity") {
      if (stage === 0) set("Kim loại đứng trước trong dãy hoạt động hóa học thường:", "hoạt động hóa học mạnh hơn kim loại đứng sau",
        ["luôn nhẹ hơn", "có khối lượng mol nhỏ hơn", "không phản ứng với chất nào", "luôn có nhiệt độ nóng chảy thấp hơn"], "Dãy hoạt động hóa học xếp kim loại theo mức độ hoạt động.");
      else if (stage === 1) set("Zn cho vào dung dịch CuSO₄ có thể xảy ra phản ứng vì:", "Zn hoạt động mạnh hơn Cu",
        ["Cu đứng trước Zn", "hai kim loại không thể phản ứng", "SO₄ là kim loại", "Zn là phi kim"], "Zn đẩy Cu khỏi dung dịch muối do hoạt động mạnh hơn.");
      else if (stage === 2) set("Cho Fe vào dung dịch CuSO₄. Hiện tượng phù hợp là:", "Fe tan dần, đồng tạo thành",
        ["không có phản ứng trong mọi điều kiện", "Fe biến thành khí oxygen", "Cu tan thành khí", "dung dịch biến thành nước tinh khiết"], "Fe đứng trước Cu nên có thể đẩy Cu khỏi muối.");
      else set("Kim loại nào có thể đẩy Ag khỏi dung dịch AgNO₃?", pick(["Cu", "Fe", "Zn", "cả Cu, Fe và Zn"]),
        ["Ag", "Au", "Hg", "không kim loại nào"], "Cu, Fe, Zn đều đứng trước Ag trong dãy hoạt động.");
    } else if (topic === "extraction") {
      if (stage === 0) set("Kim loại hoạt động rất mạnh như sodium thường được điều chế bằng:", "điện phân nóng chảy hợp chất",
        ["lọc quặng với nước", "đun nóng oxide trong không khí", "chưng cất phân đoạn", "làm lạnh dung dịch muối"], "Kim loại hoạt động mạnh khó khử bằng carbon, thường điều chế bằng điện phân nóng chảy.");
      else if (stage === 1) set("Sắt trong một số quặng oxide có thể được điều chế bằng cách:", "dùng carbon monoxide khử oxide sắt ở nhiệt độ cao",
        ["điện phân nước muối", "hòa tan quặng trong dầu", "làm lạnh quặng", "cho quặng tác dụng với nitrogen"], "CO có thể khử oxide sắt trong lò luyện kim.");
      else if (stage === 2) set("Gang và thép đều là hợp kim chủ yếu của:", "sắt với carbon",
        ["đồng với oxygen", "nhôm với nước", "chỉ carbon và hydrogen", "kẽm với chlorine"], "Gang, thép là hợp kim nền sắt có carbon và có thể có nguyên tố khác.");
      else set("Để chọn phương pháp tách kim loại khỏi quặng, cần xét chủ yếu:", "mức độ hoạt động hóa học của kim loại và dạng hợp chất",
        ["màu sắc của quặng", "hình dạng lò nung", "độ trong của quặng", "khối lượng nước mưa"], "Tính hoạt động và dạng hợp chất quyết định phương pháp luyện kim.");
    } else if (topic === "corrosion") {
      if (stage === 0) set("Ăn mòn kim loại là:", "sự phá hủy kim loại do tác động hóa học của môi trường",
        ["sự nóng chảy của mọi kim loại", "việc cắt kim loại bằng dụng cụ", "sự bay hơi của nước", "quá trình tạo hợp kim"], "Ăn mòn là quá trình kim loại bị môi trường phá hủy.");
      else if (stage === 1) set("Sắt dễ bị gỉ hơn trong môi trường:", "ẩm, có oxygen",
        ["khô hoàn toàn, không có oxygen", "chân không", "chỉ có khí helium", "không tiếp xúc môi trường"], "Nước và oxygen thúc đẩy quá trình gỉ sắt.");
      else if (stage === 2) set("Cách phù hợp để hạn chế gỉ hàng rào sắt là:", pick(["sơn phủ bề mặt", "mạ bảo vệ", "giữ bề mặt khô", "cả sơn phủ, mạ và giữ khô"]),
        ["ngâm thường xuyên trong nước muối", "cạo bỏ mọi lớp bảo vệ", "để ngoài trời ẩm", "bọc bằng vật liệu thấm nước"], "Lớp phủ cách ly kim loại khỏi nước và oxygen.");
      else set("Mạ kẽm bảo vệ sắt vì:", "lớp kẽm ngăn môi trường tiếp xúc với sắt và có thể bảo vệ điện hóa",
        ["kẽm làm sắt biến thành phi kim", "lớp mạ làm mất oxygen trong không khí", "sắt không còn là kim loại", "kẽm luôn tan hết ngay lập tức"], "Lớp mạ tạo hàng rào; kẽm còn hoạt động mạnh hơn sắt nên có tác dụng bảo vệ.");
    } else if (topic === "nonmetals") {
      if (stage === 0) set("Tính chất thường gặp của nhiều phi kim là:", "dẫn điện và dẫn nhiệt kém",
        ["luôn có ánh kim", "luôn ở thể lỏng", "dẻo và dễ dát mỏng", "luôn tan trong nước"], "Nhiều phi kim dẫn điện và dẫn nhiệt kém hơn kim loại.");
      else if (stage === 1) set("Phi kim tác dụng với oxygen thường tạo:", "oxide",
        ["muối ăn", "kim loại", "nước tinh khiết", "hợp kim"], "Nhiều phi kim cháy trong oxygen tạo oxide.");
      else if (stage === 2) set("Chất nào là phi kim ở điều kiện thường?", pick(["sulfur", "oxygen", "carbon", "cả sulfur, oxygen và carbon"]),
        ["iron", "copper", "aluminium", "sodium"], "Sulfur, oxygen và carbon đều là phi kim.");
      else set("Không nên kết luận mọi phi kim có cùng tính chất vì:", "tính chất cụ thể phụ thuộc từng nguyên tố và điều kiện",
        ["mọi phi kim đều là kim loại", "chúng không tạo hợp chất", "tất cả đều là chất lỏng", "chúng không tồn tại trong tự nhiên"], "Nhóm phi kim có nhiều nguyên tố với trạng thái và tính chất khác nhau.");
    } else if (topic === "chlorine-carbon") {
      if (stage === 0) set("Khí chlorine có màu đặc trưng:", "vàng lục",
        ["không màu trong mọi trường hợp", "đỏ nâu", "xanh lam", "trắng"], "Chlorine là khí màu vàng lục, độc.");
      else if (stage === 1) set("Than chì dẫn điện, còn kim cương rất cứng vì:", "các dạng thù hình carbon có cấu trúc khác nhau",
        ["chúng là hai nguyên tố khác nhau", "kim cương chứa nhiều nước", "than chì là kim loại lỏng", "oxygen làm chúng giống nhau"], "Các dạng thù hình có cách sắp xếp nguyên tử khác nhau.");
      else if (stage === 2) set("Khí nào tạo thành khi carbon cháy hoàn toàn trong oxygen dư?", "CO₂",
        ["CO", "H₂", "N₂"], "Cháy hoàn toàn tạo carbon dioxide.");
      else set("Carbon monoxide nguy hiểm vì:", "có thể gắn với hemoglobin, cản trở vận chuyển oxygen",
        ["có mùi thơm dễ nhận biết", "là khí cần thiết để thở", "không thể tạo ra khi cháy thiếu oxygen", "luôn làm không khí trong lành"], "CO là khí độc, làm giảm khả năng vận chuyển oxygen của máu.");
    } else if (topic === "organic") {
      if (stage === 0) set("Hợp chất hữu cơ thường là hợp chất của:", "carbon",
        ["helium", "neon", "argon", "sodium"], "Hợp chất hữu cơ chủ yếu là hợp chất của carbon, trừ một số hợp chất vô cơ đơn giản.");
      else if (stage === 1) set("Chất nào sau đây thường được xếp là hợp chất vô cơ dù có carbon?", pick(["CO₂", "CO", "muối carbonate", "cả CO₂, CO và muối carbonate"]),
        ["methane", "ethanol", "glucose", "acetic acid"], "CO, CO₂ và muối carbonate được xếp vào nhóm vô cơ.");
      else if (stage === 2) set("Chất nào là hợp chất hữu cơ?", pick(["CH₄", "C₂H₅OH", "C₆H₁₂O₆", "cả CH₄, ethanol và glucose"]),
        ["NaCl", "CaCO₃", "CO₂", "H₂O"], "Methane, ethanol và glucose là các hợp chất hữu cơ.");
      else set("Vì sao không xếp mọi hợp chất chứa carbon vào hữu cơ?", "một số hợp chất carbon đơn giản như CO₂, CO và carbonate được xếp vô cơ",
        ["carbon không tạo hợp chất", "mọi hợp chất carbon là kim loại", "hợp chất hữu cơ không chứa carbon", "chỉ chất khí mới là vô cơ"], "Phân loại có một số ngoại lệ vô cơ chứa carbon.");
    } else if (topic === "methane-ethylene") {
      if (stage === 0) set("Công thức phân tử của methane là:", "CH₄",
        ["C₂H₄", "C₂H₂", "C₆H₆"], "Methane có công thức CH₄.");
      else if (stage === 1) set("Ethylene có thể tham gia phản ứng cộng vì phân tử có:", "liên kết đôi C=C",
        ["chỉ liên kết đơn", "liên kết ion", "ion kim loại", "không có liên kết"], "Liên kết đôi trong ethylene có thể bị phá vỡ trong phản ứng cộng.");
      else if (stage === 2) set("Đốt cháy hoàn toàn methane tạo:", "CO₂ và H₂O",
        ["CO và H₂", "C và H₂", "CH₃OH", "NaCl và nước"], "Hydrocarbon cháy đủ oxygen tạo carbon dioxide và nước.");
      else {
        const moles = v;
        numeric(`CH₄ + 2O₂ → CO₂ + 2H₂O. ${moles} mol CH₄ cháy hoàn toàn cần bao nhiêu mol O₂?`,
          2 * moles, "mol", "Tỉ lệ CH₄:O₂ là 1:2.");
      }
    } else if (topic === "acetylene-benzene") {
      if (stage === 0) set("Acetylene có công thức:", "C₂H₂",
        ["CH₄", "C₂H₄", "C₆H₆"], "Acetylene có công thức C₂H₂.");
      else if (stage === 1) set("Benzene cần được sử dụng thận trọng vì:", "độc và dễ cháy",
        ["là nước uống", "không thể bay hơi", "không có nguy cơ sức khỏe", "là khí trơ"], "Benzene độc và dễ cháy, cần hạn chế phơi nhiễm.");
      else if (stage === 2) set("Chất có liên kết ba trong phân tử là:", "C₂H₂",
        ["CH₄", "C₂H₄", "C₆H₆"], "Acetylene có liên kết ba giữa hai nguyên tử carbon.");
      else set("Biện pháp an toàn khi làm việc với benzene là:", "tránh hít hơi, tránh nguồn lửa và tuân thủ hướng dẫn an toàn",
        ["ngửi trực tiếp để nhận biết", "đun trong phòng kín", "đổ xuống cống", "dùng làm dung môi trên da"], "Benzene độc, dễ cháy; cần kiểm soát phơi nhiễm và nguồn bắt lửa.");
    } else if (topic === "petroleum") {
      if (stage === 0) set("Dầu mỏ chủ yếu là hỗn hợp của:", "hydrocarbon",
        ["muối vô cơ", "kim loại nguyên chất", "protein", "nước tinh khiết"], "Dầu mỏ là hỗn hợp nhiều hydrocarbon.");
      else if (stage === 1) set("Chưng cất phân đoạn dầu mỏ dựa chủ yếu vào sự khác nhau về:", "nhiệt độ sôi",
        ["màu sắc", "độ cứng", "từ tính", "điện tích hạt nhân"], "Các phân đoạn được tách theo khoảng nhiệt độ sôi khác nhau.");
      else if (stage === 2) set("Dầu mỏ và khí thiên nhiên được xem là tài nguyên:", "hữu hạn, cần sử dụng tiết kiệm",
        ["tái tạo tức thời", "không bao giờ cạn", "không tạo phát thải khi đốt", "không có giá trị năng lượng"], "Nhiên liệu hóa thạch hình thành rất lâu và có trữ lượng hữu hạn.");
      else set("Biện pháp giảm tác động môi trường khi sử dụng nhiên liệu hóa thạch là:", "tiết kiệm năng lượng và tăng sử dụng nguồn năng lượng sạch",
        ["đốt nhiên liệu trong nhà", "xả khí thải chưa xử lí", "lãng phí điện và xăng", "khai thác không kiểm soát"], "Giảm tiêu thụ và phát thải hạn chế ô nhiễm và sử dụng tài nguyên.");
    } else if (topic === "ethanol") {
      if (stage === 0) set("Công thức của ethanol là:", "C₂H₅OH",
        ["CH₃COOH", "CH₄", "C₆H₁₂O₆"], "Ethanol có công thức C₂H₅OH.");
      else if (stage === 1) set("Ethanol tan vô hạn trong:", "nước",
        ["dầu ăn", "kim loại nóng chảy", "cát", "khí nitrogen"], "Ethanol hòa tan hoàn toàn với nước.");
      else if (stage === 2) set("Ethanol cháy đủ oxygen tạo:", "CO₂ và H₂O",
        ["NaCl và H₂", "C và O₂", "CH₄ và nước", "kim loại và oxide"], "Phản ứng cháy hoàn toàn của ethanol tạo carbon dioxide và nước.");
      else set("Cách xử lí an toàn với cồn không rõ nguồn gốc là:", "không uống, không nếm và báo người có trách nhiệm",
        ["dùng thử một lượng nhỏ", "pha vào đồ uống", "đun trong phòng kín", "bảo quản cạnh ngọn lửa"], "Cồn không rõ nguồn gốc có thể chứa chất độc; tuyệt đối không uống hoặc nếm.");
    } else if (topic === "acetic") {
      if (stage === 0) set("Công thức của acetic acid là:", "CH₃COOH",
        ["C₂H₅OH", "C₆H₁₂O₆", "CH₄"], "Acetic acid có công thức CH₃COOH.");
      else if (stage === 1) set("Giấm ăn có vị chua chủ yếu do chứa:", "acetic acid loãng",
        ["ethanol nguyên chất", "sodium chloride", "carbon monoxide", "benzene"], "Giấm ăn là dung dịch acetic acid loãng.");
      else if (stage === 2) set("Acetic acid tác dụng với NaOH tạo:", "sodium acetate và nước",
        ["ethanol và oxygen", "methane và nước", "sodium metal và hydrogen", "carbon và nitrogen"], "Phản ứng trung hòa tạo muối acetate và nước.");
      else set("Vì sao không được tự ý dùng acetic acid đậm đặc thay giấm ăn?", "acid đậm đặc có thể gây bỏng và nguy hiểm",
        ["acid đậm đặc là nước tinh khiết", "mọi nồng độ đều an toàn để uống", "acid không tác dụng với cơ thể", "acid đậm đặc không có tính ăn mòn"], "Acid đậm đặc có tính ăn mòn, khác hoàn toàn giấm ăn loãng dùng thực phẩm.");
    } else if (topic === "fats") {
      if (stage === 0) set("Chất béo có vai trò dinh dưỡng quan trọng là:", "cung cấp và dự trữ năng lượng",
        ["vận chuyển xung thần kinh", "tạo oxygen", "thay thế hoàn toàn nước", "phân hủy xương"], "Chất béo là nguồn và dạng dự trữ năng lượng.");
      else if (stage === 1) set("Chất béo thường:", "không tan trong nước",
        ["tan vô hạn trong nước", "là kim loại", "luôn là khí", "không chứa carbon"], "Chất béo kị nước và không tan trong nước.");
      else if (stage === 2) set("Chế độ ăn hợp lí nên:", "cân đối chất béo với các nhóm chất khác",
        ["loại bỏ hoàn toàn mọi chất béo", "chỉ ăn chất béo", "ăn không giới hạn chất béo", "thay nước bằng dầu"], "Cơ thể cần chất béo nhưng khẩu phần cần cân bằng.");
      else set("Ăn quá nhiều thực phẩm giàu chất béo thường xuyên có thể:", "làm tăng nguy cơ mất cân đối dinh dưỡng và ảnh hưởng sức khỏe",
        ["đảm bảo không mắc bệnh", "thay thế nhu cầu vận động", "làm cơ thể không cần protein", "luôn có lợi bất kể lượng ăn"], "Lượng chất béo quá mức trong khẩu phần có thể bất lợi cho sức khỏe.");
    } else if (topic === "sugars") {
      if (stage === 0) set("Công thức phân tử của glucose là:", "C₆H₁₂O₆",
        ["C₂H₅OH", "CH₃COOH", "C₆H₆"], "Glucose có công thức C₆H₁₂O₆.");
      else if (stage === 1) set("Sucrose thường có nhiều trong:", "mía và củ cải đường",
        ["dầu mỏ", "quặng sắt", "không khí", "nước biển tinh khiết"], "Sucrose là đường mía, có nhiều trong mía và củ cải đường.");
      else if (stage === 2) set("Glucose và sucrose đều thuộc nhóm:", "carbohydrate",
        ["kim loại", "oxide", "protein", "polymer tổng hợp"], "Glucose và sucrose là carbohydrate.");
      else set("Đường trong thực phẩm cung cấp:", "năng lượng, nhưng cần sử dụng phù hợp",
        ["năng lượng vô hạn không ảnh hưởng sức khỏe", "oxygen cho phổi", "chất xơ không tiêu hóa", "kháng thể đặc hiệu"], "Đường cung cấp năng lượng nhưng ăn quá nhiều không có lợi cho sức khỏe.");
    } else if (topic === "starch") {
      if (stage === 0) set("Tinh bột và cellulose đều là:", "polysaccharide",
        ["kim loại", "acid vô cơ", "đơn chất", "khí hiếm"], "Cả hai là carbohydrate polymer tạo từ nhiều đơn vị đường.");
      else if (stage === 1) set("Tinh bột có vai trò chủ yếu ở thực vật là:", "dự trữ chất dinh dưỡng",
        ["tạo thành thành tế bào", "vận chuyển oxygen", "tạo hormone động vật", "làm chất diệp lục"], "Tinh bột là dạng dự trữ carbohydrate ở thực vật.");
      else if (stage === 2) set("Cellulose là thành phần quan trọng của:", "thành tế bào thực vật",
        ["màng hồng cầu", "xương động vật", "dầu mỏ", "khí quyển"], "Cellulose góp phần tạo độ bền thành tế bào thực vật.");
      else set("Tinh bột và cellulose có tính chất khác nhau chủ yếu do:", "cấu trúc và cách liên kết các mắt xích glucose khác nhau",
        ["chúng không chứa carbon", "cellulose là kim loại", "tinh bột chỉ gồm nước", "cả hai là cùng một chất"], "Khác biệt cấu trúc làm chúng có tính chất và vai trò khác nhau.");
    } else if (topic === "protein") {
      if (stage === 0) set("Protein được cấu tạo từ các đơn vị:", "amino acid",
        ["nucleotide", "acid béo", "ion kim loại", "phân tử oxygen"], "Protein là chuỗi gồm các amino acid.");
      else if (stage === 1) set("Nhiệt độ cao có thể làm protein:", "biến tính",
        ["tạo kim loại", "đổi thành DNA hoàn toàn", "trở thành khí hiếm", "không bao giờ thay đổi"], "Nhiệt có thể làm biến đổi cấu trúc không gian của protein.");
      else if (stage === 2) set("Enzyme trong cơ thể thuộc nhóm chất nào?", "protein",
        ["kim loại", "muối ăn", "nhiên liệu hóa thạch", "cellulose"], "Phần lớn enzyme là protein có vai trò xúc tác sinh học.");
      else set("Vì sao protein trong lòng trắng trứng đông lại khi đun nóng?", "nhiệt làm biến đổi cấu trúc protein",
        ["protein biến thành nguyên tố mới", "nước biến thành kim loại", "nhiệt làm protein không chứa nguyên tử", "mọi liên kết đều không đổi"], "Nhiệt làm protein biến tính và đông tụ.");
    } else if (topic === "polymer") {
      if (stage === 0) set("Polymer là chất có:", "phân tử khối lớn gồm nhiều mắt xích liên kết",
        ["chỉ một nguyên tử", "một phân tử nước", "khối lượng bằng không", "chỉ ion đơn nguyên tử"], "Polymer gồm nhiều đơn vị cấu trúc lặp lại.");
      else if (stage === 1) set("Nhựa, cao su và nhiều loại tơ là:", "vật liệu polymer",
        ["kim loại nguyên chất", "khí hiếm", "muối khoáng", "đơn chất"], "Nhiều loại nhựa, cao su và tơ được tạo từ polymer.");
      else if (stage === 2) set("Biện pháp phù hợp để giảm rác thải nhựa là:", "giảm dùng một lần, tái sử dụng và phân loại tái chế",
        ["đốt nhựa ngoài trời", "xả nhựa xuống sông", "dùng thêm túi dùng một lần", "chôn lẫn rác ở nguồn nước"], "Giảm tiêu dùng, tái sử dụng và phân loại giúp giảm tác động môi trường.");
      else set("Vì sao cần phân loại rác polymer trước khi tái chế?", "các polymer khác nhau có tính chất và quy trình xử lí khác nhau",
        ["mọi polymer đều giống hệt nhau", "nhựa không thể gây ô nhiễm", "phân loại làm tăng rác", "polymer không thể tái sử dụng"], "Phân loại đúng giúp lựa chọn quy trình tái chế phù hợp.");
    } else if (topic === "work") {
      if (stage === 0) set("Công cơ học được thực hiện khi:", "lực tác dụng làm vật dịch chuyển theo phương có thành phần của lực",
        ["vật không chịu lực", "không có chuyển dời", "chỉ có nhiệt độ thay đổi", "vật đứng yên tuyệt đối"], "Công cơ học gắn với lực và chuyển dời.");
      else if (stage === 1) numeric(`Lực ${10 * v} N cùng hướng làm vật dịch chuyển ${v} m. Công là:`, 10 * v * v, "J", "A=F·s.");
      else if (stage === 2) numeric(`Một máy thực hiện công ${100 * v} J trong ${v} s. Công suất là:`, 100, "W", "P=A/t=100 W.");
      else numeric(`Công suất 50 W duy trì trong ${2 * v} s thực hiện công:`, 100 * v, "J", "A=P·t.");
    } else if (topic === "energy") {
      if (stage === 0) set("Vật đang chuyển động có:", "động năng",
        ["chỉ thế năng đàn hồi", "không có năng lượng", "chỉ hóa năng", "khối lượng bằng không"], "Vật chuyển động có động năng.");
      else if (stage === 1) set("Vật ở trên cao so với mốc đã chọn có thể có:", "thế năng trọng trường",
        ["chỉ điện năng", "chỉ năng lượng âm", "không có năng lượng", "nhiệt độ bằng không"], "Vị trí trong trọng trường gắn với thế năng.");
      else if (stage === 2) set("Cơ năng của vật trong cơ học là tổng:", "động năng và thế năng",
        ["khối lượng và thể tích", "công suất và thời gian", "nhiệt độ và áp suất", "điện tích và dòng điện"], "Cơ năng bằng tổng động năng và thế năng.");
      else set("Một quả bóng đang rơi, bỏ qua lực cản không khí. Trong quá trình rơi:", "thế năng giảm, động năng tăng",
        ["thế năng và động năng đều luôn giảm", "thế năng tăng, động năng giảm", "cơ năng mất hoàn toàn", "khối lượng tăng liên tục"], "Thế năng chuyển hóa thành động năng.");
    } else if (topic === "conservation") {
      if (stage === 0) set("Khi bỏ qua ma sát, cơ năng của vật:", "được bảo toàn",
        ["luôn tăng", "luôn giảm về không", "biến thành khối lượng", "chỉ còn thế năng"], "Không có lực cản làm tiêu hao cơ năng thì tổng động năng và thế năng không đổi.");
      else if (stage === 1) set("Vật rơi không vận tốc đầu, bỏ qua lực cản. Khi vật thấp dần:", "thế năng chuyển hóa thành động năng",
        ["động năng chuyển hết thành nhiệt ngay lập tức", "khối lượng biến mất", "thế năng tăng", "cơ năng tăng vô hạn"], "Cơ năng bảo toàn, thế năng giảm và động năng tăng.");
      else if (stage === 2) {
        const height = v * 2;
        numeric(`Vật được thả từ độ cao ${height} m, lấy g=10 m/s². Tốc độ ngay trước khi chạm đất (bỏ qua cản) là:`,
          Math.round(Math.sqrt(2 * 10 * height)), "m/s", "mgh=mv²/2 nên v=√(2gh).");
      } else set("Con lắc dao động, bỏ qua ma sát. Ở vị trí thấp nhất, động năng:", "lớn nhất, còn thế năng nhỏ nhất",
        ["nhỏ nhất, thế năng lớn nhất", "bằng không trong mọi lần", "không liên quan đến thế năng", "làm cơ năng mất đi"], "Thế năng chuyển thành động năng khi vật đi xuống.");
    } else if (topic === "ohm") {
      if (stage === 0) set("Biểu thức định luật Ohm là:", "I=U/R",
        ["I=UR", "I=R/U", "U=I/R", "R=IU"], "Cường độ dòng điện bằng hiệu điện thế chia điện trở.");
      else if (stage === 1) numeric(`Điện trở ${2 * v} Ω mắc vào hiệu điện thế ${4 * v} V. Cường độ dòng điện là:`, 2, "A", "I=U/R.");
      else if (stage === 2) numeric(`Dòng điện ${v} A chạy qua điện trở ${3 * v} Ω. Hiệu điện thế là:`, 3 * v * v, "V", "U=IR.");
      else numeric(`Hiệu điện thế ${5 * v} V đặt vào điện trở ${v} Ω. Cường độ dòng điện là:`, 5, "A", "I=U/R.");
    } else if (topic === "circuits") {
      if (stage === 0) set("Trong mạch nối tiếp, đại lượng như nhau qua các điện trở là:", "cường độ dòng điện",
        ["hiệu điện thế", "điện trở", "công suất", "điện năng"], "Dòng điện qua các phần tử mắc nối tiếp có cường độ như nhau.");
      else if (stage === 1) set("Trong mạch song song, hiệu điện thế trên mỗi nhánh:", "bằng hiệu điện thế giữa hai đầu mạch",
        ["luôn bằng không", "bằng tổng các điện trở", "khác nhau theo số điện tích", "bằng cường độ dòng điện"], "Các nhánh song song có cùng hiệu điện thế.");
      else if (stage === 2) numeric(`Hai điện trở ${v} Ω và ${2 * v} Ω mắc nối tiếp. Điện trở tương đương là:`, 3 * v, "Ω", "Điện trở nối tiếp cộng lại.");
      else numeric(`Hai điện trở ${2 * v} Ω và ${2 * v} Ω mắc song song. Điện trở tương đương là:`, v, "Ω", "Hai điện trở bằng nhau mắc song song có điện trở tương đương bằng một nửa mỗi điện trở.");
    } else if (topic === "resistance") {
      if (stage === 0) set("Dây dẫn dài hơn, cùng vật liệu và tiết diện, thường có điện trở:", "lớn hơn",
        ["nhỏ hơn", "bằng không", "không phụ thuộc chiều dài", "bằng khối lượng"], "Điện trở tăng theo chiều dài dây.");
      else if (stage === 1) set("Tăng tiết diện dây, giữ nguyên vật liệu và chiều dài, điện trở thường:", "giảm",
        ["tăng", "không đổi", "bằng vô hạn", "đổi thành hiệu điện thế"], "Điện trở tỉ lệ nghịch với tiết diện.");
      else if (stage === 2) numeric(`Dây dẫn có điện trở 12 Ω. Khi mắc nối tiếp thêm điện trở ${v} Ω, tổng điện trở là:`, 12 + v, "Ω", "Điện trở nối tiếp cộng lại.");
      else set("Biến trở được dùng để:", "điều chỉnh điện trở và qua đó điều chỉnh dòng điện",
        ["đo khối lượng", "tạo ra điện tích mới", "đổi dòng điện thành âm thanh trong mọi trường hợp", "thay thế nguồn điện"], "Thay đổi giá trị điện trở làm thay đổi cường độ dòng điện.");
    } else if (topic === "electric-power") {
      if (stage === 0) set("Công suất điện có thể tính bằng:", "P=UI",
        ["P=U/I", "P=I/U", "P=U+I", "P=U−I"], "Công suất điện bằng hiệu điện thế nhân cường độ dòng điện.");
      else if (stage === 1) numeric(`Thiết bị hoạt động ở ${2 * v} V và ${v} A. Công suất điện là:`, 2 * v * v, "W", "P=UI.");
      else if (stage === 2) numeric(`Thiết bị công suất ${100 * v} W dùng trong ${v} giờ tiêu thụ:`, 100 * v, "Wh", "A=Pt.");
      else set("Biện pháp sử dụng điện an toàn và tiết kiệm là:", "tắt thiết bị không dùng và không chạm điện khi tay ướt",
        ["dùng dây hở", "cắm quá tải ổ điện", "tự sửa thiết bị đang có điện", "để thiết bị nóng bị che kín"], "Ngắt thiết bị không cần thiết và tránh tiếp xúc điện nguy hiểm.");
    } else if (topic === "coil") {
      if (stage === 0) set("Dòng điện chạy qua ống dây tạo ra:", "từ trường",
        ["trọng trường mới", "chất khí", "ánh sáng trong mọi trường hợp", "khối lượng"], "Dòng điện có tác dụng từ.");
      else if (stage === 1) set("Từ trường của ống dây có dòng điện gần giống từ trường của:", "nam châm thẳng",
        ["thấu kính", "đòn bẩy", "nguồn nhiệt", "mạch hở"], "Ống dây có dòng điện tạo hai cực từ như nam châm.");
      else if (stage === 2) set("Đổi chiều dòng điện trong ống dây thì:", "chiều từ trường và các cực từ đổi",
        ["từ trường luôn mất vĩnh viễn", "ống dây biến thành điện trở bằng không", "không có gì có thể thay đổi", "dây dẫn ngừng tồn tại"], "Chiều dòng điện quyết định chiều từ trường.");
      else set("Muốn tăng tác dụng từ của nam châm điện, có thể:", "tăng cường độ dòng điện hoặc số vòng dây",
        ["ngắt dòng điện", "giảm số vòng dây về không", "mở mạch", "thay lõi bằng giấy"], "Từ trường mạnh hơn khi tăng dòng điện hoặc số vòng dây phù hợp.");
    } else if (topic === "induction") {
      if (stage === 0) set("Dòng điện cảm ứng xuất hiện khi:", "từ thông qua cuộn dây biến đổi",
        ["nam châm và cuộn dây đứng yên tương đối mãi mãi", "mạch không có cuộn dây", "nhiệt độ không đổi", "không có từ trường"], "Từ thông biến đổi có thể tạo dòng điện cảm ứng.");
      else if (stage === 1) set("Đưa nam châm lại gần cuộn dây kín có thể:", "làm xuất hiện dòng điện cảm ứng",
        ["làm cuộn dây biến mất", "tạo dòng điện không cần biến đổi từ trường", "làm nam châm mất khối lượng", "không bao giờ tạo hiện tượng"], "Chuyển động tương đối làm từ trường qua cuộn dây biến đổi.");
      else if (stage === 2) set("Để dòng cảm ứng lớn hơn, có thể:", "làm từ trường qua cuộn dây biến đổi nhanh hơn",
        ["giữ mọi thứ đứng yên", "ngắt cuộn dây khỏi mọi mạch", "bỏ nam châm ra xa và không chuyển động", "giảm tốc độ biến đổi về không"], "Tốc độ biến đổi từ thông lớn hơn thường tạo dòng cảm ứng lớn hơn.");
      else set("Máy phát điện hoạt động dựa trên:", "hiện tượng cảm ứng điện từ",
        ["phản xạ ánh sáng", "sự nở vì nhiệt", "áp suất chất lỏng", "quang hợp"], "Máy phát điện tạo dòng điện khi từ thông biến đổi.");
    } else if (topic === "alternating") {
      if (stage === 0) set("Dòng điện xoay chiều là dòng điện:", "đổi chiều luân phiên theo thời gian",
        ["chỉ chạy một chiều mãi mãi", "không có điện tích chuyển động", "luôn bằng không", "chỉ tồn tại trong pin"], "Dòng điện xoay chiều đổi chiều tuần hoàn.");
      else if (stage === 1) set("Máy phát điện xoay chiều biến đổi:", "cơ năng thành điện năng",
        ["điện năng thành khối lượng", "nhiệt năng thành chất", "ánh sáng thành âm thanh", "hóa năng thành protein"], "Máy phát điện chuyển cơ năng thành điện năng.");
      else if (stage === 2) set("Cơ sở tạo ra dòng điện trong máy phát là:", "từ thông qua cuộn dây biến đổi",
        ["áp suất khí quyển", "sự bay hơi của nước", "phản xạ âm", "lực ma sát bằng không"], "Máy phát hoạt động dựa trên cảm ứng điện từ.");
      else set("Để sử dụng điện xoay chiều an toàn, cần:", "dùng thiết bị đúng định mức và không tiếp xúc phần dẫn điện hở",
        ["chạm dây điện để kiểm tra", "dùng dây bị hở", "quá tải ổ cắm", "để nước gần thiết bị điện"], "Tuân thủ định mức và tránh tiếp xúc điện hở giúp phòng điện giật, cháy.");
    } else if (topic === "refraction") {
      if (stage === 0) set("Khúc xạ ánh sáng là hiện tượng:", "đổi hướng truyền khi ánh sáng qua mặt phân cách hai môi trường",
        ["ánh sáng bị vật hấp thụ hoàn toàn", "ánh sáng luôn truyền thẳng qua mọi môi trường", "âm truyền trong chân không", "vật tự phát sáng"], "Khúc xạ là sự đổi hướng truyền ánh sáng khi qua mặt phân cách.");
      else if (stage === 1) set("Chiếc đũa nhìn như bị gãy tại mặt nước chủ yếu do:", "ánh sáng bị khúc xạ khi truyền từ nước ra không khí",
        ["đũa thực sự bị gãy", "nước làm mất ánh sáng", "âm thanh làm lệch đũa", "trọng lực đổi hướng ánh sáng"], "Tia sáng đổi hướng tại mặt phân cách nước-không khí.");
      else if (stage === 2) set("Tia tới xiên truyền từ không khí vào nước thường:", "bị khúc xạ, đổi hướng tại mặt phân cách",
        ["không đổi phương trong mọi trường hợp", "biến thành sóng âm", "dừng hẳn tại mặt nước", "tạo ra vật mới"], "Ánh sáng truyền xiên giữa hai môi trường trong suốt thường bị khúc xạ.");
      else set("Muốn giải thích vị trí biểu kiến của vật dưới nước, cần xét:", "đường truyền ánh sáng khúc xạ tại mặt phân cách",
        ["chỉ khối lượng của vật", "sự truyền âm", "lực đẩy của không khí", "sự nở vì nhiệt"], "Mắt nhìn theo tia sáng tới mắt; tia bị khúc xạ nên vị trí ảnh biểu kiến khác vị trí thật.");
    } else if (topic === "converging-lens") {
      if (stage === 0) set("Thấu kính hội tụ thường:", "dày ở giữa, mỏng ở rìa",
        ["mỏng ở giữa, dày ở rìa", "phẳng hoàn toàn", "không cho ánh sáng truyền qua", "chỉ có một mặt"], "Thấu kính hội tụ có phần giữa dày hơn rìa.");
      else if (stage === 1) set("Vật đặt ngoài tiêu cự của thấu kính hội tụ có thể tạo:", "ảnh thật",
        ["chỉ ảnh ảo trong mọi trường hợp", "không tạo ảnh", "ảnh âm", "ảnh bằng không"], "Vật ngoài tiêu cự có thể cho ảnh thật.");
      else if (stage === 2) set("Ảnh thật của thấu kính hội tụ có thể:", "hứng được trên màn",
        ["không thể hứng trên màn", "luôn cùng chiều và nhỏ hơn vật", "chỉ xuất hiện trong gương", "không có vị trí"], "Ảnh thật là nơi các tia ló hội tụ và có thể hứng trên màn.");
      else set("Khi vật đặt giữa thấu kính hội tụ và tiêu điểm, ảnh thường là:", "ảnh ảo, cùng chiều và lớn hơn vật",
        ["ảnh thật, ngược chiều và nhỏ hơn vật", "không có ảnh", "ảnh thật cùng chiều trong mọi trường hợp", "ảnh bằng đúng tiêu cự"], "Vật trong khoảng tiêu cự cho ảnh ảo, cùng chiều, phóng đại.");
    } else if (topic === "diverging-lens") {
      if (stage === 0) set("Thấu kính phân kỳ thường:", "mỏng ở giữa, dày ở rìa",
        ["dày ở giữa, mỏng ở rìa", "không trong suốt", "chỉ có mặt phẳng", "làm mọi tia sáng hội tụ"], "Thấu kính phân kỳ có giữa mỏng hơn rìa.");
      else if (stage === 1) set("Ảnh của vật thật qua thấu kính phân kỳ thường là:", "ảnh ảo, cùng chiều và nhỏ hơn vật",
        ["ảnh thật, ngược chiều", "ảnh ảo, ngược chiều và lớn hơn vật", "không có ảnh", "ảnh thật luôn lớn hơn"], "Thấu kính phân kỳ tạo ảnh ảo, cùng chiều, nhỏ hơn vật.");
      else if (stage === 2) set("Ảnh ảo qua thấu kính phân kỳ:", "không hứng được trên màn",
        ["luôn hứng được trên màn", "luôn ngược chiều", "là vật thật", "không thể quan sát"], "Ảnh ảo không hứng được trên màn.");
      else set("Thấu kính nào thường dùng để sửa tật cận thị?", "thấu kính phân kỳ",
        ["thấu kính hội tụ", "gương phẳng", "lăng kính không màu", "kính lọc âm"], "Thấu kính phân kỳ giúp điều chỉnh ảnh của mắt cận.");
    } else if (topic === "eye") {
      if (stage === 0) set("Ảnh của vật nhìn rõ được tạo trên:", "võng mạc",
        ["giác mạc ngoài không khí", "màng nhĩ", "thủy tinh thể ngoài mắt", "dây thần kinh vận động"], "Mắt điều tiết để ảnh rơi trên võng mạc.");
      else if (stage === 1) set("Cận thị thường được điều chỉnh bằng:", "thấu kính phân kỳ",
        ["thấu kính hội tụ", "gương cầu", "kính lọc âm", "thước đo"], "Kính phân kỳ giúp đưa ảnh của vật xa về võng mạc.");
      else if (stage === 2) set("Viễn thị thường được điều chỉnh bằng:", "thấu kính hội tụ",
        ["thấu kính phân kỳ", "gương phẳng", "kính râm bất kì", "không cần thăm khám"], "Thấu kính hội tụ hỗ trợ đưa ảnh về võng mạc ở người viễn thị.");
      else set("Khi nhìn vật ở gần rồi chuyển sang vật ở xa, mắt cần:", "điều tiết để ảnh vẫn hội tụ trên võng mạc",
        ["đưa ảnh ra ngoài mắt", "ngừng hoạt động thủy tinh thể", "thay đổi thính giác", "làm võng mạc biến mất"], "Mắt điều tiết để duy trì ảnh rõ trên võng mạc.");
    } else if (topic === "instruments") {
      if (stage === 0) set("Kính hiển vi dùng chủ yếu để:", "quan sát vật rất nhỏ",
        ["quan sát vật rất xa trong thiên văn", "đo khối lượng", "đo nhiệt độ", "tạo dòng điện"], "Kính hiển vi phóng đại vật nhỏ.");
      else if (stage === 1) set("Kính thiên văn hỗ trợ quan sát:", "các vật ở rất xa",
        ["vi khuẩn trong mẫu", "các tế bào không dùng mẫu", "nhiệt độ cơ thể", "độ dài bàn học"], "Kính thiên văn giúp quan sát vật ở xa.");
      else if (stage === 2) set("Dụng cụ phù hợp để quan sát tế bào thực vật là:", "kính hiển vi",
        ["kính thiên văn", "ống nhòm sân khấu", "nhiệt kế", "ampe kế"], "Tế bào có kích thước nhỏ, cần kính hiển vi.");
      else set("Khi sử dụng kính quang học, cần:", "làm theo hướng dẫn và không nhìn trực tiếp Mặt Trời qua kính",
        ["hướng kính vào Mặt Trời để thử", "tự ý tháo thấu kính", "để kính rơi va đập", "chạm tay bẩn vào bề mặt quang học"], "Ánh sáng Mặt Trời hội tụ có thể gây tổn thương mắt; cần bảo quản kính đúng cách.");
    } else if (topic === "mendel") {
      if (stage === 0) set("Mendel nổi tiếng với các thí nghiệm di truyền trên:", "cây đậu Hà Lan",
        ["vi khuẩn", "cá voi", "nấm men", "đá vôi"], "Mendel dùng cây đậu Hà Lan để nghiên cứu sự di truyền tính trạng.");
      else if (stage === 1) set("Allele là:", "các trạng thái khác nhau của cùng một gene",
        ["một loại tế bào máu", "một cơ quan", "một protein duy nhất", "một môi trường sống"], "Allele là các dạng khác nhau của cùng gene.");
      else if (stage === 2) set("Tính trạng là:", "đặc điểm có thể biểu hiện và được di truyền",
        ["một loại phân tử nước", "một quá trình đo", "một cơ quan riêng", "một dạng năng lượng"], "Tính trạng là đặc điểm của cơ thể chịu ảnh hưởng di truyền và môi trường.");
      else set("Mendel dùng phép lai và phân tích đời con để:", "phát hiện quy luật di truyền tính trạng",
        ["đo tốc độ ánh sáng", "tạo ra nguyên tố hóa học", "xác định khối lượng riêng", "điều chế kim loại"], "Phương pháp lai giúp Mendel nhận ra các quy luật di truyền.");
    } else if (topic === "monohybrid") {
      if (stage === 0) set("Trong phép lai Aa×Aa, mỗi bố mẹ tạo các loại giao tử:", "A và a",
        ["chỉ AA", "Aa và aa", "A, a, Aa", "chỉ a"], "Cá thể dị hợp Aa tạo hai loại giao tử A và a.");
      else if (stage === 1) set("Với trội hoàn toàn, kiểu hình ở đời con Aa×Aa có tỉ lệ:", "3 trội : 1 lặn",
        ["1 trội : 1 lặn", "1 trội : 2 lặn", "9 trội : 3 lặn", "toàn lặn"], "Tổ hợp AA, Aa, Aa, aa tạo tỉ lệ kiểu hình 3:1.");
      else if (stage === 2) {
        const counts = [4, 8, 12, 16, 20][v - 1];
        numeric(`Trong ${counts} cá thể đời con theo tỉ lệ 3:1, số cá thể kiểu hình lặn dự kiến là:`, counts / 4, "cá thể", "Kiểu hình lặn chiếm 1/4 đời con.");
      } else set("Phép lai Aa×aa với trội hoàn toàn cho tỉ lệ kiểu hình:", "1 trội : 1 lặn",
        ["3 trội : 1 lặn", "toàn trội", "toàn lặn", "9:3:3:1"], "Aa tạo giao tử A,a; aa chỉ tạo giao tử a.");
    } else if (topic === "dihybrid") {
      if (stage === 0) set("Trong phép lai AaBb, nếu phân li độc lập, số loại giao tử là:", "4",
        ["1", "2", "3", "8"], "AaBb tạo AB, Ab, aB, ab.");
      else if (stage === 1) set("Tỉ lệ kiểu hình F₂ thường gặp trong AaBb×AaBb, trội hoàn toàn và phân li độc lập là:", "9:3:3:1",
        ["3:1", "1:2:1", "1:1:1:1", "9:7"], "Hai cặp gene phân li độc lập cho tỉ lệ kiểu hình 9:3:3:1 trong điều kiện nêu.");
      else if (stage === 2) numeric(`Trong 16 tổ hợp đời con theo tỉ lệ 9:3:3:1, số cá thể mang cả hai tính trạng trội dự kiến là:`, 9, "cá thể", "Nhóm hai tính trạng trội chiếm 9/16.");
      else set("Tỉ lệ 9:3:3:1 không áp dụng trực tiếp khi:", "các gene không phân li độc lập hoặc điều kiện trội hoàn toàn không thỏa",
        ["hai cặp tính trạng được xét", "các cá thể có DNA", "có sự hình thành giao tử", "mỗi bố mẹ tạo giao tử"], "Tỉ lệ cần các giả định phân li độc lập và trội hoàn toàn.");
    } else if (topic === "dna") {
      if (stage === 0) set("Trong DNA, base A bổ sung với:", "T",
        ["G", "C", "U", "A"], "Trong DNA, A bắt cặp với T.");
      else if (stage === 1) set("Trong DNA, base G bổ sung với:", "C",
        ["A", "T", "U", "G"], "Trong DNA, G bắt cặp với C.");
      else if (stage === 2) {
        const base = pick([["A", "T"], ["T", "A"], ["G", "C"], ["C", "G"], ["A", "T"]]);
        set(`Base ${base[0]} trên một mạch DNA bổ sung với base nào trên mạch kia?`, base[1],
          ["A", "T", "G", "C"].filter((x) => x !== base[1]), "Nguyên tắc bổ sung của DNA là A-T và G-C.");
      } else set("Gene được hiểu là:", "một đoạn DNA mang thông tin quy định sản phẩm chức năng",
        ["toàn bộ tế bào", "một loại mô", "một phân tử lipid", "một cơ quan"], "Gene là một đoạn DNA mang thông tin di truyền.");
    } else if (topic === "replication") {
      if (stage === 0) set("Nguyên tắc bổ sung trong DNA là:", "A-T và G-C",
        ["A-G và C-T", "A-C và G-T", "A-U và G-C trong DNA", "mọi base bắt cặp ngẫu nhiên"], "Các cặp bổ sung trong DNA là A-T, G-C.");
      else if (stage === 1) set("Nhân đôi DNA theo nguyên tắc bán bảo toàn nghĩa là:", "mỗi DNA con có một mạch cũ và một mạch mới",
        ["DNA con chỉ có mạch mới", "DNA con chỉ có mạch cũ", "DNA biến thành protein", "hai mạch cũ bị tiêu hủy hoàn toàn"], "Mỗi phân tử DNA con giữ lại một mạch khuôn từ phân tử ban đầu.");
      else if (stage === 2) set("Trong RNA, base nào thay cho thymine (T)?", "uracil (U)",
        ["adenine (A)", "guanine (G)", "cytosine (C)", "thymine (T)"], "RNA dùng uracil thay cho thymine.");
      else set("Nếu mạch khuôn DNA có bộ ba TAC, mRNA bổ sung tương ứng là:", "AUG",
        ["TAC", "UAC", "ATG", "GUA"], "Khi phiên mã, T bắt cặp A, A bắt cặp U, C bắt cặp G.");
    } else if (topic === "gene-expression") {
      if (stage === 0) set("Dòng thông tin di truyền cơ bản là:", "DNA → RNA → protein",
        ["protein → DNA → nước", "RNA → lipid → DNA", "nước → RNA → protein", "DNA → khoáng chất → RNA"], "Thông tin thường được phiên mã từ DNA sang RNA rồi dịch mã thành protein.");
      else if (stage === 1) set("Protein được cấu tạo từ:", "amino acid",
        ["nucleotide", "đường đơn", "acid béo", "nguyên tử kim loại"], "Protein là chuỗi amino acid.");
      else if (stage === 2) set("mRNA có vai trò:", "mang thông tin mã hóa từ DNA đến ribosome",
        ["lưu trữ năng lượng như chất béo", "tạo thành thành tế bào", "vận chuyển oxygen trong máu", "phân hủy mọi protein"], "mRNA mang bản sao thông tin đến ribosome để tổng hợp protein.");
      else set("Một thay đổi trong DNA có thể ảnh hưởng protein vì:", "trình tự nucleotide quy định trình tự codon và amino acid",
        ["DNA không liên quan protein", "protein tạo ra DNA trong mọi trường hợp", "amino acid không tham gia protein", "mọi codon đều mã hóa cùng một amino acid"], "Thay đổi trình tự DNA có thể làm đổi mRNA và trình tự amino acid.");
    } else if (topic === "chromosome") {
      if (stage === 0) set("Nhiễm sắc thể gồm chủ yếu:", "DNA và protein",
        ["chỉ nước", "lipid và tinh bột", "oxygen và carbon dioxide", "muối ăn"], "Nhiễm sắc thể chứa DNA liên kết với protein.");
      else if (stage === 1) set("Nguyên phân thường tạo ra:", "hai tế bào con có bộ nhiễm sắc thể giống tế bào mẹ",
        ["bốn giao tử giảm một nửa NST", "một tế bào không có DNA", "ba tế bào con", "hai tế bào luôn khác loài"], "Nguyên phân duy trì số lượng nhiễm sắc thể của tế bào mẹ.");
      else if (stage === 2) set("Giảm phân có vai trò tạo:", "giao tử có bộ nhiễm sắc thể giảm một nửa",
        ["tế bào soma gấp đôi bộ NST", "protein từ DNA trực tiếp", "tế bào không có nhân", "các cơ quan mới"], "Giảm phân tạo giao tử đơn bội.");
      else set("Nếu tế bào lưỡng bội có 2n=24 NST, giao tử bình thường có:", "12 NST",
        ["6 NST", "24 NST", "48 NST", "36 NST"], "Giao tử có n=12.");
    } else if (topic === "gene-mutation") {
      if (stage === 0) set("Đột biến gene là:", "biến đổi trong cấu trúc DNA của gene",
        ["thay đổi tạm thời vị trí cơ thể", "mọi biến đổi môi trường", "quá trình tiêu hóa", "sự tăng kích thước tế bào"], "Đột biến gene là biến đổi trong trình tự DNA của gene.");
      else if (stage === 1) set("Đột biến gene có thể có lợi, có hại hoặc trung tính tùy:", "gene, môi trường và tổ hợp di truyền",
        ["chỉ màu sắc cá thể", "chỉ tuổi bố mẹ", "không phụ thuộc điều kiện nào", "luôn có hại"], "Tác động phụ thuộc gene và bối cảnh môi trường, kiểu gene.");
      else if (stage === 2) set("Tác nhân nào có thể gây đột biến?", pick(["tia tử ngoại", "một số hóa chất", "một số bức xạ", "cả một số tác nhân vật lí và hóa học"]),
        ["nước tinh khiết trong mọi trường hợp", "ánh sáng đèn học luôn luôn", "mọi thức ăn", "âm thanh thông thường"], "Một số tác nhân vật lí và hóa học có thể làm thay đổi DNA.");
      else set("Không nên kết luận mọi đột biến gene đều có hại vì:", "ảnh hưởng của đột biến phụ thuộc gene, môi trường và kiểu hình",
        ["đột biến không làm thay đổi DNA", "mọi đột biến đều có lợi", "gene không ảnh hưởng tính trạng", "môi trường không tồn tại"], "Đột biến có thể có lợi, có hại hoặc trung tính tùy bối cảnh.");
    } else if (topic === "chromosome-mutation") {
      if (stage === 0) set("Mất đoạn nhiễm sắc thể là đột biến:", "cấu trúc nhiễm sắc thể",
        ["gene đơn lẻ", "số lượng tế bào", "môi trường sống", "protein"], "Mất đoạn làm thay đổi cấu trúc nhiễm sắc thể.");
      else if (stage === 1) set("Thể lệch bội có đặc điểm:", "thừa hoặc thiếu một hay một số nhiễm sắc thể",
        ["tất cả NST tăng nguyên bộ", "không có nhiễm sắc thể", "chỉ đổi một base trong gene", "luôn có đúng 2n"], "Lệch bội làm thay đổi số lượng ở một hoặc một số cặp NST.");
      else if (stage === 2) set("Đột biến đảo đoạn là:", "một đoạn nhiễm sắc thể bị đứt rồi quay 180° và nối lại",
        ["mất toàn bộ tế bào", "tăng số lượng cơ quan", "thay thế một amino acid", "nhiễm sắc thể tách thành hai loài"], "Đảo đoạn làm đổi hướng một đoạn NST.");
      else set("Đột biến đa bội khác lệch bội ở điểm:", "đa bội làm tăng cả bộ nhiễm sắc thể, lệch bội chỉ tăng hoặc giảm một số NST",
        ["đa bội không liên quan nhiễm sắc thể", "lệch bội luôn làm tăng toàn bộ bộ NST", "hai dạng hoàn toàn giống nhau", "đa bội chỉ đổi màu tế bào"], "Đa bội thay đổi số nguyên bộ; lệch bội thay đổi một hoặc vài NST.");
    } else if (topic === "human-genetics") {
      if (stage === 0) set("Tư vấn di truyền có thể giúp:", "đánh giá nguy cơ và cung cấp thông tin sức khỏe có cơ sở",
        ["đảm bảo mọi bệnh đều chữa khỏi", "thay thế hoàn toàn bác sĩ", "xác định mọi tính cách chắc chắn", "loại bỏ nhu cầu bảo mật"], "Tư vấn giúp hiểu nguy cơ, lựa chọn xét nghiệm và hỗ trợ quyết định.");
      else if (stage === 1) set("Thông tin di truyền cá nhân cần được:", "bảo mật và sử dụng có đạo đức",
        ["công khai không cần đồng ý", "dùng để phân biệt đối xử", "chia sẻ tùy ý", "đăng lên mạng xã hội"], "Dữ liệu di truyền nhạy cảm cần được bảo mật và sử dụng có trách nhiệm.");
      else if (stage === 2) set("Xét nghiệm di truyền nên được thực hiện:", "theo tư vấn chuyên môn và có sự đồng thuận phù hợp",
        ["tự chẩn đoán chỉ từ kết quả mạng", "không cần giải thích kết quả", "để thay thế mọi khám bệnh", "công khai kết quả cho mọi người"], "Xét nghiệm cần được diễn giải đúng chuyên môn, tôn trọng quyền riêng tư.");
      else set("Vì sao một kết quả di truyền không luôn dự đoán chắc chắn bệnh sẽ biểu hiện?", "môi trường và nhiều gene có thể cùng ảnh hưởng biểu hiện tính trạng",
        ["DNA không liên quan sinh học", "mọi tính trạng chỉ do một gene quyết định", "môi trường không ảnh hưởng cơ thể", "xét nghiệm luôn sai"], "Kiểu hình có thể chịu tác động của nhiều gene và môi trường.");
    } else {
      throw new Error(`Chưa có bộ sinh câu hỏi cho chủ đề KHTN 9: ${topic}`);
    }

    const options = [answer, ...distractors.slice(0, 3)];
    if (options.length !== 4 || new Set(options).size !== 4) {
      throw new Error(`Lựa chọn không hợp lệ: k9-b${lessonIndex + 1}-q${index + 1}`);
    }
    return q(
      `k9-b${String(lessonIndex + 1).padStart(2, "0")}-q${String(index + 1).padStart(2, "0")}`,
      levels[index],
      prompt,
      options,
      0,
      explanation
    );
  }

  const lessons = curriculum.map(([title, theory, area, topic], lessonIndex) => ({
    id: `khtn9-bai-${lessonIndex + 1}`,
    title,
    theory,
    area,
    exercises: Array.from({ length: 20 }, (_, index) =>
      makeQuestion(lessonIndex, topic, index)
    )
  }));
  const course = {
    title: "Khoa học tự nhiên 9 · Kết nối tri thức",
    lessons,
    exams: [
      { id: "k9-15p", type: "15p", title: "Kiểm tra 15 phút · KHTN 9", duration: 15, questionIds: ["k9-b01-q01", "k9-b10-q02", "k9-b18-q03", "k9-b33-q04", "k9-b42-q05"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm." },
      { id: "k9-giuaki", type: "giuaki", title: "Kiểm tra giữa kì · KHTN 9", duration: 45, questionIds: ["k9-b02-q11", "k9-b14-q12", "k9-b21-q13", "k9-b28-q14", "k9-b34-q15"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm. Ghi rõ phép tính và đơn vị." },
      { id: "k9-cuoiki", type: "cuoiki", title: "Kiểm tra cuối kì · KHTN 9", duration: 60, questionIds: ["k9-b17-q16", "k9-b24-q17", "k9-b32-q18", "k9-b39-q19", "k9-b42-q20"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm; giải thích căn cứ khoa học." }
    ]
  };
  register(9, "khtn", course);
})();
