import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    { id: '1', title: 'React Native for Beginners', instructor: 'John Doe', price: 29.99, image: 'https://i.pinimg.com/236x/08/f1/b4/08f1b419f6e8e9d4606b374745f21451.jpg' },
    { id: '2', title: 'Advanced JavaScript', instructor: 'Jane Smith', price: 34.99, image: 'https://i.pinimg.com/236x/7b/56/8e/7b568e01183f783a02fa62c7691e3d84.jpg' },
  ]);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      
      {/* Gradient Header */}
      <LinearGradient colors={['#0052D4', '#65C7F7']} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <FontAwesome name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cart</Text>
        <TouchableOpacity onPress={() => setCartItems([])} style={styles.iconButton}>
          <FontAwesome name="trash" size={22} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Cart Items List */}
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.courseImage} />
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseInstructor}>{item.instructor}</Text>
                <Text style={styles.coursePrice}>${item.price.toFixed(2)}</Text>
              </View>
              <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.deleteButton}>
                <FontAwesome name="times-circle" size={24} color="#FF4444" />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyState}>
          <Image source={{ uri: 'https://i.imgur.com/NO2dE82.png' }} style={styles.emptyImage} />
          <Text style={styles.emptyText}>Your cart is empty!</Text>
          <TouchableOpacity style={styles.browseButton} onPress={() => navigation.navigate('Courses')}>
            <Text style={styles.browseText}>Browse Courses</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Total & Checkout */}
      {cartItems.length > 0 && (
        <View style={styles.checkoutSection}>
          <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
          <TouchableOpacity 
            style={styles.checkoutButton} 
            onPress={() => navigation.navigate('Checkout', { total: calculateTotal() })}
          >
            <Text style={styles.checkoutText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },

  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingVertical: 15, 
    paddingHorizontal: 15, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
    elevation: 5 
  },
  iconButton: { padding: 5 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff' },

  cartItem: { 
    flexDirection: 'row', 
    backgroundColor: '#fff', 
    margin:5,
    padding: 15, 
    // borderRadius: 12, 
    // marginBottom: 10, 
    alignItems: 'center', 
    elevation: 4,
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    // shadowRadius: 5 
  },
  courseImage: { width: 80, height: 80, borderRadius: 10, marginRight: 12 },
  courseInfo: { flex: 1 },
  courseTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  courseInstructor: { fontSize: 14, color: '#666', marginVertical: 3 },
  coursePrice: { fontSize: 16, fontWeight: 'bold', color: '#0052D4' },
  deleteButton: { padding: 8 },

  checkoutSection: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 12, 
    marginTop: 10,
    marginHorizontal: 15,
    elevation: 4 
  },
  totalText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  checkoutButton: { backgroundColor: '#FF5722', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 },
  checkoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyImage: { width: 150, height: 150, marginBottom: 20 },
  emptyText: { fontSize: 18, color: '#666', marginBottom: 10 },
  browseButton: { backgroundColor: '#0052D4', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
  browseText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default Cart;
