# Lỗi nguồn tiếng Việt trong kho ngữ pháp (cho BTV)

Lỗi phát hiện trong lúc dịch kho sang các ngôn ngữ. Số là `id` trong `grammar/grammar_lib.json`. Người dịch thấy lỗi mới thì thêm dòng vào bảng 1 (ghi ngôn ngữ phát hiện).

**Cách xử lý (người quản lý):** gom lỗi, BTV sửa một lần trong `grammar_lib.json` → chạy `publish_lang.py <mã>` cho từng ngôn ngữ đã dịch (en, ko, id, cn, th, ru, es) → mẫu đã sửa được liệt kê ở `translation/patches/<mã>.todo.json` → dịch bù. Trong lúc chưa dịch bù, mẫu đó hiện tiếng Việt. Ngôn ngữ chưa bắt đầu (fr, de, pt, pl, hi, ne) thì nên sửa trước khi dịch.

Lưu ý: sửa câu ví dụ tiếng Nhật thì bản dịch câu đó (ở mọi ngôn ngữ) không còn khớp, phải dịch bù cả trường `examples` của mẫu.

## 1. Lỗi phát hiện khi dịch (11/2026)

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
| 13 | 1015 | ～上で（sau khi） (N2) | `meaning_vi` | "Sau khi…, khi…" (viết không dấu nên không được dịch) | "Sau khi…, khi…" có dấu | kiểm tra |

Ghi chú:

- #632, #510, #1335: lỗi nằm trong `notes`, trường này đang chứa nguyên khối thô "explain: … ⏐ examples: …" (chép lặp từ trường khác). Nên làm gọn `notes` luôn khi sửa.
- #26, #27 (Tính từ い / な): **đã sửa** ngày 10/11 (bỏ chỗ ảnh 【ảnh】 trong `meaning_vi`) và đã dịch bù cho mọi ngôn ngữ đã xong. Trường `explain` của 2 mẫu này hiện chỉ là một câu ví dụ "VD: …"; BTV có thể viết giải thích thật (không gấp).

## 2. Lỗi đã biết từ trước

Danh sách đầy đủ phát hiện khi viết luật và lúc đóng gói dịch (câu ví dụ gõ sai, nghĩa chứa câu ví dụ, trường viết tiếng Anh, mẫu trùng…): `bunpo-analyzer/docs/kho_loi_du_lieu.md` (repo `bunpo-analyzer-module`), mục 1–9. Một số mục trùng với bảng trên (#964, #981, #984, #1015, #1087).
