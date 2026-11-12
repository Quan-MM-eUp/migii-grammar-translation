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
