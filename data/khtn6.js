(() => {
  const { exercise: q, register } = window.studyMapData;
  const course = {
    title: "Khoa học tự nhiên 6 · Kết nối tri thức",
    lessons: [
      { id:"khtn6-do-luong", area:"Vật lý · Kĩ năng khoa học", title:"An toàn, dụng cụ và đo lường", theory:"KHTN sử dụng quan sát, đo, dự đoán và thí nghiệm. Đọc giới hạn đo, độ chia nhỏ nhất; đặt mắt vuông góc vạch chia, ghi kết quả kèm đơn vị và tuân thủ an toàn phòng thực hành.", exercises:[
        q("k6-dl-nb","nhan-biet","Đơn vị đo độ dài trong hệ SI là:",["mét (m)","lít (L)","kilôgam (kg)","giây (s)"],0,"Mét (m) là đơn vị đo độ dài trong hệ SI."),
        q("k6-dl-th","thong-hieu","Khi đọc thể tích chất lỏng trong ống đong, mắt cần đặt:",["cao hơn mặt chất lỏng","ngang mặt khum","thấp hơn đáy bình","ở bất kì vị trí nào"],1,"Đặt mắt ngang phần đáy mặt khum để hạn chế sai số thị sai."),
        q("k6-dl-vd","van-dung","Đo chiều dài quyển sách 24,6 cm bằng thước chia đến mm. Cách ghi phù hợp là:",["24,6 cm","246 cm","24,6 kg","0,246 cm"],0,"Kết quả cần giữ đúng đơn vị và độ chính xác phù hợp với dụng cụ."),
        q("k6-dl-vdc","van-dung-cao","Thước có GHĐ 30 cm, ĐCNN 1 cm. Đo vật dài 31 cm bằng một lần đo sẽ:",["đo được chính xác","vượt GHĐ, cần dụng cụ phù hợp hơn","có ĐCNN nhỏ hơn","cho kết quả 30 cm chính xác"],1,"Vật dài hơn giới hạn đo; cần thước có GHĐ lớn hơn hoặc cách đo phù hợp.")
      ]},
      { id:"khtn6-chat", area:"Hóa học", title:"Các thể của chất và sự chuyển thể", theory:"Chất tồn tại ở thể rắn, lỏng, khí; các hạt cấu tạo chất luôn chuyển động. Nóng chảy: rắn→lỏng; đông đặc: lỏng→rắn; bay hơi: lỏng→khí; ngưng tụ: khí→lỏng.", exercises:[
        q("k6-ch-nb","nhan-biet","Nước đá đang tan là quá trình:",["đông đặc","nóng chảy","ngưng tụ","hóa hơi"],1,"Nóng chảy là quá trình chuyển từ thể rắn sang thể lỏng."),
        q("k6-ch-th","thong-hieu","Giọt nước ngoài thành cốc nước lạnh hình thành chủ yếu do:",["nước trong cốc thấm qua thành","hơi nước trong không khí ngưng tụ","nước đá nóng chảy xuyên cốc","không khí đông đặc"],1,"Hơi nước gặp bề mặt lạnh chuyển thành giọt lỏng (ngưng tụ)."),
        q("k6-ch-vd","van-dung","Phơi quần áo nơi thoáng gió giúp khô nhanh vì tăng:",["sự đông đặc","sự ngưng tụ","tốc độ bay hơi","khối lượng nước"],2,"Gió cuốn hơi nước đi, làm tăng tốc độ bay hơi."),
        q("k6-ch-vdc","van-dung-cao","Vì sao vũng nước thường khô nhanh hơn trong ngày nắng, có gió?",["nước chuyển thành đá","nhiệt và luồng khí đều làm bay hơi nhanh hơn","nước bị phá hủy","không khí biến thành nước"],1,"Nhiệt độ cao và gió đều thúc đẩy sự bay hơi.")
      ]},
      { id:"khtn6-hon-hop", area:"Hóa học", title:"Chất tinh khiết, hỗn hợp và tách chất", theory:"Chất tinh khiết có thành phần xác định; hỗn hợp gồm từ hai chất trở lên. Lọc tách chất rắn không tan, cô cạn thu chất rắn hòa tan, chiết tách hai chất lỏng không trộn lẫn.", exercises:[
        q("k6-hh-nb","nhan-biet","Mẫu nào là chất tinh khiết?",["nước cất","nước biển","không khí","nước đường"],0,"Nước cất chỉ gồm nước; các lựa chọn còn lại là hỗn hợp."),
        q("k6-hh-th","thong-hieu","Cát không tan lẫn trong nước nên có thể tách bằng:",["lọc","cô cạn","nam châm","đông đặc"],0,"Cát là chất rắn không tan, bị giữ lại trên giấy lọc."),
        q("k6-hh-vd","van-dung","Muốn thu muối ăn từ nước muối, nên dùng phương pháp:",["lọc","cô cạn","chiết","sàng"],1,"Làm bay hơi nước bằng cô cạn sẽ thu được muối."),
        q("k6-hh-vdc","van-dung-cao","Hỗn hợp gồm mạt sắt, cát và muối. Trình tự hợp lí để thu riêng cả ba là:",["lọc, nam châm, cô cạn","nam châm, hòa tan nước, lọc, cô cạn","cô cạn, lọc, nam châm","sàng, đông đặc"],1,"Dùng nam châm lấy sắt; hòa tan muối, lọc cát; cô cạn dung dịch thu muối.")
      ]},
      { id:"khtn6-te-bao", area:"Sinh học", title:"Tế bào và cơ thể sống", theory:"Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống. Tế bào thường gồm màng tế bào, tế bào chất và nhân/vùng nhân; tế bào lớn lên, phân chia tạo tế bào mới.", exercises:[
        q("k6-tb-nb","nhan-biet","Đơn vị cấu tạo cơ bản của cơ thể sống là:",["mô","cơ quan","tế bào","hệ cơ quan"],2,"Tế bào là đơn vị cấu tạo cơ bản của mọi cơ thể sống."),
        q("k6-tb-th","thong-hieu","Bộ phận điều khiển phần lớn hoạt động của tế bào nhân thực là:",["màng tế bào","nhân","thành tế bào","không bào"],1,"Nhân chứa vật chất di truyền và điều khiển hoạt động tế bào."),
        q("k6-tb-vd","van-dung","Một tế bào phân chia liên tiếp hai lần tạo ra bao nhiêu tế bào?",["2","3","4","8"],2,"Mỗi lần số tế bào tăng gấp đôi: 1 → 2 → 4."),
        q("k6-tb-vdc","van-dung-cao","Sinh vật đơn bào khác sinh vật đa bào chủ yếu ở điểm nào?",["có tế bào","số lượng tế bào cấu tạo cơ thể","cần năng lượng","có trao đổi chất"],1,"Sinh vật đơn bào chỉ có một tế bào đảm nhiệm các chức năng sống; đa bào gồm nhiều tế bào.")
      ]},
      { id:"khtn6-da-dang", area:"Sinh học · Vật lý", title:"Đa dạng thế giới sống, lực và năng lượng", theory:"Sinh vật được phân loại dựa trên đặc điểm chung; đa dạng sinh học cần được bảo tồn. Lực có thể làm đổi chuyển động hoặc biến dạng vật. Năng lượng có nhiều dạng và có thể truyền, chuyển hóa.", exercises:[
        q("k6-dd-nb","nhan-biet","Lực có thể làm vật:",["chỉ đổi màu","đổi chuyển động hoặc biến dạng","mất khối lượng","biến mất"],1,"Tác dụng của lực có thể làm thay đổi chuyển động hoặc làm vật biến dạng."),
        q("k6-dd-th","thong-hieu","Kéo căng dây cao su thể hiện tác dụng nào của lực?",["làm biến dạng","làm bay hơi","làm đổi màu","làm đông đặc"],0,"Lực kéo làm dây cao su biến dạng."),
        q("k6-dd-vd","van-dung","Để giảm nguy cơ tuyệt chủng của loài bản địa, biện pháp phù hợp là:",["phá nơi sống","săn bắt mùa sinh sản","bảo vệ sinh cảnh và hạn chế khai thác","thả loài ngoại lai"],2,"Bảo vệ sinh cảnh và kiểm soát khai thác giúp duy trì quần thể tự nhiên."),
        q("k6-dd-vdc","van-dung-cao","Khi pin làm sáng bóng đèn, chuỗi chuyển hóa năng lượng chính là:",["hóa năng → điện năng → quang năng và nhiệt năng","quang năng → hóa năng → âm năng","nhiệt năng → hóa năng → điện năng","điện năng → hóa năng → cơ năng"],0,"Pin chuyển hóa hóa năng thành điện năng; bóng đèn chuyển điện năng thành ánh sáng và nhiệt.")
      ]}
    ],
    exams:[
      {id:"k6-15p",type:"15p",title:"Kiểm tra 15 phút · KHTN 6",duration:15,questionIds:["k6-dl-nb","k6-ch-th","k6-hh-vd","k6-tb-nb","k6-dd-th"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm."},
      {id:"k6-giuaki",type:"giuaki",title:"Kiểm tra giữa kì · KHTN 6",duration:45,questionIds:["k6-dl-vd","k6-ch-vd","k6-hh-vdc","k6-tb-th","k6-dd-vd"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm. Giải thích bằng kiến thức và bằng chứng quan sát."},
      {id:"k6-cuoiki",type:"cuoiki",title:"Kiểm tra cuối kì · KHTN 6",duration:60,questionIds:["k6-dl-vdc","k6-ch-vdc","k6-hh-vdc","k6-tb-vdc","k6-dd-vdc"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm. Câu vận dụng cao cần nêu rõ cơ sở lựa chọn."}
    ]
  };
  register(6,"khtn",course);
})();
