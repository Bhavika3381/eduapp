
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Alert, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Checkout = ({ route, navigation }) => {
  const { cartItems = [], total = 0 } = route.params || {};
  const [discount, setDiscount] = useState(5);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [coupon, setCoupon] = useState('');
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const totalAmount = Number(total);
  const finalAmount = (totalAmount - discount).toFixed(2);

  // Apply Coupon Discount
  const applyCoupon = () => {
    if (isCouponApplied) return;

    if (coupon.trim().toUpperCase() === 'SAVE10') {
      setDiscount((prev) => prev + 10);
      setIsCouponApplied(true);
      Alert.alert('Coupon Applied', 'You saved $10 on your order!', [{ text: 'OK' }]);
    } else {
      Alert.alert('Invalid Coupon', 'Please enter a valid coupon code.', [{ text: 'OK' }]);
    }
  };

  // Handle Payment
  const handlePayment = () => {
    if (!selectedPayment) {
      Alert.alert('Payment Error', 'Please select a payment method.', [{ text: 'OK' }]);
      return;
    }

    Alert.alert('Payment Successful', `Your payment of $${finalAmount} was made via ${selectedPayment}.`, [
      { text: 'OK', onPress: () => navigation.navigate('Cart') },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <FontAwesome name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      {/* Order Items */}
      <Text style={styles.sectionTitle}>Order Items</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image || 'https://via.placeholder.com/70' }} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{item.title || 'Unknown Course'}</Text>
              <Text style={styles.courseInstructor}>{item.instructor || 'Unknown Instructor'}</Text>
              <Text style={styles.coursePrice}>
                {item.price !== undefined ? `$${item.price.toFixed(2)}` : 'No Price'}
              </Text>
            </View>
          </View>
        )}
      />

      {/* Order Summary */}
      <View style={styles.summaryBox}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <View style={styles.row}>
          <Text style={styles.detailText}>Total Price:</Text>
          <Text style={styles.detailText}>${totalAmount.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.detailText}>Discount:</Text>
          <Text style={[styles.detailText, { color: 'green' }]}>-${discount.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.finalAmount}>Final Amount:</Text>
          <Text style={styles.finalAmount}>${finalAmount}</Text>
        </View>
      </View>

      {/* Coupon Code */}
      <View style={styles.couponBox}>
        <TextInput
          style={styles.couponInput}
          placeholder="Enter Coupon Code"
          value={coupon}
          onChangeText={setCoupon}
          editable={!isCouponApplied}
        />
        <TouchableOpacity style={styles.applyButton} onPress={applyCoupon} disabled={isCouponApplied}>
          <Text style={styles.applyText}>{isCouponApplied ? 'Applied' : 'Apply'}</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Methods */}
      <Text style={styles.sectionTitle}>Select Payment Method</Text>
      {['Credit Card', 'PayPal', 'Google Pay'].map((method) => (
        <TouchableOpacity key={method} style={styles.paymentOption} onPress={() => setSelectedPayment(method)}>
          <FontAwesome name={method === 'Credit Card' ? 'credit-card' : method.toLowerCase()} size={20} color={selectedPayment === method ? '#FF5722' : '#333'} />
          <Text style={styles.paymentText}>{method}</Text>
        </TouchableOpacity>
      ))}

      {/* Pay Button */}
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payText}>Pay ${finalAmount}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 15 },
  
  header: { backgroundColor: '#0052D4', padding: 15, flexDirection: 'row', alignItems: 'center' },
  iconButton: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginLeft: 15 },

  cartItem: { flexDirection: 'row', backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 5, alignItems: 'center', elevation: 3 },
  courseImage: { width: 70, height: 70, borderRadius: 10, marginRight: 10 },
  courseInfo: { flex: 1 },
  courseTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  courseInstructor: { fontSize: 14, color: '#666' },
  coursePrice: { fontSize: 14, fontWeight: 'bold', color: '#0052D4', marginTop: 5 },

  summaryBox: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15, elevation: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 },
  detailText: { fontSize: 16, color: '#333' },
  finalAmount: { fontSize: 18, fontWeight: 'bold', color: '#FF5722' },

  couponBox: { flexDirection: 'row', backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 15, elevation: 5 },
  couponInput: { flex: 1, fontSize: 16, padding: 10, color: '#333' },
  applyButton: { backgroundColor: '#FF5722', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5 },
  applyText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginVertical: 10 },
  
  paymentOption: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 8, elevation: 3 },
  paymentText: { fontSize: 16, color: '#333', marginLeft: 10 },

  payButton: { backgroundColor: '#FF5722', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 15 },
  payText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default Checkout;
