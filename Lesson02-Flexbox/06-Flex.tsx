import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * VÍ DỤ 6: FLEX PROPERTY
 * 
 * MÔ TẢ:
 * flex là một trong những property quan trọng nhất của Flexbox.
 * Nó xác định cách một phần tử con sẽ "co giãn" để fill không gian còn lại.
 * 
 * CÁC GIÁ TRỊ:
 * - flex: 0 (mặc định) - Không co giãn, giữ kích thước tự nhiên
 * - flex: 1 - Co giãn để chia đều không gian
 * - flex: 2, 3, ... - Co giãn theo tỷ lệ (flex: 2 sẽ lớn gấp đôi flex: 1)
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - flex: 0 - Phần tử có kích thước cố định (button, icon)
 * - flex: 1 - Phần tử chiếm không gian còn lại (content area)
 * - flex: 2, 3 - Phần tử chiếm nhiều không gian hơn (main content vs sidebar)
 */

const Flex = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>6. Flex Property</Text>
      <Text style={styles.note}>
        flex xác định tỷ lệ không gian mà một phần tử sẽ chiếm trong container.
        flex: 1 nghĩa là "chia đều", flex: 2 nghĩa là "lớn gấp đôi flex: 1".
      </Text>

      {/* Ví dụ 6.1: Không có flex (mặc định) */}
      <Text style={styles.description}>
        Ví dụ 6.1: Không set flex (flex: 0) - Giữ kích thước tự nhiên
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection]}>
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

      {/* Ví dụ 6.2: Tất cả flex: 1 (chia đều) */}
      <Text style={styles.description}>
        Ví dụ 6.2: Tất cả flex: 1 - Chia đều không gian
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection]}>
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

      {/* Ví dụ 6.3: Tỷ lệ khác nhau */}
      <Text style={styles.description}>
        Ví dụ 6.3: Tỷ lệ khác nhau - flex: 1, flex: 2, flex: 1
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection]}>
        <View style={[styles.box1, styles.flex1]}>
          <Text style={styles.boxText}>flex: 1</Text>
        </View>
        <View style={[styles.box2, styles.flex2]}>
          <Text style={styles.boxText}>flex: 2</Text>
        </View>
        <View style={[styles.box3, styles.flex1]}>
          <Text style={styles.boxText}>flex: 1</Text>
        </View>
      </View>

      {/* Ví dụ 6.4: Tỷ lệ 1:3:1 */}
      <Text style={styles.description}>
        Ví dụ 6.4: Tỷ lệ 1:3:1 - Phần giữa lớn gấp 3 lần
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection]}>
        <View style={[styles.box1, styles.flex1]}>
          <Text style={styles.boxText}>flex: 1</Text>
        </View>
        <View style={[styles.box2, styles.flex3]}>
          <Text style={styles.boxText}>flex: 3</Text>
        </View>
        <View style={[styles.box3, styles.flex1]}>
          <Text style={styles.boxText}>flex: 1</Text>
        </View>
      </View>

      {/* Ví dụ 6.5: Một phần tử flex, một phần tử cố định */}
      <Text style={styles.description}>
        Ví dụ 6.5: Một phần tử flex: 1, một phần tử cố định (không flex)
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection]}>
        <View style={[styles.box1, styles.flex1]}>
          <Text style={styles.boxText}>flex: 1 (co giãn)</Text>
        </View>
        <View style={styles.fixedBox}>
          <Text style={styles.boxText}>Cố định</Text>
        </View>
      </View>

      {/* Ví dụ 6.6: Với column direction */}
      <Text style={styles.description}>
        Ví dụ 6.6: flex với flexDirection: 'column' (chiều dọc)
      </Text>
      <View style={[styles.flexContainer, styles.columnDirection, styles.columnHeight]}>
        <View style={[styles.box1, styles.flex1]}>
          <Text style={styles.boxText}>flex: 1</Text>
        </View>
        <View style={[styles.box2, styles.flex2]}>
          <Text style={styles.boxText}>flex: 2</Text>
        </View>
        <View style={[styles.box3, styles.flex1]}>
          <Text style={styles.boxText}>flex: 1</Text>
        </View>
      </View>

      {/* Ví dụ 6.7: Tình huống thực tế - Layout với sidebar */}
      <Text style={styles.description}>
        Ví dụ 6.7: Tình huống thực tế - Layout với sidebar (flex: 0) và content (flex: 1)
      </Text>
      <View style={[styles.layoutContainer, styles.rowDirection]}>
        <View style={styles.sidebar}>
          <Text style={styles.sidebarText}>Sidebar</Text>
        </View>
        <View style={[styles.content, styles.flex1]}>
          <Text style={styles.contentText}>Main Content (flex: 1)</Text>
        </View>
      </View>

      {/* Ví dụ 6.8: Tình huống thực tế - Header, Content, Footer */}
      <Text style={styles.description}>
        Ví dụ 6.8: Tình huống thực tế - Header (cố định), Content (flex: 1), Footer (cố định)
      </Text>
      <View style={[styles.pageContainer, styles.columnDirection]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Header (cố định)</Text>
        </View>
        <View style={[styles.contentArea, styles.flex1]}>
          <Text style={styles.contentText}>Content (flex: 1 - chiếm không gian còn lại)</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Footer (cố định)</Text>
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
  box1: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
  },
  box2: {
    backgroundColor: '#4ECDC4',
    padding: 15,
    borderRadius: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
  },
  box3: {
    backgroundColor: '#45B7D1',
    padding: 15,
    borderRadius: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
  },
  boxText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  // Flex values
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  fixedBox: {
    backgroundColor: '#98D8C8',
    padding: 15,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnHeight: {
    minHeight: 200,
  },
  // Tình huống thực tế
  layoutContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    minHeight: 100,
  },
  sidebar: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    marginRight: 10,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidebarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  content: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  pageContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    minHeight: 200,
  },
  header: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  contentArea: {
    backgroundColor: '#4ECDC4',
    padding: 15,
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: '#45B7D1',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Flex;

