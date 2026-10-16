(() => {
  const { exercise: q, register } = window.studyMapData;
  const course = {
    title:"Toán 9 · Kết nối tri thức",
    lessons:[
      {id:"toan9-can-bac-hai",title:"Căn bậc hai và biến đổi căn thức",theory:"Với a≥0, căn bậc hai số học √a không âm và (√a)²=a. Rút gọn căn bằng cách tách thừa số chính phương; chỉ gộp các căn đồng dạng sau khi rút gọn.",exercises:[
        q("t9-cn-nb","nhan-biet","√81 bằng:",["−9","9","±9","40,5"],1,"Căn bậc hai số học không âm nên √81=9."),
        q("t9-cn-th","thong-hieu","Rút gọn √50.",["5√2","25√2","2√5","10√5"],0,"√50=√(25×2)=5√2."),
        q("t9-cn-vd","van-dung","Tính √12 × √3.",["3","6","9","36"],1,"√12×√3=√36=6."),
        q("t9-cn-vdc","van-dung-cao","Rút gọn (√5−1)(√5+1).",["4","5","6","2√5"],0,"Dùng hiệu hai bình phương: 5−1=4.")
      ]},
      {id:"toan9-ham-bac-nhat",title:"Hàm số bậc nhất và hệ phương trình",theory:"Đồ thị y=ax+b (a≠0) là đường thẳng. Hệ hai phương trình bậc nhất có thể giải bằng thế hoặc cộng đại số; nghiệm là cặp số thỏa mãn đồng thời cả hai phương trình.",exercises:[
        q("t9-hs-nb","nhan-biet","Hệ số góc của đường thẳng y=−2x+3 là:",["−2","2","3","−3"],0,"Trong y=ax+b, hệ số góc là a=−2."),
        q("t9-hs-th","thong-hieu","Điểm nào thuộc đường thẳng y=x+1?",["(0,0)","(1,2)","(2,1)","(−1,1)"],1,"Thay x=1 được y=2, nên điểm (1,2) thuộc đường thẳng."),
        q("t9-hs-vd","van-dung","Giải hệ x+y=5, x−y=1. Giá trị (x,y) là:",["(2,3)","(3,2)","(1,4)","(4,1)"],1,"Cộng hai phương trình được 2x=6 nên x=3; y=2."),
        q("t9-hs-vdc","van-dung-cao","Hai số có tổng 31, hiệu 7. Số lớn là:",["12","17","19","24"],2,"Số lớn=(31+7):2=19.")
      ]},
      {id:"toan9-bac-hai",title:"Hàm số y=ax² và phương trình bậc hai",theory:"Đồ thị y=ax² (a khác 0) là parabol có trục đối xứng Oy. Phương trình ax²+bx+c=0 có biệt thức Δ=b²−4ac; Δ>0 có hai nghiệm phân biệt, Δ=0 nghiệm kép, Δ<0 vô nghiệm thực.",exercises:[
        q("t9-bh-nb","nhan-biet","Biệt thức của ax²+bx+c=0 là:",["b²+4ac","b²−4ac","a²−4bc","4ac−b²"],1,"Δ=b²−4ac."),
        q("t9-bh-th","thong-hieu","Phương trình x²−5x+6=0 có hai nghiệm là:",["1 và 6","2 và 3","−2 và −3","0 và 6"],1,"x²−5x+6=(x−2)(x−3), nghiệm 2 và 3."),
        q("t9-bh-vd","van-dung","Giải x²=49.",["x=7","x=−7","x=±7","x=49"],2,"x²=49 nên x=7 hoặc x=−7."),
        q("t9-bh-vdc","van-dung-cao","Phương trình x²−4x+m=0 có nghiệm kép khi m bằng:",["−4","0","2","4"],3,"Δ=16−4m=0 nên m=4.")
      ]},
      {id:"toan9-hinh-tron",title:"Hệ thức lượng và đường tròn",theory:"Trong tam giác vuông, định lí Pythagore: a²+b²=c². Đường tròn bán kính R có chu vi 2πR và diện tích πR². Góc nội tiếp chắn cùng cung bằng nửa số đo góc ở tâm.",exercises:[
        q("t9-ht-nb","nhan-biet","Chu vi đường tròn bán kính R là:",["πR²","2πR","πd²","4R"],1,"C=2πR."),
        q("t9-ht-th","thong-hieu","Tam giác vuông có hai cạnh góc vuông 6 và 8. Cạnh huyền là:",["10","12","14","100"],0,"√(6²+8²)=√100=10."),
        q("t9-ht-vd","van-dung","Đường tròn bán kính 5 cm có diện tích:",["10π cm²","25π cm²","5π cm²","50π cm²"],1,"S=πR²=25π cm²."),
        q("t9-ht-vdc","van-dung-cao","Góc ở tâm chắn cung 100°. Góc nội tiếp cùng chắn cung đó là:",["25°","50°","100°","200°"],1,"Góc nội tiếp bằng nửa góc ở tâm: 100°:2=50°.")
      ]},
      {id:"toan9-thong-ke",title:"Thống kê và xác suất",theory:"Tần số và tần suất mô tả phân bố dữ liệu; số trung bình, trung vị, mốt tóm tắt mẫu. Với các kết quả đồng khả năng, xác suất biến cố bằng số kết quả thuận lợi chia tổng số kết quả.",exercises:[
        q("t9-tk-nb","nhan-biet","Xác suất của biến cố chắc chắn bằng:",["0","1/2","1","không xác định"],2,"Biến cố chắc chắn luôn xảy ra, xác suất bằng 1."),
        q("t9-tk-th","thong-hieu","Trung vị của 2, 4, 7 là:",["2","4","7","13"],1,"Dãy đã sắp tăng; giá trị chính giữa là 4."),
        q("t9-tk-vd","van-dung","Hộp có 3 bi đỏ và 2 bi xanh. Xác suất lấy được bi đỏ là:",["2/5","3/5","1/2","3/2"],1,"Có 3 kết quả đỏ trên tổng 5 viên bi: 3/5."),
        q("t9-tk-vdc","van-dung-cao","Gieo xúc xắc cân đối. Xác suất ra số chẵn hoặc lớn hơn 4 là:",["1/2","2/3","5/6","1/3"],1,"Các kết quả thuận lợi {2,4,5,6}, có 4/6=2/3. Lưu ý tập hợp gồm đúng 4 kết quả.")
      ]}
    ],
    exams:[
      {id:"t9-15p",type:"15p",title:"Kiểm tra 15 phút · Toán 9",duration:15,questionIds:["t9-cn-nb","t9-hs-nb","t9-bh-nb","t9-ht-nb","t9-tk-nb"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm."},
      {id:"t9-giuaki",type:"giuaki",title:"Kiểm tra giữa kì · Toán 9",duration:45,questionIds:["t9-cn-vd","t9-hs-vd","t9-bh-vd","t9-ht-vd","t9-tk-vd"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm. Ghi điều kiện, phép biến đổi và kết luận."},
      {id:"t9-cuoiki",type:"cuoiki",title:"Kiểm tra cuối kì · Toán 9",duration:60,questionIds:["t9-cn-vdc","t9-hs-vdc","t9-bh-vdc","t9-ht-vdc","t9-tk-vdc"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm. Nêu đủ lập luận ở các câu vận dụng cao."}
    ]
  };
  register(9,"toan",course);
})();
