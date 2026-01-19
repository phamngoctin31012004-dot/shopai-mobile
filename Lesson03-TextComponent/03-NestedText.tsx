import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * VÍ DỤ 3: TEXT LỒNG NHAU (NESTED TEXT)
 * 
 * MÔ TẢ:
 * Trong React Native, bạn có thể lồng nhiều Text component bên trong một Text component cha.
 * Mỗi Text con có thể có style riêng, tạo ra hiệu ứng "một phần text có style khác".
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - Highlight một từ/cụm từ quan trọng trong đoạn văn
 * - Tạo link trong đoạn text (một phần text có màu khác, có thể click)
 * - Hiển thị giá tiền: "Giá: 100.000đ" (số tiền đậm, màu đỏ)
 * - Hiển thị tên người dùng trong câu: "Xin chào, Nguyễn Văn A!" (tên đậm)
 * - Tạo text có nhiều màu sắc khác nhau trong cùng một dòng
 * 
 * LƯU Ý:
 * - Text component CHỈ có thể chứa Text component khác, KHÔNG thể chứa View
 * - Khi lồng Text, style của Text con sẽ kế thừa từ Text cha (trừ khi override)
 * - Cần thêm {' '} để tạo khoảng trắng giữa các Text con
 * - Text lồng nhau rất hữu ích để tạo text phong phú với nhiều style
 */

const NestedText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>3. Text Lồng Nhau (Nested Text)</Text>

      {/* Ví dụ 3.1: Text lồng nhau cơ bản */}
      <Text style={styles.description}>
        Ví dụ 3.1: Làm đậm một phần text trong đoạn văn
      </Text>
      <Text style={styles.normalParagraph}>
        Đây là text bình thường,{' '}
        <Text style={styles.boldPart}>đây là phần text đậm</Text>
        {' '}và đây lại là text bình thường.
      </Text>

      {/* Ví dụ 3.2: Text với nhiều style khác nhau */}
      <Text style={styles.description}>
        Ví dụ 3.2: Một đoạn text có nhiều phần với style khác nhau
      </Text>
      <Text style={styles.normalParagraph}>
        Trong câu này có{' '}
        <Text style={styles.redBoldText}>text màu đỏ đậm</Text>
        {', '}
        <Text style={styles.blueUnderlineText}>text màu xanh gạch chân</Text>
        {' và '}
        <Text style={styles.greenItalicText}>text màu xanh lá nghiêng</Text>
        .
      </Text>

      {/* Ví dụ 3.3: Tình huống thực tế - Hiển thị giá tiền */}
      <Text style={styles.description}>
        Ví dụ 3.3: Tình huống thực tế - Hiển thị giá tiền sản phẩm
      </Text>
      <Text style={styles.productInfo}>
        Giá: <Text style={styles.priceText}>299.000đ</Text>
      </Text>
      <Text style={styles.productInfo}>
        Giá gốc: <Text style={styles.originalPrice}>399.000đ</Text>
        {' '}
        <Text style={styles.discountPrice}>Giảm 25%</Text>
      </Text>

      {/* Ví dụ 3.4: Tình huống thực tế - Thông báo với tên người dùng */}
      <Text style={styles.description}>
        Ví dụ 3.4: Tình huống thực tế - Chào mừng người dùng
      </Text>
      <Text style={styles.welcomeText}>
        Xin chào, <Text style={styles.userName}>Nguyễn Văn A</Text>! 
        Chúc bạn một ngày tốt lành.
      </Text>

      {/* Ví dụ 3.5: Tình huống thực tế - Thông báo trạng thái */}
      <Text style={styles.description}>
        Ví dụ 3.5: Tình huống thực tế - Thông báo trạng thái đơn hàng
      </Text>
      <Text style={styles.statusText}>
        Trạng thái: <Text style={styles.successStatus}>Đã giao hàng</Text>
      </Text>
      <Text style={styles.statusText}>
        Trạng thái: <Text style={styles.pendingStatus}>Đang xử lý</Text>
      </Text>
      <Text style={styles.statusText}>
        Trạng thái: <Text style={styles.errorStatus}>Đã hủy</Text>
      </Text>

      {/* Ví dụ 3.6: Text lồng nhiều cấp */}
      <Text style={styles.description}>
        Ví dụ 3.6: Text lồng nhiều cấp (Text trong Text trong Text)
      </Text>
      <Text style={styles.normalParagraph}>
        Text cấp 1 -{' '}
        <Text style={styles.level2Text}>
          Text cấp 2 -{' '}
          <Text style={styles.level3Text}>Text cấp 3</Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 15,
    marginBottom: 8,
  },
  normalParagraph: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 15,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
  },
  boldPart: {
    fontWeight: 'bold',
    color: '#000',
  },
  redBoldText: {
    fontWeight: 'bold',
    color: '#FF3B30',
  },
  blueUnderlineText: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  greenItalicText: {
    color: '#34C759',
    fontStyle: 'italic',
  },
  // Tình huống thực tế - Giá tiền
  productInfo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF3B30',
  },
  originalPrice: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#34C759',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  // Tình huống thực tế - Chào mừng
  welcomeText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
  },
  userName: {
    fontWeight: 'bold',
    color: '#2196F3',
    fontSize: 18,
  },
  // Tình huống thực tế - Trạng thái
  statusText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  successStatus: {
    fontWeight: 'bold',
    color: '#34C759',
  },
  pendingStatus: {
    fontWeight: 'bold',
    color: '#FF9500',
  },
  errorStatus: {
    fontWeight: 'bold',
    color: '#FF3B30',
  },
  // Text lồng nhiều cấp
  level2Text: {
    color: '#007AFF',
    fontWeight: '600',
  },
  level3Text: {
    color: '#FF3B30',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default NestedText;

