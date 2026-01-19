import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * VÍ DỤ 5: FLEXWRAP
 * 
 * MÔ TẢ:
 * flexWrap xác định các phần tử con có được xuống dòng khi không đủ chỗ hay không.
 * 
 * CÁC GIÁ TRỊ:
 * - 'nowrap' (mặc định): Không xuống dòng, các phần tử sẽ bị thu nhỏ
 * - 'wrap': Xuống dòng khi không đủ chỗ
 * - 'wrap-reverse': Xuống dòng ngược (từ dưới lên)
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - 'nowrap': Menu ngang cố định, không muốn xuống dòng
 * - 'wrap': Tag list, chip list, button group (xuống dòng khi cần)
 * - 'wrap-reverse': Ít dùng, chỉ khi cần đảo ngược thứ tự
 */

const FlexWrap = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>5. FlexWrap</Text>

      {/* Ví dụ 5.1: nowrap (mặc định) */}
      <Text style={styles.description}>
        Ví dụ 5.1: flexWrap: 'nowrap' (mặc định) - Không xuống dòng, các phần tử bị thu nhỏ
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.nowrap]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>Box 3</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.boxText}>Box 4</Text>
        </View>
        <View style={styles.box5}>
          <Text style={styles.boxText}>Box 5</Text>
        </View>
      </View>

      {/* Ví dụ 5.2: wrap */}
      <Text style={styles.description}>
        Ví dụ 5.2: flexWrap: 'wrap' - Xuống dòng khi không đủ chỗ
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.wrap]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>Box 3</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.boxText}>Box 4</Text>
        </View>
        <View style={styles.box5}>
          <Text style={styles.boxText}>Box 5</Text>
        </View>
      </View>

      {/* Ví dụ 5.3: wrap-reverse */}
      <Text style={styles.description}>
        Ví dụ 5.3: flexWrap: 'wrap-reverse' - Xuống dòng ngược (từ dưới lên)
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.wrapReverse]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>Box 3</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.boxText}>Box 4</Text>
        </View>
        <View style={styles.box5}>
          <Text style={styles.boxText}>Box 5</Text>
        </View>
      </View>

      {/* Ví dụ 5.4: So sánh nowrap vs wrap */}
      <Text style={styles.description}>
        Ví dụ 5.4: So sánh nowrap vs wrap với nhiều phần tử
      </Text>
      <View style={styles.comparisonContainer}>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonLabel}>nowrap (bị thu nhỏ)</Text>
          <View style={[styles.flexContainer, styles.rowDirection, styles.nowrap, styles.smallContainer]}>
            <View style={styles.smallBox1} />
            <View style={styles.smallBox2} />
            <View style={styles.smallBox3} />
            <View style={styles.smallBox4} />
            <View style={styles.smallBox5} />
          </View>
        </View>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonLabel}>wrap (xuống dòng)</Text>
          <View style={[styles.flexContainer, styles.rowDirection, styles.wrap, styles.smallContainer]}>
            <View style={styles.smallBox1} />
            <View style={styles.smallBox2} />
            <View style={styles.smallBox3} />
            <View style={styles.smallBox4} />
            <View style={styles.smallBox5} />
          </View>
        </View>
      </View>

      {/* Ví dụ 5.5: Tình huống thực tế - Tag list */}
      <Text style={styles.description}>
        Ví dụ 5.5: Tình huống thực tế - Tag list (flexWrap: 'wrap')
      </Text>
      <View style={[styles.tagContainer, styles.rowDirection, styles.wrap]}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>React Native</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>JavaScript</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>TypeScript</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Mobile Development</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>UI/UX</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Flexbox</Text>
        </View>
      </View>

      {/* Ví dụ 5.6: Tình huống thực tế - Button group với wrap */}
      <Text style={styles.description}>
        Ví dụ 5.6: Tình huống thực tế - Button group (flexWrap: 'wrap')
      </Text>
      <View style={[styles.buttonContainer, styles.rowDirection, styles.wrap]}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Tất cả</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Đang xử lý</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Đã hoàn thành</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Đã hủy</Text>
        </View>
      </View>

      {/* Ví dụ 5.7: Kết hợp wrap với gap (khoảng cách) */}
      <Text style={styles.description}>
        Ví dụ 5.7: Kết hợp wrap với margin để tạo khoảng cách đều
      </Text>
      <View style={[styles.chipContainer, styles.rowDirection, styles.wrap]}>
        <View style={styles.chip}>
          <Text style={styles.chipText}>Chip 1</Text>
        </View>
        <View style={styles.chip}>
          <Text style={styles.chipText}>Chip 2</Text>
        </View>
        <View style={styles.chip}>
          <Text style={styles.chipText}>Chip 3</Text>
        </View>
        <View style={styles.chip}>
          <Text style={styles.chipText}>Chip 4</Text>
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
    marginBottom: 15,
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
    minHeight: 100,
  },
  rowDirection: {
    flexDirection: 'row',
  },
  // FlexWrap values
  nowrap: {
    flexWrap: 'nowrap',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  wrapReverse: {
    flexWrap: 'wrap-reverse',
  },
  box1: {
    backgroundColor: '#FF6B6B',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    backgroundColor: '#4ECDC4',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3: {
    backgroundColor: '#45B7D1',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box4: {
    backgroundColor: '#FFA07A',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box5: {
    backgroundColor: '#98D8C8',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  comparisonContainer: {
    marginBottom: 15,
  },
  comparisonItem: {
    marginBottom: 15,
  },
  comparisonLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
    fontWeight: '600',
  },
  smallContainer: {
    minHeight: 80,
  },
  smallBox1: {
    backgroundColor: '#FF6B6B',
    width: 60,
    height: 30,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 3,
  },
  smallBox2: {
    backgroundColor: '#4ECDC4',
    width: 60,
    height: 30,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 3,
  },
  smallBox3: {
    backgroundColor: '#45B7D1',
    width: 60,
    height: 30,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 3,
  },
  smallBox4: {
    backgroundColor: '#FFA07A',
    width: 60,
    height: 30,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 3,
  },
  smallBox5: {
    backgroundColor: '#98D8C8',
    width: 60,
    height: 30,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 3,
  },
  // Tình huống thực tế
  tagContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  tag: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  buttonContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 8,
    marginBottom: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  chipContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  chip: {
    backgroundColor: '#FF9800',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default FlexWrap;

