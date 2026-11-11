---
name: "chay-dot-dich"
description: "Chạy một đợt dịch kho ngữ pháp Migii sang một ngôn ngữ (en, ko, cn, tw, th, id, fr, de, es, pt, ru, pl, hi, ne, my) khi người dùng nhắn \"chạy tiếp đợt dịch\", có hoặc không kèm mã ngôn ngữ."
---

# Chạy một đợt dịch kho ngữ pháp

Kế hoạch đầy đủ: `Model bunpo/ke-hoach-dich-kho-ngu-phap.md`. Dữ liệu, tiến độ và hướng dẫn cho tác tử nằm trong thư mục `Model bunpo/translation/` trên máy người dùng (`HUONG_DAN.md` mô tả cấu trúc).

Lời nhắn "chạy tiếp đợt dịch …" đã là yêu cầu chạy workflow nhiều tác tử: không hỏi lại, chạy luôn. Mọi câu báo cho người dùng viết bằng tiếng Việt, ngắn gọn.

## Điều kiện

- Cuộc trò chuyện được liên kết với máy người dùng và có thư mục `Model bunpo` (công cụ `mcp__remote-devices__*`). Thiếu thì nói rõ và dừng; thư mục chưa kết nối thì xin quyền một lần bằng `device_request_folder_access`.
- Lấy đường dẫn thật của thư mục bằng `get_device_info` (vd `C:\Users\…\Model bunpo`), gọi là `DEV`. Trong `device_bash` thư mục là `$HOME/mnt/Model bunpo`.
- Không xoá file nào trên máy (thư mục không cho xoá). File nén trung chuyển nằm trong `_tmp/` và **mỗi đợt dùng tên mới có `STAMP`**: ghi đè cùng một tên có thể khiến máy nhận bản cũ.
- Gọi các công cụ máy **lần lượt**, không gửi `device_commit_files` và `device_bash` dùng file đó trong cùng một lượt.

## Các bước

Ký hiệu: `L` = mã ngôn ngữ, `WHO` = mã cuộc trò chuyện, `T=bunpo-analyzer/scripts/translation`, `W=<thư mục làm việc trên mây>/dich_<L>` (thư mục làm việc = kết quả `pwd` của Bash; phải nằm trong thư mục làm việc để Workflow đọc được script).

1. **Mã cuộc trò chuyện.** Lần đầu trong cuộc trò chuyện: `WHO = <L>-<yyyymmddHHMM>` (giờ UTC từ `date -u`); các đợt sau dùng lại đúng mã đó.

2. **Nhận khoá và chọn lô** (một lệnh `device_bash`, chạy trong `$HOME/mnt/Model bunpo`):
   ```bash
   T=bunpo-analyzer/scripts/translation
   python3 $T/tm.py --ws translation claim <L> --who <WHO>      # không có ngôn ngữ: claim --auto --who <WHO> (in ra mã ngôn ngữ)
   python3 $T/tm.py --ws translation next <L> --n 20
   date -u +%F; date -u +%Y%m%d-%H%M       # DATE và STAMP của đợt
   ```
   - In `BUSY <L> <ai>` (mã thoát 2): cuộc trò chuyện khác đang giữ ngôn ngữ này. Báo người dùng và dừng (gợi ý ngôn ngữ khác hoặc "chạy tiếp đợt dịch" để tự chọn).
   - `next` rỗng: ngôn ngữ đã xong, sang bước 9.

3. **Đóng gói đầu vào trên máy** (cùng thư mục):
   ```bash
   tar czf _tmp/dot_<L>_<STAMP>_in.tgz $(for b in <các lô>; do echo translation/source/$b.json; done) \
     translation/glossary/<L>.json translation/style/<L>.md translation/prompts bunpo-analyzer/scripts/translation/*.py
   ```
   Rồi `device_stage_files` với `DEV\_tmp\dot_<L>_<STAMP>_in.tgz` → file có ở `/mnt/user-data/uploads/Model bunpo/_tmp/dot_<L>_<STAMP>_in.tgz`.

4. **Giải nén trên mây** (Bash):
   ```bash
   W=$(pwd)/dich_<L>; rm -rf $W; mkdir -p $W
   tar xzf "/mnt/user-data/uploads/Model bunpo/_tmp/dot_<L>_<STAMP>_in.tgz" -C $W
   ls $W/translation/source            # phải đúng các lô đã chọn
   ```
   Nếu file chưa có, đợi vài giây rồi thử lại một lần.

5. **Chạy workflow.** Chia danh sách lô thành **2 nửa** và gọi **2 Workflow trong cùng một lượt** (chạy song song; mỗi workflow chỉ chạy 2 tác tử cùng lúc):
   - `scriptPath`: `<W>/translation/prompts/round_workflow.js`
   - `args` (đối tượng JSON, không phải chuỗi): `{"ws": "<W>/translation", "tools": "<W>/bunpo-analyzer/scripts/translation", "lang": "<L>", "lang_name": "<tên tiếng Anh>", "batches": [<nửa lô>], "date": "<yyyy-mm-dd>", "low": <true nếu L là hi, ne hoặc my>}`
   - Tên tiếng Anh: en English, ko Korean, cn Simplified Chinese, tw Traditional Chinese (Taiwan), th Thai, id Indonesian, fr French, de German, es Spanish, pt Portuguese, ru Russian, pl Polish, hi Hindi, ne Nepali, my Burmese (Unicode).
   - Báo người dùng một câu: đang dịch những lô nào, ước tính 20–40 phút. Sau đó **chờ thông báo hoàn tất**, không thăm dò.
   - Workflow: Opus dịch → Sonnet chấm (hi/ne/my thêm Opus dịch ngược) → mục lỗi nặng sửa tối đa 2 vòng. Tác tử tự đọc hướng dẫn trong `translation/prompts/`.

6. **Ghi điểm và kiểm tra** khi cả hai workflow xong. Kết quả nằm trong `output-file` của từng thông báo (JSON, khoá `result` là danh sách lô). Ghép hai danh sách:
   ```bash
   python3 - <<'EOF'
   import json; out=[]
   for f in ["<output-file 1>", "<output-file 2>"]:
       out += json.load(open(f))["result"]
   json.dump([r for r in out if r], open("<W>/results.json", "w"), ensure_ascii=False)
   EOF
   python3 <W>/bunpo-analyzer/scripts/translation/qa.py --ws <W>/translation <L> --results <W>/results.json \
     --report <W>/translation/reports/<L>/<STAMP>.json --note "<WHO>, <số token từ thông báo>"
   cd <W> && tar czf /mnt/user-data/outputs/dot_<L>_<STAMP>_out.tgz translation/out/<L> translation/reports/<L> && md5sum /mnt/user-data/outputs/dot_<L>_<STAMP>_out.tgz
   ```
   Một workflow lỗi hẳn: các lô của nó sẽ thành `failed` và được làm lại ở đợt sau (tối đa 3 lần).

7. **Ghi về máy:** `device_commit_files` với `stagedPath=/mnt/user-data/outputs/dot_<L>_<STAMP>_out.tgz`, `devicePath=DEV\_tmp\dot_<L>_<STAMP>_out.tgz`. Sau khi lệnh đó trả về, mới gọi `device_bash`:
   ```bash
   cd "$HOME/mnt/Model bunpo" && T=bunpo-analyzer/scripts/translation
   md5sum _tmp/dot_<L>_<STAMP>_out.tgz                       # phải trùng md5 trên mây; khác thì commit lại
   tar xzf _tmp/dot_<L>_<STAMP>_out.tgz --overwrite
   python3 $T/check.py --ws translation <L> <các lô>            # xác nhận trên máy
   python3 $T/tm.py --ws translation apply-report translation/reports/<L>/<STAMP>.json --who <WHO>
   python3 $T/tm.py --ws translation release <L> --who <WHO>
   ```

8. **Báo cáo** (ngắn):
   - Tiến độ: `en: 22/101 lô đạt, 1 lô qa thấp, 0 lô lỗi` (đọc bảng `status`).
   - Điểm trung bình đợt, các mục `qa` thấp (id + lý do chính), lô lỗi.
   - Token đã dùng (cộng `subagent_tokens` của hai thông báo) và thời gian.
   - Gợi ý: "chạy tiếp đợt dịch <L>". Sau 3–5 đợt trong cùng cuộc trò chuyện, khuyên mở cuộc trò chuyện mới (tiến độ không mất).

9. **Ngôn ngữ đã xong** (`next` rỗng; lô `failed` đã hết lượt thì liệt kê):
   ```bash
   python3 $T/merge.py --ws translation <L>          # → translation/merged/grammar_text.<L>.json
   python3 $T/tm.py --ws translation release <L> --who <WHO>
   ```
   Báo: số mẫu đã gộp, số mục qa thấp, lô hỏng còn lại; gợi ý ngôn ngữ kế tiếp theo thứ tự en, ko, cn, tw, th, id → fr, de, es, pt, ru, pl → hi, ne, my.

## Xử lý sự cố

- Mất kết nối máy giữa chừng: kết quả vẫn ở `<W>` và `/mnt/user-data/outputs/dot_<L>_<STAMP>_out.tgz`; khi máy kết nối lại thì làm tiếp từ bước 7. Khoá tự hết hạn sau 3 giờ.
- `check.py` trên máy báo lỗi khác trên mây: không sửa tay; `apply-report` đã đánh dấu lô, đợt sau dịch lại.
- Lô `failed` mà điểm chấm cao (≥ 99) và lỗi đều giống nhau: có thể là `check.py` báo nhầm. Ghi rõ trong báo cáo để người dùng chuyển cho cuộc trò chuyện chính kiểm tra; không tự sửa `check.py`.
- Không sửa hướng dẫn trong `translation/prompts/`, bảng thuật ngữ hay văn phong trong lúc chạy đợt; muốn đổi thì làm ở cuộc trò chuyện chính.