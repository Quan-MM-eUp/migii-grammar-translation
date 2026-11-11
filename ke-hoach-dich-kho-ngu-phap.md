# Kế hoạch dịch kho ngữ pháp sang đa ngôn ngữ (chạy bằng Claude Cowork)

> Phiên bản: 1.0 · Ngày: 04/11/2026 · Trạng thái: đã chốt, chuẩn bị làm C1
> Liên quan: `de-xuat-trien-khai-phan-tich-ngu-phap.md` (mục 12: đa ngôn ngữ), module `bunpo-analyzer`

## 1. Các quyết định đã chốt

| # | Nội dung | Quyết định |
|---|---|---|
| 1 | Công cụ | Chạy hoàn toàn bằng **Claude Cowork**, dùng **workflow** (nhiều tác tử chạy song song) |
| 2 | Thứ tự ngôn ngữ | Nhóm 1: en, ko, cn, tw, th, id → Nhóm 2: fr, de, es, pt, ru, pl → Nhóm 3: hi, ne, my |
| 3 | Phạm vi | Dịch **mọi trường hiển thị** trên giao diện (cả phần "Phân tích chi tiết": `explain`, `comparison`, `common_mistakes`, `notes`) |
| 4 | Cách chạy | Bạn ra lệnh từng đợt: "chạy tiếp đợt dịch <lang>". Được chạy **nhiều ngôn ngữ song song ở nhiều cuộc trò chuyện** |
| 5 | Nội dung nguồn | **Chấp nhận bản tiếng Việt gốc**, dịch trung thành theo dữ liệu gốc, không sửa nội dung. Bản tiếng Việt giữ nguyên như kho |
| 6 | Người duyệt | Không có người duyệt bản ngữ; chất lượng kiểm bằng kiểm tra tự động nhiều tầng (mục 5) |
| 7 | `word_lib` | **Không dịch**: team đã có API nghĩa từ đa ngôn ngữ (module sẽ nối API ở một việc riêng) |
| 8 | Bảng trợ từ của module | **Có dịch** `tables/particle_table.json` (khoảng 200 mục, khoảng 10 nghìn ký tự/ngôn ngữ) |

## 2. Phạm vi và khối lượng

- **Kho ngữ pháp:** 1.621 mẫu, trừ 130 mẫu phụ đã gom về mẫu chuẩn (`tables/grammar_canon.json`), còn **1.491 mẫu** cần dịch.
- **15 ngôn ngữ đích:** en, cn, tw, ko, fr, de, es, pt, ru, pl, id, th, hi, ne, my.
- **Khối lượng nguồn:** khoảng **1,37 triệu ký tự / ngôn ngữ** (đã làm sạch, bỏ trùng).

| Phần | Số mục | Ký tự nguồn |
|---|---|---|
| Nghĩa (`meaning_vi`) | 1.621 | 57 nghìn |
| Tên mẫu còn chữ Việt | 138 | 3 nghìn |
| `接続` có chữ Việt | 572 | 21 nghìn |
| Bản dịch câu ví dụ | 3.101 (2 câu/mẫu đang hiện) – 6.567 (tất cả) | 145–313 nghìn |
| Lỗi hay gặp (`common_mistakes`) | 2.482 dòng | 180 nghìn |
| `explain` | 1.050 | 452 nghìn |
| `notes` | 834 | 362 nghìn |
| Ô bảng so sánh có chữ Việt | 8.460 ô | 148 nghìn |
| Bảng trợ từ module | khoảng 200 | khoảng 10 nghìn |

Câu ví dụ: dịch toàn bộ ví dụ đã làm sạch (tối đa 6 câu/mẫu, đúng như `grammar_detail()` trả), để giao diện đổi số câu hiện sau này không phải dịch thêm.

## 3. Quy tắc trường nào được dịch

| Trường | Cách xử lý |
|---|---|
| `grammar` (tên mẫu) | Chỉ dịch phần chữ Việt, giữ chữ Nhật: `まだ（tiếp diễn tới khi hoàn tất）` → `まだ (continuing until completion)` |
| `meaning_vi` | Dịch |
| `接続` | Chỉ dịch phần chữ Việt (572 mẫu); mẫu chỉ có chữ Nhật / ký hiệu thì giữ nguyên. Tên trường đúng thuật ngữ (cách nối); module trả ra với tên `connection` |
| `examples` | Câu Nhật giữ nguyên; câu dịch **dịch thẳng từ câu Nhật**, bản tiếng Việt chỉ để tham khảo |
| `explain`, `notes`, `common_mistakes` | Dịch |
| `comparison` | Dịch chữ trong từng ô; chữ Nhật và furigana (`<ruby>…<rt>…</rt></ruby>`) giữ nguyên |
| Trường viết thuần tiếng Nhật (68 `explain`, 54 `notes`, 29 `meaning_vi`, 3 `comparison`) | 15 ngôn ngữ dịch từ tiếng Nhật; tiếng Việt giữ nguyên như kho |
| `id`, `level`, `label`, `grammar_reading`, `pattern`, `pattern_kana`, `pattern_type`, `phan_khoang`, `grammar_tier`, `confusable`, `variations` | **Không dịch** (mã, cách đọc, trùng tên, nội bộ hoặc không hiển thị) |

Ví dụ #1618 まだ: dịch phần tiếng Việt trong tên, `meaning_vi`, câu dịch của 5 ví dụ (dịch từ câu Nhật), `explain` (dịch từ tiếng Nhật). `接続` 「まだ + V/A」 giữ nguyên; các trường rỗng bỏ qua.

## 4. Nguyên tắc chất lượng

1. **Dịch bản đã làm sạch** (`grammar_detail()`), không dịch kho thô: không số thứ tự, không dòng ──────, không thẻ HTML; bỏ câu trùng.
2. **Có tiếng Nhật làm gốc:** mỗi mẫu gửi kèm mẫu, `接続` và câu ví dụ tiếng Nhật, để không dịch qua trung gian tiếng Việt một cách máy móc.
3. **Dịch trung thành bản gốc:** không thêm, bớt hay sửa kiến thức; giữ nguyên cấu trúc (dòng, gạch đầu dòng, ký hiệu × ○ ✓).
4. **Bảng thuật ngữ cho từng ngôn ngữ** (khoảng 200 thuật ngữ ngữ pháp):
   - theo cách gọi của sách học tiếng Nhật ở nước đó (vd: tiếng Trung 五段動詞, い形容詞; tiếng Hàn 1그룹 동사, な형용사; tiếng Anh Group 1 verb, te-form);
   - đối chiếu văn phong với `i18n/<lang>.json` của app;
   - hai model Claude đồng thuận mới đưa vào bảng;
   - bắt buộc dùng trong mọi lô, code kiểm tra.
5. **Mỗi mẫu dịch trọn trong một lần** (mọi trường cùng lúc) để cách gọi nhất quán trong mẫu.
6. **Giữ nguyên** chữ Nhật, ký hiệu (～ × ○ ✓ → V N Aい Na …) và furigana; code so lại sau khi dịch.
7. **Lưu nguồn gốc mỗi bản dịch:** mã băm bản nguồn, model dịch, model chấm, phiên bản hướng dẫn, điểm. Kho sửa ở đâu thì chỉ dịch lại chỗ đó.
8. **Lưu ý theo ngôn ngữ:** cn và tw là hai bản riêng (giản thể / phồn thể, thuật ngữ khác nhau); ko dùng giọng giải thích lịch sự kiểu sách giáo khoa; my dùng Unicode chuẩn (không dùng Zawgyi); th không có dấu cách giữa các từ (kiểm tra độ dài riêng).

## 5. Kiểm tra chất lượng (không có người duyệt)

| Tầng | Làm gì | Áp dụng |
|---|---|---|
| 1. Code | Đủ trường, đúng khuôn JSON; chữ Nhật, ký hiệu và furigana khớp bản nguồn; đúng ngôn ngữ (không còn chữ Việt sót, không chép tiếng Nhật); đúng bảng thuật ngữ; độ dài hợp lý | 100% |
| 2a. Chấm chéo | Model Claude khác model đã dịch chấm kiểu MQM (sai nghĩa / thuật ngữ / trôi chảy / văn phong; nhẹ / nặng). Lỗi nặng thì dịch lại kèm nhận xét, tối đa 2 lần | 100% |
| 2b. Dịch ngược | Dịch ngược về tiếng Việt, so nghĩa với bản gốc (bắt lỗi "trôi chảy nhưng sai nghĩa") | 10% ngẫu nhiên + mọi mục bị gắn cờ; **100% với hi, ne, my** |
| 2c. Chấm thêm | Thêm một lượt chấm độc lập | hi, ne, my |

- Mục vẫn chưa đạt sau 2 lần dịch lại: vẫn ghi vào file dịch nhưng đánh dấu **`qa: "low"`** kèm lý do.
- **Trang thống kê chất lượng** (artifact): điểm theo ngôn ngữ và cấp, danh sách mục `qa: "low"`.
- Đề xuất sau này: nút "Báo lỗi bản dịch" trong bảng ngữ pháp của app.

## 6. Tổ chức dữ liệu và chạy song song

Toàn bộ dữ liệu và tiến độ nằm trong thư mục trên máy bạn, để mọi cuộc trò chuyện đọc lại và làm tiếp:

```
Model bunpo/translation/
├── HUONG_DAN.md            cách chạy, câu lệnh mẫu cho mỗi cuộc trò chuyện
├── source/                 các lô nguồn (khoảng 20 nghìn ký tự/lô, tự đủ ngữ cảnh); chỉ đọc
├── glossary/<lang>.json    bảng thuật ngữ đã chốt; chỉ đọc
├── style/<lang>.md         hướng dẫn văn phong; chỉ đọc
├── manifest/<lang>.csv     tiến độ từng lô của ngôn ngữ: chưa dịch / đã dịch / đạt / qa thấp
├── locks/<lang>.lock       khoá: ngôn ngữ đang có cuộc trò chuyện nhận làm
├── out/<lang>/<lô>.json    bản dịch + điểm chấm
└── reports/<lang>/         báo cáo sau mỗi đợt
```

Code (đóng gói, kiểm tra, gộp, dịch bù) nằm trong repo: `bunpo-analyzer/scripts/translation/`.

**Một đợt dịch:** mỗi lần nhắn "chạy tiếp đợt dịch <lang>":

1. Nhận (hoặc gia hạn) khoá `locks/<lang>.lock`.
2. Đọc `manifest/<lang>.csv`, lấy các lô kế tiếp chưa làm.
3. Workflow khoảng 8 tác tử dịch song song, mỗi tác tử 2–3 lô, tổng **khoảng 20–25 lô/đợt**.
4. Code kiểm tra tầng 1; lô lỗi thì dịch lại.
5. Tác tử chấm (model khác) chấm tầng 2; mục kém thì dịch lại.
6. Cập nhật `manifest/<lang>.csv`, ghi file về máy, viết báo cáo, báo tiến độ (vd "en: 52/70 lô đạt, 3 mục qa thấp").

**Số thật sau C1:** 1.491 mẫu, **101 lô/ngôn ngữ** (1,84 triệu ký tự nguồn tính cả câu ví dụ tiếng Nhật đi kèm), tức khoảng 4–5 đợt/ngôn ngữ; 15 ngôn ngữ là 1.515 lô, khoảng 65–75 đợt. Cỡ lô có thể chỉnh sau vòng thử (C3).

**Chạy song song nhiều cuộc trò chuyện:**
- Mỗi cuộc trò chuyện làm **một ngôn ngữ** đến khi xong. Ví dụ cuộc A: en, cuộc B: ko, cuộc C: cn.
- Khoá ngăn hai cuộc nhận cùng ngôn ngữ. Khoá cũ quá 3 giờ coi như bỏ dở, cuộc khác nhận tiếp được.
- Nhắn "chạy tiếp đợt dịch" không kèm ngôn ngữ thì tự nhận ngôn ngữ kế tiếp chưa có ai làm, theo thứ tự nhóm.
- Sau khoảng 3–5 đợt thì mở cuộc trò chuyện mới cho ngôn ngữ đó; tiến độ không mất.
- Quy trình một đợt được đóng thành **skill "chạy đợt dịch"**, để mọi cuộc trò chuyện làm đúng cùng các bước.

**Điều kiện khi chạy:**
- **Hạn mức Cowork dùng chung cả tài khoản:** chạy song song nhanh hơn nhưng tiêu hạn mức nhanh hơn tương ứng (tổng không đổi). Khuyến nghị **tối đa 2–3 cuộc cùng lúc**; chốt sau C3.
- **Máy bạn bật, mở ứng dụng Claude,** và mỗi cuộc trò chuyện kết nối thư mục `Model bunpo`.

## 7. Các bước thực hiện

| Bước | Việc | Ở đâu | Kết quả |
|---|---|---|---|
| **C0** Chuẩn bị | Không bắt buộc: team nội dung sửa lỗi kho trong `docs/kho_loi_du_lieu.md`, `docs/grammar_detail_review.md` (nếu sửa trước C1 thì bản dịch hưởng luôn; sửa sau thì C7 dịch bù) | Team nội dung | — |
| **C1** Đóng gói | Script tách kho đã làm sạch thành lô; `manifest/<lang>.csv`; khoá; script kiểm tra tầng 1; script gộp; mã băm nguồn; `HUONG_DAN.md` | Cuộc trò chuyện chính | `scripts/translation/*`, thư mục `translation/` |
| **C2** Thuật ngữ, văn phong, bảng trợ từ | Tách khoảng 200 thuật ngữ; dịch nháp và đồng thuận cho 15 ngôn ngữ; hướng dẫn văn phong; dịch `particle_table` | Cuộc trò chuyện chính (workflow nhỏ) | `glossary/`, `style/`, bản dịch bảng trợ từ |
| **C3** Vòng thử | 30 mẫu (N5–N1) × en, ko, my × 2 cách (Opus dịch / Sonnet chấm, và ngược lại). Đo chất lượng và **hạn mức tiêu thụ mỗi lô** | Cuộc trò chuyện chính | Báo cáo: chọn model, chỉnh hướng dẫn, số cuộc chạy song song, lịch dự kiến |
| **C3b** Skill | Đóng quy trình một đợt thành skill "chạy đợt dịch" (bạn bấm lưu trên thẻ đề xuất) | Cuộc trò chuyện chính | Skill trong tài khoản |
| **C4** Dịch hàng loạt | "chạy tiếp đợt dịch <lang>", nhóm 1 → 2 → 3; 2–3 cuộc trò chuyện song song | Nhiều cuộc trò chuyện | `out/<lang>/` đầy đủ |
| **C5** Thống kê chất lượng | Trang artifact: điểm theo ngôn ngữ / cấp, danh sách `qa: "low"` | Bất kỳ | Trang để bạn xem |
| **C6** Nối vào module | Gộp thành `grammar/grammar_text.<lang>.json`; mở rộng module đọc thêm bản dịch tên mẫu, `接続`, câu ví dụ, bảng so sánh, `notes`; dịch bảng trợ từ vào `tables/`; thử trên trang test (`demo_server.py`) bằng ô chọn ngôn ngữ. Ngôn ngữ nào xong trước thì gộp trước | Bất kỳ | Module hiện đủ đa ngôn ngữ |
| **C7** Dịch bù | Script so mã băm: kho tiếng Việt đổi mục nào thì chỉ xếp lại mục đó vào manifest rồi chạy C4 | Bất kỳ | Bản dịch luôn khớp kho |

## 8. Định dạng file dịch

`grammar/grammar_text.<lang>.json`, mở rộng định dạng module đang đọc:

```json
{
  "1618": {
    "name": "まだ (continuing until completion)",
    "meaning": "Expresses continuation",
    "connection": null,
    "examples": [
      {"jp": "これから、まだもっと寒くなる。", "tr": "From now on, it will get even colder."}
    ],
    "explain": "Expresses that the current state will continue from now on…",
    "comparison": null,
    "mistakes": [],
    "notes": null,
    "_meta": {"src_hash": "…", "model": "…", "judge": "…", "score": 96, "qa": "ok", "prompt_ver": "1", "date": "2026-11-…"}
  }
}
```

- `null` / `[]`: trường gốc rỗng hoặc không cần dịch (giao diện dùng bản gốc, ví dụ `接続` chỉ có chữ Nhật).
- `comparison`: cùng khuôn `{headers, rows}` mà `grammar_detail()` trả.
- Bảng trợ từ: `tables/particle_table.<lang>.json` (theo khoá mục của `particle_table.json`).

## 9. Rủi ro và cách xử lý

| Rủi ro | Cách xử lý |
|---|---|
| Hết hạn mức Cowork giữa chừng | Tiến độ lưu trong manifest, đợt sau làm tiếp. C3 đo trước để biết cần bao nhiêu đợt |
| Chất lượng hi, ne, my thấp hơn | Kiểm tra dày hơn (dịch ngược 100%, chấm 2 lượt), làm cuối, đánh dấu `qa` rõ |
| Lỗi trong bản tiếng Việt gốc được dịch theo | Đã chấp nhận (quyết định 5). Câu ví dụ dịch từ tiếng Nhật nên ít bị ảnh hưởng. Team sửa kho sau thì C7 dịch bù |
| Thuật ngữ không nhất quán giữa các lô / cuộc trò chuyện | Bảng thuật ngữ bắt buộc + code kiểm tra + skill dùng chung |
| Hai cuộc trò chuyện làm trùng | Khoá theo ngôn ngữ; mỗi lô là một file riêng |
| Cuộc trò chuyện bị ngắt giữa đợt | Lô dở được dịch lại ở đợt sau; khoá cũ quá 3 giờ tự hết hạn |

## 10. Việc của bạn

1. Nhắn **"chạy tiếp đợt dịch <lang>"** cho mỗi đợt ở C4, mỗi cuộc trò chuyện một ngôn ngữ.
2. Bấm lưu skill "chạy đợt dịch" khi mình đề xuất (C3b).
3. Xem báo cáo vòng thử (C3) và trang thống kê chất lượng (C5).
4. (Không bắt buộc) Nhờ team nội dung sửa lỗi kho (C0).

## 11. Nhật ký

| Ngày | Nội dung |
|---|---|
| 04/11/2026 | Chốt kế hoạch 1.0 |
| 04/11/2026 | Xong C1: `scripts/translation/` (export_batches, tm, check, merge, common) + 21 test; thư mục `translation/` với 101 lô nguồn, manifest 15 ngôn ngữ, `HUONG_DAN.md` |
| 04/11/2026 | Xong C2: 217 thuật ngữ × 15 ngôn ngữ (`glossary/`), hướng dẫn văn phong (`style/`), bảng trợ từ 196 mục × 15 (`particles/`); soạn bằng Opus, duyệt chéo bằng Sonnet (52 chỗ sửa, nhật ký `glossary/_review_log.json`) |
| 04/11/2026 | Xong C3 (báo cáo `translation/reports/c3_pilot.md`): chốt Opus dịch / Sonnet chấm (+ Opus dịch ngược cho hi, ne, my), lô 20 nghìn ký tự, hướng dẫn v2, khoảng 350 nghìn token/lô; bỏ 23 trường `meaning` lỗi kho |
| 04/11/2026 | Xong C3b: `qa.py`, `tm.py apply-report`, `prompts/round_workflow.js`, skill "chay-dot-dich"; chạy thử trọn quy trình với en/b001 (đạt, 99,9 điểm, khoảng 208 nghìn token, khoảng 4 phút) |
| 06/11/2026 | Đổi phạm vi: en, id (Cowork) + tw (ưu tiên), cn, ko (Claude API). Xong A1: `api_translate.py` (dịch Opus / chấm Sonnet qua API, dùng chung khoá + tiến độ, chế độ chạy thử `--pilot`, giới hạn `--max-usd`) + 11 test |
