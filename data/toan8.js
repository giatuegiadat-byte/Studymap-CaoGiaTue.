(() => {
  const { exercise: q, register } = window.studyMapData;
  const course = {
    title:"Toán 8 · Kết nối tri thức",
    lessons:[
      {id:"toan8-da-thuc",title:"Đa thức và hằng đẳng thức",theory:"Thu gọn đa thức bằng cách cộng các hạng tử đồng dạng. Dùng phân phối để nhân đơn thức với đa thức. Các hằng đẳng thức đáng nhớ gồm bình phương tổng/hiệu và hiệu hai bình phương.",exercises:[
        q("t8-dt-nb","nhan-biet","Khai triển (x+2)².",["x²+4","x²+4x+4","x²+2x+4","x²−4"],1,"(x+2)²=x²+4x+4."),
        q("t8-dt-th","thong-hieu","Tính (x+3)(x−3).",["x²+9","x²−6x+9","x²−9","x²+6x−9"],2,"Dùng hiệu hai bình phương: (x+3)(x−3)=x²−9."),
        q("t8-dt-vd","van-dung","Phân tích x²+5x thành nhân tử.",["x(x+5)","(x+5)²","x²(1+5)","(x−5)(x+1)"],0,"Đặt nhân tử chung x: x²+5x=x(x+5)."),
        q("t8-dt-vdc","van-dung-cao","Tính nhanh 49²−51².",["−200","−100","100","200"],0,"Hiệu hai bình phương: (49−51)(49+51)=−2×100=−200.")
      ]},
      {id:"toan8-phan-thuc",title:"Phân thức đại số và phương trình",theory:"Phân thức xác định khi mẫu khác 0. Rút gọn bằng cách phân tích tử và mẫu thành nhân tử. Phương trình bậc nhất ax+b=0 (a khác 0) có nghiệm x=−b/a; biến đổi hai vế tương đương phải bảo toàn tập nghiệm.",exercises:[
        q("t8-pt-nb","nhan-biet","Điều kiện xác định của 3/(x−2) là:",["x=2","x≠2","x>2","mọi x"],1,"Mẫu phải khác 0 nên x−2≠0, tức x≠2."),
        q("t8-pt-th","thong-hieu","Rút gọn 6x/9x với x≠0.",["2/3","3/2","2x/3","6/9x"],0,"Chia tử và mẫu cho 3x được 2/3."),
        q("t8-pt-vd","van-dung","Giải 3x−7=8.",["x=1","x=3","x=5","x=15"],2,"3x=15 nên x=5."),
        q("t8-pt-vdc","van-dung-cao","Một số tăng thêm 5 thì bằng hai lần số đó trừ 3. Số ấy là:",["−8","−2","2","8"],3,"Gọi số là x: x+5=2x−3, suy ra x=8.")
      ]},
      {id:"toan8-hinh",title:"Định lí Thalès và tam giác đồng dạng",theory:"Đường thẳng song song với một cạnh tam giác tạo các đoạn thẳng tương ứng tỉ lệ (định lí Thalès). Hai tam giác đồng dạng có các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ; tỉ số diện tích bằng bình phương tỉ số đồng dạng.",exercises:[
        q("t8-hh-nb","nhan-biet","Hai tam giác đồng dạng có các góc tương ứng:",["bù nhau","bằng nhau","vuông","không liên hệ"],1,"Đó là một tính chất của hai tam giác đồng dạng."),
        q("t8-hh-th","thong-hieu","Hai tam giác đồng dạng có tỉ số cạnh 2:3. Tỉ số chu vi là:",["2:9","4:9","2:3","4:6"],2,"Chu vi tỉ lệ cùng tỉ số với các cạnh tương ứng."),
        q("t8-hh-vd","van-dung","Tam giác có cạnh huyền 13 cm và một cạnh góc vuông 5 cm. Cạnh góc vuông còn lại là:",["8 cm","10 cm","12 cm","18 cm"],2,"Định lí Pythagore: cạnh còn lại = √(13²−5²)=√144=12 cm."),
        q("t8-hh-vdc","van-dung-cao","Hai tam giác đồng dạng có tỉ số cạnh 3:5. Tỉ số diện tích là:",["3:5","6:10","9:25","27:125"],2,"Tỉ số diện tích bằng bình phương tỉ số cạnh: 3²:5²=9:25.")
      ]},
      {id:"toan8-ham-so",title:"Hàm số bậc nhất và đồ thị",theory:"Hàm số y=ax+b (a khác 0) có đồ thị là đường thẳng. Hệ số a quyết định độ dốc; b là tung độ giao điểm với trục Oy. Thay tọa độ điểm vào biểu thức để kiểm tra điểm có thuộc đồ thị.",exercises:[
        q("t8-hs-nb","nhan-biet","Đồ thị của y=2x+1 là:",["đường thẳng","đường tròn","parabol","đoạn thẳng luôn nằm ngang"],0,"Hàm số bậc nhất có đồ thị là một đường thẳng."),
        q("t8-hs-th","thong-hieu","Trong y=−3x+4, tung độ giao điểm với trục Oy là:",["−3","−1","3","4"],3,"Tại x=0 thì y=4."),
        q("t8-hs-vd","van-dung","Điểm nào thuộc đồ thị y=2x−1?",["(0,1)","(1,1)","(2,2)","(−1,1)"],1,"Với x=1, y=2×1−1=1, nên (1,1) thuộc đồ thị."),
        q("t8-hs-vdc","van-dung-cao","Đường thẳng y=ax+2 đi qua (2,6). Giá trị a là:",["1","2","3","4"],1,"6=2a+2, suy ra a=2.")
      ]},
      {id:"toan8-thongke",title:"Thống kê và xác suất",theory:"Tần số cho biết số lần một giá trị xuất hiện; tần suất = tần số / tổng số quan sát. Biến cố chắc chắn có xác suất 1, không thể có xác suất 0; xác suất thực nghiệm được ước lượng bằng số lần xuất hiện chia tổng số lần thử.",exercises:[
        q("t8-tk-nb","nhan-biet","Biến cố không thể có xác suất bằng:",["0","1/2","1","2"],0,"Biến cố không thể không xảy ra nên có xác suất 0."),
        q("t8-tk-th","thong-hieu","Tung đồng xu cân đối, xác suất xuất hiện mặt sấp là:",["0","1/4","1/2","1"],2,"Hai kết quả đồng khả năng, một kết quả là mặt sấp nên xác suất 1/2."),
        q("t8-tk-vd","van-dung","Có 8 học sinh thích bóng đá trong lớp 20 học sinh. Tần suất tương đối là:",["0,2","0,4","0,8","1,6"],1,"8/20=0,4."),
        q("t8-tk-vdc","van-dung-cao","Xúc xắc gieo 60 lần, mặt 6 xuất hiện 8 lần. Xác suất thực nghiệm là:",["2/15","1/6","8/60? không rút gọn","52/60"],0,"8/60 rút gọn chia 4 được 2/15.")
      ]}
    ],
    exams:[
      {id:"t8-15p",type:"15p",title:"Kiểm tra 15 phút · Toán 8",duration:15,questionIds:["t8-dt-nb","t8-pt-nb","t8-hh-nb","t8-hs-nb","t8-tk-nb"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm."},
      {id:"t8-giuaki",type:"giuaki",title:"Kiểm tra giữa kì · Toán 8",duration:45,questionIds:["t8-dt-vd","t8-pt-vd","t8-hh-vd","t8-hs-vd","t8-tk-vd"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm; ghi điều kiện và bước tính."},
      {id:"t8-cuoiki",type:"cuoiki",title:"Kiểm tra cuối kì · Toán 8",duration:60,questionIds:["t8-dt-vdc","t8-pt-vdc","t8-hh-vdc","t8-hs-vdc","t8-tk-vdc"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm. Trình bày lập luận ở câu vận dụng cao."}
    ]
  };
  register(8,"toan",course);
})();
