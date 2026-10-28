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

## Format Markdown mdsvr hỗ trợ

Ghi chú được serve bằng mdsvr — trong file buổi học dùng các format sau.

### Frontmatter

Mỗi file `.md` bắt đầu bằng YAML frontmatter:

```yaml
---
title: "Tiêu đề trang"            # bắt buộc — <title>, og:title
description: "Mô tả một câu."     # bắt buộc — meta description
date: 2026-10-28                  # ngày học — datePublished, RSS
---
```

Các field tùy chọn khác: `seoTitle`, `image`, `imageAlt`, `author`, `dateModified`, `noindex`.

### Heading

- Luôn bắt đầu bằng H1 (`# Tiêu đề`).
- Không nhảy cấp heading (H1 → H2 → H3, không H1 → H3).
- Heading phải mô tả nội dung, không đặt kiểu `## Section 1`.

### Link

- Chỉ dùng relative path: `[Tên](./trang-khac)`.
- Không ghi đuôi `.md` trong link.
- Link tới folder, không link tới `README` (`[Môn](./01-ai-intro)`).
- Anchor `#...` phải khớp đúng heading hiện có.

### Callout

Dùng GitHub-style (mdsvr render thành khối đẹp):

```markdown
> [!NOTE]      <!-- thông tin bổ sung -->
> [!TIP]       <!-- mẹo / lời khuyên -->
> [!WARNING]   <!-- cảnh báo quan trọng -->
> [!CAUTION]   <!-- rủi ro, hậu quả xấu -->
```

Không dùng `:::note`, `:::warning`, `:::tip`, `:::danger`.

### Mermaid

- Dùng code block ` ```mermaid `, một diagram một block.
- Flowchart bắt buộc khai báo direction: `flowchart TD` hoặc `flowchart LR`.
- Node ID chỉ chứa chữ/số/underscore (không `-`, `.`, `()`).
- Label có khoảng trắng phải bọc ngoặc kép: `A["My Label"]`; subgraph phải có ID: `subgraph myid["Label"]`.
- sequenceDiagram: khai báo tất cả `participant` trước khi viết message.
- Không hardcode màu/style; dùng emoji để thể hiện ý nghĩa ngữ nghĩa.
- 19 loại diagram hỗ trợ: `flowchart`, `sequenceDiagram`, `classDiagram`, `stateDiagram-v2`, `erDiagram`, `gantt`, `journey`, `gitGraph`, `mindmap`, `pie`, `timeline`, `kanban`, `quadrantChart`, `sankey-beta`, `xychart-beta`, `block-beta`, `architecture-beta`, `packet-beta`, `requirementDiagram`. Chọn loại phù hợp, không mặc định `flowchart`.

### Toán (LaTeX)

- Inline: `$E = mc^2$` — không có khoảng trắng sát dấu `$` (`$ x $` không render).
- Inline chứa ký tự clash với Markdown (`*`, `_`) → dùng dạng backtick: `` $`a_i * b_j`$ ``.
- Block: `$$...$$` hoặc code block ` ```math ` (bên trong ` ```math ` không cần `$$`).
- Render qua KaTeX — chỉ dùng math-mode commands (`\frac`, `\sqrt`, `\sum`, `\begin{pmatrix}`, Greek letters...).
- `$` literal: escape `\$` trong math, hoặc `<span>$</span>` ngoài math.

### Quiz

- Code block ` ```quiz ` chứa một JSON object (strict JSON — không comment, không trailing comma).
- Field quiz: `id` (tùy chọn), `title`, `mode` = `"exam"` (trả lời hết rồi chấm) hoặc `"practice"` (chấm từng câu).
- Loại câu hỏi (`type`):
  - `single` — `options` (≥2), `answer` = index 0-based (number).
  - `multiple` — `options` (≥2), `answer` = mảng index, chọn đúng toàn bộ mới tính điểm.
  - `true-false` — `answer` = boolean.
  - `self-check` — `answer` = chuỗi markdown (đáp án mẫu), học viên tự chấm.
- `explanation` (tùy chọn): giải thích sau khi chấm — viết lý do đúng/sai, không chỉ đáp án.
- Inline markdown hoạt động trong `question`, `options`, `explanation`, `answer` của `self-check`; raw HTML bị strip.
- Distractor phải hợp lý (misconception phổ biến); không dùng "none of the above".
- Đáp án nằm trong source — chỉ dùng cho tự học, không cho kiểm tra bắt buộc.
