(() => {
  const { exercise: q, register } = window.studyMapData;
  const levels = ["nhan-biet", "thong-hieu", "van-dung", "van-dung", "van-dung-cao"];
  const question = (lesson, index, text, options, answer, explanation) =>
    q(`t6-${lesson}-${index + 1}`, levels[index], text, options, answer, explanation);
  const lesson = (number, title, area, theory, questions) => ({
    id: `toan6-bai-${number}`,
    title,
    area,
    theory,
    exercises: questions.map((item, index) => question(number, index, ...item))
  });
  const course = {
    title: "Toán 6 · Kết nối tri thức",
    lessons: [
      lesson(1, "Tập hợp. Phần tử của tập hợp", "Số học · Chương 1", "Tập hợp là một nhóm đối tượng được xác định rõ. Mỗi đối tượng thuộc tập hợp gọi là phần tử. Có thể viết tập hợp bằng cách liệt kê phần tử trong ngoặc nhọn hoặc nêu dấu hiệu đặc trưng; kí hiệu ∈ là thuộc, ∉ là không thuộc.", [
        ["Kí hiệu nào chỉ “2 là phần tử của A”?", ["2 ⊂ A", "2 ∈ A", "A ∈ 2", "2 = A"], 1, "Kí hiệu ∈ dùng để nói một phần tử thuộc tập hợp; vì vậy viết 2 ∈ A."],
        ["Cho A = {a, b, c}. Khẳng định nào đúng?", ["a ∉ A", "d ∈ A", "b ∈ A", "A ∈ b"], 2, "Các phần tử được liệt kê trong A là a, b, c; do đó b ∈ A."],
        ["Tập hợp các chữ cái trong từ “TOÁN” (không lặp) là:", ["{T, O, Á, N}", "{T, O, Á, N, T}", "{TOÁN}", "{T, A, N}"], 0, "Các chữ cái của từ là T, O, Á, N; mỗi chữ chỉ cần viết một lần."],
        ["Cho B = {x | x là số tự nhiên nhỏ hơn 4}. Cách liệt kê B là:", ["{1, 2, 3, 4}", "{0, 1, 2, 3}", "{0, 1, 2, 3, 4}", "{1, 2, 3}"], 1, "Số tự nhiên nhỏ hơn 4 gồm 0, 1, 2, 3."],
        ["Cho M = {1, 3, 5, 7}. Tập hợp nào bằng M?", ["{x | x là số tự nhiên lẻ nhỏ hơn 8}", "{x | x là số tự nhiên chẵn nhỏ hơn 8}", "{1, 3, 5, 7, 9}", "{3, 5, 7}"], 0, "Các số tự nhiên lẻ nhỏ hơn 8 chính xác là 1, 3, 5, 7 nên hai cách viết biểu diễn cùng tập hợp."]
      ]),
      lesson(2, "Tập hợp các số tự nhiên. Biểu diễn số tự nhiên", "Số học · Chương 1", "Tập hợp số tự nhiên là N = {0, 1, 2, …}; N* = {1, 2, 3, …}. Mỗi số tự nhiên có một vị trí trên tia số. Trong hệ thập phân, giá trị chữ số phụ thuộc vào hàng; khi so sánh, xét số chữ số rồi so sánh từ trái sang phải.", [
        ["Số nào thuộc N nhưng không thuộc N*?", ["0", "1", "−1", "1/2"], 0, "N gồm số 0 và các số nguyên dương, còn N* không có số 0."],
        ["Số 4 072 có chữ số 7 ở hàng nào?", ["Hàng nghìn", "Hàng trăm", "Hàng chục", "Hàng đơn vị"], 2, "Trong 4 072, các chữ số lần lượt ở hàng nghìn, trăm, chục, đơn vị; chữ số 7 ở hàng chục."],
        ["Số nào lớn nhất?", ["3 908", "3 890", "3 809", "3 098"], 0, "Cùng có hàng nghìn là 3; so hàng trăm rồi hàng chục, 3 908 lớn nhất."],
        ["Viết số gồm 5 nghìn, 2 trăm, 0 chục và 6 đơn vị.", ["5 026", "5 206", "5 260", "5 620"], 1, "Giá trị số là 5 000 + 200 + 0 + 6 = 5 206."],
        ["Số tự nhiên liền sau của 9 999 là:", ["9 998", "10 000", "10 001", "11 000"], 1, "Số liền sau hơn số đã cho 1 đơn vị: 9 999 + 1 = 10 000."]
      ]),
      lesson(3, "Các phép tính cộng, trừ, nhân, chia trong tập hợp số tự nhiên", "Số học · Chương 1", "Phép cộng và nhân có tính giao hoán, kết hợp; phép nhân phân phối đối với phép cộng. Phép trừ a − b trong N thực hiện được khi a ≥ b. Phép chia có dư: a = bq + r, với b > 0 và 0 ≤ r < b.", [
        ["Tính 125 + 75.", ["190", "200", "210", "250"], 1, "125 + 75 = 200."],
        ["Tính 8 × (20 + 5) theo tính chất phân phối.", ["8 × 20 + 5", "8 × 20 + 8 × 5", "8 + 20 × 5", "8 × 20 × 5"], 1, "a(b + c) = ab + ac nên 8(20 + 5) = 8×20 + 8×5."],
        ["Thực hiện phép chia 53 cho 6 được thương và số dư nào?", ["Thương 8, dư 5", "Thương 9, dư 1", "Thương 7, dư 11", "Thương 8, dư 6"], 0, "53 = 6×8 + 5, đồng thời 5 < 6 nên thương 8, dư 5."],
        ["Một thư viện xếp 7 kệ, mỗi kệ 36 quyển. Có tất cả bao nhiêu quyển?", ["242", "252", "262", "272"], 1, "Số sách là 7 × 36 = 252 quyển."],
        ["Tìm số x biết x : 8 = 17 dư 3.", ["131", "136", "139", "143"], 2, "Theo phép chia có dư, x = 8×17 + 3 = 139."]
      ]),
      lesson(4, "Phép tính lũy thừa với số mũ tự nhiên", "Số học · Chương 1", "Lũy thừa aⁿ (n > 0) là tích của n thừa số bằng a; a là cơ số, n là số mũ. Quy tắc: aᵐ·aⁿ = aᵐ⁺ⁿ và aᵐ:aⁿ = aᵐ⁻ⁿ khi a ≠ 0, m ≥ n. Lũy thừa được ưu tiên trước nhân, chia, cộng, trừ.", [
        ["Trong 5⁴, số 5 được gọi là:", ["Số mũ", "Cơ số", "Tích", "Thừa số chung"], 1, "Trong biểu thức aⁿ, a là cơ số; ở đây cơ số là 5."],
        ["Giá trị của 2⁵ là:", ["10", "16", "25", "32"], 3, "2⁵ = 2×2×2×2×2 = 32."],
        ["Viết 3×3×3×3 dưới dạng lũy thừa.", ["3×4", "3⁴", "4³", "3³"], 1, "Có bốn thừa số 3 nên tích viết là 3⁴."],
        ["Tính 10³ : 10.", ["10", "100", "1 000", "10 000"], 1, "10³ : 10¹ = 10² = 100."],
        ["Tính 2³ × 2².", ["2⁵ = 32", "4⁵ = 1 024", "2⁶ = 64", "4⁶ = 4 096"], 0, "Cùng cơ số nên cộng số mũ: 2³×2² = 2⁵ = 32."]
      ]),
      lesson(5, "Thứ tự thực hiện các phép tính", "Số học · Chương 1", "Trong biểu thức có ngoặc, thực hiện từ trong ra ngoài theo thứ tự ( ), [ ], { }. Không có ngoặc thì tính lũy thừa trước, rồi nhân chia từ trái sang phải, cuối cùng cộng trừ từ trái sang phải.", [
        ["Trong biểu thức 18 + 3 × 4, làm phép tính nào trước?", ["Cộng", "Nhân", "Trừ", "Chia"], 1, "Phép nhân được thực hiện trước phép cộng khi không có ngoặc."],
        ["Tính 20 − 12 : 3.", ["16", "8", "4", "28"], 0, "Chia trước: 12:3 = 4; sau đó 20−4 = 16."],
        ["Tính (15 + 9) : 6.", ["3", "4", "6", "24"], 1, "Tính trong ngoặc trước: (15+9):6 = 24:6 = 4."],
        ["Tính 2³ + 5 × 3.", ["39", "23", "27", "31"], 1, "Lũy thừa 2³=8, nhân 5×3=15; tổng 8+15=23."],
        ["Tính 100 − [24 : (2 + 4) + 3] × 5.", ["65", "75", "80", "85"], 0, "Trong ngoặc: 2+4=6; 24:6=4; 4+3=7; 100−7×5=65."],
      ]),
      lesson(6, "Tính chia hết trong tập hợp số tự nhiên. Dấu hiệu chia hết cho 2, cho 5", "Số học · Chương 2", "Nếu a = bq thì a chia hết cho b. Số có chữ số tận cùng là 0, 2, 4, 6, 8 chia hết cho 2; số có chữ số tận cùng là 0 hoặc 5 chia hết cho 5. Số tận cùng là 0 chia hết cho cả 2 và 5.", [
        ["Số nào chia hết cho 2?", ["315", "428", "537", "641"], 1, "428 tận cùng bằng 8 là chữ số chẵn nên chia hết cho 2."],
        ["Số nào chia hết cho 5?", ["123", "246", "371", "890"], 3, "Số chia hết cho 5 có chữ số tận cùng là 0 hoặc 5; 890 tận cùng là 0."],
        ["Chữ số x để 4 23x chia hết cho 2 có thể là:", ["1", "3", "6", "9"], 2, "Muốn chia hết cho 2, chữ số tận cùng x phải chẵn; trong các lựa chọn chỉ có 6."],
        ["Chữ số x để 71x chia hết cho 5 nhưng không chia hết cho 2 là:", ["0", "2", "5", "8"], 2, "Tận cùng 0 hoặc 5 chia hết cho 5; để không chia hết cho 2 phải tận cùng 5."],
        ["Có bao nhiêu số tự nhiên có hai chữ số chia hết cho cả 2 và 5?", ["8", "9", "10", "18"], 1, "Các số đó là 10, 20, …, 90, có 9 số."]
      ]),
      lesson(7, "Dấu hiệu chia hết cho 3, cho 9", "Số học · Chương 2", "Một số chia hết cho 3 (hoặc 9) khi và chỉ khi tổng các chữ số của số đó chia hết cho 3 (hoặc 9). Dấu hiệu này có thể dùng để tìm chữ số chưa biết hoặc kiểm tra nhanh một số.", [
        ["Số nào chia hết cho 3?", ["124", "235", "417", "502"], 2, "Tổng chữ số 4+1+7=12 chia hết cho 3."],
        ["Số nào chia hết cho 9?", ["234", "351", "427", "520"], 1, "Tổng chữ số của 351 là 3+5+1=9, chia hết cho 9."],
        ["Chữ số x để 24x chia hết cho 3 là:", ["1", "2", "3", "4"], 2, "Tổng chữ số là 2+4+x=6+x; với x=3 tổng bằng 9, chia hết cho 3."],
        ["Chữ số x để 5x2 chia hết cho 9 là:", ["1", "2", "3", "4"], 1, "Tổng chữ số là 5+x+2=7+x; để chia hết cho 9 cần x=2."],
        ["Trong các số 126, 234, 315, 408, số nào chia hết cho cả 3 và 9?", ["126", "234", "315", "408"], 0, "126 có tổng chữ số 1+2+6=9 nên chia hết cho 9, đồng thời chia hết cho 3."]
      ]),
      lesson(8, "Ước và bội", "Số học · Chương 2", "Nếu a chia hết cho b thì b là ước của a và a là bội của b. Ước của một số tự nhiên dương không vượt quá số đó; bội của một số có thể tiếp tục tăng mãi. Số 0 là bội của mọi số tự nhiên khác 0.", [
        ["Số nào là ước của 18?", ["5", "7", "9", "12"], 2, "18 chia hết cho 9 vì 18:9=2."],
        ["Số nào là bội của 7?", ["30", "35", "40", "45"], 1, "35 = 7×5 nên 35 là bội của 7."],
        ["Các ước dương của 12 là:", ["1, 2, 3, 4, 6, 12", "1, 2, 4, 8, 12", "2, 3, 5, 12", "1, 3, 6, 9, 12"], 0, "Các số 1, 2, 3, 4, 6, 12 đều chia hết 12; đây là toàn bộ ước dương của 12."],
        ["Một số vừa là ước của 24, vừa là bội của 3 là:", ["2", "4", "6", "8"], 2, "6 chia hết 24 và 6 = 3×2."],
        ["Tìm số tự nhiên nhỏ nhất khác 0 vừa là bội của 8 vừa là bội của 12.", ["16", "20", "24", "48"], 2, "Các bội chung dương nhỏ nhất là bội của BCNN(8,12)=24."]
      ]),
      lesson(9, "Số nguyên tố. Hợp số. Phân tích một số ra thừa số nguyên tố", "Số học · Chương 2", "Số nguyên tố là số tự nhiên lớn hơn 1 chỉ có hai ước dương là 1 và chính nó. Hợp số có nhiều hơn hai ước dương. Phân tích ra thừa số nguyên tố là viết số đó thành tích các số nguyên tố.", [
        ["Số nào là số nguyên tố?", ["1", "9", "13", "21"], 2, "13 chỉ có hai ước dương là 1 và 13."],
        ["Khẳng định nào đúng?", ["1 là số nguyên tố", "Mọi số chẵn đều là hợp số", "2 là số nguyên tố", "0 là hợp số"], 2, "2 có đúng hai ước dương 1 và 2 nên là số nguyên tố; 1 không phải nguyên tố hay hợp số."],
        ["Phân tích 30 ra thừa số nguyên tố được:", ["2×3×5", "2×15", "3×10", "5×6"], 0, "30 = 2×3×5, trong đó cả ba thừa số đều là số nguyên tố."],
        ["Số nào là hợp số?", ["17", "19", "23", "27"], 3, "27 có các ước 1, 3, 9, 27 nên có hơn hai ước."],
        ["Phân tích 84 ra thừa số nguyên tố.", ["2²×3×7", "2×3×14", "4×21", "2³×3×7"], 0, "84 = 2×42 = 2²×21 = 2²×3×7."]
      ]),
      lesson(10, "Ước chung. Ước chung lớn nhất", "Số học · Chương 2", "Ước chung của hai hay nhiều số là ước của tất cả các số đó. Ước chung lớn nhất (ƯCLN) là ước chung lớn nhất. Có thể tìm ƯCLN bằng cách phân tích các số ra thừa số nguyên tố, lấy các thừa số chung với số mũ nhỏ nhất.", [
        ["Ước chung của 12 và 18 là:", ["5", "6", "8", "9"], 1, "6 chia hết cả 12 và 18 nên là ước chung."],
        ["ƯCLN(8, 20) bằng:", ["2", "4", "8", "10"], 1, "Ước chung của 8 và 20 lớn nhất là 4."],
        ["Tìm ƯCLN(24, 36).", ["6", "12", "18", "72"], 1, "24=2³×3, 36=2²×3²; lấy thừa số chung với số mũ nhỏ nhất: 2²×3=12."],
        ["Có 24 bút đỏ và 36 bút xanh, chia đều vào các túi giống nhau, mỗi túi chỉ chứa một màu. Số túi nhiều nhất là:", ["6", "12", "18", "24"], 1, "Số túi lớn nhất là ƯCLN(24,36)=12; mỗi túi có 2 bút đỏ hoặc 3 bút xanh."],
        ["Tìm số lớn nhất chia 48 và 60 đều dư 0.", ["6", "10", "12", "15"], 2, "Số cần tìm là ƯCLN(48,60). Ta có 48=2⁴×3, 60=2²×3×5 nên ƯCLN=2²×3=12."]
      ]),
      lesson(11, "Bội chung. Bội chung nhỏ nhất", "Số học · Chương 2", "Bội chung của hai hay nhiều số là bội của tất cả các số đó. Bội chung nhỏ nhất (BCNN) là bội chung dương nhỏ nhất. Khi phân tích ra thừa số nguyên tố, lấy mọi thừa số với số mũ lớn nhất.", [
        ["Bội chung dương nhỏ nhất của 3 và 4 là:", ["7", "8", "12", "24"], 2, "Bội chung dương nhỏ nhất của 3 và 4 là 12."],
        ["BCNN(6, 8) bằng:", ["12", "18", "24", "48"], 2, "Bội của 6 và 8 nhỏ nhất khác 0 là 24."],
        ["Tìm BCNN(12, 18).", ["24", "30", "36", "72"], 2, "12=2²×3, 18=2×3² nên BCNN=2²×3²=36."],
        ["Một xe buýt đến bến mỗi 12 phút, xe khác mỗi 15 phút. Nếu cùng đến lúc 8 giờ, lần tiếp theo chúng cùng đến là:", ["8 giờ 30", "9 giờ", "9 giờ 15", "9 giờ 30"], 1, "BCNN(12,15)=60 phút, nên hai xe cùng đến sau 1 giờ, tức 9 giờ."],
        ["Tìm số nhỏ nhất khác 0 chia hết cho 8, 10 và 12.", ["60", "120", "180", "240"], 1, "8=2³, 10=2×5, 12=2²×3; BCNN=2³×3×5=120."]
      ]),
      lesson(12, "Tập hợp các số nguyên. Số đối của một số nguyên", "Số học · Chương 3", "Tập hợp số nguyên Z gồm số nguyên âm, số 0 và số nguyên dương. Trên trục số, số nguyên dương ở bên phải 0, số nguyên âm ở bên trái. Hai số đối nhau có tổng bằng 0; số đối của 0 là 0.", [
        ["Số nào là số nguyên âm?", ["3", "0", "−4", "1/2"], 2, "−4 nhỏ hơn 0 và là số nguyên âm."],
        ["Số đối của 9 là:", ["−9", "0", "9", "1/9"], 0, "Số đối của 9 là −9 vì 9+(−9)=0."],
        ["Nhiệt độ thấp hơn 0°C 6 độ được biểu diễn bởi:", ["6°C", "0°C", "−6°C", "−1/6°C"], 2, "Thấp hơn 0 độ 6 đơn vị được viết là −6°C."],
        ["Số đối của −15 là:", ["−15", "−1", "0", "15"], 3, "Đổi dấu −15 được 15; tổng của chúng bằng 0."],
        ["Cặp số nào có tổng bằng 0?", ["−7 và 7", "−7 và 6", "0 và 7", "−7 và −7"], 0, "Hai số đối nhau có tổng bằng 0; −7 và 7 là một cặp số đối nhau."]
      ]),
      lesson(13, "Thứ tự trong tập hợp các số nguyên", "Số học · Chương 3", "Trên trục số nằm ngang, số bên trái nhỏ hơn số bên phải. Mọi số nguyên âm nhỏ hơn 0 và mọi số nguyên dương lớn hơn 0. Trong hai số âm, số có giá trị tuyệt đối lớn hơn thì nhỏ hơn.", [
        ["Số nào lớn nhất?", ["−5", "−2", "0", "−1"], 2, "0 lớn hơn mọi số nguyên âm."],
        ["So sánh −8 và −3.", ["−8 > −3", "−8 < −3", "−8 = −3", "Không so sánh được"], 1, "−8 nằm bên trái −3 trên trục số nên −8 < −3."],
        ["Sắp xếp tăng dần các số −2, 4, 0, −5.", ["−5, −2, 0, 4", "−2, −5, 0, 4", "4, 0, −2, −5", "−5, 0, −2, 4"], 0, "Theo vị trí trên trục số: −5 < −2 < 0 < 4."],
        ["Nhiệt độ nào thấp nhất?", ["−2°C", "−8°C", "1°C", "0°C"], 1, "Trong các nhiệt độ đã cho, −8 nằm xa nhất về bên trái, nên thấp nhất."],
        ["Số nguyên x thỏa mãn −3 < x < 2 là:", ["−3, −2, −1, 0, 1, 2", "−2, −1, 0, 1", "−2, −1, 0, 1, 2", "−3, −2, −1, 0, 1"], 1, "Các số nguyên nằm giữa −3 và 2, không kể hai đầu mút, là −2, −1, 0, 1."]
      ]),
      lesson(14, "Phép cộng và phép trừ số nguyên", "Số học · Chương 3", "Cộng hai số cùng dấu: cộng giá trị tuyệt đối rồi giữ dấu chung. Cộng hai số khác dấu: lấy giá trị tuyệt đối lớn trừ nhỏ và giữ dấu số có giá trị tuyệt đối lớn hơn. Trừ một số bằng cộng với số đối của số đó.", [
        ["Tính (−4)+(−3).", ["−7", "−1", "1", "7"], 0, "Hai số âm cùng dấu: 4+3=7 và giữ dấu âm, được −7."],
        ["Tính 9+(−5).", ["−14", "−4", "4", "14"], 2, "Hai số khác dấu: 9−5=4, giữ dấu dương."],
        ["Tính (−8)−(−3).", ["−11", "−5", "5", "11"], 1, "Trừ số âm thành cộng số đối: −8+3=−5."],
        ["Buổi sáng nhiệt độ −2°C, trưa tăng 7°C. Nhiệt độ trưa là:", ["−9°C", "−5°C", "5°C", "9°C"], 2, "Nhiệt độ mới là −2+7=5°C."],
        ["Tính 15−(−6)+(−12).", ["−3", "3", "9", "33"], 2, "15−(−6)=21; 21+(−12)=9."]
      ]),
      lesson(15, "Quy tắc dấu ngoặc", "Số học · Chương 3", "Khi bỏ ngoặc có dấu “+” phía trước, giữ nguyên dấu các số hạng trong ngoặc. Khi bỏ ngoặc có dấu “−” phía trước, đổi dấu tất cả số hạng trong ngoặc. Nên rút gọn dấu ngoặc trước khi tính.", [
        ["Bỏ ngoặc: +(−3+5) được:", ["3−5", "−3+5", "3+5", "−3−5"], 1, "Trước ngoặc là dấu cộng nên giữ nguyên dấu các số hạng."],
        ["Bỏ ngoặc: −(4−7) được:", ["−4−7", "4−7", "−4+7", "4+7"], 2, "Trước ngoặc là dấu trừ nên đổi dấu 4 thành −4 và −7 thành +7."],
        ["Tính 12−(5−9).", ["−2", "8", "16", "26"], 2, "Bỏ ngoặc: 12−5+9=16."],
        ["Tính −(8−3)+2.", ["−7", "−3", "3", "7"], 1, "Bỏ ngoặc đổi dấu: −8+3+2=−3."],
        ["Rút gọn biểu thức 25−(7−12)−(4+3).", ["11", "19", "23", "33"], 2, "Bỏ ngoặc: 25−7+12−4−3 = 23."]
      ]),
      lesson(16, "Phép nhân số nguyên", "Số học · Chương 3", "Tích hai số nguyên cùng dấu là số dương; tích hai số nguyên khác dấu là số âm. Muốn nhân nhiều thừa số, xác định dấu của tích rồi nhân các giá trị tuyệt đối. Số nào nhân với 0 cũng bằng 0.", [
        ["Tích (−3)×4 có dấu:", ["Dương", "Âm", "Bằng 0", "Không xác định"], 1, "Hai thừa số khác dấu nên tích mang dấu âm."],
        ["Tính (−6)×(−2).", ["−12", "−8", "8", "12"], 3, "Hai thừa số âm nên tích dương; 6×2=12."],
        ["Tính 7×(−5).", ["−35", "−12", "12", "35"], 0, "Khác dấu nên tích âm; 7×5=35, kết quả −35."],
        ["Tính (−2)×3×(−4).", ["−24", "−12", "12", "24"], 3, "Có hai thừa số âm nên tích dương; 2×3×4=24."],
        ["Tính (−8)×[5+(−2)].", ["−40", "−24", "−8", "24"], 1, "Trong ngoặc 5−2=3; sau đó (−8)×3=−24."]
      ]),
      lesson(17, "Phép chia hết. Ước và bội của một số nguyên", "Số học · Chương 3", "Với a, b là số nguyên và b ≠ 0, nếu có số nguyên q sao cho a=bq thì a chia hết cho b. Quy tắc dấu của phép chia giống phép nhân: cùng dấu cho thương dương, khác dấu cho thương âm. Ước và bội trong Z có thể mang dấu âm hoặc dương.", [
        ["Tính (−24):6.", ["−4", "−6", "4", "6"], 0, "Số bị chia và số chia khác dấu nên thương âm; 24:6=4."],
        ["Tính (−35):(−7).", ["−5", "−3", "3", "5"], 3, "Cùng dấu nên thương dương; 35:7=5."],
        ["Số nào là ước của 12 trong Z?", ["−5", "−4", "5", "7"], 1, "12 chia hết cho −4 vì 12=(−4)×(−3)."],
        ["Tìm x biết (−6)x=42.", ["−7", "−6", "6", "7"], 0, "Chia hai vế cho −6: x=42:(−6)=−7."],
        ["Số nào vừa là ước của −18 vừa là số nguyên âm?", ["−1", "−5", "−8", "−10"], 0, "−1 là ước của mọi số nguyên; các lựa chọn còn lại không chia hết −18."]
      ]),
      lesson(18, "Phân số bằng nhau. Tính chất cơ bản của phân số", "Số học · Chương 4", "Phân số a/b (b ≠ 0) biểu thị thương a:b. Hai phân số a/b và c/d bằng nhau khi ad=bc. Nhân hoặc chia cả tử và mẫu cho cùng một số khác 0 sẽ được phân số bằng phân số đã cho.", [
        ["Phân số nào bằng 2/3?", ["4/9", "6/9", "8/15", "10/12"], 1, "6/9 rút gọn cả tử và mẫu cho 3 được 2/3."],
        ["Điền số thích hợp: 3/5 = 12/□.", ["15", "18", "20", "24"], 2, "Tử số 3 được nhân 4 thành 12, nên mẫu 5 cũng nhân 4 được 20."],
        ["Phân số nào bằng 7/8?", ["21/24", "14/20", "28/40", "35/48"], 0, "21/24 rút gọn cho 3 được 7/8."],
        ["Tìm x để x/18 = 2/3.", ["6", "9", "12", "15"], 2, "Nhân chéo: 3x=36, suy ra x=12."],
        ["Một lớp có 12 học sinh nữ trong tổng số 30 học sinh. Phân số tối giản chỉ số học sinh nữ là:", ["2/5", "3/5", "5/2", "12/30"], 0, "12/30 rút gọn cả tử và mẫu cho 6 được 2/5."]
      ]),
      lesson(19, "Rút gọn phân số. Quy đồng mẫu nhiều phân số", "Số học · Chương 4", "Rút gọn phân số bằng cách chia cả tử và mẫu cho ước chung khác 1; phân số tối giản khi tử và mẫu nguyên tố cùng nhau. Quy đồng mẫu số bằng cách chọn mẫu chung, thường là BCNN các mẫu, rồi nhân cả tử và mẫu thích hợp.", [
        ["Rút gọn 12/18.", ["2/3", "3/2", "4/9", "6/9"], 0, "ƯCLN(12,18)=6; chia cả tử và mẫu cho 6 được 2/3."],
        ["Mẫu số chung nhỏ nhất của 1/6 và 1/8 là:", ["12", "18", "24", "48"], 2, "BCNN(6,8)=24 nên mẫu chung nhỏ nhất là 24."],
        ["Quy đồng 2/3 và 3/4 theo mẫu 12 được:", ["8/12 và 9/12", "6/12 và 8/12", "2/12 và 3/12", "8/12 và 6/12"], 0, "2/3=8/12 và 3/4=9/12."],
        ["Phân số nào đã tối giản?", ["6/9", "10/15", "7/12", "18/24"], 2, "ƯCLN(7,12)=1 nên 7/12 không rút gọn được."],
        ["Quy đồng 5/12 và 7/18 theo mẫu chung nhỏ nhất.", ["15/36 và 14/36", "15/36 và 21/36", "5/36 và 7/36", "10/36 và 14/36"], 0, "BCNN(12,18)=36; 5/12=15/36 và 7/18=14/36."]
      ]),
      lesson(20, "So sánh phân số", "Số học · Chương 4", "Với hai phân số cùng mẫu dương, phân số có tử lớn hơn thì lớn hơn. Với hai phân số khác mẫu, có thể quy đồng mẫu hoặc so sánh với 0, 1 và các phân số quen thuộc. Nếu tử và mẫu dương, phân số có tử lớn hơn mẫu thì lớn hơn 1.", [
        ["Trong hai phân số 3/7 và 5/7, phân số lớn hơn là:", ["3/7", "5/7", "Hai phân số bằng nhau", "Không so sánh được"], 1, "Cùng mẫu 7, mà 5>3 nên 5/7>3/7."],
        ["Phân số nào lớn hơn 1?", ["3/5", "5/5", "7/6", "4/9"], 2, "Tử 7 lớn hơn mẫu 6 nên 7/6>1."],
        ["So sánh 2/3 và 3/5.", ["2/3 < 3/5", "2/3 = 3/5", "2/3 > 3/5", "Không so sánh được"], 2, "Quy đồng: 2/3=10/15, 3/5=9/15 nên 2/3>3/5."],
        ["Sắp xếp tăng dần: 1/2, 2/3, 3/4.", ["1/2, 2/3, 3/4", "3/4, 2/3, 1/2", "2/3, 1/2, 3/4", "1/2, 3/4, 2/3"], 0, "Quy đồng mẫu 12 được 6/12 < 8/12 < 9/12."],
        ["Trong một chiếc bánh, An ăn 3/8, Bình ăn 1/3. Ai ăn phần bánh lớn hơn?", ["An", "Bình", "Hai bạn ăn bằng nhau", "Không đủ dữ kiện"], 0, "3/8=9/24, còn 1/3=8/24; 9/24>8/24 nên An ăn nhiều hơn."]
      ]),
      lesson(21, "Phép cộng và phép trừ phân số", "Số học · Chương 4", "Muốn cộng hoặc trừ hai phân số cùng mẫu, cộng hoặc trừ tử số và giữ nguyên mẫu. Khác mẫu thì quy đồng mẫu trước. Nên rút gọn kết quả nếu có thể.", [
        ["Tính 2/9 + 4/9.", ["2/9", "6/9", "6/18", "8/9"], 1, "Cùng mẫu nên cộng tử: (2+4)/9=6/9."],
        ["Tính 5/6 − 1/6.", ["4/6", "4/12", "6/6", "1/6"], 0, "Cùng mẫu: (5−1)/6=4/6."],
        ["Tính 1/4 + 1/6.", ["2/10", "5/12", "1/12", "2/3"], 1, "Quy đồng mẫu 12: 1/4=3/12, 1/6=2/12; tổng là 5/12."],
        ["Tính 7/10 − 1/4.", ["6/6", "9/20", "3/20", "11/20"], 1, "Quy đồng mẫu 20: 14/20−5/20=9/20."],
        ["Một bình có 5/6 lít nước, dùng 1/4 lít. Còn lại bao nhiêu lít?", ["7/12", "1/2", "2/3", "11/12"], 0, "5/6−1/4=10/12−3/12=7/12 lít."]
      ]),
      lesson(22, "Phép nhân và phép chia phân số", "Số học · Chương 4", "Muốn nhân hai phân số, nhân tử với tử và mẫu với mẫu. Muốn chia cho một phân số khác 0, nhân phân số thứ nhất với phân số nghịch đảo của phân số thứ hai. Có thể rút gọn chéo trước khi nhân.", [
        ["Tính 2/3 × 3/5.", ["2/5", "5/2", "6/8", "1/5"], 0, "Nhân tử với tử, mẫu với mẫu: 6/15=2/5."],
        ["Số nghịch đảo của 4/7 là:", ["−4/7", "7/4", "4/7", "1/7"], 1, "Đổi chỗ tử và mẫu, số nghịch đảo của 4/7 là 7/4."],
        ["Tính 3/4 : 2/5.", ["3/10", "5/6", "15/8", "8/15"], 2, "3/4 : 2/5 = 3/4×5/2=15/8."],
        ["Tính 5/9 × 3/10.", ["1/6", "1/3", "2/3", "3/5"], 0, "Rút gọn 5 với 10 và 3 với 9: kết quả 1/6."],
        ["Một đoạn dây dài 3/4 m được cắt thành các đoạn, mỗi đoạn 1/8 m. Cắt được bao nhiêu đoạn?", ["3", "4", "6", "8"], 2, "Số đoạn là 3/4 : 1/8 = 3/4×8=6."]
      ]),
      lesson(23, "Giá trị phân số của một số", "Số học · Chương 4", "Muốn tìm m/n của số b, tính b×m/n (với n ≠ 0). Bài toán ngược: nếu m/n của một số bằng a thì số đó bằng a : m/n.", [
        ["2/5 của 20 là:", ["4", "8", "10", "12"], 1, "20×2/5=8."],
        ["3/4 của 12 bằng:", ["6", "8", "9", "16"], 2, "12×3/4=9."],
        ["Một lớp có 35 học sinh, 2/7 số học sinh tham gia câu lạc bộ cờ. Có bao nhiêu bạn?", ["5", "10", "14", "20"], 1, "35×2/7=5×2=10 bạn."],
        ["4/5 của một số bằng 20. Số đó là:", ["16", "25", "24", "30"], 1, "Gọi số cần tìm là x; 4/5 x=20 nên x=20:4/5=25."],
        ["Một bể chứa 240 lít nước; 3/8 lượng nước được dùng. Lượng nước còn lại là:", ["90 lít", "120 lít", "150 lít", "180 lít"], 2, "Lượng đã dùng 240×3/8=90 lít; còn 240−90=150 lít."]
      ]),
      lesson(24, "Hỗn số. Số thập phân", "Số học · Chương 4", "Hỗn số gồm phần nguyên và phần phân số bé hơn 1; đổi hỗn số ra phân số bằng cách lấy phần nguyên nhân mẫu rồi cộng tử. Phân số có mẫu 10, 100, 1 000,… viết được dưới dạng số thập phân; phần thập phân ở bên phải dấu phẩy.", [
        ["Hỗn số 2 1/3 bằng phân số nào?", ["5/3", "6/3", "7/3", "8/3"], 2, "2 1/3=(2×3+1)/3=7/3."],
        ["Số thập phân 0,45 đọc là:", ["Không phẩy bốn mươi lăm", "Không phẩy bốn năm", "Bốn phẩy năm", "Bốn mươi lăm phẩy không"], 1, "Sau dấu phẩy, các chữ số được đọc lần lượt: không phẩy bốn năm."],
        ["Viết 3/10 dưới dạng số thập phân.", ["0,03", "0,3", "3,0", "30"], 1, "Ba phần mười viết là 0,3."],
        ["Viết 1 3/5 dưới dạng số thập phân.", ["1,3", "1,5", "1,6", "1,8"], 2, "3/5=6/10=0,6; vậy 1 3/5=1,6."],
        ["Sắp xếp tăng dần 0,8; 3/4; 0,72.", ["0,72; 3/4; 0,8", "3/4; 0,72; 0,8", "0,8; 3/4; 0,72", "0,72; 0,8; 3/4"], 0, "Đổi 3/4=0,75; so sánh được 0,72<0,75<0,8."]
      ]),
      lesson(25, "Các phép tính với số thập phân", "Số học · Chương 4", "Cộng, trừ số thập phân bằng cách đặt các chữ số cùng hàng thẳng cột, dấu phẩy thẳng cột. Nhân số thập phân như nhân số tự nhiên rồi đặt dấu phẩy sao cho số chữ số ở phần thập phân bằng tổng số chữ số thập phân của các thừa số.", [
        ["Tính 2,4+1,3.", ["3,7", "3,17", "3,1", "4,7"], 0, "Cộng cùng hàng: 2,4+1,3=3,7."],
        ["Tính 5,8−2,6.", ["2,2", "3,2", "3,4", "8,4"], 1, "Đặt dấu phẩy thẳng cột rồi trừ: 5,8−2,6=3,2."],
        ["Tính 1,2×3.", ["0,36", "3,6", "36", "4,2"], 1, "12×3=36; thừa số có một chữ số thập phân nên tích là 3,6."],
        ["Tính 0,4×0,5.", ["0,02", "0,2", "2", "20"], 1, "4×5=20; tổng có hai chữ số thập phân nên kết quả là 0,20=0,2."],
        ["Một cuộn dây dài 12,5 m, cắt đi 3 đoạn, mỗi đoạn 2,4 m. Còn lại:", ["5,3 m", "7,2 m", "10,1 m", "19,7 m"], 0, "Độ dài đã cắt 3×2,4=7,2 m; còn 12,5−7,2=5,3 m."]
      ]),
      lesson(26, "Làm tròn số thập phân và ước lượng kết quả", "Số học · Chương 4", "Khi làm tròn đến một hàng, xét chữ số ngay bên phải hàng đó: nhỏ hơn 5 thì giữ nguyên, từ 5 trở lên thì tăng chữ số hàng làm tròn thêm 1. Ước lượng bằng cách làm tròn các số để kiểm tra kết quả có hợp lí hay không.", [
        ["Làm tròn 3,46 đến hàng phần mười được:", ["3,4", "3,5", "3,46", "4,0"], 1, "Chữ số hàng phần trăm là 6≥5 nên tăng hàng phần mười từ 4 lên 5."],
        ["Làm tròn 8,23 đến hàng đơn vị được:", ["8", "8,2", "8,3", "9"], 0, "Chữ số hàng phần mười là 2<5 nên giữ hàng đơn vị là 8."],
        ["Ước lượng 19,8×5,1 bằng cách làm tròn đến số nguyên gần nhất.", ["50", "75", "100", "150"], 2, "19,8≈20 và 5,1≈5, nên tích ước lượng 20×5=100."],
        ["Làm tròn 12,765 đến hàng phần trăm.", ["12,76", "12,77", "12,8", "13"], 1, "Hàng phần nghìn là 5 nên tăng hàng phần trăm 6 lên 7: 12,77."],
        ["Một phép tính cho kết quả 0,98×51=499,8. Nhận xét nào đúng?", ["Hợp lí vì 1×50≈50", "Không hợp lí vì kết quả phải xấp xỉ 50", "Hợp lí vì 0,98≈10", "Không thể ước lượng"], 1, "0,98≈1 và 51≈50 nên tích xấp xỉ 50; 499,8 lớn bất thường, không hợp lí."]
      ]),
      lesson(27, "Tỉ số và tỉ số phần trăm", "Số học · Chương 4", "Tỉ số của hai đại lượng cùng loại a và b (b ≠ 0) là a/b. Tỉ số phần trăm là tỉ số viết dưới dạng phần trăm: nhân tỉ số với 100%. Khi so sánh hai đại lượng, cần đổi về cùng đơn vị trước.", [
        ["Tỉ số của 3 và 5 viết là:", ["3+5", "3−5", "3/5", "5/3"], 2, "Tỉ số của a và b là a/b, nên tỉ số của 3 và 5 là 3/5."],
        ["Tỉ số phần trăm của 1/4 là:", ["4%", "20%", "25%", "40%"], 2, "1/4=0,25=25%."],
        ["Lớp có 12 bạn nữ và 18 bạn nam. Tỉ số số bạn nữ so với cả lớp là:", ["2/3", "2/5", "3/5", "12/18"], 1, "Cả lớp có 30 bạn; tỉ số nữ so với cả lớp là 12/30=2/5."],
        ["Đổi 0,08 thành tỉ số phần trăm.", ["0,8%", "8%", "80%", "800%"], 1, "0,08×100%=8%."],
        ["Một chai có 200 ml nước cam, trong đó 30 ml là nước cốt. Tỉ lệ phần trăm nước cốt là:", ["6%", "15%", "30%", "60%"], 1, "Tỉ lệ là 30/200=0,15=15%."]
      ]),
      lesson(28, "Bài toán về tỉ số phần trăm", "Số học · Chương 4", "Muốn tìm p% của một số a, tính a×p/100. Muốn tìm một số khi biết p% của nó bằng b, tính b:p/100. Muốn tìm tỉ số phần trăm của hai số, lấy số thứ nhất chia số thứ hai rồi nhân 100%.", [
        ["10% của 80 là:", ["0,8", "8", "10", "18"], 1, "80×10/100=8."],
        ["25% của 200 bằng:", ["25", "40", "50", "75"], 2, "200×25/100=50."],
        ["Một áo giá 400 000 đồng được giảm 10%. Số tiền giảm là:", ["4 000 đồng", "10 000 đồng", "40 000 đồng", "360 000 đồng"], 2, "Tiền giảm bằng 400 000×10/100=40 000 đồng."],
        ["15 học sinh trong 60 học sinh tham gia câu lạc bộ. Tỉ lệ tham gia là:", ["15%", "20%", "25%", "40%"], 2, "15/60×100%=25%."],
        ["Sau khi tăng 20%, một số tiền là 120 000 đồng. Số tiền ban đầu là:", ["96 000 đồng", "100 000 đồng", "110 000 đồng", "144 000 đồng"], 1, "120 000 đồng ứng với 120% ban đầu; số ban đầu là 120 000:1,2=100 000 đồng."]
      ]),
      lesson(29, "Tam giác đều. Hình vuông. Lục giác đều", "Hình học · Chương 5", "Tam giác đều có ba cạnh bằng nhau và ba góc bằng 60°. Hình vuông có bốn cạnh bằng nhau, bốn góc vuông. Lục giác đều có sáu cạnh bằng nhau, sáu góc bằng nhau; các hình đều có tính đối xứng.", [
        ["Tam giác đều có số cạnh bằng nhau là:", ["2", "3", "4", "6"], 1, "Tam giác đều có cả ba cạnh bằng nhau."],
        ["Mỗi góc của tam giác đều bằng:", ["45°", "60°", "90°", "120°"], 1, "Tổng ba góc tam giác là 180° và ba góc bằng nhau, mỗi góc 60°."],
        ["Hình vuông cạnh 5 cm có chu vi:", ["10 cm", "15 cm", "20 cm", "25 cm"], 2, "Chu vi hình vuông bằng 4 lần cạnh: 4×5=20 cm."],
        ["Lục giác đều có bao nhiêu cạnh?", ["4", "5", "6", "8"], 2, "Tiền tố lục chỉ sáu; lục giác có sáu cạnh."],
        ["Một tam giác đều có chu vi 27 cm. Độ dài mỗi cạnh là:", ["6 cm", "8 cm", "9 cm", "12 cm"], 2, "Ba cạnh bằng nhau nên mỗi cạnh dài 27:3=9 cm."]
      ]),
      lesson(30, "Hình chữ nhật. Hình thoi", "Hình học · Chương 5", "Hình chữ nhật có bốn góc vuông; các cạnh đối bằng nhau. Hình thoi có bốn cạnh bằng nhau; hai đường chéo vuông góc và cắt nhau tại trung điểm mỗi đường. Chu vi hình chữ nhật là 2(dài+rộng), hình thoi là 4 lần cạnh.", [
        ["Hình chữ nhật có:", ["Bốn cạnh bằng nhau", "Bốn góc vuông", "Chỉ một góc vuông", "Ba cạnh bằng nhau"], 1, "Đặc điểm nhận dạng của hình chữ nhật là có bốn góc vuông."],
        ["Hình thoi có số cạnh bằng nhau là:", ["2", "3", "4", "6"], 2, "Hình thoi có bốn cạnh bằng nhau."],
        ["Hình chữ nhật dài 9 cm, rộng 4 cm có chu vi:", ["13 cm", "26 cm", "36 cm", "72 cm"], 1, "Chu vi bằng 2×(9+4)=26 cm."],
        ["Hình thoi cạnh 7 cm có chu vi:", ["14 cm", "21 cm", "28 cm", "49 cm"], 2, "Chu vi hình thoi bằng 4×7=28 cm."],
        ["Hình chữ nhật có chu vi 34 cm, chiều dài 10 cm. Chiều rộng là:", ["5 cm", "7 cm", "12 cm", "14 cm"], 1, "Nửa chu vi là 17 cm; chiều rộng bằng 17−10=7 cm."]
      ]),
      lesson(31, "Hình bình hành. Hình thang cân", "Hình học · Chương 5", "Hình bình hành có các cặp cạnh đối song song và bằng nhau. Hình thang có một cặp cạnh đối song song; hình thang cân có hai cạnh bên bằng nhau và hai góc kề một đáy bằng nhau.", [
        ["Hình bình hành có các cặp cạnh đối:", ["Vuông góc", "Song song", "Cắt nhau", "Không bằng nhau"], 1, "Hai cặp cạnh đối của hình bình hành song song."],
        ["Hình thang cân có đặc điểm nào sau đây?", ["Hai cạnh bên bằng nhau", "Bốn cạnh bằng nhau", "Bốn góc vuông", "Hai đường chéo vuông góc"], 0, "Theo định nghĩa, hình thang cân có hai cạnh bên bằng nhau."],
        ["Hình bình hành có một cạnh dài 8 cm. Cạnh đối diện dài:", ["4 cm", "8 cm", "16 cm", "Không xác định"], 1, "Các cạnh đối của hình bình hành bằng nhau."],
        ["Hình thang cân có hai góc kề một đáy lần lượt là 72° và x°. Giá trị x là:", ["18°", "72°", "108°", "144°"], 1, "Hai góc kề cùng một đáy của hình thang cân bằng nhau nên x=72°."],
        ["Một hình bình hành có chu vi 34 cm, một cạnh dài 11 cm. Cạnh kề nó dài:", ["6 cm", "11 cm", "12 cm", "23 cm"], 0, "Nửa chu vi là 17 cm; cạnh kề bằng 17−11=6 cm."]
      ]),
      lesson(32, "Chu vi và diện tích của một số hình phẳng trong thực tiễn", "Hình học · Chương 5", "Chu vi là độ dài đường bao quanh hình; diện tích là phần mặt phẳng hình chiếm. Hình chữ nhật: P=2(a+b), S=ab; hình vuông: P=4a, S=a²; tam giác: S=(đáy×chiều cao):2. Cần ghi đúng đơn vị độ dài hoặc đơn vị diện tích.", [
        ["Đơn vị nào phù hợp để ghi diện tích mặt bàn?", ["cm", "m", "cm²", "kg"], 2, "Diện tích dùng đơn vị vuông như cm²; cm và m là đơn vị độ dài."],
        ["Diện tích hình chữ nhật dài 7 cm, rộng 3 cm là:", ["10 cm²", "20 cm²", "21 cm²", "42 cm²"], 2, "S=7×3=21 cm²."],
        ["Mảnh vườn hình vuông cạnh 6 m cần làm hàng rào quanh vườn. Cần bao nhiêu mét hàng rào?", ["12 m", "24 m", "36 m", "48 m"], 1, "Độ dài hàng rào là chu vi: 4×6=24 m."],
        ["Tam giác có đáy 10 cm, chiều cao 6 cm có diện tích:", ["16 cm²", "30 cm²", "60 cm²", "80 cm²"], 1, "S=(10×6):2=30 cm²."],
        ["Nền phòng hình chữ nhật 5 m×4 m lát gạch vuông cạnh 0,5 m. Cần bao nhiêu viên gạch, bỏ qua mạch vữa?", ["40", "60", "80", "100"], 2, "Diện tích nền 20 m²; diện tích viên gạch 0,25 m²; số viên 20:0,25=80."]
      ]),
      lesson(33, "Điểm. Đường thẳng", "Hình học · Chương 6", "Điểm được kí hiệu bằng chữ in hoa; đường thẳng được kí hiệu bằng chữ thường hoặc hai điểm nằm trên nó. Qua hai điểm phân biệt chỉ có một đường thẳng. Nếu điểm nằm trên đường thẳng thì điểm thuộc đường thẳng đó.", [
        ["Điểm thường được đặt tên bằng:", ["Chữ in hoa", "Chữ thường", "Chữ số La Mã", "Dấu phẩy"], 0, "Theo quy ước, điểm được kí hiệu bằng chữ cái in hoa như A, B."],
        ["Qua hai điểm phân biệt có bao nhiêu đường thẳng?", ["Không có", "Một", "Hai", "Vô số"], 1, "Hai điểm phân biệt xác định duy nhất một đường thẳng."],
        ["Nếu A nằm trên đường thẳng d, kí hiệu đúng là:", ["d ∈ A", "A ∈ d", "A = d", "d = A"], 1, "Điểm thuộc đường thẳng được kí hiệu A ∈ d."],
        ["Ba điểm A, B, C phân biệt cùng nằm trên một đường thẳng được gọi là:", ["Thẳng hàng", "Đồng quy", "Đối xứng", "Song song"], 0, "Các điểm cùng thuộc một đường thẳng gọi là thẳng hàng."],
        ["Hai đường thẳng khác nhau cùng đi qua A và B (A≠B) có thể xảy ra không?", ["Có, luôn có hai đường", "Có, có vô số đường", "Không, vì qua hai điểm chỉ có một đường thẳng", "Chỉ xảy ra khi AB=0"], 2, "Qua hai điểm phân biệt A, B chỉ có một đường thẳng nên không thể có hai đường khác nhau cùng đi qua cả hai."]
      ]),
      lesson(34, "Điểm nằm giữa hai điểm. Tia", "Hình học · Chương 6", "Ba điểm thẳng hàng có một điểm nằm giữa hai điểm còn lại. Tia Ax gồm điểm gốc A và một phần đường thẳng về một phía; hai tia đối nhau có chung gốc và tạo thành một đường thẳng.", [
        ["Tia có đặc điểm nào?", ["Có hai đầu mút", "Có một gốc và kéo dài về một phía", "Là đường cong kín", "Có độ dài xác định"], 1, "Tia có một điểm gốc và kéo dài vô hạn theo một phía."],
        ["Hai tia đối nhau phải có:", ["Hai gốc khác nhau", "Chung gốc và nằm trên cùng đường thẳng", "Hai hướng giống nhau", "Độ dài bằng nhau"], 1, "Hai tia đối nhau chung gốc, cùng nằm trên một đường thẳng và ngược hướng."],
        ["A, B, C thẳng hàng theo thứ tự A-B-C. Điểm nằm giữa hai điểm còn lại là:", ["A", "B", "C", "Không có"], 1, "Theo thứ tự A-B-C, B nằm giữa A và C."],
        ["Trên đường thẳng xy, hai tia Ox và Oy là:", ["Trùng nhau", "Đối nhau", "Vuông góc", "Song song"], 1, "Hai tia chung gốc O, nằm trên đường thẳng xy và ngược hướng nên đối nhau."],
        ["Nếu M nằm giữa A và B, AM=4 cm, MB=7 cm thì AB bằng:", ["3 cm", "7 cm", "11 cm", "28 cm"], 2, "Khi M nằm giữa A và B, AB=AM+MB=4+7=11 cm."]
      ]),
      lesson(35, "Đoạn thẳng. Độ dài đoạn thẳng", "Hình học · Chương 6", "Đoạn thẳng AB gồm hai đầu mút A, B và mọi điểm nằm giữa chúng. Độ dài đoạn thẳng là một số dương; hai đoạn thẳng bằng nhau khi có cùng độ dài. Nếu M nằm giữa A và B thì AB=AM+MB.", [
        ["Đoạn thẳng AB có bao nhiêu đầu mút?", ["1", "2", "3", "Vô số"], 1, "Đoạn thẳng AB có hai đầu mút A và B."],
        ["Nếu M nằm giữa A và B thì hệ thức đúng là:", ["AM=AB+MB", "AB=AM+MB", "MB=AB+AM", "AB=AM−MB luôn đúng"], 1, "Độ dài toàn đoạn bằng tổng hai đoạn thành phần: AB=AM+MB."],
        ["AB=9 cm, AM=4 cm và M nằm giữa A, B. MB bằng:", ["4 cm", "5 cm", "9 cm", "13 cm"], 1, "MB=AB−AM=9−4=5 cm."],
        ["Dùng dụng cụ nào đo độ dài đoạn thẳng?", ["Thước thẳng", "Thước đo góc", "Cân", "Đồng hồ"], 0, "Thước thẳng có vạch chia dùng để đo độ dài."],
        ["M nằm giữa A và B; AM=2x+1, MB=7, AB=18 (cm). Giá trị x là:", ["4", "5", "6", "7"], 1, "AM=AB−MB=11; do đó 2x+1=11, suy ra x=5."]
      ]),
      lesson(36, "Trung điểm của đoạn thẳng", "Hình học · Chương 6", "M là trung điểm của đoạn thẳng AB khi M nằm giữa A, B và MA=MB. Khi đó MA=MB=AB/2. Điểm chia đoạn thẳng thành hai phần bằng nhau phải thỏa mãn đồng thời cả hai điều kiện.", [
        ["Trung điểm M của AB cần thỏa mãn:", ["MA=MB", "M nằm giữa A và B", "Cả hai điều kiện trên", "MA+MB=0"], 2, "Trung điểm vừa nằm giữa hai đầu mút, vừa cách đều hai đầu mút."],
        ["Nếu AB=12 cm và M là trung điểm AB thì MA bằng:", ["3 cm", "6 cm", "12 cm", "24 cm"], 1, "MA=AB:2=12:2=6 cm."],
        ["AB=10 cm, AM=5 cm và M nằm giữa A, B. M là:", ["Trung điểm AB", "Đầu mút AB", "Điểm ngoài đoạn AB", "Không xác định"], 0, "MB=AB−AM=5 cm, nên M nằm giữa và MA=MB; M là trung điểm."],
        ["Trên đoạn AB dài 15 cm, M là trung điểm. Độ dài MB là:", ["5 cm", "7,5 cm", "10 cm", "15 cm"], 1, "Trung điểm chia đoạn thành hai phần bằng nhau: MB=15:2=7,5 cm."],
        ["M nằm giữa A, B; AM=x+2, MB=3x−4. Nếu M là trung điểm AB thì x bằng:", ["2", "3", "4", "5"], 1, "AM=MB nên x+2=3x−4; suy ra 2x=6 và x=3."]
      ]),
      lesson(37, "Góc. Số đo góc", "Hình học · Chương 6", "Góc gồm hai tia chung gốc; gốc chung là đỉnh, hai tia là hai cạnh của góc. Góc được kí hiệu bằng ba chữ cái với chữ ở giữa là đỉnh hoặc bằng chữ cái tại đỉnh. Số đo góc thường dùng đơn vị độ (°).", [
        ["Hai tia chung gốc tạo thành:", ["Đoạn thẳng", "Góc", "Đường tròn", "Hình vuông"], 1, "Góc được tạo bởi hai tia chung gốc."],
        ["Trong góc xOy, đỉnh của góc là:", ["x", "O", "y", "xy"], 1, "Chữ ở giữa trong kí hiệu xOy chỉ đỉnh O."],
        ["Một góc có số đo 45° được đọc là:", ["Bốn mươi lăm độ", "Bốn phẩy năm độ", "Bốn trăm năm độ", "Bốn mươi lăm phút"], 0, "Kí hiệu ° biểu thị đơn vị độ; 45° đọc là bốn mươi lăm độ."],
        ["Để đo một góc trên giấy, thường dùng:", ["Compa", "Thước đo góc", "Thước dây", "Cân"], 1, "Thước đo góc có vạch chia theo độ để xác định số đo góc."],
        ["Hai góc có số đo lần lượt 38° và 52°. Tổng số đo của chúng là:", ["14°", "76°", "90°", "180°"], 2, "38°+52°=90°."]
      ]),
      lesson(38, "Góc vuông, góc nhọn, góc tù, góc bẹt", "Hình học · Chương 6", "Góc nhọn có số đo nhỏ hơn 90°; góc vuông bằng 90°; góc tù lớn hơn 90° nhưng nhỏ hơn 180°; góc bẹt bằng 180°. Khi phân loại, so sánh số đo góc với 90° và 180°.", [
        ["Góc vuông có số đo:", ["45°", "90°", "120°", "180°"], 1, "Theo định nghĩa, góc vuông có số đo 90°."],
        ["Góc 35° là góc:", ["Nhọn", "Vuông", "Tù", "Bẹt"], 0, "35° nhỏ hơn 90° nên là góc nhọn."],
        ["Góc 125° thuộc loại:", ["Nhọn", "Vuông", "Tù", "Bẹt"], 2, "125° lớn hơn 90° và nhỏ hơn 180° nên là góc tù."],
        ["Góc bẹt bằng bao nhiêu góc vuông?", ["1", "2", "3", "4"], 1, "Góc bẹt 180°; góc vuông 90°; 180:90=2."],
        ["Một góc tù có số đo là số nào sau đây?", ["89°", "90°", "179°", "180°"], 2, "Góc tù lớn hơn 90° và nhỏ hơn 180°; 179° thỏa mãn."]
      ]),
      lesson(39, "Thu thập và phân loại dữ liệu", "Thống kê · Chương 7", "Dữ liệu là thông tin được thu thập để trả lời câu hỏi. Dữ liệu có thể là số hoặc không phải số. Cần chọn cách thu thập phù hợp, xác định rõ đối tượng và tránh dữ liệu thiếu, trùng lặp hoặc không liên quan.", [
        ["Thông tin nào là dữ liệu dạng số?", ["Màu yêu thích", "Tên lớp", "Số sách đã đọc", "Tên môn học"], 2, "Số sách đã đọc được biểu diễn bằng số nên là dữ liệu dạng số."],
        ["Muốn biết học sinh đi học bằng phương tiện gì, cách thu thập phù hợp là:", ["Đo chiều cao", "Phỏng vấn hoặc phiếu khảo sát", "Cân từng học sinh", "Đếm số lớp"], 1, "Câu hỏi về phương tiện đi học cần được thu thập trực tiếp bằng khảo sát hoặc phỏng vấn."],
        ["Dữ liệu về màu sắc yêu thích thuộc loại:", ["Dữ liệu định tính", "Dữ liệu định lượng", "Dữ liệu thời gian", "Dữ liệu đo lường"], 0, "Màu sắc là thuộc tính được phân loại, không phải số đo; đó là dữ liệu định tính."],
        ["Để khảo sát chiều cao học sinh, đơn vị đo phù hợp là:", ["Kilôgam", "Xentimét", "Lít", "Giây"], 1, "Chiều cao là độ dài, có thể đo và ghi bằng xentimét."],
        ["Một phiếu khảo sát có câu hỏi không liên quan đến mục tiêu nghiên cứu. Nên:", ["Giữ nguyên để phiếu dài hơn", "Loại bỏ hoặc chỉnh câu hỏi đó", "Ghi đáp án ngẫu nhiên", "Hỏi lại cùng câu nhiều lần"], 1, "Câu hỏi cần phục vụ mục tiêu; câu không liên quan làm giảm chất lượng dữ liệu nên cần loại bỏ hoặc sửa."]
      ]),
      lesson(40, "Biểu diễn dữ liệu trên bảng", "Thống kê · Chương 7", "Bảng dữ liệu giúp sắp xếp thông tin theo hàng và cột. Bảng thống kê thường ghi tên đối tượng hoặc nhóm, số liệu tương ứng và đơn vị. Tổng các tần số phải bằng số quan sát đã thu thập.", [
        ["Bảng thống kê thường được tổ chức theo:", ["Hàng và cột", "Trục và tia", "Đỉnh và cạnh", "Tử và mẫu"], 0, "Bảng gồm các hàng và cột để sắp xếp, đối chiếu dữ liệu."],
        ["Trong bảng số học sinh từng tổ, cột “Số học sinh” cần ghi:", ["Tên tổ", "Đơn vị hoặc số lượng", "Màu sắc", "Ngày sinh"], 1, "Cột số lượng cần ghi số học sinh; nếu cần có thể ghi đơn vị phù hợp."],
        ["Có 4 nhóm có lần lượt 6, 7, 8, 9 học sinh. Tổng số học sinh là:", ["28", "29", "30", "31"], 2, "Cộng các nhóm: 6+7+8+9=30 học sinh."],
        ["Bảng khảo sát có số liệu 12, 9, 14 cho ba lựa chọn. Tổng số lượt là:", ["23", "26", "35", "126"], 2, "Tổng lượt trả lời bằng 12+9+14=35."],
        ["Một bảng có tổng tần số 28 nhưng khảo sát 30 bạn, mỗi bạn trả lời một lần. Bảng đang:", ["Đủ chính xác", "Thiếu 2 lượt dữ liệu", "Thừa 2 lượt dữ liệu", "Có 58 lượt"], 1, "Tổng tần số phải là 30; bảng chỉ có 28 nên thiếu 2 lượt."]
      ]),
      lesson(41, "Biểu đồ cột - Biểu đồ cột kép", "Thống kê · Chương 7", "Biểu đồ cột biểu diễn số liệu bằng các cột có chiều cao tương ứng với giá trị. Biểu đồ cột kép dùng hai cột đặt cạnh nhau cho mỗi nhóm để so sánh hai bộ dữ liệu. Trục, tên biểu đồ, nhãn và đơn vị cần ghi rõ.", [
        ["Biểu đồ cột biểu diễn giá trị bằng:", ["Độ cao các cột", "Độ dài đường tròn", "Góc của hình quạt", "Màu nền"], 0, "Mỗi cột có chiều cao tương ứng với số liệu của nhóm."],
        ["Biểu đồ cột kép phù hợp nhất để:", ["So sánh hai nhóm dữ liệu theo cùng danh mục", "Đo góc", "Biểu diễn một điểm trên đường thẳng", "Tìm ước chung"], 0, "Hai cột cho mỗi danh mục giúp so sánh trực quan hai bộ dữ liệu."],
        ["Số liệu 4, 7, 5 được biểu diễn bằng ba cột. Cột cao nhất ứng với:", ["4", "5", "7", "Ba cột bằng nhau"], 2, "Giá trị lớn nhất là 7 nên cột biểu diễn 7 cao nhất."],
        ["Lớp 6A có 18 bạn thích bóng đá, lớp 6B có 22 bạn. Trên biểu đồ cột kép, cột 6B so với cột 6A:", ["Thấp hơn", "Cao hơn", "Bằng nhau", "Không thể so sánh"], 1, "22>18 nên cột của lớp 6B cao hơn cột của lớp 6A."],
        ["Khi đọc biểu đồ cột, trục đứng ghi số học sinh từ 0 đến 50 nhưng mỗi vạch cách nhau 10. Cột tới vạch thứ ba trên 0 biểu diễn:", ["20", "30", "40", "50"], 1, "Mỗi khoảng ứng với 10; vạch thứ ba trên 0 là 3×10=30."]
      ]),
      lesson(42, "Mô tả xác suất bằng tỉ số", "Xác suất · Chương 7", "Trong một mô hình có các kết quả đồng khả năng, xác suất của biến cố bằng số kết quả thuận lợi chia cho tổng số kết quả có thể. Xác suất nằm từ 0 đến 1; biến cố chắc chắn có xác suất 1, biến cố không thể có xác suất 0.", [
        ["Gieo một con xúc xắc cân đối. Số kết quả có thể là:", ["2", "4", "6", "12"], 2, "Xúc xắc có sáu mặt, nên có sáu kết quả có thể xuất hiện."],
        ["Rút ngẫu nhiên một thẻ trong 10 thẻ đánh số 1–10. Xác suất rút được thẻ số 5 là:", ["1/2", "1/5", "1/10", "5/10"], 2, "Có 1 kết quả thuận lợi trên 10 kết quả đồng khả năng, nên xác suất là 1/10."],
        ["Gieo xúc xắc cân đối, xác suất xuất hiện số chẵn là:", ["1/6", "1/3", "1/2", "2/3"], 2, "Ba mặt chẵn 2, 4, 6 trên tổng sáu mặt nên xác suất 3/6=1/2."],
        ["Trong túi có 3 bi đỏ và 2 bi xanh. Xác suất lấy được bi đỏ là:", ["2/5", "3/5", "1/2", "3/2"], 1, "Có 3 bi đỏ trên tổng 5 bi nên xác suất là 3/5."],
        ["Một hộp chỉ có bi xanh. Xác suất lấy được bi đỏ là:", ["0", "1/4", "1/2", "1"], 0, "Không có bi đỏ trong hộp nên đây là biến cố không thể, xác suất bằng 0."]
      ]),
      lesson(43, "Phép thử nghiệm - Biến cố đơn giản - Xác suất thực nghiệm", "Xác suất · Chương 7", "Phép thử nghiệm là hoạt động có kết quả chưa biết trước, như gieo xúc xắc. Biến cố là tập hợp kết quả quan tâm. Xác suất thực nghiệm bằng số lần biến cố xảy ra chia tổng số lần thử; khi số lần thử tăng, tỉ lệ thực nghiệm thường ổn định hơn.", [
        ["Hoạt động nào là phép thử nghiệm?", ["Đọc một dòng chữ", "Gieo đồng xu và ghi mặt xuất hiện", "Viết tên mình", "Đếm số ngón tay"], 1, "Kết quả gieo đồng xu chưa biết trước nên đây là phép thử nghiệm."],
        ["Gieo đồng xu, biến cố “xuất hiện mặt sấp” là:", ["Một kết quả được quan tâm", "Toàn bộ phép thử", "Một dụng cụ", "Một số nguyên"], 0, "Biến cố mô tả kết quả mà ta quan tâm trong phép thử."],
        ["Gieo xúc xắc 20 lần, mặt 6 xuất hiện 4 lần. Xác suất thực nghiệm của biến cố ra mặt 6 là:", ["1/20", "1/6", "1/5", "4/5"], 2, "Tỉ lệ thực nghiệm bằng 4/20=1/5."],
        ["Một đồng xu được tung 40 lần, mặt ngửa xuất hiện 23 lần. Xác suất thực nghiệm của mặt ngửa là:", ["17/40", "23/40", "1/2", "40/23"], 1, "Số lần xuất hiện mặt ngửa chia số lần thử: 23/40."],
        ["Nếu tung đồng xu cân đối ngày càng nhiều lần, tỉ lệ thực nghiệm xuất hiện mặt ngửa thường có xu hướng gần:", ["0", "1/4", "1/2", "1"], 2, "Hai mặt đồng khả năng nên xác suất lí thuyết của mặt ngửa là 1/2; tỉ lệ thực nghiệm thường gần giá trị này khi thử nhiều lần."]
      ])
    ],
    exams: [
      { id: "t6-15p", type: "15p", title: "Kiểm tra 15 phút · Toán 6", duration: 15, questionIds: ["t6-1-1", "t6-2-2", "t6-3-3", "t6-4-1", "t6-5-2"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm. Chọn một đáp án cho mỗi câu." },
      { id: "t6-giuaki", type: "giuaki", title: "Kiểm tra giữa kì · Toán 6", duration: 45, questionIds: ["t6-8-3", "t6-10-4", "t6-14-2", "t6-19-3", "t6-22-5"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm. Trình bày lời giải nháp trước khi chọn đáp án." },
      { id: "t6-cuoiki", type: "cuoiki", title: "Kiểm tra cuối kì · Toán 6", duration: 60, questionIds: ["t6-28-5", "t6-32-4", "t6-36-5", "t6-41-5", "t6-43-5"], rubric: "Mỗi câu đúng 2 điểm; tổng 10 điểm. Câu vận dụng cao cần nêu đủ bước lập luận." }
    ]
  };

  const extraLevels = [
    "nhan-biet", "nhan-biet", "nhan-biet", "nhan-biet",
    "thong-hieu", "thong-hieu", "thong-hieu", "thong-hieu",
    "van-dung", "van-dung", "van-dung",
    "van-dung-cao", "van-dung-cao", "van-dung-cao", "van-dung-cao"
  ];
  function extraQuestion(lessonNumber, index, prompt, answer, explanation, choices) {
    const correct = String(answer);
    const options = choices || [answer, Number(answer) + 1, Number(answer) - 1, Number(answer) + 2];
    return q(
      `t6-${lessonNumber}-${index + 6}`,
      extraLevels[index],
      prompt,
      options.map(String),
      options.findIndex((option) => String(option) === correct),
      explanation
    );
  }
  function gcd(a, b) {
    while (b) [a, b] = [b, a % b];
    return a;
  }
  function extraForLesson(lessonNumber, index) {
    const n = index + 1;
    const a = n + 4;
    const b = n + 2;
    if (lessonNumber === 1) {
      const size = n + 2;
      return extraQuestion(lessonNumber, index, `Tập hợp A = {1, 2, …, ${size}} có bao nhiêu phần tử?`, size, `Các số từ 1 đến ${size} có tất cả ${size} phần tử.`);
    }
    if (lessonNumber === 2) {
      const value = (n % 9 + 1) * 100 + (n % 8 + 1) * 10 + n % 10;
      return extraQuestion(lessonNumber, index, `Viết số có ${n % 9 + 1} trăm, ${n % 8 + 1} chục và ${n % 10} đơn vị.`, value, `Giá trị số là ${(n % 9 + 1) * 100} + ${(n % 8 + 1) * 10} + ${n % 10} = ${value}.`);
    }
    if (lessonNumber === 3) {
      const value = a * (b + 3);
      return extraQuestion(lessonNumber, index, `Tính ${a} × (${b} + 3).`, value, `Tính trong ngoặc: ${b}+3=${b + 3}; tiếp theo ${a}×${b + 3}=${value}.`);
    }
    if (lessonNumber === 4) {
      const power = n % 6 + 2;
      const value = 2 ** power;
      return extraQuestion(lessonNumber, index, `Tính 2^${power}.`, value, `2^${power} là tích của ${power} thừa số 2, bằng ${value}.`);
    }
    if (lessonNumber === 5) {
      const value = a + b * 3;
      return extraQuestion(lessonNumber, index, `Tính ${a} + ${b} × 3.`, value, `Nhân trước: ${b}×3=${b * 3}; sau đó ${a}+${b * 3}=${value}.`);
    }
    if (lessonNumber === 6) {
      const digit = 0;
      return extraQuestion(lessonNumber, index, `Chữ số tận cùng nào để số ${a}${b}□ chia hết cho cả 2 và 5?`, digit, `Số chia hết cho cả 2 và 5 phải tận cùng bằng 0; do đó chữ số cần điền là 0.`, ["0", "2", "5", "8"]);
    }
    if (lessonNumber === 7) {
      const digit = (9 - ((a + b) % 9)) % 9;
      return extraQuestion(lessonNumber, index, `Tìm chữ số x để số ${a}${b}x chia hết cho 9.`, digit, `Tổng chữ số cần chia hết cho 9. ${a}+${b}+${digit}=${a + b + digit}, là bội của 9.`);
    }
    if (lessonNumber === 8) {
      const value = 2 * n;
      return extraQuestion(lessonNumber, index, `Số nào sau đây là ước của ${value}?`, value / 2, `${value} chia hết cho ${value / 2} vì ${value}:${value / 2}=2.`);
    }
    if (lessonNumber === 9) {
      const p = [2, 3, 5, 7, 11][n % 5];
      const value = p * (n + 1);
      return extraQuestion(lessonNumber, index, `Số ${value} có thừa số nguyên tố ${p}. Giá trị của thừa số đó là:`, p, `${value} được tạo thành từ tích có thừa số nguyên tố ${p}.`);
    }
    if (lessonNumber === 10) {
      const common = n % 6 + 2;
      const x = common * (n + 2);
      const y = common * (n + 3);
      const value = gcd(x, y);
      return extraQuestion(lessonNumber, index, `Tìm ƯCLN(${x}, ${y}).`, value, `ƯCLN(${x}, ${y})=${value}, vì ${x} và ${y} cùng chia hết cho ${value} và không có ước chung lớn hơn.`);
    }
    if (lessonNumber === 11) {
      const x = n % 5 + 2;
      const y = n % 4 + 3;
      const value = x * y / gcd(x, y);
      return extraQuestion(lessonNumber, index, `Tìm BCNN(${x}, ${y}).`, value, `BCNN(${x}, ${y})=${x}×${y}:ƯCLN(${x},${y})=${value}.`);
    }
    if (lessonNumber === 12) {
      return extraQuestion(lessonNumber, index, `Số đối của −${a} là số nào?`, a, `Số đối của −${a} là ${a}, vì hai số có tổng bằng 0.`);
    }
    if (lessonNumber === 13) {
      const value = -(n + 1);
      return extraQuestion(lessonNumber, index, `Số nào lớn hơn: −${n + 1} hay −${n + 3}?`, value, `Trên trục số, −${n + 1} nằm bên phải −${n + 3}, nên số lớn hơn là −${n + 1}.`, [`-${n + 1}`, `-${n + 3}`, "0", `${n + 1}`]);
    }
    if (lessonNumber === 14) {
      const value = -a + (b + 5);
      return extraQuestion(lessonNumber, index, `Tính (−${a}) + ${b + 5}.`, value, `Hai số trái dấu: ${b + 5}−${a}=${value}; kết quả mang dấu dương.`);
    }
    if (lessonNumber === 15) {
      const value = a - (b + 4);
      return extraQuestion(lessonNumber, index, `Tính ${a} − (${b + 4}).`, value, `Thực hiện phép trừ: ${a}−${b + 4}=${value}.`);
    }
    if (lessonNumber === 16) {
      const value = -a * b;
      return extraQuestion(lessonNumber, index, `Tính (−${a}) × ${b}.`, value, `Hai thừa số trái dấu nên tích âm; ${a}×${b}=${Math.abs(value)}.`);
    }
    if (lessonNumber === 17) {
      const value = -(a * b) / b;
      return extraQuestion(lessonNumber, index, `Tính (−${a * b}) : ${b}.`, value, `Hai số trái dấu nên thương âm; ${a * b}:${b}=${a}.`);
    }
    if (lessonNumber === 18 || lessonNumber === 19) {
      const denominator = n + 4;
      const multiplier = 2;
      return extraQuestion(lessonNumber, index, `Phân số ${multiplier}/${denominator} được nhân cả tử và mẫu với 3. Tử số mới là:`, multiplier * 3, `Tử số mới bằng ${multiplier}×3=${multiplier * 3}; nhân cả tử và mẫu giữ nguyên giá trị phân số.`);
    }
    if (lessonNumber === 20) {
      const value = n + 1;
      return extraQuestion(lessonNumber, index, `So sánh ${value}/${value + 1} với 1: tử số của phân số này nhỏ hơn mẫu số bao nhiêu đơn vị?`, 1, `Mẫu số hơn tử số đúng 1 đơn vị; phân số nhỏ hơn 1.`);
    }
    if (lessonNumber === 21) {
      const denominator = n + 4;
      return extraQuestion(lessonNumber, index, `Tính ${1}/${denominator} + ${2}/${denominator}. Tử số của kết quả tối giản là:`, 3 / gcd(3, denominator), `Cùng mẫu nên cộng tử: 1/${denominator}+2/${denominator}=3/${denominator}; rút gọn nếu có ước chung.`);
    }
    if (lessonNumber === 22) {
      const common = gcd(a, b);
      return extraQuestion(lessonNumber, index, `Tính ${a}/3 × 3/${b}. Tử số của kết quả tối giản là:`, a / common, `${a}/3×3/${b}=${a}/${b}; rút gọn cả tử và mẫu cho ${common} được tử số ${a / common}.`);
    }
    if (lessonNumber === 23) {
      const denominator = n % 4 + 2;
      const numerator = 1;
      const total = denominator * (n + 2);
      return extraQuestion(lessonNumber, index, `Tìm ${numerator}/${denominator} của ${total}.`, total / denominator, `${total}×${numerator}/${denominator}=${total / denominator}.`);
    }
    if (lessonNumber === 24) {
      const value = n / 10;
      return extraQuestion(lessonNumber, index, `Viết ${n}/10 dưới dạng số thập phân.`, value, `Phần mười được viết ở chữ số thứ nhất sau dấu phẩy: ${n}/10=${value}.`);
    }
    if (lessonNumber === 25) {
      const x = n / 10;
      const y = (n + 2) / 10;
      const value = Math.round((x + y) * 10) / 10;
      return extraQuestion(lessonNumber, index, `Tính ${x} + ${y}.`, value, `Cộng theo từng hàng thập phân: ${x}+${y}=${value}.`);
    }
    if (lessonNumber === 26) {
      const value = Math.floor(n / 2) + 1;
      const decimal = `${value},${n % 10}${(n % 5) + 5}`;
      const rounded = value + ((n % 5) + 5 >= 5 ? 0.1 : 0);
      const roundedText = rounded.toFixed(1).replace(".", ",");
      const choices = [
        roundedText,
        (rounded + 0.1).toFixed(1).replace(".", ","),
        (rounded - 0.1).toFixed(1).replace(".", ","),
        (rounded + 0.2).toFixed(1).replace(".", ",")
      ];
      return extraQuestion(lessonNumber, index, `Làm tròn ${decimal} đến hàng phần mười.`, roundedText, `Chữ số hàng phần trăm là ${((n % 5) + 5)} nên làm tròn hàng phần mười lên.`, choices);
    }
    if (lessonNumber === 27) {
      const denominator = 4;
      const value = n * 25;
      return extraQuestion(lessonNumber, index, `${n} trên ${denominator * n} viết dưới dạng tỉ số phần trăm là:`, 25, `${n}/${denominator * n}=1/4=25%.`);
    }
    if (lessonNumber === 28) {
      const value = (n + 2) * 10;
      return extraQuestion(lessonNumber, index, `Tìm 10% của ${value}.`, value / 10, `${value}×10/100=${value / 10}.`);
    }
    if (lessonNumber === 29) {
      const side = n + 2;
      return extraQuestion(lessonNumber, index, `Chu vi tam giác đều cạnh ${side} cm là:`, side * 3, `Tam giác đều có ba cạnh bằng nhau nên chu vi là 3×${side}=${side * 3} cm.`);
    }
    if (lessonNumber === 30) {
      const length = n + 5;
      const width = n + 2;
      return extraQuestion(lessonNumber, index, `Diện tích hình chữ nhật dài ${length} cm, rộng ${width} cm là:`, length * width, `Diện tích bằng dài×rộng=${length}×${width}=${length * width} cm².`);
    }
    if (lessonNumber === 31) {
      const sideA = n + 4;
      const sideB = n + 2;
      return extraQuestion(lessonNumber, index, `Hình bình hành có hai cạnh kề ${sideA} cm và ${sideB} cm. Chu vi bằng:`, 2 * (sideA + sideB), `Chu vi bằng 2 lần tổng hai cạnh kề: 2×(${sideA}+${sideB})=${2 * (sideA + sideB)} cm.`);
    }
    if (lessonNumber === 32) {
      const base = n + 4;
      const height = n + 2;
      return extraQuestion(lessonNumber, index, `Tam giác có đáy ${base} cm, chiều cao ${height} cm. Diện tích là:`, base * height / 2, `Diện tích tam giác bằng đáy×chiều cao:2 = ${base}×${height}:2=${base * height / 2} cm².`);
    }
    if (lessonNumber === 33) {
      const value = n + 1;
      return extraQuestion(lessonNumber, index, `Có ${value} điểm phân biệt, không có ba điểm nào thẳng hàng. Có bao nhiêu đường thẳng nối từng cặp điểm?`, value * (value - 1) / 2, `Mỗi cặp điểm xác định một đường thẳng, số đường là ${value}×${value - 1}:2=${value * (value - 1) / 2}.`);
    }
    if (lessonNumber === 34 || lessonNumber === 35) {
      const first = n + 2;
      const second = n + 4;
      return extraQuestion(lessonNumber, index, `M nằm giữa A và B, AM=${first} cm, MB=${second} cm. Tính AB.`, first + second, `Vì M nằm giữa A và B nên AB=AM+MB=${first}+${second}=${first + second} cm.`);
    }
    if (lessonNumber === 36) {
      const value = 2 * (n + 2);
      return extraQuestion(lessonNumber, index, `M là trung điểm AB, AB=${value} cm. Tính AM.`, value / 2, `Trung điểm chia đoạn thành hai phần bằng nhau, AM=AB:2=${value}:2=${value / 2} cm.`);
    }
    if (lessonNumber === 37 || lessonNumber === 38) {
      const angle = n * 5 + 20;
      const value = 180 - angle;
      return extraQuestion(lessonNumber, index, `Hai góc kề bù; một góc bằng ${angle}°. Góc còn lại bằng:`, value, `Hai góc kề bù có tổng 180°, nên góc còn lại là 180°−${angle}°=${value}°.`);
    }
    if (lessonNumber === 39 || lessonNumber === 40) {
      const value = n + 3;
      const total = value * 4;
      return extraQuestion(lessonNumber, index, `Bốn số có tổng ${total}. Số trung bình cộng là:`, value, `Số trung bình cộng bằng tổng chia số lượng: ${total}:4=${value}.`);
    }
    if (lessonNumber === 41) {
      const value = n + 5;
      return extraQuestion(lessonNumber, index, `Biểu đồ cột có các giá trị ${value - 2}, ${value}, ${value - 1}. Giá trị lớn nhất là:`, value, `So sánh ba giá trị, ${value} lớn nhất.`);
    }
    if (lessonNumber === 42 || lessonNumber === 43) {
      const total = n + 3;
      return extraQuestion(lessonNumber, index, `Trong ${total} kết quả đồng khả năng, có 1 kết quả thuận lợi cho biến cố. Xác suất là:`, `1/${total}`, `Xác suất bằng số kết quả thuận lợi chia tổng số kết quả: 1/${total}.`, [`1/${total}`, `2/${total}`, `1/${total + 1}`, "1"]);
    }
    throw new Error(`Chưa có mẫu câu luyện tập cho bài Toán 6 số ${lessonNumber}.`);
  }
  course.lessons.forEach((unit, lessonIndex) => {
    const number = lessonIndex + 1;
    unit.exercises.push(...Array.from({ length: 15 }, (_, index) => extraForLesson(number, index)));
  });
  register(6, "toan", course);
})();
