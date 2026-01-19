import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * VÍ DỤ 3: JUSTIFYCONTENT
 * 
 * MÔ TẢ:
 * justifyContent xác định cách phân bố không gian dọc theo trục chính (main axis).
 * Trục chính là hướng của flexDirection.
 * 
 * CÁC GIÁ TRỊ:
 * - 'flex-start' (mặc định): Căn về đầu trục chính
 * - 'flex-end': Căn về cuối trục chính
 * - 'center': Căn giữa trục chính
 * - 'space-between': Phân bố đều, không có khoảng cách ở đầu và cuối
 * - 'space-around': Phân bố đều, có khoảng cách bằng nhau xung quanh
 * - 'space-evenly': Phân bố đều, khoảng cách bằng nhau giữa tất cả các phần tử
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - 'flex-start': Menu trái, danh sách trên
 * - 'flex-end': Menu phải, footer dưới
 * - 'center': Căn giữa nội dung
 * - 'space-between': Toolbar, header với logo và menu
 * - 'space-around': Button group với khoảng cách đều
 * - 'space-evenly': Phân bố đều hoàn hảo
 */

const JustifyContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>3. JustifyContent</Text>
      <Text style={styles.note}>
        Lưu ý: justifyContent hoạt động dọc theo trục chính (main axis).
        Với flexDirection: 'row', trục chính là ngang.
        Với flexDirection: 'column', trục chính là dọc.
      </Text>

      {/* Ví dụ 3.1: flex-start (mặc định) */}
      <Text style={styles.description}>
        Ví dụ 3.1: justifyContent: 'flex-start' (mặc định) - Căn về đầu
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.flexStart]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>3</Text>
        </View>
      </View>

      {/* Ví dụ 3.2: flex-end */}
      <Text style={styles.description}>
        Ví dụ 3.2: justifyContent: 'flex-end' - Căn về cuối
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.flexEnd]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>3</Text>
        </View>
      </View>

      {/* Ví dụ 3.3: center */}
      <Text style={styles.description}>
        Ví dụ 3.3: justifyContent: 'center' - Căn giữa
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.center]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>3</Text>
        </View>
      </View>

      {/* Ví dụ 3.4: space-between */}
      <Text style={styles.description}>
        Ví dụ 3.4: justifyContent: 'space-between' - Phân bố đều, không có khoảng cách ở đầu và cuối
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.spaceBetween]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>3</Text>
        </View>
      </View>

      {/* Ví dụ 3.5: space-around */}
      <Text style={styles.description}>
        Ví dụ 3.5: justifyContent: 'space-around' - Phân bố đều, có khoảng cách xung quanh
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.spaceAround]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>3</Text>
        </View>
      </View>

      {/* Ví dụ 3.6: space-evenly */}
      <Text style={styles.description}>
        Ví dụ 3.6: justifyContent: 'space-evenly' - Phân bố đều hoàn hảo
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.spaceEvenly]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>3</Text>
        </View>
      </View>

      {/* Ví dụ 3.7: Với column direction */}
      <Text style={styles.description}>
        Ví dụ 3.7: justifyContent với flexDirection: 'column' (trục chính là dọc)
      </Text>
      <View style={styles.columnExamples}>
        <View style={styles.columnExample}>
          <Text style={styles.exampleLabel}>flex-start</Text>
          <View style={[styles.flexContainer, styles.columnDirection, styles.flexStart, styles.smallHeight]}>
            <View style={styles.smallBox1} />
            <View style={styles.smallBox2} />
            <View style={styles.smallBox3} />
          </View>
        </View>
        <View style={styles.columnExample}>
          <Text style={styles.exampleLabel}>center</Text>
          <View style={[styles.flexContainer, styles.columnDirection, styles.center, styles.smallHeight]}>
            <View style={styles.smallBox1} />
            <View style={styles.smallBox2} />
            <View style={styles.smallBox3} />
          </View>
        </View>
        <View style={styles.columnExample}>
          <Text style={styles.exampleLabel}>space-between</Text>
          <View style={[styles.flexContainer, styles.columnDirection, styles.spaceBetween, styles.smallHeight]}>
            <View style={styles.smallBox1} />
            <View style={styles.smallBox2} />
            <View style={styles.smallBox3} />
          </View>
        </View>
      </View>

      {/* Ví dụ 3.8: Tình huống thực tế - Header với logo và menu */}
      <Text style={styles.description}>
        Ví dụ 3.8: Tình huống thực tế - Header với logo và menu (space-between)
      </Text>
      <View style={[styles.headerContainer, styles.rowDirection, styles.spaceBetween]}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>LOGO</Text>
        </View>
        <View style={[styles.menuContainer, styles.rowDirection]}>
          <Text style={styles.menuText}>Menu 1</Text>
          <Text style={styles.menuText}>Menu 2</Text>
          <Text style={styles.menuText}>Menu 3</Text>
        </View>
      </View>

      {/* Ví dụ 3.9: Tình huống thực tế - Button group */}
      <Text style={styles.description}>
        Ví dụ 3.9: Tình huống thực tế - Button group (space-around)
      </Text>
      <View style={[styles.buttonGroup, styles.rowDirection, styles.spaceAround]}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Hủy</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Lưu</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Gửi</Text>
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
    color: '#4CAF50',
    marginBottom: 10,
  },
  note: {
    fontSize: 12,
    color: '#FF9800',
    fontStyle: 'italic',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#FFF3E0',
    borderRadius: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 15,
    marginBottom: 8,
  },
  flexContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    minHeight: 80,
  },
  rowDirection: {
    flexDirection: 'row',
  },
  columnDirection: {
    flexDirection: 'column',
  },
  // JustifyContent values
  flexStart: {
    justifyContent: 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  center: {
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  box1: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 5,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    backgroundColor: '#4ECDC4',
    padding: 15,
    borderRadius: 5,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3: {
    backgroundColor: '#45B7D1',
    padding: 15,
    borderRadius: 5,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // Column examples
  columnExamples: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  columnExample: {
    flex: 1,
    marginHorizontal: 5,
  },
  exampleLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: '600',
  },
  smallHeight: {
    minHeight: 120,
  },
  smallBox1: {
    backgroundColor: '#FF6B6B',
    height: 25,
    marginBottom: 5,
    borderRadius: 3,
  },
  smallBox2: {
    backgroundColor: '#4ECDC4',
    height: 25,
    marginBottom: 5,
    borderRadius: 3,
  },
  smallBox3: {
    backgroundColor: '#45B7D1',
    height: 25,
    marginBottom: 5,
    borderRadius: 3,
  },
  // Tình huống thực tế
  headerContainer: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  logo: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  logoText: {
    color: '#2196F3',
    fontWeight: 'bold',
    fontSize: 16,
  },
  menuContainer: {
    gap: 10,
  },
  menuText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
    marginHorizontal: 5,
  },
  buttonGroup: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    minWidth: 80,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default JustifyContent;

