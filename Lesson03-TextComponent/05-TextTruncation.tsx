import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * VÍ DỤ 5: TEXT TRUNCATION (CẮT TEXT)
 * 
 * MÔ TẢ:
 * Khi text quá dài, bạn có thể giới hạn số dòng hiển thị và cách cắt text bằng:
 * - numberOfLines: Giới hạn số dòng hiển thị
 * - ellipsizeMode: Cách hiển thị dấu ba chấm khi text bị cắt
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - numberOfLines: Giới hạn mô tả sản phẩm, tiêu đề dài, comment
 * - ellipsizeMode: 'tail' (mặc định) - cắt ở cuối, 'head' - cắt ở đầu, 
 *   'middle' - cắt ở giữa, 'clip' - cắt không có dấu ba chấm
 * 
 * LƯU Ý:
 * - numberOfLines phải là số nguyên dương (1, 2, 3...)
 * - ellipsizeMode chỉ hoạt động khi numberOfLines được set
 * - 'tail' là giá trị mặc định và phổ biến nhất
 * - 'head' và 'middle' ít dùng, thường dùng cho URL hoặc đường dẫn file
 */

const TextTruncation = () => {
  const longText = 
    'Đây là một đoạn text rất dài để minh họa cách cắt text trong React Native. ' +
    'Khi text quá dài và vượt quá số dòng cho phép, React Native sẽ tự động cắt text ' +
    'và hiển thị dấu ba chấm (...) ở vị trí được chỉ định. Tính năng này rất hữu ích ' +
    'khi bạn muốn hiển thị preview của nội dung dài hoặc giới hạn không gian hiển thị.';

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>5. Text Truncation (Cắt Text)</Text>

      {/* Ví dụ 5.1: Text không giới hạn (hiển thị đầy đủ) */}
      <Text style={styles.description}>
        Ví dụ 5.1: Text không giới hạn - hiển thị đầy đủ (có thể rất dài)
      </Text>
      <View style={styles.textBox}>
        <Text style={styles.fullText}>
          {longText}
        </Text>
      </View>

      {/* Ví dụ 5.2: numberOfLines = 1 */}
      <Text style={styles.description}>
        Ví dụ 5.2: numberOfLines = 1 - Chỉ hiển thị 1 dòng, cắt ở cuối
      </Text>
      <View style={styles.textBox}>
        <Text style={styles.limitedText} numberOfLines={1}>
          {longText}
        </Text>
      </View>

      {/* Ví dụ 5.3: numberOfLines = 2 */}
      <Text style={styles.description}>
        Ví dụ 5.3: numberOfLines = 2 - Hiển thị tối đa 2 dòng, cắt ở cuối
      </Text>
      <View style={styles.textBox}>
        <Text style={styles.limitedText} numberOfLines={2}>
          {longText}
        </Text>
      </View>

      {/* Ví dụ 5.4: numberOfLines = 3 */}
      <Text style={styles.description}>
        Ví dụ 5.4: numberOfLines = 3 - Hiển thị tối đa 3 dòng, cắt ở cuối
      </Text>
      <View style={styles.textBox}>
        <Text style={styles.limitedText} numberOfLines={3}>
          {longText}
        </Text>
      </View>

      {/* Ví dụ 5.5: ellipsizeMode = 'tail' (mặc định) */}
      <Text style={styles.description}>
        Ví dụ 5.5: ellipsizeMode = 'tail' - Cắt ở cuối (mặc định)
      </Text>
      <View style={styles.textBox}>
        <Text 
          style={styles.limitedText} 
          numberOfLines={1} 
          ellipsizeMode="tail"
        >
          {longText}
        </Text>
      </View>

      {/* Ví dụ 5.6: ellipsizeMode = 'head' */}
      <Text style={styles.description}>
        Ví dụ 5.6: ellipsizeMode = 'head' - Cắt ở đầu (ít dùng)
      </Text>
      <View style={styles.textBox}>
        <Text 
          style={styles.limitedText} 
          numberOfLines={1} 
          ellipsizeMode="head"
        >
          {longText}
        </Text>
      </View>

      {/* Ví dụ 5.7: ellipsizeMode = 'middle' */}
      <Text style={styles.description}>
        Ví dụ 5.7: ellipsizeMode = 'middle' - Cắt ở giữa (dùng cho URL, đường dẫn)
      </Text>
      <View style={styles.textBox}>
        <Text 
          style={styles.limitedText} 
          numberOfLines={1} 
          ellipsizeMode="middle"
        >
          https://www.example.com/very/long/path/to/resource/file.html
        </Text>
      </View>

      {/* Ví dụ 5.8: Tình huống thực tế - Tiêu đề sản phẩm */}
      <Text style={styles.description}>
        Ví dụ 5.8: Tình huống thực tế - Tiêu đề sản phẩm (giới hạn 2 dòng)
      </Text>
      <View style={styles.productCard}>
        <Text style={styles.productTitle} numberOfLines={2}>
          Áo thun nam cổ tròn chất liệu cotton cao cấp mặc thoáng mát mùa hè
        </Text>
        <Text style={styles.productPrice}>299.000đ</Text>
      </View>

      {/* Ví dụ 5.9: Tình huống thực tế - Mô tả sản phẩm */}
      <Text style={styles.description}>
        Ví dụ 5.9: Tình huống thực tế - Mô tả sản phẩm (giới hạn 3 dòng)
      </Text>
      <View style={styles.productCard}>
        <Text style={styles.productDescription} numberOfLines={3}>
          Sản phẩm được làm từ chất liệu cotton 100% cao cấp, mềm mại và thoáng mát. 
          Thiết kế đơn giản, dễ phối đồ, phù hợp cho mọi dịp. Form áo vừa vặn, 
          không quá rộng cũng không quá chật. Màu sắc bền đẹp, không phai màu sau nhiều lần giặt.
        </Text>
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
  fullText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  limitedText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  // Tình huống thực tế - Product card
  productCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    lineHeight: 24,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF3B30',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default TextTruncation;

