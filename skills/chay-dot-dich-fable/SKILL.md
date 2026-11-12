---
name: "chay-dot-dich-fable"
description: "Chạy một đợt dịch kho ngữ pháp Migii bằng chính Fable (không tác tử con) khi người dùng nhắn \"chạy tiếp đợt dịch fable\", có hoặc không kèm mã ngôn ngữ."
---

# Chạy một đợt dịch kho ngữ pháp bằng Fable (không tác tử con)

> Bản dùng với repo `migii-grammar-translation` (một repo duy nhất): các script dịch nằm ở `tools/` trong thư mục `Model bunpo`, không cần repo `bunpo-analyzer`.

Bản đơn của skill `chay-dot-dich`: chính cuộc trò chuyện này (model Fable) dịch, tự chấm và sửa 2 lô mỗi đợt, làm thẳng trên máy người dùng. **Không** gọi Agent / Workflow, không chuyển file lên mây.

Kế hoạch đầy đủ: `Model bunpo/ke-hoach-dich-kho-ngu-phap.md`; cấu trúc thư mục: `Model bunpo/translation/HUONG_DAN.md`. Tiến độ, khoá, kiểm tra và chấm điểm dùng chung với `chay-dot-dich` (hai skill chạy song song được trên hai ngôn ngữ khác nhau, đổi qua lại được giữa các đợt).

Lời nhắn "chạy tiếp đợt dịch fable …" đã là yêu cầu chạy: không hỏi lại. Mọi câu báo cho người dùng viết bằng tiếng Việt, ngắn gọn.

## Điều kiện (kiểm tra trước, thiếu thì dừng)

1. **Model.** Xem định danh model của phiên (dòng "Model" trong môi trường / phần định danh model của system prompt). Không chứa `fable`: báo "Skill này cần chọn model Fable ở ô chọn model rồi nhắn lại" và **dừng**, không dịch.
2. **Máy và thư mục.** Có công cụ `mcp__remote-devices__device_bash` và thư mục `Model bunpo` (trong shell máy: `$HOME/mnt/Model bunpo`). Thiếu thì nói rõ và dừng; thư mục chưa kết nối thì xin quyền một lần bằng `device_request_folder_access`.
3. Mỗi lần gọi `device_bash` là một shell mới, tối đa khoảng 180 giây: chia việc nhỏ. File nháp đặt ở `$HOME/fable_<L>/` (ngoài `mnt/`, người dùng không thấy), **không** đặt trong `translation/`. Không xoá file nào trong thư mục người dùng.

## Ký hiệu

`L` mã ngôn ngữ; `WHO` mã cuộc trò chuyện; `T=tools`; mọi lệnh chạy trong `cd "$HOME/mnt/Model bunpo"`; `N` (nháp) `= $HOME/fable_<L>`. Tên tiếng Anh của ngôn ngữ (`LANG_NAME`): en English, ko Korean, cn Simplified Chinese, tw Traditional Chinese (Taiwan), th Thai, id Indonesian, fr French, de German, es Spanish, pt Portuguese, ru Russian, pl Polish, hi Hindi, ne Nepali, my Burmese (Unicode).

## Các bước một đợt

1. **Mã cuộc trò chuyện.** Lần đầu: `WHO = fable-<L>-<yyyymmddHHMM>` (giờ UTC từ `date -u`); các đợt sau trong cùng cuộc trò chuyện dùng lại.

2. **Nhận khoá, chọn 2 lô:**
   ```bash
   cd "$HOME/mnt/Model bunpo" && T=tools
   python3 $T/tm.py --ws translation claim <L> --who <WHO>     # không có mã: claim --auto --who <WHO> (in ra mã)
   python3 $T/tm.py --ws translation next <L> --n 2
   date -u +%F; date -u +%Y%m%d-%H%M                            # DATE, STAMP
   mkdir -p $HOME/fable_<L>
   ```
   - `BUSY <L> <ai>` (mã thoát 2): cuộc trò chuyện khác đang giữ ngôn ngữ này. Báo người dùng, gợi ý ngôn ngữ khác, dừng.
   - `next` rỗng: ngôn ngữ đã xong, sang bước 8.
   - Báo một câu: đang dịch lô nào.

3. **Dịch từng lô** (làm xong lô 1 rồi mới sang lô 2). Làm đúng hướng dẫn `translation/prompts/translate.md` (đọc file này ở đợt đầu của cuộc trò chuyện), với `WS = translation`, `TOOLS = tools`, `LANG`, `LANG_NAME`, `BATCH`, `DATE`, `MODEL` = định danh model của phiên. Cụ thể:
   - Đọc `translation/style/<L>.md` (một lần mỗi cuộc trò chuyện), chạy `python3 $T/brief.py --ws translation <L> <B>` (thuật ngữ bắt buộc của lô), đọc nguồn `translation/source/<B>.json`. Nguồn dài thì in làm 2 lần (ví dụ bằng một đoạn Python in nửa đầu / nửa sau danh sách `items`).
   - Dịch từng mẫu; ghi từng phần 5–8 mẫu vào `$HOME/fable_<L>/<B>_partNN.json` bằng heredoc có dấu kết thúc riêng (`cat > … <<'FABLE_EOF'`), mỗi phần là danh sách `[{"id", "src_hash", "fields"}]` theo đúng khuôn trong `translate.md`. Chữ thật UTF-8, không `\u`.
   - Ghép bằng Python thành `translation/out/<L>/<B>.json`: `{"batch", "lang", "model", "prompt_ver": "2", "date", "items"}`, đúng thứ tự và đủ mẫu như nguồn.
   - `python3 $T/check.py --ws translation <L> <B>`: sửa mọi lỗi `x` (sửa tại chỗ bằng Python đọc rồi ghi lại file, không gõ lại cả file), xem cảnh báo `!` và sửa chỗ thật sự sai, chạy lại tới khi hết lỗi.

4. **Tự chấm lô** theo đúng `translation/prompts/judge.md` (thang MQM: điểm = 100 − 1×minor − 5×major − 25×critical; `qa = "fix"` khi có lỗi major / critical). Bắt buộc:
   - Chấm **sau khi** dịch xong cả lô, ở lượt riêng; **đọc lại** nguồn và `out/<L>/<B>.json` từ máy (in ra), không dựa vào trí nhớ lúc dịch.
   - Đóng vai người chấm độc lập, nghiêm: so từng trường từng mẫu với nguồn (ví dụ dịch từ câu tiếng Nhật `jp`), kiểm tra thuật ngữ theo `brief.py`.
   - Với hi, ne, my: với mỗi trường meaning / explain / notes và mỗi câu ví dụ, tự dịch ngược sang tiếng Việt (trong suy nghĩ) và so nghĩa với nguồn; lệch nghĩa là lỗi accuracy.
   - Ghi kết quả vào `$HOME/fable_<L>/judge_<B>.json`: `{"items": [{"id", "score", "qa": "ok"|"fix", "issues": [{"field", "category", "severity", "note", "fix"}]}], "summary"}`.

5. **Sửa** theo `translation/prompts/fix.md`, tối đa 2 vòng: mỗi vòng chỉ sửa các trường bị lỗi major / critical của mẫu `qa = "fix"` (sửa tại chỗ bằng Python, giữ nguyên các mẫu khác), chạy lại `check.py`, rồi chấm lại **chỉ** những mẫu đó (đọc lại từ file) và cập nhật `judge_<B>.json`. Còn `fix` sau 2 vòng thì giữ nguyên (qa.py sẽ ghi là `low`).

6. **Ghi điểm** khi xong cả 2 lô:
   ```bash
   cd "$HOME/mnt/Model bunpo" && T=tools
   python3 - <<'EOF'
   import json, os
   N = os.path.expanduser("~/fable_<L>"); out = []
   for b, rounds in [("<B1>", <số vòng sửa lô 1>), ("<B2>", <số vòng sửa lô 2>)]:
       j = json.load(open(f"{N}/judge_{b}.json", encoding="utf-8"))
       out.append({"batch": b, "judge": "claude-fable (tu cham)", "rounds": rounds, "items": j["items"],
                   "summary": j.get("summary", ""), "note": "fable, khong tac tu con"})
   json.dump(out, open(f"{N}/results_<STAMP>.json", "w", encoding="utf-8"), ensure_ascii=False)
   EOF
   python3 $T/qa.py --ws translation <L> --results $HOME/fable_<L>/results_<STAMP>.json \
     --report translation/reports/<L>/<STAMP>.json --note "<WHO>, fable tu cham"
   python3 $T/tm.py --ws translation apply-report translation/reports/<L>/<STAMP>.json --who <WHO>
   python3 $T/tm.py --ws translation release <L> --who <WHO>
   python3 $T/tm.py --ws translation status <L>
   ```

7. **Báo cáo** (ngắn): tiến độ (ví dụ `tw: 19/101 lô đạt, 0 lô lỗi`), điểm trung bình đợt (ghi rõ là tự chấm), các mẫu qa thấp (id + lý do chính), lô lỗi, thời gian đợt. **Lỗi nguồn** thấy trong lúc dịch/chấm (chữ Nhật gõ sai, gợi ý tiếng Việt lệch câu Nhật, ruby hỏng…): thêm dòng vào bảng mục 4 của `LOI_NGUON_BTV.md` (gốc thư mục) theo đúng cột và quy tắc chống trùng ghi ở đó, "Báo bởi" = `<L>`, ngay trong đợt; báo cáo chỉ nêu "thêm N lỗi nguồn (#id…)". Gợi ý "chạy tiếp đợt dịch fable <L>". Sau khoảng 3 đợt trong cùng cuộc trò chuyện, khuyên mở cuộc trò chuyện mới (chọn Fable; tiến độ không mất).

8. **Ngôn ngữ đã xong** (`next` rỗng; lô `failed` hết lượt thì liệt kê):
   ```bash
   python3 $T/merge.py --ws translation <L>
   python3 $T/tm.py --ws translation release <L> --who <WHO>
   ```
   Báo số mẫu đã gộp, số mục qa thấp, lô hỏng còn lại; gợi ý bước tiếp: commit và push các file của ngôn ngữ này (`translation/out/<L>`, `translation/manifest/<L>.csv`, `translation/reports/<L>`) cùng `LOI_NGUON_BTV.md`. Trước đó thêm một khối vào mục 5 "Nhật ký hoàn thành ngôn ngữ" của `LOI_NGUON_BTV.md` theo mẫu ở đó (gồm checklist việc chờ người quản lý: `publish_lang.py`, dịch bù, nhãn ngắn). **Không** soạn hay gửi tin nhắn cho người quản lý: file này thay cho tin nhắn.

## Xử lý sự cố

- Mất kết nối máy giữa chừng: lô đang làm dở được làm lại ở đợt sau; khoá tự hết hạn sau 3 giờ. Không ghi điểm cho lô chưa chấm xong.
- Sắp hết ngữ cảnh khi mới xong lô 1: ghi điểm riêng lô 1 (bước 6 với một lô), trả khoá, báo người dùng mở cuộc trò chuyện mới để làm tiếp.
- `check.py` báo lỗi mà chắc chắn là báo nhầm: để nguyên, ghi rõ trong báo cáo cho người dùng chuyển cuộc trò chuyện chính kiểm tra; không sửa `check.py`.
- Không sửa hướng dẫn trong `translation/prompts/`, bảng thuật ngữ, văn phong hay các script trong lúc chạy đợt.