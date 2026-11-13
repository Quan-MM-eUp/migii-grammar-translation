# Lỗi nguồn tiếng Việt trong kho ngữ pháp (cho BTV)

Lỗi phát hiện trong lúc dịch kho sang các ngôn ngữ. Số là `id` trong `grammar/grammar_lib.json`. Người dịch thấy lỗi mới thì thêm dòng vào **mục 4** (ghi ngôn ngữ phát hiện); dịch xong một ngôn ngữ thì ghi tóm tắt vào **mục 5**. Hai mục này thay cho tin nhắn báo người quản lý (áp dụng từ các ngôn ngữ dịch sau 12/11/2026).

**Cách xử lý (người quản lý):** gom lỗi, BTV sửa một lần trong `grammar_lib.json` → chạy `publish_lang.py <mã>` cho từng ngôn ngữ đã dịch → mẫu đã sửa được liệt kê ở `translation/patches/<mã>.todo.json` → dịch bù. Trong lúc chưa dịch bù, mẫu đó hiện tiếng Việt. Ngôn ngữ chưa bắt đầu (de, pt, pl, hi, ne) thì nên sửa trước khi dịch. Sửa xong lỗi ở mục 4 thì chuyển dòng đó sang bảng "đã sửa" (như mục 1) hoặc ghi "đã sửa <ngày>" ở cột cuối.

Lưu ý: sửa câu ví dụ tiếng Nhật thì bản dịch câu đó (ở mọi ngôn ngữ) không còn khớp, phải dịch bù cả trường `examples` của mẫu.

## 1. Lỗi phát hiện khi dịch (11/2026) — **đã sửa 12/11/2026**

Đã sửa trong `grammar/grammar_lib.json`, cập nhật nguồn dịch (`translation/source/`) và bản dịch của en, ko, id, cn, th, ru, es cùng các lô tw, my đã dịch; ngôn ngữ dịch sau dùng nguồn đã sửa. #632, #510, #1335: cắt bỏ khối chép lặp trong `notes` (lỗi nằm trong khối đó), giữ phần ghi chú thật.

| # | ID | Mẫu | Trường | Đang ghi | Nên sửa | Báo bởi |
|---|---|---|---|---|---|---|
| 1 | 632 | ～際に (N3) | `notes`, ví dụ 1 | 受験の際に、写真が必要です。 → "Lúc nhập viện hình là cần thiết." | "Khi đi thi cần có ảnh." | ru |
| 2 | 1290 | ～たりとも～ない (N1) | `explain` | "Đặt **trước** đơn vị tối thiểu để nhấn mạnh…" | "Đặt **sau** số lượng nhỏ nhất (一 + đơn vị đếm, vd 一秒たりとも) để nhấn mạnh…" | ru |
| 3 | 510 | ～あまり (N3) | `notes`, ví dụ 2 | 心配するあまり、母は寝込んでしまった。 → "Vì lo lắng mẹ đã ngủ say." | "Vì quá lo lắng mà mẹ đổ bệnh, nằm liệt giường." | es |
| 4 | 1085 | ～なんて／とは (N2) | `examples` 3 (dịch tiếng Việt) | "…trúng số **100 triệu** yên…" (câu Nhật: ３億円) | "…trúng số **300 triệu** yên…" | es |
| 5 | 594 | ～に対して (N3) | `examples` 4 | 兄は活動的**に対して**、弟は… | 兄は活動的**なのに対して**、弟は… | es |
| 6 | 964 | ～にこしたことはない (N2) | `examples` ② | 何もない**にこしことはない**けど… | 何もない**にこしたことはない**けど… | es |
| 7 | 966 | ～にしても (N2) | `examples` ② | 忙しいにしても、**次席**の連絡をしてこないのはよくない。 | **欠席**の連絡 | es |
| 8 | 981 | ～に相違ない (N2) | `examples` 2 | 交渉は**初列**するに相違ない。 | 交渉は**決裂**するに相違ない。 | es |
| 9 | 984 | ～に限って (N2) | `examples` 1 | **縮退**をして来なかった日に限って… | **宿題**をして来なかった日に限って… | es |
| 10 | 1086 | ～にしたところで (N2) | `examples` ② | …どのくらいの生徒が従うか**わらない**。 | …従うか**わからない**。 | es |
| 11 | 1087 | ～にしたら・にすれば (N2) | `examples` 2 | 会社の**経験**が苦しいことが… | 会社の**経営**が苦しいことが… | es |
| 12 | 1335 | ～につけ～につけ (N1) | `notes`, ví dụ 3 | 「3. 何かにつけ」 + dòng dịch "XXX" (chữ giữ chỗ) | Viết đủ câu ví dụ và bản dịch (何かにつけ: "hễ có dịp là…, việc gì cũng…") hoặc bỏ ví dụ 3 | es |
| 13 | 1015 | ～上で（sau khi） (N2) | `meaning_vi` | "Sau khi…, khi…" (không có chữ có dấu nên công cụ đóng gói bỏ qua, không được dịch) | "Sau khi…, khi… (làm xong việc trước rồi mới làm việc sau)" | kiểm tra |

Ghi chú:

- #632, #510, #1335: lỗi nằm trong khối thô "meaning_vi: … ⏐ explain: … ⏐ examples: …" ở cuối `notes` (chép lại dữ liệu cũ của mẫu); đã cắt khối này ở 3 mẫu.
- #26, #27 (Tính từ い / な): **đã sửa** ngày 10/11 (bỏ chỗ ảnh 【ảnh】 trong `meaning_vi`) và đã dịch bù cho mọi ngôn ngữ đã xong. Trường `explain` của 2 mẫu này hiện chỉ là một câu ví dụ "VD: …"; BTV có thể viết giải thích thật (không gấp).

## 2. Chờ BTV xác nhận: khối chép lặp trong `notes` (244 mẫu)

Trường `notes` của 247 mẫu có đuôi là khối chép lại dữ liệu cũ của chính mẫu đó (`meaning_vi: … ⏐ explain: … ⏐ examples: …`), hiện trên app ở mục "Thông tin thêm" (lặp bộ ví dụ cũ, có câu sai, lộ chữ `meaning_vi:`). Đã cắt ở #632, #510, #1335; còn 244 mẫu (ví dụ #18, #36, #594…). Đề xuất: cắt khối này ở cả 244 mẫu (làm tự động được ở kho và mọi bản dịch, không phải dịch lại). Cần BTV xác nhận khối này không còn ý nào chưa có ở các trường chính.

Ngoài ra: `explain` của #26, #27 hiện chỉ là một câu ví dụ "VD: …", nên viết giải thích thật.

## 3. Lỗi đã biết từ trước

Danh sách đầy đủ phát hiện khi viết luật và lúc đóng gói dịch (câu ví dụ gõ sai, nghĩa chứa câu ví dụ, trường viết tiếng Anh, mẫu trùng…): `bunpo-analyzer/docs/kho_loi_du_lieu.md` (repo `bunpo-analyzer-module`), mục 1–9. Một số mục trùng với bảng trên (#964, #981, #984, #1015, #1087).

## 4. Lỗi mới chờ BTV sửa

Người dịch (hoặc skill `chay-dot-dich`) thêm dòng cuối bảng sau **mỗi đợt dịch**. Trước khi thêm: kiểm tra id + trường đó chưa có ở mục 1–4; đã có thì chỉ thêm mã ngôn ngữ vào cột "Báo bởi". Không tự sửa kho.

Loại: `gõ sai` (chữ Nhật gõ sai) · `gợi ý lệch` (gợi ý tiếng Việt không khớp câu Nhật) · `ruby` (ruby sai/hỏng) · `khác`.

| ID | Mẫu | Trường | Loại | Đang ghi | Nên sửa (nếu rõ) | Báo bởi | Trạng thái |
|---|---|---|---|---|---|---|---|
| 14 | N1とN2 (N5) | `name` | khác | "N1とN2N1 và N2" (dính liền tên mẫu và nghĩa) | "N1とN2" | de, pt | chờ sửa |
| 18 | Trợ từ で (N5) | `notes` (khối chép lặp) | gõ sai | タイの　大学で　**日本を**　べんきょうしました。 | **日本語を** | de, pt | chờ sửa |
| 18 | Trợ từ で (N5) | `notes` (khối chép lặp) | gõ sai | **みなんで**　あそびに　行きました。 | **みんなで** | de, pt | chờ sửa |
| 18 | Trợ từ で (N5) | `notes` (khối chép lặp) | gõ sai | **ホールペン**で　書きます。／ かぞくで　**バーべーキュー**を　しました。(べ là hiragana) | **ボールペン** ／ **バーベキュー** | de, pt | chờ sửa |
| 28 | Vること～ (N5) | `explain` | khác | 3 dòng "Đặt làm chủ ngữ/chủ đề… / Kết hợp tính từ/động từ chỉ đánh giá… / Định nghĩa, mô tả quy tắc…" bị lặp 2 lần | Bỏ 3 dòng lặp | de | chờ sửa |
| 31 | ～がすき・きらい (N5) | `examples` 2 (dịch tiếng Việt) | gợi ý lệch | あかと**きいろ**がすきです。 → "Tôi thích màu đỏ và màu **đen**." | "…màu đỏ và màu **vàng**." | de | chờ sửa |
| 35 | Nは～語で何ですか (N5) | `examples` 2 | khác | Câu Nhật chỉ có dòng A; dòng "B: 「Thank you」です。" nằm nhầm trong bản dịch tiếng Việt; "nói **thể** nào", thiếu dấu ” sau Arigatou | Chuyển dòng B sang câu Nhật; "nói **thế** nào" | de | chờ sửa |
| 36 | あげます (N5) | `notes` (khối chép lặp) | gõ sai | えさを　あげては**いきません**。 | あげては**いけません** | de | chờ sửa |
| 36 | あげます (N5) | `notes` (khối chép lặp) | khác | "chuyển nhượng **quyển** sở hữu" | "**quyền** sở hữu" | de | chờ sửa |
| 38 | くれます (N5) | `notes` (khối chép lặp) | khác | "Tôi đã nhận được chiếc **đồng** từ bạn gái."; dòng `meaning_vi` bị cắt cụt ("…đều có ý nghĩa") | "chiếc **đồng hồ**"; viết đủ câu `meaning_vi` | de | chờ sửa |
| 42 | そして (N5) | `comparison`, dòng それで | ruby | 雨が`<ruby>降<rt>お</rt></ruby>`りました (đọc おりました) | `<rt>ふ</rt>` (ふりました) | de | chờ sửa |
| 48 | ～か（liệt kê）(N5) | `examples` 5–6, `notes`, `explain` đoạn 1 | khác | Ví dụ つかいかた／つくりかたはかんたんですよ và ghi chú "cách V~" thuộc mẫu ～かた; đoạn đầu `explain` nói về か cuối câu (そうですか) | Bỏ 2 ví dụ, ghi chú và đoạn không thuộc mẫu "A か B" | de, pt | chờ sửa |
| 50 | ～が、～ (N5) | `explain` (khối A/B) | khác | Khối "A … B …" mô tả が chỉ chủ ngữ/đối tượng, không phải が nối câu ("nhưng") | Bỏ khối A/B hoặc chuyển sang mẫu Trợ từ が (#17) | de, pt | chờ sửa |
| 51 | ～がいちばん～ (N5) | `comparison`, dòng 最も | ruby | `<ruby>最<rt>もっとも</rt></ruby>も` (đọc thành もっともも) | `<ruby>最<rt>もっと</rt></ruby>も` | de | chờ sửa |
| 52 | ～がほしい (N5) | `comparison`, dòng 4 | ruby | お`<ruby>菓<rt>かし</rt></ruby><ruby>子<rt></rt></ruby>` (rt rỗng); tên mẫu "〜**が**ほしがる" | お`<ruby>菓子<rt>かし</rt></ruby>`; "〜**を**ほしがる"; ngoài ra `explain` ghi "Dien tả" (thiếu dấu) | de, pt | chờ sửa |
| 55 | ～てはいけない (N5) | `examples` 2 | gõ sai | 「終わる」や「別れる」などの**こと**を使ってはいけません。 | などの**ことば**を | de | chờ sửa |
| 55 | ～てはいけない (N5) | `comparison`, dòng ～てはならない | khác | Ví dụ 守らねばならない規則 không minh hoạ ～てはならない | Vd 忘れてはならない。 | de, pt | chờ sửa |
| 56 | ～と～とどちら (N5) | `explain` | khác | 3 dòng "Tính từ: … / Động từ ngoại động: … / Vị trí/đích: …" bị lặp 2 lần | Bỏ 3 dòng lặp | de | chờ sửa |
| 61 | ～ね (N5) | `examples` 1 | gợi ý lệch | Cả hai dòng đều ghi "A:"; まいにち　10じまで → "làm việc đến 10 **người**" | Dòng 2 là "B:"; "đến 10 **giờ**" | de, pt | chờ sửa |
| 64 | ～よ (N5) | `examples` 1 (dịch tiếng Việt) | khác | "Xe điện **ngày** có đi Koshien không?" | "Xe điện **này**…" | de | chờ sửa |
| 70 | N1のN2 (vị trí) (N5) | `name`, `meaning` | khác | `name` "N2vị trí" dính liền; `meaning` thiếu chữ Nhật ở vế đầu mỗi dòng ("Trên　した：Dưới", "Phía trước　うしろ：Phía sau"…, các dòng "Bên cạnh / Gần / Ở giữa" không có từ Nhật) | Bổ sung うえ・まえ・みぎ・なか・となり・よこ・ちかく・あいだ; "N2 (vị trí)"; ví dụ 2 "phòng **họp**" | de, pt | chờ sửa |
| 74 | Nối câu đơn thành câu ghép (N5) | `examples` 2–5 (dịch tiếng Việt) | gợi ý lệch | Bản dịch lệch dòng: ví dụ 2 và 4 để trống, ví dụ 3 và 5 chứa 2 câu dịch | Tách mỗi ví dụ một câu dịch | de, pt | chờ sửa |
| 93 | すぐに～ (N5) | `examples` 4 | gõ sai | 駅の**すぐに近く**にコンビニがあります。 | 駅の**すぐ近く**に | de, pt | chờ sửa |
| 95 | そちら～ (N5) | `examples` 6 | gõ sai | 電話ありがとうございます。**ABC会社そちらでしょうか**。 | Vd そちらはABC会社でしょうか。 | de | chờ sửa |
| 101, 102 | だれでも～ / だれも～ません (N5) | `comparison` | ruby | だれでも `<ruby>入<rt>い</rt></ruby>`れます／入れる (đọc いれる); どこも `<ruby>開<rt>ひら</rt></ruby>`いていない | `<rt>はい</rt>` (はいれる); `<rt>あ</rt>` (あいていない) | de | chờ sửa |
| 107, 109, 110, 111 | どこか～ / どこにも～ / どこへも～ / どこも～ (N5) | `comparison` | ruby | Cùng lỗi ruby như #101–102: どこでも`<ruby>入<rt>い</rt></ruby>`れます／入れる; どこも`<ruby>開<rt>ひら</rt></ruby>`いていない | `<rt>はい</rt>`; `<rt>あ</rt>` | de | chờ sửa |
| 107 | どこか～ (N5) | `notes` | khác | "どこかの +人/会社/国: “ai/**ông ty**/quốc gia nào đó”" | "**công ty**" | de, pt | chờ sửa |
| 109 | どこにも～ません (N5) | `comparison`, dòng どこへも～ません | khác | "Nhấn hướng/đích (**xem 799**)" (số tham chiếu nội bộ lộ ra giao diện) | Bỏ "(xem 799)" hoặc ghi tên mẫu | de | chờ sửa |
| 115 | どのくらい (N5) | `examples` 2 | gợi ý lệch | Câu Nhật dòng 2 thiếu nhãn "B:"; bản dịch tiếng Việt lộn thứ tự và lặp ("B:　２時間半　かかります。Mất hai tiếng rưỡi." rồi lặp "Mất hai tiếng rưỡi." 2 lần) | "A: … mất bao lâu?\nB: Mất hai tiếng rưỡi." | de | chờ sửa |
| 122 | なんで～ (N5) | `explain` | khác | Hai cụm dòng bị lặp 2 lần ("Tại sao(thân mật…) / Bằng cái gì(…)" và "Nếu trả lời bằng N + で… / Nếu trả lời bằng ～から／～ので…") | Bỏ các dòng lặp | de, pt | chờ sửa |
| 127, 129, 130, 142 | まだ～ません / もう～ / もっと～ / ～Vましょうか (N5) | `explain` (#129: `notes`) | khác | Một số dòng bị lặp 2 lần liền nhau (vd #127 "まだ行きません: … / まだ行っていません: …"; #129 "A: もう食べましたか。 B: …"; #130 "Yêu cầu/khuyên bảo… / Bày tỏ mong muốn… / So sánh tăng tiến…"; #142 "Đề nghị cùng làm… / Đề nghị giúp…") | Bỏ các dòng lặp | de | chờ sửa |
| 130 | もっと～ (N5) | `examples` 1 | gõ sai | **もう少しもっと**ゆっくり話してください。(hai phó từ chồng nhau) | **もっと**ゆっくり話してください。 | de | chờ sửa |
| 133 | ～Nghi vấn từか～ (N5) | `examples` 1 | khác | なにか**「を」**のみたいです。(ngoặc 「を」 lọt vào câu ví dụ) | なにか（を）のみたいです。 | de, pt | chờ sửa |
| 136 | ～Vています (N5) | `comparison`, dòng cuối | ruby | `<ruby>今<rt>こん</rt></ruby>`Vている／`<ruby>今<rt>こん</rt></ruby>`勉強している | `<rt>いま</rt>` | de, pt | chờ sửa |
| 136 | ～Vています (N5) | `examples` 5 | gõ sai | スーパーでナンプラー**が**売っています。 | ナンプラー**を**売っています／**が**売られています | de, pt | chờ sửa |
| 137 | ～Vてから (N5) | `comparison`, dòng Vた後で | ruby | Vた`<ruby>後<rt>のち</rt></ruby>`で／食べた`<ruby>後<rt>のち</rt></ruby>`で | `<rt>あと</rt>` | de | chờ sửa |
| 139 | ～Vてはいけません (N5) | `meaning_vi` | khác | "Cách nói **cho phép** ai đó tiến hành một hành động…" (mẫu này là **cấm**; nghĩa đang là của ～てもいいです) | "Cách nói cấm, không cho phép ai đó làm một hành động" | de, pt | chờ sửa |
| 140 | ～Vてもいいです (N5) | `connection` | khác | "Aい + **い くて**" | "Aい → Aくて" | de | chờ sửa |
| 143 | ～。しかし、～ (N5) | `comparison`, dòng が | ruby | 必要だが`<ruby>十分<rt>じゅっぷん</rt></ruby>`でない | `<rt>じゅうぶん</rt>` | de | chờ sửa |
| 150 | ～いかがですか (N5) | `examples` 4 (dịch tiếng Việt) | gợi ý lệch | お元気でいらっしゃいますか/お元気はいかがですか。 → "お元気ですか→ lịch sự hơn" (không phải bản dịch) | "Anh/chị có khoẻ không ạ?" | de | chờ sửa |
| 151 | ～だけ (N5) | `notes`, `comparison` | khác | `notes` viết "Trong **N3**, ～だけ…" trong khi mẫu xếp N5 và nghĩa chính ghi "Chỉ" nhưng 6 ví dụ đều là できるだけ／～たいだけ; ruby お`<ruby>菓<rt>かし</rt></ruby><ruby>子<rt></rt></ruby>` (rt rỗng) | Kiểm tra lại cấp độ/ví dụ; お`<ruby>菓子<rt>かし</rt></ruby>` | de, pt | chờ sửa |
| 154 | ～までに (N5) | `examples` 1, 5, 6 | khác | Ví dụ 1 dịch "**Tước** 7 giờ"; ví dụ 5 (来年**まで**このアパートに住むつもりです) và ví dụ 6 (あしたは８時半**に**来てください) không dùng ～までに | "**Trước** 7 giờ"; thay 2 ví dụ bằng câu có ～までに | de | chờ sửa |
| 155 | V1たり、V2たり (N5) | `notes` | khác | Ghi chú nội bộ lộ ra giao diện: "meaning: Liệt kê hành động / nêu ví dụ tiêu biểu — examples dòng tương ứng đã nhập vào trên" | Xoá hoặc viết thành ghi chú thật | de | chờ sửa |
| 159 | なる (N5) | toàn mẫu | khác | Tên mẫu là なる nhưng `meaning` gộp 5 mục của tính từ な, `examples` 2–6 là mẫu nối ～で, còn `explain`/`mistakes`/`comparison` giải thích ～にする; `mistakes` 3 có chữ "要" lạc ("～になる:**要**phân biệt") | Tách/viết lại mẫu cho khớp なる; bỏ "要" | de, pt | chờ sửa |
| 160 | ～ことがあります (N5) | `meaning_vi` | khác | "Đã từng ~" nhưng 4/6 ví dụ là Vる/Vない＋ことがある ("đôi khi") | "Đôi khi ~ / đã từng ~ (Vたことがある)" | de | chờ sửa |
| 169 | ～たら (N5) | `notes` | gợi ý lệch | Câu Nhật ghi （**５８**番） nhưng dịch "ngữ pháp **57**"; ví dụ cuối 明日天気が良かったら、**どこへ**行きませんか。 | Thống nhất số; **どこかへ**行きませんか | fr, de | chờ sửa |
| 170 | ～ても (N5) | `notes` (khối chép lặp) | gõ sai | 初めて**作っる**人でもできます。／ 先輩**【**いや、…」 (sai ngoặc) | **作る**人; 先輩**「**いや、…」 | fr, de | chờ sửa |
| 172 | ～でも (N5) | `examples` 1, 3 | gõ sai | **どうしてもの**絵がほしい。; ví dụ 3 (法律に反することをしてでも完成させろと、上司に命じられた。) có bản dịch tiếng Việt của một câu khác ("Tôi không thể tán thành suy nghĩ phải kiếm tiền bằng được…") | **どうしてもこの**絵がほしい。; sửa câu Nhật hoặc bản dịch ví dụ 3 cho khớp | fr, de, pt | chờ sửa |
| 173 | ～と (N5) | `explain` (khối A–D), `notes` | khác | Khối "A … D" mô tả と liệt kê/cùng làm/trích dẫn, không phải と điều kiện; `notes` dịch X暑い**と**… là "**vì** nóng nên" và dịch 命令 là "kì vọng, nguyện vọng" | Bỏ khối A–D; "**hễ/nếu** nóng thì"; "mệnh lệnh" | de | chờ sửa |
| 174 | ～とき (N5) | `explain`, `comparison` | khác | 2 dòng "V-辞書形+ とき… / V-た形+ とき…" lặp 2 lần; "れ い１ ：" thừa dấu cách; ruby ～`<ruby>間<rt>ま</rt></ruby>`（あいだ）／雨の`<ruby>間<rt>ま</rt></ruby>` | Bỏ dòng lặp; `<rt>あいだ</rt>` | de | chờ sửa |
| 176 | ～と言います (N5) | `examples` | gõ sai | 田中さんは今晩**出かけるいました**。; bản dịch tiếng Việt dồn 3 câu vào ví dụ 3 và 6, các ví dụ 1, 2, 4, 5 để trống | 今晩**出かけると言いました**。; tách bản dịch theo từng câu | fr, de, pt | chờ sửa |
| 179 | ～は［ngôn ngữ］で何と言いますか (N5) | `comparison` | ruby | `<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>いい</rt></ruby>いますか` (đọc なにといいいますか); `<ruby>何<rt>なに</rt></ruby>ですか` | `<rt>なん</rt>`と`<ruby>言<rt>い</rt></ruby>`いますか; `<rt>なん</rt>`ですか | de | chờ sửa |
| 180 | ～なかなか～ない (N5) | `examples` 5 | gõ sai | **なぜが**なかなかなおらない。 | **かぜが** | fr, de, pt | chờ sửa |
| 183 | ～に戻ります (N5) | `examples` 4 | gõ sai | 天気が晴れ**にに**戻りました。 | 晴れ**に**戻りました。 | fr, de | chờ sửa |
| 190 | ～まえに (N5) | `notes` (khối chép lặp) | gợi ý lệch | ねる　前に　何をし　ましたか。 → "Bạn đã làm gì **khi** ngủ?"; dòng `meaning_vi` ghi ngược ("vế sau… diễn ra trước… vế trước") | "…**trước khi** ngủ?"; viết lại `meaning_vi` | de | chờ sửa |
| 193 | ～を (N5) | `examples` 2, 4 | gõ sai | あの橋を**わって**ください。／ きのうこうえんを**さんぼ**しました。 | **わたって**ください; **さんぽ**しました | de, pt | chờ sửa |
| 193 | ～を (N5) | `examples` 5–6, `explain` (khối A–D) | khác | Mẫu là を chỉ nơi đi qua (N（nơi chốn）+ を + V di chuyển) nhưng ví dụ 5–6 (マンガを読みます, パソコンを買います) và mục A/C/D thuộc cách dùng khác của を | Bỏ hoặc chuyển sang mẫu Trợ từ を (#25) | de, pt | chờ sửa |
| 199 | ～だです (N5) | tên mẫu (`pattern`) | khác | "～だです" | "～だ／です" | de | chờ sửa |
| 208 | ～ことができる/～ができる (N5) | `notes` | khác | `notes` dài ~7.000 ký tự, gồm 8 khối chép lặp (explain/examples/comparison/common_mistakes) trùng nội dung nhau; ruby dạng ngoặc sai: 読（よ）める等（**ひとし**） | Rút gọn/cắt khối lặp; 等（**など**） | de | chờ sửa |
| 209 | ～てくれる (N5) | `notes` (khối chép lặp) | khác | "meaning_vi: ~**smiley1**V cho tôi." (chữ giữ chỗ) | Viết đủ "N が V てくれる: (ai) làm V cho tôi" | de | chờ sửa |
| 210 | ～てあげる (N5) | `notes` (khối chép lặp) | khác | Khối chép lặp bị cắt cụt và lẫn mẫu khác: "5. １０年前にあなたにもらった写真は、今も机の上に**かざ**" (hết câu), "Kimu thì **g**" (hết câu), chữ giữ chỗ "**smiley1**làm(giúp) V cho**smiley2**"; "ｾｰﾀー" (katakana nửa cỡ) | Cắt khối lặp hoặc viết đủ; "セーター" | de | chờ sửa |
| 211 | ～てもらう (N5) | `examples` 4, `notes` | gõ sai | 最初は何も**わからかった**けど…; `notes` có chữ giữ chỗ "**smiley1**được**smiley2**V giúp" | **わからなかった**; viết đủ nghĩa | de, pt | chờ sửa |
| 212 | ～でしょう (N5) | `comparison`, dòng ようだ／みたいだ | ruby | 雨が`<ruby>降<rt>お</rt></ruby>`りそうなようだ (đọc おり; câu cũng thừa そうな) | 雨が`<ruby>降<rt>ふ</rt></ruby>`るようだ | de, pt | chờ sửa |
| 1564, 1619 | じゃないが / まだ（so sánh）(N5) | `explain` (tiếng Nhật) | khác | Cuối `explain` còn số tham chiếu nội bộ "（１４４）", "（５４２）" | Bỏ số | de | chờ sửa |
| 1610 | N（時／年齢）＋から (N5) | `meaning_vi` | khác | "Diễn đạt **Kiểm tra kiến thức về trợ từ** \| điểm xuất phát" (nhãn nội bộ lọt vào nghĩa) | "Từ (mốc thời gian/tuổi) — điểm bắt đầu" | de | chờ sửa |
| 1614 | ちがいます（trả lời phủ định）(N5) | `meaning_vi` | khác | Nghĩa viết bằng tiếng Anh và bị cắt cụt giữa chữ: "…often as a polite **negat**" | "Không phải / Sai rồi (cách trả lời phủ định lịch sự)" | de | chờ sửa |
| 1616 | のです（giải thích）(N5) | `examples` 3 | gõ sai | **ハヤプサ**は突然急降下を始めました。 | **ハヤブサ** | de, pt | chờ sửa |
| 1617 | まだ（tiếp diễn từ quá khứ）(N5) | `explain` (tiếng Nhật) | khác | `explain` nhắc tới ví dụ "5.", "⑦～⑨", "（７）" (vd まだＶ一ていた, 今はいないけれど、そのころは生きていた) nhưng mẫu chỉ có 6 ví dụ và không có các câu đó | Bổ sung ví dụ còn thiếu hoặc cắt phần giải thích không còn khớp | de | chờ sửa |
| 1621 | まで(は) (N5) | `meaning_vi` | khác | "Diễn đạt Kiểm tra kiến thức về trợ từ \| phạm vi" (nhãn nội bộ lọt vào nghĩa) | Viết lại nghĩa của まで(は) | de | chờ sửa |
| 215 | Aがる (N4) | `meaning_vi`, `explain` | gợi ý lệch, gõ sai | Nghĩa "Xu hướng, tình trạng dễ trở thành A" không khớp ～がる; `explain` gõ **通い**, **はすかし** | Nghĩa: người thứ ba tỏ ra/cảm thấy A; **痛い**, **はずかしい** | de, pt | chờ sửa |
| 216 | Lượng từ + で (N4) | `examples` 1 | khác | ３年間**で**日本語を勉強しました。 (không tự nhiên với 勉強する) | Đổi ví dụ, vd ３年間で日本語をマスターしました | de | chờ sửa |
| 219 | V他てある (N4) | `examples` 2, `notes` | khác, gõ sai | Ví dụ 2 câu Nhật vụn "ドア/を/ドア/が", bản dịch chứa tiếng Nhật; `notes`: **取ってはない**, **テープル** | Viết lại ví dụ thành câu đủ; **テーブル** | de | chờ sửa |
| 221 | V thể ý chí と思っています (N4) | `examples` 2 | khác | A: 夏休みにうみへ**行こうと。** (cụt) | 行こうと**思っています**。 | de | chờ sửa |
| 223 | ～V thể khả năng (N4) | `notes` | gõ sai | **インタネット**; số ③ lặp hai lần | **インターネット**; đánh lại số | de | chờ sửa |
| 224 | ～Vながら (N4) | `notes` (tiếng Nhật) | khác | `notes` nhắc ví dụ ①⑤⑥ nhưng mẫu không có các ví dụ đó | Bổ sung ví dụ hoặc cắt phần không khớp | de | chờ sửa |
| 226 | それに (N4) | `notes` | khác | Nội dung bị cắt cụt: "6. このパソコ", "説明（せつめい）" | Bổ sung phần thiếu hoặc bỏ đoạn cụt | de | chờ sửa |
| 231 | Nghi vấn từ＋でも (N4) | `explain`, `examples` | gợi ý lệch | `explain` ghi "Từ nghi vấn + **ても**" trong mẫu でも; ví dụ gốc 2 thiếu bản dịch Việt | Sửa thành でも; bổ sung bản dịch | de | chờ sửa |
| 234 | ～Vている (N4) | `examples` 1–2, ruby | ruby | Ví dụ 1–2 không có bản dịch Việt; 窓が`開<rt>ひら</rt>`いた | Bổ sung bản dịch; `開<rt>あ</rt>`いた | de | chờ sửa |
| 239 | ～あとで (N4) | `comparison` (ruby) | ruby | `三日後<rt>のち</rt>に` | `後<rt>ご</rt>` (三日後 = みっかご) | de | chờ sửa |
| 241 | ～かな（あ） (N4) | `examples` 3, `notes` | gõ sai | 行こうかな。**どうしよかな**。; gợi ý "Đi đâu nhỉ" lệch câu Nhật; `notes` có các khối chép lặp dính liền bằng "⏐" | **どうしようかな**; sửa gợi ý; tách/gộp khối lặp | de, pt | chờ sửa |
| 242 | ～かもしれない (N4) | `examples` 4–5 | khác | Hội thoại chỉ có lời A (「来週はひまですか」, 「アリさん、まだ来ませんね。…」), thiếu lời B chứa かもしれない | Bổ sung lời đáp của B | de | chờ sửa |
| 243 | ～か（＋V、＋A/NA） (N4) | `explain` | gõ sai | 「**ちうことを**」 | 「**ということを**」 | de, pt | chờ sửa |
| 244 | ～が みえます・きこえます (N4) | `explain` | khác | Bảng so sánh 見えます／見られます bị dàn phẳng: dòng đầu dính liền toàn bộ, sau đó khối lặp lại 2 lần | Dựng lại thành bảng (hoặc `comparison`), bỏ khối lặp | de | chờ sửa |
| 248 | ～させてください (N4) | `notes` | khác | "Tham khảo: Ôn tập lại cách chia … (使役形）：**Xem**" (tàn dư liên kết); `mistakes` 2 gắn nhãn tiếng Nhật nhưng có chữ Việt "Sai causative" | Bỏ chữ "Xem" hoặc gắn lại liên kết; sửa nhãn ngôn ngữ | de | chờ sửa |
| 251 | ～し(～し) (N4) | `explain` | khác | 「し」dùng trong「忙しいですし」hay「**お金もありません**」(vế sau không có し) | 「お金もありません**し**」 | de | chờ sửa |
| 252 | ～たことがある (N4) | `notes`, `mistakes` 3 | gợi ý lệch | Ghi "lược bỏ **ことが**" / "Bỏ **こと**" nhưng ví dụ 食べたことある chỉ lược **が** | Sửa thành "lược bỏ が" | de | chờ sửa |
| 254 | ～ため(に)(nguyên nhân) (N4) | `meaning_vi`, `examples` 4, `notes` | gợi ý lệch, gõ sai | Tên mẫu và nghĩa ghi "nguyên nhân" nhưng cả 6 ví dụ là ために chỉ mục đích; **いっしょけんめい**; `notes`: "走ろうと。" cụt, dòng cuối cắt ở "Tôi đan" | Tách nghĩa mục đích/nguyên nhân; **いっしょうけんめい**; bổ sung phần bị cắt | de, pt | chờ sửa |
| 255 | ～たらいいです (N4) | `notes` | khác | `notes` gộp nguyên khối của các mẫu ～ばいい, ～といい (kèm comparison, common_mistakes dạng văn bản); "Cách sử dụng giống **NVTたら**　いいです" | Tách về đúng mẫu hoặc rút gọn; sửa "NVTたら" → "Vたら" | de | chờ sửa |
| 257 | ～って (N4) | `meaning_vi` | khác | Câu Nhật ghi "②③④⑤のように" nhưng bản Việt ghi "ví dụ ②③④" | Thống nhất số ví dụ | de | chờ sửa |
| 258 | ～つもり (N4) | `meaning_vi`, `mistakes` 4 | khác | Nghĩa lặp "Dự định \| dự định \| Dự định…"; `mistakes` 4 nói không dùng つもり với tính từ, trong khi ví dụ 4–5 là 若いつもり, 上手なつもり | Gộp nghĩa, thêm nghĩa "cứ tưởng là"; sửa hoặc bỏ `mistakes` 4 | de | chờ sửa |
| 260 | ～ていく (N4) | `notes` | gõ sai | "～ていった/～ていった" (lặp) | Bỏ phần lặp (hoặc ～ていった/～ていきました) | de | chờ sửa |
| 262 | ～てみる (N4) | `examples` 6 | gõ sai | すぐ読んで**見ました**。 | 読んで**みました** | de, pt | chờ sửa |
| 263 | ～ておく (N4) | `notes`, `explain` | gõ sai, ruby | ここに名前を書いておこう／**買いとこう**。; `explain` ghi cách đọc dạng ngoặc 会議(かいぎ) thay vì ruby | **書いとこう**; chuyển sang ruby | de, pt | chờ sửa |
| 264 | ～てくる (N4) | `explain` | khác | Các dòng "寒くなって きた…", "Nghĩa không gian…", "Nghĩa thời gian…" bị chép lặp 2 lần | Bỏ khối lặp | de, pt | chờ sửa |
| 265 | ～ても/でも (N4) | `examples` 4, 1–2 | gõ sai | どんなに**きらうでも**; ví dụ 1–2 chỉ có câu hỏi, thiếu lời đáp chứa ても | **きらいでも**; bổ sung lời đáp | de, pt | chờ sửa |
| 267 | ～という (N4) | `meaning_vi` | gợi ý lệch | Nghĩa chỉ ghi "… gọi là …" trong khi ví dụ 1–5 là という truyền văn ("nghe nói / người ta nói rằng") | Bổ sung nghĩa truyền văn | de | chờ sửa |
| 269 | ～とも (N4) | `examples` 1–2, `notes` | gợi ý lệch | Gợi ý Việt của cả 2 ví dụ thuộc câu khác ("Trời nóng nên tôi được bảo mang khăn theo", "Tôi bảo bố mẹ đừng lo lắng quá"); `notes` tiếng Nhật là của mẫu ～くとも, nhắc ví dụ ①③ không có | Dịch lại 2 ví dụ (二人とも悪い / ３本ともこわれています); bỏ hoặc chuyển `notes` | de, pt | chờ sửa |
| 270 | ～と思う (N4) | `notes` ④ | gõ sai | 日本語と　英語と　**どちら　かんたんだ**　とおもいますか。 | どちら**が**　かんたんだと | de | chờ sửa |
| 271 | ～と言っていました (N4) | `examples` 1 | gõ sai | 田中：　お弁当を**行きます**よ。 | お弁当を**買いに行きます**よ。 | de, pt | chờ sửa |
| 273 | ～と読みます (N4) | `examples` 1 | gõ sai | あそこに**何とてある**んですか。 | **何と書いてある**んですか。 | de, pt | chờ sửa |
| 277 | ～ばかり (N4) | `examples` 2, `notes` | gõ sai, gợi ý lệch | この数年、**性格**は苦しくなるばかりだ。; `notes` ghi "những điều bản thân cho là **tốt**" trong khi câu Nhật là よくない; mỗi ví dụ trong `notes` chép câu Nhật 2 lần | **生活**; "cho là không tốt"; bỏ câu lặp | de | chờ sửa |
| 278 | ～ほうがいい (N4) | `examples` 4 | gợi ý lệch | **一度**病院へ行ったほうがいい — gợi ý ghi "Nên **nhanh chóng** đi bệnh viện" | "Nên đi bệnh viện một lần" | de | chờ sửa |
| 281 | ～みたい (N4) | `notes` | gõ sai, khác | とても**わかいくて**; 兄弟のように**中がいい**; 10年前**もこと**だが; ví dụ ③ và "4．" dính liền, hai bản dịch dồn xuống dưới; `notes` gộp cả khối của mẫu ～ようだ | **かわいくて**; **仲がいい**; 10年前**のこと**; tách ví dụ; chuyển khối ようだ về đúng mẫu | de, pt | chờ sửa |
| 283 | ～やすい (N4) | `comparison` (ruby), `examples` 1 | ruby | `<ruby>読<rt>読</rt></ruby>みにくい`; gợi ý ví dụ 1 còn chữ Nhật "Cách giảng của 田中先生" | `<rt>よ</rt>`; "thầy Tanaka" | de, pt | chờ sửa |
| 284 | ～られる (N4) | `comparison` (ruby), `examples` 6, `explain` | ruby, khác | `<ruby>話<rt>ばなし</rt></ruby>せます`; ví dụ 6 "目的語が主語に**なられる**ことがある" không tự nhiên; `explain` chép lặp các dòng con của "Bị động", "Khả năng" | `<rt>はな</rt>`; đổi ví dụ 6; bỏ dòng lặp | de, pt | chờ sửa |
| 285 | ～んです (N4) | `notes`, `explain` | gợi ý lệch, ruby | VD1: câu B バスが来なかったんです ghi bản dịch "Tại sao đến trễ vậy?" (chép nhầm câu A); `explain` mục 2 ghi "Muốn **người nói** cung cấp thêm thông tin"; cách đọc ghi dạng ngoặc 時々(ときどき) | "Vì xe buýt không đến"; "người nghe"; chuyển sang ruby | de, pt | chờ sửa |
| 287 | ～出す (N4) | `comparison` (ruby) | ruby | `<ruby>言<rt>いいだす</rt></ruby>い<ruby>出<rt></rt></ruby>す` | `<ruby>言<rt>い</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す` | de, pt | chờ sửa |
| 291 | ～間 (N4) | `examples` 3 | khác | トイレに行っている間に。 (câu cụt, không có vế sau) | Bổ sung vế sau | de, pt | chờ sửa |
| 292 | ～(よ)うとする (N4) | `meaning_vi` (tiếng Nhật), `examples` 3, 5 | gõ sai | Câu Nhật: "…表すこともある。**のように**、否定の形は…" (thiếu ⑤⑥); 突然大雨が**振り出した**; いくら**進めても**夫は | **⑤⑥のように**; **降り出した**; **勧めても** | de, pt | chờ sửa |
| 293 | ～(よ)うと思う (N4) | `explain` | khác | "Mẫu câu kết hợp với **và** "dạng ý chí của động từ"…" (thiếu chữ); kết thúc bằng "được biến đổi như sau:" nhưng không có bảng chia | Bổ sung 「と思う」 và bảng chia thể ý chí | de, pt | chờ sửa |
| 295 | Cho–nhận theo bậc kính (N4) | `notes` | ruby, khác | Ruby dạng ngoặc bị hỏng: お客（きゃくさま）様（）; `notes` gộp nguyên khối của 6–7 mẫu (いただく, くださる, 差し上げる, ～てさしあげる, ～ていただく…); ví dụ 6 mục 差し上げる thiếu bản dịch; "đã **đượcá** giám đốc" | お客様（きゃくさま）; tách về đúng mẫu hoặc rút gọn; bổ sung bản dịch; "được" | de, pt | chờ sửa |
| 297 | N1はN2にN3をV thể bị động (N4) | `examples` | gợi ý lệch | Ví dụ 1 không có bản dịch; ví dụ 2 (câu bị động) mang bản dịch của câu chủ động "Em trai phá máy tính…"; ví dụ 3 "Tôi bị **cho** cắn ở tay" | Dịch đủ 3 câu; "Tôi bị em trai làm hỏng máy tính"; "bị chó cắn" | de, pt | chờ sửa |
| 298 | N1はN2にV thể bị động (N4) | `examples`, `explain` | gợi ý lệch | Ví dụ 1, 3 không có bản dịch; ví dụ 2, 4 (bị động) mang bản dịch câu chủ động; gợi ý ví dụ 4 bắt đầu bằng "。" (dấu chấm của câu Nhật rơi sang); `explain` ghi "N 2 là **chủ đề** của hành vi" | Dịch đủ; trả 。 về câu Nhật; "chủ thể của hành vi" | de, pt | chờ sửa |
| 306 | 知っています/知りません (N4) | `meaning_vi`, tên mẫu | gõ sai | Ngoặc lệch: 「知りません**]**; tên mẫu **[**知っています/知りません**」** | 「知りません」; 「知っています/知りません」 | de | chờ sửa |
| 307 | かならず・きっと・ぜひ (N4) | `meaning_vi`, `examples` 2 | gõ sai, gợi ý lệch | **ちからず** diễn tả những việc **khônng** có ngoại lệ; 明日の試合は必ずかつぞ！ ghi "Nhất định theo dõi trận đấu ngày mai nhé!" | **かならず**; "không"; "Trận đấu ngày mai nhất định sẽ thắng!" | de | chờ sửa |
| 312 | ですから・だから (N4) | `examples` 2 | gõ sai | 誰もいないと**思いう**。 | **思う** | de | chờ sửa |
| 314 | なかなか・やっと・とうとう (N4) | `examples` 2 | gõ sai | Gợi ý: "Cuối cùng **ã** hoàn thành công việc." | "đã" | de | chờ sửa |
| 315 | に (N4) | `meaning_vi`, `explain` | gợi ý lệch | Nghĩa chỉ ghi "để, để làm" trong khi ví dụ 3–6 là に chỉ tần suất (1日に3回…); `explain` mục A–D nhắc "ví dụ ①②" không khớp các ví dụ của mẫu | Bổ sung nghĩa tần suất; chỉnh `explain` cho khớp ví dụ | de | chờ sửa |
| 318 | みえます・聞こえます (N4) | `examples` 2 | gợi ý lệch | よく見えません ghi "nên nhìn rõ được" (thiếu "không") | "nên không nhìn rõ được" | de | chờ sửa |
| 321 | N⇔V (N4) | `meaning_vi` | gõ sai, khác | "**Danh từ** ます được dùng như danh từ"; "tuy nhiên **theo dõi** một số động từ"; trợ từ "（を／で／**い**／…)"; 山に**おぼります** | "Động từ thể ます (bỏ ます)"; viết lại câu; **に**; **のぼります** | de, pt | chờ sửa |
| 324 | Cách nói mệnh lệnh (N4) | `examples` 2 | gõ sai | 「もう７時**で**。起きろ」 | もう７時**だ** | de | chờ sửa |
| 326 | Nghi vấn từ+たら/ば+いいですか (N4) | `examples` 1, 4 | gõ sai, gợi ý lệch | **キャシューカード**; 回数券 ghi "vé tháng" | **キャッシュカード**; "vé nhiều lượt" | de | chờ sửa |
| 327 | Cách nói khiêm nhường (N4) | `examples` 1, 2 | gõ sai | コーヒーでも**おいれましょうか**; お借りしても**よろしでしょうか** | **おいれしましょうか**; **よろしいでしょうか** | de | chờ sửa |
| 328 | (それ)では・じゃ (N4) | `examples` 2, 3 | gõ sai | それでは、**始ましょう**。; 僕も**やめよいかな**。 | **始めましょう**; **やめようかな** | de | chờ sửa |
| 338 | ～う／よう (thể ý chí) (N4) | `notes` ② | gợi ý lệch | 来週は病院へ行こう ghi "**Cùng** đến bệnh viện vào tuần sau nhé" (câu nói ý định của bản thân) | "Tuần sau mình sẽ đi bệnh viện" | de | chờ sửa |
| 339 | ～か (câu hỏi gián tiếp) (N4) | `examples` | gợi ý lệch, khác | Mẫu là câu hỏi gián tiếp nhưng ví dụ 1–5 là か phản vấn (「こんなこと冗談で言えるか」…); ví dụ 6 không có bản dịch | Thay ví dụ đúng mẫu (何時に来るか、わかりません…); bổ sung bản dịch | de | chờ sửa |
| 340 | ～かどうか (N4) | `comparison` (ruby) | ruby | `<ruby>詞<rt>ことば</rt></ruby>` trong 疑問詞 | `<rt>し</rt>` | de | chờ sửa |
| 351 | ～たとき (N4) | `notes` (tiếng Nhật) | gõ sai, khác | **夕形** (chữ Hán 夕) 2 lần; nhắc "③", "（例）" không có trong mẫu | **タ形**; bổ sung ví dụ hoặc cắt phần không khớp | de, pt | chờ sửa |
| 353 | ～ために (mục đích) (N4) | `notes` | khác | Chép nguyên khối của #254 (kể cả "走ろうと。" cụt và dòng cuối cắt ở "Tôi đan") | Bỏ khối lặp hoặc bổ sung phần bị cắt | de, pt | chờ sửa |
| 358 | ～たり～たり (N4) | `comparison` | gõ sai | Ô mẫu ghi "V**たら** Vたり" | "V**たり** Vたり" | de, pt | chờ sửa |
| 361 | ～ちゃう (N4) | `explain`, `examples` 2 | gõ sai, gợi ý lệch | 「**でしまう**」; 女の人にそんなことを言っちゃったんですか ghi "Không được nói thế với phụ nữ." | 「**てしまう**」; "Anh lỡ nói thế với phụ nữ à?" | de, pt | chờ sửa |
| 362 | ～て (N4) | `explain` | gõ sai | Dính chữ: "xảy ra**liên tiếptheo** thứ tự", "Mô tả**phương tiện**", "người học nên nắm vững 3 cách dùng chính:**nối hành động,chỉ nguyên nhân nhẹvàcách thức**" | Thêm khoảng trắng | de, pt | chờ sửa |
| 364 | ～でもかまわない (N4) | `notes` (tiếng Nhật) | khác | Nhắc ví dụ "⑨" và số tham chiếu "（２８０）" không có trong mẫu | Cắt phần không khớp | de | chờ sửa |
| 367 | ～なくてはいけない (N4) | `examples` 1 | gõ sai | れんらくを**しなくていけません**よ。 | **しなくてはいけません** | de, pt | chờ sửa |
| 369 | ～なら (N4) | `examples` 6, `notes` ③ | khác | Ví dụ 6 chỉ có câu dẫn, thiếu câu đáp chứa なら; `notes` ③ thiếu câu Nhật lời người mẹ (chỉ có bản dịch "Mẹ: …") | Bổ sung câu đáp và câu Nhật | de, pt | chờ sửa |
| 371 | ～のだ (N4) | `examples` 1, 2, 4, `comparison` | gợi ý lệch, gõ sai | Ví dụ 1–2 không có bản dịch; ví dụ 4 こうすればいいのです ghi "Là vì có thể làm như thế này"; ô ví dụ **渋滞のです** | Bổ sung bản dịch; "Làm thế này mới đúng"; **渋滞なのです** | de | chờ sửa |
| 372 | ～ので (N4) | `notes`, `examples` 4 | gõ sai, gợi ý lệch | お願いするときや**あやめる**ときは; 「どうして遅れたのですか」 ghi "Có chuyện gì vậy."; 電車の事故があった ghi "Vì gặp tai nạn"; ví dụ 4 これはきらいだ**から** không dùng ので | **あやまる**; "Vì sao anh đến muộn?"; "Vì có sự cố tàu điện"; đổi ví dụ 4 sang ので | de, pt | chờ sửa |
| 373 | ～のに (N4) | `examples` 5, `notes` | khác | Ví dụ 5 ghép lệch: "まだ半年なのに、**上手に話せなかった。いっしょけんめい練習したのに**…" (chép vế của ví dụ 6); **いっしょけんめい**; câu cuối `meaning_vi` trong `notes` bị cụt ("…thúc giục đối phương hành động") | Ví dụ 5: まだ半年なのに、上手に話せる; **いっしょうけんめい**; bổ sung "…thường không đi sau mẫu này" | de, pt | chờ sửa |
| 375 | ～のはNです (N4) | `examples` 3, `meaning_vi` | khác | Gợi ý ví dụ 3 bắt đầu bằng "。" (dấu chấm của câu Nhật rơi sang), câu Nhật thiếu 。; nghĩa ghi "Nhấn mạnh **chủ thể**" trong khi mẫu nhấn mạnh N bất kỳ (nơi chốn, thời gian…) | Trả 。 về câu Nhật; "Nhấn mạnh thành phần N" | de | chờ sửa |
| 377 | ～ば (điều kiện giả định) (N4) | `explain` | khác | Câu cuối bị cắt: "「～ば」được biến đổi từ phần hoạt dụng của động từ hoặc tính từ thành" | Bổ sung phần còn thiếu (bảng chia) | de, pt | chờ sửa |
| 379 | ～め(目) (N4) | `examples` 1 | gõ sai | ３つめの**バス亭**でおりてください。 | **バス停** | de | chờ sửa |
| 381 | ～ようになる⇔～なくなる (N4) | `meaning_vi` | gợi ý lệch | "~ Bắt đầu/ ~ **chỉ toàn**" (～なくなる = không còn ~ nữa) | "Trở nên ~ / không còn ~ nữa" | de, pt | chờ sửa |
| 384 | ～ようにする (N4) | `notes` | khác | Khối ví dụ cuối: dòng "Hãy cố gắng đừng để quên đồ" không có câu Nhật; đánh số "2." lặp | Bổ sung câu Nhật (忘れ物をしないようにしてください), đánh lại số | de, pt | chờ sửa |
| 387 | ～よう (mục đích・kết quả) (N4) | `notes` (tiếng Nhật) | khác | `notes` là giải thích của mẫu khác (「だろうか」の書きことば的表現…②～④は反語の例) | Bỏ hoặc thay bằng ghi chú đúng mẫu | de, pt | chờ sửa |
| 388 | ～らしい (suy đoán) (N4) | `notes` (tiếng Nhật) | khác | Nhắc ví dụ ①, ⑤ (雨らしい, 試験がうまくいかなかったらしい) không có trong mẫu | Bổ sung ví dụ hoặc cắt phần không khớp | de | chờ sửa |
| 391 | おVください (N4) | `examples` 1 | gõ sai | 係りの者に**て来ます**ので | 係りの者に**聞いて来ます**ので | de, pt | chờ sửa |
| 393 | ～Nがする (N4) | `notes` (tiếng Nhật), `explain` | gõ sai | におい、かおり、味、**昔**、感じ…; `explain` "**Thất** được âm thanh" | **音**; "Thấy được" | de | chờ sửa |
| 396 | ～Vてくれませんか (N4) | `notes` | khác | `notes` gộp nguyên khối của mẫu ～てもらえませんか (explain, examples, comparison, common_mistakes) | Tách về đúng mẫu hoặc rút gọn | de | chờ sửa |
| 401 | ～すぎ (N4) | `explain`, `notes` | gõ sai | Ngoặc lệch: "Động từ sẽ chia thành 働きすぎ」「食べすぎ」" (thiếu 「); "dang danh từ **[**すぎ」" | 「働きすぎ」; 「すぎ」; "dạng" | de, pt | chờ sửa |
| 402 | ～そうだ (nghe nói) (N4) | `explain`, `notes` | gợi ý lệch | Đoạn cuối `explain` và `notes` ("có vẻ, sắp sửa ~") là của ～そうだ chỉ dáng vẻ, nhắc ví dụ ①–⑤ không có | Bỏ phần của mẫu dáng vẻ | de, pt | chờ sửa |
| 403 | ～たばかり (N4) | `explain`, `notes` | khác | Dấu "•" đứng riêng một dòng, nội dung rơi xuống dòng sau (2 chỗ) | Gộp lại thành một dòng | de | chờ sửa |
| 407 | ～ているところ (N4) | `comparison` (ruby), `mistakes` 2 | ruby | `<ruby>着<rt>ちゃく</rt></ruby>いたところ`; "知っているところ là **tự nhiên hiếm**" | `<rt>つ</rt>`; "hiếm khi tự nhiên" | de | chờ sửa |
| 408 | ～ている間に (N4) | `comparison` (ruby) | ruby | `<ruby>間<rt>ま</rt></ruby>` (4 chỗ: Vている間に, Vている間, 昼寝している間に…) | `<rt>あいだ</rt>` | de | chờ sửa |
| 411 | ～て…～くて…～で… (N4) | `meaning_vi` | khác | Câu cuối bị cắt: "…còn có những từ ngữ thể hiện không có khả năng thực hiện một" | Bổ sung phần còn thiếu | de, pt | chờ sửa |
| 412 | ～と/たら/ば+いい (N4) | `examples` 3, `meaning_vi` | gõ sai | 今年は**就学金**がもらえるといいなあ。; nghĩa ghi "kì **vong**" | **奨学金**; "kì vọng" | de, pt | chờ sửa |
| 414 | ～と言う/聞く/書くなど (N4) | `examples` 1, 4 | gợi ý lệch, khác | あした８時に来ると言いました ghi "đã nói là 8h đến" (thiếu "ngày mai"); 「来週**テレビ**があると聞きましたが」 (nghi là テスト) | Thêm "ngày mai"; kiểm tra lại テレビ/テスト | de | chờ sửa |
| 421 | ～の間に (N4) | `comparison` (ruby), `notes` | ruby, khác | `<ruby>間<rt>ま</rt></ruby>` (4 chỗ); `notes`: "彼がいる間に vs 彼が**いている**間に" (いている không dùng) | `<rt>あいだ</rt>`; đổi cặp ví dụ (vd 寝る間に vs 寝ている間に) | de | chờ sửa |
| 427 | ～ば (thể giả định) (N4) | `notes`, `examples` 2 | gõ sai, gợi ý lệch | X　クーラーを**つけらば**、すぐに涼しくなった。; gợi ý ví dụ 2 thiếu câu hỏi 「日本語の新聞が読めますか」 | **つければ**; bổ sung "Anh đọc được báo tiếng Nhật không?" | de, pt | chờ sửa |
| 429 | ～まで…～までに (N4) | `meaning_vi` | gõ sai | "Sau **へまでに** thường là những câu…" | **～までに** | de, pt | chờ sửa |
| 430 | ～よう (N4) | `examples` 5 | gõ sai | のどが痛い。かぜ**が**ひいたようだ。 | かぜ**を**ひいたようだ | de, pt | chờ sửa |
| 433 | ～ように (mong ước) (N4) | `meaning_vi` | gõ sai | "những động từ **khồn** bao gồm ý **chỉ** của người nói" | "không bao gồm ý chí" | de | chờ sửa |
| 434 | ～らしい (N4) | `notes` | gợi ý lệch | `notes` ghi "Ở đây ～らしい diễn tả đậm chất… Không dùng để truyền đạt tin đồn" trong khi nghĩa và ví dụ 5–6 của mẫu là "nghe nói" | Viết lại `notes` cho khớp cả hai nghĩa | de | chờ sửa |
| 437 | ～るとき (N4) | `examples` 2, `meaning_vi`, `notes` | gõ sai, khác | **ごばん**を食べるとき; nghĩa chỉ ghi "trước khi" trong khi ví dụ 2–4 là đồng thời; `notes` tiếng Nhật nhắc ①–④ không khớp | **ごはん**; bổ sung nghĩa "khi/lúc"; chỉnh `notes` | de, pt | chờ sửa |
| 438 | ～るときに (N4) | `comparison` (ruby) | ruby | `<ruby>行<rt>おこな</rt></ruby>ったとき`; `V-<ruby>後<rt>ご</rt></ruby>で`, `出発する前に/<ruby>後<rt>ご</rt></ruby>で` | `<rt>い</rt>`; `<rt>あと</rt>` | de, pt | chờ sửa |
| 439 | ～中 (N4) | `comparison` (ruby), `explain` | ruby, khác | `N + <ruby>中<rt>なか</rt></ruby>（ちゅう）`, `<ruby>中<rt>なか</rt></ruby>（じゅう）`; `<ruby>一日<rt>ついたち</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>` (suốt cả ngày); `explain` có dấu "•" đứng riêng dòng (3 chỗ) | `<rt>ちゅう</rt>` / `<rt>じゅう</rt>`; `<rt>いちにち</rt>` + `<rt>じゅう</rt>`; gộp dòng | de, pt | chờ sửa |
| 440 | ～場合 (N4) | `notes` (tiếng Nhật) | khác | Nhắc ví dụ "①～⑥" trong khi mẫu chỉ có 3 ví dụ | Chỉnh số hoặc bổ sung ví dụ | de | chờ sửa |
| 443 | ～(よ)うと思います (N4) | `examples` 2 | gõ sai | 旅行に**行きので**、かばんを買おうと思っています。 | **行くので** | de, pt | chờ sửa |
| 445 | ～（ら）れます (khả năng) (N4) | `meaning_vi` | khác | Câu cuối bị cắt: "…ý chí của con người. Nhiều khi trợ từ" | Bổ sung phần còn thiếu (trợ từ を → が) | de, pt | chờ sửa |
| 447 | ～?それとも～? (N4) | `comparison` | khác | Ô ví dụ còn tàn dư thẻ HTML: `行きます&lt; b&gt;か、…帰ります&lt; b&gt;か？` | Bỏ `&lt; b&gt;` | de, pt | chờ sửa |
| 483 | ～たらどう (N4) | `notes` ②③ | gợi ý lệch | 上着　着たら？ ghi "Sao không **mang** áo khoác vào đi?"; そろそろねたらどう？ ghi "đi ngủ **sớm**" | "mặc áo khoác"; "Sắp đến giờ rồi, đi ngủ đi chứ?" | de, pt | chờ sửa |
| 1548 | いか (N4) | tên mẫu, `meaning_vi` | khác | Tên mẫu ghi "いか" (không rõ là 以下); nghĩa "Diễn đạt mức nhiều ít về số lượng" là nhãn phân loại, chưa phải nghĩa | "～以下"; nghĩa: "từ ~ trở xuống" | de, pt | chờ sửa |
| 1550/1553/1556/1559/1562 | そういう, でも～でも, ない～はない, は～のひとつだ, ように～てほしい (N4) | cả mẫu | khác | Chỉ có `meaning_vi`, không có ví dụ, cách nối hay giải thích | Bổ sung ví dụ và giải thích | de | chờ sửa |
| 1554 | とうとうＶ－た (N4) | `explain` (tiếng Nhật) | khác | Tham chiếu từ điển gốc còn sót: "詳しくは【やっと】１ を参照" | Bỏ hoặc đổi thành liên kết mẫu やっと | de, pt | chờ sửa |
| 1603 | これ／それ／あれ いじょう (N4) | `meaning_vi` | khác | Nghĩa là hai nhãn phân loại "Diễn đạt cấp (so sánh) cao nhất / sự giới hạn, cực hạn" | Nghĩa: "không có gì ~ hơn cái này/đó/kia" | de | chờ sửa |
| 1605 | まま（で） (N4) | `meaning_vi`, `explain` (tiếng Nhật) | khác | Nghĩa là nhãn phân loại "sự liên tục / sự bất biến"; `explain` nhắc ví dụ "5. ～⑩" trong khi chỉ có 6 ví dụ | Nghĩa: "cứ để nguyên ~"; chỉnh số ví dụ | de, pt | chờ sửa |
| 1606 | やっと (N4) | `meaning_vi` | gợi ý lệch | Nghĩa ghi "Diễn đạt sự giới hạn, cực hạn" (không khớp やっと) | "Cuối cùng cũng ~ (sau nhiều vất vả, chờ đợi)" | de, pt | chờ sửa |
| 493 | ～ことになる (N3) | `notes` | gợi ý lệch, gõ sai | 来月結婚することになりました ghi "có quyết định là sẽ kết hôn" (thiếu "tháng sau"); "Tôi sẽ **việc** tại trụ sở chính" | Thêm "tháng sau"; "sẽ làm việc" | de, pt | chờ sửa |
| 494 | ～について (N3) | `notes` ví dụ 3 | gõ sai | この作品についての感想を話して**いただけません**。 (câu nhờ thiếu か) | **いただけませんか**。 | de, pt | chờ sửa |
| 495 | ～てばかり (N3) | `notes` | khác | Mỗi ví dụ chép câu Nhật 2 lần; đánh số "③" lặp (3. ③, 4. ③) | Bỏ câu lặp; đánh lại số | de | chờ sửa |
| 496 | ～V thể sai khiến ていただけませんか (N3) | `notes` | gõ sai, khác | 店員B「そうだね。店長に**行ってみよう**。」; hội thoại 店員A/B không có bản dịch Việt | **言ってみよう**; bổ sung bản dịch | de, pt | chờ sửa |
| 497 | ～ていただきたい (N3) | `notes` | khác | `notes` gộp nguyên khối các mẫu ～てもらいたい／～てほしい (meaning_vi, explain, examples, comparison, common_mistakes); vài câu dịch Việt dùng 。 và 、 kiểu Nhật | tách khối chép gộp về đúng mẫu; sửa dấu câu | de, pt | chờ sửa |
| 503 | （nghi vấn từ）～のか (N3) | `explain` | gợi ý lệch | câu minh hoạ "Cái gì vui. Tôi không biết" không khớp ví dụ nào của mẫu | dùng câu minh hoạ khớp ví dụ | de | chờ sửa |
| 504 | いくら～ても (N3) | `examples`, `notes` | khác | ví dụ 5–6 là どんなに～でも／どんな～でも, không phải いくら～ても; `notes` tiếng Nhật nhắc ①⑥ không có ví dụ tương ứng, thừa dấu `"` cuối | chuyển ví dụ về đúng mẫu; bỏ tham chiếu ①⑥ và dấu thừa | de, pt | chờ sửa |
| 505 | だけど (N3) | `notes`, `connection` | khác | `notes` ghi cặp so sánh "学生だけど… / 学生だけど…" hai vế giống hệt nhau; `connection` rối | sửa vế so sánh; viết lại `connection` | de, pt | chờ sửa |
| 506 | ところで (N3) | `comparison` | ruby | ô còn `&lt; b&gt;`; ruby `<ruby>謝<rt>しゃ</rt></ruby>い` | bỏ thẻ hỏng; 謝<rt>あやま</rt>った | de, pt | chờ sửa |
| 508 | ～てしかたがない (N3) | `notes` | khác | tham chiếu chéo 【てならない】 chép từ từ điển, không có trong kho | bỏ hoặc trỏ tới mẫu trong kho | de | chờ sửa |
| 509 | ～あいだに (N3) | `meaning_vi`, `examples`, `notes` | gõ sai, khác | "trạng **thai**"; ví dụ 3–5 là ～あいだ (không に); `notes` nhắc ⑤ không có | "trạng **thái**"; chuyển ví dụ sang mẫu ～あいだ; bỏ tham chiếu ⑤ | de, pt | chờ sửa |
| 510 | ～あまり (N3) | `examples` | khác | ví dụ 4–5 không có bản dịch Việt | bổ sung bản dịch | de, pt | chờ sửa |
| 511 | ～あまりにも (N3) | `examples`, `notes` | khác | 2 ví dụ không có bản dịch Việt; `notes` nhắc ⑤ không có | bổ sung bản dịch; bỏ tham chiếu ⑤ | de, pt | chờ sửa |
| 512 | ～うちに (N3) | `notes` | gợi ý lệch, gõ sai, ruby | dòng "~ là từ ngữ thể hiện sự biến đổi và không bao hàm ý chí" đặt dưới câu Nhật 継続的なこと; "xãy ra"; ピアノが**引ける**; ruby `<ruby>間<rt>かん</rt></ruby>（に）`, `<ruby>暗<rt>くらく</rt></ruby>く`; nhiều khối chép gộp | dịch đúng câu Nhật; "xảy ra"; **弾ける**; 間<rt>あいだ</rt>, 暗<rt>くら</rt>く | de, pt | chờ sửa |
| 514 | ～おかげで (N3) | `examples`, `notes` | khác | ví dụ 5 (渋滞のおかげで…遅れた) là cách dùng mỉa mai, không ghi chú; khối cuối `notes` không có nhãn | ghi chú "mỉa mai" ở ví dụ; thêm nhãn khối | de, pt | chờ sửa |
| 515 | ～かける (N3) | `examples`, `notes` | khác | ví dụ 6 出かけようとした時 không dùng mẫu ～かける (出かける là động từ); `notes` chép lặp 4 khối | thay ví dụ; gộp khối lặp | de | chờ sửa |
| 516 | ～かな (N3) | `notes` | khác | `notes` tiếng Nhật còn số tham chiếu （８１） | bỏ số tham chiếu | de | chờ sửa |
| 517 | ～から～にかけて (N3) | `notes` | khác | `notes` chép lặp 3 khối cùng nội dung | gộp khối lặp | de, pt | chờ sửa |
| 518 | ～かわりに (N3) | `notes` | khác | còn ghi chú biên tập nội bộ: "Hút nguồn từ 3 dòng: (Shinkanzen), 1103 (Marugoto…), 1161 (Somatome…)", "Mimikara 86…", "stt hiện 1036" | bỏ ghi chú nội bộ khỏi nội dung hiển thị | de, pt | chờ sửa |
| 521 | ～きり (N3) | `examples` | gõ sai, khác | 「**T**あっ」; これっきりに**しまう**; ví dụ 5 có "* " đầu câu; ví dụ 6 "～だけ（限定）" không phải câu ví dụ (vi null) | 「あっ」; これっきりに**しよう**; bỏ "* "; bỏ ví dụ 6 | de, pt | chờ sửa |
| 522 | ～きる (N3) | `examples`, `notes` | gõ sai, khác | こんなに**った**くさん食べきれない; `notes` còn ghi chú biên tập nội bộ "trong dữ liệu của bạn (ghichu=2)… cần update thêm cho ct ghichu=2" | こんなに**た**くさん; bỏ ghi chú nội bộ | de, pt | chờ sửa |
| 525 | ～くらい (N3) | `meaning_vi`, `examples`, `notes` | khác, gõ sai | `meaning_vi` chỉ ghi "Khoảng chừng…" trong khi ví dụ chủ yếu là nghĩa mức độ; "đến **nổi**"; `notes` chép gộp 6 khối, đánh số "②" hai lần | bổ sung nghĩa "đến mức…"; "đến **nỗi**"; gộp khối, sửa số | de, pt | chờ sửa |
| 527 | ～こそ (N3) | `examples`, `notes` | gõ sai | gợi ý "thi **đổ**"; 実際に使って**見て**こそ; `notes` "Chính là**,.** chính vì" | "thi **đỗ**"; 使って**みて**こそ; bỏ dấu thừa | de, pt | chờ sửa |
| 528 | ～ことから (N3) | `examples` | khác, gợi ý lệch, gõ sai | ví dụ 3 "～という理由で…と名付けられた" và ví dụ 6 "～がきっかけで→変化" là tiêu đề nhóm nghĩa, không phải câu (vi null); 遺書 dịch "di chúc"; **冨**士見坂 / "FUJIMZAKA" | bỏ 2 mục tiêu đề khỏi `examples`; "thư tuyệt mệnh"; 富士見坂 / "Fujimizaka" | de, pt | chờ sửa |
| 530 | ～ことに (N3) | `examples`, `comparison`, `explain` | gõ sai, gợi ý lệch, ruby | うれし**こいと**に; 中止 dịch "bị ngừng giữa chừng"; ruby `<ruby>幸<rt>さ</rt></ruby>い`; `explain` lẫn "残念ながら（khác)" trong danh sách | うれし**いこと**に; "bị huỷ"; 幸<rt>さいわ</rt>い; bỏ mục lẫn | de, pt | chờ sửa |
| 532 | ～ことになっている (N3) | `comparison` | khác | ví dụ ô 1 社内では禁煙**ことになっている** thiếu という; ví dụ ô 5 (～こととなっている) lại dùng までとなっております | 禁煙**という**ことになっている; thay ví dụ đúng mẫu | de, pt | chờ sửa |
| 533 | ～ことはない (N3) | `examples` | gõ sai | そんなに**がったり**することはありませんよ | **がっかり** | de, pt | chờ sửa |
| 534 | ～さ (N3) | `comparison`, `notes`, `explain` | ruby, khác | ruby `<ruby>高<rt>こう</rt></ruby>さ`, `<ruby>弱<rt>じゃく</rt></ruby>み`; `notes` "Nhiều từ 4 chữ Hán" (深さ, 厚さ… không phải 4 chữ Hán); `explain` trỏ "詳しく ở mục 5" không tồn tại | 高<rt>たか</rt>さ, 弱<rt>よわ</rt>み; sửa mô tả; bỏ tham chiếu | de, pt | chờ sửa |
| 536 | ～しかない (N3) | `examples`, `notes` | gõ sai, khác | 入口でまた**買しか**なかった; ví dụ 1 chỉ là cụm 買うしかない; `notes` たった一人しか**ない** | **買うしか**なかった; thay bằng câu đủ; たった一人しか**いない** | de, pt | chờ sửa |
| 538 | ～ずに (N3) | `examples`, `mistakes`, `comparison`, `notes` | gõ sai, ruby, khác | gợi ý "ăn **sánhg**"; ví dụ 6 スマホを見ずに歩くのは危ない ngược ý, gợi ý Việt kèm ghi chú biên tập "（lưu ý nghĩa ngược…）"; ruby `<ruby>笑<rt>わらわ</rt></ruby>わず`, `<ruby>仏<rt>ふつ</rt></ruby>`; `notes` chép gộp, có dòng "──────" | "ăn **sáng**"; thay ví dụ 6; 笑<rt>わら</rt>わず, 仏<rt>ほとけ</rt>; tách khối | de, pt | chờ sửa |
| 539 | ～せいで (N3) | `notes` | khác | `notes` chép gộp 3 khối, khối cuối là giải thích và ví dụ của mẫu おかげだ／せいだ không có nhãn | tách khối, thêm nhãn | de, pt | chờ sửa |
| 540 | ～そうだ(nghe nói) (N3) | `examples`, `explain`, `mistakes`, `comparison`, `notes` | khác, gõ sai | mẫu là "nghe nói" (伝聞) nhưng ví dụ 3–6 và phần lớn `explain`/`mistakes` nói về そうだ "trông có vẻ" (様態); `explain` lặp 2 dòng そうに + V／そうな + N; インフル**インザ** | chuyển phần 様態 về mẫu riêng; bỏ dòng lặp; インフル**エンザ** | de, pt | chờ sửa |
| 541 | ～そのために (N3) | `connection`, `explain` | khác | `connection` chỉ ghi "[mục đích]" trong khi nghĩa chính là kết quả "vì vậy"; `explain` lặp lại 2 gạch đầu dòng | bổ sung "[nguyên nhân/mục đích]"; bỏ dòng lặp | de, pt | chờ sửa |
| 542 | ～たて (N3) | `mistakes` | khác | mục 3 tự mâu thuẫn: "× 勉強したて? → có thể dùng 勉強したて" | viết lại mục lỗi | de, pt | chờ sửa |
| 543 | ～たとえば (N3) | `notes` | khác | `notes` tiếng Nhật nhắc ⑤⑥ (ví dụ giả định) nhưng chỉ có 5 ví dụ, không có câu giả định | bỏ tham chiếu ⑤⑥ | de, pt | chờ sửa |
| 544 | ～たとえ～ても (N3) | `comparison` | gõ sai | 真実**だた**としても | 真実**だった**としても | de, pt | chờ sửa |
| 545 | ～たところで (N3) | `explain`, `examples` | gợi ý lệch, gõ sai | `explain` "Sự việc trước vừa kết thúc thì sự việc sau xảy ra" chỉ khớp ví dụ 6, trái `meaning_vi` "Dù có"; すんでしまった**ところ**は | viết lại `explain` cho nghĩa "dù có… cũng"; すんでしまった**こと**は | de, pt | chờ sửa |
| 547 | ～たびに (N3) | `examples`, `explain` | gợi ý lệch, khác | 車が通る dịch "xe điện chạy qua"; `explain` lặp lại 5 gạch đầu dòng | "xe ô tô"; bỏ dòng lặp | de, pt | chờ sửa |
| 548 | ～だけの (N3) | `examples`, `explain` | gõ sai | gợi ý "**đổ** N3"; "dũng **khi**" | "**đỗ** N3"; "dũng **khí**" | de, pt | chờ sửa |
| 549 | ～だらけ (N3) | `notes` | gõ sai, khác | "Dễ nhầm với ～だらけ và ～まみれ" (tự so với chính mình); "đầy vết nhăn **mát** rồi" | "Dễ nhầm ～だらけ với ～まみれ"; "**mất** rồi" | de, pt | chờ sửa |
| 550 | ～っけ (N3) | `meaning_vi`, `notes` | khác, gõ sai | `meaning_vi` lẫn đoạn " \| Biểu thị văn nói của ngữ pháp…"; "tuần **sua**"; パー**テイ**ー | tách đoạn lẫn; "tuần **sau**"; パー**ティ**ー | de, pt | chờ sửa |
| 551 | ～っぱなし (N3) | `examples`, `mistakes` | gõ sai, khác | **葉**を磨いている; **みず**; 無駄**づがい**; ví dụ 5 "したまま、後始末をしていない" là chú thích nghĩa (vi null); `mistakes` gợi ý 雨を降らせっぱなし | **歯**を磨いている; 水; 無駄**づかい**; bỏ ví dụ 5 | de, pt | chờ sửa |
| 552 | ～ついでに (N3) | `examples`, `notes` | gợi ý lệch, gõ sai | 「いいの、ついでがあるから。」 dịch "Được không, vì cậu cũng tiện mà"; "riêng **lẽ**" | "Không sao đâu, tôi cũng tiện việc mà"; "riêng **lẻ**" | de, pt | chờ sửa |
| 553 | ～つつ (N3) | `comparison` | ruby | `<ruby>聴<rt>きき</rt></ruby>きながら` | 聴<rt>き</rt>きながら | de, pt | chờ sửa |
| 557 | ～てごらん (N3) | `examples` | khác | ví dụ 6 「危ないから、触らないでごらん？（皮肉）」 là cách dùng mỉa mai, không tự nhiên làm ví dụ chuẩn | thay ví dụ | de, pt | chờ sửa |
| 560 | ～てもしかたがない (N3) | `examples`, `notes` | gõ sai, gợi ý lệch | **ワイン**さんが怒る**もの**しかたがない (gợi ý "anh Wan"); `notes` 行っても仕方（が）ない dịch "Đành phải đi" | **ワン**さんが怒る**のも**しかたがない; "Có đi cũng chẳng ích gì" | de, pt | chờ sửa |
| 561 | ～ということ/はなしだ (N3) | `explain`, `connection` | khác | `explain` là câu dịch máy ngôi thứ nhất "Tôi sẽ cho bạn biết những gì tôi nhận được từ thông tin…"; `connection` "N + だ / Na + だ / Aい" thiếu ということ | viết lại `explain` ("truyền đạt lại điều nghe/đọc được"); sửa `connection` | de, pt | chờ sửa |
| 563 | ～というと (N3) | `examples` | gợi ý lệch | 夏休みと言うと dịch "Nói đến mùa hè" | "Nói đến kỳ nghỉ hè" | de | chờ sửa |
| 565 | ～というの～ (N3) | `comparison` | gõ sai | 試験は中止**そうだ** | 中止**だそうだ** | de, pt | chờ sửa |
| 567 | ～というより (N3) | `examples`, `notes` | gõ sai, khác | **外界**で学ぶというより (gợi ý "nước ngoài"); `notes` ví dụ 3 (hội thoại A/B) không có bản dịch; "美知子 đi bộ" chưa phiên âm tên | **外国**で学ぶ; bổ sung bản dịch; "Michiko" | de, pt | chờ sửa |
| 569 | ～といっても (N3) | `examples` | gõ sai | この辺りは一戸建てが**多く。**しかし | 一戸建てが**多い。**しかし | de, pt | chờ sửa |
| 570 | ～とおり(に) (N3) | `meaning_vi`, `examples`, `notes` | gõ sai, gợi ý lệch, khác | `meaning_vi` dòng 4 "予想　+　**とおり**" ; 聞いていた**とり**; 試験は難しかった dịch "không khó"; `notes` "bản đồ bạn tôi **vẻ**", 予定どおりだ dịch "dự đoán", 自分の思うとおりに生きる dịch lệch, "Một hành động nào đó được thực hiện liên tục" không khớp mẫu; chép gộp 6 khối | "予想　+　**どおり**"; 聞いていた**とおり**; "khó"; "**vẽ**", "đúng như kế hoạch", "Sống theo đúng ý mình thì khó"; bỏ dòng lạc; gộp khối | de, pt | chờ sửa |
| 573 | ～として (N3) | `examples` | gợi ý lệch, gõ sai | バレーボール dịch "bóng rổ"; "du **hoc** sinh" | "bóng chuyền"; "du **học** sinh" | de, pt | chờ sửa |
| 574 | ～とする (N3) | `explain`, `notes`, `examples` | khác | `explain` lặp 3 dòng giống hệt nhau; `notes` còn ghi chú biên tập nội bộ "Trong dữ liệu của bạn có nhiều ct (ghichu=2/3)… cần update thêm"; ví dụ 2, 4, 5, 6 dùng としたら／とすれば; gợi ý "đi **dự** thăm người bệnh" | viết lại `explain` cho 2 nghĩa; bỏ ghi chú nội bộ; "đi thăm" | de, pt | chờ sửa |
| 575 | ～とすると (N3) | `examples`, `comparison` | gợi ý lệch, ruby | gợi ý "Nếu giả định này**成立**thì" còn chữ Nhật chưa dịch; ruby `<ruby>着<rt>ちゃく</rt></ruby>いたら` | "Nếu giả định này đúng thì"; 着<rt>つ</rt>いたら | de, pt | chờ sửa |
| 576 | ～とともに (N3) | `explain`, `comparison` | khác, ruby | `explain` gạch đầu dòng hỏng ("•" một dòng riêng rồi "① …"); ruby `<ruby>聞<rt>きき</rt></ruby>きながら` | gộp "• ① …"; 聞<rt>き</rt>きながら | de | chờ sửa |
| 578 | ～ないことはない (N3) | `examples`, `explain` | khác, gợi ý lệch | ví dụ 1, 3, 4 là phủ định ba lớp (難しくない／安くない／悪くない + ことはない) nghĩa không rõ; ví dụ 1 dịch "không phải là không làm được", ví dụ 4 dịch "cũng không tệ"; `explain` dính chữ và lặp ("Dùng khi:Thừa nhận… .Phản hồi…") | thay ví dụ rõ nghĩa (vd 書けないことはない); tách dòng, bỏ lặp | de, pt | chờ sửa |
| 579 | ～ないこともない (N3) | `examples`, `explain` | khác | ví dụ 1 không có bản dịch Việt (vi null); `explain` dính chữ và lặp ("Dùng để:Đưa ra… .Chuẩn bị…") | bổ sung bản dịch; tách dòng, bỏ lặp | de, pt | chờ sửa |
| 581 | ～ないわけにはいかない (N3) | `meaning_vi`, `examples` | khác | `meaning_vi` chứa nguyên khối giải thích tiếng Nhật và 3 dòng giải thích thay vì nghĩa ngắn; gợi ý ví dụ 4–6 lặp lại cả câu Nhật kèm "=>" | `meaning_vi` ngắn "Không thể không…", chuyển giải thích sang `explain`; bỏ phần lặp | de, pt | chờ sửa |
| 582 | ～ながらも (N3) | `notes` | gõ sai, gợi ý lệch | 文句を**いながら**も; 飲酒運**敵**; いや**いあや**ながら; 我ながらおいしくできた dịch "tôi cũng đã làm ngon"; chép gộp 2 khối | 文句を**言いながら**も; 飲酒運**転**; いや**いや**ながら; "tự thấy mình nấu cũng ngon" | de, pt | chờ sửa |
| 583 | ～なぜなら (N3) | `examples` | khác | ví dụ 4 dùng というのは, không dùng なぜなら | thay ví dụ hoặc chuyển sang mẫu というのは | de | chờ sửa |
| 584 | ～なんか (N3) | `examples` | khác | ví dụ 3 合格できる**なんか**ありえない (đúng mẫu phải là なんて); ví dụ 6 "渋谷や原宿なんか" là cụm rời | 合格できる**なんて**; thay bằng câu đủ | de, pt | chờ sửa |
| 585 | ～なんて (N3) | `explain` | gõ sai, khác | 「ひとりで**登**なんて」 không có trong ví dụ và thiếu る; "mang ý **nghiac** là" | trích đúng ví dụ của mẫu; "ý **nghĩa**" | de, pt | chờ sửa |
| 587 | ～にかわって (N3) | `explain`, `notes` | khác | `explain` "Nにかわり のN: 電子契約 にかわり の仕組み" sai ngữ pháp (phải là に代わる N); `notes` "không dùng cho thay thế đồ vật đơn thuần" mâu thuẫn ví dụ 3 (紙に代わってタブレット) | 電子契約に代わる仕組み; sửa ghi chú | de | chờ sửa |
| 588 | ～にかんして (N3) | `examples`, `explain`, `notes` | gõ sai, khác | **いくつ**質問があります; 自然**エネルギ**; `explain` "đối tượng hoặc **hoặc chủ**"; `notes` chép gộp 4 khối | **いくつか**質問; **エネルギー**; "đối tượng hoặc chủ đề"; gộp khối | de, pt | chờ sửa |
| 592 | ～にわたって (N3) | `examples`, `comparison` | khác, ruby | ví dụ 4 夜遅く**までにわたって** không tự nhiên; ruby `滞在の<ruby>間<rt>ま</rt></ruby>` | 深夜にわたって / 夜遅くまで; 間<rt>あいだ</rt> | de, pt | chờ sửa |
| 594 | ～に対して (N3) | `notes` | khác, gợi ý lệch | `notes` chép gộp 4 khối (có dòng "──────", các nhãn meaning_vi/explain/examples dính liền); 目上の人 dịch "sếp" | gộp khối; "người trên" | de, pt | chờ sửa |
| 595 | ～に比べて (N3) | `notes` | gõ sai, gợi ý lệch, khác | 深夜は**電器**料金が安い; 通信販売 dịch "bán hàng truyền thông"; chép gộp 4 khối | **電気**料金; "mua hàng qua mạng/đặt hàng từ xa"; gộp khối | de, pt | chờ sửa |
| 596 | ～に違いない (N3) | `meaning_vi` | khác | `meaning_vi` lẫn công thức "［ふつう］　+　に違いない" và "［Na：ひまだN：雨だ］" (dính chữ) | chuyển công thức sang `connection`; nghĩa ngắn "Chắc chắn là…" | de, pt | chờ sửa |
| 599 | ～ばかりでなく (N3) | `notes` | khác, gõ sai | 3 ví dụ lặp lại cả câu Nhật trong dòng dịch kèm "=>"; ご馳走し**てて**くれた; chép gộp 2 khối | bỏ phần lặp; ご馳走し**て**くれた | de, pt | chờ sửa |
| 600 | ～ばよかった (N3) | `comparison`, `notes`, `explain` | khác, gõ sai | hàng "～とよかった" lại lấy ví dụ 早く会える**といいね**; ruby có dấu cách thừa (`行け ばよかった`); `notes` ví dụ 安かったら買うのに không thuộc mẫu; パー**テイ**ー; `explain` gạch đầu dòng hỏng ("•" một dòng riêng) | sửa hàng thành ～といい; bỏ dấu cách; thay ví dụ; パー**ティ**ー; gộp gạch đầu dòng | de, pt | chờ sửa |
| 602 | ～ふりをする (N3) | `comparison`, `notes` | ruby, khác | ruby `知らぬ<ruby>体<rt>からだ</rt></ruby>`; `notes` "chen tính từ đánh giá: わざと～、いかにも～" (đây là phó từ) | 体<rt>てい</rt>; "phó từ" | de, pt | chờ sửa |
| 603 | ～べき (N3) | `examples`, `explain` | gõ sai, gợi ý lệch, khác | **がれ**からも好**きか**れている; 愛すべき人柄 dịch "Dáng người hay hay"; `explain` gạch đầu dòng hỏng | **だれ**からも好**か**れている; "tính cách đáng mến"; gộp gạch đầu dòng | de, pt | chờ sửa |
| 604 | ～べきではない (N3) | `comparison`, `mistakes` | gõ sai | 夜更かし**はない**ほうがいい; "**Nham** với" | 夜更かし**はしない**ほうがいい; "**Nhầm** với" | de, pt | chờ sửa |
| 605 | ～ほど (N3) | `examples`, `explain` | gợi ý lệch, gõ sai, khác | gợi ý "**Luật** văn"; ví dụ 5 thêm "đi bộ" (câu Nhật không có); `explain` gạch đầu dòng hỏng | "**Luận** văn"; bỏ "đi bộ"; gộp gạch đầu dòng | de | chờ sửa |
| 606 | ～ままにする (N3) | `examples` | gợi ý lệch, gõ sai | 空気が悪い dịch "Không có không khí"; "để **nguyện**" | "Không khí ngột ngạt"; "để **nguyên**" | de | chờ sửa |
| 607 | ～めったにない (N3) | `explain` | khác | tham chiếu nội bộ "めったに～ない (540)" | bỏ số tham chiếu | de | chờ sửa |
| 608 | ～ものか (N3) | `mistakes`, `comparison` | khác, ruby | mục 1 "× 静かなものか → ✓ 静かなものか" hai vế giống hệt; ruby `<ruby>言<rt>いい</rt></ruby>いやしない` | × 静かだものか → ✓ 静かなものか; 言<rt>い</rt>いやしない | de, pt | chờ sửa |
| 611 | ～ようとしない (N3) | `comparison`, `notes` | gõ sai | hàng Vようともしない lấy ví dụ **読むよう**ともしない; `notes` お金を持って**いますのに** | **読もう**ともしない; 持って**いるのに** | de, pt | chờ sửa |
| 612 | ～ようになっている (N3) | `meaning_vi`, `examples` | khác, gõ sai | `meaning_vi` dòng đầu là tiếng Nhật (ある目的のためにそう作られている); 肉料理**が**魚料理か | bỏ dòng tiếng Nhật; 肉料理**か**魚料理か | de, pt | chờ sửa |
| 613 | ～ようになる (N3) | `notes` | gợi ý lệch | ここの電気は人が通るとつくようになっています dịch "trở nên sáng lên" (đây là mẫu ～ようになっている: được thiết kế để…) | "được thiết kế để tự bật khi có người đi qua"; chuyển ví dụ sang mẫu 612 | de, pt | chờ sửa |
| 614 | ～わけがない (N3) | `notes` | gõ sai | 「今日、**いま**？」 (gợi ý "Hôm nay có rảnh không") | 「今日、**ひま**？」 | de, pt | chờ sửa |
| 615 | ～わけだ (N3) | `examples`, `notes` | gợi ý lệch | ví dụ 2 「それで、試合に出てないわけだ」 dịch "Nghĩa là không tham dự trận đấu rồi"; `notes` 寒いわけだ dịch "Vì lạnh đấy" | "Thảo nào không ra sân"; "Thảo nào lạnh thế" | de, pt | chờ sửa |
| 616 | ～わけではない (N3) | `examples` | gợi ý lệch | ví dụ 4 それでも毎日１～２時間は残業している dịch "chỉ là làm thêm 1, 2 tiếng" | "dù vậy ngày nào cũng làm thêm 1–2 tiếng" | de, pt | chờ sửa |
| 617 | ～わけにはいかない (N3) | `mistakes`, `explain`, `examples` | khác, gõ sai | `mistakes` chỉ ghi tham chiếu nội bộ "Đã trình bày chi tiết ở khối 410."; `explain` chứa nguyên khối tiếng Nhật; gợi ý "uống rượu **ngày**" | viết `mistakes` thật hoặc bỏ trường; bỏ khối tiếng Nhật; bỏ chữ thừa | de, pt | chờ sửa |
| 618 | ～をこめて (N3) | `comparison`, `notes` | ruby, gõ sai | ruby `<ruby>歌<rt>うたう</rt></ruby>う`; "khăn choàng cổ **được đã** đan" | 歌<rt>うた</rt>う; "đã được đan" | de, pt | chờ sửa |
| 621 | ～一方 (N3) | `meaning_vi`, `notes`, `examples`, `comparison` | khác, gợi ý lệch | `meaning_vi` và toàn bộ `notes` nói về ～一方だ ("càng ngày càng"), trái `explain` ("KHÔNG mang nghĩa ngày càng"); gợi ý ví dụ 6 "Anh ấy**社**giao tiếp" còn chữ Nhật; comparison 便利**一方** thiếu な | tách phần 一方だ sang mẫu riêng; "Anh ấy hoà đồng"; 便利**な**一方 | de, pt | chờ sửa |
| 623 | ～上に (N3) | `notes`, `comparison` | khác, gõ sai | `notes` chép gộp 5 khối; công thức hỏng "ひまな　N：お茶の］"; "thuân tiện", "tôi còn tôi còn"; ありがとうご**さ**いました; comparison 便利**うえに** thiếu な | gộp khối; "［Na：ひまな　N：お茶の］"; sửa chính tả; ござ; 便利**な**うえに | de, pt | chờ sửa |
| 624 | ～以来 (N3) | `examples` | gợi ý lệch, khác | ví dụ 6 引っ越し以来 dịch "**Trừ** khi chuyển nhà"; ví dụ 4 母に会って以来の再会だ khó hiểu | "**Từ** khi chuyển nhà"; thay ví dụ 4 (vd 卒業以来の再会だ) | de, pt | chờ sửa |
| 627 | ～向け (N3) | `examples`, `notes` | gợi ý lệch, khác, gõ sai | アメリカ向けの車 dịch "ô tô kiểu Mĩ"; `notes` còn ghi chú biên tập nội bộ "(ghichu=1 và ghichu=2)"; "dành **do** khách du lịch" | "ô tô xuất sang Mỹ"; bỏ ghi chú nội bộ; "dành **cho**" | de, pt | chờ sửa |
| 628 | ～最中に (N3) | `comparison` | ruby | `～<ruby>間<rt>かん</rt></ruby>に`; `休みの<ruby>間<rt>ま</rt></ruby>に` | 間<rt>あいだ</rt> (cả hai chỗ) | de | chờ sửa |
| 629 | ～気味 (N3) | `examples`, `comparison`, `mistakes` | khác, ruby | ví dụ 1 忙し気味 trái với `explain` (気味 không đi với tính từ); ruby `<ruby>気味<rt>きみ</rt></ruby>`; ô ví dụ "ミスしがちっぽい(×)"; mục lỗi 1 "× 寒い気味 → Đúng: 寒気味 không tự nhiên" rối | thay ví dụ 1 (vd 疲れ気味); 気味<rt>ぎみ</rt>; bỏ ví dụ sai; viết lại mục lỗi | de, pt | chờ sửa |
| 630 | ～行われることになっている (N3) | khác | khác | tên mẫu là một ví dụ cụ thể của ～ことになっている (trùng #532); ví dụ 4 dùng ことになりました | gộp vào #532 hoặc đổi tên mẫu | de | chờ sửa |
| 631 | ～開けたとたん (N3) | khác, `explain` | khác | tên mẫu là ví dụ cụ thể của ～たとたん (trùng #546); `explain` "Vế sau không dùng… (tha động từ)" không chính xác (ý đúng: không dùng ý chí/mệnh lệnh) | gộp vào #546; sửa `explain` | de, pt | chờ sửa |
| 632 | ～際に (N3) | `comparison` | ruby | `～<ruby>際<rt>ぎわ</rt></ruby>に` | 際<rt>さい</rt> | de, pt | chờ sửa |
| 633 | ～食べないことはない (N3) | khác, `meaning_vi` | khác | tên mẫu là ví dụ cụ thể của ～ないことはない (trùng #578); `meaning_vi` dòng đầu là tiếng Nhật | gộp vào #578; bỏ dòng tiếng Nhật | de, pt | chờ sửa |
| 635 | ですから～ (N3) | `notes` | gõ sai | "**Dựa** báo thời tiết"; パー**テイ**ー | "**Dự** báo"; パー**ティ**ー | de | chờ sửa |
| 636 | どんなに～ても (N3) | `mistakes` | khác | mục 2 còn ghi chú dở "V→Vてでも? (khác mẫu, không nhầm)" | V→Vても | de, pt | chờ sửa |
| 638 | まったく～ない (N3) | `explain` | khác | gạch đầu dòng hỏng ("•" một dòng riêng) | gộp gạch đầu dòng | de | chờ sửa |
| 641 | もしも～なら (N3) | `comparison` | khác | hàng "もし～ても" lấy ví dụ 雨でも行く (không có もし) | もし雨でも行く | de, pt | chờ sửa |
| 645 | 必ずしも～とは限らない (N3) | `examples`, `notes` | khác, gõ sai | ví dụ 5 "…のは、**必ずしも**量より質が大切だからだ" đặt 必ずしも sai chỗ; `notes` 高いものが**必ず**いいものだとは限らない | bỏ 必ずしも ở vế sau; **必ずしも** | de, pt | chờ sửa |
| 647 | Nghi vấn từ～(の)か/～かどうか (N3) | `examples` | khác | ví dụ 3–4 còn furigana trong ngoặc ở dòng đáp (知(し)りません, 毎日(まいにち)練習(れんしゅう)…) | bỏ furigana trong ngoặc | de | chờ sửa |
| 648 | Dạng rút gọn(～ている/～でいる) (N3) | `connection` | khác | `meaning_vi`/`explain` nêu 4 dạng rút gọn (てる, とく, なきゃ, なくちゃ) nhưng tên mẫu và `connection` chỉ có ～ている | bổ sung `connection` cho đủ 4 dạng | de | chờ sửa |
| 650 | (…のは)～からだ (N3) | `examples` | gõ sai | ví dụ 4 phần chú thích こんなに**滞(とどこおり)**している | こんなに**渋滞(じゅうたい)**している | de, pt | chờ sửa |
| 651 | 「V thể mệnh lệnh」と頼まれる (N3) | `examples` | khác | ví dụ 3 dùng と言われた, không dùng と頼まれる | thay ví dụ hoặc chuyển sang #652 | de, pt | chờ sửa |
| 654 | ～。さて～。 (N3) | `notes` | gõ sai | "Và **bây** là về lịch tuần tới" | "Và **bây giờ** là…" | de | chờ sửa |
| 655 | ～。すると、～ (N3) | `examples`, `notes`, `comparison`, `explain` | gõ sai, gợi ý lệch, khác | gợi ý Việt 5 ví dụ dính chữ ("cửa.Thìcon mèo"); `notes` 窓を開けた dịch "Đã **ở** cửa", 蛾 dịch "bướm"; hàng "すると (ý chí)" lấy ví dụ 「すると、急ごう！」 trái mục lỗi 2; `explain`/`notes` gạch đầu dòng hỏng | thêm dấu cách; "Đã **mở** cửa sổ", "con ngài"; sửa ví dụ; gộp gạch đầu dòng | de, pt | chờ sửa |
| 656 | ～。そういえば、～ (N3) | `examples`, `notes`, `explain` | gõ sai, gợi ý lệch, khác | gợi ý Việt dính chữ ("nhỉ.Nói mới nhớ"); `notes` 田中君、元気かな dịch "khỏe nhỉ", いい家ですね dịch "gia đình tốt"; `explain` gạch đầu dòng hỏng | thêm dấu cách; "không biết có khoẻ không", "Nhà đẹp nhỉ"; gộp gạch đầu dòng | de, pt | chờ sửa |
| 657 | ～。それが、～ (N3) | `examples`, `explain` | gõ sai, khác | gợi ý Việt dính chữ ("anh ấy.Thế nhưngvẫn"); `explain` gạch đầu dòng hỏng | thêm dấu cách; gộp gạch đầu dòng | de | chờ sửa |
| 658 | ～。それでも～。 (N3) | `examples`, `notes`, `explain` | gõ sai, khác | gợi ý Việt dính chữ ("lần.Thế nhưngvẫn"); `notes` "Tuy **nhiêｎ**" (chữ n toàn giác); `explain` gạch đầu dòng hỏng | thêm dấu cách; "nhiên"; gộp gạch đầu dòng | de | chờ sửa |
| 661 | ～。というのは～。 (N3) | `examples` | khác | ví dụ 2 và 5 (SDGsというのは…, ブラック企業というのは…) là というのは định nghĩa, không phải mẫu nối câu nêu lý do (trùng #564) | chuyển sang #564 | de | chờ sửa |
| 662 | ～「デジカメ」というのは… (N3) | khác | khác | tên mẫu là một ví dụ cụ thể của ～というのは (trùng #564) | gộp vào #564 | de | chờ sửa |
| 664 | ～あやまることはない (N3) | khác | khác | tên mẫu là một ví dụ cụ thể của ～ことはない (trùng #533) | gộp vào #533 | de, pt | chờ sửa |
| 665 | ～から言って (N3) | `notes` | khác | `notes` tiếng Nhật còn số tham chiếu （９０） | bỏ số tham chiếu | de | chờ sửa |
| 667 | ～くらい…はない・～ぐらい…はない・～ほど…はない (N3) | `meaning_vi`, `notes` | khác, gợi ý lệch | `meaning_vi` dòng đầu là tiếng Nhật; `notes` ví dụ ①–④ là ほど…ない (so sánh kém), không phải ほど…はない; 思ったほど暑くない dịch "không **lạnh**" | bỏ dòng tiếng Nhật; chuyển ví dụ sang mẫu ほど～ない; "không **nóng**" | de, pt | chờ sửa |
| 669 | ～からこそ (N3) | `examples`, `explain` | khác | ví dụ 1–2 (明日こそ, 今年こそ) và dòng "N：雨　+　こそ" là mẫu こそ, không phải からこそ | chuyển sang #527; bổ sung ví dụ からこそ | de | chờ sửa |
| 670 | ～ことは…が (N3) | `notes` | khác | 4 câu dịch Việt kết thúc bằng 。 kiểu Nhật | đổi thành dấu chấm | de | chờ sửa |
| 671 | ～じゃない(か) (N3) | `notes`, `meaning_vi` | khác | `notes` tiếng Nhật "「Ｖ－ようではないか」のくだけた言い方" là của mẫu Vようじゃないか (rủ rê), không khớp nghĩa xác nhận ở các ví dụ; `meaning_vi` "Câu hỏi phủ định… mang ý nghĩa “ですね”" khó hiểu | thay `notes` đúng mẫu; viết lại nghĩa "…đấy chứ/…mà" | de, pt | chờ sửa |
| 675 | ～そうにない (N3) | `notes`, `mistakes` | khác | `notes` chép gộp cả nội dung mẫu ～そうもない (kèm khối "comparison:", "common_mistakes:"), có câu tự so sánh "mạnh hơn ～そうにない"; mục lỗi 3 "không nói ×ありそうにない" không chính xác | tách phần ～そうもない; sửa mục lỗi | de | chờ sửa |
| 676 | ～その上～ (N3) | `notes` | khác | `notes` chép gộp 3 khối, khối "comparison:" bị cắt cụt giữa chừng ("それに 便利（べ explain:…") | gộp khối; bỏ đoạn cắt cụt | de, pt | chờ sửa |
| 679 | ～ためだ・～ため(に)… (N3) | `meaning_vi` | khác | `meaning_vi` chứa nguyên khối giải thích tiếng Nhật và 2 dòng giải thích thay vì nghĩa ngắn | nghĩa ngắn "Vì/do… (nguyên nhân)"; chuyển giải thích sang `explain` | de | chờ sửa |
| 681 | ～たらだめ/～てはだめ/～ちゃだめ (N3) | `examples` | gợi ý lệch, gõ sai | ví dụ 2 そんな高い服を買ったら／買っちゃ、お金がなくなるよ dịch "Không được **mưa** bộ đồ đắt như thế, hết tiền đó" | "Mua bộ đồ đắt như thế thì hết tiền đấy" | de, pt | chờ sửa |
| 682 | ～たらどうか (N3) | `meaning_vi`, `examples`, `notes` | khác, gõ sai | `meaning_vi` dòng đầu là tiếng Nhật; gợi ý 4 ví dụ lặp lại cả câu Nhật kèm "->" và dùng 、。 kiểu Nhật; `notes` tiếng Nhật nhắc ③④⑥ (chỉ có 4 ví dụ), còn số （２１３）, いか**か**でしょうか | bỏ dòng tiếng Nhật; bỏ phần lặp; bỏ tham chiếu; いか**が**でしょうか | de, pt | chờ sửa |
| 685 | ～って(引用) (N3) | `meaning_vi` | khác | `meaning_vi` nhắc "ví dụ ⑤", thừa ngoặc "「「N1～ってN2" | bỏ tham chiếu số; sửa ngoặc | de, pt | chờ sửa |
| 689 | ～つもりでした (N3) | `examples` | khác | ví dụ 1 **明日**は早く起きるつもりでしたが、寝坊してしまいました tự mâu thuẫn về thời (gợi ý Việt phải thêm "Hôm qua… sáng nay") | **今朝**は早く起きるつもりでしたが… | de | chờ sửa |
| 694 | ～てる (N3) | `examples` | khác, gõ sai | tên mẫu là ～てる nhưng ví dụ 1, 2, 4 là ～ちゃう／～とく; furigana trong ngoặc 吉(よし)田(だ)さん; "đằng **kai**" | tách ví dụ theo mẫu; bỏ furigana; "đằng **kia**" | de | chờ sửa |
| 695 | ～でしょうがない (N3) | `examples` | khác | tên mẫu ～**で**しょうがない nhưng cả 3 ví dụ là ～**て**しょうがない (trùng #558) | gộp vào #558 hoặc thêm ví dụ な-adj/N + で | de | chờ sửa |
| 698 | ～というとのに (N3) | khác, `examples` | gõ sai, gợi ý lệch | tên mẫu và cả 3 ví dụ ghi ～という**と**のに; gợi ý "Cho dù từ ngày sẽ đi du lịch" | ～というのに; "Dù từ mai sẽ đi du lịch" | de, pt | chờ sửa |
| 700 | ～ところだ・～ところ(+trợ từ)… (N3) | `meaning_vi` | gõ sai, khác | 「ところを・ところで・ **ことろ**へ」; `meaning_vi` dòng đầu là tiếng Nhật | **ところ**へ; bỏ dòng tiếng Nhật | de, pt | chờ sửa |
| 704 | ～にしては/～わりに (N3) | `examples` | gợi ý lệch | 毎日３時間勉強しているにしては、あまり成績がよくない dịch "thế mà thành tích được tốt lắm" (thiếu "không") | "thế mà thành tích không tốt lắm" | de | chờ sửa |
| 705 | ～にたいする (N3) | `explain`, `examples` | khác | `explain` "chỉ đối tượng của các hành động như \"tặng quà\"" khó hiểu; ví dụ 2 dùng に対して (không phải にたいする) | viết lại `explain`; thay ví dụ | de | chờ sửa |
| 706 | ～にともなう (N3) | `examples` | gõ sai | **さまさま**な問題; gợi ý "nhiều **vẫn** đề" | **さまざま**な; "**vấn** đề" | de | chờ sửa |
| 709 | ～にもとづいて/もとづき (N3) | `examples` | gợi ý lệch | 知事 dịch "thị trưởng"; ví dụ 5 dịch "Kể từ bây giờ tôi dự định làm hàng dựa vào ý kiến của khách hàng" | "thống đốc/tỉnh trưởng"; "Từ nay chúng tôi sẽ tiếp tục phát triển sản phẩm dựa trên ý kiến khách hàng" | de | chờ sửa |
| 710 | ～にもとづく (N3) | `examples` | gõ sai | この**売り上**予想 | **売り上げ**予想 | de | chờ sửa |
| 711 | ～によっては (N3) | `explain`, `examples` | khác | `explain` dòng đầu là khối tiếng Nhật; ví dụ 1–2 là によって (không có は) | bỏ khối tiếng Nhật; thay ví dụ | de | chờ sửa |
| 713 | ～によっては～(こと)もある (N3) | `explain`, `examples` | khác, gợi ý lệch | `explain` "Sẽ có một số điều kiện như thế trong một số điều kiện và tình hình nhất định" vô nghĩa; **ひと**によっては; 中止 dịch "hoãn" | "Tuỳ điều kiện/hoàn cảnh mà có trường hợp như vậy"; 人; "huỷ" | de | chờ sửa |
| 716 | ～によると (N3) | `examples`, `meaning_vi` | gõ sai, gợi ý lệch | 医者によると dịch "Theo dự báo thời tiết"; 統計によ**るば**; 20年間減り続けている dịch "sẽ tiếp tục giảm trong 20 năm"; `meaning_vi` lẫn "ニュースに　+　よれば／よる" | "Theo bác sĩ"; によ**れば**; "đã giảm liên tục suốt 20 năm"; sửa thành よると／よれば | de, pt | chờ sửa |
| 718 | ～のこと(về/thông tin về) (N3) | `notes` | khác | `notes` là ghi chú nội bộ "meaning gốc: Về việc" | bỏ ghi chú | de | chờ sửa |
| 719 | ～のだから (N3) | `meaning_vi`, `notes`, `examples` | khác | `meaning_vi` dòng đầu là khối tiếng Nhật; `notes` tiếng Nhật nhắc ví dụ ① (子供だ…) không có trong mẫu, còn số （４６６）; gợi ý ví dụ 2 kết thúc bằng 。 | bỏ khối tiếng Nhật; bỏ tham chiếu; sửa dấu câu | de | chờ sửa |
| 720 | ～のではないだろうか (N3) | `explain` | gõ sai | "đây là cách **nó** có hình thức…"; "**khắng** định" | "cách **nói**"; "**khẳng** định" | de | chờ sửa |
| 722 | ～のに(mục đích) (N3) | `examples` | gõ sai | **インタネット**を使っている | **インターネット** | de | chờ sửa |
| 725 | ～のはなしでは (N3) | `examples` | gợi ý lệch | チケットはまだ残っているようです dịch "tôi vẫn còn vé" | "hình như vé vẫn còn" | de, pt | chờ sửa |
| 727 | ～のようだ・～みたいだ (N3) | `notes`, `examples` | gõ sai, gợi ý lệch | 春　+　みたい**だな**N; ここの砂は星みたいな形をしている dịch "Tôi đang làm cát ở đây thành hình giống ngôi sao"; ví dụ 3 "…靴で踏んで遊んで。" cụt | みたい**な**N; "Cát ở đây có hình như ngôi sao"; thay ví dụ 3 | de, pt | chờ sửa |
| 729 | ～はずがない (N3) | `examples` | khác | ví dụ 4–5 dùng ～わけがない; gợi ý ví dụ 3–5 kết thúc bằng 。 | chuyển ví dụ sang #614; sửa dấu câu | de | chờ sửa |
| 731 | ～はもちろん～も (N3) | `notes` | gõ sai | 炒めて食べる**は**もちろん; "xem thôi **củng**"; "là **đơn** nhiên" | 食べる**のは**もちろん; "cũng"; "đương nhiên" | de | chờ sửa |
| 733 | ～ば(いい)と思う (N3) | `examples` | khác | ví dụ 3 あんなすてきな人が恋人ならな không có ～ば…と思う | thay ví dụ | de | chờ sửa |
| 734 | ～ば～のに (N3) | `connection`, `notes` | khác | `connection` rối "V + [câu/mệnh đề] + のに / … Aい + い ければ"; `notes` furigana dính chữ 「忙いそがしかったんだ。時間じかんがあれば行いったのに」 | "Vば/Aければ/N・Naなら + … + のに"; bỏ furigana dính | de, pt | chờ sửa |
| 738 | ～をとおして (N3) | `examples`, `notes` | gõ sai, gợi ý lệch, khác | 彼女**を**知り合いました; 紅白歌合戦 phiên "Kouhakuuta"; `notes` chép gộp 4 khối | 彼女**と**知り合いました; "Kōhaku Uta Gassen"; gộp khối | de | chờ sửa |
| 741 | まるで～のようだ (N3) | `examples` | khác | ví dụ 3 まるで理解できない là まるで～ない (phủ định), không phải ～のようだ | thay ví dụ | de | chờ sửa |
| 746 | ～もしかするとうそかもしれない (N3) | khác, `connection` | khác | tên mẫu là một ví dụ cụ thể của もしかすると～かもしれない (trùng #820); `connection` "かも かもしれない かもしれません" dính liền | gộp vào #820; tách bằng "／" | de | chờ sửa |
| 749 | ～ものですから (N3) | `examples` | khác | ví dụ 3 dùng ものだから (trùng nội dung #748) | gộp vào #748 hoặc thay ví dụ | de | chờ sửa |
| 752 | ～ようだ/～みたいだ(suy đoán) (N3) | `meaning_vi` | khác | công thức hỏng ngoặc: "［N：雨な／N：雨の　+　ようだ」" và "元気／N：雨　+　みたいだ］" | "［Na：元気な／N：雨の］+ようだ", "［Na：元気／N：雨］+みたいだ" | de, pt | chờ sửa |
| 754 | ～ような/ように (N3) | `examples` | gõ sai | 私は**赤いや**ピンクのような | **赤や**ピンクのような | de | chờ sửa |
| 761 | ～ように(mục đích) (N3) | `name`, `meaning_vi`, `examples` | khác, gõ sai | tên mẫu "mục đích", `name` "giống như／theo như", `meaning_vi` "Để…" và ví dụ 1–4 là nghĩa "như": các trường mâu thuẫn nhau; gợi ý ví dụ 4 "nên **vào tôi muốn** mở bữa tiệc… vào tuần sau" | tách 2 nghĩa thành 2 mẫu hoặc thống nhất tên; sửa câu | de, pt | chờ sửa |
| 764 | ～られた (N3) | `explain`, `mistakes` | khác | `explain` お帰りに**なられた** là kính ngữ kép; mục lỗi 4 "×先生から褒められた" không chính xác (から dùng được) | bỏ ví dụ kính ngữ kép; sửa mục lỗi | de | chờ sửa |
| 765 | ～れる・られる (N3) | `examples` | gợi ý lệch | ví dụ 4 gợi ý bỏ sót câu đầu (妹の病気は現代医学では治すことが難しいそうだ) | bổ sung bản dịch | de | chờ sửa |
| 770 | ～ことだ（khuyên） (N3) | `meaning_vi` | gợi ý lệch | `meaning_vi` "Nghĩa là, nên" (lẫn nghĩa ということだ) | "Nên…" | de | chờ sửa |
| 774 | 少しも・ちっとも～ない (N3) | `examples` | khác | ví dụ 3 日本語は少ししか話せません là 少ししか, không phải 少しも (trùng #634) | thay ví dụ | de | chờ sửa |
| 775 | ～弾けることは弾けるが… (N3) | khác, `examples` | khác, gõ sai | tên mẫu là ví dụ cụ thể của ～ことは…が (trùng #670); gợi ý "biết đánh **như** mà" | gộp vào #670; "nhưng" | de | chờ sửa |
| 778 | ～日本文化について (N3) | khác | khác | tên mẫu là ví dụ cụ thể của ～について | đổi tên mẫu | de | chờ sửa |
| 779 | ～ように（mong muốn kết quả） (N3) | `name` | khác | `name` "mong muốn kết quả" không khớp nội dung (mệnh lệnh/yêu cầu nhẹ) | "～ように（yêu cầu）" | de | chờ sửa |
| 782 | ～とく・どく（Vておく rút gọn） (N3) | `explain` | khác, gõ sai | 3 ý dính liền "…gì đó.Xử lý công **viêc**.Giữ nguyên hiện trạng."; dòng "Tham khảo…: Xem" là liên kết rỗng | tách dòng, "việc"; bỏ dòng liên kết | de | chờ sửa |
| 783 | ～(ら)れている（bị động） (N3) | `explain`, `examples` | khác | 2 dòng "…：Xem" là liên kết rỗng; ví dụ 2 行われます không có ている | bỏ dòng liên kết; 行われています | de | chờ sửa |
| 784 | ～上げる・上がる (N3) | `notes` | khác | `notes` là ghi chú nội bộ "Phân biệt với あげる cho–nhận (dòng ～上げる)"; trùng #622 | bỏ ghi chú | de | chờ sửa |
| 787 | ～ように言う・頼む (N3) | `examples` | gõ sai | 家では**たぼこ**を吸わないよう | **たばこ** | de | chờ sửa |
| 791 | ～聞いたところ (N3) | khác | khác | tên mẫu là ví dụ cụ thể của ～たところ | đổi tên mẫu | de | chờ sửa |
| 793 | ～聞こえるようにする (N3) | `examples`, `explain`, khác | khác, gõ sai | ví dụ 3 "家を買う**ようにために**…／働く**ようにために**…" sai ngữ pháp (có vẻ là ví dụ lỗi thiếu dấu ×); "**KHông**"; tên mẫu là ví dụ cụ thể | "×家を買うように → ○家を買うために"; "Không"; đổi tên mẫu | de | chờ sửa |
| 794 | ～つもりだった (N3) | `examples` | gõ sai | 買い物に**行き**つもりでした; gợi ý "mua sắm **như** vì đau đầu" | **行く**つもりでした; "nhưng" | de | chờ sửa |
| 795 | ～見せてほしい (N3) | khác | khác | tên mẫu là ví dụ cụ thể của ～てほしい | đổi tên mẫu | de | chờ sửa |
| 798 | ～通す (N3) | `meaning_vi`, `notes` | khác | `meaning_vi` dòng đầu là tiếng Nhật; `notes` "「最後まで－．する」" lỗi ký tự, còn số （３１６） | bỏ dòng tiếng Nhật; 「最後まで～する」; bỏ số | de | chờ sửa |
| 799 | ～遅れるということだ (N3) | khác, `examples`, `explain` | gõ sai, gợi ý lệch, khác | tên mẫu là ví dụ cụ thể (trùng #562); 少し**遅れるれる**ということです; 70％ dịch "khoảng 70%"; `explain` "Có thể dùng động từ ở dạng ý hướng, mệnh lệnh" khó hiểu | gộp vào #562; 遅れる; "70%"; sửa ghi chú | de, pt | chờ sửa |
| 801 | ～間…・～間に… (N3) | `meaning_vi` | khác | `meaning_vi` chứa 2 khối giải thích tiếng Nhật và 6 dòng giải thích thay vì nghĩa ngắn | nghĩa ngắn "Trong suốt…／Trong lúc…"; chuyển giải thích sang `explain` | de | chờ sửa |
| 802 | ～の（danh từ hóa） (N3) | `explain` | khác | "biến đổi **danh từ**, động từ, tính từ… thành cụm danh từ" (danh từ không cần danh từ hoá) | bỏ "danh từ" | de | chờ sửa |
| 804 | ～切る / ～切れる / ～切れない (N3) | `explain` | gõ sai | "thể **phụ** định"; trùng #522 | "phủ định" | de, pt | chờ sửa |
| 808 | ～(さ)せてほしい (N3) | `examples` | khác | ví dụ 2 dùng ～させてください | thay ví dụ | de | chờ sửa |
| 809 | ～(さ)せられる/～される (N3) | `meaning_vi`, `explain` | khác | `meaning_vi` và `explain` trùng nội dung, chứa công thức "読まない+　される" khó hiểu; "diễn đạt **cảm tình** do bởi một cơ duyên" | `meaning_vi` ngắn "Bị bắt làm…"; viết lại công thức; "cảm xúc nảy sinh do…" | de | chờ sửa |
| 810 | ～(の)なら… (N3) | `meaning_vi` | khác, gõ sai | `meaning_vi` dòng đầu là tiếng Nhật; "Tiếp nhận thông tin ~ , **i**…" | bỏ dòng tiếng Nhật; bỏ chữ thừa | de | chờ sửa |
| 818 | ～結局 (N3) | `connection` | khác | `connection` còn chữ tiếng Anh "conclusion" | "[kết luận]" | de | chờ sửa |
| 834 | ～てはいけないから (N3) | `examples` | khác | ví dụ 3 dùng 遅れる**といけない**から (mẫu khác) | thay ví dụ hoặc ghi chú biến thể | de | chờ sửa |
| 839 | ～とみえるとみえて (N3) | khác | khác | tên mẫu dính liền hai dạng "～とみえるとみえて" (tương tự #840 "～途中で途中に", #842 "～とてもない", #844 "～はで有名") | "～とみえる／～とみえて"; "～途中で／～途中に"; "とても～ない"; "～は～で有名" | de | chờ sửa |
| 868 | ～さえ～ば (N3) | `notes`, `mistakes` | gõ sai, khác | **元気**さえ良かったら、山頂まで**いきたっかた** (gợi ý "trời đẹp"); あまり**辛いさえ**なければ; mục lỗi 3 "高いさえあれば × → 安くさえあれば" đổi cả từ; chép gộp 5 khối | **天気**さえ良かったら…**行きたかった**; **辛くさえ**なければ; "高くさえあれば"; gộp khối | de, pt | chờ sửa |
| 884 | ～おそれがある (N2) | `examples`, `notes` | gõ sai, gợi ý lệch | 窓のそばに**ペットル**を置かないでください; `notes` 壁が倒れたり dịch "tường sẽ **vỡ**" | **ペットボトル**; "tường đổ" | de, pt | chờ sửa |
| 1539 | かんがえられない (N3) | khác | khác | mẫu chỉ có `meaning_vi` (và `connection`), không có ví dụ; tương tự #1540, #1541, #1543, #1545, #1546 | bổ sung ví dụ | de | chờ sửa |
| 1544 | でもあるまい (N3) | `meaning_vi`, `examples` | gợi ý lệch, khác | `meaning_vi` "Diễn đạt sự cần thiết, nghĩa vụ" trái với `explain` tiếng Nhật (phê phán: không cần/không nên); tên mẫu でもあるまい nhưng cả 3 ví dụ là こと**も**あるまい | "Không cần phải…/Việc gì phải…"; đổi tên mẫu thành こともあるまい | de | chờ sửa |
| 1594 | ～がた (polite plural suffix…) (N3) | `meaning_vi`, `explain` | khác | nguồn là tiếng Anh; `meaning_vi` bị cắt cụt giữa từ ("…respectfully to mul") và lặp "means ～がた is"; tên mẫu tiếng Anh | viết lại `meaning_vi` tiếng Việt ngắn; đổi tên mẫu "～がた" | de, pt | chờ sửa |
| 1595 | あがる (N3) | `meaning_vi`, `explain` | gợi ý lệch, khác | `meaning_vi` "Diễn đạt mức cực đoan" không khớp `explain` (động tác/trạng thái hướng lên); `explain` nhắc "5. ～⑧" trong khi chỉ có 6 ví dụ | "…lên (hướng lên trên)"; sửa tham chiếu | de, pt | chờ sửa |
| 1596 | だとすれば (N3) | `explain` | khác | `explain` tiếng Nhật còn số tham chiếu （２００） (tương tự #1597 （３４２）) | bỏ số tham chiếu | de | chờ sửa |
| 1597 | とすれば (N3) | `meaning_vi` | gợi ý lệch | `meaning_vi` "Diễn đạt điều kiện (điều kiện giả định)" không khớp `explain`/ví dụ (N + とすれば = "đứng ở lập trường của…") | "Đứng ở lập trường của…" | de | chờ sửa |
| 1598 | にかわり (N3) | `meaning_vi` | khác | thiếu `meaning_vi` (tương tự #1599, #1600, #1601, #1602) | bổ sung nghĩa | de | chờ sửa |
| 1602 | Ｖ－ばいい（lời khuyên） (N3) | `explain` | khác | `explain` tiếng Nhật nhắc "３ａ" (kiểu đánh số của sách gốc) | sửa thành "ví dụ 3" | de | chờ sửa |
| 886 | ～のことだから (N2) | `examples`, `meaning`, `mistakes` | gõ sai / khác | Ví dụ 2 「こうだね」; ví dụ 1–2 thiếu gợi ý Việt; `meaning` lẫn dòng công thức "彼女　+　のことだから"; mục lỗi 2 "× 来るのことだから → ◯ 彼が来る人柄を前提に言うなら別表現。" khó hiểu | 「そうだね」; bổ sung gợi ý; bỏ dòng công thức; viết lại mục lỗi 2 | de | chờ sửa |
| 887 | ～ものがある (N2) | `mistakes`, `comparison`, `explain` | gõ sai / ruby | Mục lỗi 2 "× 静かなものがある → ✓ 静かなものがある" hai vế giống hệt; "kía cạnh"; ruby `気味` ghi きみ | Sửa vế sai (vd × 静かだものがある); "khía cạnh"; ぎみ | de | chờ sửa |
| 888 | ～をきっかけに (N2) | `explain`, `notes`, `mistakes`, `examples` | gõ sai / khác | Ghi chú nội bộ "Đã trình bày chi tiết ở khối 411."; ví dụ 2 彼の所説; `notes` 卒業を契機に特立する; chép gộp nhiều khối | Bỏ ghi chú nội bộ; 小説; 独立する; gộp lại một khối | de | chờ sửa |
| 893 | ～てちょうだい (N2) | `examples` | khác | Ví dụ 3 その塩をちょうだい không dùng mẫu ～てちょうだい | Thay ví dụ (vd その塩を取ってちょうだい) | de | chờ sửa |
| 896 | ～がてら (N2) | `comparison`, `examples` | ruby / khác | Ruby `<ruby>伺<rt>うかがう</rt></ruby>う`; ví dụ 5 là dòng biến đổi câu "…寄る →散歩がてら郵便局に寄る。" | うかが; tách thành một câu ví dụ | de, pt | chờ sửa |
| 898 | あまりの～に (N2) | `examples`, `explain` | gõ sai / khác | Ví dụ 4 新しい電車自動車; ví dụ 3–4 thiếu gợi ý Việt; "sự khác nhiên" | 電気自動車; bổ sung gợi ý; "ngạc nhiên" | de | chờ sửa |
| 899 | ～が出ている (N2) | `meaning` | khác | "Thấy được con người của người đó" quá hẹp so với mẫu | Vd "Lộ ra, thể hiện ra (tính cách, tình cảm…)" | de | chờ sửa |
| 900 | ということは (N2) | `meaning`, `examples`, `notes` | gợi ý lệch / khác | `meaning` là chữ giữ chỗ "Ý nghĩa, cách dùng & ví dụ"; ví dụ 1 どこかに出かけている dịch "không đi được đâu"; ví dụ 3 thiếu gợi ý; 「私はもうお酒を飲めます。」 dịch "Tôi đã bỏ rượu rồi" | Ghi nghĩa "Nghĩa là…, tức là…"; "đang đi đâu đó"; "Tôi đã uống được rượu rồi" | de, pt | chờ sửa |
| 901 | 見受けられる (N2) | `examples`, `explain` | khác | Ví dụ 1–2 thiếu gợi ý Việt; `explain` chỉ liệt kê động từ ghép khác (見比べる…) không giải thích mẫu | Bổ sung gợi ý và phần giải thích | de | chờ sửa |
| 902 | ～あげく (N2) | `examples`, `notes` | gợi ý lệch / gõ sai | Ví dụ 3 いろいろ悩んだ dịch "Sau bao nhiêu năm"; 口論の上げく; `notes` ví dụ ①②③ không có bản dịch; chép gộp | "Sau khi đắn đo đủ điều"; 口論のあげく; bổ sung bản dịch | de | chờ sửa |
| 905 | ～かねない (N2) | `examples` | gợi ý lệch | Ví dụ 1 人が大勢いたら dịch "Nhiều người thế này nên…"; ví dụ 4 事故 dịch "tai nạn giao thông" | "Nếu có đông người thì đã có thể thành tai nạn lớn"; "tai nạn" | de | chờ sửa |
| 906 | ～かねる (N2) | `examples` | gợi ý lệch | Ví dụ 2 見かねて dịch "Thấy tôi không viết được" (mất nghĩa "không đành lòng nhìn") | "Không đành lòng nhìn tôi mãi không viết được luận văn…" | de | chờ sửa |
| 911 | ～からといって (N2) | `notes`, `comparison` | gõ sai / ruby | "khỏi khỏi bệnh"; ví dụ ① 治ったからって bị cắt cụt; ký hiệu ➂ lệch kiểu; chép gộp; ruby `料理人` ghi じん | "khỏi bệnh"; viết đủ câu; ③; にん | de, pt | chờ sửa |
| 912 | ～からには (N2) | `explain`, `comparison` | ruby / khác | Hai dòng "Nghĩa vụ/quyết tâm…", "Suy đoán tất yếu…" lặp hai lần; tiêu đề ～`上`（は） ghi じょう trong khi ví dụ ghi うえ | Bỏ đoạn lặp; うえ | de, pt | chờ sửa |
| 915 | ～か～ないかのうちに (N2) | `examples`, `comparison` | gõ sai / ruby / gợi ý lệch | Ví dụ 3 始業ベルがあり終わる; ví dụ 1 デパート dịch "siêu thị", "cửa từ đóng sang mở" khó hiểu; ruby `<ruby>暗<rt>くらく</rt></ruby>く` | 鳴り終わる; "Cửa trung tâm thương mại vừa mở…"; くら | de, pt | chờ sửa |
| 916 | ～がたい (N2) | `examples`, `notes` | gõ sai | "cố ấy"; "Cài này" | "cô ấy"; "Cái này" | de | chờ sửa |
| 917 | ～が～だけに (N2) | `examples` | khác | Ví dụ 3–4 thiếu gợi ý Việt | Bổ sung | de | chờ sửa |
| 918 | ～くらいなら (N2) | `examples`, `notes` | gõ sai / khác | Ví dụ 4 あんな男に顔を上げるくらいなら (nghi nhầm 頭を下げる); ví dụ 3–4 thiếu gợi ý Việt; "Nhất mạnh thái độ" | 頭を下げる; bổ sung gợi ý; "Nhấn mạnh" | de | chờ sửa |
| 919 | ～げ (N2) | `examples`, `explain` | gợi ý lệch / gõ sai | Ví dụ 6 何か言いたげな様子 dịch "như thể đang nói gì đó"; "dạng văn kết" | "như muốn nói điều gì đó"; "văn viết" | de, pt | chờ sửa |
| 920 | ～ことだから (N2) | `examples` | gợi ý lệch | Ví dụ 2 真面目な木村さん dịch "Cái thằng thanh niên nghiêm túc Kimura" (giọng suồng sã, lệch câu Nhật) | "Anh Kimura vốn nghiêm túc nên chắc chắn sẽ giữ lời hứa." | de | chờ sửa |
| 921 | ～ことなく (N2) | `examples` | gợi ý lệch | Ví dụ 3 彼らは dịch "anh ấy"; ví dụ 1 "Khi được chọn hỏi" | "họ"; "Khi được hỏi chọn…" | de | chờ sửa |
| 922 | ～ざるを得ない (N2) | `examples`, `notes` | gợi ý lệch / gõ sai | Ví dụ 6 彼女が犯人だと断定せざるを得ない dịch "cô ấy buộc phải chấp nhận phán quyết là phạm nhân"; ví dụ 4 未経験者だけで dịch "Với người không có kinh nghiệm"; `notes` 続けるざるをえない | "buộc phải kết luận cô ấy là thủ phạm"; "chỉ toàn người chưa có kinh nghiệm"; 続けざるをえない | de | chờ sửa |
| 925 | ～ずにはいられない (N2) | `notes`, `comparison` | gõ sai / gợi ý lệch / ruby | 泣かずにはいらないよ; 電話をしないではいらなかった, dịch "không gọi điện thoại được"; ví dụ 3 …言わずにはいられないらしい dịch "Tôi không thể không…"; "hung tính"; dòng explain cắt cụt "cuối câu thường thêm"; hai khối lặp nguyên văn; hội thoại ①② không có bản dịch; ruby `<ruby>笑<rt>わらわ</rt></ruby>わ` | いられない; いられなかった, "không thể không gọi điện"; "Hình như (anh ấy) không thể không…"; viết đủ câu (thêm らしい/ようだ); bỏ khối lặp; わら | de, pt | chờ sửa |
| 926 | ～だけあって (N2) | `examples` | gợi ý lệch | Ví dụ 5 歌手もメロディーも dịch thiếu "ca sĩ" | "cả ca sĩ lẫn giai điệu đều tuyệt" | de | chờ sửa |
| 927 | ～だけに (N2) | `examples`, `notes` | gõ sai / khác | Ví dụ 5 苦しい試合だっただけいに、、; `notes` (tiếng Nhật) chỉ nêu nghĩa "kết quả xấu trái kỳ vọng", không khớp `meaning` và ví dụ | だっただけに、; viết lại `notes` | de, pt | chờ sửa |
| 928 | ～だけのことはある (N2) | `examples` | khác | Cả 2 ví dụ thiếu gợi ý Việt; 形も色すごくいい thiếu も | Bổ sung; 形も色もすごくいい | de | chờ sửa |
| 930 | ～っこない (N2) | `mistakes`, `comparison` | ruby / khác | "× 覚えるっこない → đúng: 覚えられっこない" (theo cấu trúc Vます thì là 覚えっこない); ruby `間に<ruby>合<rt>ごう</rt></ruby>いっこない` | 覚えっこない (hoặc ghi rõ cả hai); あ | de, pt | chờ sửa |
| 931 | ～っぽい (N2) | `examples`, `comparison` | ruby / khác | Ví dụ 3–4 thiếu gợi ý Việt; ruby `疲れ<ruby>気味<rt>きみ</rt></ruby>`; `notes` chép gộp | Bổ sung; ぎみ | de | chờ sửa |
| 932 | ～つつある (N2) | `examples` | gõ sai | Ví dụ 1 このレポートが示すとあり | 示すとおり | de, pt | chờ sửa |
| 933 | ～てこそ (N2) | `examples` | gõ sai / gợi ý lệch | Ví dụ 1 "hằng này"; ví dụ 2 技術は使ってこそ価値がある dịch "Có giá chính vì sử dụng kỹ thuật" | "hằng ngày"; "Kỹ thuật phải được dùng thì mới có giá trị." | de, pt | chờ sửa |
| 934 | ～てたまらない (N2) | `examples` | khác | Ví dụ 6 会えなくてたまらない日々が続く thiếu tự nhiên (thường là 会いたくてたまらない) | Thay ví dụ | de | chờ sửa |
| 935 | ～てでも (N2) | `examples` | gõ sai / khác | Ví dụ 2 わざわざ言ってでも; ví dụ 4 大事な打つ合わせ; ví dụ 3–4 thiếu gợi ý Việt | 行ってでも; 打ち合わせ; bổ sung | de | chờ sửa |
| 937 | ～てはならない (N2) | `examples` | gõ sai | Ví dụ 6 施設に立ち入りてはならない | 立ち入ってはならない | de | chờ sửa |
| 938 | ～ては(～ては) (N2) | `notes` | gõ sai / khác | 食べっては寝、食べっては寝; dòng 4 "（注）…" nằm lẫn trong danh sách ví dụ, không có bản dịch | 食べては寝、食べては寝; tách dòng chú thích, bổ sung bản dịch | de | chờ sửa |
| 939 | ～てほしいものだ (N2) | `examples` | khác | Ví dụ 3–4 thiếu gợi ý Việt | Bổ sung | de | chờ sửa |
| 940 | ～てまで (N2) | `examples`, `mistakes` | gõ sai / khác | Ví dụ 6 人脈を使いてまで; mục lỗi 4 "nhìn sau まで là して hay まで" khó hiểu | 使ってまで; viết lại mục lỗi 4 | de | chờ sửa |
| 941 | ～てみせる (N2) | `examples` | gõ sai | Ví dụ 6 ちょっと踊っみせてください, thiếu gợi ý Việt | 踊ってみせてください; bổ sung | de | chờ sửa |
| 942 | ～てもさしつかえない (N2) | `examples` | khác | Ví dụ 3–4 thiếu gợi ý Việt | Bổ sung | de | chờ sửa |
| 943 | ～て以来 (N2) | `examples` | khác | Ví dụ 1–3 thiếu gợi ý Việt | Bổ sung | de | chờ sửa |
| 945 | ～というものでもない (N2) | `meaning`, `examples`, `explain` | gõ sai / khác | "Không hẵn" (3 chỗ); "chắn chắn"; ví dụ 3–4 thiếu gợi ý Việt | "Không hẳn"; "chắc chắn"; bổ sung | de | chờ sửa |
| 946 | ～というものは (N2) | `meaning`, `examples` | gợi ý lệch / khác | `meaning` "～Nghĩa là" không đúng mẫu; ví dụ 2 幸運 dịch "Hạnh phúc"; ví dụ 3–4 thiếu gợi ý Việt | Vd "Cái gọi là ~ thì…"; "May mắn"; bổ sung | de | chờ sửa |
| 947 | ～といった (N2) | `examples` | gõ sai | Ví dụ 4 倒産アジアからの学生大勢住んでいる | 東南アジアからの学生が大勢住んでいる。 | de | chờ sửa |
| 948 | ～とか (N2) | `examples` | gợi ý lệch / khác | Ví dụ 6 人身事故 dịch "tai nạn giao thông nghiêm trọng"; ví dụ 1 あの家 dịch "ngôi nhà này"; ví dụ 3 thiếu gợi ý Việt | "tai nạn liên quan đến người"; "ngôi nhà đó"; bổ sung | de | chờ sửa |
| 949 | ～ところだった (N2) | `notes`, `explain` | khác | Ghi chú nội bộ "3) Chú ý nghĩa khác trong dữ liệu của bạn (ghichu=2)… cập nhật thêm cho ct ghichu=2."; hai dòng "Vるところだった…", "Vないところだった…" lặp hai lần | Bỏ ghi chú nội bộ và đoạn lặp | de | chờ sửa |
| 950 | ～ところをみると (N2) | `examples` | khác | Ví dụ 3–4 thiếu gợi ý Việt | Bổ sung | de | chờ sửa |
| 951 | ～としても (N2) | `comparison` | ruby | `<ruby>言<rt>いい</rt></ruby>いすぎだ` | い | de | chờ sửa |
| 952 | ～として～ない (N2) | `meaning`, `examples` | khác | `meaning` "Không phải là ~" không đúng mẫu; ví dụ 3–4 thiếu gợi ý Việt | "Không một ~ nào…"; bổ sung | de | chờ sửa |
| 954 | ～とはいうものの (N2) | `examples` | khác | Ví dụ 3–5 thiếu gợi ý Việt | Bổ sung | de | chờ sửa |
| 955 | ～どころか (N2) | `examples` | gợi ý lệch | Gợi ý ví dụ 4 bị cắt "Đau cổ quá, ăn cơm á?", phần còn lại "Có mà nước cũng không uống được." nằm ở ví dụ 5; ví dụ 5 (この絵は１００万円…) không có gợi ý đúng | Ghép lại gợi ý ví dụ 4; viết gợi ý ví dụ 5 | de, pt | chờ sửa |
| 957 | ～ないことには (N2) | `examples` | gõ sai / khác | Ví dụ 1 懐疑は始められない; ví dụ 6 やってないことには (nghi やってみないことには); ví dụ 5–6 thiếu gợi ý Việt | 会議; kiểm tra lại; bổ sung | de, pt | chờ sửa |
| 958 | ～ないものか (N2) | `examples` | khác | Ví dụ 3–4 thiếu gợi ý Việt | Bổ sung | de | chờ sửa |
| 959 | ～ながら (N2) | `comparison`, `meaning` | ruby / khác | `<ruby>聴<rt>きき</rt></ruby>き`; `meaning` lặp "Vừa…, vừa… / Mặc dù… \| Vừa… vừa…" | き; bỏ phần lặp | de | chờ sửa |
| 960 | ～にあたって (N2) | `examples` | khác | Cả 2 ví dụ thiếu gợi ý Việt; không có `explain` | Bổ sung | de | chờ sửa |
| 961 | ～における/おいて (N2) | `meaning` | khác | Không có trường `meaning` | Bổ sung ("Ở, trong, tại ~") | de | chờ sửa |
| 962 | ～にかかわらず (N2) | `notes` | khác | Gạch đầu dòng 2 "Nにかかわらずは (ít dùng) → nên dùng 〜かどうかにかかわらずは tránh." câu rối, không rõ ý | Viết lại | de, pt | chờ sửa |
| 963 | ～にかけては (N2) | `examples`, `notes` | gõ sai / khác | Ví dụ 3 "không ai lại Satou"; `notes` 日本チームにかけては守備が堅い dùng sai mẫu (N phải là lĩnh vực) | "không ai bằng Satou"; thay ví dụ (vd 守備にかけては日本チームが一番だ) | de | chờ sửa |
| 964 | ～にこしたことはない (N2) | `examples`, `comparison` | gõ sai / khác | Ví dụ 5 インタネット; ví dụ 6 thiếu gợi ý Việt; hàng 4 ví dụ 冬なら早めに出るべきだ không dùng mẫu なおさらだ | インターネット; bổ sung; thay ví dụ | de | chờ sửa |
| 965 | ～にしては (N2) | `examples` | gõ sai | Ví dụ 6 掃除をしたはかりにしては; ví dụ 3 "những trông vẫn trẻ" | ばかり; "nhưng" | de, pt | chờ sửa |
| 966 | ～にしても (N2) | `examples` | gợi ý lệch / khác | Ví dụ 2 社長にしても、彼を責めているんじゃないと思う dịch "không nên đỗ lỗi cho anh ấy cho dù có là giám đốc"; ví dụ 3–4 thiếu gợi ý Việt | "Tôi nghĩ ngay cả giám đốc cũng không trách anh ấy đâu."; bổ sung | de | chờ sửa |
| 968 | ～につき (N2) | `examples`, `meaning` | khác | Ví dụ 6 chỉ có một từ 「割合」, không có gợi ý; `meaning` ghi "①…" nhưng không có ② và lặp nghĩa hai lần | Bỏ hoặc viết đủ ví dụ nghĩa "mỗi ~" (vd 1人につき3個); gọn lại `meaning` | de | chờ sửa |
| 969 | ～につけ (N2) | `meaning`, `examples` | gợi ý lệch / khác | `meaning` "~ Từ lúc / khi"; ví dụ 1 こういうニュースを見るにつけ dịch "Từ khi nghe tin thời sự này… không còn tin tưởng"; ví dụ 3–4 thiếu gợi ý Việt | "Mỗi khi ~, hễ ~ là"; "Mỗi lần xem tin kiểu này, tôi lại nghĩ…"; bổ sung | de | chờ sửa |
| 973 | ～にほかならない (N2) | `examples` | gõ sai / gợi ý lệch | Ví dụ 3 彼女は合格したのは; ví dụ 6 人間の死 dịch "cái chết của loài người" | 彼女が合格したのは; "cái chết của con người" | de, pt | chờ sửa |
| 975 | ～に向け(て) (N2) | `notes` | khác | `notes` (tiếng Nhật) giải thích nghĩa phương hướng/tư thế và nhắc "③のように" trong khi mẫu chỉ có 2 ví dụ nghĩa mục tiêu | Viết lại `notes` cho khớp nghĩa "hướng tới mục tiêu" | de | chờ sửa |
| 977 | ～に応えて (N2) | `notes` | gõ sai / khác | 学校は学生の用法にこたえ; gợi ý ví dụ 1 thiếu "/大活躍した"; chép gộp hai khối | 要望にこたえ; bổ sung; gộp lại | de | chờ sửa |
| 978 | ～に応じて (N2) | `notes` | gõ sai / khác | `meaning_vi` 変化、耐用性に合わせて (nghi 多様性); dòng "6. 他からの働きかけに対してこたえる" là định nghĩa nghĩa thứ hai nằm lẫn trong ví dụ, không có bản dịch | 多様性; tách thành mục nghĩa riêng và dịch | de | chờ sửa |
| 979 | ～に決まっている (N2) | `comparison` | khác | Ví dụ ngắn 彼は医者だに違いない, 事実だに相違ない (thừa だ sau danh từ) | 医者に違いない; 事実に相違ない | de, pt | chờ sửa |
| 981 | ～に相違ない (N2) | `examples`, `notes` | gõ sai / gợi ý lệch / khác | Ví dụ 1 犯人はあの人の男に相違ない, gợi ý "thằng đó" suồng sã; ví dụ 5 調べ結果; ví dụ 5–6 thiếu gợi ý Việt; `notes` là ghi chú nội bộ "Hút nguồn từ (Marugoto grammar_n2, grammar gốc thiếu に…)"; không có `explain` | あの男; "người đàn ông đó"; 調べた結果; bổ sung; bỏ ghi chú nội bộ | de, pt | chờ sửa |
| 982 | ～に過ぎない (N2) | `notes` | gõ sai | ただ～たけだ; 氷山一角にすぎないと思われない; ロシア話ができる; 当然の子をしたにすぎない | ただ～だけだ; 氷山の一角にすぎないと思われる; ロシア語; 当然のことをした | de, pt | chờ sửa |
| 983 | ～に関わる (N2) | `notes` | khác | `notes` (tiếng Nhật) nhắc ví dụ ①～④, ⑤～⑦ trong khi mẫu chỉ có 2 ví dụ | Bỏ tham chiếu số ví dụ hoặc bổ sung ví dụ | de | chờ sửa |
| 984 | ～に限って (N2) | `examples`, `meaning` | gõ sai / khác | Ví dụ 5 「信頼しているひとが～するはずがない」 là dòng định nghĩa nghĩa ②, không phải ví dụ; ví dụ 6 無断欠勤するなて; `meaning` chỉ có "①", gợi ý "Đặc biệt là... đúng" khó hiểu; không có `explain` | Chuyển dòng định nghĩa vào `meaning` (②); なんて; "Đúng lúc/riêng ~ thì lại…" | de | chờ sửa |
| 985 | ～に限らず (N2) | `examples` | khác | Ví dụ 3–4 (có dấu "*") thiếu gợi ý Việt | Bổ sung | de | chờ sửa |
| 986 | ～に限る (N2) | `examples`, `meaning` | gợi ý lệch / gõ sai | Ví dụ 4 夏休みに限って dịch "giờ nghỉ trưa"; ví dụ 5 若者に限ってことではない; ví dụ 1–5 thuộc nghĩa "chỉ giới hạn" trong khi `meaning` chỉ nêu nghĩa "là nhất" | "kỳ nghỉ hè"; 限ったことではない; bổ sung nghĩa "chỉ giới hạn ở ~" | de, pt | chờ sửa |
| 987 | ～に際して (N2) | `notes`, `comparison` | gõ sai / ruby | 黒田氏はアメリカ大塗料来日際し; ví dụ ①② không có bản dịch; ruby `～<ruby>際<rt>ぎわ</rt></ruby>（に）` | アメリカ大統領来日に際し; bổ sung bản dịch; さい | de, pt | chờ sửa |
| 988 | ～ぬく (N2) | `examples`, `notes` | gõ sai / gợi ý lệch | Ví dụ 4 戦後は祖国は復興に尽くした; `notes` 思ったん以上に, 最高級の味を香りを, 彼らが考え抜いて dịch "anh ấy"; câu "耐えきれる? =>" rối; ví dụ ①② không có bản dịch | 祖国の復興に; 思った以上に, 味と香りを, "họ"; viết lại | de, pt | chờ sửa |
| 991 | ～のではないか (N2) | `examples` | gõ sai | Ví dụ 2 "cô ấy vãn đang phân vân" | "vẫn" | de | chờ sửa |
| 996 | ～はというと (N2) | `examples` | khác | Ví dụ 3–4 thiếu gợi ý Việt | Bổ sung | de | chờ sửa |
| 998 | ～はもとより (N2) | `mistakes` | gõ sai | "Nham với ～はもちろん" | "Nhầm với" | de | chờ sửa |
| 999 | ～ばかりか (N2) | `explain`, `notes` | gõ sai / khác | `explain` 「～ばかりなく」; `notes` スボーツ; chép gộp 4 khối, ví dụ gần trùng nhau | ばかりでなく; スポーツ; gộp lại | de, pt | chờ sửa |
| 1000 | ～ばかりに (N2) | `comparison`, `examples` | ruby / gợi ý lệch | Ruby hỏng `<ruby>聞<rt>ききだし</rt></ruby>き<ruby>出<rt></rt></ruby>した`; ví dụ 5 背が高い dịch "chân dài" | `<ruby>聞<rt>き</rt></ruby>き<ruby>出<rt>だ</rt></ruby>した`; "cao" | de, pt | chờ sửa |
| 1001 | ～まい (N2) | `examples`, `notes` | gõ sai / gợi ý lệch | Ví dụ 5 "không sẽ không đến"; `notes` 夢ではあるまいか dịch "Giấc mơ chắc không có thật rồi" | "sẽ không đến"; "Chẳng phải là mơ sao?" | de, pt | chờ sửa |
| 1003 | ～もかまわず (N2) | `examples` | gợi ý lệch / gõ sai | Gợi ý ví dụ 1 "Dựa vào kinh nghiệm bản thân, tôi thấy không nên uống nước lã…" là của câu khác; ví dụ 2 追いあかけた; ví dụ 4 ありふりかまわず, thiếu gợi ý Việt | "Tôi đã nổi giận đơn phương, chẳng màng cảm xúc của đối phương, giờ đang hối hận."; 追いかけた; なりふりかまわず | de, pt | chờ sửa |
| 1004 | ～もしない (N2) | `examples` | gõ sai / khác | Ví dụ 4 できかどうか; ví dụ 3–5 thiếu gợi ý Việt | できるかどうか; bổ sung | de, pt | chờ sửa |
| 1006 | ～ものなら (N2) | `examples` | gợi ý lệch | Ví dụ 5 やれるものならやってみろ dịch "Nếu làm được tôi sẽ thử"; 飛び降りられる dịch "bay xuống" | "Làm được thì cứ thử làm đi xem"; "nhảy xuống" | de | chờ sửa |
| 1007 | ～ものの (N2) | `examples` | gõ sai / gợi ý lệch | Ví dụ 3 泣かなやめられない; ví dụ 1 まだ１回しか行っていない dịch "chưa đi được lần nào"; ví dụ 6 家具 dịch "Dụng cụ" | なかなかやめられない; "mới đi được một lần"; "Đồ nội thất" | de | chờ sửa |
| 1008 | ～やら～やら (N2) | `examples`, `notes` | gõ sai / khác | Ví dụ 1 始めて日本に来た; `notes` からの部屋は; `meaning_vi` "￣や…など" và "tari... tari" viết không dấu/La-tinh | 初めて; 彼の部屋は; ～や…など, ～たり～たり | de, pt | chờ sửa |
| 1010 | ～をはじめ (N2) | `examples` | gõ sai / khác | Ví dụ 2 "chẳng hạn tiêu biểu) như là tiếng anh" (thiếu ngoặc mở); ví dụ 3–4 thiếu gợi ý Việt | Sửa ngoặc; bổ sung | de | chờ sửa |
| 1012 | ～を問わず (N2) | `examples` | gõ sai / khác | Ví dụ 5 *「アルバイト募集。年齢。経験不問。 (thiếu 」, 年齢。 nên là 年齢・); ví dụ 4 thiếu gợi ý Việt | 「アルバイト募集。年齢・経験不問。」; bổ sung | de | chờ sửa |
| 1013 | ～を契機に (N2) | `examples` | gõ sai / khác | Ví dụ 4 タバコが値上がりなるので; ví dụ 3–4 thiếu gợi ý Việt | 値上がりするので; bổ sung | de | chờ sửa |
| 1015 | ～上で（sau khi） (N2) | `examples` | gõ sai | Ví dụ 1 家族と相談た上で; ví dụ 3 調べてみた上でなけらば | 相談した上で; なければ | de, pt | chờ sửa |
| 1017 | ～以上(は) (N2) | `examples`, `notes` | gõ sai / gợi ý lệch | Ví dụ 2 "đã hữa"; `notes` いい点を取りたい dịch "phải muốn lấy điểm cao" | "đã hứa"; "thì tôi muốn đạt điểm cao" | de | chờ sửa |
| 1018 | ～得ない (N2) | `examples` | gõ sai / khác | Ví dụ 4 よく数ぞえて; ví dụ 3–4 thiếu gợi ý Việt | 数えて; bổ sung | de | chờ sửa |
| 1019 | ～得る (N2) | `examples` | khác | Ví dụ 5 chỉ là cụm 「しかたがない」 (lời giải nghĩa của やむを得ない), không có gợi ý; ví dụ 1 thiếu dấu 。 | Bỏ hoặc gộp vào ví dụ 6 | de | chờ sửa |
| 1021 | ～末(に) (N2) | `examples` | gõ sai / khác | Ví dụ 3 受験すことにした; ví dụ 5 thiếu 」; ví dụ 6 thiếu gợi ý Việt | 受験することにした; thêm 」; bổ sung | de | chờ sửa |
| 1022 | ～次第 (N2) | `examples`, `explain`, `meaning` | gõ sai / gợi ý lệch / khác | Ví dụ 1 父は来年ですが (thiếu 定年), このようなわけでは; ví dụ 2 一応お耳には入れておこうと考え dịch "Vì nhất thời nghe và nhớ chuyện đó"; cả 6 ví dụ là mẫu ～次第です trong khi `explain`, `notes` giải thích Vます+次第 "ngay khi" | 父は来年定年ですが, このようなわけで; "Tôi nghĩ nên báo để anh/chị biết việc này nên viết thư."; tách hai nghĩa, bổ sung ví dụ "ngay khi" | de | chờ sửa |
| 1023 | ～次第で (N2) | `examples` | gợi ý lệch | Ví dụ 6 天候次第では dịch "Nếu tùy vào thời tiết không thuận lợi" | "Tùy thời tiết, có thể sẽ chuyển sự kiện vào trong nhà." | de | chờ sửa |
| 1024 | ～限り (N2) | `meaning`, `examples` | gõ sai / khác | `meaning` ①～であるば; chỉ có "①"; ví dụ 5 thiếu gợi ý Việt | ～であれば; bổ sung | de, pt | chờ sửa |
| 1025 | ～限りは (N2) | `explain`, `examples` | gõ sai / khác | "thõa mãn"; ví dụ 3–4 thiếu gợi ý Việt | "thỏa mãn"; bổ sung | de | chờ sửa |
| 1026 | ～(よ)うか～まいか (N2) | `examples`, `notes` | khác / gõ sai | Ví dụ 2 食べようか食べないか không dùng まいか; `notes` mở đầu bằng ghi chú nội bộ "Hút (Speed Master); nhận 接続 đầy đủ hơn…"; 迷った、結局 | 食べようか食べまいか; bỏ ghi chú nội bộ; 迷ったが、結局 | de | chờ sửa |
| 1028 | ～にて (N2) | `notes`, `comparison` | gõ sai | 電話カメールにて; "Địa điểm/pt tiện" | 電話かメールにて; "phương tiện" | de | chờ sửa |
| 1036 | (ただ)～のみ (N2) | `examples` | gõ sai / gợi ý lệch | Ví dụ 1 １県に1枚のみだ; ví dụ 3 指導者はまだ厳しいのみでは; ví dụ 4 面接も行こう大学; ví dụ 6 ただ努力あるのみ dịch "Chỉ có năng lực thì mới…"; không có `explain` | 1校; ただ厳しいのみ; 面接も行う大学; "chỉ có nỗ lực mà thôi" | de | chờ sửa |
| 1037 | ～(よ)うものなら (N2) | `examples` | gõ sai / khác | Ví dụ 1 音がしようものなら。すごい勢いで (dấu 。 thay cho 、); cả 2 ví dụ thiếu gợi ý Việt | しようものなら、; bổ sung | de | chờ sửa |
| 1038 | ～(よ)うではないか (N2) | `meaning`, `examples` | gõ sai / khác | `meaning` 他社への呼びかけ; cả 2 ví dụ thiếu gợi ý Việt | 他者; bổ sung | de, pt | chờ sửa |
| 1039 | ～。おまけに～。 (N2) | `examples` | khác | Gợi ý Việt của cả 5 ví dụ dính chữ, thiếu dấu cách quanh từ nối ("kém.Đã vậycòn", "đắt.Thêm vào đóphục vụ"…) | Thêm dấu cách | de | chờ sửa |
| 1040 | ～。しかも～。 (N2) | `notes` | gõ sai | "thông thông minh"; "không đền lần thứ hai" | "thông minh"; "không đến" | de | chờ sửa |
| 1041 | ～。したがって～。 (N2) | `notes` | gõ sai | 彼はまじめて誠実な人だ; gợi ý ví dụ 2 thiếu chủ ngữ "giáo sư" | まじめで; "Giáo sư có việc gấp không thể đến…" | de, pt | chờ sửa |
| 1042 | ～。そこで、～ (N2) | `examples` | khác | Gợi ý Việt dính chữ ("quá.Vì vậy nêntôi", "đến.Thế làtôi"…) | Thêm dấu cách | de | chờ sửa |
| 1043 | ～。それなのに～。 (N2) | `examples` | khác | Gợi ý Việt dính chữ ("chăm chỉ.Ấy vậy màlại"…) | Thêm dấu cách | de, pt | chờ sửa |
| 1046 | ～。だが、～ (N2) | `comparison` | ruby | `<ruby>急<rt>いそい</rt></ruby>いだ` | いそ | de, pt | chờ sửa |
| 1048 | ～。なお～。 (N2) | `notes` | khác | Cuối `notes` hỏng cấu trúc: dòng "2" đứng lẻ, câu Nhật 「今日はこれで終わります。 なお 次回の日時は・・・」 và bản dịch nằm chung một dòng, thiếu ví dụ 1 | Viết lại khối ví dụ | de | chờ sửa |
| 1049 | ～。もっとも～。 (N2) | `examples`, `notes` | gõ sai / khác | Gợi ý Việt dính chữ ("anh ấy.Tuy nhiên"…); `notes` もっとも病気の場合の別です | Thêm dấu cách; 病気の場合は別です | de | chờ sửa |
| 1050 | ～。要するに、～ (N2) | `examples` | khác | Gợi ý Việt dính chữ ("đủ thứ.Tóm lạithì", "nhưngtóm lạilà"…) | Thêm dấu cách | de | chờ sửa |
| 1051 | ～あまり(に) (N2) | `examples`, `meaning` | gõ sai / khác | Ví dụ 3 体系を気にするあまり; `meaning` "Vì bất thường, kết quả quá" khó hiểu; không có `explain` | 体型; "Vì quá ~ nên (kết quả xấu)" | de, pt | chờ sửa |
| 1053 | ～あるだけましだ (N2) | `examples` | khác | Gợi ý ví dụ 1 dùng "Mầy… Tao…" (giọng suồng sã) | "Cậu… Tớ…" | de | chờ sửa |
| 1054 | ～かと思うと (N2) | `examples` | khác | Cả 2 ví dụ thiếu gợi ý Việt; không có `explain` | Bổ sung | de | chờ sửa |
| 1056 | ～か～まいか (N2) | `examples`, `comparison` | ruby / khác | Ví dụ 2 就職するか進学するまいか không đúng mẫu (hai động từ khác nhau, vế đầu không ở thể ý chí); ruby `<ruby>降<rt>くだ</rt></ruby>ろうが` | Thay ví dụ (vd 進学しようかするまいか); ふ | de, pt | chờ sửa |
| 1058 | ～が～られる (N2) | `comparison` | ruby | `<ruby>笑<rt>わらわ</rt></ruby>われた` | わら | de, pt | chờ sửa |
| 1059 | ～きれる (N2) | `examples` | khác | Ví dụ 2: câu Nhật chỉ có lời B, lời A 「あのー、『ABC』の５月号はありますか。」 nằm nhầm ở ô gợi ý Việt; ví dụ 1 thiếu gợi ý; không có `explain` | Ghép A+B vào câu Nhật, viết gợi ý Việt | de | chờ sửa |
| 1061 | ～ことだし (N2) | `examples`, `notes` | khác | Cả 2 ví dụ thiếu gợi ý Việt; `notes` (tiếng Nhật) nhắc ví dụ ①②③ không khớp 2 ví dụ hiện có | Bổ sung; bỏ tham chiếu số ví dụ | de | chờ sửa |
| 1062 | ～こととなると (N2) | `examples` | gõ sai / khác | Ví dụ 2 毎日のこことなると; cả 2 ví dụ thiếu gợi ý Việt; không có `explain` | 毎日のこととなると; bổ sung | de | chờ sửa |
| 1066 | ～ずにはすまない (N2) | `comparison` | ruby | `<ruby>笑<rt>わらわ</rt></ruby>わずには` | わら | de, pt | chờ sửa |
| 1068 | ～たいものだ (N2) | `examples` | khác | Cả 2 ví dụ thiếu gợi ý Việt | Bổ sung | de | chờ sửa |
| 1071 | ～つつも (N2) | `examples` | gõ sai / khác | Ví dụ 2 彼女のとこが気になって; cả 3 ví dụ thiếu gợi ý Việt | 彼女のこと; bổ sung | de | chờ sửa |
| 1072 | ～ていられない (N2) | `notes` | khác | Chép gộp 4 khối, kèm bảng so sánh và mục lỗi của mẫu ～てばかりはいられない dạng văn bản; ba dòng `meaning_vi` liên tiếp | Tách phần ～てばかりはいられない, gọn lại | de | chờ sửa |
| 1074 | ～てはかなわない (N2) | `examples` | khác | Cả 2 ví dụ thiếu gợi ý Việt; không có `explain` | Bổ sung | de | chờ sửa |
| 1077 | ～というのも (N2) | `notes`, `examples` | gõ sai / khác | `notes` "• よく dùng trong bài luận" (lẫn chữ Nhật); gợi ý Việt dính chữ ("nhiều.Sở dĩ vậy là vìtính cách"…) | "Thường dùng…"; thêm dấu cách | de, pt | chờ sửa |
| 1078 | ～となったら (N2) | `mistakes` | khác | Mục lỗi 3 "Mệnh lệnh trực diện: 避ける với となったら…" lẫn chữ Nhật 避ける trong câu Việt | "tránh dùng với となったら…" | de | chờ sửa |
| 1080 | ～とみられる (N2) | `mistakes`, `comparison` | ruby / khác | Mục lỗi "Nhầm với ～とされる:" bị tách thành hai phần tử; ví dụ ngắn `<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>お</rt></ruby>りそう みたいだ` (ruby sai, câu ghép lạ) | Gộp lại một mục; 雨が降るみたいだ, ふ | de, pt | chờ sửa |
| 1081 | ～ないことには～ない (N2) | `examples` | khác | Ví dụ 2 事前連絡がないことには、キャンセル料は発生します không đúng mẫu (vế sau khẳng định) | Thay ví dụ có vế sau phủ định | de | chờ sửa |
| 1082 | ～ない限り (N2) | `examples` | khác | Cả 2 ví dụ thiếu gợi ý Việt; không có `explain` | Bổ sung | de | chờ sửa |
| 1083 | ～なくはない (N2) | `examples` | gợi ý lệch | Ví dụ 5 日本酒は嫌いでなくはないが dịch "không phải là ghét" (câu Nhật nghĩa là "cũng có phần không thích"); câu khó hiểu | Thay ví dụ rõ nghĩa hơn | de | chờ sửa |
| 1084 | ～なくもない (N2) | `examples`, `comparison` | khác | Ví dụ 4 静かな所が嫌いではなくもないが phủ định chồng, khó hiểu; ví dụ ngắn của ～なくはない ghi 高くはない | Thay ví dụ; 高くなくはない | de | chờ sửa |
| 1085 | ～なんて/とは (N2) | `examples` | gõ sai / gợi ý lệch | Ví dụ 2 セミットの警備; ví dụ 3 （うらやまし）; ví dụ 4 あんなに仲が良かったのに dịch "Một chuyện tình đẹp thế mà" | サミット; うらやましい; "Vốn thân thiết thế mà" | de, pt | chờ sửa |
| 1086 | ～にしたところで (N2) | `examples` | khác | Cả 2 ví dụ thiếu gợi ý Việt; không có `explain` | Bổ sung | de | chờ sửa |
| 1087 | ～にしたら/すれば/しても (N2) | `meaning` | gợi ý lệch | "Đối lập, đứng trên lập trường" (chữ "Đối lập" không khớp nghĩa) | "Đứng trên lập trường của ~ mà nói" | de | chờ sửa |
| 1090 | ～ぬき(で/に等)/(を)ぬきにして (N2) | `examples` | khác | Ví dụ 4 手抜き工事 là từ ghép khác nghĩa, không minh hoạ mẫu; ví dụ 3 thiếu dấu 。 | Thay ví dụ | de | chờ sửa |
| 1093 | ～の下で (N2) | `examples`, `explain`, `notes` | gõ sai / khác | Gợi ý Việt dính chữ ("nghiên cứudưới sự hướng dẫncủa"…); `explain` ghi "の下で (のもとで)" và "のもとで (のもとで)"; `notes` 育ってかで, すっくすくと, "bấu trời"; ví dụ ①② không có bản dịch; dòng "5. ～を表面上の理由にして…" là định nghĩa nằm lẫn trong ví dụ; ruby `～の<ruby>下<rt>した</rt></ruby>で` (もと) | Thêm dấu cách; 育ったかで, すくすくと, "bầu trời"; bổ sung bản dịch; tách dòng định nghĩa; もと | de, pt | chờ sửa |
| 1094 | ～の/ものやら (N2) | `examples` | gõ sai / gợi ý lệch | Ví dụ 2 女なやら; ví dụ 3 本人に言っていいものやら悪いものやら dịch "Không biết khách có thấy phiền hay không"; ví dụ 4 帰ってこない・どこで; ví dụ 6 thiếu gợi ý | 女なのやら; "Chẳng biết nên nói với người đó hay không."; 帰ってこない。どこで | de, pt | chờ sửa |
| 1095 | ～は…にかかっている (N2) | `examples` | gõ sai | Gợi ý ví dụ 1 "hụ thuộc"; câu Nhật thiếu 。 | "phụ thuộc" | de | chờ sửa |
| 1097 | ～はまだしも (N2) | `comparison` | ruby | Ruby hỏng `<ruby>言<rt>いいすぎ</rt></ruby>い<ruby>過<rt></rt></ruby>ぎだ` | `<ruby>言<rt>い</rt></ruby>い<ruby>過<rt>す</rt></ruby>ぎだ` | de, pt | chờ sửa |
| 1101 | ～ぶり (N2) | `comparison` | ruby | `<ruby>話<rt>はなし</rt></ruby>しよう` | はな | de, pt | chờ sửa |
| 1103 | ～も…ば/なら～も (N2) | `examples` | gõ sai | Ví dụ 4 徒然成績も悪かった; ví dụ 6 親も親なら子どもだ (thiếu vế) | 当然; 親も親なら子どもも子どもだ | de, pt | chờ sửa |
| 1111 | ～るときりがない (N2) | `comparison` | ruby | `<ruby>言<rt>いい</rt></ruby>い<ruby>出<rt>だ</rt></ruby>したら` | い | de, pt | chờ sửa |
| 1115 | ～を～として (N2) | `notes` | gõ sai | 大学降格を目標として; 大学で遺文交流をとしてサークルを作った; gợi ý ví dụ cuối không viết hoa | 大学合格; 異文化交流を目的として | de | chờ sửa |
| 1116 | ～んだった (N2) | `examples` | khác | Cả 2 ví dụ thiếu gợi ý Việt; không có `explain` | Bổ sung | de | chờ sửa |
| 1117 | ～上 (N2) | `examples` | gõ sai | Ví dụ 3 実健は理論上は…なぜだろ; ví dụ 1 宗教上理由 | 実験, なぜだろう; 宗教上の理由 | de, pt | chờ sửa |
| 1118 | ～上（で）（về mặt・phạm vi） (N2) | `examples` | gõ sai / gợi ý lệch | Ví dụ 2 近そうにまえたが; ví dụ 4 日本と変わらない dịch "vẫn là người Nhật" (thiếu 人) | 見えたが; 日本人と変わらない | de | chờ sửa |
| 1122 | ～向け・向き (N2) | `examples`, `explain` | gõ sai | "xuất khảu"; "đối đượng" | "xuất khẩu"; "đối tượng" | de | chờ sửa |
| 1131 | ～ものだ（bản chất・cảm thán） (N2) | `examples` | gợi ý lệch | Ví dụ 1 薬は苦いものだ dịch "Thuốc đắng quá đi thôi"; ví dụ 2 娘 dịch "em tôi" | "Thuốc thì vốn đắng."; "con gái tôi" | de | chờ sửa |
| 1134 | ～一方だ (N2) | `examples` | gõ sai | Gợi ý ví dụ 1 "CO2trong" dính chữ | Thêm dấu cách | de | chờ sửa |
| 1135 | ～限りでは (N2) | `examples` | khác | Cả 2 ví dụ thiếu gợi ý Việt; ví dụ 2 (この限りではありません) là thành ngữ khác nghĩa với mẫu | Bổ sung; thay ví dụ 2 | de | chờ sửa |
| 1136 | ～ことに（cảm xúc） (N2) | `examples` | gõ sai | "tái hon" | "tái hôn" | de | chờ sửa |
| 1137 | ～(に)は…が/けど～ことは…が/けど (N2) | `examples` | gõ sai / gợi ý lệch | Ví dụ 2 わかることはわけるけど; ví dụ 4 同窓会、行った？…風邪気味だったんで dịch "Đã tổ chức họp hội cựu sinh viên à… như gió thoảng vậy" | わかるけど; "Cậu đi họp lớp chưa? – Đi thì có đi, nhưng hơi cảm nên khoảng 30 phút là về." | de, pt | chờ sửa |
| 1138 | ～(よ)うにも～ない (N2) | `examples`, `meaning` | gõ sai | Ví dụ 5 泣かんか仕事が見つからない; ví dụ 6 交通が出たのだが、すぐに病気へ行こうにも; `meaning` "Muốn làm tí cũng không được" | なかなか; 高熱が出たのだが、すぐに病院へ; "Dù muốn làm cũng không được" | de | chờ sửa |
| 1139 | ～(よ)うとする/している (N2) | `examples` | gợi ý lệch | Ví dụ 2–4 dịch như đã/đang xảy ra ("đang được phóng", "Năm mới vừa sang", "sẽ được dập tắt") thay vì "sắp…" | "sắp được phóng"; "Năm mới sắp sang"; "sắp tắt" | de | chờ sửa |
| 1159 | ～お願う (N2) | `meaning` | khác | Tên mẫu và `meaning` ghi "お願う" (không tồn tại; ví dụ là お/ご～願います) | "お/ご～願う" | de | chờ sửa |
| 1170 | ～てはでは (N2) | `meaning` | khác | Tên mẫu ghi "～てはでは" (dính hai dạng); nội dung chỉ nói ～ては | "～ては／では" | de, pt | chờ sửa |
| 1178 | ～ちっともない (N2) | `meaning` | khác | Tên mẫu "～ちっともない" thiếu dấu ～ giữa (ちっとも～ない); tương tự #1182 "～ろくにない", #1155 "～ものかもんか", #1156 "～中を中では", #1186 "～よほどよっぽど" | Sửa tên mẫu | de | chờ sửa |
| 1187 | ～Vるばかりだ (N2) | `examples`, `notes` | khác | Ví dụ 4 ただ忍耐あるのみだ không dùng mẫu ～ばかりだ; `notes` ghi "(2)(3) chỉ" nhưng không rõ ứng với ví dụ nào | Thay ví dụ; viết lại `notes` | de, pt | chờ sửa |
| 1535 | にしても…にしても (N2) | `meaning` | khác | "Diễn đạt vô can" khó hiểu | "Dù là ~ hay ~ (thì cũng…)" | de, pt | chờ sửa |
| 1538 | もまた (N2) | `meaning` | khác | "Diễn đạt việc thêm vào" chung chung | "~ cũng (vậy), cũng lại ~" | de, pt | chờ sửa |
| 1588 | とちゅう（は） (N2) | `meaning` | khác | Không có trường `meaning` (tương tự #1590, #1593) | Bổ sung ("Trên đường ~, suốt lúc ~") | de | chờ sửa |
| 1592 | をつうじて (N2) | `examples` | khác | Ví dụ 3 bị cắt cụt: …死者は少なくとも１００人をこえた (không dấu 。; gợi ý Việt kết bằng "…") | Viết đủ câu | de | chờ sửa |
| 1204 | ～のは～ぐらいのものだ (N1) | `comparison` | khác | Ví dụ ngắn ghi 彼くらいのものだ trong khi tiêu đề ghi ぐらい (không nhất quán) | Thống nhất một dạng | de | chờ sửa |
| 1205 | ～るともなく (N1) | `notes` | ruby / khác | Chép gộp bảng so sánh và mục lỗi của ～ともなしに dạng văn bản; trong bảng 聞（きき）き ながら (đọc sai, き) | Tách phần ～ともなしに; 聞（き）きながら | de | chờ sửa |
| 1210 | ～かたがた (N1) | `comparison` | ruby | `<ruby>伺<rt>うかがう</rt></ruby>う` | うかが | de | chờ sửa |
| 1212 | ～こそあれ (N1) | `notes` | khác | "あれ là liên động từ của ある (dạng liên dụng cổ điển)" sai thuật ngữ (あれ là 已然形 của あり); tương tự #1213 "すれ (dạng liên dụng của する…)" (là 已然形) | "dạng izenkei (已然形)" | de, pt | chờ sửa |
| 1216 | ～てやまない (N1) | `comparison` | khác | Ví dụ ngắn hàng "ずっとVている" ghi 考えている, thiếu ずっと | ずっと考えている | de | chờ sửa |
| 1217 | ～でなくてなんだろう (N1) | `examples` | ruby | `これが<ruby>愛<rt>め</rt></ruby>でなくて` | `<ruby>愛<rt>あい</rt></ruby>` | de, pt | chờ sửa |
| 1218 | ～ではあるまいし (N1) | `examples`, `explain` | ruby | `<ruby>君<rt>くん</rt></ruby>のせい`; `explain` gõ sai "quỳ chuẩn" | `<ruby>君<rt>きみ</rt></ruby>`; "quy chuẩn" | de | chờ sửa |
| 1220 | ～とあれば (N1) | `notes` | gõ sai | "slogun" | "slogan" | de, pt | chờ sửa |
| 1221 | ～というもの (N1) | `meaning`, `examples` | gợi ý lệch | `meaning` "Thật sự là… \| Đúng là…, quả thật…" không khớp nghĩa chính "suốt (khoảng thời gian)…"; ví dụ 4 これというものの特技; ruby `休暇の<ruby>間<rt>ま</rt></ruby>`, tiêu đề ～<ruby>間<rt>かん</rt></ruby> | `meaning` "Suốt (khoảng thời gian)…"; これといった特技; `<ruby>間<rt>あいだ</rt></ruby>` | de, pt | chờ sửa |
| 1226 | ～ところを (N1) | `examples` | gõ sai | お話し中ところを (thiếu の) | お話し中のところを | de, pt | chờ sửa |
| 1229 | ～とは限らない (N1) | `examples`, `notes`, `comparison` | khác | Ví dụ 6 この駅は古くから歌われているが、日本人だみんな知っている; `notes` lẫn dữ liệu thô "meaning_vi: … ⏐ explain: … ⏐ examples: …"; ruby `<ruby>言<rt>いい</rt></ruby>い<ruby>切<rt>き</rt></ruby>れない` | この歌は…、日本人がみんな…; tách dữ liệu thô khỏi `notes`; `<ruby>言<rt>い</rt></ruby>い<ruby>切<rt>き</rt></ruby>れない` | de, pt | chờ sửa |
| 1232 | ～ならでは (N1) | `explain` | gõ sai | "Trành dùng với nội dung tiêu cực" | "Tránh dùng" | de | chờ sửa |
| 1235 | ～にしろ～にしろ (N1) | `comparison` | khác | Ví dụ ngắn hàng ～であれ～であれ ghi 貧富であれ (chỉ một vế であれ) | vd 貧しい人であれ富める人であれ | de | chờ sửa |
| 1238 | ～にひきかえ (N1) | `examples` | gõ sai | 落ち着いた前半のにひきかえ; 好調だった昨年のにひきかえ (thừa の sau danh từ) | 前半にひきかえ; 昨年にひきかえ | de | chờ sửa |
| 1241 | ～に先立ち (N1) | `notes` | khác | `notes` lẫn dữ liệu thô "meaning_vi: … examples: … explain: …" (3 khối ví dụ kèm bản dịch Việt) | Tách dữ liệu thô khỏi `notes` | de, pt | chờ sửa |
| 1242 | ～に先駆けて (N1) | `explain` | khác | "Đặt trước danh từ chỉ mốc thời gian/sự kiện lớn" | "Đặt sau danh từ…" | de, pt | chờ sửa |
| 1251 | ～もしないで (N1) | `comparison` | ruby | `<ruby>聞<rt>きき</rt></ruby>きもしない` (cũng ở #1253 `comparison`) | `<ruby>聞<rt>き</rt></ruby>きもしない` | de, pt | chờ sửa |
| 1252 | ～ものとして (N1) | `meaning` | gợi ý lệch | "Với tư cách là…" (đó là nghĩa của N として) | "Coi như…, được xem là…" | de, pt | chờ sửa |
| 1258 | ～を禁じ得ない (N1) | `comparison` | ruby | `<ruby>笑<rt>わらわ</rt></ruby>わないではいられない` | `<ruby>笑<rt>わら</rt></ruby>わないではいられない` | de | chờ sửa |
| 1260 | ～を踏まえて (N1) | `notes` | khác | `notes` lẫn dữ liệu thô "meaning_vi: … examples: …"; bản Việt ví dụ 3 (会議では前回までの議論を踏まえて…) chép lại nghĩa của ví dụ 2 | Tách dữ liệu thô; ví dụ 3: "Trong cuộc họp, dựa trên các thảo luận đến lần trước, đã bàn sâu thêm nội dung" | de, pt | chờ sửa |
| 1262 | ～んがために (N1) | `examples` | gõ sai | 会社は生き残りんがために | 生き残らんがために | de, pt | chờ sửa |
| 1265 | ～折に (N1) | `notes`, `comparison`, `mistakes` | khác | `notes` lẫn dữ liệu thô "meaning_vi: … ⏐ explain: … ⏐ examples: …"; ruby `～<ruby>際<rt>ぎわ</rt></ruby>(に)`; `mistakes` "～折には と tự nhiên hơn" (thừa と) | Tách dữ liệu thô; `<ruby>際<rt>さい</rt></ruby>`; bỏ と | de | chờ sửa |
| 1271 | ～かいもなく (N1) | `notes` | khác | `notes` lẫn dữ liệu thô "meaning_vi: … ⏐ explain: …" kèm 2 ví dụ đánh số | Tách dữ liệu thô khỏi `notes` | de | chờ sửa |
| 1272 | ～かたわら～ (N1) | `comparison` | ruby | `<ruby>聞<rt>きき</rt></ruby>きながら` | `<ruby>聞<rt>き</rt></ruby>きながら` | de | chờ sửa |
| 1276 | ～かれ～かれ (N1) | `explain`, `comparison` | khác | `explain` lặp nội dung (dòng "Cách dùng :", "Sắc thái :", "Lưu ý :" gộp rồi lặp lại từng ý); ruby `<ruby>幸<rt>さ</rt></ruby>いです` | Bỏ phần lặp; `<ruby>幸<rt>さいわ</rt></ruby>いです` | de, pt | chờ sửa |
| 1279 | ～が～なら、～も～だ (N1) | `notes` | khác | Cuối `notes` còn ghi chú nội bộ "\| Phân biệt: … — hai point riêng, giữ cả hai" | Bỏ ghi chú nội bộ | de, pt | chờ sửa |
| 1280 | ～こそ～が (N1) | `comparison` | gõ sai | Ví dụ ngắn 必要だものの、準備不足だ。 | 必要なものの／必要であるものの | de, pt | chờ sửa |
| 1283 | ～ずとも (N1) | `comparison` | gõ sai | Ví dụ ngắn hàng ～ずともよい: 提出は今日でなくてはならないわけではずともよい (vô nghĩa) | vd 今日提出せずともよい | de, pt | chờ sửa |
| 1287 | ～たらきりがない (N1) | `comparison` | ruby | `<ruby>言<rt>いいだし</rt></ruby>い<ruby>出<rt></rt></ruby>したらきりがない。` | `<ruby>言<rt>い</rt></ruby>い<ruby>出<rt>だ</rt></ruby>したらきりがない。` | de, pt | chờ sửa |
| 1291 | ～たる～ (N1) | `notes`, `comparison` | khác | Cuối `notes` còn ghi chú nội bộ "Không gộp với ～足る～ (): khác point … đồng âm sau kana hóa"; ruby `<ruby>医師<rt>いし</rt></ruby>たる<ruby>者<rt>しゃ</rt></ruby>` | Bỏ ghi chú nội bộ; `<ruby>者<rt>もの</rt></ruby>` | de, pt | chờ sửa |
| 1293 | ～だの～だの (N1) | `notes`, `mistakes` | khác | `notes` lẫn dữ liệu thô "meaning_vi: … examples: …" (4 ví dụ kèm bản Việt); `mistakes` mục 5 tự mâu thuẫn: "Sai: 不便だの危険だの（ok vì đã là na-adj + だ? …）; với na-adj phải là 不便だだの危険だだの" | Tách dữ liệu thô; mục 5: 不便だの危険だの là đúng (だ đã nằm trong だの), bỏ 不便だだの | de, pt | chờ sửa |
| 1296 | ～てかなわない (N1) | `notes` | khác | `notes` lẫn dữ liệu thô "meaning_vi: … ⏐ explain: … ⏐ examples: …" | Tách dữ liệu thô khỏi `notes` | de, pt | chờ sửa |
| 1297 | ～ては (N1) | `meaning`, `examples`, `explain` | gợi ý lệch | `meaning` "Cứ… thì… (kết xấu) \| Hễ… là…" và ví dụ 1–5 theo nghĩa luân phiên (Vては〜V), còn `explain`/`notes`/`mistakes` chỉ giảng nghĩa "mỗi lần A thì B" và coi luân phiên là mẫu khác | Thống nhất: tách 2 nghĩa hoặc đổi ví dụ cho khớp phần giảng | de, pt | chờ sửa |
| 1299 | ～であれ～であれ (N1) | `examples`, `mistakes` | khác | Ví dụ 1 学歴が高いであれ低いであれ và `mistakes` mục 2 "正しいであれ間違いであれ (đúng)" gắn であれ sau tính từ, trái với `explain` ("không trực tiếp gắn sau tính từ/động từ") | vd 高学歴であれ低学歴であれ; 正解であれ間違いであれ | de, pt | chờ sửa |
| 1305 | ～といったらありはしない (N1) | `notes` | khác | "“ありはしない” = “ありはしない(=全くないわけではない, nhấn mạnh phủ định)”" (giải thích vòng, 全くないわけではない sai nghĩa) | "ありはしない = ない được nhấn mạnh (あり＋は＋しない)" | de, pt | chờ sửa |
| 1311 | ～ともあろう～ (N1) | `comparison` | ruby | `<ruby>凡<rt>凡</rt></ruby>ミス`; `～たる<ruby>者<rt>しゃ</rt></ruby>（もの）` | `<ruby>凡<rt>ぼん</rt></ruby>ミス`; `<ruby>者<rt>もの</rt></ruby>` | de, pt | chờ sửa |
| 1313 | ～ともなれば (N1) | `comparison` | ruby | Cột mẫu `～<ruby>上<rt>じょう</rt></ruby>で` (ví dụ cùng hàng ghi `<ruby>上<rt>うえ</rt></ruby>で`) | `～<ruby>上<rt>うえ</rt></ruby>で` | de | chờ sửa |
| 1315 | ～と相まって (N1) | `comparison` | ruby | `（<ruby>仮名<rt>かめい</rt></ruby>）`; `<ruby>円<rt>えん</rt></ruby><ruby>安<rt>やす</rt></ruby>とあいまって` | `<ruby>仮名<rt>かな</rt></ruby>`; `<ruby>円安<rt>えんやす</rt></ruby>` | de | chờ sửa |
| 1316 | ～と言わんばかりに (N1) | `notes` | khác | `notes` lẫn dữ liệu thô "explain: … examples: … comparison: … common_mistakes: …" (trùng nội dung các trường khác) | Tách dữ liệu thô khỏi `notes` | de | chờ sửa |
| 1318 | ～ないではおかない (N1) | `comparison` | ruby | `<ruby>笑<rt>わらわ</rt></ruby>わずにはいられない` (cũng ở #1319 `comparison`) | `<ruby>笑<rt>わら</rt></ruby>わずにはいられない` | de, pt | chờ sửa |
| 1320 | ～ないまでも (N1) | `comparison` | ruby | `<ruby>痛<rt>いたい</rt></ruby>いほどではないが` | `<ruby>痛<rt>いた</rt></ruby>いほどではないが` | de, pt | chờ sửa |
| 1321 | ～ないものだろうか (N1) | `examples` | gợi ý lệch | 事故をこれ以上増やさないものだろうか。 — "Liệu không thể giảm thêm tai nạn sao?" | "Liệu không thể để tai nạn đừng tăng thêm nữa sao?" | de | chờ sửa |
| 1322 | ～ながらに (N1) | `comparison` | ruby | `<ruby>聴<rt>きき</rt></ruby>きながら`; ghi chú nội bộ "(xem 214)" | `<ruby>聴<rt>き</rt></ruby>きながら`; bỏ "(xem 214)" hoặc ghi tên mẫu | de, pt | chờ sửa |
| 1324 | ～なくしては～ない (N1) | `comparison` | ruby | `お<ruby>客<rt>きゃくさま</rt></ruby><ruby>様<rt></rt></ruby>あっての` | `お<ruby>客様<rt>きゃくさま</rt></ruby>あっての` | de, pt | chờ sửa |
| 1325 | ～なしでは～ない (N1) | `comparison` | ruby | `<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>たた</rt></ruby>たない` | `<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>たない` | de, pt | chờ sửa |
| 1327 | ～ならいざ知らず (N1) | `comparison` | khác | Ví dụ ngắn hàng ～ならまだしも ghi 遅刻はまだしも (không có なら) | 遅刻ならまだしも、無断欠勤はだめだ | de, pt | chờ sửa |
| 1330 | ～にあっては (N1) | `comparison` | ruby | `<ruby>緊急<rt>きんきゅう</rt></ruby><ruby>時<rt>とき</rt></ruby>では`; `～<ruby>上<rt>じょう</rt></ruby>（じょう）` nhưng ví dụ `<ruby>制度<rt>せいど</rt></ruby><ruby>上<rt>うえ</rt></ruby>` | `<ruby>時<rt>じ</rt></ruby>`; `<ruby>制度上<rt>せいどじょう</rt></ruby>` | de | chờ sửa |
| 1336 | ～に即した (N1) | `meaning` | khác | Mẫu không có trường `meaning` (thiếu nghĩa ngắn) | vd "Phù hợp với…, sát với…" | de | chờ sửa |
| 1337 | ～に堪えない (N1) | `examples`, `comparison` | gõ sai | Ví dụ 1 事故の映像は惨惨しくて; ruby `<ruby>堪<rt>こた</rt></ruby>える` (cũng ở #1338, #1340 `comparison`) | 惨たらしくて／痛々しくて; `<ruby>堪<rt>た</rt></ruby>える` | de, pt | chờ sửa |
| 1339 | ～も同然だ (N1) | `notes`, `mistakes` | khác | `notes` lẫn dữ liệu thô "explain: … ⏐ examples: …"; `mistakes` mục 1 rối: "× 寒いも同然だ → nên chuyển thành 名詞化: × 寒さも同然だ → dùng mẫu khác" | Tách dữ liệu thô; viết lại mục 1 cho rõ (không dùng với tính từ; dùng 寒いようなものだ) | de | chờ sửa |
| 1341 | ～に至った (N1) | `comparison` | ruby | `～<ruby>末<rt>まつ</rt></ruby>（すえ）に` | `～<ruby>末<rt>すえ</rt></ruby>に` | de | chờ sửa |
| 1358 | ～ば～ものを (N1) | `examples` | gõ sai | 一言相談してくれば助けられたものを。 | 一言相談してくれれば助けられたものを。 | de | chờ sửa |
| 1359 | ～びた (N1) | `comparison` | ruby | `<ruby>言<rt>いいかた</rt></ruby>い<ruby>方<rt></rt></ruby>` | `<ruby>言<rt>い</rt></ruby>い<ruby>方<rt>かた</rt></ruby>` | de, pt | chờ sửa |
| 1366 | ～も相まって (N1) | `comparison` | gõ sai | Ví dụ ngắn hàng ～もあって: 天気がいいもあって人が多い (thiếu の/こと) | 天気がいいこともあって人が多い | de | chờ sửa |
| 1370 | ～ようと～るまいと (N1) | `notes` | khác | "Tránh 来まい/すまい trong hiện đại chuẩn" mâu thuẫn với #1368 `notes` ("するまい/すまい đều đúng; すまい tự nhiên hơn") và ví dụ #1369 成功しようがすまいが | Thống nhất giữa #1368–#1370 | de, pt | chờ sửa |
| 1371 | ～るがままに (N1) | `examples` | gõ sai | 流れに任せ、成り行きのがままに生きてみる。 | 成り行きのままに／成り行きに任せるがままに | de | chờ sửa |
| 1372 | ～るが早いか (N1) | `comparison` | gõ sai | Hàng ～とすぐ: `<ruby>家<rt>いえ</rt></ruby>に<ruby>着<rt>ちゃく</rt></ruby>いたとすぐ` (ruby sai, Vた＋とすぐ sai) | `<ruby>家<rt>いえ</rt></ruby>に<ruby>着<rt>つ</rt></ruby>くとすぐ` | de | chờ sửa |
| 1373 | ～るなり (N1) | `meaning` | khác | Mẫu không có trường `meaning` (thiếu nghĩa ngắn) | vd "Vừa… thì ngay…" | de, pt | chờ sửa |
| 1377 | ～るにも～れない (N1) | `mistakes` | khác | Tham chiếu nội bộ "→ mẫu 167" | Ghi tên mẫu (～るにも～れない) thay số | de | chờ sửa |
| 1379 | ～るべからず (N1) | `examples`, `notes` | gõ sai | Ví dụ 2–5: ここでの喫煙するべからず／境内での撮影するべからず／ごみの不法投棄するべからず／火気使用するべからず (danh từ + するべからず thiếu trợ từ); `notes` "撮影禁止／撮影斯くの如し 等" vô nghĩa | ここで喫煙するべからず／境内で撮影するべからず／ごみを不法投棄するべからず／火気を使用するべからず; bỏ "撮影斯くの如し" | de, pt | chờ sửa |
| 1381 | ～るべくもない (N1) | `comparison` | ruby | `<ruby>言<rt>いいかた</rt></ruby>い<ruby>方<rt></rt></ruby>` | `<ruby>言<rt>い</rt></ruby>い<ruby>方<rt>かた</rt></ruby>` | de, pt | chờ sửa |
| 1384 | ～る始末だ (N1) | `notes`, `comparison` | khác | Cuối `notes` lẫn "meaning_vi: Rốt cuộc đến nông nỗi…"; ruby `～<ruby>末<rt>まつ</rt></ruby>(すえ)に` | Tách dữ liệu thô; `<ruby>末<rt>すえ</rt></ruby>に` | de, pt | chờ sửa |
| 1385 | ～る嫌いがある (N1) | `comparison`, `mistakes` | ruby | `<ruby>言<rt>いいわけ</rt></ruby>い<ruby>訳<rt></rt></ruby>`; `mistakes` "Dùng với i-tính từ … 真面目な嫌いがある" (真面目 là tính từ な) | `<ruby>言<rt>い</rt></ruby>い<ruby>訳<rt>わけ</rt></ruby>`; sửa "tính từ" | de, pt | chờ sửa |
| 1386 | ～をおいて他にない (N1) | `comparison` | ruby | `<ruby>他<rt>た</rt></ruby>にない` | `<ruby>他<rt>ほか</rt></ruby>にない` | de | chờ sửa |
| 1387 | ～をもって (N1) | `mistakes` | gõ sai | "thay bằng ～で/～で" (lặp) | "～で/～から" (tuỳ nghĩa) | de, pt | chờ sửa |
| 1388 | ～を前提にして (N1) | `comparison` | ruby | `<ruby>少<rt>しょう</rt></ruby><ruby>人数<rt>にんずう</rt></ruby>` | `<ruby>少人数<rt>しょうにんずう</rt></ruby>` | de | chờ sửa |
| 1390 | ～を機にして (N1) | `comparison` | ruby | `<ruby>切替<rt>きりかえ</rt></ruby>。`; hàng ～を機会に ví dụ ghi 来日の機会に (không phải ～を機会に) | 切り替え; 来日を機会に観光 | de | chờ sửa |
| 1395 | ～極まる (N1) | `examples` | khác | Ví dụ 4 彼の発想は愚劣極まりない dùng 極まりない (mẫu #1394) thay vì 極まる | 愚劣極まる発想だ | de, pt | chờ sửa |
| 1397 | ～に足る～ (N1) | `notes` | khác | Cuối `notes` còn ghi chú nội bộ "Không gộp với ～たる～ (): khác point." | Bỏ ghi chú nội bộ | de, pt | chờ sửa |
| 1502 | ～ようとまいとようがまいが (N1) | `connection` | khác | Còn chữ Anh và ký hiệu thô: "How to use まい るV -> Vるまい / V ます まい うV -> Vるまい …" | Viết lại bằng tiếng Việt, tách thành ghi chú | de, pt | chờ sửa |
| 1526 | とは (N1) | `explain` | khác | Thiếu ngoặc mở: "述べたり、…とは…のことだ／意味だ」「…とは…" | "「…とは…のことだ／意味だ」「…とは…" | de, pt | chờ sửa |
| 1529 | にあっても (N1) | `examples` | gõ sai | 彼は苦境にあっても、まげずに頑張っている。 | めげずに頑張っている | de | chờ sửa |
| 1569 | かつて (N1) | `examples` | khác | Ví dụ 3 bị cắt cụt: …かつてないほどの規模のものになる恐れが | …恐れがある。 | de, pt | chờ sửa |
| 1570 | しゅんかん (N1) | `explain` | gõ sai | 若しことばでは「Ｖ－たとたん」が用いられる | 話しことばでは | de | chờ sửa |
| 1573 | とあいまって (N1) | `examples` | gõ sai | その映画は、安楽器の音色が美しい映像と和まって | 弦楽器の音色が美しい映像と相まって (cần BTV đối chiếu bản gốc) | de, pt | chờ sửa |
| 1577 | ひとつ (N1) | `explain` | gõ sai | 日常の話しことばで医用的に用いられる; "6. ⑦は" | 慣用的に; "6. は" | de, pt | chờ sửa |
| 123 | ～に行く／来る (N5) | `notes`, `examples` | khác | `notes` ghi "có 2 cách sử dụng:" nhưng chỉ nêu 1 cách; ví dụ không có bản dịch tiếng Việt | Bổ sung cách thứ 2 và bản dịch | de | chờ sửa |
| 18 | Trợ từ で (N5) | `mistakes` 3 | khác | Mục được gắn `src: "ja"` nhưng chứa chữ tiếng Việt "(sai)" | Đổi "(sai)" thành ký hiệu ×, hoặc gắn đúng `src` | pt | chờ sửa |
| 142 | ～Vましょうか (N5) | `explain` | khác | Hai dòng "Đề nghị cùng làm…" và "Đề nghị giúp…" bị chép lặp 2 lần | Bỏ 2 dòng lặp | pt | chờ sửa |
| 148 | ～。でも、～ (N5) | `comparison`, dòng しかし | khác | Ô nghĩa ghi tiếng Anh "However" thay vì tiếng Việt | "Tuy nhiên" | pt | chờ sửa |
| 484 | もし～ても (N4) | `explain` | khác | Chữ tiếng Anh "(concessive)" lẫn trong phần giải thích tiếng Việt | "(nhượng bộ)" | pt | chờ sửa |
| 558 | ～てしょうがない (N3) | `context.connection` | khác | 「Aくて**しよう**がない」 (khác しょうがない ở các chỗ khác) | 「Aくて**しょう**がない」 | pt | chờ sửa |
| 562 | ～ということだ (N3) | `examples` 2 (dịch tiếng Việt) | gợi ý lệch | Gợi ý "rất có thể 2 tháng nữa" lệch với câu Nhật (…だろうということだった: nghe nói là có lẽ…) | Dịch lại theo câu Nhật | pt | chờ sửa |
| 568 | ～といえば (N3) | `examples` 3 (dịch tiếng Việt) | gợi ý lệch | Hội thoại A/B kèm dòng ※: các dòng dịch tiếng Việt bị đảo thứ tự | Sắp lại đúng thứ tự A / B / ※ | pt | chờ sửa |
| 610 | ～ようがない (N3) | `context.connection` | khác | "Vます**ます**ようがない" (lặp ます) | "Vますようがない" | pt | chờ sửa |
| 622 | ～上げる (N3) | `context.connection` | khác | "N1はN2にN3をあげる" không khớp mẫu ～上げる (hoàn thành) | "Vます + 上げる" | pt | chờ sửa |
| 660 | ～。だって～。 (N3) | `meaning` / `context.connection` | khác | `meaning` ("Vì… mà, tại vì") là liên từ だって đầu câu, còn `connection` ghi "Nだって" (trợ từ) | Thống nhất một cách dùng | pt | chờ sửa |
| 712 | ～によって…・～による (N3) | `meaning` (phần tiếng Nhật) | gõ sai | 「働きかけ**なのでの**文」 (câu bị rối) | BTV đối chiếu bản gốc | pt | chờ sửa |
| 726 | ～のも当然だ (N3) | `meaning` | khác | "thừa **thận**" | "thừa **nhận**" | pt | chờ sửa |
| 742 | ～み (N3) | `examples` / `notes` | khác | 「お会いできる日を楽しみにしています」 là danh từ cố định 楽しみ, không minh hoạ cách dùng ～み | Thay ví dụ khác | pt | chờ sửa |
| 858 | かは-によって違う (N3) | `meaning` | khác | "…hay không là tùy… mà khác" lệch với mẫu (từ để hỏi + かは, không phải "có hay không") | "…(từ để hỏi)… thì tùy… mà khác" | pt | chờ sửa |
| 904 | ～かい（が）ある (N2) | `examples` 2 | gõ sai | 「景色**が**見ることができて」 | 「景色**を**見ることができて」 | pt | chờ sửa |
| 980 | ～に沿って (N2) | `comparison` | gõ sai | 「医者**だに**違いない」 | 「医者**に**違いない」 | pt | chờ sửa |
| 1009 | ～よりほかない (N2) | `notes` | khác | Nói phương án còn lại đứng "sau より" (đúng ra là trước より); ví dụ 6 「専門家の助言のほか（に）はない」 nghĩa hơi lạ | "trước より"; BTV xem lại ví dụ 6 | pt | chờ sửa |
| 1105 | ～も～ば～も～ (N2) | `context.connection` | gõ sai | 「A**いい**ければNもA」 | 「AければNもA」 | pt | chờ sửa |
| 1214 | ～こととて (N1) | `context.connection` | gõ sai | "Vない**ない**ぬこととて" (lặp) | "Vないぬこととて" | pt | chờ sửa |
| 1219 | ～ではすまない (N1) | `meaning` | khác | "Không thể bỏ qua…" lệch với nghĩa thật của mẫu | "Không thể chỉ… là xong" | pt | chờ sửa |
| 1253 | ～やしない (N1) | `comparison` | ruby | `<ruby>聞<rt>きき</rt></ruby>き` (cách đọc lặp phần okurigana) | `<rt>き</rt>` | pt | chờ sửa |
| 1261 | ～を限りに (N1) | `meaning` | khác | "Kể từ…" (bắt đầu từ…) lệch với nghĩa "lấy… làm lần cuối" | "Lấy… làm lần cuối" | pt | chờ sửa |
| 1263 | ～んばかりに (N1) | `mistakes` 1, `explain` | gõ sai | 「泣**いん**ばかりに泣いた」; 「×早起き んばかりに 起きた」 thừa dấu cách | 「泣**かん**ばかりに」; bỏ dấu cách thừa | pt | chờ sửa |
| 1278 | ～がゆえの～ (N1) | `explain` | gõ sai | 「であるが望ましい」 (câu rối) | 「であるのが望ましい」 | pt | chờ sửa |
| 1289 | ～たら～たで (N1) | `explain` | khác | Hai dòng gạch đầu dòng bị chép lặp (một lần không có gạch, một lần có) | Bỏ dòng lặp | pt | chờ sửa |
| 1298 | ～てまでも (N1) | `explain` | khác | Chuỗi "そこまでする てまで ？" bị hỏng | BTV đối chiếu bản gốc | pt | chờ sửa |
| 1301 | ～とあって (N1) | `notes` | khác | Ghi cấp "N2" trong khi mẫu là N1 | "N1" | pt | chờ sửa |
| 1319 | ～ないではすまない (N1) | `comparison`, dòng 4 | ruby | `<ruby>笑<rt>わらわ</rt></ruby>わず` (đọc lặp わ) | `<rt>わら</rt>` | pt | chờ sửa |
| 1333 | ～にすら (N1) | `notes` | gõ sai | 「彼は**すら**できない」 (sai ngữ pháp) | BTV đối chiếu bản gốc (vd 「彼すらできない」) | pt | chờ sửa |
| 1338 | ～に堪える (N1) | `notes`, `mistakes` 1 | khác | Nói Vます + に堪える là dạng tự nhiên, tránh 読むに堪える; mâu thuẫn với `notes` mẫu 1337 và ví dụ của chính mẫu này | Thống nhất với mẫu 1337 | pt | chờ sửa |
| 1356 | ～はおろか～も (N1) | `examples` 2, 6 | khác | Ví dụ 2 dùng すら, không phải はおろか～も; ví dụ 6 「健康管理は運動はおろか…」 câu gượng | Thay ví dụ đúng mẫu | pt | chờ sửa |
| 1368 | ～ようか～るまいか (N1) | `notes` | khác | Nói すまい tự nhiên hơn, mâu thuẫn với `notes` mẫu 1370 (tránh 来まい／すまい) | Thống nhất với mẫu 1370 | pt | chờ sửa |
| 1375 | ～るにはあたらない (N1) | `explain` | khác | Hai dòng "hai hướng nghĩa" bị chép lặp (một lần thường, một lần gạch đầu dòng) | Bỏ dòng lặp | pt | chờ sửa |
| 1466 | ～思いをする (N1) | `meaning` | khác | Phần ngoặc ghi 辛い思いをする, không khớp tên mẫu 思いをする | Bỏ hoặc sửa phần ngoặc | pt | chờ sửa |
| 1494 | ～うちに入らない (N1) | `context.pattern` | khác | Bị cụt: "～うちに入らな" | "～うちに入らない" | pt | chờ sửa |
| 1579 | をかわきりに (N1) | `examples` 2 | gõ sai | 「ミ**ユ**ージカル」 (ユ viết hoa) | 「ミ**ュ**ージカル」 | pt | chờ sửa |
| 1583 | Ｖ－るにしたって (N1) | `explain` | gõ sai | 「そのよう場合でも」 | 「そのよう**な**場合でも」 | pt | chờ sửa |

## 5. Nhật ký hoàn thành ngôn ngữ

Mỗi ngôn ngữ dịch xong thêm một khối (mới nhất ở cuối). Ô `[ ]` là việc chờ người quản lý; làm xong thì đánh `[x]`.

Mẫu:

```
### <mã> — <tên> · dịch xong <dd/mm/yyyy> (commit <hash>)
- Kết quả: <số lô>/101 lô, <qa thấp> lô qa thấp, <lỗi> lô lỗi, điểm TB ~<điểm>. Gộp <số mẫu> mẫu (translation/merged/grammar_text.<mã>.json).
- Lỗi nguồn mới phát hiện: <n> (đã ghi ở mục 4: #id, #id…) / không có.
- Dịch bù / ghi chú: <nếu có>.
- [ ] Chạy publish_lang.py <mã> → grammar/grammar_text.<mã>.json + nhãn ngắn translation/labels/<mã>.json
- [ ] Commit tables/particle_table.<mã>.json ở repo module
```

### de — tiếng Đức · dịch xong 13/11/2026 (commit 52a42cb)
- Kết quả: 101/101 lô, 0 lô qa thấp, 0 lô lỗi, điểm TB ~99,8 (Fable tự chấm, không tác tử con; thấp nhất 99,4). Gộp 1491 mẫu (translation/merged/grammar_text.de.json).
- Lỗi nguồn mới phát hiện: 599 dòng có "Báo bởi" = de, đã ghi ở mục 4 (trạng thái "chờ sửa"); nhiều nhất là ruby sai, dữ liệu thô lẫn trong `notes`, câu Nhật gõ sai, gợi ý Việt lệch câu Nhật.
- Dịch bù / ghi chú: publish_lang.py báo 1491/1491 mẫu có bản dịch, 0 mục cần dịch bù; đã dịch 6 nhãn ngắn (133, 880, 1015, 1594, 1610, 1611). #1336 và #1373 thiếu trường `meaning` ở nguồn nên bản Đức cũng không có nghĩa ngắn. Các trường nguồn tiếng Nhật/Anh (b100, b101) được dịch thẳng từ tiếng Nhật/Anh. Điểm là tự chấm; chưa có lượt đọc lại độc lập từng cặp câu ví dụ Nhật–Đức.
- [x] Chạy publish_lang.py de → grammar/grammar_text.de.json + nhãn ngắn translation/labels/de.json (13/11/2026, chưa commit)
- [x] Dịch bù các mẫu nguồn đã sửa sau đóng gói: không có mục nào cần dịch
- [x] Commit tables/particle_table.de.json ở repo module — Quân commit trong bản 0.2.4 (`0361ce7`, 13/11/2026); bỏ commit cục bộ `3262229`

### pt — tiếng Bồ Đào Nha (Brazil) · dịch xong 13/11/2026
- Kết quả: 101/101 lô, 0 lô qa thấp, 0 lô lỗi, điểm TB ~99.7 (thấp nhất 98.8). Gộp 1491 mẫu (translation/merged/grammar_text.pt.json).
- Cách chạy: 94 lô bằng workflow Opus dịch → Sonnet chấm; 7 lô (b001, b002, b004, b007, b008, b009, b018) bằng workflow Fable 5.2 dịch và chấm (đợt Fable bị ngắt vì hết hạn mức). b019 do Opus soát lại bản Fable có sẵn nên trường `model` ghi claude-fable-5-2. b035 lần đầu `failed` vì người chấm bỏ sót 5 mẫu, chạy lại thì đạt. Tổng khoảng 25 triệu token, 6 đợt.
- Lỗi nguồn mới phát hiện: 37 dòng mới chỉ do pt báo, đã ghi ở mục 4 (#18 mistakes, #142, #148, #484, #558, #562, #568, #610, #622, #660, #712, #726, #742, #858, #904, #980, #1009, #1105, #1214, #1219, #1253, #1261, #1263, #1278, #1289, #1298, #1301, #1319, #1333, #1338, #1356, #1368, #1375, #1466, #1494, #1579, #1583); ngoài ra thêm pt vào cột "Báo bởi" của các dòng đã có (một số dòng ở 2 đợt đầu có thể ghi pt hơi rộng).
- Dịch bù / ghi chú: publish_lang.py báo 1491/1491 mẫu có bản dịch, 0 mục cần dịch bù; đã dịch 6 nhãn ngắn (133, 880, 1015, 1594, 1610, 1611).
- [x] Chạy publish_lang.py pt → grammar/grammar_text.pt.json + nhãn ngắn translation/labels/pt.json (13/11/2026)
- [x] Commit tables/particle_table.pt.json ở repo module — bản 0.2.4 (`0361ce7`, 13/11/2026)
