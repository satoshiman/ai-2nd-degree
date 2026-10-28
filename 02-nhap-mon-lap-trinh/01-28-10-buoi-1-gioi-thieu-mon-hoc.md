# Buổi 1 — Giới thiệu môn học

- **Ngày**: 28/10/2026
- **Môn**: Nhập môn Lập trình (IT001.G13.CN2.TTNT)
- **Giảng viên**: Phạm Thế Sơn

## Hình thức đánh giá

| Thành phần | Tỷ lệ |
|---|---|
| Quá trình | 20% |
| Thực hành | 30% |
| Cuối kỳ | 50% |

- **80% (Cuối kỳ + Thực hành)**: thi tại **cơ sở đào tạo**, thi hoàn toàn trên **giấy**.
- Đề thi bao gồm cả phần **cuối kỳ** và **thực hành**.

## Nộp bài

- Bài tập / bài làm nộp qua **elearning**: https://elearning.citd.edu.vn/mod/url/view.php?id=33914

## Tài liệu môn học

- Google Drive tài liệu: https://drive.google.com/drive/folders/1lt_5wzfoYgSEObsWI7tuIpIsOCjXez_u
- **Đề thi mẫu**: nằm trong folder Drive tài liệu ở trên.

## Phần mềm / công cụ lập trình

- **Online**: OnlineGDB — https://www.onlinegdb.com/
- **Offline**: Code::Blocks 20.03 (kèm MinGW) — https://sourceforge.net/projects/codeblocks/files/Binaries/20.03/Windows/codeblocks-20.03mingw-setup.exe
- Lưu ý: **phần mềm (IDE) đã có trình biên dịch bên trong** — bản cài `codeblocks-20.03mingw-setup.exe` cài kèm MinGW (trình biên dịch GCC cho Windows); OnlineGDB thì compiler chạy trên cloud.

## Nội dung buổi học

### Trình biên dịch (compiler)

- **Trình biên dịch** là công cụ chuyển đổi **mã nguồn** của chương trình thành **mã máy** có thể chạy trên máy tính.
- Môn học sử dụng ngôn ngữ **C++**.
- Trong lập trình C++, có nhiều trình biên dịch khác nhau:
  - GCC (GNU Compiler Collection)
  - Microsoft Visual C++
  - Intel C++ Compiler
  - Clang
  - ...

### IDE (Integrated Development Environment)

- **IDE** = môi trường phát triển tích hợp — phần mềm viết code **có sẵn trình biên dịch bên trong**.
- IDE dùng trong môn: **Code::Blocks**
- Dùng **VS Code cũng được**, nhưng **không khuyến khích** vì có tích hợp AI gợi ý/viết code — Code::Blocks **bắt buộc tự viết** code, tốt hơn cho việc học.
- Video hướng dẫn cài đặt: https://youtu.be/FVJHK9NLh1Q
- Video xử lý **lỗi tạo Project không chạy được**: https://youtu.be/03bIbRWvQik

### Chương trình C++ đầu tiên — Hello World

```cpp
#include <stdio.h>
using namespace std;

int main()
{
    printf("Hello World");

    return 0;
}
```

### Các kiểu dữ liệu cơ sở có sẵn

#### 1. Kiểu số nguyên (Integer types)

Lưu số nguyên (không có phần thập phân). Kích thước và miền giá trị phụ thuộc compiler/máy, thường gặp:

| Kiểu | Kích thước (thường) | Miền giá trị (signed) |
|---|---|---|
| `short` | 2 bytes | −32,768 → 32,767 |
| `int` | 4 bytes | ~−2,1 tỷ → ~2,1 tỷ |
| `long` | 4 hoặc 8 bytes | tùy hệ điều hành |
| `long long` | 8 bytes | ~±9,2 × 10¹⁸ |

- Thêm `unsigned` trước kiểu → chỉ lưu số **không âm**, miền dương gấp đôi: `unsigned int` (0 → ~4,2 tỷ).
- Mặc định các kiểu là `signed` (có âm/dương).

```cpp
int a = 10;
unsigned int b = 4000000000;
long long c = 9000000000000;
```

#### 2. Kiểu số thực (Floating-point types)

Lưu số có phần thập phân, theo chuẩn IEEE 754 (có sai số làm tròn).

| Kiểu | Kích thước | Độ chính xác |
|---|---|---|
| `float` | 4 bytes | ~6–7 chữ số thập phân |
| `double` | 8 bytes | ~15–16 chữ số thập phân |
| `long double` | 8/16 bytes | cao hơn (tùy compiler) |

```cpp
float x = 3.14f;      // nhớ hậu tố f
double y = 3.14159265358979;
```

- Thường dùng `double` vì chính xác hơn; `float` khi cần tiết kiệm bộ nhớ.

#### 3. Kiểu ký tự (Character types)

- `char` — 1 byte, lưu **một ký tự** theo bảng mã ASCII (`'A'` = 65, `'a'` = 97). Thực chất là số nguyên → có thể cộng trừ, so sánh.
- `wchar_t`, `char16_t`, `char32_t` — ký tự rộng hơn cho Unicode.
- Viết ký tự bằng **nháy đơn** `'A'`, khác chuỗi nháy kép `"A"`.

```cpp
char ch = 'A';
cout << ch;      // A
cout << ch + 1;  // 66 (vì char là số)
```

#### 4. Kiểu boolean

- `bool` — chỉ 2 giá trị: `true` / `false`, kích thước 1 byte.
- Quy đổi: `0` → `false`, mọi giá trị **khác 0** → `true`.
- Dùng cho cờ hiệu, điều kiện, kết quả so sánh.

```cpp
bool isValid = true;
bool ok = (5 > 3);   // true
```

#### 5. Kiểu void

- `void` = "không có kiểu" — dùng cho hàm **không trả về giá trị**, hoặc hàm không nhận tham số.

```cpp
void hello() {
    printf("Hello");
}
```

#### 6. Kiểu nullptr

- `nullptr` — literal biểu diễn **con trỏ null** (trỏ tới "không gì"), chuẩn C++11, an toàn hơn `NULL` / `0`.
- Sẽ học kỹ ở **bài con trỏ**.

#### 7. Kiểu auto

- `auto` (C++11) — compiler **tự suy ra kiểu** từ giá trị khởi tạo, **bắt buộc phải khởi tạo ngay** khi khai báo.
- Vẫn là kiểu cố định sau khi suy ra (không đổi kiểu được), khác biến động kiểu trong Python/JS.

```cpp
auto a = 10;      // a là int
auto b = 3.14;    // b là double
auto c = 'x';     // c là char
```
