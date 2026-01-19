import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * VÍ DỤ 6: TEXT SPACING (KHOẢNG CÁCH TEXT)
 * 
 * MÔ TẢ:
 * Bạn có thể điều chỉnh khoảng cách trong text bằng:
 * - lineHeight: Khoảng cách giữa các dòng (chiều cao dòng)
 * - letterSpacing: Khoảng cách giữa các chữ cái
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - lineHeight: Điều chỉnh để text dễ đọc hơn, tạo không gian thoáng
 *   + lineHeight thường = fontSize * 1.2 đến 1.5 cho text thông thường
 *   + lineHeight lớn hơn cho tiêu đề, nhỏ hơn cho text dày đặc
 * - letterSpacing: Tạo hiệu ứng typography đẹp mắt
 *   + letterSpacing dương: Chữ cách xa nhau (dùng cho tiêu đề lớn)
 *   + letterSpacing âm: Chữ sát nhau (ít dùng)
 *   + letterSpacing = 0: Bình thường
 * 
 * LƯU Ý:
 * - lineHeight nhận giá trị số (pixel)
 * - letterSpacing nhận giá trị số (pixel), có thể âm
 * - lineHeight quá nhỏ sẽ làm text khó đọc
 * - letterSpacing quá lớn sẽ làm text khó đọc
 */

const TextSpacing = () => {
  const sampleText = 
    'Đây là một đoạn text mẫu để minh họa cách điều chỉnh khoảng cách. ' +
    'Khoảng cách giữa các dòng và giữa các chữ cái ảnh hưởng rất nhiều đến ' +
    'khả năng đọc và trải nghiệm người dùng. Hãy so sánh các ví dụ bên dưới.';

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>6. Text Spacing (Khoảng Cách Text)</Text>

      {/* Ví dụ 6.1: lineHeight mặc định */}
      <Text style={styles.description}>
        Ví dụ 6.1: lineHeight mặc định (tự động, khoảng fontSize * 1.0)
      </Text>
      <View style={styles.textBox}>
        <Text style={styles.defaultLineHeight}>
          {sampleText}
        </Text>
      </View>

      {/* Ví dụ 6.2: lineHeight nhỏ (text dày đặc) */}
      <Text style={styles.description}>
        Ví dụ 6.2: lineHeight = 18 (nhỏ, text dày đặc - khó đọc)
      </Text>
      <View style={styles.textBox}>
        <Text style={styles.smallLineHeight}>
          {sampleText}
        </Text>
      </View>

      {/* Ví dụ 6.3: lineHeight vừa phải (dễ đọc) */}
      <Text style={styles.description}>
        Ví dụ 6.3: lineHeight = 24 (vừa phải, dễ đọc - khuyến nghị)
      </Text>
      <View style={styles.textBox}>
        <Text style={styles.normalLineHeight}>
          {sampleText}
        </Text>
      </View>

      {/* Ví dụ 6.4: lineHeight lớn (thoáng) */}
      <Text style={styles.description}>
        Ví dụ 6.4: lineHeight = 32 (lớn, thoáng - dùng cho tiêu đề)
      </Text>
      <View style={styles.textBox}>
        <Text style={styles.largeLineHeight}>
          {sampleText}
        </Text>
      </View>

      {/* Ví dụ 6.5: letterSpacing = 0 (mặc định) */}
      <Text style={styles.description}>
        Ví dụ 6.5: letterSpacing = 0 (mặc định, chữ sát nhau)
      </Text>
      <View style={styles.textBox}>
        <Text style={styles.defaultLetterSpacing}>
          KHOẢNG CÁCH CHỮ MẶC ĐỊNH
        </Text>
      </View>

      {/* Ví dụ 6.6: letterSpacing dương (chữ cách xa) */}
      <Text style={styles.description}>
        Ví dụ 6.6: letterSpacing = 2 (chữ cách xa nhau - dùng cho tiêu đề)
      </Text>
      <View style={styles.textBox}>
        <Text style={styles.positiveLetterSpacing}>
          KHOẢNG CÁCH CHỮ RỘNG
        </Text>
      </View>

      {/* Ví dụ 6.7: letterSpacing lớn hơn */}
      <Text style={styles.description}>
        Ví dụ 6.7: letterSpacing = 5 (chữ cách xa hơn - dùng cho logo, banner)
      </Text>
      <View style={styles.textBox}>
        <Text style={styles.largeLetterSpacing}>
          KHOẢNG CÁCH CHỮ RẤT RỘNG
        </Text>
      </View>

      {/* Ví dụ 6.8: Kết hợp lineHeight và letterSpacing */}
      <Text style={styles.description}>
        Ví dụ 6.8: Kết hợp lineHeight và letterSpacing (typography đẹp)
      </Text>
      <View style={styles.textBox}>
        <Text style={styles.combinedSpacing}>
          {sampleText}
        </Text>
      </View>

      {/* Ví dụ 6.9: Tình huống thực tế - Tiêu đề với spacing đẹp */}
      <Text style={styles.description}>
        Ví dụ 6.9: Tình huống thực tế - Tiêu đề với spacing đẹp
      </Text>
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>WELCOME TO SHOPAI</Text>
        <Text style={styles.headerSubtitle}>
          Ứng dụng mua sắm thông minh với AI
        </Text>
      </View>

      {/* Ví dụ 6.10: Tình huống thực tế - Đoạn văn dễ đọc */}
      <Text style={styles.description}>
        Ví dụ 6.10: Tình huống thực tế - Đoạn văn với lineHeight tối ưu
      </Text>
      <View style={styles.articleBox}>
        <Text style={styles.articleTitle}>Hướng Dẫn Sử Dụng</Text>
        <Text style={styles.articleContent}>
          React Native là một framework mạnh mẽ để xây dựng ứng dụng di động. 
          Với React Native, bạn có thể viết code một lần và chạy trên cả iOS và Android. 
          Text component là một trong những component cơ bản nhất và quan trọng nhất.
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
  // lineHeight examples
  defaultLineHeight: {
    fontSize: 16,
    color: '#333',
    // lineHeight mặc định (không set)
  },
  smallLineHeight: {
    fontSize: 16,
    color: '#333',
    lineHeight: 18, // Nhỏ, dày đặc
  },
  normalLineHeight: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24, // Vừa phải, dễ đọc
  },
  largeLineHeight: {
    fontSize: 16,
    color: '#333',
    lineHeight: 32, // Lớn, thoáng
  },
  // letterSpacing examples
  defaultLetterSpacing: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 0, // Mặc định
  },
  positiveLetterSpacing: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 2, // Chữ cách xa
  },
  largeLetterSpacing: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 5, // Chữ cách xa hơn
  },
  // Combined spacing
  combinedSpacing: {
    fontSize: 16,
    color: '#333',
    lineHeight: 28,
    letterSpacing: 1,
  },
  // Tình huống thực tế - Header
  headerBox: {
    backgroundColor: '#E3F2FD',
    padding: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1976D2',
    letterSpacing: 3,
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  // Tình huống thực tế - Article
  articleBox: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 10,
  },
  articleTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    letterSpacing: 1,
  },
  articleContent: {
    fontSize: 16,
    color: '#666',
    lineHeight: 26, // Tối ưu cho đọc
  },
});

export default TextSpacing;

