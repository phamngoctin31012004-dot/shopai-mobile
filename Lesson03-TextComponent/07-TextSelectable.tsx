import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * VÍ DỤ 7: TEXT SELECTABLE (TEXT CÓ THỂ CHỌN)
 * 
 * MÔ TẢ:
 * selectable prop cho phép người dùng chọn và copy text trên màn hình.
 * Mặc định, text trong React Native KHÔNG thể chọn (selectable = false).
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - selectable = true: Cho phép chọn và copy
 *   + Mã số, mã đơn hàng, số điện thoại
 *   + Địa chỉ, link, email
 *   + Nội dung quan trọng cần copy
 * - selectable = false (mặc định): Không thể chọn
 *   + Tiêu đề, mô tả thông thường
 *   + Nội dung chỉ để đọc
 * 
 * LƯU Ý:
 * - selectable chỉ hoạt động trên một số platform (Android, iOS)
 * - Khi selectable = true, người dùng có thể long-press để chọn text
 * - Text được chọn có thể copy vào clipboard
 * - Nên chỉ dùng selectable cho nội dung cần copy (mã số, link, etc.)
 */

const TextSelectable = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>7. Text Selectable (Text Có Thể Chọn)</Text>

      {/* Ví dụ 7.1: Text không thể chọn (mặc định) */}
      <Text style={styles.description}>
        Ví dụ 7.1: Text không thể chọn (mặc định) - Long press không có tác dụng
      </Text>
      <View style={styles.textBox}>
        <Text style={styles.normalText}>
          Đây là text bình thường, không thể chọn và copy. 
          Đây là cách mặc định trong React Native.
        </Text>
      </View>

      {/* Ví dụ 7.2: Text có thể chọn */}
      <Text style={styles.description}>
        Ví dụ 7.2: Text có thể chọn (selectable = true) - Long press để chọn và copy
      </Text>
      <View style={styles.textBox}>
        <Text style={styles.selectableText} selectable>
          Đây là text có thể chọn. Hãy long-press (nhấn giữ) vào text này 
          để chọn và copy. Tính năng này rất hữu ích cho mã số, link, email.
        </Text>
      </View>

      {/* Ví dụ 7.3: Tình huống thực tế - Mã đơn hàng */}
      <Text style={styles.description}>
        Ví dụ 7.3: Tình huống thực tế - Mã đơn hàng (cần copy)
      </Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Mã đơn hàng:</Text>
        <Text style={styles.orderCode} selectable>
          ORD-2024-123456789
        </Text>
        <Text style={styles.hint}>Long-press để copy mã đơn hàng</Text>
      </View>

      {/* Ví dụ 7.4: Tình huống thực tế - Số điện thoại */}
      <Text style={styles.description}>
        Ví dụ 7.4: Tình huống thực tế - Số điện thoại (cần copy)
      </Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Hotline hỗ trợ:</Text>
        <Text style={styles.phoneNumber} selectable>
          1900 1234 5678
        </Text>
        <Text style={styles.hint}>Long-press để copy số điện thoại</Text>
      </View>

      {/* Ví dụ 7.5: Tình huống thực tế - Email */}
      <Text style={styles.description}>
        Ví dụ 7.5: Tình huống thực tế - Email (cần copy)
      </Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Email liên hệ:</Text>
        <Text style={styles.email} selectable>
          support@shopai.com
        </Text>
        <Text style={styles.hint}>Long-press để copy email</Text>
      </View>

      {/* Ví dụ 7.6: Tình huống thực tế - Link website */}
      <Text style={styles.description}>
        Ví dụ 7.6: Tình huống thực tế - Link website (cần copy)
      </Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Website:</Text>
        <Text style={styles.link} selectable>
          https://www.shopai.com/products/12345
        </Text>
        <Text style={styles.hint}>Long-press để copy link</Text>
      </View>

      {/* Ví dụ 7.7: Tình huống thực tế - Địa chỉ */}
      <Text style={styles.description}>
        Ví dụ 7.7: Tình huống thực tế - Địa chỉ (cần copy)
      </Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Địa chỉ giao hàng:</Text>
        <Text style={styles.address} selectable>
          123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh
        </Text>
        <Text style={styles.hint}>Long-press để copy địa chỉ</Text>
      </View>

      {/* Ví dụ 7.8: So sánh text có thể chọn và không thể chọn */}
      <Text style={styles.description}>
        Ví dụ 7.8: So sánh - Text có thể chọn vs không thể chọn
      </Text>
      <View style={styles.comparisonBox}>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonLabel}>Không thể chọn:</Text>
          <Text style={styles.comparisonText}>
            Đây là tiêu đề sản phẩm
          </Text>
        </View>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonLabel}>Có thể chọn:</Text>
          <Text style={styles.comparisonTextSelectable} selectable>
            Mã sản phẩm: SP-2024-001
          </Text>
        </View>
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
  textBox: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  normalText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  selectableText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    backgroundColor: '#E3F2FD',
    padding: 10,
    borderRadius: 5,
  },
  // Tình huống thực tế
  infoBox: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontWeight: '600',
  },
  orderCode: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976D2',
    fontFamily: 'monospace',
    marginBottom: 5,
    backgroundColor: '#E3F2FD',
    padding: 10,
    borderRadius: 5,
  },
  phoneNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginBottom: 5,
    backgroundColor: '#FFEBEE',
    padding: 10,
    borderRadius: 5,
  },
  email: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 5,
    backgroundColor: '#E3F2FD',
    padding: 10,
    borderRadius: 5,
    textDecorationLine: 'underline',
  },
  link: {
    fontSize: 14,
    color: '#007AFF',
    marginBottom: 5,
    backgroundColor: '#E3F2FD',
    padding: 10,
    borderRadius: 5,
    textDecorationLine: 'underline',
  },
  address: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 5,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
  },
  hint: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 5,
  },
  // Comparison
  comparisonBox: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  comparisonItem: {
    marginBottom: 15,
  },
  comparisonLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    fontWeight: '600',
  },
  comparisonText: {
    fontSize: 16,
    color: '#333',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
  },
  comparisonTextSelectable: {
    fontSize: 16,
    color: '#333',
    backgroundColor: '#E3F2FD',
    padding: 10,
    borderRadius: 5,
  },
});

export default TextSelectable;

