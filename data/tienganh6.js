(() => {
  const { exercise: q, register } = window.studyMapData;
  const course = {
    title:"Tiếng Anh 6 · Global Success (Kết nối tri thức)",
    lessons:[
      {id:"anh6-school",title:"My new school · Friends",theory:"Từ vựng: school, classroom, subject, uniform, helpful, friendly. Hiện tại đơn diễn tả thói quen: I/you/we/they + V; he/she/it + V-s/-es. Dùng be: am/is/are.",exercises:[
        q("e6-sc-nb","nhan-biet","Choose the correct word: We study English in the ___.",["library","classroom","bedroom","kitchen"],1,"A classroom is a room where students have lessons."),
        q("e6-sc-th","thong-hieu","Choose: My sister ___ to school by bike every day.",["go","goes","going","is go"],1,"My sister là ngôi thứ ba số ít; hiện tại đơn thêm -es: goes."),
        q("e6-sc-vd","van-dung","Complete: I ___ a new student. (be)",["am","is","are","be"],0,"Với chủ ngữ I, động từ be là am."),
        q("e6-sc-vdc","van-dung-cao","Choose the grammatically correct sentence.",["He have two new friends.","He has two new friends.","He haves two new friends.","He is have two new friends."],1,"He dùng has ở hiện tại đơn; không dùng thêm trợ động từ be.")
      ]},
      {id:"anh6-home",title:"My house · My neighbourhood",theory:"Từ vựng về phòng, đồ đạc và địa điểm: bedroom, kitchen, between, opposite, next to. There is + danh từ số ít; there are + danh từ số nhiều. Giới từ chỉ vị trí đứng trước cụm danh từ.",exercises:[
        q("e6-hn-nb","nhan-biet","“Across from” gần nghĩa nhất với:",["opposite","under","behind","inside"],0,"Across from có nghĩa là đối diện, tương đương opposite."),
        q("e6-hn-th","thong-hieu","Choose: There ___ two bedrooms in my house.",["is","are","am","be"],1,"Two bedrooms là danh từ số nhiều nên dùng there are."),
        q("e6-hn-vd","van-dung","The bank is ___ the supermarket and the post office.",["between","under","on","in"],0,"Between diễn tả vị trí ở giữa hai địa điểm."),
        q("e6-hn-vdc","van-dung-cao","Choose the sentence that correctly describes a room.",["There are a bed next to the desk.","There is a bed next to the desk.","There be a bed next to desk.","There is two beds next to the desk."],1,"A bed là danh từ số ít; cấu trúc đúng là there is a bed.")
      ]},
      {id:"anh6-nature",title:"Natural wonders · Tet holiday",theory:"Từ vựng chủ đề thiên nhiên và ngày lễ: island, waterfall, mountain, decorate, celebrate, lucky money. Tính từ miêu tả đứng trước danh từ; should/shouldn't đưa lời khuyên; hiện tại tiếp diễn: am/is/are + V-ing.",exercises:[
        q("e6-na-nb","nhan-biet","A place where water falls from a high rock is a ___.",["waterfall","desert","forest","lake"],0,"Waterfall có nghĩa là thác nước."),
        q("e6-na-th","thong-hieu","Choose the correct advice: You ___ throw rubbish in a national park.",["should","shouldn't","are","do"],1,"Shouldn't dùng để khuyên không nên làm việc gì."),
        q("e6-na-vd","van-dung","Complete: They ___ (decorate) the house now.",["decorate","decorates","are decorating","is decorating"],2,"Now báo hiệu hiện tại tiếp diễn; they are decorating."),
        q("e6-na-vdc","van-dung-cao","Choose the correct word order.",["a beautiful small island","a small beautiful island","an island small beautiful","beautiful an island small"],0,"Tính từ chỉ kích thước thường đứng trước tính từ đánh giá: a beautiful small island.")
      ]},
      {id:"anh6-media",title:"Television · Sports · Cities",theory:"Dùng từ vựng về chương trình, thể thao và thành phố. Wh-questions: What/Where/When/How often. Trạng từ tần suất thường đứng trước động từ thường; like/love + V-ing nói về sở thích.",exercises:[
        q("e6-me-nb","nhan-biet","A person who acts in a film is an ___.",["actor","viewer","reporter","engineer"],0,"Actor là diễn viên."),
        q("e6-me-th","thong-hieu","Choose: ___ do you play badminton? — Twice a week.",["How often","How much","Where","Who"],0,"Twice a week trả lời câu hỏi về tần suất: How often."),
        q("e6-me-vd","van-dung","Choose: Lan enjoys ___ cartoons after school.",["watch","watches","watching","to watching"],2,"Enjoy đi với động từ thêm -ing: watching."),
        q("e6-me-vdc","van-dung-cao","Choose the correct question for the answer “I visit Ha Noi in June.”",["When do you visit Ha Noi?","Where do you visit in June?","Who visit Ha Noi?","How many do you visit Ha Noi?"],0,"June là thời gian nên dùng When.")
      ]},
      {id:"anh6-green",title:"Our greener world · Future houses · Robots",theory:"Từ vựng môi trường, nhà tương lai và robot: recycle, reuse, reduce, solar energy, smart home, robot. Will + động từ nguyên mẫu diễn tả dự đoán/tương lai; should/shouldn't nêu lời khuyên.",exercises:[
        q("e6-gr-nb","nhan-biet","Which word means “tái chế”?",["reuse","recycle","reduce","repair"],1,"Recycle có nghĩa là tái chế vật liệu đã qua sử dụng."),
        q("e6-gr-th","thong-hieu","Choose: People ___ use more solar energy in the future.",["will","are","did","has"],0,"Will + động từ nguyên mẫu diễn tả dự đoán về tương lai."),
        q("e6-gr-vd","van-dung","Choose the best way to reduce plastic waste.",["Use a reusable bottle.","Buy more plastic bags.","Throw bottles into rivers.","Burn plastic at home."],0,"Dùng chai tái sử dụng giúp giảm rác nhựa dùng một lần."),
        q("e6-gr-vdc","van-dung-cao","Choose the correct sentence.",["Robots will helps people at home.","Robots will help people at home.","Robots will helping people at home.","Robots are will help people at home."],1,"Sau will dùng động từ nguyên mẫu không “to”: help.")
      ]}
    ],
    exams:[
      {id:"e6-15p",type:"15p",title:"15-minute test · English 6",duration:15,questionIds:["e6-sc-nb","e6-hn-th","e6-na-nb","e6-me-vd","e6-gr-th"],rubric:"Each correct answer earns 2 points; total 10 points."},
      {id:"e6-giuaki",type:"giuaki",title:"Mid-term test · English 6",duration:45,questionIds:["e6-sc-vd","e6-hn-vdc","e6-na-th","e6-me-th","e6-gr-vd"],rubric:"Each correct answer earns 2 points; total 10 points. Check grammar and context."},
      {id:"e6-cuoiki",type:"cuoiki",title:"End-of-term test · English 6",duration:60,questionIds:["e6-sc-vdc","e6-hn-vd","e6-na-vdc","e6-me-vdc","e6-gr-vdc"],rubric:"Each correct answer earns 2 points; total 10 points. Answers include concise explanations."}
    ]
  };
  register(6,"tienganh",course);
})();
