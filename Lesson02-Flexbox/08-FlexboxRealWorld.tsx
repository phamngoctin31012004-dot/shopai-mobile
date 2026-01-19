import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

/**
 * VÍ DỤ 8: FLEXBOX TRONG TÌNH HUỐNG THỰC TẾ
 * 
 * MÔ TẢ:
 * Tổng hợp tất cả kiến thức Flexbox đã học vào các tình huống thực tế.
 * Kết hợp nhiều tính năng để tạo layout đẹp và chuyên nghiệp.
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - Card sản phẩm với flexbox
 * - Header với logo và menu
 * - Form layout
 * - Profile card
 * - Dashboard layout
 * - List item với flexbox
 */

const FlexboxRealWorld = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>8. Flexbox trong Tình Huống Thực Tế</Text>

      {/* Tình huống 1: Card sản phẩm */}
      <Text style={styles.subsectionTitle}>Tình huống 1: Card Sản Phẩm</Text>
      <View style={styles.productCard}>
        <View style={styles.productImage}>
          <Text style={styles.imagePlaceholder}>🖼️</Text>
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productTitle} numberOfLines={2}>
            Áo thun nam cổ tròn chất liệu cotton
          </Text>
          <View style={styles.priceRow}>
            <Text style={styles.currentPrice}>299.000đ</Text>
            <Text style={styles.originalPrice}>399.000đ</Text>
          </View>
          <View style={styles.ratingRow}>
            <Text style={styles.rating}>⭐ 4.5</Text>
            <Text style={styles.reviews}>(128 đánh giá)</Text>
          </View>
        </View>
      </View>

      {/* Tình huống 2: Header với logo và menu */}
      <Text style={styles.subsectionTitle}>Tình huống 2: Header với Logo và Menu</Text>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>SHOPAI</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuItem}>Trang chủ</Text>
          <Text style={styles.menuItem}>Sản phẩm</Text>
          <Text style={styles.menuItem}>Giới thiệu</Text>
        </View>
        <View style={styles.cart}>
          <Text style={styles.cartText}>🛒 (3)</Text>
        </View>
      </View>

      {/* Tình huống 3: Form layout */}
      <Text style={styles.subsectionTitle}>Tình huống 3: Form Layout</Text>
      <View style={styles.formCard}>
        <View style={styles.formRow}>
          <Text style={styles.label}>Họ và tên:</Text>
          <View style={styles.input}>
            <Text style={styles.inputText}>Nhập họ và tên</Text>
          </View>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Email:</Text>
          <View style={styles.input}>
            <Text style={styles.inputText}>Nhập email</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View style={[styles.button, styles.cancelButton]}>
            <Text style={styles.cancelButtonText}>Hủy</Text>
          </View>
          <View style={[styles.button, styles.submitButton]}>
            <Text style={styles.submitButtonText}>Gửi</Text>
          </View>
        </View>
      </View>

      {/* Tình huống 4: Profile card */}
      <Text style={styles.subsectionTitle}>Tình huống 4: Profile Card</Text>
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Nguyễn Văn A</Text>
          <Text style={styles.profileEmail}>nguyenvana@email.com</Text>
          <Text style={styles.profileRole}>Software Developer</Text>
        </View>
        <View style={styles.editButton}>
          <Text style={styles.editButtonText}>Chỉnh sửa</Text>
        </View>
      </View>

      {/* Tình huống 5: Dashboard layout */}
      <Text style={styles.subsectionTitle}>Tình huống 5: Dashboard Layout</Text>
      <View style={styles.dashboard}>
        <View style={styles.dashboardHeader}>
          <Text style={styles.dashboardTitle}>Dashboard</Text>
          <Text style={styles.dashboardSubtitle}>Tổng quan</Text>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>1,234</Text>
            <Text style={styles.statLabel}>Đơn hàng</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>567</Text>
            <Text style={styles.statLabel}>Khách hàng</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>89</Text>
            <Text style={styles.statLabel}>Sản phẩm</Text>
          </View>
        </View>
      </View>

      {/* Tình huống 6: List item */}
      <Text style={styles.subsectionTitle}>Tình huống 6: List Item</Text>
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <View style={styles.itemIcon}>
            <Text style={styles.iconText}>📦</Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Đơn hàng #12345</Text>
            <Text style={styles.itemSubtitle}>Đã giao hàng • 15/01/2024</Text>
          </View>
          <View style={styles.itemAction}>
            <Text style={styles.actionText}>→</Text>
          </View>
        </View>
        <View style={styles.listItem}>
          <View style={styles.itemIcon}>
            <Text style={styles.iconText}>💰</Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Thanh toán</Text>
            <Text style={styles.itemSubtitle}>Đã thanh toán • 1.299.000đ</Text>
          </View>
          <View style={styles.itemAction}>
            <Text style={styles.actionText}>→</Text>
          </View>
        </View>
      </View>

      {/* Tình huống 7: Footer */}
      <Text style={styles.subsectionTitle}>Tình huống 7: Footer</Text>
      <View style={styles.footer}>
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>Về chúng tôi</Text>
          <Text style={styles.footerLink}>Giới thiệu</Text>
          <Text style={styles.footerLink}>Liên hệ</Text>
        </View>
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>Hỗ trợ</Text>
          <Text style={styles.footerLink}>FAQ</Text>
          <Text style={styles.footerLink}>Hướng dẫn</Text>
        </View>
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>Theo dõi</Text>
          <Text style={styles.footerLink}>Facebook</Text>
          <Text style={styles.footerLink}>Instagram</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F5F5F5',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  // Product Card
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  productImage: {
    width: 100,
    height: 100,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  imagePlaceholder: {
    fontSize: 40,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  currentPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#333',
    marginRight: 5,
  },
  reviews: {
    fontSize: 12,
    color: '#999',
  },
  // Header
  header: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  logoText: {
    color: '#2196F3',
    fontWeight: 'bold',
    fontSize: 16,
  },
  menu: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    gap: 15,
  },
  menuItem: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  cart: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  cartText: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
  // Form
  formCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  formRow: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputText: {
    fontSize: 14,
    color: '#999',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    minWidth: 80,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#F5F5F5',
  },
  cancelButtonText: {
    color: '#666',
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  // Profile
  profileCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  profileRole: {
    fontSize: 14,
    color: '#999',
  },
  editButton: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 14,
  },
  // Dashboard
  dashboard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  dashboardHeader: {
    marginBottom: 15,
  },
  dashboardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  dashboardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  // List
  listContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    overflow: 'hidden',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  itemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  iconText: {
    fontSize: 20,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  itemAction: {
    marginLeft: 10,
  },
  actionText: {
    fontSize: 20,
    color: '#999',
  },
  // Footer
  footer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  footerSection: {
    flex: 1,
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  footerLink: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});

export default FlexboxRealWorld;

