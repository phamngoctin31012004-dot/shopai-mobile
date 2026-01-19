import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

/**
 * VÍ DỤ 8: TEXT TRONG TÌNH HUỐNG THỰC TẾ
 * 
 * MÔ TẢ:
 * Tổng hợp các ví dụ thực tế sử dụng Text component trong ứng dụng thương mại điện tử.
 * Kết hợp nhiều tính năng đã học để tạo giao diện đẹp và chuyên nghiệp.
 * 
 * TÌNH HUỐNG SỬ DỤNG:
 * - Card sản phẩm: Tiêu đề, giá, mô tả, đánh giá
 * - Thông báo: Thông báo thành công, lỗi, cảnh báo
 * - Form: Label, placeholder, thông báo lỗi
 * - Profile: Tên người dùng, thông tin cá nhân
 * - Đơn hàng: Mã đơn, trạng thái, thông tin giao hàng
 */

const TextRealWorld = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>8. Text trong Tình Huống Thực Tế</Text>

      {/* Tình huống 1: Card sản phẩm */}
      <Text style={styles.subsectionTitle}>Tình huống 1: Card Sản Phẩm</Text>
      <View style={styles.productCard}>
        <Text style={styles.productTitle} numberOfLines={2}>
          Áo thun nam cổ tròn chất liệu cotton cao cấp
        </Text>
        <View style={styles.priceRow}>
          <Text style={styles.currentPrice}>299.000đ</Text>
          <Text style={styles.originalPrice}>399.000đ</Text>
          <Text style={styles.discountBadge}>-25%</Text>
        </View>
        <Text style={styles.productRating}>
          ⭐ 4.5 <Text style={styles.ratingCount}>(128 đánh giá)</Text>
        </Text>
        <Text style={styles.productDescription} numberOfLines={2}>
          Chất liệu cotton 100% mềm mại, thoáng mát. Form áo vừa vặn, 
          dễ phối đồ cho mọi dịp.
        </Text>
        <Text style={styles.productStatus}>✓ Còn hàng</Text>
      </View>

      {/* Tình huống 2: Thông báo */}
      <Text style={styles.subsectionTitle}>Tình huống 2: Thông Báo</Text>
      
      <View style={styles.successNotification}>
        <Text style={styles.notificationIcon}>✓</Text>
        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>Đặt hàng thành công!</Text>
          <Text style={styles.notificationMessage}>
            Đơn hàng của bạn đã được xác nhận. Mã đơn hàng:{' '}
            <Text style={styles.orderCodeText} selectable>ORD-2024-123456</Text>
          </Text>
        </View>
      </View>

      <View style={styles.errorNotification}>
        <Text style={styles.notificationIcon}>⚠️</Text>
        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>Lỗi kết nối</Text>
          <Text style={styles.notificationMessage}>
            Không thể kết nối đến server. Vui lòng kiểm tra kết nối internet.
          </Text>
        </View>
      </View>

      {/* Tình huống 3: Profile người dùng */}
      <Text style={styles.subsectionTitle}>Tình huống 3: Profile Người Dùng</Text>
      <View style={styles.profileCard}>
        <Text style={styles.profileName}>Nguyễn Văn A</Text>
        <Text style={styles.profileEmail} selectable>nguyenvana@email.com</Text>
        <Text style={styles.profilePhone} selectable>0901 234 567</Text>
        <View style={styles.profileStats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Đơn hàng</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Đánh giá</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2.5M</Text>
            <Text style={styles.statLabel}>Điểm tích lũy</Text>
          </View>
        </View>
      </View>

      {/* Tình huống 4: Đơn hàng */}
      <Text style={styles.subsectionTitle}>Tình huống 4: Thông Tin Đơn Hàng</Text>
      <View style={styles.orderCard}>
        <View style={styles.orderHeader}>
          <Text style={styles.orderTitle}>Đơn hàng #123456</Text>
          <Text style={styles.orderStatusSuccess}>Đã giao hàng</Text>
        </View>
        <Text style={styles.orderDate}>Ngày đặt: 15/01/2024</Text>
        <Text style={styles.orderDate}>Ngày giao: 18/01/2024</Text>
        <View style={styles.orderDivider} />
        <Text style={styles.orderLabel}>Mã đơn hàng:</Text>
        <Text style={styles.orderCode} selectable>ORD-2024-123456</Text>
        <Text style={styles.orderLabel}>Địa chỉ giao hàng:</Text>
        <Text style={styles.orderAddress} selectable>
          123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh
        </Text>
        <View style={styles.orderDivider} />
        <View style={styles.orderTotalRow}>
          <Text style={styles.orderTotalLabel}>Tổng tiền:</Text>
          <Text style={styles.orderTotalAmount}>1.299.000đ</Text>
        </View>
      </View>

      {/* Tình huống 5: Form input với label và error */}
      <Text style={styles.subsectionTitle}>Tình huống 5: Form Input</Text>
      <View style={styles.formCard}>
        <Text style={styles.formLabel}>
          Email <Text style={styles.required}>*</Text>
        </Text>
        <View style={styles.inputBox}>
          <Text style={styles.inputPlaceholder}>Nhập email của bạn</Text>
        </View>
        <Text style={styles.formError}>
          Email không hợp lệ. Vui lòng nhập lại.
        </Text>

        <Text style={styles.formLabel}>
          Mật khẩu <Text style={styles.required}>*</Text>
        </Text>
        <View style={styles.inputBox}>
          <Text style={styles.inputPlaceholder}>Nhập mật khẩu</Text>
        </View>
        <Text style={styles.formHint}>
          Mật khẩu phải có ít nhất 8 ký tự
        </Text>
      </View>

      {/* Tình huống 6: Badge và Tag */}
      <Text style={styles.subsectionTitle}>Tình huống 6: Badge và Tag</Text>
      <View style={styles.badgeContainer}>
        <View style={styles.badgeSuccess}>
          <Text style={styles.badgeText}>Mới</Text>
        </View>
        <View style={styles.badgeWarning}>
          <Text style={styles.badgeText}>Hot</Text>
        </View>
        <View style={styles.badgeError}>
          <Text style={styles.badgeText}>Sale</Text>
        </View>
        <View style={styles.badgeInfo}>
          <Text style={styles.badgeText}>Bestseller</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 20,
    textAlign: 'center',
  },
  subsectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  // Product Card
  productCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    lineHeight: 24,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  currentPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountBadge: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#FF3B30',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  productRating: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  ratingCount: {
    fontSize: 12,
    color: '#999',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  productStatus: {
    fontSize: 14,
    color: '#34C759',
    fontWeight: '600',
  },
  // Notification
  successNotification: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#34C759',
  },
  errorNotification: {
    flexDirection: 'row',
    backgroundColor: '#FFEBEE',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#FF3B30',
  },
  notificationIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  orderCodeText: {
    fontWeight: 'bold',
    color: '#1976D2',
  },
  // Profile
  profileCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  profilePhone: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  // Order
  orderCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  orderStatusSuccess: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#34C759',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  orderDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 15,
  },
  orderLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    fontWeight: '600',
  },
  orderCode: {
    fontSize: 16,
    color: '#1976D2',
    fontFamily: 'monospace',
    marginBottom: 15,
    backgroundColor: '#E3F2FD',
    padding: 10,
    borderRadius: 5,
  },
  orderAddress: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 15,
  },
  orderTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderTotalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  orderTotalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF3B30',
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
  formLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  required: {
    color: '#FF3B30',
  },
  inputBox: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 5,
  },
  inputPlaceholder: {
    fontSize: 16,
    color: '#999',
  },
  formError: {
    fontSize: 12,
    color: '#FF3B30',
    marginBottom: 15,
  },
  formHint: {
    fontSize: 12,
    color: '#666',
    marginBottom: 15,
  },
  // Badge
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  badgeSuccess: {
    backgroundColor: '#34C759',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  badgeWarning: {
    backgroundColor: '#FF9500',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  badgeError: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  badgeInfo: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default TextRealWorld;

