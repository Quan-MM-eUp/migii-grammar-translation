# Dịch kho ngữ pháp Migii JLPT

Không gian làm việc chung để dịch kho ngữ pháp (khoảng 1.500 mẫu, 101 lô) từ tiếng Việt sang 15 ngôn ngữ, chạy bằng Claude (Cowork). Kế hoạch đầy đủ: `ke-hoach-dich-kho-ngu-phap.md`. Cấu trúc thư mục và các file: `translation/HUONG_DAN.md`.

## Cài đặt (một lần)

1. Nhờ người quản lý mời vào repo private này.
2. Clone vào thư mục **đúng tên `Model bunpo`** (các skill dựa vào tên này):

   ```powershell
   cd C:\Users\<tên>\Desktop
   git clone https://github.com/Quan-MM-eUp/migii-grammar-translation.git "Model bunpo"
   ```

3. Cài Python 3.10 trở lên. Các script dịch trong `tools/` chỉ dùng thư viện chuẩn, không cần cài thêm gì.
4. Cài 2 skill vào tài khoản Claude: tải lên `skills/chay-dot-dich/SKILL.md` và `skills/chay-dot-dich-fable/SKILL.md` ở phần cài đặt skill.
5. Trong Claude desktop (Cowork): kết nối thư mục `Model bunpo`.

## Chạy dịch

Mở một cuộc trò chuyện mới có kết nối thư mục `Model bunpo`, nhắn một trong hai:

| Lệnh | Cách chạy | Ghi chú |
|---|---|---|
| `chạy tiếp đợt dịch fable <mã>` | Chính cuộc trò chuyện (chọn model **Fable**) dịch, tự chấm, sửa; 2 lô mỗi đợt | Không tạo tác tử con |
| `chạy tiếp đợt dịch <mã>` | Workflow nhiều tác tử: Opus dịch, Sonnet chấm; khoảng 20 lô mỗi đợt | Tốn nhiều hạn mức hơn |

Mỗi đợt xong, Claude báo tiến độ. Sau khoảng 3 đợt nên mở cuộc trò chuyện mới (tiến độ lưu trong file, không mất). Xem tiến độ: `python tools/tm.py --ws translation status`.

## Làm việc song song (quan trọng)

- **Mỗi ngôn ngữ chỉ một người dịch** (bảng dưới). Khoá ngôn ngữ (`translation/locks/`) chỉ có tác dụng trên từng máy, không đồng bộ qua GitHub.
- **Mỗi buổi:** `git pull` → chạy các đợt dịch → commit **chỉ file của ngôn ngữ mình** → `git push`:

  ```powershell
  cd "C:\Users\<tên>\Desktop\Model bunpo"
  git pull
  # ... chạy dịch ...
  git add translation/out/<mã> translation/manifest/<mã>.csv translation/reports/<mã>
  git commit -m "dich <mã>: <số> lo"
  git pull --rebase
  git push
  ```

- **Không sửa phần dùng chung:** `translation/source/`, `glossary/`, `style/`, `prompts/`, `particles/`, `ui/`, `tools/`, `skills/`. Thấy lỗi thì báo người quản lý.
- **Dịch xong một ngôn ngữ:** báo người quản lý. Người quản lý chạy `publish_lang.py <mã>` để đưa vào kho (gồm dịch bù `translation/patches/` và nhãn ngắn `translation/labels/`).

## Phân công và tiến độ

Cập nhật bảng khi nhận / xong ngôn ngữ.

| Mã | Ngôn ngữ | Người dịch | Trạng thái (11/11/2026) |
|---|---|---|---|
| en | Tiếng Anh | Quân | Xong, đã đưa vào kho |
| ko | Tiếng Hàn | Quân | Xong, đã đưa vào kho |
| id | Tiếng Indonesia | Quân | Xong, đã đưa vào kho |
| tw | Tiếng Trung phồn thể (Đài Loan) | Quân | 29/101 lô (ưu tiên) |
| cn | Tiếng Trung giản thể | Quân | 45/101 lô |
| my | Tiếng Miến Điện | | 32/101 lô |
| th | Tiếng Thái | | Chưa bắt đầu |
| fr | Tiếng Pháp | | Chưa bắt đầu |
| de | Tiếng Đức | | Chưa bắt đầu |
| es | Tiếng Tây Ban Nha | | Chưa bắt đầu |
| pt | Tiếng Bồ Đào Nha | | Chưa bắt đầu |
| ru | Tiếng Nga | | Chưa bắt đầu |
| pl | Tiếng Ba Lan | | Chưa bắt đầu |
| hi | Tiếng Hindi | | Chưa bắt đầu |
| ne | Tiếng Nepal | | Chưa bắt đầu |

## Dành cho người quản lý

- Bản gốc của script dịch nằm trong repo `bunpo-analyzer-module` (`scripts/translation/`), clone vào `Model bunpo/bunpo-analyzer` (thư mục này không đưa lên repo này). Sửa script ở đó, rồi chạy `python tools/sync_from_module.py` để chép sang `tools/` và commit. `--check` chỉ báo lệch.
- Đưa một ngôn ngữ đã dịch xong vào kho: `python scripts/translation/publish_lang.py <mã>` trong `bunpo-analyzer` (cần cài module), rồi commit `grammar/grammar_text.<mã>.json`, `translation/labels/`, `translation/patches/`.
- `skills/`: bản skill cho đồng nghiệp (dùng `tools/`). Skill trong tài khoản người quản lý có thể vẫn dùng đường dẫn `bunpo-analyzer/scripts/translation`.

