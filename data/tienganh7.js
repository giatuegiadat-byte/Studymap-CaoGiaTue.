(() => {
  const { exercise: q, register } = window.studyMapData;
  const course = {
    title:"Tiếng Anh 7 · Global Success (Kết nối tri thức)",
    lessons:[
      {id:"anh7-community",title:"Hobbies · Healthy living · Community",theory:"Present simple diễn tả thói quen/sự thật; present continuous diễn tả việc đang xảy ra. Enjoy/like/love + V-ing. Should/shouldn't dùng nêu lời khuyên; từ vựng về sở thích, sức khỏe và hoạt động cộng đồng.",exercises:[
        q("e7-co-nb","nhan-biet","Choose: My hobby is ___ photos.",["take","takes","taking","took"],2,"Sau is trong cấu trúc sở thích dùng danh động từ: taking photos."),
        q("e7-co-th","thong-hieu","Choose: She ___ to school every day.",["walk","walks","is walk","walking"],1,"She ở hiện tại đơn nên động từ walk thêm -s."),
        q("e7-co-vd","van-dung","You have a toothache. You ___ see a dentist.",["should","shouldn't","are","did"],0,"Should dùng để đưa lời khuyên nên làm."),
        q("e7-co-vdc","van-dung-cao","Choose the correct sentence.",["They are collect books now.","They collect books now.","They are collecting books now.","They collecting books now."],2,"Now chỉ hành động đang diễn ra: are + collecting.")
      ]},
      {id:"anh7-culture",title:"Music · Food and drink · Festivals",theory:"Từ vựng âm nhạc, món ăn, nguyên liệu và lễ hội. Countable nouns có dạng số nhiều; some thường dùng câu khẳng định, any thường dùng câu hỏi/phủ định. How much hỏi lượng không đếm được; How many hỏi số lượng đếm được.",exercises:[
        q("e7-cu-nb","nhan-biet","Choose the countable noun.",["rice","milk","apple","water"],2,"Apple đếm được (one apple, two apples)."),
        q("e7-cu-th","thong-hieu","How ___ eggs do we need?",["much","many","long","often"],1,"Eggs là danh từ đếm được số nhiều nên dùng how many."),
        q("e7-cu-vd","van-dung","There isn't ___ milk in the fridge.",["some","any","many","a"],1,"Any thường dùng trong câu phủ định; milk không đếm được."),
        q("e7-cu-vdc","van-dung-cao","Choose the correct quantifier: We need ___ sugar for the cake.",["a few","many","some","few"],2,"Sugar không đếm được; some phù hợp câu khẳng định.")
      ]},
      {id:"anh7-travel",title:"Traffic · Films · Places",theory:"Từ vựng giao thông, phim ảnh và địa điểm. Comparative adjectives: short adjective + -er, long adjective + more; dùng than để so sánh. Must/mustn't diễn tả quy tắc bắt buộc/cấm.",exercises:[
        q("e7-tr-nb","nhan-biet","A person who rides a bicycle is a ___.",["cyclist","driver","passenger","pedestrian"],0,"Cyclist là người đi xe đạp."),
        q("e7-tr-th","thong-hieu","Choose: This film is ___ than that one.",["interesting","more interesting","most interesting","the interesting"],1,"Interesting là tính từ dài, so sánh hơn dùng more interesting."),
        q("e7-tr-vd","van-dung","At a red light, you ___ stop.",["must","mustn't","can to","are"],0,"Must biểu thị quy tắc bắt buộc phải dừng."),
        q("e7-tr-vdc","van-dung-cao","Choose the correct comparative.",["A car is fast than a bike.","A car is faster than a bike.","A car is more fast than a bike.","A car faster than a bike."],1,"Fast là tính từ ngắn: faster than.")
      ]},
      {id:"anh7-world",title:"Energy · Travelling · English-speaking countries",theory:"Will + V nguyên mẫu diễn tả dự đoán/ý định tương lai; shouldn't nêu điều không nên làm. Trạng từ tần suất và liên từ because/so/but giúp nối ý; đọc để tìm ý chính và thông tin chi tiết.",exercises:[
        q("e7-wo-nb","nhan-biet","Choose the clean energy source.",["coal","solar energy","petrol","diesel"],1,"Solar energy là nguồn năng lượng tái tạo sạch."),
        q("e7-wo-th","thong-hieu","I think people ___ use more bicycles in the future.",["will","did","are","has"],0,"Will diễn tả dự đoán tương lai."),
        q("e7-wo-vd","van-dung","The bus was late, ___ we walked to school.",["because","so","but","or"],1,"So nối nguyên nhân với kết quả: xe buýt muộn nên chúng tôi đi bộ."),
        q("e7-wo-vdc","van-dung-cao","Choose the sentence with a correct reason.",["We save energy because it protects the environment.","We save energy so it was raining.","We save energy but it is useful.","Because we save energy, but."],0,"Because giới thiệu lí do; câu hoàn chỉnh nêu tiết kiệm năng lượng vì bảo vệ môi trường.")
      ]}
    ],
    exams:[
      {id:"e7-15p",type:"15p",title:"15-minute test · English 7",duration:15,questionIds:["e7-co-nb","e7-cu-nb","e7-tr-nb","e7-wo-nb","e7-co-th"],rubric:"Each correct answer earns 2 points; total 10 points."},
      {id:"e7-giuaki",type:"giuaki",title:"Mid-term test · English 7",duration:45,questionIds:["e7-co-vd","e7-cu-vd","e7-tr-vd","e7-wo-vd","e7-cu-th"],rubric:"Each correct answer earns 2 points; total 10 points."},
      {id:"e7-cuoiki",type:"cuoiki",title:"End-of-term test · English 7",duration:60,questionIds:["e7-co-vdc","e7-cu-vdc","e7-tr-vdc","e7-wo-vdc","e7-tr-th"],rubric:"Each correct answer earns points proportionally; total 10 points. Review the explanation after submitting."}
    ]
  };
  register(7,"tienganh",course);
})();
