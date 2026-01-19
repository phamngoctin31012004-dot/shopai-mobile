import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * VÍ DỤ 4: TEXT ALIGNMENT (CĂN LỀ TEXT)
 * 
 * MÔ TẢ:
 * textAlign cho phép bạn căn lề text trong Text component: trái, giữa, phải, hoặc justify.
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - textAlign: 'left' (mặc định): Căn trái - dùng cho hầu hết nội dung
 * - textAlign: 'center': Căn giữa - dùng cho tiêu đề, logo, thông báo quan trọng
 * - textAlign: 'right': Căn phải - dùng cho số tiền, thời gian, số liệu
 * - textAlign: 'justify': Căn đều hai bên - dùng cho đoạn văn dài (ít dùng)
 * 
 * LƯU Ý:
 * - textAlign chỉ hoạt động khi Text component có chiều rộng cố định hoặc flex
 * - Nếu Text component tự động co giãn theo nội dung, textAlign sẽ không có tác dụng
 * - Thường kết hợp với width hoặc flex để căn lề hiệu quả
 */

const TextAlignment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>4. Text Alignment (Căn Lề Text)</Text>

      {/* Ví dụ 4.1: Căn trái (mặc định) */}
      <Text style={styles.description}>
        Ví dụ 4.1: textAlign: 'left' - Căn trái (mặc định)
      </Text>
      <View style={styles.alignmentBox}>
        <Text style={styles.leftAlign}>
          Text này được căn trái. Đây là cách căn lề mặc định trong React Native.
        </Text>
      </View>

      {/* Ví dụ 4.2: Căn giữa */}
      <Text style={styles.description}>
        Ví dụ 4.2: textAlign: 'center' - Căn giữa (thường dùng cho tiêu đề)
      </Text>
      <View style={styles.alignmentBox}>
        <Text style={styles.centerAlign}>
          Text này được căn giữa. Thường dùng cho tiêu đề hoặc thông báo quan trọng.
        </Text>
      </View>

      {/* Ví dụ 4.3: Căn phải */}
      <Text style={styles.description}>
        Ví dụ 4.3: textAlign: 'right' - Căn phải (thường dùng cho số liệu, thời gian)
      </Text>
      <View style={styles.alignmentBox}>
        <Text style={styles.rightAlign}>
          Text này được căn phải. Thường dùng cho số tiền, thời gian, số liệu.
        </Text>
      </View>

      {/* Ví dụ 4.4: Tình huống thực tế - Tiêu đề căn giữa */}
      <Text style={styles.description}>
        Ví dụ 4.4: Tình huống thực tế - Tiêu đề màn hình căn giữa
      </Text>
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>Trang Chủ</Text>
        <Text style={styles.headerSubtitle}>Chào mừng bạn đến với ứng dụng</Text>
      </View>

      {/* Ví dụ 4.5: Tình huống thực tế - Danh sách với số liệu căn phải */}
      <Text style={styles.description}>
        Ví dụ 4.5: Tình huống thực tế - Danh sách sản phẩm với giá căn phải
      </Text>
      <View style={styles.productListBox}>
        <View style={styles.productItem}>
          <Text style={styles.productName}>Áo thun nam</Text>
          <Text style={styles.productPrice}>299.000đ</Text>
        </View>
        <View style={styles.productItem}>
          <Text style={styles.productName}>Quần jean nữ</Text>
          <Text style={styles.productPrice}>599.000đ</Text>
        </View>
        <View style={styles.productItem}>
          <Text style={styles.productName}>Giày thể thao</Text>
          <Text style={styles.productPrice}>1.299.000đ</Text>
        </View>
      </View>

      {/* Ví dụ 4.6: Tình huống thực tế - Thông báo lỗi căn giữa */}
      <Text style={styles.description}>
        Ví dụ 4.6: Tình huống thực tế - Thông báo lỗi căn giữa
      </Text>
      <View style={styles.errorBox}>
        <Text style={styles.errorText}>⚠️ Không thể kết nối đến server</Text>
        <Text style={styles.errorSubtext}>Vui lòng kiểm tra kết nối internet</Text>
      </View>
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
  // Alignment boxes
  alignmentBox: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  leftAlign: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
  },
  centerAlign: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  rightAlign: {
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
  },
  // Tình huống thực tế - Header
  headerBox: {
    backgroundColor: '#E3F2FD',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976D2',
    textAlign: 'center',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  // Tình huống thực tế - Product list
  productListBox: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  productName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    textAlign: 'left',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF3B30',
    textAlign: 'right',
  },
  // Tình huống thực tế - Error message
  errorBox: {
    backgroundColor: '#FFEBEE',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFCDD2',
    marginBottom: 10,
  },
  errorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D32F2F',
    textAlign: 'center',
    marginBottom: 5,
  },
  errorSubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default TextAlignment;

