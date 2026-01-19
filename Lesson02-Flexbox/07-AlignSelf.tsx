import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * VÍ DỤ 7: ALIGNSELF
 * 
 * MÔ TẢ:
 * alignSelf cho phép override giá trị alignItems cho một phần tử con cụ thể.
 * Nó hoạt động giống như alignItems nhưng chỉ áp dụng cho một phần tử.
 * 
 * CÁC GIÁ TRỊ:
 * - 'auto' (mặc định): Kế thừa từ alignItems của parent
 * - 'flex-start': Căn về đầu trục phụ
 * - 'flex-end': Căn về cuối trục phụ
 * - 'center': Căn giữa trục phụ
 * - 'stretch': Kéo dãn để fill trục phụ
 * - 'baseline': Căn theo baseline (ít dùng)
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - Override alignItems cho một phần tử đặc biệt
 * - Căn chỉnh một phần tử khác với các phần tử khác
 * - Tạo layout phức tạp với các phần tử có vị trí khác nhau
 */

const AlignSelf = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>7. AlignSelf</Text>
      <Text style={styles.note}>
        alignSelf cho phép override alignItems cho một phần tử cụ thể.
        Phần tử đó sẽ không tuân theo alignItems của parent.
      </Text>

      {/* Ví dụ 7.1: alignSelf: 'flex-start' */}
      <Text style={styles.description}>
        Ví dụ 7.1: alignSelf: 'flex-start' - Phần tử này căn về đầu, các phần tử khác căn giữa
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.alignCenter]}>
        <View style={[styles.box1, styles.alignSelfStart]}>
          <Text style={styles.boxText}>flex-start</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>Center</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>Center</Text>
        </View>
      </View>

      {/* Ví dụ 7.2: alignSelf: 'flex-end' */}
      <Text style={styles.description}>
        Ví dụ 7.2: alignSelf: 'flex-end' - Phần tử này căn về cuối
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.alignCenter]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Center</Text>
        </View>
        <View style={[styles.box2, styles.alignSelfEnd]}>
          <Text style={styles.boxText}>flex-end</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>Center</Text>
        </View>
      </View>

      {/* Ví dụ 7.3: alignSelf: 'center' */}
      <Text style={styles.description}>
        Ví dụ 7.3: alignSelf: 'center' - Phần tử này căn giữa (override từ flex-start)
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.alignStart]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>flex-start</Text>
        </View>
        <View style={[styles.box2, styles.alignSelfCenter]}>
          <Text style={styles.boxText}>center</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>flex-start</Text>
        </View>
      </View>

      {/* Ví dụ 7.4: alignSelf: 'stretch' */}
      <Text style={styles.description}>
        Ví dụ 7.4: alignSelf: 'stretch' - Phần tử này kéo dãn để fill
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.alignCenter, styles.stretchContainer]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Center</Text>
        </View>
        <View style={[styles.box2, styles.alignSelfStretch]}>
          <Text style={styles.boxText}>stretch</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>Center</Text>
        </View>
      </View>

      {/* Ví dụ 7.5: Nhiều alignSelf khác nhau */}
      <Text style={styles.description}>
        Ví dụ 7.5: Nhiều phần tử với alignSelf khác nhau
      </Text>
      <View style={[styles.flexContainer, styles.rowDirection, styles.alignCenter, styles.mixedContainer]}>
        <View style={[styles.box1, styles.alignSelfStart]}>
          <Text style={styles.boxText}>Start</Text>
        </View>
        <View style={[styles.box2, styles.alignSelfCenter]}>
          <Text style={styles.boxText}>Center</Text>
        </View>
        <View style={[styles.box3, styles.alignSelfEnd]}>
          <Text style={styles.boxText}>End</Text>
        </View>
      </View>

      {/* Ví dụ 7.6: Với column direction */}
      <Text style={styles.description}>
        Ví dụ 7.6: alignSelf với flexDirection: 'column' (trục phụ là ngang)
      </Text>
      <View style={[styles.flexContainer, styles.columnDirection, styles.alignStart, styles.columnContainer]}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>flex-start</Text>
        </View>
        <View style={[styles.box2, styles.alignSelfCenter]}>
          <Text style={styles.boxText}>center (override)</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxText}>flex-start</Text>
        </View>
      </View>

      {/* Ví dụ 7.7: Tình huống thực tế - Card với avatar và button */}
      <Text style={styles.description}>
        Ví dụ 7.7: Tình huống thực tế - Card với avatar (alignSelf: 'flex-start') và button (alignSelf: 'flex-end')
      </Text>
      <View style={[styles.cardContainer, styles.rowDirection, styles.alignCenter]}>
        <View style={[styles.avatar, styles.alignSelfStart]}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Nguyễn Văn A</Text>
          <Text style={styles.cardSubtitle}>Software Developer</Text>
        </View>
        <View style={[styles.actionButton, styles.alignSelfEnd]}>
          <Text style={styles.buttonText}>...</Text>
        </View>
      </View>

      {/* Ví dụ 7.8: Tình huống thực tế - Form với label và input */}
      <Text style={styles.description}>
        Ví dụ 7.8: Tình huống thực tế - Form với label (alignSelf: 'center') và input (alignSelf: 'stretch')
      </Text>
      <View style={[styles.formContainer, styles.columnDirection, styles.alignStart]}>
        <View style={[styles.label, styles.alignSelfStart]}>
          <Text style={styles.labelText}>Tên:</Text>
        </View>
        <View style={[styles.input, styles.alignSelfStretch]}>
          <Text style={styles.inputText}>Nhập tên của bạn</Text>
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
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  // AlignSelf values
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfStretch: {
    alignSelf: 'stretch',
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
  stretchContainer: {
    minHeight: 150,
  },
  mixedContainer: {
    minHeight: 150,
  },
  columnContainer: {
    minHeight: 200,
  },
  // Tình huống thực tế
  cardContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    minHeight: 80,
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
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    minHeight: 100,
  },
  label: {
    padding: 5,
    marginBottom: 5,
  },
  labelText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputText: {
    fontSize: 14,
    color: '#999',
  },
});

export default AlignSelf;

