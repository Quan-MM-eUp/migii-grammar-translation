# Hướng dẫn thư mục dịch kho ngữ pháp

Kế hoạch đầy đủ: `../ke-hoach-dich-kho-ngu-phap.md`. File này cho mỗi cuộc trò chuyện Cowork đọc trước khi chạy một đợt dịch.

## Thư mục

| Đường dẫn | Nội dung | Ai ghi |
|---|---|---|
| `source/bNNN.json` | Lô nguồn, khoảng 20 nghìn ký tự, N5 → N1. **Chỉ đọc** | `export_batches.py` (C1, C7) |
| `source/items.json` | Mọi mẫu theo id, để tra cứu | như trên |
| `source/index.json` | Danh sách lô, số mẫu, số ký tự, mã băm, `kho_version` | như trên |
| `glossary/<lang>.json` | Bảng thuật ngữ bắt buộc (217 thuật ngữ: `tr` cách dịch chuẩn, `accept` dạng khác được chấp nhận, `check` code có dò hay không). **Chỉ đọc** | C2 |
| `glossary/_source.json`, `_review_log.json`, `*.draft.json` | Danh sách thuật ngữ nguồn, nhật ký duyệt chéo, bản nháp trước duyệt | C2 |
| `particles/<lang>.json` | Bảng trợ từ đã dịch (196 mục, `{key: nghĩa}`); C6 chép thành `tables/particle_table.<lang>.json` | C2 |
| `style/<lang>.md` | Hướng dẫn văn phong. **Chỉ đọc** | C2 |
| `prompts/translate.md`, `judge.md`, `fix.md` | Hướng dẫn cho tác tử dịch / chấm / sửa (v2, chốt sau C3) | C3 |
| `prompts/round_workflow.js` | Workflow một đợt (dịch Opus → chấm Sonnet → sửa ≤ 2 vòng), skill "chay-dot-dich" gọi | C3b |
| `source/data_issues.json` | Trường kho bị bỏ khi đóng gói (lỗi kho) | `export_batches.py` |
| `pilot/` | Dữ liệu vòng thử C3 | C3 |
| `manifest/<lang>.csv` | Tiến độ từng lô | `tm.py` |
| `locks/<lang>.lock` | Khoá ngôn ngữ | `tm.py` |
| `out/<lang>/bNNN.json` | Bản dịch + điểm chấm | Cuộc trò chuyện dịch |
| `reports/<lang>/` | Báo cáo mỗi đợt | Cuộc trò chuyện dịch |
| `merged/grammar_text.<lang>.json` | Bản gộp (C6 chép vào `grammar/`) | `merge.py` |
| `labels/<lang>.json` | Nhãn ngắn dịch tay trên Cowork (`{id: nhãn}`), cho mẫu có nhãn chữ Việt chưa có tên dịch | Cowork |
| `labels/<lang>.todo.json` | Danh sách nhãn còn cần dịch (rỗng = xong) | `publish_lang.py` |

Không xoá file nào trong thư mục này (thư mục kết nối không cho xoá; khoá được "trả" bằng cách ghi đè).

## Câu lệnh

Chạy trên máy (Python 3.10+, chỉ thư viện chuẩn), từ thư mục `Model bunpo`:

```bash
T=tools; W=translation   # người quản lý: bản gốc ở bunpo-analyzer/scripts/translation
python3 $T/tm.py --ws $W status                         # bảng tiến độ 15 ngôn ngữ
python3 $T/tm.py --ws $W claim en --who <mã-cuộc>       # nhận / gia hạn khoá (thoát 2 nếu cuộc khác đang giữ)
python3 $T/tm.py --ws $W claim --auto --who <mã-cuộc>   # tự chọn ngôn ngữ kế tiếp còn việc, in ra mã ngôn ngữ
python3 $T/tm.py --ws $W next en --n 20                 # các lô cần làm tiếp
python3 $T/brief.py --ws $W en b001                     # thuật ngữ bắt buộc có trong lô (cho tác tử đọc)
python3 $T/check.py --ws $W en b001 b002                # kiểm tra tầng 1 (thêm --json cho tác tử)
python3 $T/tm.py --ws $W mark en b001 --status passed --score 95 --qa-low 0
python3 $T/tm.py --ws $W release en --who <mã-cuộc>     # trả khoá cuối đợt
python3 $T/qa.py --ws $W en --results results.json       # ghi điểm chấm vào file dịch + báo cáo đợt (chạy trên mây)
python3 $T/tm.py --ws $W apply-report $W/reports/en/<đợt>.json --who <mã-cuộc>   # cập nhật manifest từ báo cáo
python3 $T/merge.py --ws $W en                          # gộp các lô passed / qa_low
```

`<mã-cuộc>`: một mã ngắn cố định cho cuộc trò chuyện, ví dụ `en-1`. Khoá không gia hạn quá 3 giờ thì cuộc khác được nhận.

Trạng thái lô: `pending` (chưa dịch) → `translated` (đã dịch, qua tầng 1) → `passed` (qua chấm) hoặc `qa_low` (vẫn còn mục `qa: "low"` sau 2 lần dịch lại). `failed`: lỗi, được làm lại tối đa 3 lần.

## Một mục nguồn

```json
{"id": 1618, "level": "N5", "src_hash": "a84c…",
 "context": {"name": "…", "pattern": "…", "connection": "まだ + V/A", "examples_jp": ["…"]},
 "fields": {
   "name":       {"src": "vi", "text": "まだ（tiếp diễn tới khi hoàn tất）", "mode": "vi_parts"},
   "meaning":    {"src": "vi", "text": "Diễn đạt sự liên tục"},
   "connection": {"src": "vi", "text": "Vて + から (sau khi)", "mode": "vi_parts"},
   "examples":   [{"jp": "雨は、まだ二、三日続くだろう。", "vi": "Mưa có lẽ còn kéo dài…"}],
   "explain":    {"src": "ja", "text": "現在の状態がこれからも続く様子を表す。…"},
   "notes":      {"src": "vi", "text": "…"},
   "mistakes":   [{"src": "vi", "text": "× … → ○ …"}],
   "comparison": {"headers": ["…"], "rows": [["<ruby>遊<rt>あそ</rt></ruby>び", "chơi"]]}}}
```

Quy tắc dịch:

- `src: "vi"`: dịch từ tiếng Việt; `src: "ja"`: dịch từ tiếng Nhật.
- `mode: "vi_parts"`: chỉ dịch phần chữ Việt, giữ nguyên chữ Nhật và ký hiệu.
- `examples`: dịch **từ câu Nhật**; câu Việt chỉ để tham khảo.
- `comparison`: dịch từng ô; ô chỉ có chữ Nhật / ký hiệu thì giữ nguyên; giữ nguyên `<ruby>…</ruby>`.
- Mọi trường: giữ nguyên chữ Nhật, ký hiệu `～ × ○ ✓ ✕ → ⇔`, xuống dòng và gạch đầu dòng; không thêm, bớt hay sửa kiến thức.

## File dịch `out/<lang>/bNNN.json`

```json
{"batch": "b001", "lang": "en", "model": "<model dịch>", "prompt_ver": "1", "date": "2026-11-05",
 "items": [
  {"id": 1618, "src_hash": "<chép từ nguồn>",
   "fields": {"name": "まだ (continuing until completion)", "meaning": "Expresses continuation",
              "examples": ["The rain will probably continue for two or three more days."],
              "explain": "…", "mistakes": ["…"],
              "comparison": {"headers": ["…"], "rows": [["<ruby>遊<rt>あそ</rt></ruby>び", "play"]]}},
   "qa": {"judge": "<model chấm>", "score": 96, "qa": "ok", "issues": []}}]}
```

- `fields` có **đúng các khoá** của nguồn; mỗi trường là chuỗi đã dịch, trừ `examples` và `mistakes` (danh sách chuỗi, cùng số phần tử, cùng thứ tự) và `comparison` (cùng kích thước bảng).
- `qa` do tác tử chấm điền (tầng 2); `qa: "low"` kèm `issues` khi vẫn chưa đạt sau 2 lần dịch lại.
- `check.py` báo **lỗi** (lô phải dịch lại) hoặc **cảnh báo** (tác tử chấm xem lại).

## Chạy song song

- Mỗi cuộc trò chuyện làm một ngôn ngữ, thứ tự nhóm: en, ko, cn, tw, th, id → fr, de, es, pt, ru, pl → hi, ne, my.
- Khuyến nghị tối đa 2–3 cuộc cùng lúc (hạn mức Cowork dùng chung tài khoản).
- Máy bật, ứng dụng Claude mở, cuộc trò chuyện kết nối thư mục `Model bunpo`.

## Chạy đợt dịch

Trong một cuộc trò chuyện Cowork mới (đã liên kết máy, kết nối thư mục `Model bunpo`), nhắn **"chạy tiếp đợt dịch <lang>"** (hoặc "chạy tiếp đợt dịch" để tự chọn ngôn ngữ). Skill **chay-dot-dich** làm toàn bộ: nhận khoá, chọn 20 lô, đóng gói lên mây, chạy 2 workflow song song, ghi điểm, đưa kết quả về máy, cập nhật tiến độ, báo cáo.

## Dịch bằng Claude API (tw, cn, ko)

Chạy trong terminal trên máy, tại thư mục `Model bunpo` (không cần Cowork):

```bash
pip install anthropic                     # một lần
# thêm dòng ANTHROPIC_API_KEY=... vào bunpo-analyzer/.env (không dán key vào khung chat)
python bunpo-analyzer/scripts/translation/api_translate.py tw --n 20 --max-usd 20
```

- Dùng chung bảng tiến độ và khoá với Cowork: chạy được song song với Cowork khi khác ngôn ngữ. Trong Cowork luôn ghi rõ ngôn ngữ (`/chay-dot-dich en`), đừng để tự chọn, để không nhận nhầm tw / cn / ko.
- Mỗi lô: Opus dịch (3–5 yêu cầu) → `check.py`, lỗi thì sửa → Sonnet chấm → mục lỗi nặng sửa và chấm lại (tối đa 2 vòng) → ghi điểm, cập nhật tiến độ.
- `--n` số lô (mặc định 20), `--parallel` số lô song song (mặc định 3), `--max-usd` dừng khi chạm mức chi phí, `--batches b002,b050` chọn lô.
- Chạy thử không đụng dữ liệu thật: `--pilot translation/pilot_api --batches b002,b060`.
- Ctrl+C để dừng; lô đang dở sẽ được dịch lại ở lần sau.
- Chi phí từng yêu cầu: `reports/<lang>/api_usage.csv`; báo cáo mỗi lần chạy: `reports/<lang>/api-<thời điểm>.md`.

## Dịch xong một ngôn ngữ: đưa vào module

Trong thư mục `bunpo-analyzer`:

```bash
python scripts/translation/publish_lang.py <lang>
```

- Gộp các lô đã đạt, bỏ mẫu mà kho tiếng Việt đã sửa sau khi dịch (mẫu đó hiện tiếng Việt đến khi dịch bù), ghi `grammar/grammar_text.<lang>.json` và `tables/particle_table.<lang>.json`.
- Nếu báo "con N chua dich": mở `labels/<lang>.todo.json`, nhắn Cowork "dịch nhãn ngắn <lang>" (dịch trường `label`, giữ nguyên chữ Nhật và ký hiệu, ngắn như nhãn gốc, ghi vào `labels/<lang>.json` dạng `{id: nhãn}`), rồi chạy lại lệnh.
- Khởi động lại server / tiến trình dùng module.

## Kho tiếng Việt sửa sau khi đã dịch (dịch bù)

`publish_lang.py <lang>` tự phát hiện mẫu có nội dung tiếng Việt đã đổi so với lúc dịch: mẫu đó tạm hiện tiếng Việt và được liệt kê ở `patches/<lang>.todo.json` (`changed`: trường đã đổi, `vi`: chữ mới, `src_hash`). Nhắn Cowork "dịch bù <lang>": dịch các trường trong `vi` (giữ chữ Nhật, theo `glossary/<lang>.json`), ghi `patches/<lang>.json` dạng `{id: {"src_hash": <chép từ todo>, "fields": {trường: bản dịch}}}`, rồi chạy lại `publish_lang.py <lang>`. Trường không đổi giữ bản dịch cũ. Kho lại đổi thì `src_hash` lệch, lệnh báo cần dịch lại.

