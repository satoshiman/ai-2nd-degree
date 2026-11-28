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
- Thuật ngữ kỹ thuật: ghi dạng `Tiếng Việt (English)` — vd: `Học máy (Machine Learning)`, `Lan truyền ngược (Backpropagation)`. Từ thông dụng viết luôn tiếng Anh — vd: `linear regression`, `gradient descent`.
- **Không** tự tạo quiz (` ```quiz `) trong file buổi học — chỉ tạo khi người dùng yêu cầu.

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

### Media (ảnh, file đính kèm)

- Link media dùng **path relative** từ file `.md` tới `assets/` ở root: file trong folder môn dùng `![alt](../assets/ten-anh.png)`. Relative path hoạt động đúng trong cả dev mode, export và `npm run validate` (từ mdsvr 2.8.1, fix [mdsvr#53](https://github.com/satoshiman/mdsvr/issues/53)).
- Export tự rewrite `../assets/...` thành `/ai-2nd-degree/assets/...` nên GitHub Pages hiển thị đúng.
- Path tuyệt đối `/assets/...` từ 2.8.1 cũng pass validate (target phải tồn tại trong docs root, thiếu báo `missing-asset`), nhưng repo đang dùng relative - giữ consistent.
- Ảnh dùng chung cho repo đặt trong `assets/` ở root; đặt tên file mô tả nội dung (vd `image-classification-cat.png`), không để `image.png`.
- Mỗi ảnh có alt text tiếng Việt mô tả nội dung + caption nguồn/tác giả/license bên dưới (nếu lấy từ nguồn ngoài — ưu tiên Wikimedia Commons license tự do).
- Có thể dùng URL ngoài trực tiếp cho ảnh Wikimedia Commons; ảnh do người dùng cung cấp thì lưu vào `assets/` rồi link relative.

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

### Hình ảnh

- Khi Mermaid không biểu diễn được nội dung (hình minh họa khái niệm, hình học, ảnh chụp thực tế...), tìm hình trên **Wikimedia Commons**: license tự do, cho phép hotlink trực tiếp.
- Quy trình: `web_search` tìm file trên `commons.wikimedia.org` → `webfetch` trang file để lấy URL ảnh trực tiếp trên `upload.wikimedia.org` → nhúng vào markdown.
- Cú pháp: `![Mô tả hình bằng tiếng Việt](https://upload.wikimedia.org/...)`. Alt text bắt buộc, mô tả nội dung hình.
- Ngay dưới hình thêm caption in nghiêng ghi nguồn + tác giả + license, vd: `*Nguồn: [tên tác giả](link trang file trên Commons), CC BY-SA 4.0*`.
- Ưu tiên SVG hoặc PNG; dùng URL thumb dạng `upload.wikimedia.org/thumb/.../NNNpx-tên-file` để giới hạn kích thước hiển thị.
- Không nhúng ảnh từ trang không rõ license; không hotlink trực tiếp kết quả Google Images hay trang bản quyền.

### Toán (LaTeX)

- Inline: `$E = mc^2$` — không có khoảng trắng sát dấu `$` (`$ x $` không render).
- Inline chứa ký tự clash với Markdown (`*`, `_`) → dùng dạng backtick: `` $`a_i * b_j`$ ``.
- Block: `$$...$$` hoặc code block ` ```math ` (bên trong ` ```math ` không cần `$$`).
- Render qua KaTeX — chỉ dùng math-mode commands (`\frac`, `\sqrt`, `\sum`, `\begin{pmatrix}`, Greek letters...).
- `$` literal: escape `\$` trong math, hoặc `<span>$</span>` ngoài math.

### Bảng (Table)

- Số ô trong header và mỗi hàng body phải **khớp đúng** số cột của dòng separator `|---|---|` – lệch thì bảng không render (ra text thường) hoặc lệch cột.
- Ô góc trái để trống thì viết `| |` (một pipe, ô trống), không viết `||` hay `|| |`.
- **Không** viết `|` trần bên trong `$...$` trong ô bảng – ký tự `|` bị parser tách thành cell delimiter. Dùng `\vert`, `\lvert`, `\rvert` (gạch đơn) và `\Vert`, `\lVert`, `\rVert` (gạch kép cho norm): `\vert f(x)\vert ^p`, `\Vert \mathbf{x}\Vert _2`.
- Verify bảng render đúng: `npm run export` rồi grep `<table>` trong `_html/public/.../index.html`.

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
- Quiz **render LaTeX** `$...$` trong `question`, `options`, `explanation` và `answer` của `self-check` (từ mdsvr 2.8.1) - viết công thức LaTeX như body. Lưu ý JSON strict nên phải escape backslash: `\\mathbf`, `\\sqrt`, `\\|`, `\\langle`...
- Distractor phải hợp lý (misconception phổ biến); không dùng "none of the above".
- Đáp án nằm trong source — chỉ dùng cho tự học, không cho kiểm tra bắt buộc.
