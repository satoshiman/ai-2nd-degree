# AGENTS.md — Ghi chú khóa học AI Văn bằng 2

## Mục đích

Thư mục này dùng để ghi chú lại **toàn bộ chương trình học** của khóa AI văn bằng 2.
Mỗi buổi làm việc, người dùng sẽ yêu cầu agent tạo file ghi chú cho buổi học hôm đó.

## Cấu trúc thư mục

### Môn học (folder)

- Mỗi **môn học** là một folder ở root.
- Tên folder theo format: `<thứ tự 2 chữ số>-<slug>`
  - Ví dụ: `01-ai-intro`, `02-toan-cho-ai`, `03-ml-co-ban`
- Thứ tự đánh số tăng dần theo thứ tự môn học trong chương trình (`01`, `02`, `03`, ...).
- `<slug>` viết thường, không dấu, nối bằng gạch ngang `-`.
- Mỗi folder môn có một `README.md` chứa thông tin môn học: mã lớp, giảng viên, số tín chỉ, lịch học, thời gian.
- Mỗi folder môn có sub-folder `docs/` — nơi người dùng tự thêm tài liệu môn học (slide, PDF, đề thi...). Agent **không** đặt file ghi chú buổi học vào `docs/`.

### Buổi học (file)

- Mỗi **buổi học** là một file Markdown `.md` bên trong folder môn học.
- Tên file theo format: `<thứ tự 2 chữ số>-<dd>-<mm>-<ten-buoi-hoc>.md`
  - `<thứ tự>`: số thứ tự file trong môn học, tăng dần từ `01` — đếm các file hiện có để biết số tiếp theo.
  - `<dd>-<mm>`: ngày-tháng diễn ra buổi học (2 chữ số).
  - `<ten-buoi-hoc>`: slug không dấu của tên buổi học, nối bằng gạch ngang `-`.
  - Ví dụ: `01-27-10-buoi-1-gioi-thieu-ai.md`

Ví dụ cấu trúc đầy đủ:

```
ai-2nd-degree/
  01-ai-intro/
    01-27-10-buoi-1-gioi-thieu-ai.md
    02-03-11-buoi-2-lich-su-ai.md
  02-toan-cho-ai/
    01-10-11-buoi-1-dai-so-tuyen-tinh.md
  AGENTS.md
```

## Quy trình làm việc mỗi buổi

1. Người dùng yêu cầu tạo file ghi chú cho buổi học.
2. Xác định **môn học** (folder) và **buổi học**:
   - Nếu folder môn học chưa tồn tại → tạo mới với số thứ tự tiếp theo.
   - Đếm số file `.md` hiện có trong folder → suy ra số thứ tự file mới.
3. Tạo file theo format tên ở trên.
4. **Nếu thiếu thông tin** (tên môn, tên buổi học, ngày học, nội dung...) → **hỏi lại người dùng** trước khi tạo, không tự suy đoán.

## Quy ước nội dung

- Ghi chú bằng **tiếng Việt**, dùng Markdown.
- Ngôn ngữ trong giao tiếp với người dùng: tiếng Việt.
