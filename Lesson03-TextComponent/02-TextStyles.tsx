import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * VÍ DỤ 2: TEXT VỚI CÁC STYLE KHÁC NHAU
 * 
 * MÔ TẢ:
 * Text component hỗ trợ nhiều thuộc tính style để tùy chỉnh giao diện.
 * Các style phổ biến: fontSize, fontWeight, color, fontStyle, textDecorationLine
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - fontSize: Điều chỉnh kích thước chữ (tiêu đề lớn, nội dung nhỏ)
 * - fontWeight: Làm đậm text (tiêu đề, nhấn mạnh thông tin quan trọng)
 * - color: Thay đổi màu sắc (màu cảnh báo, màu thành công, màu chủ đạo)
 * - fontStyle: Làm nghiêng text (trích dẫn, ghi chú)
 * - textDecorationLine: Gạch chân, gạch ngang (link, text đã xóa)
 * 
 * LƯU Ý:
 * - fontSize nhận giá trị số (đơn vị: pixel)
 * - fontWeight: 'normal' | 'bold' | '100' | '200' ... '900'
 * - color: có thể dùng tên màu ('red', 'blue') hoặc mã hex ('#FF0000')
 * - textDecorationLine: 'none' | 'underline' | 'line-through' | 'underline line-through'
 */

const TextStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>2. Text với các Style khác nhau</Text>

      {/* fontSize */}
      <Text style={styles.description}>
        fontSize: Điều chỉnh kích thước chữ (12, 14, 16, 18, 20, 24, 28, 32...)
      </Text>
      <Text style={styles.smallText}>Text nhỏ (fontSize: 12)</Text>
      <Text style={styles.normalText}>Text bình thường (fontSize: 16)</Text>
      <Text style={styles.largeText}>Text lớn (fontSize: 24)</Text>
      <Text style={styles.extraLargeText}>Text rất lớn (fontSize: 32)</Text>

      {/* fontWeight */}
      <Text style={styles.description}>
        fontWeight: Độ đậm của chữ ('normal', 'bold', hoặc '100'-'900')
      </Text>
      <Text style={styles.normalWeight}>Text bình thường (normal)</Text>
      <Text style={styles.boldWeight}>Text đậm (bold)</Text>
      <Text style={styles.extraBoldWeight}>Text rất đậm (900)</Text>

      {/* color */}
      <Text style={styles.description}>
        color: Màu sắc của text (tên màu hoặc mã hex)
      </Text>
      <Text style={styles.blackText}>Màu đen (black)</Text>
      <Text style={styles.blueText}>Màu xanh dương (blue)</Text>
      <Text style={styles.redText}>Màu đỏ (red)</Text>
      <Text style={styles.greenText}>Màu xanh lá (green)</Text>
      <Text style={styles.customColorText}>Màu tùy chỉnh (#FF6B6B)</Text>

      {/* fontStyle */}
      <Text style={styles.description}>
        fontStyle: Kiểu chữ ('normal' hoặc 'italic')
      </Text>
      <Text style={styles.normalStyle}>Text bình thường (normal)</Text>
      <Text style={styles.italicStyle}>Text nghiêng (italic)</Text>

      {/* textDecorationLine */}
      <Text style={styles.description}>
        textDecorationLine: Trang trí text ('underline', 'line-through')
      </Text>
      <Text style={styles.underlineText}>Text gạch chân (underline)</Text>
      <Text style={styles.lineThroughText}>Text gạch ngang (line-through)</Text>
      <Text style={styles.bothDecorationText}>
        Text vừa gạch chân vừa gạch ngang
      </Text>

      {/* Kết hợp nhiều style */}
      <Text style={styles.description}>
        Kết hợp nhiều style cùng lúc:
      </Text>
      <Text style={styles.combinedStyle}>
        Text lớn, đậm, màu xanh, nghiêng, gạch chân
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
  // fontSize examples
  smallText: {
    fontSize: 12,
    color: '#333',
    marginBottom: 5,
  },
  normalText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  largeText: {
    fontSize: 24,
    color: '#333',
    marginBottom: 5,
  },
  extraLargeText: {
    fontSize: 32,
    color: '#333',
    marginBottom: 10,
  },
  // fontWeight examples
  normalWeight: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#333',
    marginBottom: 5,
  },
  boldWeight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  extraBoldWeight: {
    fontSize: 16,
    fontWeight: '900',
    color: '#333',
    marginBottom: 10,
  },
  // color examples
  blackText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  blueText: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 5,
  },
  redText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 5,
  },
  greenText: {
    fontSize: 16,
    color: 'green',
    marginBottom: 5,
  },
  customColorText: {
    fontSize: 16,
    color: '#FF6B6B',
    marginBottom: 10,
  },
  // fontStyle examples
  normalStyle: {
    fontSize: 16,
    fontStyle: 'normal',
    color: '#333',
    marginBottom: 5,
  },
  italicStyle: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 10,
  },
  // textDecorationLine examples
  underlineText: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#333',
    marginBottom: 5,
  },
  lineThroughText: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#333',
    marginBottom: 5,
  },
  bothDecorationText: {
    fontSize: 16,
    textDecorationLine: 'underline line-through',
    color: '#333',
    marginBottom: 10,
  },
  // Combined styles
  combinedStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
});

export default TextStyles;

