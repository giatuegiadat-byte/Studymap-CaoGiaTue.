(() => {
  const { exercise: q, register } = window.studyMapData;
  const course = {
    title:"Tiếng Anh 8 · Global Success (Kết nối tri thức)",
    lessons:[
      {id:"anh8-leisure",title:"Leisure time · Life in the countryside",theory:"Present simple mô tả thói quen; present continuous mô tả việc đang diễn ra. Từ vựng thời gian rảnh và cuộc sống nông thôn. Comparatives: short adjectives + -er; long adjectives use more.",exercises:[
        q("e8-le-nb","nhan-biet","Choose: I am keen ___ gardening.",["at","on","in","for"],1,"Cụm từ đúng là be keen on something."),
        q("e8-le-th","thong-hieu","Choose: The countryside is ___ than the city.",["quiet","quieter","quietest","more quietest"],1,"Quiet là tính từ ngắn; so sánh hơn là quieter."),
        q("e8-le-vd","van-dung","Complete: They ___ (ride) their bikes at the moment.",["ride","rides","are riding","rode"],2,"At the moment dùng hiện tại tiếp diễn: are riding."),
        q("e8-le-vdc","van-dung-cao","Choose the correct sentence.",["Life here is more peaceful than city life.","Life here is peacefuler than city life.","Life here more peaceful than city life.","Life here is the more peaceful than city life."],0,"Peaceful là tính từ dài, dùng more peaceful than.")
      ]},
      {id:"anh8-teens",title:"Teenagers · Ethnic groups · Customs",theory:"Từ vựng về tuổi teen, văn hóa và phong tục. Should/shouldn't đưa lời khuyên; used to + V nói về thói quen/trạng thái trong quá khứ không còn đúng hiện tại. Dùng because/although để nối mệnh đề.",exercises:[
        q("e8-te-nb","nhan-biet","Choose: Children ___ respect their traditions.",["should","shouldn't","mustn't","are"],0,"Should diễn tả lời khuyên/điều nên làm."),
        q("e8-te-th","thong-hieu","“My grandfather used to walk to school” means he:",["walks there now every day","walked there regularly in the past","will walk there tomorrow","never walked there"],1,"Used to diễn tả thói quen trong quá khứ."),
        q("e8-te-vd","van-dung","Choose: ___ it was raining, they continued the festival.",["Because","Although","So","Unless"],1,"Although nối hai ý tương phản: trời mưa nhưng họ vẫn tiếp tục."),
        q("e8-te-vdc","van-dung-cao","Choose the correct form: You ___ speak loudly in a library.",["should","shouldn't","used to","are"],1,"Shouldn't dùng cho lời khuyên không nên làm; nói to gây ảnh hưởng người khác.")
      ]},
      {id:"anh8-environment",title:"Environmental protection · Shopping",theory:"Từ vựng môi trường và mua sắm. Present simple passive: am/is/are + past participle, nhấn vào đối tượng chịu tác động. So sánh lượng: fewer + danh từ đếm được; less + danh từ không đếm được.",exercises:[
        q("e8-en-nb","nhan-biet","Choose the correct passive: Paper ___ from wood.",["makes","is made","made","is making"],1,"Cấu trúc bị động hiện tại đơn: is + past participle."),
        q("e8-en-th","thong-hieu","We should use ___ plastic bags.",["fewer","less","many","much"],0,"Bags là danh từ đếm được số nhiều, dùng fewer."),
        q("e8-en-vd","van-dung","Choose: The products ___ in this shop every week.",["deliver","are delivered","is delivered","delivered"],1,"Products là số nhiều; bị động dùng are delivered."),
        q("e8-en-vdc","van-dung-cao","Choose the correct sentence.",["Less cars mean less pollution.","Fewer cars mean less pollution.","Fewer pollution means fewer cars.","A fewer car means less pollution."],1,"Cars đếm được nên fewer cars; pollution không đếm được nên less pollution.")
      ]},
      {id:"anh8-disasters",title:"Natural disasters · Communication",theory:"Mệnh đề thời gian với when/before/after dùng hiện tại đơn để nói về tương lai: When it rains, ...; mệnh đề chính có thể dùng will. Câu tường thuật cơ bản lùi thì khi động từ tường thuật ở quá khứ.",exercises:[
        q("e8-di-nb","nhan-biet","A long period with little or no rain is a ___.",["flood","drought","storm","earthquake"],1,"Drought là hạn hán."),
        q("e8-di-th","thong-hieu","Choose: If there ___ an emergency, call 112.",["is","will be","was","be"],0,"Trong mệnh đề if điều kiện loại 1, dùng hiện tại đơn."),
        q("e8-di-vd","van-dung","Choose: We will stay indoors when the storm ___.",["will arrive","arrives","arrived","arriving"],1,"Mệnh đề thời gian when dùng hiện tại đơn để chỉ tương lai."),
        q("e8-di-vdc","van-dung-cao","Direct speech: “I am safe,” she said. Choose the reported form.",["She said she is safe.","She said she was safe.","She says she had safe.","She said I was safe."],1,"Lùi thì am → was và đổi đại từ phù hợp: she was safe.")
      ]},
      {id:"anh8-science",title:"Science and technology · Our future",theory:"Từ vựng công nghệ, phát minh và tương lai. Present perfect: have/has + past participle, nói về trải nghiệm/kết quả liên quan hiện tại; since + mốc thời gian, for + khoảng thời gian.",exercises:[
        q("e8-sc-nb","nhan-biet","Choose the past participle of “write”.",["wrote","written","writes","writing"],1,"Written là quá khứ phân từ của write."),
        q("e8-sc-th","thong-hieu","They ___ this robot for two years.",["have used","used","are use","has used"],0,"They dùng have; for two years hợp với hiện tại hoàn thành."),
        q("e8-sc-vd","van-dung","Complete: Lan has lived here ___ 2020.",["for","since","during","from"],1,"Since đi với mốc thời gian cụ thể: 2020."),
        q("e8-sc-vdc","van-dung-cao","Choose the sentence with the correct present perfect form.",["He have never seen a robot.","He has never saw a robot.","He has never seen a robot.","He is never seen a robot."],2,"He + has + past participle seen.")
      ]}
    ],
    exams:[
      {id:"e8-15p",type:"15p",title:"15-minute test · English 8",duration:15,questionIds:["e8-le-nb","e8-te-nb","e8-en-nb","e8-di-nb","e8-sc-nb"],rubric:"Each correct answer earns 2 points; total 10 points."},
      {id:"e8-giuaki",type:"giuaki",title:"Mid-term test · English 8",duration:45,questionIds:["e8-le-vd","e8-te-vd","e8-en-vd","e8-di-vd","e8-sc-vd"],rubric:"Each correct answer earns 2 points; total 10 points."},
      {id:"e8-cuoiki",type:"cuoiki",title:"End-of-term test · English 8",duration:60,questionIds:["e8-le-vdc","e8-te-vdc","e8-en-vdc","e8-di-vdc","e8-sc-vdc"],rubric:"Each correct answer earns 2 points; total 10 points. Review explanations after submitting."}
    ]
  };
  register(8,"tienganh",course);
})();
