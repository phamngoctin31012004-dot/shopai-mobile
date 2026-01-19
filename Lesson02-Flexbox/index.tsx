import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FlexboxBasic from './01-FlexboxBasic';
import FlexDirection from './02-FlexDirection';
import JustifyContent from './03-JustifyContent';
import AlignItems from './04-AlignItems';
import FlexWrap from './05-FlexWrap';
import Flex from './06-Flex';
import AlignSelf from './07-AlignSelf';
import FlexboxRealWorld from './08-FlexboxRealWorld';

/**
 * Lesson02-Flexbox - Bài học về Flexbox với View Component
 * 
 * Flexbox là hệ thống layout mạnh mẽ trong React Native.
 * Bài học này sẽ hướng dẫn cách sử dụng Flexbox để tạo layout.
 */

type ExampleType =
  | 'all'
  | 'basic'
  | 'flexDirection'
  | 'justifyContent'
  | 'alignItems'
  | 'flexWrap'
  | 'flex'
  | 'alignSelf'
  | 'realworld';

const Lesson02Flexbox = () => {
  const [selectedExample, setSelectedExample] = useState<ExampleType>('all');

  const renderExample = () => {
    switch (selectedExample) {
      case 'basic':
        return <FlexboxBasic />;
      case 'flexDirection':
        return <FlexDirection />;
      case 'justifyContent':
        return <JustifyContent />;
      case 'alignItems':
        return <AlignItems />;
      case 'flexWrap':
        return <FlexWrap />;
      case 'flex':
        return <Flex />;
      case 'alignSelf':
        return <AlignSelf />;
      case 'realworld':
        return <FlexboxRealWorld />;
      case 'all':
      default:
        return (
          <>
            <FlexboxBasic />
            <FlexDirection />
            <JustifyContent />
            <AlignItems />
            <FlexWrap />
            <Flex />
            <AlignSelf />
            <FlexboxRealWorld />
          </>
        );
    }
  };

  const examples = [
    { key: 'all' as ExampleType, label: 'Tất cả ví dụ' },
    { key: 'basic' as ExampleType, label: '1. Flexbox Cơ Bản' },
    { key: 'flexDirection' as ExampleType, label: '2. FlexDirection' },
    { key: 'justifyContent' as ExampleType, label: '3. JustifyContent' },
    { key: 'alignItems' as ExampleType, label: '4. AlignItems' },
    { key: 'flexWrap' as ExampleType, label: '5. FlexWrap' },
    { key: 'flex' as ExampleType, label: '6. Flex' },
    { key: 'alignSelf' as ExampleType, label: '7. AlignSelf' },
    { key: 'realworld' as ExampleType, label: '8. Tình Huống Thực Tế' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bài 2: Flexbox với View Component</Text>
        <Text style={styles.subtitle}>
          Học cách sử dụng Flexbox để tạo layout
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
    backgroundColor: '#4CAF50',
    padding: 20,
    paddingTop: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#E8F5E9',
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
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
    shadowColor: '#4CAF50',
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

export default Lesson02Flexbox;

