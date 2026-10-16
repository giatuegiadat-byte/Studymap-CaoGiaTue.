(() => {
  const { exercise: q, register } = window.studyMapData;
  const course = {
    title: "Toán 6 · Kết nối tri thức",
    lessons: [
      { id: "toan6-so-tu-nhien", title: "Số tự nhiên và phép tính", theory: "Tập hợp số tự nhiên gồm 0, 1, 2, …; thứ tự thực hiện phép tính: lũy thừa, trong ngoặc, nhân chia, cộng trừ. Lũy thừa là tích các thừa số bằng nhau.", exercises: [
        q("t6-stn-nb","nhan-biet","Tính 2³.",["6","8","9","12"],1,"2³ = 2 × 2 × 2 = 8."),
        q("t6-stn-th","thong-hieu","Tính 36 − 4 × 5.",["16","20","160","32"],0,"Thực hiện phép nhân trước: 36 − 20 = 16."),
        q("t6-stn-vd","van-dung","Một hộp có 24 bút. Xếp đều vào 6 túi. Mỗi túi có bao nhiêu bút?",["3","4","6","18"],1,"24 : 6 = 4 bút."),
        q("t6-stn-vdc","van-dung-cao","Tìm x biết 3(x + 2) = 27.",["5","7","9","11"],1,"Chia hai vế cho 3 được x+2=9, suy ra x=7.")
      ]},
      { id: "toan6-chia-het", title: "Tính chia hết, ƯCLN và BCNN", theory: "Dấu hiệu chia hết cho 2, 5, 3, 9 giúp nhận biết nhanh. Phân tích ra thừa số nguyên tố: ƯCLN lấy thừa số chung với số mũ nhỏ nhất; BCNN lấy mọi thừa số với số mũ lớn nhất.", exercises: [
        q("t6-cs-nb","nhan-biet","Số nào chia hết cho 5?",["142","235","318","421"],1,"Số chia hết cho 5 có chữ số tận cùng là 0 hoặc 5."),
        q("t6-cs-th","thong-hieu","Số nào chia hết cho cả 2 và 3?",["14","18","25","35"],1,"18 là số chẵn và có tổng chữ số 1 + 8 = 9 chia hết cho 3."),
        q("t6-cs-vd","van-dung","Tìm ƯCLN(18, 30).",["3","6","9","90"],1,"18 = 2 × 3², 30 = 2 × 3 × 5 nên ƯCLN = 2 × 3 = 6."),
        q("t6-cs-vdc","van-dung-cao","Hai đèn nháy mỗi 12 và 18 phút. Sau ít nhất bao lâu chúng cùng nháy lại?",["24 phút","30 phút","36 phút","216 phút"],2,"Thời gian là BCNN(12,18) = 36 phút.")
      ]},
      { id: "toan6-so-nguyen", title: "Số nguyên và phép tính", theory: "Số nguyên gồm số nguyên âm, số 0 và số nguyên dương. Trên trục số, số bên phải lớn hơn số bên trái. Cộng hai số trái dấu: lấy hiệu giá trị tuyệt đối và giữ dấu của số có giá trị tuyệt đối lớn hơn.", exercises: [
        q("t6-sn-nb","nhan-biet","Số đối của −7 là số nào?",["−7","0","7","1"],2,"Hai số đối nhau có tổng bằng 0; số đối của −7 là 7."),
        q("t6-sn-th","thong-hieu","Số nào lớn nhất?",["−8","−3","−1","−5"],2,"Trong các số âm, số có giá trị tuyệt đối nhỏ hơn thì lớn hơn."),
        q("t6-sn-vd","van-dung","Tính (−12) + 19.",["−31","−7","7","31"],2,"Hai số trái dấu: 19 − 12 = 7, lấy dấu dương."),
        q("t6-sn-vdc","van-dung-cao","Nhiệt độ −3°C tăng 8°C rồi giảm 6°C. Nhiệt độ cuối là bao nhiêu?",["−11°C","−1°C","1°C","11°C"],1,"−3 + 8 − 6 = −1°C.")
      ]},
      { id: "toan6-phan-so", title: "Phân số và số thập phân", theory: "Phân số bằng nhau khi nhân hoặc chia cả tử và mẫu cho cùng một số khác 0. Cộng, trừ phân số cần quy đồng mẫu; khi chia phân số, nhân với phân số nghịch đảo.", exercises: [
        q("t6-ps-nb","nhan-biet","Phân số nào bằng 3/4?",["6/10","9/12","12/20","15/24"],1,"9/12 rút gọn cả tử và mẫu cho 3 được 3/4."),
        q("t6-ps-th","thong-hieu","Tính 1/3 + 1/6.",["1/9","1/2","2/9","2/3"],1,"Quy đồng: 1/3 = 2/6, tổng bằng 3/6 = 1/2."),
        q("t6-ps-vd","van-dung","Tính 2,5 × 4.",["1","6,5","10","100"],2,"2,5 × 4 = 10."),
        q("t6-ps-vdc","van-dung-cao","Một bể đã đầy 3/5. Đổ thêm 1/4 dung tích bể. Phần dung tích chưa đầy là bao nhiêu?",["1/20","3/20","9/20","17/20"],1,"Đã có 3/5 + 1/4 = 17/20; phần còn thiếu là 1 − 17/20 = 3/20.")
      ]},
      { id: "toan6-hinh-du-lieu", title: "Hình phẳng, đối xứng và dữ liệu", theory: "Hình chữ nhật có P = 2(a+b), S = ab; hình vuông có P = 4a, S = a². Hình có trục đối xứng khi gấp theo trục hai phần chồng khít. Số trung bình cộng bằng tổng các giá trị chia số giá trị.", exercises: [
        q("t6-hd-nb","nhan-biet","Chu vi hình vuông cạnh a là:",["a²","2a","3a","4a"],3,"Hình vuông có bốn cạnh bằng nhau nên chu vi bằng 4a."),
        q("t6-hd-th","thong-hieu","Hình chữ nhật dài 8 cm, rộng 3 cm có diện tích:",["11 cm²","22 cm²","24 cm²","48 cm²"],2,"Diện tích bằng 8 × 3 = 24 cm²."),
        q("t6-hd-vd","van-dung","Dãy 4, 6, 8 có số trung bình cộng là:",["5","6","7","18"],1,"(4 + 6 + 8) : 3 = 6."),
        q("t6-hd-vdc","van-dung-cao","Hình chữ nhật có chu vi 30 cm, chiều dài 9 cm. Diện tích bằng:",["36 cm²","45 cm²","54 cm²","72 cm²"],2,"Nửa chu vi 15 cm nên rộng 15 − 9 = 6 cm; diện tích 9 × 6 = 54 cm².")
      ]}
    ],
    exams: [
      { id:"t6-15p", type:"15p", title:"Kiểm tra 15 phút · Toán 6", duration:15, questionIds:["t6-stn-nb","t6-cs-th","t6-sn-vd","t6-ps-th","t6-hd-vd"], rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm. Chọn một đáp án cho mỗi câu." },
      { id:"t6-giuaki", type:"giuaki", title:"Kiểm tra giữa kì · Toán 6", duration:45, questionIds:["t6-stn-vd","t6-cs-vd","t6-sn-th","t6-ps-vd","t6-hd-th"], rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm. Trình bày lời giải nháp trước khi chọn đáp án." },
      { id:"t6-cuoiki", type:"cuoiki", title:"Kiểm tra cuối kì · Toán 6", duration:60, questionIds:["t6-stn-vdc","t6-cs-vdc","t6-sn-vdc","t6-ps-vdc","t6-hd-vdc"], rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm. Câu vận dụng cao cần nêu đủ bước lập luận." }
    ]
  };
  register(6, "toan", course);
})();
