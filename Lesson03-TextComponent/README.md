# Hướng Dẫn Học Text Component trong React Native

## 📚 Mục Lục

1. [Giới Thiệu](#giới-thiệu)
2. [Cấu Trúc Thư Mục](#cấu-trúc-thư-mục)
3. [Các Ví Dụ](#các-ví-dụ)
4. [Cách Sử Dụng](#cách-sử-dụng)
5. [Tổng Kết](#tổng-kết)

---

## 📖 Giới Thiệu

Thư mục này chứa các ví dụ chi tiết về **Text Component** trong React Native, được thiết kế đặc biệt cho mục đích dạy học. Mỗi ví dụ đều có:

- ✅ **Giải thích rõ ràng** bằng tiếng Việt
- ✅ **Tình huống sử dụng thực tế**
- ✅ **Code có comment chi tiết**
- ✅ **Ví dụ từ cơ bản đến nâng cao**

---

## 📁 Cấu Trúc Thư Mục

```
src/components/TextExamples/
├── 01-BasicText.tsx          # Text cơ bản
├── 02-TextStyles.tsx          # Text với các style
├── 03-NestedText.tsx          # Text lồng nhau
├── 04-TextAlignment.tsx      # Căn lề text
├── 05-TextTruncation.tsx     # Cắt text
├── 06-TextSpacing.tsx        # Khoảng cách text
├── 07-TextSelectable.tsx     # Text có thể chọn
├── 08-TextRealWorld.tsx      # Tình huống thực tế
├── index.tsx                 # File tổng hợp
└── README.md                 # File hướng dẫn này
```

---

## 📝 Các Ví Dụ

### 1. **01-BasicText.tsx** - Text Cơ Bản

**Mục đích:** Học cách sử dụng Text component đơn giản nhất.

**Nội dung:**
- Text đơn giản
- Text nhiều dòng
- Text với khoảng trắng
- Text với ký tự đặc biệt và emoji

**Tình huống sử dụng:**
- Hiển thị tiêu đề, nội dung
- Hiển thị thông báo, label
- Hiển thị thông tin người dùng

---

### 2. **02-TextStyles.tsx** - Text với các Style

**Mục đích:** Học cách tùy chỉnh giao diện text.

**Nội dung:**
- `fontSize`: Kích thước chữ
- `fontWeight`: Độ đậm
- `color`: Màu sắc
- `fontStyle`: Nghiêng
- `textDecorationLine`: Gạch chân, gạch ngang
- Kết hợp nhiều style

**Tình huống sử dụng:**
- Tiêu đề lớn, nhỏ
- Nhấn mạnh thông tin quan trọng
- Link, text đã xóa
- Trích dẫn, ghi chú

---

### 3. **03-NestedText.tsx** - Text Lồng Nhau

**Mục đích:** Học cách lồng nhiều Text component với style khác nhau.

**Nội dung:**
- Text lồng nhau cơ bản
- Nhiều style trong một Text
- Text lồng nhiều cấp

**Tình huống sử dụng:**
- Highlight từ/cụm từ quan trọng
- Hiển thị giá tiền (số tiền đậm, màu đỏ)
- Hiển thị tên người dùng trong câu
- Tạo text có nhiều màu sắc

---

### 4. **04-TextAlignment.tsx** - Căn Lề Text

**Mục đích:** Học cách căn lề text (trái, giữa, phải).

**Nội dung:**
- `textAlign: 'left'` - Căn trái
- `textAlign: 'center'` - Căn giữa
- `textAlign: 'right'` - Căn phải

**Tình huống sử dụng:**
- Tiêu đề căn giữa
- Số tiền, thời gian căn phải
- Danh sách sản phẩm với giá căn phải
- Thông báo căn giữa

---

### 5. **05-TextTruncation.tsx** - Cắt Text

**Mục đích:** Học cách giới hạn số dòng và cắt text.

**Nội dung:**
- `numberOfLines`: Giới hạn số dòng
- `ellipsizeMode`: Cách hiển thị dấu ba chấm
  - `'tail'` - Cắt ở cuối (mặc định)
  - `'head'` - Cắt ở đầu
  - `'middle'` - Cắt ở giữa

**Tình huống sử dụng:**
- Tiêu đề sản phẩm (giới hạn 2 dòng)
- Mô tả sản phẩm (giới hạn 3 dòng)
- URL, đường dẫn file (cắt ở giữa)
- Comment, review (giới hạn số dòng)

---

### 6. **06-TextSpacing.tsx** - Khoảng Cách Text

**Mục đích:** Học cách điều chỉnh khoảng cách trong text.

**Nội dung:**
- `lineHeight`: Khoảng cách giữa các dòng
- `letterSpacing`: Khoảng cách giữa các chữ cái
- Kết hợp cả hai

**Tình huống sử dụng:**
- Text dễ đọc hơn với lineHeight tối ưu
- Tiêu đề đẹp với letterSpacing
- Đoạn văn dài cần lineHeight lớn
- Logo, banner với letterSpacing rộng

---

### 7. **07-TextSelectable.tsx** - Text Có Thể Chọn

**Mục đích:** Học cách cho phép người dùng chọn và copy text.

**Nội dung:**
- `selectable = false` (mặc định) - Không thể chọn
- `selectable = true` - Có thể chọn và copy

**Tình huống sử dụng:**
- Mã đơn hàng, mã số
- Số điện thoại, email
- Link website
- Địa chỉ

---

### 8. **08-TextRealWorld.tsx** - Tình Huống Thực Tế

**Mục đích:** Tổng hợp tất cả kiến thức vào các tình huống thực tế.

**Nội dung:**
- Card sản phẩm
- Thông báo (success, error)
- Profile người dùng
- Thông tin đơn hàng
- Form input với label và error
- Badge và Tag

**Tình huống sử dụng:**
- Ứng dụng thương mại điện tử
- Ứng dụng quản lý đơn hàng
- Ứng dụng profile người dùng
- Form đăng ký, đăng nhập

---

## 🚀 Cách Sử Dụng

### Cách 1: Sử dụng tất cả ví dụ (Khuyến nghị)

```tsx
// App.tsx
import TextExamples from './src/components/TextExamples';

export default function App() {
  return <TextExamples />;
}
```

### Cách 2: Sử dụng từng ví dụ riêng lẻ

```tsx
// App.tsx
import { BasicText, TextStyles, NestedText } from './src/components/TextExamples';
import { View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <BasicText />
      <TextStyles />
      <NestedText />
    </ScrollView>
  );
}
```

### Cách 3: Import trực tiếp từ file

```tsx
// App.tsx
import BasicText from './src/components/TextExamples/01-BasicText';
import TextStyles from './src/components/TextExamples/02-TextStyles';

export default function App() {
  return (
    <View>
      <BasicText />
      <TextStyles />
    </View>
  );
}
```

---

## 📚 Tổng Kết

### Các Props Quan Trọng của Text Component

| Prop | Kiểu | Mặc định | Mô tả |
|------|------|----------|-------|
| `style` | StyleSheet | - | Style cho text |
| `numberOfLines` | number | - | Giới hạn số dòng |
| `ellipsizeMode` | 'tail' \| 'head' \| 'middle' \| 'clip' | 'tail' | Cách cắt text |
| `selectable` | boolean | false | Cho phép chọn text |
| `textAlign` | 'left' \| 'center' \| 'right' \| 'justify' | 'left' | Căn lề text |

### Các Style Quan Trọng

| Style | Kiểu | Mô tả |
|-------|------|-------|
| `fontSize` | number | Kích thước chữ (pixel) |
| `fontWeight` | 'normal' \| 'bold' \| '100'-'900' | Độ đậm |
| `color` | string | Màu sắc (tên màu hoặc hex) |
| `fontStyle` | 'normal' \| 'italic' | Kiểu chữ |
| `textDecorationLine` | 'none' \| 'underline' \| 'line-through' | Trang trí |
| `lineHeight` | number | Khoảng cách dòng (pixel) |
| `letterSpacing` | number | Khoảng cách chữ (pixel) |
| `textAlign` | 'left' \| 'center' \| 'right' \| 'justify' | Căn lề |

### Lưu Ý Quan Trọng

1. ✅ **Text component BẮT BUỘC** trong React Native (không dùng `<div>`, `<p>` như web)
2. ✅ **Text chỉ chứa Text**, không thể chứa View
3. ✅ **Nested Text** rất hữu ích để tạo text phong phú
4. ✅ **numberOfLines** phải là số nguyên dương
5. ✅ **selectable** chỉ nên dùng cho nội dung cần copy
6. ✅ **lineHeight** nên = fontSize * 1.2 đến 1.5 cho text dễ đọc

---

## 🎯 Bài Tập Thực Hành

Sau khi học xong các ví dụ, hãy thử làm các bài tập sau:

1. **Tạo card sản phẩm** với tiêu đề, giá, mô tả
2. **Tạo thông báo** với icon, tiêu đề, nội dung
3. **Tạo form** với label, input, error message
4. **Tạo profile** với tên, email, số điện thoại (có thể copy)
5. **Tạo danh sách đơn hàng** với mã đơn, trạng thái, giá

---

## 📞 Hỗ Trợ

Nếu có thắc mắc, hãy:
1. Đọc lại comment trong code
2. Xem lại ví dụ tương ứng
3. Thử chạy code và quan sát kết quả
4. Thử thay đổi các giá trị để hiểu rõ hơn

**Chúc bạn học tốt! 🎉**

