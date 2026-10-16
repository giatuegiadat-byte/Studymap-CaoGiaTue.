(() => {
  const { exercise: q, register } = window.studyMapData;
  const course = {
    title:"Khoa học tự nhiên 7 · Kết nối tri thức",
    lessons:[
      {id:"khtn7-nguyen-tu",area:"Hóa học",title:"Nguyên tử, nguyên tố và bảng tuần hoàn",theory:"Nguyên tử gồm hạt nhân (proton, neutron) và electron. Nguyên tố hóa học là tập hợp nguyên tử cùng số proton. Kí hiệu hóa học biểu diễn nguyên tố; bảng tuần hoàn sắp xếp các nguyên tố theo quy luật.",exercises:[
        q("k7-nt-nb","nhan-biet","Hạt mang điện tích âm trong nguyên tử là:",["proton","neutron","electron","hạt nhân"],2,"Electron mang điện tích âm."),
        q("k7-nt-th","thong-hieu","Các nguyên tử cùng một nguyên tố có cùng số:",["neutron","proton","lớp electron","khối lượng"],1,"Số proton trong hạt nhân xác định nguyên tố."),
        q("k7-nt-vd","van-dung","Nguyên tử trung hòa có 11 proton. Số electron là:",["10","11","12","22"],1,"Nguyên tử trung hòa có số electron bằng số proton."),
        q("k7-nt-vdc","van-dung-cao","Nguyên tử X có 8 proton và 8 electron. Kết luận phù hợp là:",["X mang điện tích +8","X trung hòa và thuộc nguyên tố oxygen","X là neutron","X có số khối chắc chắn bằng 16"],1,"Số proton 8 xác định oxygen; 8 electron làm nguyên tử trung hòa. Không biết neutron nên chưa xác định số khối.")
      ]},
      {id:"khtn7-phan-tu",area:"Hóa học",title:"Phân tử, đơn chất và hợp chất",theory:"Phân tử gồm các nguyên tử liên kết với nhau và đại diện cho chất. Đơn chất tạo từ một nguyên tố; hợp chất tạo từ hai nguyên tố trở lên. Công thức hóa học cho biết thành phần nguyên tố và số nguyên tử.",exercises:[
        q("k7-pt-nb","nhan-biet","O₂ là:",["hợp chất","đơn chất","hỗn hợp","nguyên tố kim loại"],1,"O₂ chỉ gồm nguyên tử oxygen nên là đơn chất."),
        q("k7-pt-th","thong-hieu","Nước H₂O là hợp chất vì:",["có hai nguyên tử","gồm hai nguyên tố khác nhau","là chất lỏng","không màu"],1,"H₂O chứa hydrogen và oxygen, tức từ hai nguyên tố hóa học."),
        q("k7-pt-vd","van-dung","Một phân tử CO₂ có tổng cộng bao nhiêu nguyên tử?",["2","3","4","5"],1,"CO₂ gồm 1 nguyên tử C và 2 nguyên tử O, tổng 3."),
        q("k7-pt-vdc","van-dung-cao","Trong 3 phân tử NH₃ có tổng cộng bao nhiêu nguyên tử H?",["3","6","9","12"],2,"Mỗi phân tử có 3 H; 3 × 3 = 9 nguyên tử H.")
      ]},
      {id:"khtn7-tocdo",area:"Vật lý",title:"Tốc độ và đồ thị quãng đường-thời gian",theory:"Tốc độ v = s/t; đơn vị thường dùng m/s và km/h, với 1 m/s = 3,6 km/h. Đồ thị quãng đường-thời gian biểu diễn chuyển động; độ dốc lớn hơn tương ứng tốc độ lớn hơn.",exercises:[
        q("k7-td-nb","nhan-biet","Công thức tính tốc độ là:",["v=s×t","v=s/t","v=t/s","v=s+t"],1,"Tốc độ bằng quãng đường chia thời gian."),
        q("k7-td-th","thong-hieu","72 km/h đổi ra m/s bằng:",["2 m/s","20 m/s","25,9 m/s","259,2 m/s"],1,"72 km/h ÷ 3,6 = 20 m/s."),
        q("k7-td-vd","van-dung","Xe đi 150 m trong 10 s. Tốc độ là:",["1,5 m/s","15 m/s","1500 m/s","160 m/s"],1,"v=150:10=15 m/s."),
        q("k7-td-vdc","van-dung-cao","Hai xe đi cùng thời gian. Xe A đi 240 m, xe B đi 180 m. Nhận xét đúng:",["A nhanh hơn 4/3 lần","B nhanh hơn 4/3 lần","hai xe bằng tốc độ","không thể so sánh"],0,"Cùng thời gian, tốc độ tỉ lệ với quãng đường: 240/180=4/3.")
      ]},
      {id:"khtn7-am-sang",area:"Vật lý",title:"Âm thanh và ánh sáng",theory:"Âm phát ra từ vật dao động, truyền qua môi trường vật chất và không truyền trong chân không. Ánh sáng truyền theo đường thẳng trong môi trường đồng tính; tia phản xạ tuân theo định luật phản xạ.",exercises:[
        q("k7-as-nb","nhan-biet","Nguồn âm phát ra âm khi:",["đứng yên tuyệt đối","dao động","tan chảy","bị chiếu sáng"],1,"Vật dao động là nguồn phát âm."),
        q("k7-as-th","thong-hieu","Âm không truyền được trong:",["nước","không khí","thép","chân không"],3,"Âm cần môi trường vật chất để truyền."),
        q("k7-as-vd","van-dung","Tia sáng chiếu vào gương phẳng với góc tới 35°. Góc phản xạ là:",["35°","55°","70°","145°"],0,"Theo định luật phản xạ, góc phản xạ bằng góc tới."),
        q("k7-as-vdc","van-dung-cao","Muốn nhìn thấy vật, ánh sáng phải:",["từ vật truyền tới mắt","từ mắt phát ra vật","chỉ truyền qua chân không","bị vật hấp thụ hoàn toàn"],0,"Mắt nhận ánh sáng phát ra hoặc phản xạ từ vật.")
      ]},
      {id:"khtn7-sinh",area:"Sinh học",title:"Trao đổi chất, cảm ứng và sinh trưởng ở sinh vật",theory:"Sinh vật trao đổi chất với môi trường để lấy nguyên liệu, năng lượng và thải chất. Quang hợp tích lũy năng lượng; hô hấp giải phóng năng lượng. Cảm ứng giúp sinh vật phản ứng với kích thích; sinh trưởng làm tăng kích thước, phát triển gồm biến đổi về chất.",exercises:[
        q("k7-sh-nb","nhan-biet","Quang hợp ở cây xanh chủ yếu diễn ra tại:",["rễ","lá có diệp lục","hoa","hạt"],1,"Lá chứa diệp lục hấp thụ ánh sáng để quang hợp."),
        q("k7-sh-th","thong-hieu","Cây non hướng về phía cửa sổ có ánh sáng là biểu hiện của:",["hô hấp","cảm ứng","bài tiết","sinh sản"],1,"Hướng sáng là phản ứng của cây trước kích thích ánh sáng."),
        q("k7-sh-vd","van-dung","Cây cần được tưới nước vì nước tham gia vào:",["mọi hoạt động sống và vận chuyển chất","chỉ sự thụ phấn","chỉ tạo màu hoa","làm ngừng hô hấp"],0,"Nước là nguyên liệu/ môi trường cho nhiều quá trình sống và vận chuyển."),
        q("k7-sh-vdc","van-dung-cao","Một cây thiếu ánh sáng kéo dài thường còi cọc chủ yếu do:",["quang hợp giảm, tạo ít chất hữu cơ","hô hấp dừng hoàn toàn","không còn trao đổi nước","tế bào biến thành đá"],0,"Thiếu ánh sáng làm giảm quang hợp, giảm nguồn chất hữu cơ cho sinh trưởng.")
      ]}
    ],
    exams:[
      {id:"k7-15p",type:"15p",title:"Kiểm tra 15 phút · KHTN 7",duration:15,questionIds:["k7-nt-nb","k7-pt-nb","k7-td-nb","k7-as-nb","k7-sh-nb"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm."},
      {id:"k7-giuaki",type:"giuaki",title:"Kiểm tra giữa kì · KHTN 7",duration:45,questionIds:["k7-nt-vd","k7-pt-vd","k7-td-vd","k7-as-vd","k7-sh-vd"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm; ghi công thức và đơn vị khi tính."},
      {id:"k7-cuoiki",type:"cuoiki",title:"Kiểm tra cuối kì · KHTN 7",duration:60,questionIds:["k7-nt-vdc","k7-pt-vdc","k7-td-vdc","k7-as-vdc","k7-sh-vdc"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm. Nêu lập luận khoa học cho câu vận dụng cao."}
    ]
  };
  register(7,"khtn",course);
})();
