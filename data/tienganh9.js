(() => {
  const { exercise: q, register } = window.studyMapData;
  const course = {
    title:"Tiếng Anh 9 · Global Success (Kết nối tri thức)",
    lessons:[
      {id:"anh9-local",title:"Local environment · City life",theory:"Từ vựng về làng nghề, môi trường địa phương và đô thị. Present perfect diễn tả trải nghiệm/kết quả đến hiện tại; mệnh đề quan hệ who/which/that bổ nghĩa cho danh từ.",exercises:[
        q("e9-lo-nb","nhan-biet","Choose the correct relative pronoun: A craft village is a place ___ people make products by hand.",["who","where","which","whose"],1,"Where chỉ địa điểm nơi hành động diễn ra."),
        q("e9-lo-th","thong-hieu","They ___ in this city since 2021.",["live","lived","have lived","are living"],2,"Since + mốc thời gian thường dùng hiện tại hoàn thành."),
        q("e9-lo-vd","van-dung","Choose: The artisan ___ made this bowl is famous.",["which","who","where","when"],1,"Who thay cho người làm chủ ngữ trong mệnh đề quan hệ."),
        q("e9-lo-vdc","van-dung-cao","Choose the sentence with a correct present perfect form.",["She has worked here for five years.","She have worked here since five years.","She worked here since five years.","She is worked here for five years."],0,"She + has worked; for đi với khoảng thời gian.")
      ]},
      {id:"anh9-teen-past",title:"Teen stress · Life in the past",theory:"Mệnh đề if loại 1: If + hiện tại đơn, will + V; dùng để nói khả năng tương lai. Used to + V mô tả thói quen/trạng thái quá khứ; should/ought to dùng khuyên nhủ.",exercises:[
        q("e9-te-nb","nhan-biet","Choose: If you study hard, you ___ the exam.",["pass","passed","will pass","would passing"],2,"Câu điều kiện loại 1: if + hiện tại đơn, mệnh đề chính dùng will + V."),
        q("e9-te-th","thong-hieu","My father ___ play outside every evening when he was young.",["used to","is used to","use to","was use to"],0,"Used to + động từ nguyên mẫu diễn tả thói quen trong quá khứ."),
        q("e9-te-vd","van-dung","Choose the best advice: You feel stressed. You ___ talk to someone you trust.",["should","shouldn't","mustn't","are"],0,"Should đưa lời khuyên nên làm."),
        q("e9-te-vdc","van-dung-cao","Choose the correct conditional sentence.",["If it will rain, we stay home.","If it rains, we will stay home.","If it rained, we will stay home.","If it rains, we stayed home."],1,"Mệnh đề if dùng hiện tại đơn; mệnh đề chính dùng will + V.")
      ]},
      {id:"anh9-wonders-world",title:"Wonders of Viet Nam · Vietnam and the world",theory:"Từ vựng về danh lam thắng cảnh và văn hóa. Câu bị động: be + past participle; reported speech thường lùi thì khi động từ tường thuật ở quá khứ. Dùng although/however thể hiện tương phản.",exercises:[
        q("e9-wo-nb","nhan-biet","Choose the past participle of “build”.",["builded","built","building","builds"],1,"Built là quá khứ phân từ của build."),
        q("e9-wo-th","thong-hieu","They built the bridge in 2000. Passive form:",["The bridge is built in 2000.","The bridge was built in 2000.","The bridge built in 2000.","The bridge has build in 2000."],1,"Quá khứ đơn bị động: was/were + past participle."),
        q("e9-wo-vd","van-dung","“I am busy,” Nam said. Choose the reported speech.",["Nam said he is busy.","Nam said he was busy.","Nam says I was busy.","Nam said he busy."],1,"Lùi thì am → was và đổi I thành he."),
        q("e9-wo-vdc","van-dung-cao","Choose the correct contrast connector: ___ the weather was bad, we enjoyed the trip.",["Because","Although","So","Unless"],1,"Although giới thiệu mệnh đề nhượng bộ, tương phản với vế chính.")
      ]},
      {id:"anh9-disasters-communication",title:"Natural disasters · Communication",theory:"Mệnh đề quan hệ xác định cho biết rõ người/vật được nói đến. Câu hỏi gián tiếp dùng trật tự chủ ngữ + động từ (không đảo trợ động từ); mệnh đề thời gian tương lai dùng hiện tại đơn sau when/before/after.",exercises:[
        q("e9-di-nb","nhan-biet","Which word means “earthquake”?",["a sudden shaking of the ground","a long period without rain","a large amount of snow","a very strong wind at sea"],0,"Earthquake là hiện tượng mặt đất rung chuyển đột ngột."),
        q("e9-di-th","thong-hieu","Choose the correct indirect question.",["Could you tell me where is the station?","Could you tell me where the station is?","Could you tell me where does the station?","Could you tell me where station is?"],1,"Câu hỏi gián tiếp dùng trật tự câu kể: where + chủ ngữ + động từ."),
        q("e9-di-vd","van-dung","We will leave after the rain ___.",["will stop","stops","stopped","stopping"],1,"Sau after nói về tương lai dùng hiện tại đơn: stops."),
        q("e9-di-vdc","van-dung-cao","Choose the correct relative clause.",["The village where I was born is beautiful.","The village which I was born is beautiful.","The village who I was born is beautiful.","The village when I was born is beautiful."],0,"Where dùng cho địa điểm trong mệnh đề quan hệ.")
      ]},
      {id:"anh9-space-tourism",title:"Space travel · Changing roles · Tourism",theory:"Câu điều kiện loại 2 dùng If + quá khứ đơn, would + V để nói giả định hiện tại/tương lai. V-ing/to-infinitive phụ thuộc động từ; phân biệt must (bắt buộc) và might (khả năng).",exercises:[
        q("e9-sp-nb","nhan-biet","Choose the correct second conditional: If I ___ rich, I would travel more.",["am","was/were","will be","have been"],1,"Câu điều kiện loại 2 dùng quá khứ đơn; were được dùng phổ biến trong giả định."),
        q("e9-sp-th","thong-hieu","Choose: Tourists must ___ local rules.",["respect","respects","respecting","to respect"],0,"Sau must dùng động từ nguyên mẫu không to."),
        q("e9-sp-vd","van-dung","If she had more time, she ___ a new language.",["learns","will learn","would learn","learned"],2,"Mệnh đề chính điều kiện loại 2 dùng would + V."),
        q("e9-sp-vdc","van-dung-cao","Choose the grammatically correct sentence.",["If I were you, I would book the tickets early.","If I am you, I would book early.","If I were you, I will book early.","If I would be you, I book early."],0,"Cấu trúc giả định loại 2: If I were you, I would + động từ.")
      ]}
    ],
    exams:[
      {id:"e9-15p",type:"15p",title:"15-minute test · English 9",duration:15,questionIds:["e9-lo-nb","e9-te-nb","e9-wo-nb","e9-di-nb","e9-sp-nb"],rubric:"Each correct answer earns 2 points; total 10 points."},
      {id:"e9-giuaki",type:"giuaki",title:"Mid-term test · English 9",duration:45,questionIds:["e9-lo-vd","e9-te-vd","e9-wo-vd","e9-di-vd","e9-sp-vd"],rubric:"Each correct answer earns 2 points; total 10 points."},
      {id:"e9-cuoiki",type:"cuoiki",title:"End-of-term test · English 9",duration:60,questionIds:["e9-lo-vdc","e9-te-vdc","e9-wo-vdc","e9-di-vdc","e9-sp-vdc"],rubric:"Each correct answer earns 2 points; total 10 points. Review the explanation for each item."}
    ]
  };
  register(9,"tienganh",course);
})();
