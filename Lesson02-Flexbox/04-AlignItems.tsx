import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * VÍ DỤ 4: ALIGNITEMS
 * 
 * MÔ TẢ:
 * alignItems xác định cách căn chỉnh các phần tử con dọc theo trục phụ (cross axis).
 * Trục phụ vuông góc với trục chính (main axis).
 * 
 * CÁC GIÁ TRỊ:
 * - 'flex-start': Căn về đầu trục phụ
 * - 'flex-end': Căn về cuối trục phụ
 * - 'center': Căn giữa trục phụ
 * - 'stretch' (mặc định): Kéo dãn để fill trục phụ
 * - 'baseline': Căn theo baseline của text (ít dùng)
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - 'flex-start': Căn trên/trái
 * - 'flex-end': Căn dưới/phải
 * - 'center': Căn giữa theo trục phụ
 * - 'stretch': Kéo dãn để fill (thường dùng cho row)
 */

const AlignItems = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>4. AlignItems</Text>
      <Text style={styles.note}>
        Lưu ý: alignItems hoạt động dọc theo trục phụ (cross axis).
        Với flexDirection: 'row', trục phụ là dọc.
        Với flexDirection: 'column', trục phụ là ngang.
      </Text>

      {/* Ví dụ 4.1: flex-start */}
      <Text style={styles.description}>
        Ví dụ 4.1: alignItems: 'flex-start' - Căn về đầu trục phụ
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.alignStart]}>
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

      {/* Ví dụ 4.2: flex-end */}
      <Text style={styles.description}>
        Ví dụ 4.2: alignItems: 'flex-end' - Căn về cuối trục phụ
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.alignEnd]}>
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

      {/* Ví dụ 4.3: center */}
      <Text style={styles.description}>
        Ví dụ 4.3: alignItems: 'center' - Căn giữa trục phụ
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.alignCenter]}>
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

      {/* Ví dụ 4.4: stretch (mặc định) */}
      <Text style={styles.description}>
        Ví dụ 4.4: alignItems: 'stretch' (mặc định) - Kéo dãn để fill trục phụ
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.alignStretch]}>
        <View style={[styles.box1, styles.stretchBox]}>
          <Text style={styles.boxText}>1</Text>
        </View>
        <View style={[styles.box2, styles.stretchBox]}>
          <Text style={styles.boxText}>2</Text>
        </View>
        <View style={[styles.box3, styles.stretchBox]}>
          <Text style={styles.boxText}>3</Text>
        </View>
      </View>

      {/* Ví dụ 4.5: Với column direction */}
      <Text style={styles.description}>
        Ví dụ 4.5: alignItems với flexDirection: 'column' (trục phụ là ngang)
      </Text>
      <View style={styles.columnExamples}>
        <View style={styles.columnExample}>
          <Text style={styles.exampleLabel}>flex-start</Text>
          <View style={[styles.flexContainer, styles.columnDirection, styles.alignStart, styles.smallHeight]}>
            <View style={styles.smallBox1} />
            <View style={styles.smallBox2} />
            <View style={styles.smallBox3} />
          </View>
        </View>
        <View style={styles.columnExample}>
          <Text style={styles.exampleLabel}>center</Text>
          <View style={[styles.flexContainer, styles.columnDirection, styles.alignCenter, styles.smallHeight]}>
            <View style={styles.smallBox1} />
            <View style={styles.smallBox2} />
            <View style={styles.smallBox3} />
          </View>
        </View>
        <View style={styles.columnExample}>
          <Text style={styles.exampleLabel}>flex-end</Text>
          <View style={[styles.flexContainer, styles.columnDirection, styles.alignEnd, styles.smallHeight]}>
            <View style={styles.smallBox1} />
            <View style={styles.smallBox2} />
            <View style={styles.smallBox3} />
          </View>
        </View>
      </View>

      {/* Ví dụ 4.6: Kết hợp justifyContent và alignItems */}
      <Text style={styles.description}>
        Ví dụ 4.6: Kết hợp justifyContent: 'center' và alignItems: 'center' (căn giữa hoàn toàn)
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.center, styles.alignCenter, styles.largeContainer]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Căn giữa</Text>
        </View>
      </View>

      {/* Ví dụ 4.7: Tình huống thực tế - Card với avatar và text */}
      <Text style={styles.description}>
        Ví dụ 4.7: Tình huống thực tế - Card với avatar và text (alignItems: 'center')
      </Text>
      <View style={[styles.cardContainer, styles.rowDirection, styles.alignCenter]}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Nguyễn Văn A</Text>
          <Text style={styles.cardSubtitle}>Software Developer</Text>
        </View>
      </View>

      {/* Ví dụ 4.8: Tình huống thực tế - Toolbar với icon và text */}
      <Text style={styles.description}>
        Ví dụ 4.8: Tình huống thực tế - Toolbar với icon và text (alignItems: 'center')
      </Text>
      <View style={[styles.toolbar, styles.rowDirection, styles.alignCenter]}>
        <View style={styles.icon}>
          <Text style={styles.iconText}>🏠</Text>
        </View>
        <Text style={styles.toolbarText}>Trang chủ</Text>
        <View style={styles.spacer} />
        <View style={styles.icon}>
          <Text style={styles.iconText}>🔔</Text>
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
    minHeight: 120,
  },
  rowDirection: {
    flexDirection: 'row',
  },
  columnDirection: {
    flexDirection: 'column',
  },
  // AlignItems values
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStretch: {
    alignItems: 'stretch',
  },
  center: {
    justifyContent: 'center',
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
  stretchBox: {
    flex: 1,
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
    width: 40,
    height: 25,
    marginBottom: 5,
    borderRadius: 3,
  },
  smallBox2: {
    backgroundColor: '#4ECDC4',
    width: 40,
    height: 25,
    marginBottom: 5,
    borderRadius: 3,
  },
  smallBox3: {
    backgroundColor: '#45B7D1',
    width: 40,
    height: 25,
    marginBottom: 5,
    borderRadius: 3,
  },
  largeContainer: {
    minHeight: 150,
  },
  // Tình huống thực tế
  cardContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  toolbar: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  icon: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  iconText: {
    fontSize: 20,
  },
  toolbarText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  spacer: {
    flex: 1,
  },
});

export default AlignItems;

