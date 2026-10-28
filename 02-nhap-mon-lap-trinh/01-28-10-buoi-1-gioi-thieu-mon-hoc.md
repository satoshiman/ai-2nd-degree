---
title: "Buổi 1 — Giới thiệu môn học"
description: "Ghi chú buổi 1 môn Nhập môn Lập trình: hình thức đánh giá, công cụ lập trình, trình biên dịch, IDE và các kiểu dữ liệu cơ sở trong C++."
date: 2026-10-28
---

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

> [!WARNING]
> **80% (Cuối kỳ + Thực hành)**: thi tại **cơ sở đào tạo**, thi hoàn toàn trên **giấy**. Đề thi bao gồm cả phần **cuối kỳ** và **thực hành**.

## Nộp bài

- Bài tập / bài làm nộp qua **elearning**: https://elearning.citd.edu.vn/mod/url/view.php?id=33914

> [!WARNING]
> **Deadline: tối 3/11** — nộp **1 trong 2 loại**:
>
> - Làm bài tập
> - Viết lại code mẫu bằng cách xem video

## Tài liệu môn học

- Google Drive tài liệu: https://drive.google.com/drive/folders/1lt_5wzfoYgSEObsWI7tuIpIsOCjXez_u
- **Đề thi mẫu**: nằm trong folder Drive tài liệu ở trên.

## Phần mềm / công cụ lập trình

- **Online**: OnlineGDB — https://www.onlinegdb.com/
- **Offline**: Code::Blocks 20.03 (kèm MinGW) — https://sourceforge.net/projects/codeblocks/files/Binaries/20.03/Windows/codeblocks-20.03mingw-setup.exe

> [!NOTE]
> **Phần mềm (IDE) đã có trình biên dịch bên trong** — bản cài `codeblocks-20.03mingw-setup.exe` cài kèm MinGW (trình biên dịch GCC cho Windows); OnlineGDB thì compiler chạy trên cloud.

## Nội dung buổi học

### Trình biên dịch (compiler)

- **Trình biên dịch** là công cụ chuyển đổi **mã nguồn** của chương trình thành **mã máy** có thể chạy trên máy tính.

```mermaid
flowchart LR
    src["📝 Mã nguồn (.cpp)"] --> comp["⚙️ Trình biên dịch"] --> bin["💻 Mã máy"]
```

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

> [!WARNING]
> Dùng **VS Code cũng được**, nhưng **không khuyến khích** vì có tích hợp AI gợi ý/viết code — Code::Blocks **bắt buộc tự viết** code, tốt hơn cho việc học.
- Video hướng dẫn cài đặt: https://youtu.be/FVJHK9NLh1Q
- Video xử lý **lỗi tạo Project không chạy được**: https://youtu.be/03bIbRWvQik

Phím tắt Code::Blocks:

| Phím tắt | Chức năng |
|---|---|
| `Ctrl + F9` | Build & Run (biên dịch và chạy chương trình) |

> [!WARNING]
> Bấm `F9` (không kèm `Ctrl`) **không chạy** chương trình — phải dùng `Ctrl + F9`.

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

| Từ khóa | Mô tả | Kích thước | Phạm vi |
|---|---|---|---|
| `short` | Nguyên có kích thước nhỏ hơn int | 2 byte | −32,768 đến 32,767 |
| `unsigned short` | Nguyên không dấu có kích thước nhỏ hơn int | 2 byte | 0 đến 65,535 |
| **`int`** ⭐ | Nguyên phổ biến | 4 byte | −2,147,483,648 đến 2,147,483,647 |
| `unsigned` | Nguyên không dấu | 4 byte | 0 đến 4,294,967,295 |
| `long` | Nguyên | 4 byte | −2,147,483,648 đến 2,147,483,647 |
| `unsigned long` | Nguyên không dấu | 4 byte | 0 đến 4,294,967,295 (32 bit) hoặc 0 đến 18,446,744,073,709,551,615 (64 bit) |
| `long long` | Nguyên mở rộng | 8 byte | −9,223,372,036,854,775,808 đến 9,223,372,036,854,775,807 |
| `unsigned long long` | Nguyên không dấu | 8 byte | 0 đến 18,446,744,073,709,551,615 |

- Thêm `unsigned` trước kiểu → chỉ lưu số **không âm**, miền dương gấp đôi: `unsigned int` (0 → ~4,2 tỷ).
- Mặc định các kiểu là `signed` (có âm/dương).
- Công thức miền giá trị cho kiểu nguyên $n$ bit:
  - **Có dấu**: $-2^{n-1}$ đến $2^{n-1}-1$
  - **Không dấu** (`unsigned`): $0$ đến $2^n-1$

```cpp
int a = 10;
unsigned int b = 4000000000;
long long c = 9000000000000;
```

#### 2. Kiểu số thực (Floating-point types)

Lưu số có phần thập phân, theo chuẩn IEEE 754 (có sai số làm tròn).

| Kiểu | Mô tả | Kích thước | Độ chính xác |
|---|---|---|---|
| **`float`** ⭐ | Kiểu số thực đơn | 4 bytes | ~6–7 chữ số thập phân |
| **`double`** ⭐ | Kiểu số thực kép | 8 bytes | ~15–16 chữ số thập phân |
| `long double` | Số thực kép mở rộng | 8/16 bytes | cao hơn (tùy compiler) |

> [!NOTE]
> **`float`** và **`double`** là 2 kiểu **dùng thường xuyên** nhất.

Cách viết số thực:

```cpp
float a = 9.5f;
float b = -9.5f;
float c = 9.f;      // 9.
float d = 0.9f;
float e = .9f;      // .9
double f = 9.5e6;   // 9.5 x 10^6
double g = 9.5e-6;  // 9.5 x 10^-6
```

- Dạng `e`: `9.5e6` tương đương $9.5 \times 10^{6}$, `9.5e-6` tương đương $9.5 \times 10^{-6}$ (cách viết lũy thừa bên toán).

```cpp
float x = 3.14f;      // nhớ hậu tố f
double y = 3.14159265358979;
```

> [!CAUTION]
> Hậu tố `f` chỉ dùng với literal có **dấu chấm thập phân**: `10.0f`, `10.f` ✅ — còn `10f` ❌ báo lỗi `unable to find numeric literal operator 'operator""f'` (vì `10` là số nguyên). Với số nguyên cứ viết `float a = 10;` — int tự chuyển sang float.

- **Không thêm `f`** (vd: `float x = 3.14;`) vẫn chạy bình thường, **không lỗi**:
  - `3.14` không `f` là **double** (8 byte) → gán vào `float` phải cắt bớt còn 4 byte → mất chút độ chính xác, compiler đôi khi warning.
  - `3.14f` là **float ngay từ đầu** → đúng kiểu, không cần ép.
  - Với bài tập môn học thì viết `float x = 3.14;` vẫn OK.

> [!TIP]
> Thường dùng `double` vì chính xác hơn; chỉ dùng `float` khi cần tiết kiệm bộ nhớ.

#### 3. Kiểu ký tự (Character types)

- Kiểu **`char`** được sử dụng để biểu diễn **một ký tự** trong bảng mã ASCII (`'A'` = 65, `'a'` = 97).
- **Bảng mã ASCII** là bảng mã ký tự được sử dụng phổ biến trong các hệ thống máy tính.
- Thực chất `char` là số nguyên → có thể cộng trừ, so sánh.
- `wchar_t`, `char16_t`, `char32_t` — ký tự rộng hơn cho Unicode.
- Viết ký tự bằng **nháy đơn** `'A'`, khác chuỗi nháy kép `"A"`.

| Từ khóa | Kích thước | Phạm vi |
|---|---|---|
| **`char`** ⭐ | 1 byte | −128 đến 127 hoặc 0 đến 255 (tùy compiler) |
| `signed char` | 1 byte | −128 đến 127 |
| `unsigned char` | 1 byte | 0 đến 255 |

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

> [!NOTE]
> `nullptr` sẽ được học kỹ ở **bài con trỏ**.

#### 7. Kiểu auto

- `auto` (C++11) — compiler **tự suy ra kiểu** từ giá trị khởi tạo, **bắt buộc phải khởi tạo ngay** khi khai báo.
- Vẫn là kiểu cố định sau khi suy ra (không đổi kiểu được), khác biến động kiểu trong Python/JS.

```cpp
auto a = 10;      // a là int
auto b = 3.14;    // b là double
auto c = 'x';     // c là char
```

### typedef

- Từ khóa **`typedef`** dùng để tạo một **bí danh (alias)** cho một kiểu dữ liệu đã có.
- Không tạo kiểu mới — chỉ đặt **tên gọi khác** cho kiểu hiện có.

Cú pháp:

```cpp
typedef <Kiểu_hiện_có> <tên_mới>;
```

- `<Kiểu_hiện_có>`: `int`, `float`, `double`, **kiểu tự định nghĩa**…

```cpp
typedef int myInt;
typedef double myDouble;

myInt x = 10;         // tương đương int x = 10;
myDouble y = 36.9;    // tương đương double y = 36.9;
```

### Biến (variable)

- **Biến** dùng để **lưu trữ dữ liệu** trong quá trình thực hiện chương trình.
- Mỗi biến có **kiểu dữ liệu cụ thể** (kiểu số nguyên, số thực, ký tự…).
- Giá trị của biến có thể **thay đổi** trong quá trình thực thi chương trình.

Cú pháp khai báo:

```cpp
<kiểu dữ liệu> <tên biến>;              // khai báo
<kiểu dữ liệu> <tên biến> = <giá trị>;  // khai báo + khởi tạo
```

Trong đó:

- `<kiểu dữ liệu>`: `int`, `long`, `float`, `double`…
- `<tên biến>`: tên muốn đặt cho biến

```cpp
int a;            // khai báo biến a kiểu int
int b = 10;       // khai báo và khởi tạo b = 10
double pi = 3.14;
```

Có thể khai báo **nhiều biến cùng kiểu** trên một dòng, ngăn cách bởi dấu phẩy:

```cpp
int tuoiVo = 30, tuoiChong = 32, tuoiCon = 5;
```

#### Quy tắc đặt tên biến

- Chỉ chứa: **chữ cái** (`a-z`, `A-Z`), **chữ số** (`0-9`) và **dấu gạch dưới** (`_`)
- **Không** được bắt đầu bằng chữ số
- **Không** trùng với từ khóa C++ (`int`, `return`, `if`, `while`…)
- Không chứa khoảng trắng, ký tự đặc biệt (`-`, `+`, `@`…)
- **Phân biệt hoa thường**: `diem` và `Diem` là 2 biến khác nhau

```cpp
int diem;         // ✅ hợp lệ
int _count;       // ✅ hợp lệ
int diemToan2;    // ✅ hợp lệ
int 2diem;        // ❌ bắt đầu bằng chữ số
int diem thi;     // ❌ chứa khoảng trắng
int int;          // ❌ trùng từ khóa
```

> [!TIP]
> Đặt tên **có ý nghĩa** (`diemToan`, `soLuong` thay vì `a`, `x1`) và thống nhất một kiểu viết: `camelCase` hoặc `snake_case`.

### Xuất – Nhập giá trị

**Xuất giá trị** (in ra màn hình):

- `cout` trong C++ (cần `#include <iostream>`, `using namespace std;`)
- Hàm `printf()` trong C (cần `#include <stdio.h>`)

**Nhập giá trị** (đọc từ bàn phím):

- `cin` trong C++
- Hàm `scanf()` trong C

```cpp
int a;
cin >> a;                  // C++: nhập giá trị vào a
scanf("%d", &a);           // C: nhập vào a (nhớ dấu & trước tên biến)
```

Ví dụ chương trình đầy đủ (C++):

```cpp
#include <iostream>

using namespace std;

int main()
{
    int tuoi = 2;

    cin >> tuoi;                        // nhập tuổi từ bàn phím (ghi đè giá trị 2)

    cout << "Tuoi: " << tuoi << endl;   // in ra giá trị vừa nhập
    return 0;
}
```

#### In giá trị — `cout`

- `cout` thuộc **thư viện chuẩn C++** (`iostream`).

Cú pháp:

```cpp
cout << "Hello world!" << biến << hoặc_hàm << ... << endl;
```

Trong đó:

- `<<` là **toán tử xuất dữ liệu** — có thể nối nhiều giá trị trên một dòng `cout`.
- `endl` (nếu có) — **xuống dòng** sau khi xuất xong giá trị.

```cpp
int tuoiVo = 30, tuoiChong = 32, tuoiCon;

cout << tuoiCha << endl;                  // in 1 biến rồi xuống dòng
cout << tuoiVo << tuoiChong << endl;      // in nhiều biến liên tiếp
cout << "a = " << a;                      // trộn chuỗi + biến
```

#### Nhập giá trị — `cin`

- `cin` thuộc **thư viện chuẩn C++** (`iostream`) — dùng để nhập giá trị cho các biến.

Cú pháp:

```cpp
cin >> biến_1 >> biến_2 >> ... >> biến_N;
```

Trong đó:

- `>>` là **toán tử nhập** — có thể nhập nhiều biến liên tiếp (ngăn cách bởi khoảng trắng hoặc Enter khi gõ).

```cpp
int tuoiVo, tuoiChong;
cin >> tuoiVo >> tuoiChong;   // nhập 2 giá trị cùng lúc: 30 32
```

#### Xuất giá trị — hàm `printf()`

- `printf` thuộc thư viện **`stdio.h`** (standard input/output) **trong C** — dùng được trong C++.

Cú pháp:

```cpp
printf("Ký hiệu Định dạng", biến_1, biến_2, ...);
```

Trong đó:

- `"Định dạng"` chỉ định **cách hiển thị giá trị** của các biến — mỗi `%...` khớp với một biến phía sau, theo đúng thứ tự.

| Ký hiệu định dạng | Giải thích | Kiểu dữ liệu |
|---|---|---|
| `%u` | Số nguyên không dấu | `unsigned`, `unsigned short`, `unsigned long` |
| `%d`, `%ld` | Số nguyên có dấu | `int`, `short`, `long` |
| `%f`, `%lf` | Số thực | `float`, `double` |
| `%c` | Ký tự | `char` |
| `%s` | Chuỗi | `char*`, `char[]`, `String` (C++) |

```cpp
int tuoi = 30;
double diem = 9.5;
char lop = 'A';

printf("Tuoi: %d\n", tuoi);          // Tuoi: 30
printf("Diem: %f\n", diem);          // Diem: 9.500000
printf("Diem: %.2f\n", diem);        // Diem: 9.50 — %.2f: 2 chữ số thập phân
printf("%c co %d tuoi", lop, tuoi);  // A co 30 tuoi — nhiều biến theo thứ tự
```

#### 2 cách in ra cùng nội dung — `cout` vs `printf`

```cpp
int tuoiVo = 30, tuoiChong = 32, tuoiCon;

// Cách 1: cout (C++)
cout << "Tuoi vo: " << tuoiVo << ", Tuoi chong: " << tuoiChong << endl;

// Cách 2: printf (C)
printf("Tuoi vo: %d, Tuoi chong: %d", tuoiVo, tuoiChong);
```

- `cout`: nối chuỗi và biến bằng `<<`, `endl` xuống dòng.
- `printf`: đặt `%d` vào **đúng vị trí** trong chuỗi, biến truyền phía sau theo thứ tự; dùng `\n` để xuống dòng.

#### Thư viện chứa gì?

| Thư viện | Chứa | Ghi chú |
|---|---|---|
| `<stdio.h>` | `printf()`, `scanf()` | Thư viện chuẩn của **C** — dùng được trong C++ |
| `<iostream>` | `cout`, `cin`, `endl` | Thư viện chuẩn **C++**, nằm trong namespace `std` |

> [!WARNING]
> Quên `#include` đúng thư viện → compiler báo lỗi **không nhận diện được** `cout`/`printf` (vd: `'cout' was not declared in this scope`).

```cpp
#include <iostream>   // cout, cin, endl — C++
#include <stdio.h>    // printf, scanf — C
using namespace std;  // để viết cout thay vì std::cout
```

#### `using namespace std;` là gì?

- `cout`, `cin`, `endl`… nằm trong **namespace `std`** (standard) — "khu vực tên" chứa các thành phần thư viện chuẩn.
- Không có dòng này → phải viết đầy đủ `std::cout`, `std::cin`, `std::endl` (`::` = toán tử phạm vi).
- Có `using namespace std;` → viết gọn `cout`, `cin`, `endl`.

```cpp
// Không dùng using:
std::cout << "Hello" << std::endl;

// Có using namespace std; → viết gọn:
cout << "Hello" << endl;
```

> [!NOTE]
> Với project lớn, dùng `using namespace std;` toàn cục dễ **xung đột tên** — người ta thường viết `std::cout` hoặc chỉ `using std::cout;`. Trong phạm vi môn học thì `using namespace std;` là chấp nhận được.

### Toán tử số học

| Toán tử | Giải thích | Ví dụ |
|---|---|---|
| `+` | Cộng | `x = 10 + 3;` → 13 |
| `-` | Trừ | `x = 10 - 3;` → 7 |
| `*` | Nhân | `x = 10 * 3;` → 30 |
| `/` | Chia (số thực) | `x = 10 / 3.0;` → 3.333… |
| `/` | Chia lấy phần nguyên | `x = 10 / 3;` → **3** |
| `%` | Chia lấy dư | `x = 10 % 3;` → **1** |

> [!WARNING]
> `10 / 3` và `10 / 3.0` cho kết quả **khác nhau**: chia 2 số nguyên → kết quả nguyên (bỏ phần dư); muốn kết quả thực thì ít nhất 1 vế phải là số thực.

## Tự kiểm tra

```quiz
{
  "title": "Buổi 1 — Ôn nhanh",
  "mode": "exam",
  "questions": [
    {
      "type": "single",
      "question": "Trình biên dịch (compiler) làm nhiệm vụ gì?",
      "options": [
        "Chuyển đổi mã nguồn thành mã máy",
        "Chạy chương trình trên cloud",
        "Gợi ý và tự viết code"
      ],
      "answer": 0,
      "explanation": "Compiler chuyển **mã nguồn** (ví dụ `.cpp`) thành **mã máy** chạy được trên máy tính."
    },
    {
      "type": "single",
      "question": "Trong Code::Blocks, phím tắt nào dùng để biên dịch và chạy chương trình?",
      "options": ["`F9`", "`Ctrl + F9`", "`Ctrl + F5`"],
      "answer": 1,
      "explanation": "`Ctrl + F9` = Build & Run. Bấm `F9` riêng **không** chạy chương trình."
    },
    {
      "type": "single",
      "question": "Kiểu nào nên dùng mặc định để lưu số thực trong C++ vì độ chính xác cao hơn?",
      "options": ["`float`", "`double`", "`long long`"],
      "answer": 1,
      "explanation": "`double` (8 byte) chính xác ~15–16 chữ số thập phân, cao hơn `float` (~6–7 chữ số)."
    },
    {
      "type": "true-false",
      "question": "`unsigned int` có thể lưu số âm.",
      "answer": false,
      "explanation": "`unsigned` chỉ lưu số **không âm** (0 đến ~4,2 tỷ với 4 byte); bù lại miền dương gấp đôi so với `int`."
    },
    {
      "type": "single",
      "question": "Literal `9.5e6` tương đương giá trị nào?",
      "options": ["9.5 × 10⁶", "9.5 × 10⁻⁶", "9.5 × 6"],
      "answer": 0,
      "explanation": "`e6` nghĩa là ×10⁶ (dạng lũy thừa bên toán); `e-6` mới là ×10⁻⁶."
    },
    {
      "type": "single",
      "question": "Cách viết literal `float` nào **sai**?",
      "options": ["`10.0f`", "`10.f`", "`10f`"],
      "answer": 2,
      "explanation": "`10f` lỗi — hậu tố `f` chỉ đi với literal có dấu chấm thập phân (`10` là số nguyên)."
    },
    {
      "type": "multiple",
      "question": "Tên biến nào **hợp lệ** trong C++?",
      "options": [
        "`diemToan`",
        "`_count`",
        "`2diem`",
        "`diem thi`"
      ],
      "answer": [0, 1],
      "explanation": "Tên biến không được bắt đầu bằng chữ số (`2diem` ❌) và không chứa khoảng trắng (`diem thi` ❌). `_count` hợp lệ vì được bắt đầu bằng `_`."
    },
    {
      "type": "true-false",
      "question": "`diem` và `Diem` là cùng một biến trong C++.",
      "answer": false,
      "explanation": "C++ **phân biệt hoa thường** — `diem` và `Diem` là 2 biến khác nhau."
    },
    {
      "type": "multiple",
      "question": "Những phát biểu nào đúng về `auto` (C++11)?",
      "options": [
        "Compiler tự suy ra kiểu từ giá trị khởi tạo",
        "Bắt buộc phải khởi tạo ngay khi khai báo",
        "Có thể đổi kiểu của biến sau khi khai báo"
      ],
      "answer": [0, 1],
      "explanation": "`auto` suy kiểu **một lần** lúc khởi tạo và kiểu cố định sau đó — không giống biến động kiểu trong Python/JS."
    },
    {
      "type": "single",
      "question": "`typedef int myInt;` có tác dụng gì?",
      "options": [
        "Tạo một kiểu dữ liệu hoàn toàn mới tên `myInt`",
        "Tạo bí danh `myInt` cho kiểu `int` đã có",
        "Khai báo biến `myInt` kiểu `int`"
      ],
      "answer": 1,
      "explanation": "`typedef` chỉ đặt **tên gọi khác** (alias) cho kiểu hiện có — `myInt x = 10;` tương đương `int x = 10;`."
    },
    {
      "type": "single",
      "question": "Muốn dùng `cout` và `cin` thì phải `#include` thư viện nào?",
      "options": ["`<stdio.h>`", "`<iostream>`", "`<math.h>`"],
      "answer": 1,
      "explanation": "`cout`/`cin`/`endl` thuộc `<iostream>` (C++). `<stdio.h>` chứa `printf`/`scanf` (C)."
    },
    {
      "type": "single",
      "question": "Ký hiệu định dạng nào dùng để in biến `int` bằng `printf()`?",
      "options": ["`%f`", "`%c`", "`%d`"],
      "answer": 2,
      "explanation": "`%d` (hoặc `%ld`) in số nguyên có dấu; `%f` cho số thực, `%c` cho ký tự, `%s` cho chuỗi."
    },
    {
      "type": "true-false",
      "question": "Dùng `scanf(\"%d\", a)` (không có `&`) để nhập số nguyên vào biến `a` là đúng.",
      "answer": false,
      "explanation": "`scanf` cần **địa chỉ** của biến → phải viết `scanf(\"%d\", &a);` — thiếu `&` là lỗi rất phổ biến."
    },
    {
      "type": "single",
      "question": "Biểu thức `10 / 3` trong C++ cho kết quả bao nhiêu?",
      "options": ["3.333…", "3", "3.0"],
      "answer": 1,
      "explanation": "Chia 2 số **nguyên** → kết quả nguyên (bỏ phần dư). Muốn ra 3.333… phải viết `10 / 3.0` (ít nhất 1 vế là số thực)."
    },
    {
      "type": "single",
      "question": "Biểu thức `10 % 3` cho kết quả bao nhiêu?",
      "options": ["3", "1", "0.333…"],
      "answer": 1,
      "explanation": "`%` là toán tử **chia lấy dư**: 10 chia 3 được 3 dư **1**."
    },
    {
      "type": "single",
      "question": "Trong `cout << \"Hello\" << x << endl;`, `endl` có tác dụng gì?",
      "options": [
        "Kết thúc chương trình",
        "Xuống dòng sau khi xuất xong giá trị",
        "Ngăn cách các biến"
      ],
      "answer": 1,
      "explanation": "`endl` (end line) in ký tự xuống dòng; `<<` mới là toán tử nối giá trị xuất ra."
    },
    {
      "type": "true-false",
      "question": "`cin >> a >> b;` có thể nhập giá trị cho 2 biến `a` và `b` cùng lúc.",
      "answer": true,
      "explanation": "`>>` là toán tử nhập — có thể nối nhiều biến; khi gõ, các giá trị ngăn cách bởi khoảng trắng hoặc Enter."
    },
    {
      "type": "single",
      "question": "Dòng `using namespace std;` có tác dụng gì?",
      "options": [
        "Cho phép viết `cout` thay vì `std::cout`",
        "Nạp thư viện `iostream` vào chương trình",
        "Bắt buộc phải có để chương trình chạy được"
      ],
      "answer": 0,
      "explanation": "`cout`/`cin`/`endl` nằm trong namespace `std` → dòng này cho viết gọn. Nạp thư viện là việc của `#include <iostream>` — vẫn chạy được nếu viết `std::cout`."
    },
    {
      "type": "single",
      "question": "Đâu là cách in giá trị biến `tuoi` ra màn hình bằng `printf`?",
      "options": [
        "`printf(tuoi);`",
        "`printf(\"Tuoi: %d\", tuoi);`",
        "`printf << \"Tuoi: \" << tuoi;`"
      ],
      "answer": 1,
      "explanation": "`printf` nhận chuỗi định dạng chứa `%d` rồi truyền biến phía sau theo thứ tự; cú pháp `<<` là của `cout`."
    }
  ]
}
```
