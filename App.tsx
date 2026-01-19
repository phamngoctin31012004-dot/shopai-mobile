import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
export default function RegisterScreen() {
 return (
 <ScrollView
 style={styles.container}
 contentContainerStyle={styles.contentContainer}
 >
 <Text style={styles.title}>đăng ký tài khoản</Text>

 <Text style={styles.label}>Họ tên</Text>
 <TextInput style={styles.input} placeholder="Nguyễn Văn A" />

 <Text style={styles.label}>Email</Text>
 <TextInput style={styles.input} placeholder="email@example.com" />

 <Text style={styles.label}>Số điện thoại</Text>
 <TextInput style={styles.input} placeholder="0912345678" />

 <Text style={styles.label}>địa chỉ</Text>
 <TextInput
 style={[styles.input, styles.textArea]}
 multiline
 numberOfLines={3}
 />

 {/* Thêm nhiều fields khác... */}
 </ScrollView>
 );
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: '#fff',
 },
 contentContainer: {
 padding: 20,
 },
 title: {
 fontSize: 24,
 fontWeight: 'bold',
 marginBottom: 20,
 },
 label: {
 fontSize: 16,
 marginTop: 15,
 marginBottom: 5,
 },
 input: {
 borderWidth: 1,
 borderColor: '#ddd',
 padding: 12,
 borderRadius: 8,
 },
 textArea: {
 height: 80,
 textAlignVertical: 'top',
 },
});