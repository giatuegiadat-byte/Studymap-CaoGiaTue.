(() => {
  const { exercise: q, register } = window.studyMapData;
  const course = {
    title:"Khoa học tự nhiên 8 · Kết nối tri thức",
    lessons:[
      {id:"khtn8-phan-ung",area:"Hóa học",title:"Phản ứng hóa học và định luật bảo toàn",theory:"Phản ứng hóa học biến đổi chất ban đầu thành chất mới. Tổng khối lượng các chất được bảo toàn trong phản ứng kín. Phương trình hóa học biểu diễn chất tham gia, sản phẩm và tỉ lệ số hạt bằng hệ số.",exercises:[
        q("k8-pu-nb","nhan-biet","Hiện tượng nào là biến đổi hóa học?",["nước đá tan","đường tan trong nước","sắt bị gỉ","nước sôi"],2,"Sắt gỉ tạo thành chất mới nên là biến đổi hóa học."),
        q("k8-pu-th","thong-hieu","Trong phản ứng kín, tổng khối lượng chất tham gia so với sản phẩm:",["lớn hơn","nhỏ hơn","bằng nhau","luôn bằng 0"],2,"Định luật bảo toàn khối lượng: tổng khối lượng hai vế bằng nhau."),
        q("k8-pu-vd","van-dung","Cân bằng H₂ + O₂ → H₂O, hệ số tối giản là:",["1,1,1","2,1,2","1,2,1","2,2,1"],1,"Phương trình cân bằng: 2H₂ + O₂ → 2H₂O."),
        q("k8-pu-vdc","van-dung-cao","Cho 12 g carbon phản ứng vừa đủ với 32 g oxygen tạo carbon dioxide. Khối lượng sản phẩm là:",["20 g","32 g","44 g","384 g"],2,"Bảo toàn khối lượng: 12 + 32 = 44 g.")
      ]},
      {id:"khtn8-dung-dich",area:"Hóa học",title:"Mol, dung dịch và nồng độ",theory:"Một mol chứa lượng hạt xác định; khối lượng mol M có đơn vị g/mol. n=m/M. Nồng độ phần trăm C% = m chất tan / m dung dịch ×100%; pha loãng cần bảo toàn lượng chất tan.",exercises:[
        q("k8-dd-nb","nhan-biet","Công thức tính số mol từ khối lượng là:",["n=m×M","n=m/M","n=M/m","n=m+M"],1,"Số mol n bằng khối lượng m chia khối lượng mol M."),
        q("k8-dd-th","thong-hieu","18 g nước có khối lượng mol 18 g/mol, tương ứng:",["0,5 mol","1 mol","18 mol","324 mol"],1,"n=18/18=1 mol."),
        q("k8-dd-vd","van-dung","Hòa tan 10 g muối vào 90 g nước. Nồng độ phần trăm là:",["5%","10%","11,1%","90%"],1,"Khối lượng dung dịch 100 g; C%=10/100×100%=10%."),
        q("k8-dd-vdc","van-dung-cao","Dung dịch 200 g nồng độ 5% có bao nhiêu gam chất tan?",["5 g","10 g","20 g","40 g"],1,"m chất tan = 5% × 200 = 10 g.")
      ]},
      {id:"khtn8-acid-base",area:"Hóa học",title:"Acid, base, pH và muối",theory:"Acid làm quỳ tím hóa đỏ; base tan làm quỳ tím hóa xanh. pH < 7 là môi trường acid, pH = 7 trung tính, pH > 7 base. Acid tác dụng với base tạo muối và nước (phản ứng trung hòa).",exercises:[
        q("k8-ab-nb","nhan-biet","Dung dịch có pH = 3 có môi trường:",["acid","trung tính","base","không xác định"],0,"pH nhỏ hơn 7 biểu thị môi trường acid."),
        q("k8-ab-th","thong-hieu","Quỳ tím hóa xanh trong dung dịch có tính:",["acid","base","trung tính","muối bất kì"],1,"Base làm quỳ tím chuyển xanh."),
        q("k8-ab-vd","van-dung","Sản phẩm của phản ứng acid + base thường là:",["muối và nước","kim loại và oxygen","acid và hydrogen","chỉ khí"],0,"Phản ứng trung hòa tạo muối và nước."),
        q("k8-ab-vdc","van-dung-cao","Để trung hòa 1 mol HCl cần bao nhiêu mol NaOH theo HCl+NaOH→NaCl+H₂O?",["0,5 mol","1 mol","2 mol","Không thể xác định"],1,"Tỉ lệ phương trình là 1:1, nên cần 1 mol NaOH.")
      ]},
      {id:"khtn8-ap-suat",area:"Vật lý",title:"Áp suất và lực đẩy Archimedes",theory:"Áp suất p=F/S; cùng lực, diện tích tiếp xúc càng nhỏ thì áp suất càng lớn. Vật trong chất lỏng chịu lực đẩy hướng lên; vật nổi khi lực đẩy cân bằng trọng lượng ở trạng thái nổi.",exercises:[
        q("k8-as-nb","nhan-biet","Công thức tính áp suất là:",["p=F×S","p=F/S","p=S/F","p=F+S"],1,"Áp suất bằng áp lực chia diện tích bị ép."),
        q("k8-as-th","thong-hieu","Cùng một lực, giảm diện tích tiếp xúc còn một nửa thì áp suất:",["giảm một nửa","tăng gấp đôi","không đổi","bằng 0"],1,"p=F/S; S giảm một nửa làm p tăng gấp đôi."),
        q("k8-as-vd","van-dung","Lực 100 N tác dụng lên diện tích 0,5 m² tạo áp suất:",["50 Pa","100 Pa","200 Pa","500 Pa"],2,"p=100/0,5=200 Pa."),
        q("k8-as-vdc","van-dung-cao","Một vật nổi cân bằng trên nước. So sánh lực đẩy Archimedes với trọng lượng:",["lực đẩy nhỏ hơn","lực đẩy bằng trọng lượng","lực đẩy lớn hơn mãi","không có lực đẩy"],1,"Vật nổi cân bằng khi lực đẩy hướng lên bằng trọng lượng hướng xuống.")
      ]},
      {id:"khtn8-co-the",area:"Sinh học",title:"Cơ thể người và hệ cơ quan",theory:"Cơ thể người gồm nhiều hệ cơ quan phối hợp: tiêu hóa biến đổi thức ăn, hô hấp trao đổi khí, tuần hoàn vận chuyển, bài tiết loại chất thải. Cân bằng cơ thể được duy trì nhờ phối hợp và điều hòa.",exercises:[
        q("k8-ct-nb","nhan-biet","Cơ quan chủ yếu trao đổi oxygen và carbon dioxide là:",["tim","phổi","dạ dày","thận"],1,"Phổi là cơ quan trao đổi khí của hệ hô hấp."),
        q("k8-ct-th","thong-hieu","Máu vận chuyển oxygen đến tế bào nhờ chủ yếu vào:",["hồng cầu","tiểu cầu","dịch mật","nước bọt"],0,"Hemoglobin trong hồng cầu gắn và vận chuyển oxygen."),
        q("k8-ct-vd","van-dung","Thói quen giúp bảo vệ hệ tuần hoàn là:",["vận động phù hợp, ăn cân đối","hút thuốc","ăn quá mặn thường xuyên","ngồi lâu không nghỉ"],0,"Hoạt động thể lực phù hợp và dinh dưỡng cân đối hỗ trợ sức khỏe tim mạch."),
        q("k8-ct-vdc","van-dung-cao","Khi vận động mạnh, nhịp thở và nhịp tim tăng nhằm:",["giảm máu đến cơ","đưa thêm oxygen và chất dinh dưỡng tới tế bào","ngừng trao đổi chất","hạ thân nhiệt bằng cách ngừng tuần hoàn"],1,"Cơ hoạt động cần nhiều oxygen và năng lượng; hô hấp, tuần hoàn tăng cường cung cấp.")
      ]}
    ],
    exams:[
      {id:"k8-15p",type:"15p",title:"Kiểm tra 15 phút · KHTN 8",duration:15,questionIds:["k8-pu-nb","k8-dd-nb","k8-ab-nb","k8-as-nb","k8-ct-nb"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm."},
      {id:"k8-giuaki",type:"giuaki",title:"Kiểm tra giữa kì · KHTN 8",duration:45,questionIds:["k8-pu-vd","k8-dd-vd","k8-ab-vd","k8-as-vd","k8-ct-vd"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm. Ghi đơn vị trong bài tính."},
      {id:"k8-cuoiki",type:"cuoiki",title:"Kiểm tra cuối kì · KHTN 8",duration:60,questionIds:["k8-pu-vdc","k8-dd-vdc","k8-ab-vdc","k8-as-vdc","k8-ct-vdc"],rubric:"Mỗi câu đúng 2 điểm; tổng 10 điểm; giải thích lựa chọn theo kiến thức khoa học."}
    ]
  };
  register(8,"khtn",course);
})();
