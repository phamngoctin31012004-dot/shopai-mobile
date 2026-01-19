import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * VÍ DỤ 1: TEXT CƠ BẢN
 * 
 * MÔ TẢ:
 * Đây là cách sử dụng Text component đơn giản nhất trong React Native.
 * Text component là component cơ bản để hiển thị văn bản trên màn hình.
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - Hiển thị tiêu đề, nội dung, mô tả
 * - Hiển thị thông báo, label cho các input
 * - Hiển thị thông tin người dùng, số liệu
 * 
 * LƯU Ý:
 * - Text component BẮT BUỘC phải có trong React Native (không thể dùng <div>, <p> như web)
 * - Text có thể chứa text khác bên trong (nested text)
 * - Mỗi Text component sẽ tự động xuống dòng nếu text quá dài
 */

const BasicText = () => {
  return (
    <View style={styles.container}>
      {/* Tiêu đề section */}
      <Text style={styles.sectionTitle}>1. Text Cơ Bản</Text>
      
      {/* Ví dụ 1.1: Text đơn giản nhất */}
      <Text style={styles.description}>
        Ví dụ 1.1: Text đơn giản nhất - chỉ cần đặt nội dung bên trong thẻ Text
      </Text>
      <Text style={styles.exampleText}>
        Xin chào! Đây là text cơ bản
      </Text>

      {/* Ví dụ 1.2: Text với nhiều dòng */}
      <Text style={styles.description}>
        Ví dụ 1.2: Text có thể tự động xuống dòng khi quá dài
      </Text>
      <Text style={styles.exampleText}>
        Đây là một đoạn text dài sẽ tự động xuống dòng khi nội dung vượt quá chiều rộng của màn hình. 
        React Native sẽ tự động xử lý việc xuống dòng cho bạn.
      </Text>

      {/* Ví dụ 1.3: Text với khoảng trắng và xuống dòng */}
      <Text style={styles.description}>
        Ví dụ 1.3: Text với nhiều khoảng trắng (chỉ hiển thị 1 khoảng trắng)
      </Text>
      <Text style={styles.exampleText}>
        Text    với    nhiều    khoảng    trắng    (chỉ    hiển    thị    1)
      </Text>

      {/* Ví dụ 1.4: Text với ký tự đặc biệt */}
      <Text style={styles.description}>
        Ví dụ 1.4: Text với ký tự đặc biệt và emoji
      </Text>
      <Text style={styles.exampleText}>
        Ký tự đặc biệt: @#$%^&*() và emoji: 😀 🎉 ✅ ❤️
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
    marginTop: 10,
    marginBottom: 5,
  },
  exampleText: {
    fontSize: 16,
    color: '#333',
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default BasicText;

