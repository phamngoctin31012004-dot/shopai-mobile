import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * VÍ DỤ 1: FLEXBOX CƠ BẢN
 * 
 * MÔ TẢ:
 * Flexbox là hệ thống layout mạnh mẽ trong React Native, giúp bạn dễ dàng
 * sắp xếp và căn chỉnh các component. View component mặc định sử dụng Flexbox.
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - Sắp xếp các component theo hàng hoặc cột
 * - Căn chỉnh component trong container
 * - Phân bố không gian giữa các component
 * - Tạo layout responsive
 * 
 * LƯU Ý:
 * - View mặc định có display: flex
 * - flexDirection mặc định là 'column' (khác với web là 'row')
 * - Flexbox hoạt động trên cả iOS và Android
 */

const FlexboxBasic = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>1. Flexbox Cơ Bản</Text>

      {/* Ví dụ 1.1: Flexbox mặc định */}
      <Text style={styles.description}>
        Ví dụ 1.1: View mặc định sử dụng Flexbox (flexDirection: 'column')
      </Text>
      <View style={styles.flexContainer}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>Box 3</Text>
        </View>
      </View>

      {/* Ví dụ 1.2: Flexbox với flexDirection: 'row' */}
      <Text style={styles.description}>
        Ví dụ 1.2: Flexbox với flexDirection: 'row' (sắp xếp theo hàng ngang)
      </Text>
      <View style={[styles.flexContainer, styles.rowContainer]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>Box 3</Text>
        </View>
      </View>

      {/* Ví dụ 1.3: So sánh column vs row */}
      <Text style={styles.description}>
        Ví dụ 1.3: So sánh column (dọc) vs row (ngang)
      </Text>
      <View style={styles.comparisonContainer}>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonLabel}>Column (mặc định)</Text>
          <View style={[styles.flexContainer, styles.smallContainer]}>
            <View style={styles.smallBox1} />
            <View style={styles.smallBox2} />
            <View style={styles.smallBox3} />
          </View>
        </View>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonLabel}>Row</Text>
          <View style={[styles.flexContainer, styles.rowContainer, styles.smallContainer]}>
            <View style={styles.smallBox1} />
            <View style={styles.smallBox2} />
            <View style={styles.smallBox3} />
          </View>
        </View>
      </View>

      {/* Ví dụ 1.4: Flexbox với width và height */}
      <Text style={styles.description}>
        Ví dụ 1.4: Flexbox với width và height cố định
      </Text>
      <View style={[styles.flexContainer, styles.rowContainer, styles.fixedSizeContainer]}>
        <View style={[styles.box1, styles.fixedBox]}>
          <Text style={styles.boxText}>100x50</Text>
        </View>
        <View style={[styles.box2, styles.fixedBox]}>
          <Text style={styles.boxText}>100x50</Text>
        </View>
        <View style={[styles.box3, styles.fixedBox]}>
          <Text style={styles.boxText}>100x50</Text>
        </View>
      </View>

      {/* Ví dụ 1.5: Flexbox với flex: 1 */}
      <Text style={styles.description}>
        Ví dụ 1.5: Flexbox với flex: 1 (chia đều không gian)
      </Text>
      <View style={[styles.flexContainer, styles.rowContainer, styles.equalContainer]}>
        <View style={[styles.box1, styles.flex1]}>
          <Text style={styles.boxText}>flex: 1</Text>
        </View>
        <View style={[styles.box2, styles.flex1]}>
          <Text style={styles.boxText}>flex: 1</Text>
        </View>
        <View style={[styles.box3, styles.flex1]}>
          <Text style={styles.boxText}>flex: 1</Text>
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
    minHeight: 150,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  box1: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 5,
    marginBottom: 5,
  },
  box2: {
    backgroundColor: '#4ECDC4',
    padding: 15,
    borderRadius: 5,
    marginBottom: 5,
  },
  box3: {
    backgroundColor: '#45B7D1',
    padding: 15,
    borderRadius: 5,
    marginBottom: 5,
  },
  boxText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  comparisonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  comparisonItem: {
    flex: 1,
    marginHorizontal: 5,
  },
  comparisonLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
    textAlign: 'center',
  },
  smallContainer: {
    minHeight: 100,
    padding: 5,
  },
  smallBox1: {
    backgroundColor: '#FF6B6B',
    height: 30,
    marginBottom: 5,
    borderRadius: 3,
  },
  smallBox2: {
    backgroundColor: '#4ECDC4',
    height: 30,
    marginBottom: 5,
    borderRadius: 3,
  },
  smallBox3: {
    backgroundColor: '#45B7D1',
    height: 30,
    marginBottom: 5,
    borderRadius: 3,
  },
  fixedSizeContainer: {
    height: 80,
  },
  fixedBox: {
    width: 100,
    height: 50,
    marginRight: 5,
    marginBottom: 0,
  },
  equalContainer: {
    height: 80,
  },
  flex1: {
    flex: 1,
    marginRight: 5,
    marginBottom: 0,
  },
});

export default FlexboxBasic;

