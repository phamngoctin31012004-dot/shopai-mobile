import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * VÍ DỤ 2: FLEXDIRECTION
 * 
 * MÔ TẢ:
 * flexDirection xác định hướng sắp xếp các phần tử con trong container.
 * 
 * CÁC GIÁ TRỊ:
 * - 'column' (mặc định): Sắp xếp theo cột (từ trên xuống)
 * - 'row': Sắp xếp theo hàng (từ trái sang phải)
 * - 'column-reverse': Sắp xếp theo cột ngược (từ dưới lên)
 * - 'row-reverse': Sắp xếp theo hàng ngược (từ phải sang trái)
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - 'column': Danh sách dọc, form, card dọc
 * - 'row': Menu ngang, toolbar, button group
 * - 'column-reverse': Chat messages (tin nhắn mới nhất ở dưới)
 * - 'row-reverse': RTL layout, đảo ngược thứ tự
 */

const FlexDirection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>2. FlexDirection</Text>

      {/* Ví dụ 2.1: column (mặc định) */}
      <Text style={styles.description}>
        Ví dụ 2.1: flexDirection: 'column' (mặc định) - Sắp xếp từ trên xuống
      </Text>
      <View style={[styles.flexContainer, styles.columnDirection]}>
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

      {/* Ví dụ 2.2: row */}
      <Text style={styles.description}>
        Ví dụ 2.2: flexDirection: 'row' - Sắp xếp từ trái sang phải
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection]}>
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

      {/* Ví dụ 2.3: column-reverse */}
      <Text style={styles.description}>
        Ví dụ 2.3: flexDirection: 'column-reverse' - Sắp xếp từ dưới lên
      </Text>
      <View style={[styles.flexContainer, styles.columnReverseDirection]}>
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

      {/* Ví dụ 2.4: row-reverse */}
      <Text style={styles.description}>
        Ví dụ 2.4: flexDirection: 'row-reverse' - Sắp xếp từ phải sang trái
      </Text>
      <View style={[styles.flexContainer, styles.rowReverseDirection]}>
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

      {/* Ví dụ 2.5: So sánh tất cả */}
      <Text style={styles.description}>
        Ví dụ 2.5: So sánh tất cả các flexDirection
      </Text>
      <View style={styles.comparisonGrid}>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonLabel}>column</Text>
          <View style={[styles.smallContainer, styles.columnDirection]}>
            <View style={styles.smallBox1} />
            <View style={styles.smallBox2} />
            <View style={styles.smallBox3} />
          </View>
        </View>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonLabel}>row</Text>
          <View style={[styles.smallContainer, styles.rowDirection]}>
            <View style={styles.smallBox1} />
            <View style={styles.smallBox2} />
            <View style={styles.smallBox3} />
          </View>
        </View>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonLabel}>column-reverse</Text>
          <View style={[styles.smallContainer, styles.columnReverseDirection]}>
            <View style={styles.smallBox1} />
            <View style={styles.smallBox2} />
            <View style={styles.smallBox3} />
          </View>
        </View>
        <View style={styles.comparisonItem}>
          <Text style={styles.comparisonLabel}>row-reverse</Text>
          <View style={[styles.smallContainer, styles.rowReverseDirection]}>
            <View style={styles.smallBox1} />
            <View style={styles.smallBox2} />
            <View style={styles.smallBox3} />
          </View>
        </View>
      </View>

      {/* Ví dụ 2.6: Tình huống thực tế - Menu ngang */}
      <Text style={styles.description}>
        Ví dụ 2.6: Tình huống thực tế - Menu ngang (flexDirection: 'row')
      </Text>
      <View style={[styles.menuContainer, styles.rowDirection]}>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Trang chủ</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Sản phẩm</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Giới thiệu</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Liên hệ</Text>
        </View>
      </View>

      {/* Ví dụ 2.7: Tình huống thực tế - Danh sách dọc */}
      <Text style={styles.description}>
        Ví dụ 2.7: Tình huống thực tế - Danh sách sản phẩm (flexDirection: 'column')
      </Text>
      <View style={[styles.productList, styles.columnDirection]}>
        <View style={styles.productItem}>
          <Text style={styles.productText}>Sản phẩm 1</Text>
        </View>
        <View style={styles.productItem}>
          <Text style={styles.productText}>Sản phẩm 2</Text>
        </View>
        <View style={styles.productItem}>
          <Text style={styles.productText}>Sản phẩm 3</Text>
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
  columnDirection: {
    flexDirection: 'column',
  },
  rowDirection: {
    flexDirection: 'row',
  },
  columnReverseDirection: {
    flexDirection: 'column-reverse',
  },
  rowReverseDirection: {
    flexDirection: 'row-reverse',
  },
  box1: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 5,
    marginBottom: 5,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    backgroundColor: '#4ECDC4',
    padding: 15,
    borderRadius: 5,
    marginBottom: 5,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3: {
    backgroundColor: '#45B7D1',
    padding: 15,
    borderRadius: 5,
    marginBottom: 5,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  comparisonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  comparisonItem: {
    width: '48%',
    marginBottom: 15,
  },
  comparisonLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: '600',
  },
  smallContainer: {
    backgroundColor: '#F5F5F5',
    padding: 5,
    borderRadius: 5,
    minHeight: 80,
  },
  smallBox1: {
    backgroundColor: '#FF6B6B',
    height: 20,
    marginBottom: 3,
    borderRadius: 3,
  },
  smallBox2: {
    backgroundColor: '#4ECDC4',
    height: 20,
    marginBottom: 3,
    borderRadius: 3,
  },
  smallBox3: {
    backgroundColor: '#45B7D1',
    height: 20,
    marginBottom: 3,
    borderRadius: 3,
  },
  // Tình huống thực tế
  menuContainer: {
    backgroundColor: '#E3F2FD',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  menuItem: {
    flex: 1,
    padding: 10,
    marginHorizontal: 2,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    alignItems: 'center',
  },
  menuText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
  },
  productList: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  productItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  productText: {
    fontSize: 16,
    color: '#333',
  },
});

export default FlexDirection;

