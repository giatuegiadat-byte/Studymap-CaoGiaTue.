(() => {
  const { exercise: q, register } = window.studyMapData;
  const course = {
    title:"Khoa học tự nhiên 9 · Kết nối tri thức",
    lessons:[
      {id:"khtn9-nguyen-tu",area:"Hóa học",title:"Nguyên tử, bảng tuần hoàn và liên kết",theory:"Số proton xác định nguyên tố. Trong nguyên tử trung hòa, số electron bằng số proton. Các nguyên tố được sắp xếp theo số hiệu nguyên tử; liên kết hóa học hình thành khi các nguyên tử đạt cấu hình electron bền hơn.",exercises:[
        q("k9-nt-nb","nhan-biet","Số hiệu nguyên tử bằng số:",["neutron","proton","lớp electron","phân tử"],1,"Số hiệu nguyên tử Z bằng số proton trong hạt nhân."),
        q("k9-nt-th","thong-hieu","Nguyên tử trung hòa có 17 proton thì có:",["16 electron","17 electron","18 electron","34 electron"],1,"Nguyên tử trung hòa có số electron bằng số proton."),
        q("k9-nt-vd","van-dung","Nguyên tố có Z=8 là:",["carbon","nitrogen","oxygen","neon"],2,"Oxygen có số hiệu nguyên tử 8."),
        q("k9-nt-vdc","van-dung-cao","Ion X⁻ có 18 electron. Nguyên tử X trung hòa có số electron:",["17","18","19","20"],0,"Ion âm 1 nhận thêm 1 electron; nguyên tử trung hòa X có 18−1=17 electron.")
      ]},
      {id:"khtn9-hoa-hoc",area:"Hóa học",title:"Phản ứng, kim loại và hợp chất",theory:"Phương trình hóa học cần cân bằng số nguyên tử mỗi nguyên tố. Kim loại có tính chất vật lí đặc trưng; mức độ hoạt động hóa học khác nhau. Acid tác dụng với một số kim loại tạo muối và khí hydrogen; cần tuân thủ an toàn khi thí nghiệm.",exercises:[
        q("k9-hh-nb","nhan-biet","Khí thường thu được khi kim loại phù hợp tác dụng với acid loãng là:",["oxygen","hydrogen","nitrogen","carbon dioxide"],1,"Phản ứng kim loại + acid loãng thường tạo muối và khí hydrogen."),
        q("k9-hh-th","thong-hieu","Phương trình Zn + 2HCl → ZnCl₂ + H₂ đã cân bằng vì:",["số nguyên tử mỗi nguyên tố ở hai vế bằng nhau","có 2 phân tử sản phẩm","không có khí","mọi hệ số đều bằng 1"],0,"Hai vế đều có Zn:1, H:2, Cl:2."),
        q("k9-hh-vd","van-dung","Từ 1 mol Zn phản ứng hết với HCl dư, phương trình trên tạo:",["0,5 mol H₂","1 mol H₂","2 mol H₂","3 mol H₂"],1,"Tỉ lệ mol Zn:H₂ trong phương trình là 1:1."),
        q("k9-hh-vdc","van-dung-cao","Cho 6,5 g Zn (M=65 g/mol) phản ứng hết. Số mol Zn là:",["0,01 mol","0,1 mol","1 mol","10 mol"],1,"n=m/M=6,5/65=0,1 mol.")
      ]},
      {id:"khtn9-dien",area:"Vật lý",title:"Điện học và năng lượng",theory:"Định luật Ohm: I=U/R. Trong mạch nối tiếp, cường độ dòng điện như nhau và hiệu điện thế tổng bằng tổng các hiệu điện thế thành phần. Điện năng tiêu thụ A=UIt; dùng điện an toàn, tiết kiệm.",exercises:[
        q("k9-dn-nb","nhan-biet","Đơn vị của cường độ dòng điện là:",["volt","ampere","ohm","watt"],1,"Cường độ dòng điện có đơn vị ampere (A)."),
        q("k9-dn-th","thong-hieu","Khi U không đổi, tăng điện trở R thì cường độ I:",["tăng","giảm","không đổi","bằng R"],1,"Theo I=U/R, R tăng thì I giảm."),
        q("k9-dn-vd","van-dung","Điện trở 6 Ω mắc vào 12 V. Cường độ dòng điện là:",["0,5 A","2 A","6 A","72 A"],1,"I=U/R=12/6=2 A."),
        q("k9-dn-vdc","van-dung-cao","Hai điện trở 2 Ω và 4 Ω nối tiếp vào 12 V. Dòng điện mạch chính là:",["1 A","2 A","3 A","6 A"],1,"R tổng=2+4=6 Ω; I=12/6=2 A.")
      ]},
      {id:"khtn9-di-truyen",area:"Sinh học",title:"Di truyền, biến dị và sinh thái",theory:"Gene là một đoạn DNA mang thông tin di truyền; allele là các trạng thái khác nhau của cùng gene. Kiểu gene và môi trường góp phần hình thành kiểu hình. Trong hệ sinh thái, sinh vật tương tác qua chuỗi/lưới thức ăn và dòng năng lượng.",exercises:[
        q("k9-dt-nb","nhan-biet","Vật chất di truyền chủ yếu trong nhân tế bào là:",["DNA","tinh bột","cellulose","nước"],0,"DNA mang thông tin di truyền."),
        q("k9-dt-th","thong-hieu","Kiểu hình chịu ảnh hưởng bởi:",["chỉ môi trường","chỉ kiểu gene","kiểu gene và môi trường","chỉ tuổi"],2,"Kiểu hình hình thành từ tương tác giữa kiểu gene và môi trường."),
        q("k9-dt-vd","van-dung","Trong chuỗi cỏ → thỏ → cáo, sinh vật sản xuất là:",["cỏ","thỏ","cáo","cả thỏ và cáo"],0,"Cỏ tự tổng hợp chất hữu cơ nên là sinh vật sản xuất."),
        q("k9-dt-vdc","van-dung-cao","Nếu số lượng cáo giảm mạnh, tác động trực tiếp có khả năng xảy ra với quần thể thỏ là:",["giảm do bị săn nhiều hơn","tăng do áp lực săn mồi giảm","không thể thay đổi","biến mất ngay"],1,"Giảm cáo làm giảm áp lực săn mồi; quần thể thỏ có thể tăng, tùy nguồn sống và yếu tố khác.")
      ]},
      {id:"khtn9-quang-hoc",area:"Vật lý · Môi trường",title:"Quang học, lực và bảo vệ môi trường",theory:"Ánh sáng phản xạ, khúc xạ khi truyền qua mặt phân cách; thấu kính hội tụ có thể tạo ảnh thật hoặc ảo tùy vị trí vật. Năng lượng và tài nguyên cần được sử dụng tiết kiệm; bảo vệ môi trường dựa trên giảm phát thải, tái sử dụng và bảo tồn sinh cảnh.",exercises:[
        q("k9-qh-nb","nhan-biet","Thấu kính hội tụ có phần giữa:",["mỏng hơn rìa","dày hơn rìa","bằng rìa","không trong suốt"],1,"Thấu kính hội tụ thường dày ở giữa, mỏng ở rìa."),
        q("k9-qh-th","thong-hieu","Ảnh thật tạo bởi thấu kính có thể:",["hứng trên màn","chỉ nhìn qua kính","luôn cùng chiều","luôn lớn hơn vật"],0,"Ảnh thật là ảnh các tia sáng hội tụ và có thể hứng trên màn."),
        q("k9-qh-vd","van-dung","Biện pháp trực tiếp giảm rác nhựa dùng một lần là:",["dùng túi vải nhiều lần","đốt nhựa ngoài trời","dùng thêm bao bì","chôn rác xuống suối"],0,"Tái sử dụng túi giúp giảm lượng nhựa dùng một lần."),
        q("k9-qh-vdc","van-dung-cao","Một cộng đồng muốn giảm ô nhiễm không khí lâu dài. Gói giải pháp phù hợp nhất là:",["tăng đi bộ/xe công cộng và năng lượng sạch","đốt rác để giảm thể tích","chặt cây ven đường","chỉ phun nước khi có khói"],0,"Giảm nguồn phát thải giao thông và chuyển sang năng lượng sạch tác động vào nguyên nhân.")
      ]}
    ],
    exams:[
      {id:"k9-15p",type:"15p",title:"Kiểm tra 15 phút · KHTN 9",duration:15,questionIds:["k9-nt-nb","k9-hh-nb","k9-dn-nb","k9-dt-nb","k9-qh-nb"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm."},
      {id:"k9-giuaki",type:"giuaki",title:"Kiểm tra giữa kì · KHTN 9",duration:45,questionIds:["k9-nt-vd","k9-hh-vd","k9-dn-vd","k9-dt-vd","k9-qh-vd"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm; ghi đơn vị và cơ sở suy luận."},
      {id:"k9-cuoiki",type:"cuoiki",title:"Kiểm tra cuối kì · KHTN 9",duration:60,questionIds:["k9-nt-vdc","k9-hh-vdc","k9-dn-vdc","k9-dt-vdc","k9-qh-vdc"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm. Với câu mở rộng, giải thích mối quan hệ nguyên nhân-kết quả."}
    ]
  };
  register(9,"khtn",course);
})();
