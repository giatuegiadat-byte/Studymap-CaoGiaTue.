(() => {
const nganHangCauHoi = {
  6: {
    toan: [
      { question: "Tính $\\frac{3}{4}+\\frac{1}{8}$.", options: ["$\\frac{4}{12}$", "$\\frac{7}{8}$", "$\\frac{1}{2}$", "$\\frac{5}{8}$"], answer: 1, topic: "Phân số", explanation: "$\\frac{3}{4}=\\frac{6}{8}$, vậy tổng là $\\frac{7}{8}$." },
      { question: "Hình chữ nhật dài $8\\,\\text{cm}$, rộng $5\\,\\text{cm}$. Chu vi bằng bao nhiêu?", options: ["$13\\,\\text{cm}$", "$26\\,\\text{cm}$", "$40\\,\\text{cm}$", "$80\\,\\text{cm}$"], answer: 1, topic: "Hình học", explanation: "$P=2(8+5)=26\\,\\text{cm}$." },
      { question: "Tìm số tự nhiên nhỏ nhất khác $0$ chia hết cho cả $6$ và $8$.", options: ["$12$", "$18$", "$24$", "$48$"], answer: 2, topic: "Bội chung", challenge: true, explanation: "$\\operatorname{BCNN}(6,8)=24$." },
      { question: "Tính giá trị biểu thức $18-2\\times(3+4)$.", options: ["$4$", "$16$", "$28$", "$112$"], answer: 0, topic: "Thứ tự thực hiện phép tính", explanation: "Tính trong ngoặc trước: $18-2\\times7=18-14=4$." },
      { question: "Hình vuông có chu vi $36\\,\\text{cm}$. Diện tích bằng bao nhiêu?", options: ["$9\\,\\text{cm}^2$", "$36\\,\\text{cm}^2$", "$72\\,\\text{cm}^2$", "$81\\,\\text{cm}^2$"], answer: 3, topic: "Chu vi và diện tích", challenge: true, explanation: "Cạnh là $36:4=9\\,\\text{cm}$, diện tích là $9^2=81\\,\\text{cm}^2$." }
    ],
    khtn: [
      { question: "Cơ quan nào của cây chủ yếu thực hiện quá trình quang hợp?", options: ["Rễ", "Thân gỗ", "Lá", "Hoa"], answer: 2, topic: "Quang hợp", listenText: "Cơ quan nào của cây chủ yếu thực hiện quá trình quang hợp?", explanation: "Lá có diệp lục, hấp thụ ánh sáng để thực hiện quang hợp." },
      { question: "Đơn vị cơ bản dùng để đo độ dài là gì?", options: ["Mét", "Lít", "Kilôgam", "Giây"], answer: 0, topic: "Đo lường", listenText: "Đơn vị cơ bản dùng để đo độ dài là gì?", explanation: "Mét, kí hiệu m, là đơn vị đo độ dài." },
      { question: "Một vật có khối lượng $200\\,\\text{g}$ và thể tích $50\\,\\text{cm}^3$. Khối lượng riêng của vật là bao nhiêu?", options: ["$0{,}25\\,\\text{g/cm}^3$", "$4\\,\\text{g/cm}^3$", "$250\\,\\text{g/cm}^3$", "$10\\,000\\,\\text{g/cm}^3$"], answer: 1, topic: "Khối lượng riêng", challenge: true, listenText: "Một vật có khối lượng hai trăm gam và thể tích năm mươi xăng-ti-mét khối. Khối lượng riêng của vật là bao nhiêu?", explanation: "$D=\\frac{m}{V}=\\frac{200}{50}=4\\,\\text{g/cm}^3$." },
      { question: "Chất nào dưới đây là chất tinh khiết?", options: ["Nước cất", "Nước biển", "Không khí", "Nước đường"], answer: 0, topic: "Chất tinh khiết và hỗn hợp", listenText: "Chất nào là chất tinh khiết: nước cất, nước biển, không khí hay nước đường?", explanation: "Nước cất chỉ gồm một chất; nước biển, không khí và nước đường là hỗn hợp." },
      { question: "Một mẫu đá có khối lượng $78\\,\\text{g}$, thể tích $30\\,\\text{cm}^3$. Khối lượng riêng là bao nhiêu?", options: ["$2{,}6\\,\\text{g/cm}^3$", "$3{,}9\\,\\text{g/cm}^3$", "$48\\,\\text{g/cm}^3$", "$2\\,340\\,\\text{g/cm}^3$"], answer: 0, topic: "Khối lượng riêng", challenge: true, listenText: "Một mẫu đá có khối lượng bảy mươi tám gam, thể tích ba mươi xăng-ti-mét khối. Khối lượng riêng bằng bao nhiêu?", explanation: "$D=\\frac{78}{30}=2{,}6\\,\\text{g/cm}^3$." }
    ],
    anh: [
      { question: "Chọn dạng đúng: She ___ to school every morning.", options: ["go", "goes", "going", "went"], answer: 1, topic: "Hiện tại đơn", skill: "doc", explanation: "Chủ ngữ ngôi thứ ba số ít ở hiện tại đơn nên động từ thêm -s/-es." },
      { question: "Từ nào có nghĩa là “thư viện”?", options: ["Museum", "Hospital", "Library", "Station"], answer: 2, topic: "Từ vựng trường học", skill: "doc", explanation: "Library có nghĩa là thư viện." },
      { question: "Nghe và chọn hoạt động Nam làm vào Chủ nhật.", options: ["He plays football.", "He visits his grandparents.", "He watches TV.", "He does his homework."], answer: 1, topic: "Nghe hiểu", skill: "nghe", challenge: true, listenText: "Nam is busy on Saturday. On Sunday, he visits his grandparents in the countryside.", explanation: "Bài nghe cho biết Chủ nhật Nam đến thăm ông bà ở quê." },
      { question: "Chọn từ đúng: There ___ two books on the desk.", options: ["is", "are", "am", "be"], answer: 1, topic: "There is / There are", skill: "doc", challenge: true, explanation: "Danh từ số nhiều two books đi với There are." },
      { question: "Nghe đoạn hội thoại và chọn món Anna gọi.", options: ["A sandwich", "A bowl of soup", "A salad", "A glass of milk"], answer: 2, topic: "Nghe hiểu ở quán ăn", skill: "nghe", listenText: "Waiter: What would you like, Anna? Anna: A salad, please. And a glass of water.", explanation: "Anna gọi món salad." },
      { question: "Nói câu tiếng Anh có nghĩa: “Mình thường đọc sách sau giờ học.”", options: ["I usually read books after school.", "I am read books after school.", "I reads usually book after school.", "I read usually after school books."], answer: 0, topic: "Nói về thói quen", skill: "noi", challenge: true, speaking: "I usually read books after school.", explanation: "Dùng hiện tại đơn để nói về thói quen; trạng từ usually đứng trước động từ thường." }
    ]
  },
  7: {
    toan: [
      { question: "Tính $(-8)+13$.", options: ["$-21$", "$-5$", "$5$", "$21$"], answer: 2, topic: "Số nguyên", explanation: "$13-8=5$ và kết quả mang dấu dương." },
      { question: "Hai đại lượng $x$ và $y$ tỉ lệ thuận. Khi $x=2$ thì $y=6$. Khi $x=5$ thì $y$ bằng bao nhiêu?", options: ["$9$", "$12$", "$15$", "$30$"], answer: 2, topic: "Tỉ lệ thuận", explanation: "Hệ số tỉ lệ là $6:2=3$, nên $y=3\\times5=15$." },
      { question: "Một tam giác có ba góc tỉ lệ với $2:3:4$. Góc lớn nhất bằng bao nhiêu?", options: ["$40^\\circ$", "$60^\\circ$", "$80^\\circ$", "$100^\\circ$"], answer: 2, topic: "Góc và tam giác", challenge: true, explanation: "Mỗi phần là $180^\\circ:(2+3+4)=20^\\circ$. Góc lớn nhất bằng $4\\times20^\\circ=80^\\circ$." },
      { question: "Tìm $x$ biết $\\frac{x}{3}=\\frac{8}{12}$.", options: ["$x=1$", "$x=2$", "$x=3$", "$x=4$"], answer: 1, topic: "Đại lượng tỉ lệ", explanation: "$\\frac{8}{12}=\\frac{2}{3}$ nên $\\frac{x}{3}=\\frac{2}{3}$ và $x=2$." },
      { question: "Ba đội trồng được tổng cộng $84$ cây. Số cây ba đội trồng tỉ lệ $2:3:7$. Đội trồng nhiều nhất trồng bao nhiêu cây?", options: ["$14$", "$21$", "$42$", "$49$"], answer: 3, topic: "Tỉ lệ thức", challenge: true, explanation: "Tổng số phần là $12$, mỗi phần ứng với $84:12=7$ cây. Đội nhiều nhất trồng $7\\times7=49$ cây." }
    ],
    khtn: [
      { question: "Một người đi được $120\\,\\text{m}$ trong $20\\,\\text{s}$. Tốc độ là bao nhiêu?", options: ["$6\\,\\text{m/s}$", "$20\\,\\text{m/s}$", "$100\\,\\text{m/s}$", "$2\\,400\\,\\text{m/s}$"], answer: 0, topic: "Tốc độ", listenText: "Một người đi được một trăm hai mươi mét trong hai mươi giây. Tốc độ của người đó là bao nhiêu?", explanation: "$v=\\frac{s}{t}=\\frac{120}{20}=6\\,\\text{m/s}$." },
      { question: "Âm thanh truyền được qua những môi trường nào?", options: ["Chỉ chất rắn", "Chỉ chất lỏng", "Chất rắn, lỏng và khí", "Chân không"], answer: 2, topic: "Âm thanh", listenText: "Âm thanh truyền được qua những môi trường nào?", explanation: "Âm truyền qua chất rắn, chất lỏng và chất khí; không truyền được trong chân không." },
      { question: "Một xe đi $150\\,\\text{m}$ trong $10\\,\\text{s}$, sau đó đi tiếp $100\\,\\text{m}$ trong $10\\,\\text{s}$. Tốc độ trung bình là bao nhiêu?", options: ["$10\\,\\text{m/s}$", "$12{,}5\\,\\text{m/s}$", "$15\\,\\text{m/s}$", "$25\\,\\text{m/s}$"], answer: 1, topic: "Tốc độ trung bình", challenge: true, listenText: "Một xe đi một trăm năm mươi mét trong mười giây, sau đó đi tiếp một trăm mét trong mười giây. Tốc độ trung bình là bao nhiêu?", explanation: "$v_{tb}=\\frac{150+100}{10+10}=12{,}5\\,\\text{m/s}$." },
      { question: "Nhiệt độ $25^\\circ\\text{C}$ tương đương bao nhiêu độ Fahrenheit? Dùng công thức $F=\\frac{9}{5}C+32$.", options: ["$45^\\circ\\text{F}$", "$57^\\circ\\text{F}$", "$77^\\circ\\text{F}$", "$100^\\circ\\text{F}$"], answer: 2, topic: "Nhiệt độ", listenText: "Nhiệt độ hai mươi lăm độ C tương đương bao nhiêu độ F? Dùng công thức F bằng chín phần năm nhân C cộng ba mươi hai.", explanation: "$F=\\frac{9}{5}\\times25+32=45+32=77^\\circ\\text{F}$." },
      { question: "Một vật chuyển động đều với tốc độ $4\\,\\text{m/s}$ trong $30\\,\\text{s}$. Quãng đường vật đi được là bao nhiêu?", options: ["$7{,}5\\,\\text{m}$", "$26\\,\\text{m}$", "$120\\,\\text{m}$", "$240\\,\\text{m}$"], answer: 2, topic: "Quãng đường và tốc độ", challenge: true, listenText: "Một vật chuyển động đều với tốc độ bốn mét trên giây trong ba mươi giây. Quãng đường vật đi được là bao nhiêu?", explanation: "$s=v\\times t=4\\times30=120\\,\\text{m}$." }
    ],
    anh: [
      { question: "Chọn dạng đúng: We ___ a movie last night.", options: ["watch", "watches", "watched", "are watching"], answer: 2, topic: "Quá khứ đơn", skill: "doc", explanation: "Last night chỉ thời điểm quá khứ nên dùng quá khứ đơn: watched." },
      { question: "A train is usually ___ than a bicycle.", options: ["fast", "faster", "fastest", "more fast"], answer: 1, topic: "So sánh hơn", skill: "doc", explanation: "So sánh hơn của tính từ ngắn fast là faster." },
      { question: "Nghe thông báo và chọn giờ chuyến tàu đến.", options: ["8:15", "8:30", "8:45", "9:00"], answer: 2, topic: "Nghe số và giờ", skill: "nghe", challenge: true, listenText: "Attention, please. The train from Da Nang will arrive at platform two at a quarter to nine.", explanation: "A quarter to nine là 8 giờ 45 phút." },
      { question: "Chọn từ đúng: My sister ___ the piano every evening.", options: ["practice", "practises", "practising", "practised"], answer: 1, topic: "Hiện tại đơn", skill: "doc", challenge: true, explanation: "My sister là ngôi thứ ba số ít, nên động từ thêm -s: practises." },
      { question: "Nghe và chọn nơi hai người sẽ gặp nhau.", options: ["At the bus stop", "At the library", "At the sports centre", "At the station"], answer: 1, topic: "Nghe chỉ địa điểm", skill: "nghe", listenText: "Let's meet at the library after school. I will wait for you near the front door.", explanation: "Hai người hẹn gặp tại thư viện." },
      { question: "Nói câu tiếng Anh có nghĩa: “Hôm qua chúng tôi thăm bảo tàng.”", options: ["We visit the museum yesterday.", "We visited the museum yesterday.", "We are visit the museum yesterday.", "We visits the museum yesterday."], answer: 1, topic: "Nói về hoạt động quá khứ", skill: "noi", challenge: true, speaking: "We visited the museum yesterday.", explanation: "Yesterday chỉ quá khứ nên dùng visited." }
    ]
  },
  8: {
    toan: [
      { question: "Giải phương trình $2x+3=11$.", options: ["$x=3$", "$x=4$", "$x=7$", "$x=14$"], answer: 1, topic: "Phương trình bậc nhất", explanation: "$2x=11-3=8$, suy ra $x=4$." },
      { question: "Tam giác vuông có hai cạnh góc vuông dài $6\\,\\text{cm}$ và $8\\,\\text{cm}$. Cạnh huyền dài bao nhiêu?", options: ["$10\\,\\text{cm}$", "$12\\,\\text{cm}$", "$14\\,\\text{cm}$", "$48\\,\\text{cm}$"], answer: 0, topic: "Định lý Pythagore", listenText: "Tam giác vuông có hai cạnh góc vuông dài sáu xăng-ti-mét và tám xăng-ti-mét. Cạnh huyền dài bao nhiêu?", explanation: "Theo định lý Pythagore, cạnh huyền bằng $\\sqrt{6^2+8^2}=10\\,\\text{cm}$." },
      { question: "Phân tích đa thức $x^2-9$ thành nhân tử.", options: ["$(x-9)(x+1)$", "$(x-3)^2$", "$(x-3)(x+3)$", "$(x-9)^2$"], answer: 2, topic: "Hằng đẳng thức", challenge: true, explanation: "$x^2-9=x^2-3^2=(x-3)(x+3)$." },
      { question: "Rút gọn biểu thức $\\frac{x^2-4}{x-2}$ với điều kiện $x\\ne2$.", options: ["$x-2$", "$x+2$", "$x^2+2$", "$1$"], answer: 1, topic: "Phân thức đại số", explanation: "$x^2-4=(x-2)(x+2)$, rút gọn được $x+2$." },
      { question: "Tam giác vuông có cạnh huyền $13\\,\\text{cm}$ và một cạnh góc vuông $5\\,\\text{cm}$. Cạnh góc vuông còn lại dài bao nhiêu?", options: ["$8\\,\\text{cm}$", "$10\\,\\text{cm}$", "$12\\,\\text{cm}$", "$18\\,\\text{cm}$"], answer: 2, topic: "Định lý Pythagore", challenge: true, explanation: "Theo định lý Pythagore, cạnh còn lại là $\\sqrt{13^2-5^2}=\\sqrt{144}=12\\,\\text{cm}$." }
    ],
    khtn: [
      { question: "Lực $100\\,\\text{N}$ tác dụng lên diện tích $2\\,\\text{m}^2$. Áp suất bằng bao nhiêu?", options: ["$50\\,\\text{Pa}$", "$100\\,\\text{Pa}$", "$200\\,\\text{Pa}$", "$500\\,\\text{Pa}$"], answer: 0, topic: "Áp suất", listenText: "Một lực một trăm niu-tơn tác dụng lên diện tích hai mét vuông. Áp suất bằng bao nhiêu?", explanation: "$p=\\frac{F}{S}=\\frac{100}{2}=50\\,\\text{Pa}$." },
      { question: "Dung dịch có $\\text{pH}<7$ thường có tính chất nào?", options: ["Có tính axit", "Có tính bazơ", "Trung tính", "Không thể xác định"], answer: 0, topic: "Axit và bazơ", listenText: "Dung dịch có pH nhỏ hơn bảy thường có tính chất nào?", explanation: "Dung dịch có pH nhỏ hơn 7 thường có tính axit." },
      { question: "Một vật có khối lượng $540\\,\\text{g}$, thể tích $200\\,\\text{cm}^3$. Khối lượng riêng là bao nhiêu?", options: ["$0{,}27\\,\\text{g/cm}^3$", "$2{,}7\\,\\text{g/cm}^3$", "$27\\,\\text{g/cm}^3$", "$108\\,000\\,\\text{g/cm}^3$"], answer: 1, topic: "Khối lượng riêng", challenge: true, listenText: "Một vật có khối lượng năm trăm bốn mươi gam, thể tích hai trăm xăng-ti-mét khối. Khối lượng riêng là bao nhiêu?", explanation: "$D=\\frac{m}{V}=\\frac{540}{200}=2{,}7\\,\\text{g/cm}^3$." },
      { question: "Dòng điện có cường độ $2\\,\\text{A}$ chạy qua điện trở $5\\,\\Omega$. Hiệu điện thế là bao nhiêu?", options: ["$2{,}5\\,\\text{V}$", "$7\\,\\text{V}$", "$10\\,\\text{V}$", "$25\\,\\text{V}$"], answer: 2, topic: "Định luật Ohm", listenText: "Dòng điện có cường độ hai ampe chạy qua điện trở năm ôm. Hiệu điện thế là bao nhiêu?", explanation: "Theo định luật Ohm, $U=IR=2\\times5=10\\,\\text{V}$." },
      { question: "Một lực $60\\,\\text{N}$ tác dụng lên diện tích $0{,}2\\,\\text{m}^2$. Áp suất bằng bao nhiêu?", options: ["$12\\,\\text{Pa}$", "$120\\,\\text{Pa}$", "$300\\,\\text{Pa}$", "$3\\,000\\,\\text{Pa}$"], answer: 2, topic: "Áp suất", challenge: true, listenText: "Một lực sáu mươi niu-tơn tác dụng lên diện tích không phẩy hai mét vuông. Áp suất bằng bao nhiêu?", explanation: "$p=\\frac{F}{S}=\\frac{60}{0{,}2}=300\\,\\text{Pa}$." }
    ],
    anh: [
      { question: "Chọn dạng đúng: I ___ my homework already.", options: ["finish", "finished", "have finished", "am finishing"], answer: 2, topic: "Hiện tại hoàn thành", skill: "doc", explanation: "Already thường đi với hiện tại hoàn thành: have/has + quá khứ phân từ." },
      { question: "This book is ___ than that one.", options: ["interesting", "interestinger", "more interesting", "most interesting"], answer: 2, topic: "So sánh hơn", skill: "doc", explanation: "Interesting là tính từ dài, dùng more + tính từ trong so sánh hơn." },
      { question: "Nghe và chọn lý do Mai không đến buổi dã ngoại.", options: ["She is ill.", "She has to help her mother.", "She missed the bus.", "She has an exam."], answer: 1, topic: "Nghe hiểu", skill: "nghe", challenge: true, listenText: "Mai wanted to join the class picnic, but she has to help her mother prepare for a family celebration.", explanation: "Mai không đi được vì phải giúp mẹ chuẩn bị cho buổi sum họp gia đình." },
      { question: "Chọn dạng đúng: They ___ in this town since 2020.", options: ["live", "lived", "have lived", "are living"], answer: 2, topic: "Hiện tại hoàn thành", skill: "doc", challenge: true, explanation: "Since 2020 diễn tả hành động bắt đầu trong quá khứ và còn tiếp diễn, dùng hiện tại hoàn thành." },
      { question: "Nghe và chọn thời gian câu lạc bộ bắt đầu.", options: ["At 3:00", "At 3:15", "At 3:30", "At 4:00"], answer: 2, topic: "Nghe số và giờ", skill: "nghe", listenText: "The English club meets every Friday. Please come to room twelve at half past three.", explanation: "Half past three là 3 giờ 30." },
      { question: "Nói câu tiếng Anh có nghĩa: “Nếu trời mưa, chúng tôi sẽ ở nhà.”", options: ["If it rains, we will stay at home.", "If it will rain, we stay at home.", "If it rained, we will stay home.", "If it rains, we stayed at home."], answer: 0, topic: "Nói câu điều kiện", skill: "noi", challenge: true, speaking: "If it rains, we will stay at home.", explanation: "Câu điều kiện loại 1 dùng hiện tại đơn sau if và will ở mệnh đề chính." }
    ]
  },
  9: {
    toan: [
      { question: "Phương trình $x^2-5x+6=0$ có hai nghiệm là gì?", options: ["$x=1$ và $x=6$", "$x=2$ và $x=3$", "$x=-2$ và $x=-3$", "$x=0$ và $x=5$"], answer: 1, topic: "Phương trình bậc hai", explanation: "$x^2-5x+6=(x-2)(x-3)$, nên $x=2$ hoặc $x=3$." },
      { question: "Đường tròn bán kính $3\\,\\text{cm}$ có diện tích bằng bao nhiêu?", options: ["$6\\pi\\,\\text{cm}^2$", "$9\\pi\\,\\text{cm}^2$", "$12\\pi\\,\\text{cm}^2$", "$18\\pi\\,\\text{cm}^2$"], answer: 1, topic: "Đường tròn", listenText: "Đường tròn bán kính ba xăng-ti-mét có diện tích bằng bao nhiêu?", explanation: "$S=\\pi r^2=\\pi\\times3^2=9\\pi\\,\\text{cm}^2$." },
      { question: "Đường thẳng $y=2x+1$ cắt parabol $y=x^2$ tại hai điểm có hoành độ nào?", options: ["$x=1,2$", "$x=1+\\sqrt{2},\\ 1-\\sqrt{2}$", "$x=2,-1$", "$x=0,2$"], answer: 1, topic: "Giao điểm đường thẳng và parabol", challenge: true, explanation: "Giải $x^2=2x+1$, ta được $x=1\\pm\\sqrt{2}$." },
      { question: "Đồ thị hàm số $y=-2x+5$ cắt trục tung tại điểm nào?", options: ["$(0,-2)$", "$(0,5)$", "$(5,0)$", "$(-2,0)$"], answer: 1, topic: "Hàm số bậc nhất", explanation: "Cho $x=0$ thì $y=5$, nên đồ thị cắt trục tung tại $(0,5)$." },
      { question: "Tìm $m$ để phương trình $x^2-4x+m=0$ có nghiệm kép.", options: ["$m=2$", "$m=4$", "$m=8$", "$m=16$"], answer: 1, topic: "Phương trình bậc hai", challenge: true, explanation: "Phương trình có nghiệm kép khi $\\Delta=16-4m=0$, suy ra $m=4$." }
    ],
    khtn: [
      { question: "Đặt hiệu điện thế $12\\,\\text{V}$ vào điện trở $4\\,\\Omega$. Cường độ dòng điện bằng bao nhiêu?", options: ["$0{,}3\\,\\text{A}$", "$3\\,\\text{A}$", "$8\\,\\text{A}$", "$48\\,\\text{A}$"], answer: 1, topic: "Định luật Ohm", listenText: "Đặt hiệu điện thế mười hai vôn vào điện trở bốn ôm. Cường độ dòng điện bằng bao nhiêu?", explanation: "Theo định luật Ohm, $I=\\frac{U}{R}=\\frac{12}{4}=3\\,\\text{A}$." },
      { question: "Trong phép lai $Aa\\times Aa$, xác suất đời con có kiểu gen $aa$ là bao nhiêu?", options: ["$0\\%$", "$25\\%$", "$50\\%$", "$75\\%$"], answer: 1, topic: "Di truyền Mendel", listenText: "Trong phép lai A lớn a nhân A lớn a, xác suất đời con có kiểu gen a a là bao nhiêu phần trăm?", explanation: "Tỉ lệ kiểu gen là $1AA:2Aa:1aa$, nên $aa$ chiếm $\\frac{1}{4}=25\\%$." },
      { question: "Hai điện trở $R_1=6\\,\\Omega$ và $R_2=3\\,\\Omega$ mắc song song. Điện trở tương đương bằng bao nhiêu?", options: ["$2\\,\\Omega$", "$3\\,\\Omega$", "$9\\,\\Omega$", "$18\\,\\Omega$"], answer: 0, topic: "Mạch điện song song", challenge: true, listenText: "Hai điện trở sáu ôm và ba ôm mắc song song. Điện trở tương đương bằng bao nhiêu?", explanation: "$\\frac{1}{R_{tđ}}=\\frac{1}{6}+\\frac{1}{3}=\\frac{1}{2}$, do đó $R_{tđ}=2\\,\\Omega$." },
      { question: "Một vật có khối lượng $2\\,\\text{kg}$ được nâng lên cao $3\\,\\text{m}$. Lấy $g=10\\,\\text{N/kg}$. Thế năng trọng trường của vật là bao nhiêu?", options: ["$6\\,\\text{J}$", "$15\\,\\text{J}$", "$60\\,\\text{J}$", "$600\\,\\text{J}$"], answer: 2, topic: "Cơ năng", listenText: "Một vật khối lượng hai ki-lô-gam được nâng cao ba mét. Lấy gia tốc trọng trường mười niu-tơn trên ki-lô-gam. Thế năng bằng bao nhiêu?", explanation: "$W_t=mgh=2\\times10\\times3=60\\,\\text{J}$." },
      { question: "Vật sáng đặt cách thấu kính hội tụ $30\\,\\text{cm}$, ảnh thật hiện cách kính $60\\,\\text{cm}$. Tiêu cự thấu kính bằng bao nhiêu?", options: ["$10\\,\\text{cm}$", "$15\\,\\text{cm}$", "$20\\,\\text{cm}$", "$30\\,\\text{cm}$"], answer: 2, topic: "Thấu kính hội tụ", challenge: true, listenText: "Vật đặt cách thấu kính hội tụ ba mươi xăng-ti-mét, ảnh thật cách kính sáu mươi xăng-ti-mét. Tiêu cự kính bằng bao nhiêu?", explanation: "$\\frac{1}{f}=\\frac{1}{30} + \\frac{1}{60}=\\frac{1}{20}$, nên $f=20\\,\\text{cm}$." }
    ],
    anh: [
      { question: "If it rains tomorrow, we ___ at home.", options: ["stay", "stayed", "will stay", "would stay"], answer: 2, topic: "Câu điều kiện loại 1", skill: "doc", explanation: "Câu điều kiện loại 1: If + hiện tại đơn, mệnh đề chính dùng will + động từ nguyên mẫu." },
      { question: "Chọn câu bị động đúng: “They built this bridge in 2020.”", options: ["This bridge is built in 2020.", "This bridge was built in 2020.", "This bridge built in 2020.", "This bridge has build in 2020."], answer: 1, topic: "Câu bị động", skill: "doc", challenge: true, explanation: "Quá khứ đơn ở thể bị động dùng was/were + quá khứ phân từ." },
      { question: "Nghe và chọn người nói sẽ làm gì vào cuối tuần.", options: ["Visit a museum.", "Study for a test.", "Go camping.", "Stay with a cousin."], answer: 2, topic: "Nghe hiểu", skill: "nghe", challenge: true, listenText: "I have finished my project, so this weekend I am going camping with my classmates near the lake.", explanation: "Người nói sẽ đi cắm trại với các bạn cùng lớp." },
      { question: "Chọn dạng đúng: The new sports centre ___ next year.", options: ["will open", "will be opened", "opened", "has opening"], answer: 1, topic: "Câu bị động", skill: "doc", explanation: "Câu bị động tương lai đơn có dạng will be + quá khứ phân từ." },
      { question: "Nghe và chọn tài liệu cần mang đến buổi họp.", options: ["A map", "A permission form", "A notebook", "A photograph"], answer: 1, topic: "Nghe hiểu thông báo", skill: "nghe", listenText: "Before the school trip meeting, please bring your signed permission form. We will discuss the schedule and safety rules.", explanation: "Học sinh cần mang theo phiếu xin phép đã ký." },
      { question: "Nói câu tiếng Anh có nghĩa: “Nếu tôi có nhiều thời gian hơn, tôi sẽ học thêm một ngôn ngữ.”", options: ["If I have more time, I will learn another language.", "If I had more time, I would learn another language.", "If I would have time, I learn a language.", "If I had more time, I will learn another language."], answer: 1, topic: "Nói câu điều kiện loại 2", skill: "noi", challenge: true, speaking: "If I had more time, I would learn another language.", explanation: "Câu điều kiện loại 2 dùng quá khứ đơn sau if và would + động từ nguyên mẫu ở mệnh đề chính." }
    ]
  }
};

function taoCauTracNghiem(question, correct, distractors, topic, explanation, extra = {}) {
  const options = [...new Set([correct, ...distractors])].slice(0, 4);
  const fallbacks = ["Không có đáp án nào ở trên.", "Không đủ dữ kiện để kết luận.", "Tất cả đáp án trên."];
  while (options.length < 4) options.push(fallbacks[options.length - 1]);
  for (let index = options.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [options[index], options[swap]] = [options[swap], options[index]];
  }
  return { question, options, answer: options.indexOf(correct), topic, explanation, ...extra };
}

function moRongToan(khoi) {
  const questions = [];
  for (let index = 0; index < 35; index += 1) {
    const type = index % 3;
    let question;
    let answer;
    let wrong;
    let topic;
    let explanation;
    if (khoi === "6" && type === 0) {
      const denominator = 5 + index;
      const numerator = 1 + (index % 3);
      const other = 1 + ((index + 1) % 3);
      const total = numerator + other;
      question = `Tính $\\frac{${numerator}}{${denominator}}+\\frac{${other}}{${denominator}}$.`;
      answer = `$\\frac{${total}}{${denominator}}$`;
      wrong = [`$\\frac{${total + 1}}{${denominator}}$`, `$\\frac{${total}}{${denominator + 1}}$`, `$\\frac{${numerator * other}}{${denominator}}$`];
      topic = "Cộng phân số";
      explanation = `Hai phân số cùng mẫu nên cộng tử số: $\\frac{${numerator}+${other}}{${denominator}}=\\frac{${total}}{${denominator}}$.`;
    } else if (khoi === "6" && type === 1) {
      const a = 10 + index;
      const b = 2 + (index % 5);
      const c = 3 + (index % 4);
      const result = a - b * c;
      question = `Tính $${a}-${b}\\times${c}$.`;
      answer = `$${result}$`;
      wrong = [`$${a - b + c}$`, `$${(a - b) * c}$`, `$${result + 2}$`];
      topic = "Thứ tự phép tính";
      explanation = `Thực hiện phép nhân trước: $${a}-${b * c}=${result}$.`;
    } else if (khoi === "6") {
      const length = 7 + index;
      const width = 2 + (index % 6);
      const perimeter = 2 * (length + width);
      question = `Hình chữ nhật dài $${length}\\,\\text{cm}$, rộng $${width}\\,\\text{cm}$. Chu vi bằng bao nhiêu?`;
      answer = `$${perimeter}\\,\\text{cm}$`;
      wrong = [`$${length + width}\\,\\text{cm}$`, `$${length * width}\\,\\text{cm}$`, `$${2 * length + width}\\,\\text{cm}$`];
      topic = "Chu vi hình chữ nhật";
      explanation = `$P=2(a+b)=2(${length}+${width})=${perimeter}\\,\\text{cm}$.`;
    } else if (khoi === "7" && type === 0) {
      const a = 9 + index;
      const b = 3 + (index % 7);
      const result = a - b;
      question = `Tính $(-${b})+${a}$.`;
      answer = `$${result}$`;
      wrong = [`$-${result}$`, `$${a + b}$`, `$${result + 1}$`];
      topic = "Cộng số nguyên";
      explanation = `Hai số khác dấu: $${a}-${b}=${result}$, lấy dấu của số có giá trị tuyệt đối lớn hơn.`;
    } else if (khoi === "7" && type === 1) {
      const factor = 2 + (index % 8);
      const x1 = 2 + (index % 5);
      const x2 = x1 + 3;
      const result = factor * x2;
      question = `Hai đại lượng tỉ lệ thuận, $y=${factor}x$. Tính $y$ khi $x=${x2}$.`;
      answer = `$${result}$`;
      wrong = [`$${result + factor}$`, `$${result + 1}$`, `$${result - factor}$`];
      topic = "Tỉ lệ thuận";
      explanation = `Thay $x=${x2}$ vào $y=${factor}x$: $y=${factor}\\times${x2}=${result}$.`;
    } else if (khoi === "7") {
      const ratios = [
        [1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7],
        [7, 8, 9], [9, 10, 11], [10, 11, 15], [14, 16, 15], [20, 25, 15], [30, 40, 20]
      ][Math.floor(index / 3) % 11];
      const parts = ratios;
      const largest = Math.max(...parts);
      const total = parts.reduce((sum, part) => sum + part, 0);
      const degree = 180 * largest / total;
      question = `Ba góc tam giác tỉ lệ $${parts[0]}:${parts[1]}:${parts[2]}$. Góc lớn nhất bằng bao nhiêu?`;
      answer = `$${degree}^\\circ$`;
      wrong = [`$${degree - 10}^\\circ$`, `$${degree + 10}^\\circ$`, `$${degree + 20}^\\circ$`];
      topic = "Góc trong tam giác";
      explanation = `Mỗi phần là $180^\\circ:${total}=${180 / total}^\\circ$; góc lớn nhất bằng $${largest}\\times${180 / total}=${degree}^\\circ$.`;
    } else if (khoi === "8" && type === 0) {
      const coefficient = 2 + (index % 6);
      const result = 2 + (index % 9);
      const constant = 3 + (index % 7);
      const right = coefficient * result + constant;
      question = `Giải phương trình $${coefficient}x+${constant}=${right}$.`;
      answer = `$x=${result}$`;
      wrong = [`$x=${result + 1}$`, `$x=${right - constant}$`, `$x=${result - 1}$`];
      topic = "Phương trình bậc nhất";
      explanation = `$${coefficient}x=${right}-${constant}=${coefficient * result}$, suy ra $x=${result}$.`;
    } else if (khoi === "8" && type === 1) {
      const scale = 1 + (index % 8);
      const a = 3 * scale;
      const b = 4 * scale;
      const result = 5 * scale;
      question = `Tam giác vuông có hai cạnh góc vuông $${a}\\,\\text{cm}$ và $${b}\\,\\text{cm}$. Tính cạnh huyền.`;
      answer = `$${result}\\,\\text{cm}$`;
      wrong = [`$${a + b}\\,\\text{cm}$`, `$${result + scale}\\,\\text{cm}$`, `$${a + scale}\\,\\text{cm}$`];
      topic = "Định lý Pythagore";
      explanation = `Theo định lý Pythagore, $c=\\sqrt{${a}^2+${b}^2}=${result}\\,\\text{cm}$.`;
    } else if (khoi === "8") {
      const value = 4 + index;
      question = `Phân tích $x^2-${value * value}$ thành nhân tử.`;
      answer = `$(x-${value})(x+${value})$`;
      wrong = [`$(x-${value})^2$`, `$(x-${value * value})(x+1)$`, `$x(x-${value * value})$`];
      topic = "Hiệu hai bình phương";
      explanation = `$x^2-${value * value}=x^2-${value}^2=(x-${value})(x+${value})$.`;
    } else if (khoi === "9" && type === 0) {
      const root1 = 1 + index;
      const root2 = root1 + 2 + (index % 4);
      question = `Tìm nghiệm của phương trình $x^2-${root1 + root2}x+${root1 * root2}=0$.`;
      answer = `$x=${root1}$ hoặc $x=${root2}$`;
      wrong = [`$x=-${root1}$ hoặc $x=-${root2}$`, `$x=-${root1}$ hoặc $x=${root2}$`, `$x=${root1 + root2}$`];
      topic = "Phương trình bậc hai";
      explanation = `$x^2-${root1 + root2}x+${root1 * root2}=(x-${root1})(x-${root2})$, do đó hai nghiệm là $${root1}$ và $${root2}$.`;
    } else if (khoi === "9" && type === 1) {
      const a = 2 + (index % 6);
      const x = 1 + (index % 8);
      const b = 3 + (index % 7);
      const result = a * x + b;
      question = `Cho hàm số $y=${a}x+${b}$. Tính $y$ khi $x=${x}$.`;
      answer = `$${result}$`;
      wrong = [`$${result - 1}$`, `$${result - 2}$`, `$${result - 3}$`];
      topic = "Hàm số bậc nhất";
      explanation = `Thay $x=${x}$: $y=${a}\\times${x}+${b}=${result}$.`;
    } else {
      const radius = 2 + index;
      question = `Hình tròn bán kính $${radius}\\,\\text{cm}$ có diện tích bao nhiêu?`;
      answer = `$${radius * radius}\\pi\\,\\text{cm}^2$`;
      wrong = [`$${2 * radius}\\pi\\,\\text{cm}^2$`, `$${radius * radius}\\,\\text{cm}^2$`, `$${radius * radius + radius}\\pi\\,\\text{cm}^2$`];
      topic = "Diện tích hình tròn";
      explanation = `$S=\\pi r^2=\\pi\\times${radius}^2=${radius * radius}\\pi\\,\\text{cm}^2$.`;
    }
    questions.push(taoCauTracNghiem(question, answer, wrong, topic, explanation, {
      challenge: index % 5 === 4
    }));
  }
  return questions;
}

function moRongHSGToan(khoi) {
  const questionsByGrade = {
    "6": [
      {
        topic: "Số học và chia dư",
        question: "Một số tự nhiên khi chia cho 5 dư 2, chia cho 7 dư 4.",
        parts: [
          { label: "a", prompt: "Tìm số tự nhiên dương nhỏ nhất thỏa mãn.", answer: "32", explanation: "Các số dư 2 khi chia cho 5 là 2, 7, 12, 17, 22, 27, 32; trong đó 32 chia 7 dư 4." },
          { label: "b", prompt: "Có bao nhiêu số dương không vượt quá 1000 thỏa mãn điều kiện trên?", answer: "28", explanation: "Các nghiệm là 32+35k với k=0,1,...,27; vậy có 28 nghiệm không vượt quá 1000." }
        ]
      },
      {
        topic: "Phân số",
        question: "Cho hai phân số 3/4 và 1/6.",
        parts: [
          { label: "a", prompt: "Tính hiệu 3/4 − 1/6.", answer: "7/12", explanation: "Quy đồng: 3/4−1/6=9/12−2/12=7/12." },
          { label: "b", prompt: "Tính thương của hiệu vừa tìm được và 7/8.", answer: "2/3", explanation: "(7/12):(7/8)=7/12×8/7=2/3." }
        ]
      },
      {
        topic: "Hình học",
        question: "Một mảnh vườn hình chữ nhật có chu vi 70 m. Chiều dài hơn chiều rộng 9 m.",
        parts: [
          { label: "a", prompt: "Tính chiều dài và chiều rộng (ghi theo thứ tự: dài; rộng).", answer: "22;13", explanation: "Nửa chu vi là 35 m. Chiều dài=(35+9):2=22 m; chiều rộng=(35−9):2=13 m." },
          { label: "b", prompt: "Tính diện tích mảnh vườn.", answer: "286", explanation: "Diện tích bằng 22×13=286 m²." }
        ]
      },
      {
        topic: "Bội chung và đếm",
        question: "Xét các số tự nhiên từ 1 đến 100.",
        parts: [
          { label: "a", prompt: "Có bao nhiêu số chia hết cho 3?", answer: "33", explanation: "Có ⌊100:3⌋=33 số." },
          { label: "b", prompt: "Có bao nhiêu số chia hết cho 3 hoặc 5?", answer: "47", explanation: "Theo nguyên tắc cộng trừ: 33+20−6=47; có 6 số chia hết cho cả 3 và 5." }
        ]
      },
      {
        topic: "Tỉ số và suy luận",
        question: "Ban đầu số học sinh nam bằng 3/5 số học sinh nữ. Khi có thêm 4 học sinh nam và 2 học sinh nữ rời nhóm, số nam và nữ bằng nhau.",
        parts: [
          { label: "a", prompt: "Số nam và nữ ban đầu ứng với tỉ lệ bao nhiêu phần?", answer: "3;5", explanation: "Tỉ lệ nam:nữ là 3:5." },
          { label: "b", prompt: "Tìm số học sinh nam và nữ ban đầu (ghi theo thứ tự: nam; nữ).", answer: "9;15", explanation: "Gọi số nam, nữ lần lượt là 3k và 5k. Điều kiện 3k+4=5k−2 suy ra k=3; vậy có 9 nam và 15 nữ." }
        ]
      },
      {
        topic: "Chữ số và tính chia hết",
        question: "Xét các số có dạng 5a3b, trong đó a và b là chữ số.",
        parts: [
          { label: "a", prompt: "Có bao nhiêu số dạng trên chia hết cho cả 3 và 5?", answer: "6", explanation: "b bằng 0 hoặc 5. Dùng dấu hiệu chia hết cho 3 cho ba giá trị a ứng với mỗi trường hợp, có tất cả 6 số." },
          { label: "b", prompt: "Tìm số lớn nhất dạng trên chia hết cho cả 3 và 5.", answer: "5835", explanation: "Với b=5, tổng chữ số 13+a chia hết cho 3 khi a=2,5,8; số lớn nhất là 5835." }
        ]
      },
      {
        topic: "Dãy số và quy luật",
        question: "Tính tổng các số lẻ liên tiếp bắt đầu từ 1.",
        parts: [
          { label: "a", prompt: "Có bao nhiêu số hạng để tổng bằng 225?", answer: "15", explanation: "Tổng n số lẻ đầu tiên bằng n². Vì n²=225 nên n=15." },
          { label: "b", prompt: "Số hạng cuối cùng trong tổng đó là bao nhiêu?", answer: "29", explanation: "Số lẻ thứ 15 là 2×15−1=29." }
        ]
      },
      {
        topic: "Số học và chia dư",
        question: "Một số tự nhiên khi chia cho 4 dư 1, chia cho 6 dư 3 và chia hết cho 5.",
        parts: [
          { label: "a", prompt: "Tìm số dương nhỏ nhất thỏa mãn.", answer: "45", explanation: "Các số chia hết cho 5 và dư 1 khi chia 4 có dạng 5, 25, 45,...; 45 chia 6 dư 3." },
          { label: "b", prompt: "Có bao nhiêu số dương không vượt quá 1000 thỏa mãn?", answer: "16", explanation: "Các nghiệm là 45+60k. Với 45+60k≤1000 thì k=0,...,15, có 16 nghiệm." }
        ]
      },
      {
        topic: "Bài toán chữ số",
        question: "Một số có hai chữ số. Tổng hai chữ số bằng 9; đổi vị trí hai chữ số thì số mới nhỏ hơn số ban đầu 27 đơn vị.",
        parts: [
          { label: "a", prompt: "Chữ số hàng chục lớn hơn chữ số hàng đơn vị bao nhiêu?", answer: "3", explanation: "Hiệu hai số khi đổi chỗ là 9 lần hiệu hai chữ số; 27:9=3." },
          { label: "b", prompt: "Tìm số ban đầu.", answer: "63", explanation: "Hai chữ số có tổng 9, hiệu 3 nên lần lượt là 6 và 3; số ban đầu là 63." }
        ]
      },
      {
        topic: "Hình học cực trị",
        question: "Một hình chữ nhật có chu vi 40 cm và các cạnh có độ dài nguyên dương.",
        parts: [
          { label: "a", prompt: "Tìm diện tích lớn nhất có thể có.", answer: "100", explanation: "Hai cạnh có tổng 20. Với tổng cố định, tích lớn nhất khi hai số bằng nhau: 10×10=100." },
          { label: "b", prompt: "Tìm hai cạnh để đạt diện tích lớn nhất.", answer: "10;10", explanation: "Hình chữ nhật đạt diện tích lớn nhất là hình vuông cạnh 10 cm." }
        ]
      },
      {
        topic: "Số học và đồng dư",
        question: "Một số có ba chữ số khi chia cho 9 dư 2 và chia cho 5 dư 3.",
        parts: [
          { label: "a", prompt: "Tìm số nhỏ nhất có ba chữ số thỏa mãn.", answer: "128", explanation: "Các số dư 2 khi chia 9 có dạng 9k+2. Điều kiện chia 5 dư 3 cho k≡4 (mod 5), nên số có dạng 38+45t; số nhỏ nhất có ba chữ số là 128." },
          { label: "b", prompt: "Tìm số lớn nhất có ba chữ số thỏa mãn.", answer: "983", explanation: "Các nghiệm là 128+45t. Với t=19 được 983; t=20 được 1028 nên vượt quá ba chữ số." }
        ]
      },
      {
        topic: "Dãy số và suy luận",
        question: "Tổng của ba số chẵn liên tiếp bằng 156.",
        parts: [
          { label: "a", prompt: "Tìm số chẵn ở giữa.", answer: "52", explanation: "Ba số chẵn liên tiếp đối xứng quanh số ở giữa, nên số ở giữa bằng 156:3=52." },
          { label: "b", prompt: "Tính tích của số nhỏ nhất và số lớn nhất.", answer: "2700", explanation: "Ba số là 50, 52, 54; tích hai số ngoài là 50×54=2700." }
        ]
      }
    ],
    "7": [
      {
        topic: "Tỉ lệ thức",
        question: "Ba lớp 7A, 7B, 7C quyên góp sách theo tỉ lệ 2:3:5. Tổng số sách là 120 quyển.",
        parts: [
          { label: "a", prompt: "Tính số sách mỗi lớp quyên góp (ghi theo thứ tự 7A; 7B; 7C).", answer: "24;36;60", explanation: "Tổng số phần là 10, mỗi phần ứng với 12 quyển." },
          { label: "b", prompt: "Nếu 7A chuyển 6 quyển cho 7B, tỉ số số sách của 7A và 7B lúc này là bao nhiêu?", answer: "3/7", explanation: "Sau khi chuyển, 7A có 18 quyển và 7B có 42 quyển; tỉ số là 18/42=3/7." }
        ]
      },
      {
        topic: "Góc và tam giác",
        question: "Ba góc trong của một tam giác tỉ lệ với 2:3:4.",
        parts: [
          { label: "a", prompt: "Tính ba góc theo thứ tự tỉ lệ đã cho (đơn vị độ).", answer: "40;60;80", explanation: "Mỗi phần là 180°:(2+3+4)=20°; ba góc là 40°, 60°, 80°." },
          { label: "b", prompt: "Tính góc ngoài tại đỉnh có góc trong lớn nhất.", answer: "100", explanation: "Góc ngoài kề bù với góc 80°, nên bằng 180°−80°=100°." }
        ]
      },
      {
        topic: "Số hữu tỉ",
        question: "Cho biểu thức A = (−3/4 + 5/6) : (−1/3).",
        parts: [
          { label: "a", prompt: "Tính giá trị trong ngoặc.", answer: "1/12", explanation: "−3/4+5/6=−9/12+10/12=1/12." },
          { label: "b", prompt: "Tính A.", answer: "−1/4", explanation: "A=(1/12):(−1/3)=1/12×(−3)=−1/4." }
        ]
      },
      {
        topic: "Đại lượng tỉ lệ",
        question: "Một công việc được 8 máy giống nhau hoàn thành trong 15 giờ. Các máy làm với cùng năng suất.",
        parts: [
          { label: "a", prompt: "Tính tổng số máy-giờ cần để hoàn thành công việc.", answer: "120", explanation: "Khối lượng công việc là 8×15=120 máy-giờ." },
          { label: "b", prompt: "Nếu dùng 12 máy với năng suất không đổi, cần bao nhiêu giờ?", answer: "10", explanation: "Thời gian là 120:12=10 giờ." }
        ]
      },
      {
        topic: "Bội chung nhỏ nhất",
        question: "Ba đèn báo cùng sáng lúc 7 giờ. Sau đó chúng lần lượt chớp sáng sau mỗi 12 phút, 18 phút và 30 phút.",
        parts: [
          { label: "a", prompt: "Sau ít nhất bao nhiêu phút cả ba đèn lại cùng sáng?", answer: "180", explanation: "BCNN(12,18,30)=180 phút." },
          { label: "b", prompt: "Trong 24 giờ tiếp theo, kể từ sau 7 giờ, có bao nhiêu lần cả ba đèn cùng sáng?", answer: "8", explanation: "Chúng cùng sáng mỗi 180 phút. Trong 1440 phút có 8 chu kì, nên có 8 lần sau thời điểm ban đầu." }
        ]
      },
      {
        topic: "Ước chung và bội chung",
        question: "Hai số tự nhiên có ƯCLN bằng 6 và BCNN bằng 180.",
        parts: [
          { label: "a", prompt: "Tìm tổng nhỏ nhất có thể của hai số.", answer: "66", explanation: "Viết hai số là 6a và 6b với (a,b)=1, ab=30. Các cặp nguyên tố cùng nhau là (1,30),(2,15),(3,10),(5,6); tổng nhỏ nhất là 6(5+6)=66." },
          { label: "b", prompt: "Tìm hai số ứng với tổng nhỏ nhất (ghi theo thứ tự tăng dần).", answer: "30;36", explanation: "Cặp đạt tổng nhỏ nhất là (a,b)=(5,6), nên hai số là 30 và 36." }
        ]
      },
      {
        topic: "Tam giác vuông và diện tích",
        question: "Ba cạnh của một tam giác vuông tỉ lệ với 3:4:5. Chu vi tam giác bằng 72 cm.",
        parts: [
          { label: "a", prompt: "Tính độ dài ba cạnh theo thứ tự tăng dần.", answer: "18;24;30", explanation: "Tổng tỉ số là 12, mỗi phần bằng 72:12=6 cm." },
          { label: "b", prompt: "Tính diện tích tam giác.", answer: "216", explanation: "Hai cạnh góc vuông là 18 cm và 24 cm; diện tích bằng 18×24:2=216 cm²." }
        ]
      },
      {
        topic: "Số nguyên và bất đẳng thức",
        question: "Cho số nguyên n thỏa mãn −4<n<5.",
        parts: [
          { label: "a", prompt: "Tìm giá trị nhỏ nhất của n²−2n.", answer: "-1", explanation: "n²−2n=(n−1)²−1 đạt giá trị nhỏ nhất −1 khi n=1." },
          { label: "b", prompt: "Có bao nhiêu số nguyên n để n²−2n≤0?", answer: "3", explanation: "n(n−2)≤0 nên n=0,1,2; cả ba số đều thuộc khoảng đã cho." }
        ]
      },
      {
        topic: "Bài toán tỉ lệ",
        question: "Một đội dự định làm xong công việc trong 12 ngày với 15 người. Sau 4 ngày làm, đội được bổ sung thêm 5 người có cùng năng suất.",
        parts: [
          { label: "a", prompt: "Tính phần công việc còn lại sau 4 ngày (lấy toàn bộ công việc bằng 1).", answer: "2/3", explanation: "Sau 4 ngày hoàn thành 4/12=1/3 công việc, còn lại 2/3." },
          { label: "b", prompt: "Nếu cả 20 người cùng làm từ sau ngày thứ tư, họ cần thêm bao nhiêu ngày để hoàn thành?", answer: "6", explanation: "15 người cần 8 ngày công để làm phần còn lại. Với 20 người, thời gian là 15×8:20=6 ngày." }
        ]
      },
      {
        topic: "Biểu thức số hữu tỉ",
        question: "Cho A=(2/3−1/4):(5/6−1/3).",
        parts: [
          { label: "a", prompt: "Tính tử số của phép chia sau khi thực hiện hai phép trừ.", answer: "5/12", explanation: "2/3−1/4=8/12−3/12=5/12." },
          { label: "b", prompt: "Tính A.", answer: "5/6", explanation: "5/6−1/3=1/2, nên A=(5/12):(1/2)=5/6." }
        ]
      },
      {
        topic: "Tính chia hết",
        question: "Cho n là một số nguyên lẻ.",
        parts: [
          { label: "a", prompt: "Tính 101²−1.", answer: "10200", explanation: "101²−1=10201−1=10200." },
          { label: "b", prompt: "Tính thương (101²−1):8.", answer: "1275", explanation: "Vì 101²−1=10200 nên thương khi chia cho 8 là 1275; tổng quát, với n lẻ thì n²−1=(n−1)(n+1) chia hết cho 8." }
        ]
      },
      {
        topic: "Tỉ lệ và phần trăm",
        question: "Một món hàng được giảm giá 20%, sau đó giá mới lại tăng 20%. Giá ban đầu là 500 nghìn đồng.",
        parts: [
          { label: "a", prompt: "Tính giá sau khi giảm.", answer: "400", explanation: "500×(1−20%)=400 nghìn đồng." },
          { label: "b", prompt: "Giá cuối cùng bằng bao nhiêu phần trăm giá ban đầu?", answer: "96", explanation: "Giá cuối là 400×1,2=480 nghìn đồng, bằng 96% giá ban đầu." }
        ]
      }
    ],
    "8": [
      {
        topic: "Phương trình và bài toán",
        question: "Một cửa hàng bán vở và bút. Ba quyển vở cùng hai chiếc bút giá 54 nghìn đồng; hai quyển vở cùng ba chiếc bút giá 51 nghìn đồng.",
        parts: [
          { label: "a", prompt: "Gọi giá một quyển vở là x, một chiếc bút là y. Lập hệ phương trình.", answer: "3x+2y=54;2x+3y=51", explanation: "Từ hai lần mua lần lượt lập được 3x+2y=54 và 2x+3y=51." },
          { label: "b", prompt: "Tìm giá một quyển vở và một chiếc bút (nghìn đồng, theo thứ tự vở; bút).", answer: "12;9", explanation: "Giải hệ được x=12, y=9." }
        ]
      },
      {
        topic: "Phân tích đa thức",
        question: "Cho biểu thức P = x² − 9x + 20.",
        parts: [
          { label: "a", prompt: "Phân tích P thành nhân tử.", answer: "(x−4)(x−5)", explanation: "Tìm hai số có tổng 9, tích 20 là 4 và 5." },
          { label: "b", prompt: "Tìm mọi số nguyên x để P là một số nguyên tố.", answer: "3;6", explanation: "P=(x−4)(x−5). Với x nguyên, hai thừa số là hai số nguyên liên tiếp; tích là số nguyên tố khi một thừa số bằng 1 và thừa số kia là số nguyên tố, hoặc khi cả hai thừa số âm và một thừa số bằng −1. Suy ra x=6 hoặc x=3." }
        ]
      },
      {
        topic: "Định lý Pythagore",
        question: "Một hình chữ nhật có đường chéo 25 cm, chiều rộng 15 cm.",
        parts: [
          { label: "a", prompt: "Tính chiều dài hình chữ nhật.", answer: "20", explanation: "Theo Pythagore, chiều dài là √(25²−15²)=20 cm." },
          { label: "b", prompt: "Tính chu vi hình chữ nhật.", answer: "70", explanation: "Chu vi bằng 2×(20+15)=70 cm." }
        ]
      },
      {
        topic: "Phương trình phân thức",
        question: "Giải phương trình (x−1)/(x+1) + (x+1)/(x−1) = 10/3.",
        parts: [
          { label: "a", prompt: "Nêu điều kiện xác định của phương trình.", answer: "x!=1;x!=-1", explanation: "Các mẫu x+1 và x−1 phải khác 0, do đó x khác −1 và 1." },
          { label: "b", prompt: "Rút gọn vế trái rồi tìm các nghiệm.", answer: "-2;2", explanation: "Vế trái bằng 2(x²+1)/(x²−1). Phương trình tương đương 6(x²+1)=10(x²−1), suy ra x²=4. Cả −2 và 2 đều thỏa điều kiện." }
        ]
      },
      {
        topic: "Hằng đẳng thức",
        question: "Cho a+b=11 và ab=24.",
        parts: [
          { label: "a", prompt: "Tính a²+b².", answer: "73", explanation: "a²+b²=(a+b)²−2ab=121−48=73." },
          { label: "b", prompt: "Tính a³+b³.", answer: "539", explanation: "a³+b³=(a+b)³−3ab(a+b)=1331−792=539." }
        ]
      },
      {
        topic: "Phương trình nghiệm nguyên",
        question: "Tìm các cặp số nguyên dương (x,y) thỏa mãn x+y=12.",
        parts: [
          { label: "a", prompt: "Giá trị lớn nhất của tích xy là bao nhiêu?", answer: "36", explanation: "Với tổng x+y=12 cố định, xy lớn nhất khi x=y=6; tích lớn nhất là 36." },
          { label: "b", prompt: "Có bao nhiêu cặp có thứ tự (x,y) để xy=35?", answer: "2", explanation: "Các cặp là (5,7) và (7,5), có 2 cặp có thứ tự." }
        ]
      },
      {
        topic: "Hình học và diện tích",
        question: "Tam giác ABC có đáy BC=16 cm và diện tích 96 cm². Điểm M là trung điểm của BC.",
        parts: [
          { label: "a", prompt: "Tính độ dài đường cao kẻ từ A xuống BC.", answer: "12", explanation: "96=16×h:2 nên h=12 cm." },
          { label: "b", prompt: "Tính diện tích tam giác ABM.", answer: "48", explanation: "M là trung điểm BC nên BM=BC/2; hai tam giác ABM và AMC có cùng chiều cao, do đó diện tích mỗi tam giác bằng 96:2=48 cm²." }
        ]
      },
      {
        topic: "Phân thức đại số",
        question: "Cho x là số hữu tỉ khác 0 và A=(x²−9)/x.",
        parts: [
          { label: "a", prompt: "Tính A khi x=3/2.", answer: "-9/2", explanation: "A=((3/2)²−9):(3/2)=(9/4−36/4)×2/3=−9/2." },
          { label: "b", prompt: "Tìm x để A=0.", answer: "-3;3", explanation: "A=0 khi x²−9=0, suy ra x=−3 hoặc x=3; cả hai đều khác 0." }
        ]
      },
      {
        topic: "Chứng minh chia hết",
        question: "Cho n là số nguyên. Xét tích n(n+1)(n+2).",
        parts: [
          { label: "a", prompt: "Trong ba số liên tiếp luôn có ít nhất một số chia hết cho số nào?", answer: "3", explanation: "Trong ba số nguyên liên tiếp, một số chia hết cho 3." },
          { label: "b", prompt: "Tính phần dư của n(n+1)(n+2) khi chia cho 6.", answer: "0", explanation: "Ngoài một thừa số chia hết cho 3, trong ba số liên tiếp còn có ít nhất một số chẵn; tích chia hết cho 6." }
        ]
      },
      {
        topic: "Phương trình và số nguyên",
        question: "Tìm số nguyên dương n sao cho n²−5n+6 là số nguyên tố.",
        parts: [
          { label: "a", prompt: "Phân tích n²−5n+6 thành nhân tử.", answer: "(n-2)(n-3)", explanation: "n²−5n+6=(n−2)(n−3)." },
          { label: "b", prompt: "Tìm tất cả n nguyên dương thỏa mãn.", answer: "1;4", explanation: "Hai thừa số là hai số nguyên liên tiếp. Tích là số nguyên tố khi n=1 cho tích 2 hoặc n=4 cho tích 2." }
        ]
      },
      {
        topic: "Hình học và bất đẳng thức",
        question: "Một hình chữ nhật có chu vi 36 cm. Hai cạnh là các số nguyên dương.",
        parts: [
          { label: "a", prompt: "Tìm diện tích lớn nhất có thể có.", answer: "81", explanation: "Tổng hai cạnh bằng 18. Tích lớn nhất đạt khi hai cạnh cùng bằng 9, do đó diện tích lớn nhất là 81 cm²." },
          { label: "b", prompt: "Có bao nhiêu cặp cạnh nguyên dương không kể thứ tự để diện tích bằng 77 cm²?", answer: "1", explanation: "Cần hai số có tổng 18 và tích 77; nghiệm của t²−18t+77=0 là 7 và 11, nên có đúng một cặp." }
        ]
      },
      {
        topic: "Cực trị biểu thức",
        question: "Cho x là số nguyên thỏa mãn 0≤x≤10 và A=(x−4)(10−x).",
        parts: [
          { label: "a", prompt: "Tìm giá trị lớn nhất của A.", answer: "9", explanation: "A=−x²+14x−40=−(x−7)²+9, nên giá trị lớn nhất là 9 khi x=7." },
          { label: "b", prompt: "Có bao nhiêu giá trị x để A=0?", answer: "2", explanation: "A=0 khi x−4=0 hoặc 10−x=0, tức x=4 hoặc x=10; có 2 giá trị." }
        ]
      }
    ],
    "9": [
      {
        topic: "Hệ thức Viète",
        question: "Phương trình x² − 7x + 10 = 0 có hai nghiệm x₁, x₂.",
        parts: [
          { label: "a", prompt: "Tính x₁+x₂ và x₁x₂ (theo thứ tự: tổng; tích).", answer: "7;10", explanation: "Theo Viète, tổng hai nghiệm bằng 7, tích bằng 10." },
          { label: "b", prompt: "Tính x₁²+x₂².", answer: "29", explanation: "x₁²+x₂²=(x₁+x₂)²−2x₁x₂=49−20=29." },
          { label: "c", prompt: "Tính x₁³+x₂³.", answer: "133", explanation: "x₁³+x₂³=(x₁+x₂)³−3x₁x₂(x₁+x₂)=343−210=133." }
        ]
      },
      {
        topic: "Hàm số và parabol",
        question: "Cho đường thẳng y=x+2 và parabol y=x².",
        parts: [
          { label: "a", prompt: "Tìm hoành độ các giao điểm (ghi theo thứ tự tăng dần).", answer: "-1;2", explanation: "Giải x²=x+2: (x−2)(x+1)=0, nên x=−1 hoặc x=2." },
          { label: "b", prompt: "Tính tung độ của giao điểm có hoành độ dương.", answer: "4", explanation: "Với x=2, y=2+2=4." }
        ]
      },
      {
        topic: "Hệ phương trình",
        question: "Hai số có tổng bằng 17. Số thứ nhất nhỏ hơn 6. Nếu tăng số thứ nhất thêm 3 và giảm số thứ hai đi 2 thì tích hai số mới bằng 80.",
        parts: [
          { label: "a", prompt: "Gọi số thứ nhất là x, biểu diễn số thứ hai theo x.", answer: "17-x", explanation: "Tổng hai số bằng 17 nên số thứ hai là 17−x." },
          { label: "b", prompt: "Tìm hai số ban đầu (theo thứ tự tăng dần).", answer: "5;12", explanation: "(x+3)(15−x)=80 suy ra x²−12x+35=0, nên x=5 hoặc 7. Vì số thứ nhất nhỏ hơn 6 nên x=5; số thứ hai là 12." }
        ]
      },
      {
        topic: "Phương trình bậc hai",
        question: "Phương trình x² − (m+1)x + m = 0 có hai nghiệm thực.",
        parts: [
          { label: "a", prompt: "Phân tích vế trái thành nhân tử.", answer: "(x-1)(x-m)", explanation: "x²−(m+1)x+m=(x−1)(x−m)." },
          { label: "b", prompt: "Tìm điều kiện của m để phương trình có hai nghiệm phân biệt đều dương.", answer: "m>0;m!=1", explanation: "Hai nghiệm là 1 và m; để phân biệt và đều dương cần m>0, m khác 1." }
        ]
      },
      {
        topic: "Hình học và hệ thức",
        question: "Tam giác vuông ABC vuông tại A có AB=6 cm, AC=8 cm. Đường cao AH hạ xuống cạnh huyền BC.",
        parts: [
          { label: "a", prompt: "Tính BC.", answer: "10", explanation: "BC=√(6²+8²)=10 cm." },
          { label: "b", prompt: "Tính AH.", answer: "24/5", explanation: "Diện tích tam giác cho AH=AB×AC:BC=48:10=24/5 cm." }
        ]
      },
      {
        topic: "Hệ thức Viète và tham số",
        question: "Phương trình x²−(m+2)x+2m=0 có hai nghiệm x₁,x₂.",
        parts: [
          { label: "a", prompt: "Tính x₁+x₂ và x₁x₂ theo m.", answer: "m+2;2m", explanation: "Theo Viète, tổng hai nghiệm là m+2 và tích là 2m." },
          { label: "b", prompt: "Tìm m để hai nghiệm đều dương.", answer: "m>0", explanation: "Phương trình phân tích thành (x−2)(x−m)=0, hai nghiệm là 2 và m; cả hai dương khi m>0." }
        ]
      },
      {
        topic: "Hàm số bậc nhất",
        question: "Đường thẳng d: y=2x+m đi qua A(1,5).",
        parts: [
          { label: "a", prompt: "Tìm m.", answer: "3", explanation: "Thay A(1,5) vào d: 5=2+m nên m=3." },
          { label: "b", prompt: "Tìm giao điểm của d với trục hoành.", answer: "-3/2;0", explanation: "Cho y=0: 2x+3=0, suy ra giao điểm là (−3/2;0)." }
        ]
      },
      {
        topic: "Bất đẳng thức",
        question: "Cho số thực x.",
        parts: [
          { label: "a", prompt: "Tìm giá trị nhỏ nhất của x²−6x+13.", answer: "4", explanation: "x²−6x+13=(x−3)²+4≥4." },
          { label: "b", prompt: "Giá trị nhỏ nhất đạt được khi x bằng bao nhiêu?", answer: "3", explanation: "Dấu bằng xảy ra khi x−3=0, tức x=3." }
        ]
      },
      {
        topic: "Hình học đường tròn",
        question: "Đường tròn tâm O bán kính 5 cm có dây AB dài 8 cm. OH vuông góc với AB tại H.",
        parts: [
          { label: "a", prompt: "Tính khoảng cách OH.", answer: "3", explanation: "Đường vuông góc từ tâm đến dây chia đôi dây, AH=4. Theo Pythagore, OH=√(5²−4²)=3 cm." },
          { label: "b", prompt: "Tính diện tích tam giác OAB.", answer: "12", explanation: "Diện tích bằng AB×OH:2=8×3:2=12 cm²." }
        ]
      },
      {
        topic: "Hàm số bậc hai và Viète",
        question: "Phương trình x²−(m+3)x+2m+2=0 có hai nghiệm x₁,x₂.",
        parts: [
          { label: "a", prompt: "Tính x₁+x₂ và x₁x₂ theo m.", answer: "m+3;2m+2", explanation: "Theo Viète, tổng hai nghiệm là m+3 và tích là 2m+2." },
          { label: "b", prompt: "Biết một nghiệm bằng 2. Tìm nghiệm còn lại theo m.", answer: "m+1", explanation: "Theo Viète, tổng hai nghiệm là m+3. Nghiệm còn lại bằng m+3−2=m+1." }
        ]
      },
      {
        topic: "Hình học tọa độ",
        question: "Parabol y=x² cắt đường thẳng y=2x+3 tại hai điểm A và B.",
        parts: [
          { label: "a", prompt: "Tìm hoành độ hai giao điểm (theo thứ tự tăng dần).", answer: "-1;3", explanation: "Giải x²=2x+3: (x−3)(x+1)=0 nên x=−1 hoặc x=3." },
          { label: "b", prompt: "Tính độ dài AB.", answer: "4sqrt(5)", explanation: "Hai giao điểm là (−1,1) và (3,9); AB=√((3+1)²+(9−1)²)=√80=4√5." }
        ]
      },
      {
        topic: "Tham số và nghiệm phương trình",
        question: "Phương trình x²−6x+m=0 có hai nghiệm thực.",
        parts: [
          { label: "a", prompt: "Tìm điều kiện của m để phương trình có nghiệm thực.", answer: "m<=9", explanation: "Biệt thức Δ=36−4m≥0 nên m≤9." },
          { label: "b", prompt: "Tìm điều kiện của m để phương trình có hai nghiệm phân biệt đều dương.", answer: "0<m<9", explanation: "Hai nghiệm phân biệt khi m<9. Tổng hai nghiệm bằng 6>0, tích bằng m; để cả hai dương cần m>0. Vậy 0<m<9." }
        ]
      }
    ]
  };

  const questions = questionsByGrade[khoi];
  if (!questions) throw new Error(`Không có bộ đề HSG Toán cho lớp ${khoi}.`);
  return questions.map((question) => ({ ...question, loaiCauHoi: "tu-luan-nhieu-y", challenge: true }));
}

function moRongThuThachToan(khoi) {
  const questions = [];
  const gcd = (first, second) => {
    while (second !== 0) [first, second] = [second, first % second];
    return first;
  };

  for (let index = 0; index < 20; index += 1) {
    const variant = Math.floor(index / 4);
    const type = index % 4;
    let question;
    let answer;
    let wrong;
    let topic;
    let explanation;

    if (khoi === "6" && type === 0) {
      const middle = 21 + variant * 2;
      const total = middle * 3;
      question = `Tổng của ba số tự nhiên liên tiếp bằng $${total}$. Tìm số ở giữa.`;
      answer = `$${middle}$`;
      wrong = [`$${middle - 1}$`, `$${middle + 1}$`, `$${total / 2}$`];
      topic = "Suy luận số tự nhiên";
      explanation = `Ba số liên tiếp có số ở giữa bằng trung bình cộng: $${total}:3=${middle}$.`;
    } else if (khoi === "6" && type === 1) {
      const first = 6 + variant * 2;
      const second = 8 + variant * 2;
      const divisor = gcd(first, second);
      const lcm = first * second / divisor;
      question = `Hai đèn nháy lần lượt mỗi $${first}$ phút và $${second}$ phút. Nếu cùng nháy lúc 8 giờ, sau ít nhất bao lâu chúng lại cùng nháy?`;
      answer = `$${lcm}$ phút`;
      wrong = [`$${first + second}$ phút`, `$${first * second}$ phút`, `$${divisor}$ phút`];
      topic = "Bội chung nhỏ nhất";
      explanation = `Thời gian cần tìm là $\\operatorname{BCNN}(${first},${second})=${lcm}$ phút.`;
    } else if (khoi === "6" && type === 2) {
      const halfPerimeter = 24 + variant * 2;
      const difference = 4 + variant * 2;
      const length = (halfPerimeter + difference) / 2;
      const width = (halfPerimeter - difference) / 2;
      const area = length * width;
      question = `Hình chữ nhật có chu vi $${halfPerimeter * 2}$ cm, chiều dài hơn chiều rộng $${difference}$ cm. Tính diện tích.`;
      answer = `$${area}\\,\\text{cm}^2$`;
      wrong = [`$${length * length}\\,\\text{cm}^2$`, `$${area + difference}\\,\\text{cm}^2$`, `$${area + halfPerimeter}\\,\\text{cm}^2$`];
      topic = "Bài toán hình học nhiều bước";
      explanation = `Nửa chu vi là $${halfPerimeter}$ cm; hai cạnh lần lượt là $${length}$ cm và $${width}$ cm. Diện tích là $${length}\\times${width}=${area}\\,\\text{cm}^2$.`;
    } else if (khoi === "6") {
      const limit = 90 + variant * 15;
      const count = Math.floor(limit / 3) + Math.floor(limit / 5) - Math.floor(limit / 15);
      question = `Trong các số từ 1 đến $${limit}$, có bao nhiêu số chia hết cho 3 hoặc 5?`;
      answer = `$${count}$`;
      wrong = [`$${Math.floor(limit / 3) + Math.floor(limit / 5)}$`, `$${Math.floor(limit / 15)}$`, `$${count - 1}$`];
      topic = "Đếm và chia hết";
      explanation = `Dùng nguyên tắc cộng trừ: $\\lfloor${limit}/3\\rfloor+\\lfloor${limit}/5\\rfloor-\\lfloor${limit}/15\\rfloor=${count}$.`;
    } else if (khoi === "7" && type === 0) {
      const value = 4 + variant * 2;
      question = `Tính $\\left(-\\frac{${value}}{3}+\\frac{${value}}{6}\\right)\\times(-6)$.`;
      answer = `$${value}$`;
      wrong = [`$-${value}$`, `$${value / 2}$`, `$${value * 2}$`];
      topic = "Số hữu tỉ";
      explanation = `$-\\frac{${value}}{3}+\\frac{${value}}{6}=-\\frac{${value}}{6}$; nhân với $-6$ được $${value}$.`;
    } else if (khoi === "7" && type === 1) {
      const scale = 4 + variant * 2;
      const total = 10 * scale;
      const greatest = 5 * scale;
      question = `Ba lớp quyên góp sách theo tỉ lệ $2:3:5$, tổng cộng $${total}$ quyển. Lớp quyên góp nhiều nhất được bao nhiêu quyển?`;
      answer = `$${greatest}$ quyển`;
      wrong = [`$${2 * scale}$ quyển`, `$${3 * scale}$ quyển`, `$${4 * scale}$ quyển`];
      topic = "Tỉ lệ thức và ứng dụng";
      explanation = `Tổng số phần là 10, mỗi phần bằng $${total}:10=${scale}$. Lớp nhiều nhất có $5\\times${scale}=${greatest}$ quyển.`;
    } else if (khoi === "7" && type === 2) {
      const ratios = [[2, 3, 4], [1, 2, 3], [3, 4, 5], [2, 5, 5], [1, 1, 2]][variant];
      const greatest = Math.max(...ratios);
      const angle = 180 * greatest / ratios.reduce((sum, part) => sum + part, 0);
      question = `Ba góc của một tam giác tỉ lệ với $${ratios.join(":")}$. Góc lớn nhất bằng bao nhiêu?`;
      answer = `$${angle}^\\circ$`;
      wrong = [`$${angle - 15}^\\circ$`, `$${angle + 15}^\\circ$`, `$${angle + 30}^\\circ$`];
      topic = "Góc tam giác và tỉ lệ";
      explanation = `Góc lớn nhất bằng $180^\\circ\\times\\frac{${greatest}}{${ratios.reduce((sum, part) => sum + part, 0)}}=${angle}^\\circ$.`;
    } else if (khoi === "7") {
      const totalWork = [72, 90, 120, 60, 144][variant];
      const machineCount = [6, 9, 12, 5, 8][variant];
      const answerHours = totalWork / machineCount;
      question = `Một công việc cần $${totalWork}$ máy-giờ. Nếu dùng $${machineCount}$ máy cùng năng suất, cần bao nhiêu giờ?`;
      answer = `$${answerHours}$ giờ`;
      wrong = [`$${totalWork}$ giờ`, `$${answerHours + 1}$ giờ`, `$${answerHours + 3}$ giờ`];
      topic = "Đại lượng tỉ lệ nghịch";
      explanation = `Thời gian cần thiết là $${totalWork}:${machineCount}=${answerHours}$ giờ.`;
    } else if (khoi === "8" && type === 0) {
      const coefficient = 2 + variant;
      const offset = 3 + variant;
      const constant = 4 + variant * 2;
      const root = 5 + variant * 2;
      const right = coefficient * (root - offset) + constant;
      question = `Giải phương trình $${coefficient}(x-${offset})+${constant}=${right}$.`;
      answer = `$x=${root}$`;
      wrong = [`$x=${root + 1}$`, `$x=${right}$`, `$x=${root - offset}$`];
      topic = "Phương trình có ngoặc";
      explanation = `Chuyển vế và chia hệ số: $${coefficient}(x-${offset})=${right - constant}$, suy ra $x=${root}$.`;
    } else if (khoi === "8" && type === 1) {
      const scale = 2 + variant;
      const a = 3 * scale;
      const b = 4 * scale;
      const hypotenuse = 5 * scale;
      question = `Một tam giác vuông có hai cạnh góc vuông dài $${a}$ cm và $${b}$ cm. Tính chu vi tam giác.`;
      answer = `$${a + b + hypotenuse}$ cm`;
      wrong = [`$${a + b}$ cm`, `$${2 * (a + b)}$ cm`, `$${hypotenuse + a}$ cm`];
      topic = "Định lý Pythagore";
      explanation = `Cạnh huyền là $\\sqrt{${a}^2+${b}^2}=${hypotenuse}$ cm, nên chu vi là $${a}+${b}+${hypotenuse}=${a + b + hypotenuse}$ cm.`;
    } else if (khoi === "8" && type === 2) {
      const firstRoot = 2 + variant;
      const secondRoot = firstRoot + 3 + variant;
      const sum = firstRoot + secondRoot;
      const product = firstRoot * secondRoot;
      question = `Phân tích đa thức $x^2-${sum}x+${product}$ thành nhân tử.`;
      answer = `$(x-${firstRoot})(x-${secondRoot})$`;
      wrong = [`$(x+${firstRoot})(x+${secondRoot})$`, `$(x-${sum})(x-${product})$`, `$(x-${firstRoot})^2$`];
      topic = "Phân tích đa thức thành nhân tử";
      explanation = `Hai số có tổng $${sum}$ và tích $${product}$ là $${firstRoot}$ và $${secondRoot}$, nên đa thức bằng $(x-${firstRoot})(x-${secondRoot})$.`;
    } else if (khoi === "8") {
      const originalPrice = 500 + variant * 100;
      const finalPrice = Math.round(originalPrice * 0.8 * 1.1);
      question = `Một món hàng giá $${originalPrice}$ nghìn đồng, giảm 20% rồi tăng 10% trên giá mới. Giá cuối là bao nhiêu?`;
      answer = `$${finalPrice}$ nghìn đồng`;
      wrong = [`$${originalPrice * 0.9}$ nghìn đồng`, `$${originalPrice * 0.8}$ nghìn đồng`, `$${originalPrice}$ nghìn đồng`];
      topic = "Phần trăm liên tiếp";
      explanation = `Giá cuối là $${originalPrice}\\times0{,}8\\times1{,}1=${finalPrice}$ nghìn đồng.`;
    } else if (khoi === "9" && type === 0) {
      const firstRoot = 2 + variant;
      const secondRoot = firstRoot + 4;
      const sum = firstRoot + secondRoot;
      const product = firstRoot * secondRoot;
      question = `Phương trình $x^2-${sum}x+${product}=0$ có hai nghiệm. Nghiệm lớn hơn là bao nhiêu?`;
      answer = `$${secondRoot}$`;
      wrong = [`$${firstRoot}$`, `$${sum}$`, `$-${secondRoot}$`];
      topic = "Phương trình bậc hai";
      explanation = `$x^2-${sum}x+${product}=(x-${firstRoot})(x-${secondRoot})$, nên nghiệm lớn hơn là $${secondRoot}$.`;
    } else if (khoi === "9" && type === 1) {
      const vertexX = 2 + variant;
      const minimum = -3 - variant;
      const coefficient = 1 + (variant % 3);
      question = `Hàm số $y=${coefficient}(x-${vertexX})^2${minimum < 0 ? minimum : `+${minimum}`}$. Giá trị nhỏ nhất của hàm số là bao nhiêu?`;
      answer = `$${minimum}$`;
      wrong = [`$${vertexX}$`, `$${minimum + 1}$`, `$${-minimum}$`];
      topic = "Hàm số bậc hai";
      explanation = `Vì $(x-${vertexX})^2\\ge0$ và hệ số ${coefficient} dương, giá trị nhỏ nhất là $${minimum}$ khi $x=${vertexX}$.`;
    } else if (khoi === "9" && type === 2) {
      const sum = 18 + variant * 2;
      const difference = 4 + variant * 2;
      const larger = (sum + difference) / 2;
      const smaller = (sum - difference) / 2;
      question = `Hai số có tổng $${sum}$ và hiệu $${difference}$. Số lớn bằng bao nhiêu?`;
      answer = `$${larger}$`;
      wrong = [`$${smaller}$`, `$${sum - difference}$`, `$${sum}$`];
      topic = "Lập hệ phương trình";
      explanation = `Số lớn bằng $(\\text{tổng} + \\text{hiệu}):2=(${sum}+${difference}):2=${larger}$.`;
    } else {
      const [radius, halfChord, distance] = [[13, 5, 12], [10, 6, 8], [17, 8, 15], [25, 7, 24], [13, 12, 5]][variant];
      question = `Đường tròn bán kính $${radius}$ cm có dây AB dài $${2 * halfChord}$ cm. Khoảng cách từ tâm đến dây là bao nhiêu?`;
      answer = `$${distance}$ cm`;
      wrong = [`$${radius - halfChord}$ cm`, `$${Math.sqrt(radius * radius + halfChord * halfChord)}$ cm`, `$${halfChord}$ cm`];
      topic = "Hình học đường tròn";
      explanation = `Đường vuông góc từ tâm chia đôi dây. Theo Pythagore, khoảng cách là $\\sqrt{${radius}^2-${halfChord}^2}=${distance}$ cm.`;
    }

    questions.push(taoCauTracNghiem(question, answer, wrong, topic, explanation, { challenge: true }));
  }

  return questions;
}

function moRongBoTroToan(khoi, topic) {
  const questions = [];
  if (khoi === "6" && topic === "Chu vi hình chữ nhật") {
    for (let index = 0; index < 20; index += 1) {
      const length = 8 + index;
      const width = 3 + (index % 7);
      const perimeter = 2 * (length + width);
      questions.push(taoCauTracNghiem(
        `Hình chữ nhật dài $${length}\\,\\text{cm}$, rộng $${width}\\,\\text{cm}$. Chu vi bằng bao nhiêu?`,
        `$${perimeter}\\,\\text{cm}$`,
        [`$${length + width}\\,\\text{cm}$`, `$${length * width}\\,\\text{cm}$`, `$${2 * length + width}\\,\\text{cm}$`],
        topic,
        `$P=2(a+b)=2(${length}+${width})=${perimeter}\\,\\text{cm}$.`,
        { challenge: index % 5 === 4 }
      ));
    }
  } else if (khoi === "6" && topic === "Bội chung") {
    for (let index = 0; index < 20; index += 1) {
      const first = 4 + index;
      const second = 6 + (index % 9);
      let a = first;
      let b = second;
      while (b !== 0) [a, b] = [b, a % b];
      const leastCommonMultiple = (first * second) / a;
      questions.push(taoCauTracNghiem(
        `Tìm số tự nhiên nhỏ nhất khác $0$ chia hết cho cả $${first}$ và $${second}$.`,
        `$${leastCommonMultiple}$`,
        [`$${a}$`, `$${first * second}$`, `$${leastCommonMultiple + first}$`],
        topic,
        `$\\operatorname{BCNN}(${first},${second})=${leastCommonMultiple}$.`,
        { challenge: index % 5 === 4 }
      ));
    }
  }
  return questions;
}

function moRongKHTN(khoi) {
  const questions = [];
  for (let index = 0; index < 35; index += 1) {
    let question;
    let answer;
    let wrong;
    let topic;
    let explanation;
    let listenText;
    if (khoi === "6") {
      const density = 2 + (index % 8);
      const volume = 3 + (index % 7);
      const mass = density * volume;
      question = `Vật có khối lượng $${mass}\\,\\text{g}$ và thể tích $${volume}\\,\\text{cm}^3$. Khối lượng riêng là bao nhiêu?`;
      answer = `$${density}\\,\\text{g/cm}^3$`;
      wrong = [`$${density - 1}\\,\\text{g/cm}^3$`, `$${density + 1}\\,\\text{g/cm}^3$`, `$${density + 2}\\,\\text{g/cm}^3$`];
      topic = "Khối lượng riêng";
      explanation = `$D=\\frac{m}{V}=\\frac{${mass}}{${volume}}=${density}\\,\\text{g/cm}^3$.`;
      listenText = `Vật có khối lượng ${mass} gam và thể tích ${volume} xăng-ti-mét khối. Khối lượng riêng là bao nhiêu?`;
    } else if (khoi === "7") {
      const speed = 2 + (index % 12);
      const time = 5 + (index % 9) * 5;
      const distance = speed * time;
      question = `Một người đi được $${distance}\\,\\text{m}$ trong $${time}\\,\\text{s}$. Tốc độ bằng bao nhiêu?`;
      answer = `$${speed}\\,\\text{m/s}$`;
      wrong = [`$${speed + 2}\\,\\text{m/s}$`, `$${distance + time}\\,\\text{m/s}$`, `$${speed + 3}\\,\\text{m/s}$`];
      topic = "Tốc độ";
      explanation = `$v=\\frac{s}{t}=\\frac{${distance}}{${time}}=${speed}\\,\\text{m/s}$.`;
      listenText = `Một người đi được ${distance} mét trong ${time} giây. Tốc độ là bao nhiêu?`;
    } else if (khoi === "8") {
      const force = 20 + index * 5;
      const area = 1 + (index % 8);
      const pressure = force / area;
      question = `Lực $${force}\\,\\text{N}$ tác dụng lên diện tích $${area}\\,\\text{m}^2$. Áp suất bằng bao nhiêu?`;
      answer = `$${pressure}\\,\\text{Pa}$`;
      wrong = [`$${force * area + 1}\\,\\text{Pa}$`, `$${force + area + 2}\\,\\text{Pa}$`, `$${pressure + 5}\\,\\text{Pa}$`];
      topic = "Áp suất";
      explanation = `$p=\\frac{F}{S}=\\frac{${force}}{${area}}=${pressure}\\,\\text{Pa}$.`;
      listenText = `Lực ${force} niu-tơn tác dụng lên diện tích ${area} mét vuông. Áp suất bằng bao nhiêu?`;
    } else {
      const voltage = 6 + (index % 10) * 3;
      const resistance = 2 + (index % 8);
      const current = voltage / resistance;
      question = `Mạch điện có hiệu điện thế $${voltage}\\,\\text{V}$ và điện trở $${resistance}\\,\\Omega$. Cường độ dòng điện bằng bao nhiêu?`;
      answer = `$${current}\\,\\text{A}$`;
      wrong = [`$${voltage * resistance}\\,\\text{A}$`, `$${voltage + resistance}\\,\\text{A}$`, `$${current + 2}\\,\\text{A}$`];
      topic = "Định luật Ohm";
      explanation = `$I=\\frac{U}{R}=\\frac{${voltage}}{${resistance}}=${current}\\,\\text{A}$.`;
      listenText = `Mạch điện có hiệu điện thế ${voltage} vôn và điện trở ${resistance} ôm. Cường độ dòng điện bằng bao nhiêu?`;
    }
    questions.push(taoCauTracNghiem(question, answer, wrong, topic, explanation, {
      challenge: index % 5 === 4,
      listenText
    }));
  }
  return questions;
}

function moRongKHTNBoMon(khoi, phanMon) {
  const duLieu = {
    hoa: [
      [
        ["Trong bình mẫu A, chất nào là chất tinh khiết?", "Nước cất", ["Nước biển", "Không khí", "Nước đường"], "Chất tinh khiết và hỗn hợp", "Nước cất chỉ gồm một chất; các mẫu còn lại là hỗn hợp."],
        ["Mẫu nào là chất tinh khiết: đồng nguyên chất hay đồng thau?", "Đồng nguyên chất", ["Đồng thau", "Nước sông", "Không khí"], "Chất tinh khiết và hỗn hợp", "Đồng nguyên chất gồm một chất; đồng thau là hợp kim."],
        ["Mẫu nào sau đây là hỗn hợp?", "Nước muối", ["Khí oxygen tinh khiết", "Vàng nguyên chất", "Nước cất"], "Chất tinh khiết và hỗn hợp", "Nước muối gồm nước và muối hòa tan."],
        ["Không khí được xếp vào loại nào?", "Hỗn hợp", ["Chất tinh khiết", "Nguyên tố hóa học", "Kim loại"], "Chất tinh khiết và hỗn hợp", "Không khí gồm nhiều chất khí trộn lẫn."],
        ["Nước đường thuộc loại nào?", "Hỗn hợp", ["Chất tinh khiết", "Đơn chất", "Kim loại"], "Chất tinh khiết và hỗn hợp", "Nước đường có nước và đường hòa tan."],
        ["Mẫu nào chỉ gồm một chất?", "Muối ăn tinh khiết", ["Nước biển", "Sữa", "Đất"], "Chất tinh khiết và hỗn hợp", "Muối ăn tinh khiết chỉ gồm một chất."],
        ["Nước khoáng đóng chai thường được xếp vào loại nào?", "Hỗn hợp", ["Chất tinh khiết", "Đơn chất", "Kim loại"], "Chất tinh khiết và hỗn hợp", "Nước khoáng có nước cùng một số chất khoáng hòa tan."]
      ],
      [
        ["Muốn thu muối ăn từ nước muối, nên dùng cách nào?", "Cô cạn nước", ["Lọc qua giấy lọc", "Dùng nam châm", "Lắng rồi gạn"], "Tách chất khỏi hỗn hợp", "Nước bay hơi khi cô cạn, muối còn lại trong dụng cụ."],
        ["Để tách cát không tan khỏi nước, cách phù hợp là gì?", "Lọc", ["Cô cạn", "Dùng nam châm", "Chưng cất"], "Tách chất khỏi hỗn hợp", "Cát không tan bị giữ lại trên giấy lọc."],
        ["Có thể tách mạt sắt ra khỏi cát bằng cách nào?", "Dùng nam châm", ["Lọc với giấy", "Cô cạn", "Để bay hơi"], "Tách chất khỏi hỗn hợp", "Mạt sắt bị nam châm hút, còn cát thì không."],
        ["Muốn thu nước sạch từ nước muối, phương pháp nào phù hợp?", "Chưng cất", ["Lọc thông thường", "Dùng nam châm", "Lắng"], "Tách chất khỏi hỗn hợp", "Nước bay hơi rồi được ngưng tụ, muối ở lại."],
        ["Dầu ăn nổi trên nước. Có thể tách hai lớp chất lỏng này bằng cách nào?", "Gạn lớp dầu", ["Dùng nam châm", "Cô cạn cả hai", "Lọc bằng giấy"], "Tách chất khỏi hỗn hợp", "Dầu không tan và nổi thành lớp riêng trên mặt nước."],
        ["Muốn tách bã trà ra khỏi nước trà, cách đơn giản là gì?", "Lọc", ["Dùng nam châm", "Chưng cất", "Cô cạn"], "Tách chất khỏi hỗn hợp", "Bã trà là chất rắn có thể được giữ lại khi lọc."],
        ["Để thu tinh thể đường từ dung dịch đường, cần làm gì?", "Cô cạn từ từ dung dịch", ["Dùng nam châm", "Lọc qua giấy", "Thêm cát"], "Tách chất khỏi hỗn hợp", "Nước bay hơi dần, đường kết tinh còn lại."]
      ],
      [
        ["Công thức hóa học của nước là gì?", "H₂O", ["CO₂", "O₂", "NaCl"], "Nguyên tử và phân tử", "Một phân tử nước gồm hai nguyên tử hydrogen và một nguyên tử oxygen."],
        ["Khí carbon dioxide có công thức nào?", "CO₂", ["O₂", "H₂O", "NaCl"], "Nguyên tử và phân tử", "Carbon dioxide gồm carbon và oxygen, có công thức CO₂."],
        ["Kí hiệu hóa học của oxygen là gì?", "O", ["Ox", "Og", "On"], "Nguyên tố hóa học", "Kí hiệu hóa học của nguyên tố oxygen là O."],
        ["Kí hiệu hóa học của hydrogen là gì?", "H", ["Hy", "He", "Hg"], "Nguyên tố hóa học", "Kí hiệu hóa học của nguyên tố hydrogen là H."],
        ["Muối ăn sodium chloride có công thức nào?", "NaCl", ["HCl", "CO₂", "H₂O"], "Nguyên tử và phân tử", "Sodium chloride có công thức hóa học là NaCl."],
        ["Khí oxygen thường tồn tại dưới dạng phân tử nào?", "O₂", ["O", "O₃", "CO₂"], "Nguyên tử và phân tử", "Mỗi phân tử oxygen thường gồm hai nguyên tử O."],
        ["Kí hiệu hóa học của carbon là gì?", "C", ["Ca", "Co", "Cu"], "Nguyên tố hóa học", "Kí hiệu C là của carbon; Ca, Co và Cu là các nguyên tố khác."]
      ],
      [
        ["Hiện tượng nào là biến đổi hóa học?", "Sắt bị gỉ", ["Nước đá tan", "Nước bay hơi", "Đường tan trong nước"], "Biến đổi hóa học", "Sắt gỉ tạo thành chất mới nên là biến đổi hóa học."],
        ["Đốt cháy tờ giấy tạo ra tro. Đây là biến đổi gì?", "Biến đổi hóa học", ["Biến đổi vật lí", "Sự nóng chảy", "Sự hòa tan"], "Biến đổi hóa học", "Khi cháy, giấy tạo ra tro và khí mới."],
        ["Nước đá tan thành nước lỏng là biến đổi gì?", "Biến đổi vật lí", ["Biến đổi hóa học", "Sự cháy", "Sự gỉ"], "Biến đổi vật lí", "Chất vẫn là nước, chỉ thay đổi trạng thái."],
        ["Đường tan trong nước tạo thành dung dịch. Đây chủ yếu là biến đổi gì?", "Biến đổi vật lí", ["Biến đổi hóa học", "Sự cháy", "Sự oxi hóa"], "Biến đổi vật lí", "Đường hòa tan nhưng không tạo thành chất mới."],
        ["Khi nến cháy, có tạo thành chất mới không?", "Có, nên là biến đổi hóa học", ["Không, chỉ đổi hình dạng", "Không, chỉ nóng chảy", "Không, chỉ hòa tan"], "Biến đổi hóa học", "Sáp nến cháy tạo ra các chất mới."],
        ["Sữa để lâu bị chua là dấu hiệu của loại biến đổi nào?", "Biến đổi hóa học", ["Biến đổi vật lí", "Sự đông đặc", "Sự bay hơi"], "Biến đổi hóa học", "Quá trình làm sữa chua tạo ra các chất mới."],
        ["Bẻ nhỏ viên phấn nhưng không tạo chất mới là biến đổi gì?", "Biến đổi vật lí", ["Biến đổi hóa học", "Sự cháy", "Sự phân hủy"], "Biến đổi vật lí", "Phấn chỉ thay đổi kích thước, bản chất chất không đổi."]
      ],
      [
        ["Dung dịch acid làm giấy quỳ tím chuyển sang màu gì?", "Đỏ", ["Xanh", "Tím đậm", "Không màu"], "Acid và base", "Acid làm quỳ tím chuyển đỏ."],
        ["Dung dịch base làm giấy quỳ tím chuyển sang màu gì?", "Xanh", ["Đỏ", "Vàng", "Không màu"], "Acid và base", "Base làm quỳ tím chuyển xanh."],
        ["Dung dịch nào thường có tính acid?", "Giấm ăn", ["Nước xà phòng", "Nước vôi trong", "Dung dịch baking soda"], "Acid và base", "Giấm ăn chứa acid acetic."],
        ["Khi acid phản ứng với base, sản phẩm thường có gì?", "Muối và nước", ["Chỉ có oxygen", "Chỉ có kim loại", "Cát và nước"], "Acid và base", "Phản ứng trung hòa tạo muối và nước."],
        ["Chất nào có tính base trong các lựa chọn sau?", "Nước vôi trong", ["Nước chanh", "Giấm ăn", "Nước có gas"], "Acid và base", "Nước vôi trong có tính base."],
        ["Nước chanh có vị chua chủ yếu do chứa chất nào?", "Acid", ["Base", "Muối ăn", "Kim loại"], "Acid và base", "Nước chanh chứa acid citric."],
        ["Để nhận biết acid bằng quỳ tím, ta quan sát hiện tượng nào?", "Quỳ tím hóa đỏ", ["Quỳ tím hóa xanh", "Quỳ tím hóa đen", "Quỳ tím biến mất"], "Acid và base", "Acid làm quỳ tím chuyển đỏ."]
      ]
    ],
    sinh: [
      [
        ["Đơn vị cấu tạo cơ bản của cơ thể sống là gì?", "Tế bào", ["Mô", "Cơ quan", "Hệ cơ quan"], "Tế bào", "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống."],
        ["Bộ phận nào điều khiển nhiều hoạt động của tế bào?", "Nhân tế bào", ["Thành tế bào", "Không bào", "Màng ngoài cơ thể"], "Tế bào", "Nhân chứa vật chất di truyền và điều khiển hoạt động của tế bào."],
        ["Bộ phận nào bao bọc và kiểm soát trao đổi chất của tế bào?", "Màng tế bào", ["Lục lạp", "Nhân", "Rễ"], "Tế bào", "Màng tế bào bao bọc tế bào và điều hòa trao đổi chất."],
        ["Bào quan nào chứa diệp lục ở tế bào thực vật?", "Lục lạp", ["Nhân tế bào", "Màng tế bào", "Ti thể"], "Tế bào thực vật", "Lục lạp chứa diệp lục, tham gia quang hợp."],
        ["Cấu trúc nào thường có ở tế bào thực vật mà tế bào động vật không có?", "Thành tế bào", ["Màng tế bào", "Tế bào chất", "Nhân tế bào"], "Tế bào thực vật", "Tế bào thực vật có thành tế bào bên ngoài màng tế bào."],
        ["Tế bào chất nằm ở đâu?", "Giữa màng tế bào và nhân", ["Bên ngoài cơ thể", "Bên ngoài thành tế bào", "Chỉ trong nhân"], "Tế bào", "Tế bào chất nằm giữa màng tế bào và nhân."],
        ["Cơ thể đơn bào được cấu tạo từ bao nhiêu tế bào?", "Một tế bào", ["Hai tế bào", "Nhiều mô", "Nhiều cơ quan"], "Tổ chức cơ thể sống", "Cơ thể đơn bào chỉ gồm một tế bào."]
      ],
      [
        ["Cơ quan nào của cây hấp thụ nước và muối khoáng chủ yếu?", "Rễ", ["Lá", "Hoa", "Quả"], "Cơ quan thực vật", "Rễ hấp thụ nước và muối khoáng từ đất."],
        ["Cơ quan nào chủ yếu thực hiện quang hợp ở cây?", "Lá", ["Rễ", "Hoa", "Hạt"], "Quang hợp", "Lá chứa nhiều lục lạp nên là cơ quan quang hợp chủ yếu."],
        ["Mạch gỗ vận chuyển chủ yếu chất gì từ rễ lên lá?", "Nước và muối khoáng", ["Đường từ lá xuống rễ", "Oxygen vào đất", "Hạt phấn"], "Vận chuyển ở thực vật", "Mạch gỗ vận chuyển nước và muối khoáng từ rễ lên các bộ phận."],
        ["Bộ phận nào thường hút nước từ đất vào cây?", "Lông hút của rễ", ["Cánh hoa", "Lá non", "Quả"], "Cơ quan thực vật", "Lông hút làm tăng diện tích tiếp xúc với đất để hấp thụ nước."],
        ["Chất màu xanh giúp lá hấp thụ ánh sáng là gì?", "Diệp lục", ["Hemoglobin", "Tinh bột", "Cellulose"], "Quang hợp", "Diệp lục hấp thụ năng lượng ánh sáng cho quang hợp."],
        ["Hạt thường cần điều kiện nào để nảy mầm?", "Nước, không khí và nhiệt độ thích hợp", ["Không khí hoàn toàn khô", "Thiếu oxygen", "Ánh sáng mạnh trong mọi trường hợp"], "Sinh trưởng thực vật", "Hạt cần nước, oxygen và nhiệt độ phù hợp để nảy mầm."],
        ["Hoa thường có vai trò chính nào trong đời sống thực vật?", "Sinh sản", ["Hấp thụ nước từ đất", "Hô hấp thay rễ", "Hút muối khoáng"], "Cơ quan thực vật", "Hoa là cơ quan sinh sản của nhiều loài thực vật có hoa."]
      ],
      [
        ["Nguyên liệu cây thường sử dụng trong quang hợp là gì?", "Nước và carbon dioxide", ["Oxygen và đường", "Nitrogen và muối ăn", "Protein và oxygen"], "Quang hợp", "Cây dùng nước và carbon dioxide để tạo chất hữu cơ khi có ánh sáng."],
        ["Quang hợp giải phóng khí nào ra môi trường?", "Oxygen", ["Carbon dioxide", "Nitrogen", "Hydrogen"], "Quang hợp", "Oxygen được giải phóng trong quá trình quang hợp."],
        ["Quá trình nào giúp cơ thể giải phóng năng lượng từ chất dinh dưỡng?", "Hô hấp tế bào", ["Quang hợp", "Thoát hơi nước", "Thụ phấn"], "Hô hấp", "Hô hấp tế bào phân giải chất hữu cơ và giải phóng năng lượng."],
        ["Cây xanh quang hợp mạnh khi có điều kiện nào?", "Có ánh sáng phù hợp", ["Hoàn toàn không có ánh sáng", "Không có nước", "Không có carbon dioxide"], "Quang hợp", "Ánh sáng là nguồn năng lượng cho quá trình quang hợp."],
        ["Ban ngày, lá cây trao đổi khí carbon dioxide chủ yếu để làm gì?", "Quang hợp", ["Tạo đất", "Hấp thụ muối khoáng", "Thụ phấn"], "Quang hợp", "Carbon dioxide là nguyên liệu của quá trình quang hợp."],
        ["Quá trình thoát hơi nước ở cây diễn ra chủ yếu qua bộ phận nào?", "Lá", ["Rễ", "Hạt", "Hoa"], "Trao đổi chất ở thực vật", "Phần lớn nước thoát ra khỏi cây qua khí khổng ở lá."],
        ["Khí nào cần cho hô hấp của phần lớn sinh vật?", "Oxygen", ["Helium", "Hydrogen", "Neon"], "Hô hấp", "Phần lớn sinh vật sử dụng oxygen trong hô hấp hiếu khí."]
      ],
      [
        ["Trong chuỗi cỏ → thỏ → cáo, sinh vật sản xuất là gì?", "Cỏ", ["Thỏ", "Cáo", "Nấm"], "Sinh thái và chuỗi thức ăn", "Cỏ tự tạo chất hữu cơ nên là sinh vật sản xuất."],
        ["Trong chuỗi lúa → chuột → rắn, sinh vật tiêu thụ bậc đầu là gì?", "Chuột", ["Lúa", "Rắn", "Nấm phân hủy"], "Sinh thái và chuỗi thức ăn", "Chuột ăn lúa nên là sinh vật tiêu thụ bậc đầu."],
        ["Sinh vật nào thường phân giải xác sinh vật?", "Nấm và vi khuẩn", ["Cỏ và cây lúa", "Thỏ và hươu", "Đại bàng"], "Sinh thái", "Nấm và vi khuẩn phân giải chất hữu cơ từ xác sinh vật."],
        ["Nơi sống cùng các sinh vật và điều kiện môi trường tạo thành gì?", "Hệ sinh thái", ["Tế bào", "Mô", "Cơ quan"], "Sinh thái", "Hệ sinh thái gồm quần xã sinh vật và môi trường sống của chúng."],
        ["Nếu số lượng cây cỏ giảm mạnh, loài nào có thể bị ảnh hưởng trực tiếp trong chuỗi cỏ → thỏ → cáo?", "Thỏ", ["Cỏ", "Đá", "Ánh sáng"], "Sinh thái và chuỗi thức ăn", "Thỏ ăn cỏ nên nguồn thức ăn của thỏ giảm."],
        ["Sinh vật tự tạo chất hữu cơ thường được gọi là gì?", "Sinh vật sản xuất", ["Sinh vật tiêu thụ", "Sinh vật kí sinh", "Sinh vật phân giải"], "Sinh thái", "Sinh vật sản xuất, như cây xanh, tự tổng hợp chất hữu cơ."],
        ["Mũi tên trong chuỗi thức ăn thường chỉ chiều nào?", "Chiều truyền năng lượng", ["Chiều gió", "Chiều sinh vật di chuyển", "Chiều nước chảy"], "Sinh thái và chuỗi thức ăn", "Mũi tên chỉ chiều truyền vật chất và năng lượng từ thức ăn đến sinh vật ăn."]
      ],
      [
        ["Thông tin di truyền trong tế bào chủ yếu được lưu giữ ở đâu?", "DNA", ["Tinh bột", "Nước", "Chất béo"], "Di truyền", "DNA mang thông tin di truyền của cơ thể."],
        ["Ở phép lai Aa × Aa, xác suất kiểu gene aa là bao nhiêu?", "1/4", ["1/2", "3/4", "1"], "Di truyền Mendel", "Sơ đồ lai cho các kiểu gene AA, Aa, Aa, aa; aa chiếm 1/4."],
        ["Trong phép lai Aa × Aa, tỉ lệ kiểu gene thường gặp là gì?", "1 AA : 2 Aa : 1 aa", ["3 AA : 1 aa", "1 Aa : 1 aa", "2 AA : 2 aa"], "Di truyền Mendel", "Các tổ hợp là AA, Aa, Aa và aa."],
        ["Một gene là gì?", "Một đoạn DNA mang thông tin di truyền", ["Một loại tế bào máu", "Một cơ quan", "Một loại vitamin"], "Di truyền", "Gene là một đoạn DNA có chức năng mang thông tin di truyền."],
        ["Kiểu hình là gì?", "Đặc điểm biểu hiện của cơ thể", ["Chỉ là một phân tử DNA", "Một loại tế bào", "Một cơ quan sinh sản"], "Di truyền", "Kiểu hình là các đặc điểm quan sát được, hình thành do gene và môi trường."],
        ["Cặp allele của một gene thường phân li về các giao tử như thế nào?", "Mỗi giao tử nhận một allele", ["Mỗi giao tử luôn nhận cả hai allele", "Không allele nào vào giao tử", "Chỉ nhận allele trội"], "Di truyền Mendel", "Khi hình thành giao tử, hai allele phân li để mỗi giao tử nhận một allele."],
        ["Nhiễm sắc thể thường chứa phân tử nào mang gene?", "DNA", ["Tinh bột", "Cellulose", "Nước"], "Di truyền", "Nhiễm sắc thể chứa DNA, trên đó có các gene."]
      ]
    ]
  }[phanMon];

  if (!duLieu) return [];
  return duLieu.flatMap((nhom, nhomIndex) =>
    nhom.map(([question, correct, distractors, topic, explanation], cauIndex) =>
      taoCauTracNghiem(question, correct, distractors, topic, explanation, {
        challenge: (nhomIndex * 7 + cauIndex) % (khoi === "9" ? 4 : 5) === (khoi === "9" ? 3 : 4)
      })
    )
  );
}

function moRongThuThachKHTN(khoi, phanMon) {
  const questions = [];

  for (let index = 0; index < 16; index += 1) {
    const variant = index;
    let question;
    let answer;
    let wrong;
    let topic;
    let explanation;

    if (phanMon === "ly" && khoi === "6") {
      const density = 3 + variant;
      const initialVolume = 20 + variant * 5;
      const finalVolume = initialVolume + 10 + variant * 5;
      const mass = density * (finalVolume - initialVolume);
      question = `Thả một vật có khối lượng $${mass}$ g vào bình chia độ. Mực nước tăng từ $${initialVolume}$ cm³ lên $${finalVolume}$ cm³. Khối lượng riêng của vật là bao nhiêu?`;
      answer = `$${density}\\,\\text{g/cm}^3$`;
      wrong = [`$${mass}\\,\\text{g/cm}^3$`, `$${mass / finalVolume}\\,\\text{g/cm}^3$`, `$${finalVolume - initialVolume}\\,\\text{g/cm}^3$`];
      topic = "Thí nghiệm đo khối lượng riêng";
      explanation = `Thể tích vật là $${finalVolume}-${initialVolume}=${finalVolume - initialVolume}$ cm³. Khối lượng riêng bằng $${mass}:${finalVolume - initialVolume}=${density}\\,\\text{g/cm}^3$.`;
    } else if (phanMon === "ly" && khoi === "7") {
      const distanceFirst = 100 + variant * 20;
      const timeFirst = 20;
      const distanceSecond = 210 + variant * 30;
      const timeSecond = 30;
      const averageSpeed = Math.round((distanceFirst + distanceSecond) / (timeFirst + timeSecond) * 100) / 100;
      question = `Một bạn đi $${distanceFirst}$ m trong $${timeFirst}$ s, rồi đi tiếp $${distanceSecond}$ m trong $${timeSecond}$ s. Tốc độ trung bình của cả hành trình là bao nhiêu?`;
      answer = `$${averageSpeed}\\,\\text{m/s}$`;
      wrong = [`$${(distanceFirst / timeFirst + distanceSecond / timeSecond) / 2}\\,\\text{m/s}$`, `$${distanceFirst + distanceSecond}\\,\\text{m/s}$`, `$${(timeFirst + timeSecond) / (distanceFirst + distanceSecond)}\\,\\text{m/s}$`];
      topic = "Tốc độ trung bình nhiều chặng";
      explanation = `Tốc độ trung bình bằng tổng quãng đường chia tổng thời gian: $(${distanceFirst}+${distanceSecond}):(${timeFirst}+${timeSecond})=${averageSpeed}\\,\\text{m/s}$.`;
    } else if (phanMon === "ly" && khoi === "8") {
      const force = 120 + variant * 40;
      const areaCm2 = 20 + variant * 10;
      const pressure = Math.round(force / (areaCm2 / 10000) * 100) / 100;
      question = `Một vật tác dụng lực $${force}$ N lên mặt bàn có diện tích tiếp xúc $${areaCm2}$ cm². Áp suất tác dụng lên bàn bằng bao nhiêu Pa?`;
      answer = `$${pressure}$ Pa`;
      wrong = [`$${force / areaCm2}$ Pa`, `$${pressure / 10}$ Pa`, `$${pressure / 100}$ Pa`];
      topic = "Áp suất và đổi đơn vị";
      explanation = `Đổi diện tích: $${areaCm2}$ cm² = $${areaCm2 / 10000}$ m². Vậy $p=F/S=${force}:${areaCm2 / 10000}=${pressure}$ Pa.`;
    } else if (phanMon === "ly") {
      const resistanceOne = 2 + variant;
      const resistanceTwo = 3 + variant;
      const current = 2 + variant;
      const voltage = (resistanceOne + resistanceTwo) * current;
      question = `Hai điện trở $${resistanceOne}\\,\\Omega$ và $${resistanceTwo}\\,\\Omega$ mắc nối tiếp vào nguồn $${voltage}$ V. Cường độ dòng điện trong mạch bằng bao nhiêu?`;
      answer = `$${current}\\,\\text{A}$`;
      wrong = [`$${current - 1}\\,\\text{A}$`, `$${current + 1}\\,\\text{A}$`, `$${current + 2}\\,\\text{A}$`];
      topic = "Mạch điện nối tiếp";
      explanation = `Điện trở tương đương là $${resistanceOne}+${resistanceTwo}=${resistanceOne + resistanceTwo}\\,\\Omega$. Theo định luật Ohm, $I=U/R=${voltage}:${resistanceOne + resistanceTwo}=${current}$ A.`;
    } else if (phanMon === "hoa" && khoi === "6") {
      const totalMass = 80 + variant * 20;
      const saltMass = 12 + variant * 3;
      const waterMass = totalMass - saltMass;
      question = `Một hỗn hợp nước muối có khối lượng $${totalMass}$ g, trong đó có $${saltMass}$ g muối. Khối lượng nước trong hỗn hợp là bao nhiêu?`;
      answer = `$${waterMass}$ g`;
      wrong = [`$${totalMass + saltMass}$ g`, `$${saltMass}$ g`, `$${totalMass / saltMass}$ g`];
      topic = "Tách chất và hỗn hợp";
      explanation = `Khối lượng nước bằng khối lượng hỗn hợp trừ khối lượng muối: $${totalMass}-${saltMass}=${waterMass}$ g.`;
    } else if (phanMon === "hoa" && khoi === "7") {
      const solutionMass = 200 + variant * 100;
      const concentration = 10 + variant * 2;
      const soluteMass = solutionMass * concentration / 100;
      question = `Hòa tan $${soluteMass}$ g muối vào nước để thu được $${solutionMass}$ g dung dịch. Nồng độ phần trăm của dung dịch là bao nhiêu?`;
      answer = `$${concentration}\\%$`;
      wrong = [`$${concentration + 5}\\%$`, `$${concentration - 5}\\%$`, `$${100 - concentration}\\%$`];
      topic = "Nồng độ phần trăm";
      explanation = `$C\\% = \\frac{m_{chất tan}}{m_{dung dịch}}\\times100\\%=\\frac{${soluteMass}}{${solutionMass}}\\times100\\%=${concentration}\\%$.`;
    } else if (phanMon === "hoa" && khoi === "8") {
      const reactantOne = 12 + variant * 4;
      const reactantTwo = 8 + variant * 3;
      const productKnown = 15 + variant * 5;
      const productUnknown = reactantOne + reactantTwo - productKnown;
      question = `Phản ứng có tổng khối lượng chất tham gia là $${reactantOne + reactantTwo}$ g. Nếu một sản phẩm có khối lượng $${productKnown}$ g, sản phẩm còn lại có khối lượng bao nhiêu?`;
      answer = `$${productUnknown}$ g`;
      wrong = [`$${reactantOne + reactantTwo + productKnown}$ g`, `$${productKnown}$ g`, `$${reactantOne + reactantTwo - productKnown - 1}$ g`];
      topic = "Định luật bảo toàn khối lượng";
      explanation = `Theo định luật bảo toàn khối lượng, sản phẩm còn lại có khối lượng $${reactantOne + reactantTwo}-${productKnown}=${productUnknown}$ g.`;
    } else if (phanMon === "hoa") {
      const solutionMass = 250 + variant * 50;
      const concentration = 8 + variant * 4;
      const soluteMass = solutionMass * concentration / 100;
      question = `Cần bao nhiêu gam chất tan để pha $${solutionMass}$ g dung dịch nồng độ $${concentration}\\%$?`;
      answer = `$${soluteMass}$ g`;
      wrong = [`$${solutionMass - soluteMass}$ g`, `$${solutionMass / concentration}$ g`, `$${soluteMass + concentration}$ g`];
      topic = "Pha chế dung dịch";
      explanation = `Khối lượng chất tan là $m=(${concentration}\\times${solutionMass}):100=${soluteMass}$ g.`;
    } else if (phanMon === "sinh" && khoi === "6") {
      const energy = 1000 + variant * 500;
      const passedEnergy = energy / 10;
      question = `Trong một chuỗi thức ăn, sinh vật sản xuất tích lũy $${energy}$ đơn vị năng lượng. Nếu bậc tiêu thụ kế tiếp nhận khoảng 10%, năng lượng truyền lên bậc đó là bao nhiêu?`;
      answer = `$${passedEnergy}$ đơn vị`;
      wrong = [`$${energy - passedEnergy}$ đơn vị`, `$${energy / 2}$ đơn vị`, `$${energy * 10}$ đơn vị`];
      topic = "Dòng năng lượng trong chuỗi thức ăn";
      explanation = `Năng lượng truyền lên bậc kế tiếp khoảng $${energy}\\times10\\%=${passedEnergy}$ đơn vị.`;
    } else if (phanMon === "sinh" && khoi === "7") {
      const experiment = [
        ["cây được chiếu sáng", "cây đặt trong tối", "cây được chiếu sáng"],
        ["cây được tưới đủ nước", "cây không được tưới", "cây không được tưới"],
        ["lá có phủ vaseline", "lá không phủ vaseline", "lá có phủ vaseline"],
        ["cây có đủ carbon dioxide", "cây bị hạn chế carbon dioxide", "cây bị hạn chế carbon dioxide"]
      ][variant % 4];
      question = `Trong thí nghiệm số ${variant + 1}, để kiểm tra ảnh hưởng của một yếu tố đến quang hợp, nhóm học sinh so sánh ${experiment[0]} với ${experiment[1]}. Nhóm cần giữ những điều kiện khác như thế nào?`;
      answer = "Giữ các điều kiện khác giống nhau";
      wrong = ["Thay đổi đồng thời mọi điều kiện", "Không cần ghi nhận điều kiện ban đầu", "Chỉ đo chiều cao cây một lần"];
      topic = "Thiết kế thí nghiệm sinh học";
      explanation = "Muốn xác định ảnh hưởng của một yếu tố, cần giữ các yếu tố còn lại không đổi để phép so sánh công bằng.";
    } else if (phanMon === "sinh" && khoi === "8") {
      const heartRate = 72 + variant * 8;
      const beats = heartRate * 5;
      question = `Nhịp tim lúc nghỉ của một bạn là $${heartRate}$ lần/phút. Trong 5 phút, tim đập khoảng bao nhiêu lần nếu nhịp tim giữ nguyên?`;
      answer = `$${beats}$ lần`;
      wrong = [`$${heartRate + 5}$ lần`, `$${heartRate / 5}$ lần`, `$${beats + 5}$ lần`];
      topic = "Tuần hoàn và xử lý số liệu";
      explanation = `Trong 5 phút, tim đập khoảng $${heartRate}\\times5=${beats}$ lần.`;
    } else {
      const allele = String.fromCharCode(65 + variant);
      const genotypeDominant = `${allele}${allele.toLowerCase()}`;
      const recessiveGenotype = `${allele.toLowerCase()}${allele.toLowerCase()}`;
      question = `Ở một phép lai một cặp tính trạng, alen trội là $${allele}$. Phép lai $${genotypeDominant}\\times${recessiveGenotype}$ tạo đời con có tỉ lệ kiểu hình trội bao nhiêu?`;
      answer = "$50\\%$";
      wrong = ["$25\\%$", "$75\\%$", "$100\\%$"];
      topic = "Di truyền một cặp tính trạng";
      explanation = `Phép lai dị hợp $${genotypeDominant}\\times${recessiveGenotype}$ cho một nửa số con nhận alen trội, nên tỉ lệ kiểu hình trội là 50%.`;
    }

    questions.push({
      ...taoCauTracNghiem(question, answer, wrong, topic, explanation, { challenge: true }),
      phanMon
    });
  }

  return questions;
}

function moRongThuThachTiengAnh(khoi, skill) {
  const questions = [];
  const gradeQuestions = {
    "6": [
      ["Look! The children ___ in the school yard.", "are playing", ["play", "played", "plays"], "Hiện tại tiếp diễn", "Look! cho biết hành động đang diễn ra; dùng are + V-ing."],
      ["There isn't ___ milk left, but there are ___ apples.", "much / some", ["many / any", "some / much", "a few / any"], "Lượng từ", "Milk là danh từ không đếm được; câu khẳng định dùng some với apples."],
      ["We ___ our grandparents last weekend.", "visited", ["visit", "will visit", "are visiting"], "Quá khứ đơn", "Last weekend là dấu hiệu của quá khứ đơn."],
      ["This exercise is ___ than the one we did yesterday.", "more difficult", ["difficultest", "most difficult", "the more difficult"], "So sánh hơn", "Tính từ dài difficult dùng more difficult trong so sánh hơn."]
    ],
    "7": [
      ["I ___ dinner when the phone rang.", "was having", ["have", "am having", "had"], "Quá khứ tiếp diễn", "Hành động đang diễn ra bị một hành động khác xen vào: was/were + V-ing."],
      ["You ___ bring your library book back by Friday.", "should", ["shouldn't to", "mustn't to", "would"], "Động từ khuyết thiếu", "Should + động từ nguyên mẫu dùng để đưa ra lời khuyên."],
      ["If we leave now, we ___ the early bus.", "will catch", ["caught", "would catch", "catching"], "Câu điều kiện loại 1", "Mệnh đề if dùng hiện tại đơn, mệnh đề chính dùng will + động từ nguyên mẫu."],
      ["There are ___ students in the hall today than yesterday.", "fewer", ["less", "little", "few"], "So sánh lượng từ", "Students là danh từ đếm được số nhiều nên dùng fewer."]
    ],
    "8": [
      ["She ___ this book twice, so she knows the ending.", "has read", ["read", "is reading", "was read"], "Hiện tại hoàn thành", "Trải nghiệm có liên hệ hiện tại dùng has/have + quá khứ phân từ."],
      ["The old station ___ into a community library last year.", "was turned", ["turned", "is turning", "has turn"], "Câu bị động quá khứ", "Câu bị động quá khứ đơn có dạng was/were + quá khứ phân từ."],
      ["The students ___ have finished the project can present first.", "who", ["where", "which", "whose"], "Mệnh đề quan hệ", "Who thay cho người và làm chủ ngữ trong mệnh đề quan hệ."],
      ["If Mai ___ harder, she will improve her results.", "studies", ["will study", "studied", "would study"], "Câu điều kiện loại 1", "Sau if trong câu điều kiện loại 1 dùng hiện tại đơn."]
    ],
    "9": [
      ["If I ___ in your position, I would talk to the teacher.", "were", ["am", "will be", "would be"], "Câu điều kiện loại 2", "Câu điều kiện loại 2 dùng If + quá khứ đơn, would + động từ nguyên mẫu."],
      ["Nam said, “I am tired.” → Nam said that he ___ tired.", "was", ["is", "will be", "has been"], "Câu tường thuật", "Khi tường thuật lời nói ở quá khứ, am thường lùi thì thành was."],
      ["The final results ___ on the school website tomorrow.", "will be posted", ["will post", "are posting", "posted"], "Câu bị động tương lai", "Tương lai đơn bị động có dạng will be + quá khứ phân từ."],
      ["Although it was raining, the team ___ the match.", "continued", ["continue", "continuing", "was continued"], "Liên từ tương phản", "Although nối hai ý tương phản; mệnh đề chính vẫn cần động từ chia thì."]
    ]
  };
  const rows = gradeQuestions[khoi];

  if (skill === "doc") {
    rows.forEach(([question, correct, wrong, topic, explanation]) => {
      questions.push(taoCauTracNghiem(question, correct, wrong, topic, explanation, { skill, challenge: true }));
    });
  } else if (skill === "nghe") {
    const audioQuestions = [
      ["What will Mia do first after school?", "She will return a library book.", ["She will meet her cousin.", "She will buy a notebook.", "She will go to the sports centre."], "Mia has basketball practice at four, so she will return her library book on the way there. Her cousin is meeting her at the centre later."],
      ["Why was Tom late for the meeting?", "His bus was delayed by roadworks.", ["He forgot the meeting time.", "He had to help a neighbour.", "He went to the wrong building."], "Tom left home early, but the bus stopped for roadworks. He called the group as soon as he realized he would be late."],
      ["What does Anna decide to borrow?", "A science magazine.", ["A history book.", "A dictionary.", "A map of the city."], "Anna came to the library for a history book, but it was already checked out. She chose a science magazine to use for her project instead."],
      ["What should students bring on the trip?", "A reusable water bottle.", ["A packed lunch.", "A camera.", "A printed map."], "Lunch and transport are provided for the trip. Students should bring a reusable water bottle and wear comfortable shoes."]
    ];
    audioQuestions.forEach(([question, correct, wrong, listenText], index) => {
      questions.push(taoCauTracNghiem(
        question, correct, wrong, ["Nghe hiểu ý chính", "Nghe suy luận", "Nghe thông tin chi tiết", "Nghe thông báo"][index],
        `Nghe toàn bộ thông tin để phân biệt việc dự định ban đầu với quyết định hoặc lý do cuối cùng.`,
        { skill, listenText, challenge: true }
      ));
    });
  } else {
    const speakingSamples = {
      "6": [
        "Although it was raining, we walked to the library after school.",
        "My brother usually finishes his homework before he plays football.",
        "The blue bag is heavier than the green one, but it is cheaper.",
        "We visited our grandparents and helped them in the garden last Sunday."
      ],
      "7": [
        "While I was reading, my sister was preparing dinner in the kitchen.",
        "If we leave early tomorrow, we will have time to visit the science museum.",
        "You should bring a reusable bottle because the weather may be hot.",
        "The students who joined the team practised together after school."
      ],
      "8": [
        "Although it was raining, we continued walking because the museum was nearby.",
        "She has already finished the project that her science teacher assigned.",
        "If the weather is clear tomorrow, our class will visit the old village.",
        "The community library was opened after the railway station closed."
      ],
      "9": [
        "If I had more time this weekend, I would help my brother with his science project.",
        "Nam said that he had already sent the report to his teacher.",
        "The book that our teacher recommended has become one of my favourite stories.",
        "By the time we arrived at the station, the train had left."
      ]
    }[khoi];
    speakingSamples.forEach((speaking, index) => {
      questions.push({
        question: "Nghe câu mẫu rồi đọc lại chính xác, chú ý nối âm và nhịp câu:",
        options: [speaking, "Try again.", "Speak clearly.", "Well done."],
        answer: 0,
        topic: ["Câu phức và nhịp điệu", "Câu điều kiện", "Mệnh đề quan hệ", "Quá khứ hoàn thành"][index],
        skill,
        speaking,
        explanation: "Đọc trọn câu, chú ý trọng âm từ và ngắt nhịp ở mệnh đề phụ.",
        challenge: true
      });
    });
  }

  return questions;
}

function moRongTiengAnh(skill) {
  const questions = [];
  const names = ["Mia", "Tom", "Anna", "Ben", "Lily", "Jack", "Emma"];
  if (skill === "doc") {
    const subjects = ["My brother", "Our teacher", "Lily", "The students", "My cousin", "Their coach", "Anna"];
    const verbs = [
      ["walk", "walks"], ["study", "studies"], ["watch", "watches"], ["carry", "carries"],
      ["play", "plays"], ["read", "reads"], ["help", "helps"]
    ];
    const adjectives = [["small", "smaller"], ["fast", "faster"], ["quiet", "quieter"], ["bright", "brighter"], ["kind", "kinder"], ["tall", "taller"], ["cold", "colder"]];
    const places = ["the library", "the school garden", "the sports hall", "the museum", "the music room", "the bookshop", "the station"];
    for (let index = 0; index < 35; index += 1) {
      const group = Math.floor(index / 7);
      const variant = index % 7;
      let question;
      let correct;
      let wrong;
      let topic;
      let explanation;
      if (group === 0) {
        const [base, thirdPerson] = verbs[variant];
        const subject = subjects[variant];
        const plural = variant === 3;
        correct = plural ? base : thirdPerson;
        question = `Chọn dạng đúng: ${subject} ___ to school every day.`;
        wrong = [plural ? thirdPerson : base, `${base}ing`, `${base}ed`];
        topic = "Hiện tại đơn";
        explanation = plural
          ? "The students là chủ ngữ số nhiều nên dùng động từ nguyên mẫu."
          : "Chủ ngữ ngôi thứ ba số ít ở hiện tại đơn nên động từ thêm -s/-es.";
      } else if (group === 1) {
        const subject = names[variant];
        const place = places[variant];
        correct = "visited";
        question = `${subject} ___ ${place} last Sunday.`;
        wrong = ["visit", "visits", "visiting"];
        topic = "Quá khứ đơn";
        explanation = "Last Sunday chỉ thời điểm quá khứ nên dùng động từ quá khứ visited.";
      } else if (group === 2) {
        const [base, comparative] = adjectives[variant];
        correct = comparative;
        question = `A bike is ___ than a car in a traffic jam. (${base})`;
        wrong = [base, `the ${comparative}`, `more ${base}`];
        topic = "So sánh hơn";
        explanation = `So sánh hơn của tính từ ngắn ${base} là ${comparative}.`;
      } else if (group === 3) {
        const name = names[variant];
        correct = "will visit";
        question = `${name} ___ her grandparents next weekend.`;
        wrong = ["visits", "visited", "is visit"];
        topic = "Tương lai đơn";
        explanation = "Next weekend nói về tương lai; dùng will + động từ nguyên mẫu.";
      } else {
        const times = ["7:00", "8:15", "9:30", "10:45", "1:00", "2:15", "4:30"];
        correct = "at";
        question = `Our English lesson starts ___ ${times[variant]}.`;
        wrong = ["in", "on", "for"];
        topic = "Giới từ thời gian";
        explanation = "Dùng at trước giờ cụ thể.";
      }
      questions.push(taoCauTracNghiem(question, correct, wrong, topic, explanation, {
        skill,
        challenge: index % 5 === 4
      }));
    }
  } else if (skill === "nghe") {
    const destinations = ["the library", "the museum", "the sports centre", "the city park", "the bookshop"];
    const companions = ["her cousin", "his sister", "their classmates", "her father", "his best friend", "their teacher", "his brother"];
    for (let index = 0; index < 35; index += 1) {
      const name = names[index % names.length];
      const destination = destinations[Math.floor(index / names.length) % destinations.length];
      const companion = companions[index % companions.length];
      const options = [destination, ...destinations.filter((place) => place !== destination).slice(0, 3)];
      const question = `Nghe và chọn nơi ${name} sẽ đến vào sáng thứ Bảy.`;
      const listenText = `On Saturday morning, ${name} is going to ${destination} with ${companion}.`;
      questions.push(taoCauTracNghiem(question, destination, options.slice(1), "Nghe hiểu địa điểm", `Bài nghe cho biết ${name} sẽ đến ${destination}.`, {
        skill,
        listenText,
        challenge: index % 5 === 4
      }));
    }
  } else {
    const activities = ["playing badminton", "reading a story", "practising the piano", "visiting the museum", "helping my family", "learning English", "riding a bicycle"];
    const times = ["after school", "on Saturday", "in the evening", "with my friends", "every weekend"];
    for (let index = 0; index < 35; index += 1) {
      const activity = activities[index % activities.length];
      const time = times[Math.floor(index / activities.length) % times.length];
      const speaking = `I enjoy ${activity} ${time}.`;
      questions.push({
        question: "Đọc câu mẫu sau thành tiếng:",
        options: [speaking, "Try again.", "Speak clearly.", "Well done."],
        answer: 0,
        topic: "Luyện nói câu hoàn chỉnh",
        skill,
        speaking,
        explanation: "Đọc lại câu mẫu cho rõ để cải thiện độ chính xác.",
        challenge: index % 5 === 4
      });
    }
  }
  return questions;
}

function moRongNganHang() {
  ["6", "7", "8", "9"].forEach((khoi) => {
    const bank = nganHangCauHoi[khoi];
    if (bank.toan.length < 35) bank.toan.push(...moRongToan(khoi).slice(0, 35 - bank.toan.length));
    if (bank.khtn.length < 35) bank.khtn.push(...moRongKHTN(khoi).slice(0, 35 - bank.khtn.length));
    ["doc", "nghe", "noi"].forEach((skill) => {
      const skillBank = bank.anh.filter((question) => question.skill === skill);
      if (skillBank.length < 35) {
        bank.anh.push(...moRongTiengAnh(skill).slice(0, 35 - skillBank.length));
      }
    });
  });
}

const tenMon = { toan: "Toán", khtn: "Khoa học tự nhiên", anh: "Tiếng Anh" };
const tenPhanMonKHTN = { ly: "Vật lý", hoa: "Hóa học", sinh: "Sinh học" };
const dangDe = {
  "15p": { ten: "Đề 15 phút", giay: 15 * 60 },
  giuaki: { ten: "Đề giữa kỳ", giay: 45 * 60 },
  cuoiki: { ten: "Đề cuối kỳ", giay: 60 * 60 },
  hsg: { ten: "Luyện nâng cao / HSG tham khảo", giay: 90 * 60 }
};
const keyNganHang = "studymap-question-bank";
const keyBaiLam = "studymap-attempts";
const keyBaiLamTaiKhoan = "studymap-attempts-user";
const soCauMoiDang = { "15p": 10, giuaki: 20, cuoiki: 25, hsg: 12 };
const soCauDienDapAnMoiDang = { "15p": 2, giuaki: 6, cuoiki: 8, hsg: 5 };

let monDangChon = "";
let khoiDangChon = "6";
let dangDeDangChon = "15p";
let kyNangAnh = "";
let phanMonKHTNDangChon = "";
let tenHocSinh = "";
let nganHangMonDangChon = [];
let boCauHoiHienTai = [];
let cauHoiHienTai = 0;
let dapAnDaChon = [];
let diemTungCau = [];
let ghiChuTungCau = [];
let loiDocTungCau = [];
let daNgheMauLuyenNoi = false;
let daTraLoiCau = false;
let daNopBai = false;
let dangBoTro = false;
let dangLuyenTheoLoTrinh = false;
let bieuTuongKhenTruoc = "";
let thoiGianConLai = 0;
let boDemThoiGian = null;
let nhanDangGiongNoi = null;
let cauHoiDangSua = -1;
let tiengAnMuted = false;
let boPhatAmAnMung = null;
let firebaseAuth = null;
let firebaseDb = null;
let taiKhoanDangNhap = null;
let baiLamCaNhan = [];
const trangChu = document.getElementById("trang-chu");
const trangLamBai = document.getElementById("trang-lam-bai");
const trangTiengAnh = document.getElementById("trang-tieng-anh");
const trangKHTN = document.getElementById("trang-khtn");
const danhSachDapAn = document.getElementById("danh-sach-dap-an");
const phanHoiCau = document.getElementById("phan-hoi-cau");
const phanHoiNoi = document.getElementById("phan-hoi-noi");
const ghiChuAudio = document.getElementById("ghi-chu-audio");
const nutNgheMau = document.getElementById("nut-nghe-mau");

function hienTrang(trang) {
  [trangChu, trangTiengAnh, trangKHTN, trangLamBai].forEach((phan) => phan.classList.add("an"));
  trang.classList.remove("an");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function docLuuTru(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.error(`Không đọc được dữ liệu StudyMap (${key}):`, error);
    const message = error instanceof Error ? error.message : String(error);
    hienTrangThaiLuu(`Không đọc được dữ liệu đã lưu (${message}). Hãy kiểm tra cài đặt/quyền lưu của trình duyệt.`, true);
    return fallback;
  }
}

function ghiLuuTru(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    hienTrangThaiLuu("Đã lưu dữ liệu cục bộ trên trình duyệt này.");
    return true;
  } catch (error) {
    console.error(`Không lưu được dữ liệu StudyMap (${key}):`, error);
    const message = error instanceof Error ? error.message : String(error);
    hienTrangThaiLuu(`Lưu thất bại (${message}). Hãy mở bằng cùng trình duyệt, cho phép lưu dữ liệu trang; nếu vẫn lỗi, xuất bản sao lưu JSON.`, true);
    window.alert("Không lưu được dữ liệu vào trình duyệt. Lỗi: " + message);
    return false;
  }
}

function hienTrangThaiLuu(message, isError = false) {
  const status = document.getElementById("trang-thai-luu");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("luu-that-bai", isError);
}

function khoaBaiLamHienTai() {
  return taiKhoanDangNhap
    ? `${keyBaiLamTaiKhoan}:${taiKhoanDangNhap.uid}`
    : keyBaiLam;
}

function capNhatTrangThaiTaiKhoan(message, isError = false) {
  const status = document.getElementById("trang-thai-tai-khoan");
  status.textContent = message;
  status.classList.toggle("luu-that-bai", isError);
}

function laFirebaseConfigHopLe(config) {
  return config && typeof config.apiKey === "string" && config.apiKey
    && !config.apiKey.startsWith("DAN_")
    && typeof config.projectId === "string" && config.projectId
    && !config.projectId.startsWith("TEN_")
    && typeof config.appId === "string" && config.appId
    && !config.appId.startsWith("DAN_")
    && typeof config.authDomain === "string" && config.authDomain
    && !config.authDomain.startsWith("TEN_");
}

async function dangNhapGoogle() {
  if (!firebaseAuth) {
    capNhatTrangThaiTaiKhoan(
      "Chưa kết nối Firebase. Điền cấu hình dự án trong firebase-config.js, bật Google ở Authentication và triển khai Firestore Rules.",
      true
    );
    return;
  }

  try {
    await firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  } catch (error) {
    console.error("Không đăng nhập được bằng Google:", error);
    capNhatTrangThaiTaiKhoan(`Đăng nhập thất bại: ${error.message}`, true);
  }
}

async function dangXuatGoogle() {
  if (!firebaseAuth) {
    capNhatTrangThaiTaiKhoan("Chưa kết nối Firebase nên không thể đăng xuất.", true);
    return;
  }

  try {
    await firebaseAuth.signOut();
  } catch (error) {
    console.error("Không đăng xuất được tài khoản StudyMap:", error);
    capNhatTrangThaiTaiKhoan(`Không đăng xuất được: ${error.message}`, true);
  }
}

async function capNhatHoSoFirebase(user, khoi) {
  if (!firebaseDb || !user || !["6", "7", "8", "9"].includes(khoi)) return;
  try {
    await firebaseDb.collection("users").doc(user.uid).set({
      khoi,
      capNhatLuc: new Date().toISOString()
    }, { merge: true });
  } catch (error) {
    console.error("Không lưu được hồ sơ học tập:", error);
    capNhatTrangThaiTaiKhoan(`Không lưu được hồ sơ: ${error.message}`, true);
  }
}

async function napTienDoFirebase(user) {
  taiKhoanDangNhap = user;
  tenHocSinh = user?.displayName || "Học sinh";
  const loginButton = document.getElementById("nut-dang-nhap-google");
  const logoutButton = document.getElementById("nut-dang-xuat-google");
  const roadmap = document.getElementById("noi-dung-lo-trinh");
  loginButton.classList.toggle("an", Boolean(user));
  logoutButton.classList.toggle("an", !user);
  roadmap.replaceChildren();

  if (!user) {
    baiLamCaNhan = [];
    capNhatTrangThaiTaiKhoan("Đăng nhập Google để lưu tiến độ riêng và đồng bộ giữa các thiết bị.");
    veLoTrinhCaNhan([]);
    return;
  }

  capNhatTrangThaiTaiKhoan(`Đang tải lộ trình cho ${user.displayName || user.email || "tài khoản của bạn"}…`);
  try {
    const profile = await firebaseDb.collection("users").doc(user.uid).get();
    const savedGrade = profile.exists ? profile.data().khoi : "";
    if (["6", "7", "8", "9"].includes(savedGrade)) {
      document.getElementById("khoi-hoc").value = savedGrade;
    }
    const snapshots = await firebaseDb.collection("users").doc(user.uid)
      .collection("attempts").orderBy("thoiGian", "desc").limit(500).get();
    baiLamCaNhan = snapshots.docs.map((snapshot) => snapshot.data());
    ghiLuuTru(khoaBaiLamHienTai(), baiLamCaNhan);
    capNhatTrangThaiTaiKhoan(`Đã đăng nhập: ${user.displayName || user.email}. Tiến độ đang đồng bộ riêng cho tài khoản này.`);
    veLoTrinhCaNhan(baiLamCaNhan);
  } catch (error) {
    console.error("Không tải được lộ trình cá nhân từ Firebase:", error);
    baiLamCaNhan = docLuuTru(khoaBaiLamHienTai(), []);
    capNhatTrangThaiTaiKhoan(`Không tải được dữ liệu đám mây: ${error.message}. Kiểm tra Firestore Rules; tiến độ cục bộ vẫn được giữ.`, true);
    veLoTrinhCaNhan(Array.isArray(baiLamCaNhan) ? baiLamCaNhan : []);
  }
}

async function khoiTaoFirebase() {
  const config = window.studyMapFirebaseConfig;
  if (!laFirebaseConfigHopLe(config) || !window.firebase?.initializeApp
    || !window.firebase.auth || !window.firebase.firestore) {
    capNhatTrangThaiTaiKhoan("Lộ trình vẫn hoạt động cục bộ. Để đăng nhập và đồng bộ, cần kết nối Firebase trước.");
    veLoTrinhCaNhan(docLuuTru(keyBaiLam, []));
    return;
  }

  try {
    const app = window.firebase.apps.length ? window.firebase.app() : window.firebase.initializeApp(config);
    firebaseAuth = app.auth();
    firebaseDb = app.firestore();
    const loginButton = document.getElementById("nut-dang-nhap-google");
    loginButton.disabled = true;
    await firebaseAuth.setPersistence(window.firebase.auth.Auth.Persistence.LOCAL);
    firebaseAuth.onAuthStateChanged((user) => {
      void napTienDoFirebase(user);
    }, (error) => {
      console.error("Không xác định được phiên đăng nhập:", error);
      capNhatTrangThaiTaiKhoan(`Không kiểm tra được đăng nhập: ${error.message}`, true);
    });
    loginButton.disabled = false;
  } catch (error) {
    console.error("Không khởi tạo được Firebase:", error);
    capNhatTrangThaiTaiKhoan(`Không khởi tạo được Firebase: ${error.message}`, true);
  }
}

function veLoTrinhCaNhan(attempts) {
  const container = document.getElementById("noi-dung-lo-trinh");
  container.replaceChildren();
  const grade = document.getElementById("khoi-hoc").value;
  const gradeAttempts = attempts.filter((attempt) => String(attempt.khoi) === grade);
  if (gradeAttempts.length === 0) {
    const empty = document.createElement("p");
    empty.className = "lo-trinh-trong";
    empty.textContent = taiKhoanDangNhap
      ? `Chưa có kết quả lớp ${grade}. Làm một đề, mình sẽ dựa vào chủ đề cần luyện để xếp lộ trình cho bạn.`
      : "Chọn lớp và làm bài luyện tập; kết quả trên trình duyệt này sẽ tạo lộ trình gợi ý.";
    container.append(empty);
    return;
  }

  const average = gradeAttempts.reduce((sum, attempt) => sum + (Number(attempt.diem) || 0), 0) / gradeAttempts.length;
  const summary = document.createElement("div");
  summary.className = "lo-trinh-tom-tat";
  [
    [`${gradeAttempts.length}`, "lượt luyện"],
    [`${average.toFixed(1)}/10`, "điểm trung bình"],
    [new Date(gradeAttempts[0].thoiGian).toLocaleDateString("vi-VN"), "lần gần nhất"]
  ].forEach(([value, label]) => {
    const item = document.createElement("div");
    item.className = "lo-trinh-so";
    const strong = document.createElement("strong");
    strong.textContent = value;
    const caption = document.createElement("span");
    caption.textContent = label;
    item.append(strong, caption);
    summary.append(item);
  });
  container.append(summary);

  const topicStats = new Map();
  gradeAttempts.forEach((attempt) => {
    (attempt.phanTich || []).forEach((result) => {
      const skillOrSubject = attempt.mon === "Khoa học tự nhiên"
        ? attempt.phanMonKHTN
        : attempt.mon === "Tiếng Anh" ? attempt.kyNang : "";
      const key = [attempt.mon, skillOrSubject, result.topic].join("|");
      const item = topicStats.get(key) || {
        mon: attempt.mon,
        skillOrSubject,
        topic: result.topic,
        dung: 0,
        tong: 0
      };
      item.dung += Number(result.dung) || 0;
      item.tong += Number(result.tong) || 0;
      topicStats.set(key, item);
    });
  });
  const priorities = [...topicStats.values()]
    .filter((item) => item.tong > 0)
    .sort((first, second) =>
      (first.dung / first.tong) - (second.dung / second.tong)
      || second.tong - first.tong
    ).slice(0, 3);
  const title = document.createElement("h4");
  title.textContent = "Mục tiêu tiếp theo";
  container.append(title);
  priorities.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "lo-trinh-muc-tieu";
    const strong = document.createElement("strong");
    const rate = Math.round((item.dung / item.tong) * 100);
    strong.textContent = `${index + 1}. ${item.topic} · ${rate}%`;
    const description = document.createElement("p");
    description.textContent = `${item.mon}${item.skillOrSubject ? ` · ${item.skillOrSubject}` : ""} — ${item.dung}/${item.tong} câu/ý đúng. Ưu tiên luyện lại chủ đề này.`;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nut-phu";
    button.textContent = `Luyện lại ${item.topic} →`;
    button.addEventListener("click", () => batDauLoTrinh(item, grade));
    card.append(strong, description, button);
    container.append(card);
  });
  if (!priorities.length) {
    const message = document.createElement("p");
    message.className = "lo-trinh-trong";
    message.textContent = "Chưa đủ dữ liệu theo chủ đề; tiếp tục làm thêm đề để cá nhân hóa mục tiêu.";
    container.append(message);
  }
}

function batDauLoTrinh(mucTieu, khoi) {
  document.getElementById("khoi-hoc").value = khoi;
  document.getElementById("dang-de").value = "15p";
  const mon = mucTieu.mon === "Toán" ? "toan"
    : mucTieu.mon === "Tiếng Anh" ? "anh" : "khtn";
  const phanMon = mon === "khtn"
    ? Object.keys(tenPhanMonKHTN).find((key) => tenPhanMonKHTN[key] === mucTieu.skillOrSubject)
    : mon === "anh" ? mucTieu.skillOrSubject : "";
  if (mon === "khtn" && !phanMon) {
    capNhatTrangThaiTaiKhoan(`Chưa xác định được phân môn cho chủ đề ${mucTieu.topic}.`, true);
    return;
  }

  khoiDangChon = khoi;
  dangDeDangChon = "15p";
  monDangChon = mon;
  kyNangAnh = mon === "anh" ? phanMon : "";
  phanMonKHTNDangChon = mon === "khtn" ? phanMon : "";
  dangBoTro = true;
  dangLuyenTheoLoTrinh = true;
  let bank;
  if (mon === "toan") {
    bank = [...nganHangCauHoi[khoi].toan, ...moRongToan(khoi), ...moRongThuThachToan(khoi)];
  } else if (mon === "khtn") {
    const original = nganHangCauHoi[khoi].khtn.filter((item) => phanMonCauHoiKHTN(item) === phanMon);
    const supplement = phanMon === "ly" ? moRongKHTN(khoi) : moRongKHTNBoMon(khoi, phanMon);
    bank = [...original, ...supplement, ...moRongThuThachKHTN(khoi, phanMon)];
  } else {
    bank = [
      ...nganHangCauHoi[khoi].anh.filter((item) => item.skill === kyNangAnh),
      ...moRongTiengAnh(kyNangAnh),
      ...moRongThuThachTiengAnh(khoi, kyNangAnh)
    ];
  }
  const topicQuestions = [...new Map(bank
    .filter((item) => item.topic === mucTieu.topic)
    .map((item) => [item.question, item])).values()];
  if (!topicQuestions.length) {
    dangBoTro = false;
    dangLuyenTheoLoTrinh = false;
    capNhatTrangThaiTaiKhoan(`Chưa có câu luyện bổ sung cho chủ đề ${mucTieu.topic}; hãy chọn đề môn học để luyện tiếp.`, true);
    return;
  }

  nganHangMonDangChon = bank;
  boCauHoiHienTai = taoDeHonHop(xaoTron(topicQuestions).slice(0, 30), topicQuestions.length, Math.min(6, topicQuestions.length));
  const tenMonHienThi = mon === "khtn"
    ? `KHTN · ${tenPhanMonKHTN[phanMon]}`
    : tenMon[mon];
  khoiTaoBaiThi(`${tenMonHienThi} · Lớp ${khoi} · Lộ trình: ${mucTieu.topic}`);
}

function laCauHoiHopLe(cauHoi) {
  return cauHoi && typeof cauHoi.question === "string" && cauHoi.question.trim()
    && Array.isArray(cauHoi.options) && cauHoi.options.length === 4
    && cauHoi.options.every((option) => typeof option === "string" && option.trim())
    && Number.isInteger(cauHoi.answer) && cauHoi.answer >= 0 && cauHoi.answer < 4
    && typeof cauHoi.topic === "string" && cauHoi.topic.trim()
    && typeof cauHoi.explanation === "string"
    && (!cauHoi.skill || ["doc", "nghe", "noi"].includes(cauHoi.skill))
    && (cauHoi.skill !== "nghe" || Boolean(cauHoi.listenText))
    && (cauHoi.skill !== "noi" || Boolean(cauHoi.speaking));
}

function napNganHangDaLuu() {
  const duLieu = docLuuTru(keyNganHang, null);
  if (!duLieu || typeof duLieu !== "object") return 0;
  let soCauNap = 0;
  Object.keys(nganHangCauHoi).forEach((khoi) => {
    ["toan", "khtn", "anh"].forEach((mon) => {
      const danhSach = duLieu[khoi]?.[mon];
      if (Array.isArray(danhSach) && danhSach.every(laCauHoiHopLe)) {
        nganHangCauHoi[khoi][mon] = danhSach;
        soCauNap += danhSach.length;
      } else if (danhSach !== undefined) {
        console.error(`Bỏ qua ngân hàng câu hỏi không hợp lệ: lớp ${khoi}, môn ${mon}.`);
      }
    });
  });
  if (soCauNap) hienTrangThaiLuu(`Đã nạp ${soCauNap} câu hỏi đã lưu trên trình duyệt này.`);
  return duLieu._studyMapVersion === 2 ? 2 : 1;
}

function xaoTron(danhSach) {
  const result = [...danhSach];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [result[index], result[swap]] = [result[swap], result[index]];
  }
  return result;
}

function luuNganHang() {
  return ghiLuuTru(keyNganHang, { _studyMapVersion: 2, ...nganHangCauHoi });
}

function hienCongThuc(vung) {
  const walker = document.createTreeWalker(vung, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    if (walker.currentNode.nodeValue.includes("$") || walker.currentNode.nodeValue.includes("\\(")) {
      nodes.push(walker.currentNode);
    }
  }
  nodes.forEach((node) => {
    const source = node.nodeValue;
    const parts = source.split(/(\$[^$]+\$|\\\([\s\S]*?\\\))/g);
    if (parts.length === 1) return;
    const fragment = document.createDocumentFragment();
    parts.forEach((part) => {
      if (!part) return;
      const isDelimited = (part.startsWith("$") && part.endsWith("$"))
        || (part.startsWith("\\(") && part.endsWith("\\)"));
      if (!isDelimited) {
        fragment.append(document.createTextNode(part));
        return;
      }
      const latex = part.startsWith("$") ? part.slice(1, -1) : part.slice(2, -2);
      fragment.append(taoMathML(latex));
    });
    node.parentNode.replaceChild(fragment, node);
  });
}

function taoMathML(latex) {
  const namespace = "http://www.w3.org/1998/Math/MathML";
  const symbols = {
    times: "×", cdot: "·", pi: "π", ne: "≠", le: "≤", leq: "≤", ge: "≥", geq: "≥",
    pm: "±", infty: "∞", approx: "≈", sum: "∑", Delta: "Δ", theta: "θ",
      alpha: "α", beta: "β", gamma: "γ", degree: "°", circ: "°"
  };

  function node(type, children = [], text = "") {
    return { type, children, text };
  }

  function parse(source) {
    let index = 0;
    const readGroup = () => {
      while (/\s/.test(source[index] || "")) index += 1;
      if (source[index] !== "{") return readAtom();
      index += 1;
      const group = readSequence(true);
      if (source[index] === "}") index += 1;
      return node("mrow", group);
    };
    const readAtom = () => {
      if (source[index] === "{") return readGroup();
      if (source[index] === "\\") {
        index += 1;
        const commandStart = index;
        while (/[a-zA-Z]/.test(source[index] || "")) index += 1;
        const command = source.slice(commandStart, index) || source[index++];
        if (command === "frac") {
          return node("mfrac", [readGroup(), readGroup()]);
        }
        if (command === "sqrt") return node("msqrt", [readGroup()]);
        if (["text", "mathrm", "mathbf", "operatorname"].includes(command)) {
          const group = readGroup();
          return node("mtext", [], flatten(group));
        }
        if (["left", "right", "displaystyle", "limits"].includes(command)) return null;
        if ([",", ";", ":", "!", "quad", "qquad"].includes(command)) {
          return node("mtext", [], command === "qquad" ? " " : " ");
        }
        return node(symbols[command] ? "mo" : "mi", [], symbols[command] || command);
      }

      const char = source[index];
      if (/[0-9]/.test(char)) {
        const start = index++;
        while (/[0-9.,]/.test(source[index] || "")) index += 1;
        return node("mn", [], source.slice(start, index));
      }
      if (/[a-zA-Z]/.test(char)) {
        const start = index++;
        while (/[a-zA-Z]/.test(source[index] || "")) index += 1;
        const word = source.slice(start, index);
        return node(word.length === 1 ? "mi" : "mtext", [], word);
      }
      index += 1;
      if ("+-=<>:;|/(),.!".includes(char)) return node("mo", [], char);
      return node("mtext", [], char);
    };
    const readSequence = (stopAtBrace = false) => {
      const items = [];
      while (index < source.length && (!stopAtBrace || source[index] !== "}")) {
        if (/\s/.test(source[index])) {
          index += 1;
          continue;
        }
        if (source[index] === "^" || source[index] === "_") {
          const type = source[index++] === "^" ? "msup" : "msub";
          const script = readGroup();
          const previous = items.pop() || node("mtext", [], "");
          if ((previous.type === "msup" && type === "msub")
            || (previous.type === "msub" && type === "msup")) {
            items.push(node("msubsup", [
              previous.children[0],
              type === "msub" ? script : previous.children[1],
              type === "msup" ? script : previous.children[1]
            ]));
          } else {
            items.push(node(type, [previous, script]));
          }
          continue;
        }
        const item = readAtom();
        if (item) items.push(item);
      }
      return items;
    };
    return node("mrow", readSequence());
  }

  function flatten(ast) {
    return ast.text || ast.children.map(flatten).join("");
  }

  function build(ast) {
    const element = document.createElementNS(namespace, ast.type);
    if (ast.text) element.textContent = ast.text;
    ast.children.forEach((child) => element.append(build(child)));
    return element;
  }

  const math = document.createElementNS(namespace, "math");
  math.setAttribute("aria-label", latex.replace(/[${}\\]/g, ""));
  math.append(build(parse(latex)));
  const wrapper = document.createElement("span");
  wrapper.className = "cong-thuc";
  wrapper.append(math);
  return wrapper;
}

function capNhatDongHo() {
  const dongHo = document.getElementById("dong-ho");
  if (!dongHo) return;

  const phut = Math.floor(thoiGianConLai / 60);
  const giay = thoiGianConLai % 60;
  dongHo.textContent = `⏱ ${dangDe[dangDeDangChon].ten} · Thời gian còn lại: ${String(phut).padStart(2, "0")}:${String(giay).padStart(2, "0")}`;
}

function batDauDongHo() {
  clearInterval(boDemThoiGian);
  if (dangBoTro) {
    document.getElementById("dong-ho").textContent = "♻️ Bài bổ trợ · Không giới hạn thời gian";
    return;
  }

  thoiGianConLai = dangDe[dangDeDangChon].giay;
  capNhatDongHo();
  boDemThoiGian = setInterval(() => {
    thoiGianConLai -= 1;
    capNhatDongHo();
    if (thoiGianConLai <= 0) nopBai(true);
  }, 1000);
}

function phatPhaoHoa() {
  const lopPhu = document.createElement("div");
  lopPhu.className = "lop-phao-hoa";
  lopPhu.setAttribute("aria-hidden", "true");

  for (let i = 0; i < 32; i += 1) {
    const hat = document.createElement("span");
    const goc = (Math.PI * 2 * i) / 32;
    const khoangCach = 55 + Math.random() * 95;
    hat.style.setProperty("--dx", `${Math.cos(goc) * khoangCach}px`);
    hat.style.setProperty("--dy", `${Math.sin(goc) * khoangCach}px`);
    hat.style.setProperty("--mau", ["#ffca3a", "#ff595e", "#8ac926", "#1982c4", "#b5179e"][i % 5]);
    hat.style.animationDelay = `${Math.random() * 100}ms`;
    lopPhu.append(hat);
  }

  document.body.append(lopPhu);
  window.setTimeout(() => lopPhu.remove(), 1500);
}

async function phatAmPhanHoi(dung) {
  if (tiengAnMuted) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    ghiChuAudio.textContent = "Trình duyệt này chưa hỗ trợ âm thanh phản hồi.";
    return;
  }

  try {
    if (!boPhatAmAnMung || boPhatAmAnMung.state === "closed") {
      boPhatAmAnMung = new AudioContextClass();
    }
    if (boPhatAmAnMung.state !== "running") await boPhatAmAnMung.resume();

    const now = boPhatAmAnMung.currentTime;
    const notes = dung
      ? [
        { frequency: 523.25, start: 0, duration: 0.25 },
        { frequency: 659.25, start: 0.1, duration: 0.27 },
        { frequency: 783.99, start: 0.2, duration: 0.3 },
        { frequency: 1046.5, start: 0.32, duration: 0.48 }
      ]
      : [
        { frequency: 392, start: 0, duration: 0.22 },
        { frequency: 329.63, start: 0.18, duration: 0.34 }
      ];
    notes.forEach(({ frequency, start: delay, duration }) => {
      const start = now + delay;
      const harmonics = [
        { multiplier: 1, volume: dung ? 0.17 : 0.13 },
        { multiplier: 2.01, volume: dung ? 0.04 : 0.025 }
      ];
      harmonics.forEach(({ multiplier, volume }) => {
        const oscillator = boPhatAmAnMung.createOscillator();
        const gain = boPhatAmAnMung.createGain();
        const peak = start + 0.02;
        oscillator.type = multiplier === 1 ? "triangle" : "sine";
        oscillator.frequency.setValueAtTime(frequency * multiplier, start);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(volume, peak);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
        oscillator.connect(gain);
        gain.connect(boPhatAmAnMung.destination);
        oscillator.start(start);
        oscillator.stop(start + duration + 0.02);
      });
    });
  } catch (error) {
    console.error("Không phát được âm thanh phản hồi:", error);
    ghiChuAudio.textContent = "Không phát được âm thanh phản hồi. Hãy kiểm tra âm lượng hoặc cài đặt âm thanh của trình duyệt.";
  }
}

function moChonTiengAnh() {
  hienTrang(trangTiengAnh);
}

function moChonKHTN() {
  hienTrang(trangKHTN);
}

function taoThongBao(className, tieuDe, noiDung) {
  const khung = document.createElement("section");
  khung.className = className;
  const strong = document.createElement("strong");
  strong.textContent = tieuDe;
  const p = document.createElement("p");
  p.textContent = noiDung;
  khung.append(strong, p);
  return khung;
}

function chonMon(mon, kyNang = "") {
  tenHocSinh = taiKhoanDangNhap?.displayName || taiKhoanDangNhap?.email || "Học sinh (ẩn danh)";
  khoiDangChon = document.getElementById("khoi-hoc").value;
  dangDeDangChon = document.getElementById("dang-de").value;
  monDangChon = mon;
  kyNangAnh = mon === "anh" ? kyNang : "";
  phanMonKHTNDangChon = mon === "khtn" ? kyNang : "";
  dangBoTro = false;
  dangLuyenTheoLoTrinh = false;
  const khoaCauHoi = (cauHoi) => cauHoi.skill === "noi"
    ? `${cauHoi.question}|${cauHoi.speaking}`
    : cauHoi.question;

  let bank = nganHangCauHoi[khoiDangChon][mon].filter((cauHoi) => {
    if (mon !== "anh") return true;
    return cauHoi.skill === kyNangAnh;
  });
  if (mon === "toan" && bank.length < 35) {
    bank = [...new Map([...bank, ...moRongToan(khoiDangChon)]
      .map((cauHoi) => [khoaCauHoi(cauHoi), cauHoi])).values()];
  } else if (mon === "anh" && bank.length < 35) {
    bank = [...new Map([...bank, ...moRongTiengAnh(kyNangAnh)]
      .map((cauHoi) => [khoaCauHoi(cauHoi), cauHoi])).values()];
  }
  if (mon === "toan" && dangDeDangChon !== "hsg") {
    bank = [...new Map([...bank, ...moRongThuThachToan(khoiDangChon)]
      .map((cauHoi) => [khoaCauHoi(cauHoi), cauHoi])).values()];
  } else if (mon === "anh") {
    bank = [...new Map([...bank, ...moRongThuThachTiengAnh(khoiDangChon, kyNangAnh)]
      .map((cauHoi) => [khoaCauHoi(cauHoi), cauHoi])).values()];
  }
  if (mon === "khtn") {
    bank = bank.filter((cauHoi) => phanMonCauHoiKHTN(cauHoi) === phanMonKHTNDangChon);
    const supplement = phanMonKHTNDangChon === "ly"
      ? moRongKHTN(khoiDangChon)
      : moRongKHTNBoMon(khoiDangChon, phanMonKHTNDangChon);
    const challenge = moRongThuThachKHTN(khoiDangChon, phanMonKHTNDangChon);
    const questionsByText = new Map([...bank, ...supplement, ...challenge].map((cauHoi) => [cauHoi.question, cauHoi]));
    nganHangMonDangChon = [...questionsByText.values()];
  } else {
    nganHangMonDangChon = dangDeDangChon === "hsg" && mon === "toan"
      ? moRongHSGToan(khoiDangChon)
      : bank;
  }
  boCauHoiHienTai = taoDeHonHop(
    nganHangMonDangChon,
    soCauMoiDang[dangDeDangChon],
    soCauDienDapAnMoiDang[dangDeDangChon],
    dangDeDangChon === "hsg"
  );

  if (boCauHoiHienTai.length < soCauMoiDang[dangDeDangChon]) {
    window.alert(`Ngân hàng câu hỏi hiện chưa đủ ${soCauMoiDang[dangDeDangChon]} câu khác nhau cho bài này.`);
    return;
  }

  const tenKyNang = { nghe: " · Luyện nghe", noi: " · Luyện nói", doc: " · Từ vựng & ngữ pháp" };
  const tenMonHienThi = mon === "khtn"
    ? `KHTN · ${tenPhanMonKHTN[phanMonKHTNDangChon]}`
    : tenMon[mon];
  khoiTaoBaiThi(`${tenMonHienThi} · Lớp ${khoiDangChon}${tenKyNang[kyNangAnh] || ""} · ${dangDe[dangDeDangChon].ten}`);
}

function phanMonCauHoiKHTN(cauHoi) {
  if (Object.hasOwn(tenPhanMonKHTN, cauHoi.phanMon)) return cauHoi.phanMon;
  const chuDe = `${cauHoi.topic} ${cauHoi.question}`.toLocaleLowerCase("vi");
  if (/quang hợp|tế bào|thực vật|sinh trưởng|sinh thái|chuỗi thức ăn|di truyền|mendel|gene|gen|cơ thể sống|hô hấp|hệ tiêu hóa|tuần hoàn/.test(chuDe)) {
    return "sinh";
  }
  if (/tinh khiết|hỗn hợp|tách chất|nguyên tử|nguyên tố|phân tử|biến đổi hóa học|acid|axit|base|bazơ|hóa học/.test(chuDe)) {
    return "hoa";
  }
  return "ly";
}

function xaoTronXenKeDoKho(bank, soLuong, uuTienCauKho = false) {
  const cauKho = xaoTron(bank.filter((cauHoi) => cauHoi.challenge === true));
  const cauDe = xaoTron(bank.filter((cauHoi) => cauHoi.challenge !== true));
  if (uuTienCauKho) return [...cauKho, ...cauDe].slice(0, soLuong);
  const soCauThuThach = Math.min(cauKho.length, Math.ceil(soLuong * 0.6));
  const soCauThuong = Math.min(cauDe.length, soLuong - soCauThuThach);
  const daChon = [
    ...cauKho.slice(0, soCauThuThach),
    ...cauDe.slice(0, soCauThuong)
  ];
  if (daChon.length < soLuong) {
    daChon.push(...cauKho.slice(soCauThuThach), ...cauDe.slice(soCauThuong));
  }
  return xaoTron(daChon).slice(0, soLuong);
}

function taoDeHonHop(bank, soLuong, soCauDienDapAn, uuTienCauKho = false) {
  const questions = xaoTronXenKeDoKho(bank, soLuong, uuTienCauKho);
  const candidates = xaoTron(questions
    .map((question, index) => ({ question, index }))
    .filter(({ question }) => question.skill !== "noi" && Array.isArray(question.options)
      && Number.isInteger(question.answer) && question.options[question.answer])
  ).slice(0, soCauDienDapAn);
  const answerIndices = new Set(candidates.map(({ index }) => index));
  return questions.map((question, index) => {
  if (!Array.isArray(question.options)) return question;
  const options = xaoTron(question.options.map((option, optionIndex) => ({
    option,
    correct: optionIndex === question.answer
  })));
  const randomizedQuestion = {
    ...question,
    options: options.map(({ option }) => option),
    answer: options.findIndex(({ correct }) => correct)
  };
  return answerIndices.has(index)
    ? {
      ...randomizedQuestion,
      question: question.question.replace(/\bchọn\b/gi, "ghi"),
      loaiCauHoi: "dien-dap-an"
    }
    : randomizedQuestion;
  });
}

function chuanHoaDapAn(value) {
  return String(value ?? "")
    .replace(/\\frac\s*{([^{}]+)}{([^{}]+)}/g, "$1/$2")
    .replace(/\\text\s*{([^{}]*)}/g, "$1")
    .replace(/\\sqrt\s*{([^{}]+)}/g, "sqrt($1)")
    .replace(/\\pi/g, "pi")
    .replace(/\\(?:times|cdot)/g, "*")
    .replace(/\\(?:,|;|:|!)/g, "")
    .replace(/{,}/g, ".")
    .replace(/(\d),(\d)/g, "$1.$2")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .replace(/[−–]/g, "-")
    .toLocaleLowerCase("vi")
    .replace(/[${}\s\\]/g, "")
    .replace(/[^a-z0-9.+*/^=-]/g, "");
}

function soSanhDapAnTuLuan(dapAn, dapAnMau) {
  const dapAnChuan = chuanHoaDapAn(dapAnMau);
  const dapAnNguoiHoc = chuanHoaDapAn(dapAn);
  if (dapAnNguoiHoc === dapAnChuan) return true;
  const soVaDonVi = dapAnChuan.match(/^([+-]?(?:\d+(?:\.\d+)?|\.\d+))[a-z].*$/);
  return Boolean(soVaDonVi && dapAnNguoiHoc === soVaDonVi[1]);
}

function diemBaiTuLuanNhieuY(cauHoi, dapAn) {
  if (!Array.isArray(dapAn) || dapAn.length !== cauHoi.parts.length) return 0;
  const tongTrongSo = cauHoi.parts.reduce((tong, y) => tong + (y.points || 1), 0);
  const diemDatDuoc = cauHoi.parts.reduce((tong, y, index) =>
    tong + (soSanhDapAnTuLuan(dapAn[index], y.answer) ? y.points || 1 : 0), 0);
  return tongTrongSo ? diemDatDuoc / tongTrongSo : 0;
}

function laTraLoiDung(cauHoi, dapAn) {
  if (cauHoi.loaiCauHoi === "tu-luan-nhieu-y") {
    return diemBaiTuLuanNhieuY(cauHoi, dapAn) === 1;
  }
  if (cauHoi.loaiCauHoi !== "dien-dap-an") return dapAn === cauHoi.answer;
  return soSanhDapAnTuLuan(dapAn, cauHoi.options[cauHoi.answer]);
}

function khoiTaoBaiThi(tieuDe) {
  cauHoiHienTai = 0;
  dapAnDaChon = Array(boCauHoiHienTai.length).fill(null);
  diemTungCau = Array(boCauHoiHienTai.length).fill(null);
  ghiChuTungCau = Array(boCauHoiHienTai.length).fill("");
  loiDocTungCau = Array(boCauHoiHienTai.length).fill("");
  daNgheMauLuyenNoi = false;
  daTraLoiCau = false;
  daNopBai = false;
  document.getElementById("ten-mon").textContent = tieuDe;
  hienTrang(trangLamBai);
  document.getElementById("nut-sau").classList.remove("an");
  document.getElementById("nut-nghe").classList.toggle(
    "an",
    monDangChon === "toan" || (monDangChon === "anh" && kyNangAnh !== "nghe")
  );
  document.getElementById("nut-noi").classList.toggle("an", monDangChon !== "anh" || kyNangAnh !== "noi");
  document.getElementById("nut-noi").disabled = false;

  batDauDongHo();
  hienThiCauHoi();
}

function phatAudioCauHoi() {
  const cauHoi = boCauHoiHienTai[cauHoiHienTai];
  if (!("speechSynthesis" in window)) {
    ghiChuAudio.textContent = "Trình duyệt này chưa hỗ trợ đọc câu hỏi thành tiếng.";
    return;
  }

  window.speechSynthesis.cancel();
  const phatNgon = new SpeechSynthesisUtterance(cauHoi.listenText || cauHoi.question.replace(/\$/g, ""));
  phatNgon.lang = monDangChon === "anh" ? "en-US" : "vi-VN";
  phatNgon.rate = 0.9;
  phatNgon.onerror = () => {
    ghiChuAudio.textContent = "Không phát được audio. Hãy thử lại hoặc kiểm tra giọng đọc của thiết bị.";
  };
  window.speechSynthesis.speak(phatNgon);
}

function hienThiCauHoi() {
  const cauHoi = boCauHoiHienTai[cauHoiHienTai];
  daTraLoiCau = dapAnDaChon[cauHoiHienTai] !== null;
  daNgheMauLuyenNoi = false;
  nutNgheMau.disabled = false;
  document.getElementById("nut-noi").disabled = monDangChon === "anh" && kyNangAnh === "noi";
  phanHoiCau.replaceChildren();
  phanHoiNoi.replaceChildren();
  danhSachDapAn.replaceChildren();

  const nhanCauHoi = dangDeDangChon === "hsg" ? "Bài" : "Câu";
  document.getElementById("cau-so").textContent =
    `${dangBoTro ? "Bài bổ trợ · " : ""}${nhanCauHoi} ${cauHoiHienTai + 1} / ${boCauHoiHienTai.length} · ${cauHoi.topic}${cauHoi.challenge ? " · ⚡ Thử thách" : ""}`;
  document.getElementById("de-bai").textContent = cauHoi.question;
  document.getElementById("tien-do").style.width =
    `${(cauHoiHienTai / boCauHoiHienTai.length) * 100}%`;
  document.getElementById("nut-sau").disabled = !daTraLoiCau;
  document.getElementById("nut-sau").textContent =
    cauHoiHienTai === boCauHoiHienTai.length - 1
      ? "Xem phân tích →"
      : dangDeDangChon === "hsg" ? "Bài tiếp theo →" : "Câu tiếp theo →";
  document.getElementById("nut-nghe").classList.toggle(
    "an",
    monDangChon === "toan" || (monDangChon === "anh" && kyNangAnh !== "nghe")
  );
  document.getElementById("nut-noi").classList.toggle("an", monDangChon !== "anh" || kyNangAnh !== "noi");
  nutNgheMau.classList.toggle("an", monDangChon !== "anh" || kyNangAnh !== "noi");
  document.getElementById("nut-noi").disabled = monDangChon === "anh" && kyNangAnh === "noi"
    && !daNgheMauLuyenNoi;
  ghiChuAudio.textContent = kyNangAnh === "nghe"
    ? "Nghe đoạn thoại rồi chọn đáp án. Có thể nghe lại trước khi trả lời."
    : kyNangAnh === "noi"
      ? "Bước 1: nghe câu mẫu. Bước 2: đọc lại bằng micro để nhận điểm /100."
      : monDangChon === "khtn"
      ? "Bấm “Nghe câu hỏi” để nghe nội dung bằng giọng đọc tiếng Việt."
      : "";

  if (kyNangAnh === "noi") {
    const prompt = document.createElement("p");
    prompt.className = "cau-mau-noi";
    prompt.textContent = `Câu mẫu: “${cauHoi.speaking}”`;
    danhSachDapAn.append(prompt);
  } else if (cauHoi.loaiCauHoi === "tu-luan-nhieu-y") {
    const huongDan = document.createElement("p");
    huongDan.className = "huong-dan-tu-luan";
    huongDan.textContent = "Tự luận nhiều ý · Nhập kết quả cuối từng ý để máy chấm; hãy trình bày lời giải ra giấy.";
    danhSachDapAn.append(huongDan);
    cauHoi.parts.forEach((y, index) => {
      const nhan = document.createElement("label");
      nhan.className = "nhan-y-tu-luan";
      nhan.textContent = `Ý ${y.label}. ${y.prompt}`;
      const input = document.createElement("textarea");
      input.className = "dap-an-tu-luan";
      input.rows = 2;
      input.maxLength = 500;
      input.placeholder = `Đáp án ý ${y.label}`;
      input.setAttribute("aria-label", `Đáp án ý ${y.label}`);
      input.dataset.partIndex = String(index);
      input.disabled = daTraLoiCau;
      danhSachDapAn.append(nhan, input);
    });
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nut-chinh nut-cham-tu-luan";
    button.textContent = "Chấm bài";
    button.disabled = daTraLoiCau;
    button.addEventListener("click", () => {
      const answers = [...danhSachDapAn.querySelectorAll("textarea[data-part-index]")]
        .map((input) => input.value.trim());
      if (answers.every((answer) => !answer)) {
        ghiChuAudio.textContent = "Hãy nhập đáp án ít nhất một ý trước khi chấm.";
        danhSachDapAn.querySelector("textarea")?.focus();
        return;
      }
      traLoi(answers);
    });
    danhSachDapAn.append(button);
  } else if (cauHoi.loaiCauHoi === "dien-dap-an") {
    const huongDan = document.createElement("p");
    huongDan.className = "huong-dan-tu-luan";
    huongDan.textContent = "Tự luận ngắn · Ghi đáp án vào ô bên dưới; với bài tính, có thể nhập số kèm đơn vị.";
    const input = document.createElement("textarea");
    input.className = "dap-an-tu-luan";
    input.rows = 2;
    input.maxLength = 500;
    input.placeholder = "Nhập đáp án của bạn";
    input.setAttribute("aria-label", "Đáp án tự luận");
    input.disabled = daTraLoiCau;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nut-chinh nut-cham-tu-luan";
    button.textContent = "Chấm đáp án";
    button.disabled = daTraLoiCau;
    button.addEventListener("click", () => {
      const dapAn = input.value.trim();
      if (!dapAn) {
        ghiChuAudio.textContent = "Hãy nhập đáp án trước khi chấm.";
        input.focus();
        return;
      }
      traLoi(dapAn);
    });
    danhSachDapAn.append(huongDan, input, button);
  } else {
    cauHoi.options.forEach((luaChon, index) => {
      const label = document.createElement("label");
      label.className = "lua-chon";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "dap-an";
      input.value = String(index);
      input.checked = dapAnDaChon[cauHoiHienTai] === index;
      input.disabled = daTraLoiCau;
      input.addEventListener("change", () => traLoi(index));
      const text = document.createElement("span");
      text.textContent = luaChon;
      label.append(input, text);
      danhSachDapAn.append(label);
    });
  }

  if (daTraLoiCau) hienThiPhanHoi(cauHoi, dapAnDaChon[cauHoiHienTai]);
  hienCongThuc(trangLamBai);
}

function traLoi(luaChon, ghiChu = "", diemMotCau = null) {
  if (daTraLoiCau) return;
  daTraLoiCau = true;
  dapAnDaChon[cauHoiHienTai] = luaChon;

  const cauHoi = boCauHoiHienTai[cauHoiHienTai];
  const dung = laTraLoiDung(cauHoi, luaChon);
  diemTungCau[cauHoiHienTai] = diemMotCau === null
    ? cauHoi.loaiCauHoi === "tu-luan-nhieu-y"
      ? diemBaiTuLuanNhieuY(cauHoi, luaChon)
      : dung ? 1 : 0
    : diemMotCau;
  ghiChuTungCau[cauHoiHienTai] = ghiChu;
  document.querySelectorAll('input[name="dap-an"], .dap-an-tu-luan, .nut-cham-tu-luan').forEach((control) => {
    control.disabled = true;
  });

  document.getElementById("nut-sau").disabled = false;
  document.getElementById("tien-do").style.width =
    `${((cauHoiHienTai + 1) / boCauHoiHienTai.length) * 100}%`;
  hienThiPhanHoi(cauHoi, luaChon, ghiChu);
  if (dung) {
    phatPhaoHoa();
  }
  phatAmPhanHoi(dung);
}

function hienThiPhanHoi(cauHoi, luaChon, ghiChu = "") {
  const dung = laTraLoiDung(cauHoi, luaChon);
  const cauKhen = ["Não bật chế độ tia chớp! ⚡", "Đỉnh như nóc nhà! 🎉", "Một pha xử lý quá mượt! ✨"];
  const memeDung = [
    "POV: vừa đọc đề đã thấy đáp án 😎",
    "Não hôm nay chạy bằng Wi-Fi 6! 🧠⚡",
    "Thầy cô nhìn bài làm: chuẩn khỏi chỉnh 👏",
    "Main character năng lượng tri thức ✨"
  ];
  const memeSai = [
    "Não đang tải... xem lời giải là bắt sóng lại ngay 🧠💭",
    "Plot twist thôi, câu tiếp theo gỡ điểm liền! 🎬",
    "Sai một câu không sao, thêm một lần nhớ lâu hơn 🌱",
    "Bình tĩnh, chiến thần cũng cần xem gợi ý đôi lúc 😌"
  ];
  const soYDung = cauHoi.loaiCauHoi === "tu-luan-nhieu-y"
    ? cauHoi.parts.filter((y, index) => soSanhDapAnTuLuan(luaChon[index], y.answer)).length
    : 0;
  const dapAnDung = cauHoi.loaiCauHoi === "tu-luan-nhieu-y"
    ? cauHoi.parts.map((y) => `Ý ${y.label}: ${y.answer}. ${y.explanation}`).join(" ")
    : cauHoi.options?.[cauHoi.answer] || cauHoi.speaking;
  const tieuDePhanHoi = cauHoi.loaiCauHoi === "tu-luan-nhieu-y"
    ? `Đạt ${soYDung}/${cauHoi.parts.length} ý. ${dung ? "Hoàn thành tốt!" : "Xem đáp án mẫu để tự đối chiếu."}`
    : dung ? cauKhen[Math.floor(Math.random() * cauKhen.length)] : `Chưa đúng — đáp án đúng là: ${dapAnDung}`;
  const loiGiai = taoThongBao(
    dung ? "phan-hoi-dung" : "phan-hoi-sai",
    tieuDePhanHoi,
    [ghiChu, cauHoi.loaiCauHoi === "tu-luan-nhieu-y" ? dapAnDung : kyNangAnh === "noi" ? "" : cauHoi.explanation]
      .filter(Boolean).join(" ")
  );
  if (dung) {
    const loiKhen = [
      { icon: "🥳", animation: "bat-nhay" },
      { icon: "🤩", animation: "xoay-nhe" },
      { icon: "🎉", animation: "nhoi-len" },
      { icon: "🦄", animation: "bay-len" },
      { icon: "🌟", animation: "xoay-nhe" },
      { icon: "🏆", animation: "bat-nhay" }
    ];
    const danhSachKhen = loiKhen.filter((item) => item.icon !== bieuTuongKhenTruoc);
    const bieuTuongMoi = danhSachKhen[Math.floor(Math.random() * danhSachKhen.length)];
    bieuTuongKhenTruoc = bieuTuongMoi.icon;
    const hinhKhen = document.createElement("span");
    hinhKhen.className = "hinh-khen-thuong";
    hinhKhen.setAttribute("role", "img");
    hinhKhen.setAttribute("aria-label", "Bạn làm tốt lắm");
    hinhKhen.textContent = bieuTuongMoi.icon;
    hinhKhen.classList.add(bieuTuongMoi.animation);
    loiGiai.prepend(hinhKhen);
  } else {
    const loiDongVien = [
      { icon: "💡", animation: "lac-nhe" },
      { icon: "🧩", animation: "lac-nhe" },
      { icon: "🌱", animation: "nhoi-len" },
      { icon: "🤔", animation: "xoay-nhe" }
    ];
    const bieuTuongMoi = loiDongVien[Math.floor(Math.random() * loiDongVien.length)];
    const hinhDongVien = document.createElement("span");
    hinhDongVien.className = "hinh-khen-thuong hinh-khen-sai";
    hinhDongVien.setAttribute("role", "img");
    hinhDongVien.setAttribute("aria-label", "Cố gắng tiếp tục học nhé");
    hinhDongVien.textContent = bieuTuongMoi.icon;
    hinhDongVien.classList.add(bieuTuongMoi.animation);
    loiGiai.prepend(hinhDongVien);
  }
  const meme = document.createElement("p");
  meme.className = `meme-phan-hoi ${dung ? "meme-dung" : "meme-sai"}`;
  meme.textContent = (dung ? memeDung : memeSai)[Math.floor(Math.random() * (dung ? memeDung : memeSai).length)];
  loiGiai.append(meme);
  phanHoiCau.replaceChildren(loiGiai);
  hienCongThuc(phanHoiCau);
}

function phatMauLuyenNoi() {
  const cauHoi = boCauHoiHienTai[cauHoiHienTai];
  if (!("speechSynthesis" in window)) {
    ghiChuAudio.textContent = "Trình duyệt này chưa hỗ trợ phát câu mẫu thành tiếng.";
    daNgheMauLuyenNoi = true;
    document.getElementById("nut-noi").disabled = false;
    return;
  }
  if (!cauHoi.speaking) {
    ghiChuAudio.textContent = "Câu này chưa có mẫu luyện nói.";
    return;
  }

  window.speechSynthesis.cancel();
  const mauDoc = new SpeechSynthesisUtterance(cauHoi.speaking);
  mauDoc.lang = "en-US";
  mauDoc.rate = 0.85;
  mauDoc.onstart = () => {
    ghiChuAudio.textContent = "Đang phát câu mẫu. Hãy nghe rồi đọc lại bằng micro.";
    nutNgheMau.disabled = true;
    document.getElementById("nut-noi").disabled = true;
  };
  mauDoc.onend = () => {
    daNgheMauLuyenNoi = true;
    ghiChuAudio.textContent = "Đến lượt bạn: bấm micro và đọc lại câu mẫu.";
    nutNgheMau.disabled = false;
    document.getElementById("nut-noi").disabled = false;
  };
  mauDoc.onerror = () => {
    ghiChuAudio.textContent = "Không phát được câu mẫu. Hãy kiểm tra âm lượng hoặc giọng đọc của trình duyệt.";
    nutNgheMau.disabled = false;
    document.getElementById("nut-noi").disabled = !daNgheMauLuyenNoi;
  };
  window.speechSynthesis.speak(mauDoc);
}

function hienDiemLuyenNoi(diem, alignment) {
  const ketQua = document.createElement("section");
  ketQua.className = "ket-qua-phat-am";

  const tieuDe = document.createElement("h3");
  tieuDe.textContent = `Điểm nhận dạng câu đọc: ${diem}/100`;
  const trangThai = document.createElement("p");
  trangThai.className = "ghi-chu-cham-doc";
  trangThai.textContent = "Điểm được tính dựa trên độ khớp của câu đọc với câu mẫu.";
  const thanhDiem = document.createElement("progress");
  thanhDiem.className = "thanh-diem-phat-am";
  thanhDiem.max = 100;
  thanhDiem.value = diem;
  thanhDiem.setAttribute("aria-label", `Điểm nhận dạng câu đọc ${diem} trên 100`);
  const chuGiai = document.createElement("p");
  chuGiai.className = "chu-giai-so-sanh";
  chuGiai.textContent = "Từ đúng màu xanh · từ sai hoặc thiếu màu đỏ";
  const soSanh = document.createElement("div");
  soSanh.className = "so-sanh-cau-doc";

  alignment.forEach((capTu) => {
    const cap = document.createElement("div");
    cap.className = "cap-tu-doc";
    const tuMau = document.createElement("span");
    tuMau.className = `tu-so-sanh ${capTu.dung ? "tu-dung" : "tu-sai"}`;
    tuMau.textContent = capTu.tuMau || "—";
    tuMau.setAttribute("aria-label", capTu.tuMau ? `Câu mẫu: ${capTu.tuMau}` : "Không có từ tương ứng trong câu mẫu");
    const tuDoc = document.createElement("span");
    tuDoc.className = `tu-so-sanh ${capTu.dung ? "tu-dung" : "tu-sai"}`;
    tuDoc.textContent = capTu.tuNghe || "—";
    tuDoc.setAttribute("aria-label", capTu.tuNghe ? `Bạn đọc: ${capTu.tuNghe}` : "Chưa đọc được từ này");
    cap.append(tuMau, tuDoc);
    soSanh.append(cap);
  });

  ketQua.append(tieuDe, trangThai, thanhDiem, chuGiai, soSanh);
  phanHoiNoi.replaceChildren(ketQua);
}

function chamDoKhopCauDoc(cauMau, loiDoc) {
  const tachTu = (text) => text.toLowerCase()
    .replace(/[^a-z0-9\s']/g, "")
    .split(/\s+/)
    .filter(Boolean);
  const tuMau = tachTu(cauMau);
  const tuNghe = tachTu(loiDoc);
  const bang = Array.from({ length: tuMau.length + 1 }, () => Array(tuNghe.length + 1).fill(0));

  for (let i = 0; i <= tuMau.length; i += 1) bang[i][0] = i;
  for (let j = 0; j <= tuNghe.length; j += 1) bang[0][j] = j;
  for (let i = 1; i <= tuMau.length; i += 1) {
    for (let j = 1; j <= tuNghe.length; j += 1) {
      const chiPhiThay = tuMau[i - 1] === tuNghe[j - 1] ? 0 : 1;
      bang[i][j] = Math.min(
        bang[i - 1][j] + 1,
        bang[i][j - 1] + 1,
        bang[i - 1][j - 1] + chiPhiThay
      );
    }
  }

  let i = tuMau.length;
  let j = tuNghe.length;
  let tuDung = 0;
  const tuCanLuyen = [];
  const alignment = [];
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && tuMau[i - 1] === tuNghe[j - 1]) {
      tuDung += 1;
      alignment.unshift({ tuMau: tuMau[i - 1], tuNghe: tuNghe[j - 1], dung: true });
      i -= 1;
      j -= 1;
    } else if (i > 0 && j > 0 && bang[i][j] === bang[i - 1][j - 1] + 1) {
      tuCanLuyen.unshift(`${tuMau[i - 1]} → ${tuNghe[j - 1]}`);
      alignment.unshift({ tuMau: tuMau[i - 1], tuNghe: tuNghe[j - 1], dung: false });
      i -= 1;
      j -= 1;
    } else if (i > 0 && bang[i][j] === bang[i - 1][j] + 1) {
      tuCanLuyen.unshift(`${tuMau[i - 1]} (chưa nghe rõ)`);
      alignment.unshift({ tuMau: tuMau[i - 1], tuNghe: "", dung: false });
      i -= 1;
    } else {
      tuCanLuyen.unshift(`thừa “${tuNghe[j - 1]}”`);
      alignment.unshift({ tuMau: "", tuNghe: tuNghe[j - 1], dung: false });
      j -= 1;
    }
  }

  const soTuSoSanh = Math.max(tuMau.length, tuNghe.length);
  const score = soTuSoSanh ? Math.round((1 - bang[tuMau.length][tuNghe.length] / soTuSoSanh) * 100) : 0;
  return { score, tuDung, tongTu: tuMau.length, tuCanLuyen, alignment };
}

function batDauLuyenNoi() {
  const Recognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  const cauHoi = boCauHoiHienTai[cauHoiHienTai];
  if (!Recognition) {
    ghiChuAudio.textContent = "Trình duyệt chưa hỗ trợ nhận dạng giọng nói. Hãy dùng Chrome hoặc Edge mới nhất.";
    return;
  }
  if (!cauHoi.speaking) {
    ghiChuAudio.textContent = "Câu này chưa có mẫu luyện nói.";
    return;
  }

  if (nhanDangGiongNoi) nhanDangGiongNoi.abort();
  nhanDangGiongNoi = new Recognition();
  nhanDangGiongNoi.lang = "en-US";
  nhanDangGiongNoi.interimResults = false;
  nhanDangGiongNoi.maxAlternatives = 1;
  ghiChuAudio.textContent = "Đang nghe bạn đọc. Hãy nói rõ và đọc hết câu tiếng Anh.";
  document.getElementById("nut-noi").disabled = true;
  nutNgheMau.disabled = true;
  phanHoiNoi.replaceChildren(taoThongBao("phan-hoi-dung", "Đang nghe...", "Đọc xong sẽ hiện điểm độ khớp câu đọc trên thang 100 và phần Chrome nhận dạng được."));

  nhanDangGiongNoi.onresult = (event) => {
    const ketQua = event.results[0]?.[0];
    if (!ketQua || !ketQua.transcript.trim()) {
      ghiChuAudio.textContent = "Chrome chưa nghe rõ câu đọc. Hãy thử lại ở nơi yên tĩnh và nói gần micro hơn.";
      return;
    }
    const heard = ketQua.transcript;
    const ketQuaCham = chamDoKhopCauDoc(cauHoi.speaking, heard);
    const { score, tuCanLuyen, alignment } = ketQuaCham;
    loiDocTungCau[cauHoiHienTai] = heard;
    hienDiemLuyenNoi(score, alignment);
    const nhanXetTu = tuCanLuyen.length
      ? `Từ cần luyện thêm: ${tuCanLuyen.join(", ")}.`
      : "Chrome nhận dạng đủ các từ trong câu mẫu.";
    const ghiChu = `Điểm câu đọc: ${score}/100. ${nhanXetTu}`;
    ghiChuAudio.textContent = `Đã chấm xong: ${score}/100. Bấm “Câu tiếp theo” để tiếp tục.`;
    traLoi(score >= 70 ? cauHoi.answer : -1, ghiChu, score / 100);
  };
  nhanDangGiongNoi.onerror = (event) => {
    ghiChuAudio.textContent = event.error === "not-allowed"
      ? "Bạn chưa cấp quyền dùng micro. Hãy mở trang qua HTTPS hoặc localhost, dùng Chrome và cho phép truy cập micro."
      : `Không nhận dạng được giọng nói (${event.error}). Hãy thử lại.`;
  };
  nhanDangGiongNoi.onend = () => {
    document.getElementById("nut-noi").disabled = false;
    nutNgheMau.disabled = false;
    nhanDangGiongNoi = null;
  };
  try {
    nhanDangGiongNoi.start();
  } catch (error) {
    console.error("Không thể bắt đầu nhận dạng giọng nói:", error);
    ghiChuAudio.textContent = "Không thể bật micro. Hãy thử lại trên Chrome qua HTTPS hoặc localhost.";
    document.getElementById("nut-noi").disabled = false;
    nutNgheMau.disabled = false;
    nhanDangGiongNoi = null;
  }
}

function doiCau(huong) {
  if (huong > 0 && cauHoiHienTai < boCauHoiHienTai.length - 1) {
    cauHoiHienTai += 1;
    hienThiCauHoi();
  } else if (huong > 0) {
    nopBai(false);
  }
}

function taoPhanTich() {
  const diemTheoChuDe = new Map();
  boCauHoiHienTai.forEach((cauHoi, index) => {
    const thongKe = diemTheoChuDe.get(cauHoi.topic) || { dung: 0, tong: 0, diem: 0, yDung: 0, yTong: 0 };
    thongKe.tong += 1;
    if (laTraLoiDung(cauHoi, dapAnDaChon[index])) thongKe.dung += 1;
    if (cauHoi.loaiCauHoi === "tu-luan-nhieu-y") {
      thongKe.yTong += cauHoi.parts.length;
      thongKe.yDung += cauHoi.parts.filter((y, partIndex) =>
        soSanhDapAnTuLuan(dapAnDaChon[index]?.[partIndex], y.answer)).length;
    }
    thongKe.diem += diemTungCau[index] || 0;
    diemTheoChuDe.set(cauHoi.topic, thongKe);
  });

  return [...diemTheoChuDe.entries()]
    .map(([topic, thongKe]) => ({ topic, ...thongKe, tiLe: thongKe.diem / thongKe.tong }))
    .sort((a, b) => a.tiLe - b.tiLe);
}

function batDauBoTro(topic) {
  const bank = nganHangMonDangChon.filter((cauHoi) =>
    monDangChon !== "anh" || cauHoi.skill === kyNangAnh
  );
  const supplementaryBank = monDangChon === "toan"
    ? [...moRongToan(khoiDangChon), ...moRongBoTroToan(khoiDangChon, topic)]
    : monDangChon === "khtn"
      ? (phanMonKHTNDangChon === "ly"
        ? moRongKHTN(khoiDangChon)
        : moRongKHTNBoMon(khoiDangChon, phanMonKHTNDangChon))
      : moRongTiengAnh(kyNangAnh);
  const nganHangKhongTrung = [...new Map(
    [...bank, ...supplementaryBank].map((cauHoi) => [cauHoi.question, cauHoi])
  ).values()];
  const cauTheoChuDe = nganHangKhongTrung.filter((cauHoi) => cauHoi.topic === topic);
  if (cauTheoChuDe.length === 0) {
    window.alert("Chưa có câu hỏi bổ trợ cho phần này.");
    return;
  }

  const boCauHoiChon = xaoTron(cauTheoChuDe).slice(0, 30);

  dangBoTro = true;
  dangLuyenTheoLoTrinh = false;
  boCauHoiHienTai = taoDeHonHop(boCauHoiChon, boCauHoiChon.length, Math.min(6, boCauHoiChon.length));
  const tenMonHienThi = monDangChon === "khtn"
    ? `KHTN · ${tenPhanMonKHTN[phanMonKHTNDangChon]}`
    : tenMon[monDangChon];
  khoiTaoBaiThi(`${tenMonHienThi} · Lớp ${khoiDangChon} · Bổ trợ: ${topic}`);
}

function nopBai(hetGio) {
  if (daNopBai) return;
  daNopBai = true;
  clearInterval(boDemThoiGian);
  const dung = dapAnDaChon.reduce(
    (tong, dapAn, index) => tong + (laTraLoiDung(boCauHoiHienTai[index], dapAn) ? 1 : 0),
    0
  );
  const tongY = boCauHoiHienTai.reduce((tong, cauHoi) =>
    tong + (cauHoi.loaiCauHoi === "tu-luan-nhieu-y" ? cauHoi.parts.length : 0), 0);
  const yDung = boCauHoiHienTai.reduce((tong, cauHoi, index) =>
    tong + (cauHoi.loaiCauHoi === "tu-luan-nhieu-y"
      ? cauHoi.parts.filter((y, partIndex) => soSanhDapAnTuLuan(dapAnDaChon[index]?.[partIndex], y.answer)).length
      : 0), 0);
  const tongDiem = diemTungCau.reduce((tong, diemCau) => tong + (diemCau || 0), 0);
  const diem = boCauHoiHienTai.length ? (tongDiem / boCauHoiHienTai.length) * 10 : 0;
  const phanTich = taoPhanTich();
  const danhSachYeu = phanTich.filter((item) => item.tiLe < 1).slice(0, 3);
  luuBaiLam(dung, diem, phanTich);

  danhSachDapAn.replaceChildren();
  phanHoiCau.replaceChildren();
  phanHoiNoi.replaceChildren();
  const ketQua = document.createElement("section");
  ketQua.className = "ket-qua";
  const tieuDe = document.createElement("h3");
  tieuDe.textContent = hetGio ? "Đã hết giờ!" : "Hoàn thành bài luyện tập!";
  const diemThi = document.createElement("p");
  const ketQuaChiTiet = tongY
    ? `${yDung}/${tongY} ý đúng · ${dung}/${boCauHoiHienTai.length} bài đạt đủ ý`
    : `${dung}/${boCauHoiHienTai.length} câu đúng`;
  diemThi.textContent = `Kết quả: ${ketQuaChiTiet} · ${diem.toFixed(1)}/10 điểm.`;
  const ghiChu = document.createElement("p");
  ghiChu.textContent = "Phân tích tự động tại trình duyệt dựa trên câu trả lời của bài này; chưa kết nối mô hình AI bên ngoài.";
  ketQua.append(tieuDe, diemThi, ghiChu);
  danhSachDapAn.append(ketQua);

  const tieuDePhanTich = document.createElement("h3");
  tieuDePhanTich.className = "tieu-de-phan-tich";
  tieuDePhanTich.textContent = "📊 Phân tích theo chủ đề";
  danhSachDapAn.append(tieuDePhanTich);

  phanTich.forEach((item) => {
    const hang = document.createElement("p");
    hang.className = item.tiLe < 1 ? "hang-chu-de chu-de-yeu" : "hang-chu-de";
    const ketQuaChuDe = item.yTong
      ? `${item.yDung}/${item.yTong} ý đúng`
      : `${item.dung}/${item.tong} câu đúng`;
    hang.textContent = `${item.topic}: ${ketQuaChuDe} · mức đạt ${Math.round(item.tiLe * 100)}%`;
    danhSachDapAn.append(hang);
  });

  if (danhSachYeu.length) {
    const goiY = document.createElement("div");
    goiY.className = "goi-y-bo-tro";
    const moTa = document.createElement("p");
    moTa.textContent = "Nên ôn lại các phần này. Chọn một chủ đề để làm bộ câu hỏi bổ trợ:";
    goiY.append(moTa);
    danhSachYeu.forEach((item) => {
      const nut = document.createElement("button");
      nut.type = "button";
      nut.className = "nut-phu";
      nut.textContent = `Ôn ${item.topic}`;
      nut.addEventListener("click", () => batDauBoTro(item.topic));
      goiY.append(nut);
    });
    danhSachDapAn.append(goiY);
  } else {
    danhSachDapAn.append(taoThongBao("phan-hoi-dung", "Rất tốt!", "Bạn trả lời đúng tất cả câu trong bài này."));
  }

  boCauHoiHienTai.forEach((cauHoi, index) => {
    const dungCau = laTraLoiDung(cauHoi, dapAnDaChon[index]);
    const dapAnDung = cauHoi.loaiCauHoi === "tu-luan-nhieu-y"
      ? cauHoi.parts.map((y) => `Ý ${y.label}: ${y.answer}`).join("; ")
      : cauHoi.options?.[cauHoi.answer] || cauHoi.speaking;
    const dapAnNguoiHoc = cauHoi.loaiCauHoi === "tu-luan-nhieu-y"
      ? `Bạn ghi: ${cauHoi.parts.map((y, partIndex) => `${y.label}: ${dapAnDaChon[index]?.[partIndex] || "—"}`).join("; ")}. `
      : cauHoi.loaiCauHoi === "dien-dap-an"
        ? `Bạn ghi: ${dapAnDaChon[index] || "Chưa trả lời"}. `
        : "";
    const loiGiai = cauHoi.loaiCauHoi === "tu-luan-nhieu-y"
      ? cauHoi.parts.map((y) => `Ý ${y.label}: ${y.explanation}`).join(" ")
      : cauHoi.explanation;
    const trangThaiCau = cauHoi.loaiCauHoi === "tu-luan-nhieu-y"
      ? `${cauHoi.parts.filter((y, partIndex) => soSanhDapAnTuLuan(dapAnDaChon[index]?.[partIndex], y.answer)).length}/${cauHoi.parts.length} ý đúng`
      : dungCau ? "Đạt" : "Cần luyện thêm";
    const diemPhatAm = kyNangAnh === "noi" && diemTungCau[index] !== null
      ? `Điểm nhận dạng câu đọc: ${Math.round(diemTungCau[index] * 100)}/100. `
      : "";
    const review = taoThongBao(
      dungCau ? "phan-hoi-dung" : "phan-hoi-sai",
      `${dangDeDangChon === "hsg" ? "Bài" : "Câu"} ${index + 1} · ${cauHoi.topic} · ${trangThaiCau}`,
      `${diemPhatAm}${dapAnNguoiHoc}${ghiChuTungCau[index]} Đáp án mẫu: ${dapAnDung}. ${kyNangAnh === "noi" ? "" : loiGiai}`
    );
    danhSachDapAn.append(review);
  });

  document.getElementById("cau-so").textContent = "Kết quả và bài bổ trợ";
  document.getElementById("de-bai").textContent = "";
  document.getElementById("tien-do").style.width = "100%";
  document.getElementById("nut-sau").classList.add("an");
  document.getElementById("nut-nghe").classList.add("an");
  document.getElementById("nut-noi").classList.add("an");
  document.getElementById("dong-ho").textContent = hetGio
    ? "⏱ Đã hết giờ"
    : `${dangDe[dangDeDangChon].ten} · Đã hoàn thành`;
  hienCongThuc(danhSachDapAn);
}

function veTrangChu() {
  if (!daNopBai && dapAnDaChon.some((dapAn) => dapAn !== null)
    && !window.confirm("Bài làm chưa xong. Bạn có muốn về trang chủ không?")) return;
  clearInterval(boDemThoiGian);
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (nhanDangGiongNoi) nhanDangGiongNoi.abort();
  hienTrang(trangChu);
  document.getElementById("nut-am-thanh").classList.remove("an");
  document.getElementById("nut-sau").classList.remove("an");
  document.getElementById("nut-nghe").classList.remove("an");
  document.getElementById("nut-noi").classList.add("an");
  document.getElementById("nut-sau").textContent = "Câu tiếp theo →";
  monDangChon = "";
}

function luuBaiLam(dung, diem, phanTich) {
  if (dangBoTro && !dangLuyenTheoLoTrinh) return;
  const key = khoaBaiLamHienTai();
  const cacBaiLam = docLuuTru(key, []);
  if (!Array.isArray(cacBaiLam)) {
    window.alert("Không thể ghi kết quả vì dữ liệu bài làm đã lưu bị lỗi.");
    return;
  }

  const baiLam = {
    hocSinh: tenHocSinh,
    khoi: khoiDangChon,
    mon: tenMon[monDangChon],
    kyNang: kyNangAnh,
    phanMonKHTN: tenPhanMonKHTN[phanMonKHTNDangChon] || "",
    dangDe: dangDe[dangDeDangChon].ten,
    thoiGian: new Date().toISOString(),
    soCauDung: dung,
    tongSoCau: boCauHoiHienTai.length,
    diem: Number(diem.toFixed(1)),
    phanTich,
    chiTiet: boCauHoiHienTai.map((cauHoi, index) => ({
      cauHoi: cauHoi.question,
      chuDe: cauHoi.topic,
      dung: laTraLoiDung(cauHoi, dapAnDaChon[index]),
      dapAn: kyNangAnh === "noi"
        ? loiDocTungCau[index] || "Chưa nhận dạng được giọng nói"
        : cauHoi.loaiCauHoi === "tu-luan-nhieu-y"
          ? cauHoi.parts.map((y, partIndex) => `${y.label}: ${dapAnDaChon[index]?.[partIndex] || "Chưa trả lời"}`).join("; ")
        : cauHoi.loaiCauHoi === "dien-dap-an"
          ? dapAnDaChon[index] || "Chưa trả lời"
        : cauHoi.options[dapAnDaChon[index]] || "Chưa trả lời",
      dapAnDung: cauHoi.loaiCauHoi === "tu-luan-nhieu-y"
        ? cauHoi.parts.map((y) => `${y.label}: ${y.answer}`).join("; ")
        : cauHoi.options?.[cauHoi.answer] || cauHoi.speaking,
      diemLuyen: kyNangAnh === "noi" && diemTungCau[index] !== null
        ? Number((diemTungCau[index] * 100).toFixed(1))
        : null,
      ghiChuLuyen: ghiChuTungCau[index]
    }))
  };
  cacBaiLam.unshift(baiLam);
  const danhSachMoi = cacBaiLam.slice(0, 500);
  ghiLuuTru(key, danhSachMoi);
  if (taiKhoanDangNhap && firebaseDb) {
    firebaseDb.collection("users").doc(taiKhoanDangNhap.uid).collection("attempts")
      .add(baiLam)
      .then(() => {
        baiLamCaNhan = danhSachMoi;
        capNhatTrangThaiTaiKhoan(`Đã lưu và đồng bộ kết quả cho ${taiKhoanDangNhap.displayName || taiKhoanDangNhap.email}.`);
        veLoTrinhCaNhan(baiLamCaNhan);
      })
      .catch((error) => {
        console.error("Không đồng bộ được kết quả bài làm lên Firebase:", error);
        capNhatTrangThaiTaiKhoan(`Kết quả đã lưu trên thiết bị nhưng chưa đồng bộ được: ${error.message}`, true);
      });
  } else {
    baiLamCaNhan = danhSachMoi;
    veLoTrinhCaNhan(baiLamCaNhan);
  }
}

function hienThiBaiLam() {
  const khung = document.getElementById("danh-sach-bai-lam");
  khung.replaceChildren();
  const cacBaiLam = docLuuTru(khoaBaiLamHienTai(), []);
  if (!Array.isArray(cacBaiLam)) {
    khung.textContent = "Dữ liệu kết quả không hợp lệ. Hãy xóa dữ liệu trang hoặc khôi phục từ bản sao lưu.";
    return;
  }
  if (cacBaiLam.length === 0) {
    khung.append(taoThongBao("gv-khong-co", "Chưa có bài làm", "Kết quả làm bài sẽ xuất hiện ở đây khi có học sinh thi trên trình duyệt này."));
    return;
  }

  cacBaiLam.forEach((bai, index) => {
    const details = document.createElement("details");
    details.className = "gv-bai-lam";
    const summary = document.createElement("summary");
    const ngay = new Date(bai.thoiGian);
    summary.textContent = `${bai.hocSinh} · Lớp ${bai.khoi} · ${bai.mon}${bai.kyNang ? ` (${bai.kyNang})` : ""} · ${bai.dangDe} · ${bai.diem}/10 · ${Number.isNaN(ngay.getTime()) ? "" : ngay.toLocaleString("vi-VN")}`;
    details.append(summary);
    const tongKet = document.createElement("p");
    tongKet.textContent = `${bai.soCauDung}/${bai.tongSoCau} câu đúng`;
    details.append(tongKet);
    (bai.phanTich || []).forEach((item) => {
      const hang = document.createElement("p");
      hang.textContent = `${item.topic}: ${item.dung}/${item.tong}`;
      details.append(hang);
    });
    (bai.chiTiet || []).forEach((item, questionIndex) => {
      const hang = document.createElement("p");
      const ketQua = item.dung
        ? "Đúng"
        : `Sai (đã chọn: ${item.dapAn}; đáp án: ${item.dapAnDung})`;
      const diemLuyen = Number.isFinite(item.diemLuyen) ? ` · Điểm nhận dạng câu đọc: ${item.diemLuyen}/100` : "";
      hang.textContent = `Câu ${questionIndex + 1} · ${item.chuDe} · ${ketQua}${diemLuyen}`;
      details.append(hang);
      if (item.ghiChuLuyen) {
        const nhanXet = document.createElement("p");
        nhanXet.textContent = item.ghiChuLuyen;
        details.append(nhanXet);
      }
    });
    khung.append(details);
  });
}

function getBoNganHangDangChon() {
  return nganHangCauHoi[document.getElementById("gv-khoi").value][document.getElementById("gv-mon").value];
}

function hienThiNganHangGiaoVien() {
  const khung = document.getElementById("gv-danh-sach-cau-hoi");
  khung.replaceChildren();
  getBoNganHangDangChon().forEach((cauHoi, index) => {
    const item = document.createElement("article");
    item.className = "gv-cau-hoi";
    const title = document.createElement("strong");
    title.textContent = `${index + 1}. ${cauHoi.topic}${cauHoi.challenge ? " · Nâng cao" : ""}${cauHoi.skill ? ` · ${cauHoi.skill}` : ""}`;
    const prompt = document.createElement("p");
    prompt.textContent = cauHoi.question;
    item.append(title, prompt);
    khung.append(item);
  });
}

function napFormSuaCauHoi(index) {
  const cauHoi = getBoNganHangDangChon()[index];
  cauHoiDangSua = index;
  document.getElementById("gv-tieu-de-form").textContent = `Sửa câu ${index + 1}`;
  document.getElementById("gv-question").value = cauHoi.question;
  document.getElementById("gv-topic").value = cauHoi.topic;
  cauHoi.options.forEach((option, optionIndex) => {
    document.getElementById(`gv-option-${optionIndex}`).value = option;
  });
  document.getElementById("gv-answer").value = String(cauHoi.answer);
  document.getElementById("gv-skill").value = cauHoi.skill || "";
  document.getElementById("gv-explanation").value = cauHoi.explanation;
  document.getElementById("gv-listen").value = cauHoi.listenText || "";
  document.getElementById("gv-speaking").value = cauHoi.speaking || "";
  document.getElementById("gv-challenge").checked = Boolean(cauHoi.challenge);
  document.getElementById("gv-huy").classList.remove("an");
  document.getElementById("gv-thong-bao").textContent = "Đang chỉnh sửa câu hỏi. Bấm Lưu câu hỏi để áp dụng.";
  document.getElementById("gv-question").focus();
}

function huySuaCauHoi() {
  cauHoiDangSua = -1;
  ["gv-question", "gv-topic", "gv-option-0", "gv-option-1", "gv-option-2", "gv-option-3",
    "gv-explanation", "gv-listen", "gv-speaking"].forEach((id) => {
    const input = document.getElementById(id);
    if (input) input.value = "";
  });
  const answer = document.getElementById("gv-answer");
  if (answer) answer.value = "0";
  const skill = document.getElementById("gv-skill");
  if (skill) skill.value = "";
  const challenge = document.getElementById("gv-challenge");
  if (challenge) challenge.checked = false;
  const cancel = document.getElementById("gv-huy");
  if (cancel) cancel.classList.add("an");
  const title = document.getElementById("gv-tieu-de-form");
  if (title) title.textContent = "Thêm câu hỏi";
}

function luuFormCauHoi() {
  const options = [0, 1, 2, 3].map((index) => document.getElementById(`gv-option-${index}`).value.trim());
  const cauHoi = {
    question: document.getElementById("gv-question").value.trim(),
    options,
    answer: Number(document.getElementById("gv-answer").value),
    topic: document.getElementById("gv-topic").value.trim(),
    explanation: document.getElementById("gv-explanation").value.trim()
  };
  const skill = document.getElementById("gv-skill").value;
  const listenText = document.getElementById("gv-listen").value.trim();
  const speaking = document.getElementById("gv-speaking").value.trim();
  if (skill) cauHoi.skill = skill;
  if (listenText) cauHoi.listenText = listenText;
  if (speaking) cauHoi.speaking = speaking;
  if (document.getElementById("gv-challenge").checked) cauHoi.challenge = true;

  if (!laCauHoiHopLe(cauHoi)) {
    document.getElementById("gv-thong-bao").textContent = "Cần nhập câu hỏi, chủ đề, 4 đáp án, đáp án đúng và giải thích.";
    return;
  }
  if (skill === "nghe" && !listenText) {
    document.getElementById("gv-thong-bao").textContent = "Câu luyện nghe cần có lời thoại audio.";
    return;
  }
  if (skill === "noi" && !speaking) {
    document.getElementById("gv-thong-bao").textContent = "Câu luyện nói cần có câu mẫu để nhận dạng.";
    return;
  }

  const bank = getBoNganHangDangChon();
  const nextBank = [...bank];
  if (cauHoiDangSua === -1) nextBank.push(cauHoi);
  else nextBank[cauHoiDangSua] = cauHoi;
  const khoi = document.getElementById("gv-khoi").value;
  const mon = document.getElementById("gv-mon").value;
  nganHangCauHoi[khoi][mon] = nextBank;
  if (luuNganHang()) {
    document.getElementById("gv-thong-bao").textContent = "Đã lưu trong trình duyệt này.";
    huySuaCauHoi();
    hienThiNganHangGiaoVien();
  } else {
    nganHangCauHoi[khoi][mon] = bank;
  }
}

function xoaCauHoi(index) {
  if (!window.confirm("Bạn có chắc muốn xóa câu hỏi này khỏi ngân hàng trên máy này?")) return;
  const bank = getBoNganHangDangChon();
  const nextBank = bank.filter((_, cauIndex) => cauIndex !== index);
  if (nextBank.length === 0) {
    window.alert("Ngân hàng mỗi môn cần ít nhất một câu hỏi.");
    return;
  }
  const khoi = document.getElementById("gv-khoi").value;
  const mon = document.getElementById("gv-mon").value;
  nganHangCauHoi[khoi][mon] = nextBank;
  if (luuNganHang()) {
    huySuaCauHoi();
    hienThiNganHangGiaoVien();
    document.getElementById("gv-thong-bao").textContent = "Đã xóa câu hỏi khỏi ngân hàng trên máy này.";
  } else {
    nganHangCauHoi[khoi][mon] = bank;
  }
}

function xuatNganHang() {
  const file = new Blob([JSON.stringify({ _studyMapVersion: 2, ...nganHangCauHoi }, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = "studymap-ngan-hang-cau-hoi.json";
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

function laNganHangHopLe(duLieu) {
  return ["6", "7", "8", "9"].every((khoi) =>
    ["toan", "khtn", "anh"].every((mon) =>
      Array.isArray(duLieu[khoi]?.[mon]) && duLieu[khoi][mon].length > 0
        && duLieu[khoi][mon].every(laCauHoiHopLe)
    )
  );
}

function nhapNganHang(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const duLieu = JSON.parse(String(reader.result));
      if (!laNganHangHopLe(duLieu)) {
        document.getElementById("gv-thong-bao").textContent =
          "Tệp JSON chưa đúng cấu trúc ngân hàng hoặc có câu hỏi sai. Chưa nhập dữ liệu.";
        return;
      }
      const previous = {};
      ["6", "7", "8", "9"].forEach((khoi) => {
        ["toan", "khtn", "anh"].forEach((mon) => {
          if (!previous[khoi]) previous[khoi] = {};
          previous[khoi][mon] = nganHangCauHoi[khoi][mon];
          nganHangCauHoi[khoi][mon] = duLieu[khoi][mon];
        });
      });
      if (duLieu._studyMapVersion !== 2) moRongNganHang();
      if (!luuNganHang()) {
        ["6", "7", "8", "9"].forEach((khoi) => {
          ["toan", "khtn", "anh"].forEach((mon) => {
            nganHangCauHoi[khoi][mon] = previous[khoi][mon];
          });
        });
        return;
      }
      huySuaCauHoi();
      hienThiNganHangGiaoVien();
      document.getElementById("gv-thong-bao").textContent = "Đã nhập ngân hàng câu hỏi vào trình duyệt này.";
    } catch (error) {
      console.error("Không đọc được tệp ngân hàng câu hỏi:", error);
      document.getElementById("gv-thong-bao").textContent = "Không đọc được tệp JSON. Hãy kiểm tra tệp rồi thử lại.";
    }
  };
  reader.onerror = () => {
    document.getElementById("gv-thong-bao").textContent = "Không thể đọc tệp đã chọn.";
  };
  reader.readAsText(file);
  event.target.value = "";
}

document.querySelectorAll(".chon-khoi select").forEach((select) => {
  select.addEventListener("change", () => {
    const control = select.closest(".chon-khoi");
    if (!control) return;
    control.classList.remove("vua-chon");
    void control.offsetWidth;
    control.classList.add("vua-chon");
    window.setTimeout(() => control.classList.remove("vua-chon"), 450);
  });
});

document.getElementById("nut-sau").addEventListener("click", () => doiCau(1));
document.getElementById("nut-nghe").addEventListener("click", phatAudioCauHoi);
nutNgheMau.addEventListener("click", phatMauLuyenNoi);
document.getElementById("nut-noi").addEventListener("click", batDauLuyenNoi);
document.getElementById("nut-am-thanh").addEventListener("click", (event) => {
  tiengAnMuted = !tiengAnMuted;
  event.currentTarget.textContent = `🔊 Tiếng báo đúng/sai: ${tiengAnMuted ? "tắt" : "bật"}`;
});
document.getElementById("gv-khoi").addEventListener("change", () => {
  huySuaCauHoi();
  hienThiNganHangGiaoVien();
});
document.getElementById("gv-mon").addEventListener("change", () => {
  huySuaCauHoi();
  hienThiNganHangGiaoVien();
});
document.getElementById("gv-luu").addEventListener("click", luuFormCauHoi);
document.getElementById("gv-huy").addEventListener("click", huySuaCauHoi);
document.getElementById("gv-xuat").addEventListener("click", xuatNganHang);
document.getElementById("gv-nhap-file").addEventListener("change", nhapNganHang);
document.getElementById("nut-dang-nhap-google").addEventListener("click", dangNhapGoogle);
document.getElementById("nut-dang-xuat-google").addEventListener("click", dangXuatGoogle);
document.getElementById("khoi-hoc").addEventListener("change", () => {
  veLoTrinhCaNhan(taiKhoanDangNhap ? baiLamCaNhan : docLuuTru(keyBaiLam, []));
  if (taiKhoanDangNhap) capNhatHoSoFirebase(taiKhoanDangNhap, document.getElementById("khoi-hoc").value);
});
const phienBanNganHang = napNganHangDaLuu();
if (phienBanNganHang < 2) {
  moRongNganHang();
  luuNganHang();
}
khoiTaoFirebase();
window.chonMon = chonMon;
window.veTrangChu = veTrangChu;
window.moChonTiengAnh = moChonTiengAnh;
window.moChonKHTN = moChonKHTN;
})();
