(() => {
  const { exercise: q, register } = window.studyMapData;
  const course = {
    title:"Toán 7 · Kết nối tri thức",
    lessons:[
      {id:"toan7-huu-ti",title:"Số hữu tỉ và số thực",theory:"Số hữu tỉ viết được dưới dạng a/b (b khác 0). Cộng trừ số hữu tỉ theo quy tắc dấu và quy đồng; nhân chia phân số như đã học. Căn bậc hai số học của a không âm là số x sao cho x² = a.",exercises:[
        q("t7-ht-nb","nhan-biet","Số nào là số hữu tỉ?",["√2","π","−3/5","√7"],2,"−3/5 là tỉ số của hai số nguyên với mẫu khác 0."),
        q("t7-ht-th","thong-hieu","Tính (−2/3) + 1/6.",["−1/2","−5/6","1/2","5/6"],0,"Quy đồng: −4/6 + 1/6 = −3/6 = −1/2."),
        q("t7-ht-vd","van-dung","Tính 1,2 : 0,3.",["0,4","4","40","0,03"],1,"1,2 : 0,3 = 12 : 3 = 4."),
        q("t7-ht-vdc","van-dung-cao","Tìm x biết |x| = 5.",["x=5","x=−5","x=5 hoặc x=−5","không có nghiệm"],2,"Giá trị tuyệt đối bằng 5 khi x=5 hoặc x=−5.")
      ]},
      {id:"toan7-ti-le",title:"Tỉ lệ thức và đại lượng tỉ lệ",theory:"Tỉ lệ thức a/b = c/d tương đương ad = bc. Hai đại lượng tỉ lệ thuận có y = kx; tỉ lệ nghịch có xy = a. Tổng hoặc giá trị đã biết giúp xác định hệ số tỉ lệ.",exercises:[
        q("t7-tl-nb","nhan-biet","Nếu y = 3x thì y và x là hai đại lượng:",["tỉ lệ thuận","tỉ lệ nghịch","không liên hệ","bằng nhau"],0,"y = kx với k = 3 là dạng tỉ lệ thuận."),
        q("t7-tl-th","thong-hieu","Tỉ lệ thức 2/3 = x/12 cho x bằng:",["6","8","9","18"],1,"Nhân chéo: 3x = 24 nên x = 8."),
        q("t7-tl-vd","van-dung","4 công nhân làm xong việc trong 6 ngày. Với năng suất như nhau, 8 công nhân cần:",["2 ngày","3 ngày","6 ngày","12 ngày"],1,"Số công nhân và thời gian tỉ lệ nghịch: 4 × 6 = 8 × t, t = 3."),
        q("t7-tl-vdc","van-dung-cao","Chia 84 theo tỉ lệ 2:3:7. Phần lớn nhất là:",["14","21","42","49"],3,"Tổng số phần 12, mỗi phần 7; phần lớn nhất bằng 7 × 7 = 49.")
      ]},
      {id:"toan7-bieu-thuc",title:"Biểu thức đại số và đa thức một biến",theory:"Thay giá trị biến vào biểu thức theo đúng thứ tự phép tính. Đơn thức đồng dạng có cùng phần biến; cộng trừ bằng cách cộng trừ hệ số. Nghiệm của đa thức P(x) là giá trị làm P(x)=0.",exercises:[
        q("t7-bt-nb","nhan-biet","Hệ số của đơn thức −4x² là:",["−4","2","4","x²"],0,"Trong −4x², hệ số là −4."),
        q("t7-bt-th","thong-hieu","Rút gọn 3x + 2x − 5.",["5x−5","5x+5","x−5","5x"],0,"Cộng hai đơn thức đồng dạng: 3x + 2x = 5x."),
        q("t7-bt-vd","van-dung","Tính P(2) với P(x)=x²−3x+1.",["−1","−3","3","5"],0,"P(2)=4−6+1=−1."),
        q("t7-bt-vdc","van-dung-cao","Nghiệm của đa thức P(x)=2x−6 là:",["−3","0","3","6"],2,"Cho 2x−6=0, suy ra x=3.")
      ]},
      {id:"toan7-hinh",title:"Góc, tam giác và các đường đặc biệt",theory:"Hai góc đối đỉnh bằng nhau; hai góc kề bù có tổng 180°. Tổng ba góc tam giác bằng 180°. Các trường hợp bằng nhau cơ bản: cạnh-cạnh-cạnh, cạnh-góc-cạnh, góc-cạnh-góc.",exercises:[
        q("t7-hh-nb","nhan-biet","Tổng ba góc trong một tam giác bằng:",["90°","180°","270°","360°"],1,"Tổng số đo ba góc trong mọi tam giác là 180°."),
        q("t7-hh-th","thong-hieu","Hai góc kề bù, một góc 65°. Góc còn lại là:",["25°","65°","115°","295°"],2,"Hai góc kề bù có tổng 180°, nên góc còn lại 115°."),
        q("t7-hh-vd","van-dung","Tam giác có hai góc 45° và 70°. Góc thứ ba là:",["55°","65°","75°","115°"],1,"180° − 45° − 70° = 65°."),
        q("t7-hh-vdc","van-dung-cao","Tam giác cân có góc ở đỉnh 40°. Mỗi góc ở đáy bằng:",["40°","60°","70°","140°"],2,"Hai góc đáy bằng nhau; (180°−40°):2=70°.")
      ]},
      {id:"toan7-thongke",title:"Một số yếu tố thống kê và xác suất",theory:"Bảng và biểu đồ giúp tổ chức, đọc dữ liệu. Số trung bình cộng bằng tổng dữ liệu chia số phần tử; mốt là giá trị xuất hiện nhiều nhất. Xác suất thực nghiệm = số lần sự kiện xảy ra / tổng số lần thử.",exercises:[
        q("t7-tk-nb","nhan-biet","Giá trị xuất hiện nhiều lần nhất trong mẫu số liệu gọi là:",["số trung bình","mốt","tần số bằng 0","khoảng biến thiên"],1,"Mốt là giá trị có tần số lớn nhất."),
        q("t7-tk-th","thong-hieu","Mẫu 2, 3, 3, 4 có mốt là:",["2","3","4","12"],1,"Giá trị 3 xuất hiện hai lần, nhiều nhất."),
        q("t7-tk-vd","van-dung","Gieo xúc xắc 20 lần, mặt 6 xuất hiện 4 lần. Xác suất thực nghiệm là:",["1/20","1/5","1/4","4/5"],1,"Xác suất thực nghiệm = 4/20 = 1/5."),
        q("t7-tk-vdc","van-dung-cao","Điểm 4, 6, 6, 8 có số trung bình bằng:",["5","6","6,5","8"],1,"(4+6+6+8):4=24:4=6.")
      ]}
    ],
    exams:[
      {id:"t7-15p",type:"15p",title:"Kiểm tra 15 phút · Toán 7",duration:15,questionIds:["t7-ht-nb","t7-tl-th","t7-bt-th","t7-hh-nb","t7-tk-nb"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm."},
      {id:"t7-giuaki",type:"giuaki",title:"Kiểm tra giữa kì · Toán 7",duration:45,questionIds:["t7-ht-th","t7-tl-vd","t7-bt-vd","t7-hh-vd","t7-tk-vd"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm; khuyến khích ghi bước tính."},
      {id:"t7-cuoiki",type:"cuoiki",title:"Kiểm tra cuối kì · Toán 7",duration:60,questionIds:["t7-ht-vdc","t7-tl-vdc","t7-bt-vdc","t7-hh-vdc","t7-tk-vdc"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm. Lập luận đầy đủ với câu vận dụng cao."}
    ]
  };
  register(7,"toan",course);
})();
