import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import BasicText from './01-BasicText';
import TextStyles from './02-TextStyles';
import NestedText from './03-NestedText';
import TextAlignment from './04-TextAlignment';
import TextTruncation from './05-TextTruncation';
import TextSpacing from './06-TextSpacing';
import TextSelectable from './07-TextSelectable';
import TextRealWorld from './08-TextRealWorld';

/**
 * Lesson03-TextComponent - Bài học về Text Component
 * 
 * Đây là bài học số 3 trong khóa học React Native Components.
 * Bài học này bao gồm tất cả các ví dụ về Text Component.
 */

/**
 * INDEX - TẤT CẢ CÁC VÍ DỤ VỀ TEXT COMPONENT
 * 
 * File này tổng hợp tất cả các ví dụ về Text Component.
 * Bạn có thể xem từng ví dụ riêng lẻ hoặc xem tất cả cùng lúc.
 * 
 * CÁCH SỬ DỤNG:
 * 1. Import file này vào App.tsx
 * 2. Sử dụng component TextExamples để hiển thị tất cả ví dụ
 * 3. Hoặc import từng component riêng để sử dụng
 */

type ExampleType = 
  | 'all'
  | 'basic'
  | 'styles'
  | 'nested'
  | 'alignment'
  | 'truncation'
  | 'spacing'
  | 'selectable'
  | 'realworld';

const Lesson03TextComponent = () => {
  const [selectedExample, setSelectedExample] = useState<ExampleType>('all');

  const renderExample = () => {
    switch (selectedExample) {
      case 'basic':
        return <BasicText />;
      case 'styles':
        return <TextStyles />;
      case 'nested':
        return <NestedText />;
      case 'alignment':
        return <TextAlignment />;
      case 'truncation':
        return <TextTruncation />;
      case 'spacing':
        return <TextSpacing />;
      case 'selectable':
        return <TextSelectable />;
      case 'realworld':
        return <TextRealWorld />;
      case 'all':
      default:
        return (
          <>
            <BasicText />
            <TextStyles />
            <NestedText />
            <TextAlignment />
            <TextTruncation />
            <TextSpacing />
            <TextSelectable />
            <TextRealWorld />
          </>
        );
    }
  };

  const examples = [
    { key: 'all' as ExampleType, label: 'Tất cả ví dụ' },
    { key: 'basic' as ExampleType, label: '1. Text Cơ Bản' },
    { key: 'styles' as ExampleType, label: '2. Text Styles' },
    { key: 'nested' as ExampleType, label: '3. Text Lồng Nhau' },
    { key: 'alignment' as ExampleType, label: '4. Text Alignment' },
    { key: 'truncation' as ExampleType, label: '5. Text Truncation' },
    { key: 'spacing' as ExampleType, label: '6. Text Spacing' },
    { key: 'selectable' as ExampleType, label: '7. Text Selectable' },
    { key: 'realworld' as ExampleType, label: '8. Tình Huống Thực Tế' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ví Dụ Text Component</Text>
        <Text style={styles.subtitle}>
          Chọn ví dụ bạn muốn xem hoặc xem tất cả
        </Text>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.menuContainer}
        contentContainerStyle={styles.menuContent}
      >
        {examples.map((example) => (
          <TouchableOpacity
            key={example.key}
            style={[
              styles.menuItem,
              selectedExample === example.key && styles.menuItemActive,
            ]}
            onPress={() => setSelectedExample(example.key)}
          >
            <Text
              style={[
                styles.menuText,
                selectedExample === example.key && styles.menuTextActive,
              ]}
            >
              {example.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {renderExample()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#E3F2FD',
    textAlign: 'center',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  menuContent: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
  },
  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#F8F9FA',
    borderWidth: 1.5,
    borderColor: '#E9ECEF',
    minHeight: 36,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  menuItemActive: {
    backgroundColor: '#FF9800',
    borderColor: '#FF9800',
    shadowColor: '#FF9800',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  menuText: {
    fontSize: 13,
    color: '#495057',
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  menuTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 15,
  },
});

export default Lesson03TextComponent;

// Export từng component riêng để có thể sử dụng độc lập
export { BasicText };
export { TextStyles };
export { NestedText };
export { TextAlignment };
export { TextTruncation };
export { TextSpacing };
export { TextSelectable };
export { TextRealWorld };

