# Báo cáo vòng thử C3 (04/11/2026)

## Thiết lập

- 30 mẫu (6 mẫu mỗi cấp N5–N1, có đủ loại trường: bảng so sánh, lỗi sai, trường tiếng Nhật, cách nối, tên mẫu), chia 2 lô: `p01` 27,5 nghìn ký tự, `p02` 20,6 nghìn ký tự.
- 3 ngôn ngữ: en, ko, my.
- 2 cấu hình:
  - **A:** Opus dịch, Sonnet chấm.
  - **B:** Sonnet dịch, Opus chấm.
- Mỗi lô: dịch (tự sửa đến khi qua `check.py`) → chấm MQM (my có dịch ngược) → mục lỗi nặng thì sửa 1 vòng → chấm lại.
- Để so công bằng, bản dịch A được Opus chấm thêm một lượt.
- Bản dịch, nguồn và kết quả chấm: `translation/pilot/`.

## Chất lượng (cùng một model chấm: Opus)

| Ngôn ngữ | A – Opus dịch (bản cuối) | B – Sonnet dịch, lần đầu | B – bản cuối (sau 1 vòng sửa) |
|---|---|---|---|
| en | 99,7 điểm · 30/30 đạt · 0 lỗi nặng · 9 lỗi nhẹ | 99,1 · 28/30 · 2 nặng · 18 nhẹ | 99,2 · 29/30 · 1 nặng |
| ko | 99,4 · 29/30 · 1 nặng · 13 nhẹ | 98,2 · 25/30 · 5 nặng · 29 nhẹ | 99,0 · 30/30 |
| my | 99,4 · 29/30 · 1 nặng · 14 nhẹ | 98,2 · 25/30 · 6 nặng · 24 nhẹ | 99,0 · 30/30 |

- Hai cấu hình đều tốt. **Opus dịch tốt hơn rõ:** ít hơn một nửa lỗi nhẹ, ít lỗi nặng hơn.
- **Sonnet dịch bỏ qua lỗi `check.py`:** để nguyên tiếng Nhật 3 trường của my. Opus dịch hết.
- Lần chấm đầu của A (Sonnet chấm): en 28/30, ko 30/30, my 28/30 đạt. Sau 1 vòng sửa: 30/30 cả ba.
- **Sonnet chấm bỏ sót** một lỗi nặng mà Opus chấm bắt được (ko #900). Sonnet chấm hay bắt bẻ thuật ngữ dù bản dịch đã dùng dạng được chấp nhận; đã sửa trong hướng dẫn chấm v2.
- **Loại lỗi còn lại:** đổi thì / thêm giới tính trong câu ví dụ; một câu ví dụ dịch theo lời dịch tiếng Việt sai thay vì theo câu Nhật; vài nhãn bảng chưa tự nhiên.

## Tiêu thụ (cấu hình A, trung bình mỗi lô khoảng 24 nghìn ký tự)

| Bước | Token đầu vào mới | Token đọc lại từ cache | Token đầu ra |
|---|---|---|---|
| Dịch (Opus) | khoảng 230 nghìn | khoảng 2,15 triệu | khoảng 95 nghìn (my khoảng 160 nghìn) |
| Chấm (Sonnet) | khoảng 130 nghìn | khoảng 1,5 triệu | khoảng 22 nghìn |
| Sửa + chấm lại | khoảng 30 nghìn | khoảng 0,3 triệu | khoảng 3 nghìn |

- Theo số đo của workflow: **khoảng 350 nghìn token cho mỗi lô.** Cả vòng thử khoảng 5,2 triệu token (12 lô × 2 cấu hình + lượt chấm thêm).
- **Thời gian:** 6 lô mất khoảng 26 phút trong 1 workflow (mỗi workflow chạy tối đa 2 tác tử cùng lúc). Hai workflow chạy song song không chậm đi.
- Hướng dẫn v2 giảm token: tác tử chỉ đọc bảng thuật ngữ rút gọn cho lô (khoảng 7 KB thay vì 54 KB) và ghi file ít lượt hơn.

## Quyết định

1. **Opus dịch, Sonnet chấm.** Riêng hi, ne, my: thêm một lượt dịch ngược và chấm độc lập bằng Opus (phiên mới, không thấy quá trình dịch).
2. **Cỡ lô giữ khoảng 20 nghìn ký tự** (101 lô/ngôn ngữ).
3. **Mỗi đợt khoảng 20 lô**, chạy bằng 2 workflow song song (mỗi workflow khoảng 10 lô) → khoảng 45–60 phút/đợt.
4. **Bắt đầu với 2 cuộc trò chuyện song song**, tăng lên 3 nếu hạn mức cho phép.
5. **Hướng dẫn v2** (`translation/prompts/`):
   - Dòng sửa lỗi chỉ có chữ Nhật thì chép nguyên.
   - Câu ví dụ giữ thì, ngôi, số; không thêm giới tính.
   - Bắt buộc hết lỗi `check.py`; nếu cho là báo nhầm thì phải nêu rõ.
   - Dùng `brief.py` để đọc bảng thuật ngữ rút gọn.
   - File nháp để ngoài thư mục dịch.
   - Hướng dẫn chấm: dạng `accept` là đúng.
6. **Kho:**
   - Bỏ 23 trường `meaning` chứa câu ví dụ (lỗi kho).
   - 10 trường viết bằng tiếng Anh được dịch từ tiếng Anh.
   - Danh sách nằm trong `docs/kho_loi_du_lieu.md` mục 9.

## Ước lượng toàn bộ

- 1.515 lô, khoảng 76 đợt. Với 2 cuộc trò chuyện song song: khoảng **38 đợt cho mỗi cuộc**, tổng thời gian chạy khoảng 30–40 giờ, rải theo hạn mức.
- Khoảng 530 triệu token (đầu vào mới + đầu ra). Hạn mức Cowork tính theo tài khoản nên **cần đo thực tế**: xem phần trăm hạn mức đã dùng sau đợt đầu tiên của en.
