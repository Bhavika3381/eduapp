import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Header = ({ userName }) => {
  const navigation = useNavigation();
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <LinearGradient colors={['#0052D4', '#4364F7', '#6FB1FC']} style={styles.header}>
      {/* Top Row: Profile & Icons */}
      <View style={styles.topRow}>
        {/* User Info */}
        <View style={styles.userInfo}>
          <Image 
            source={{ uri: 'https://i.pinimg.com/236x/47/8e/7e/478e7e03fad29ec0dd037ebc135eaaa6.jpg' }} 
            style={styles.profileImage} 
          />
          <View>
            <Text style={styles.welcomeText}>Welcome,</Text>
            <Text style={styles.userName}>Bhavika T{userName}</Text>
          </View>
        </View>

        {/* Icons: Search, Cart, Notification */}
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconCircle} onPress={() => setSearchVisible(true)}>
            <FontAwesome name="search" size={18} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconCircle} onPress={() => navigation.navigate('Cart')}>
            <FontAwesome name="shopping-cart" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconCircle} onPress={() => navigation.navigate('Notification')}>
            <FontAwesome name="bell-o" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar (Visible when searchVisible is true) */}
      {searchVisible && (
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput 
            placeholder="Search courses..." 
            placeholderTextColor="#555" 
            style={styles.searchInput} 
            autoFocus
          />
          <TouchableOpacity onPress={() => setSearchVisible(false)}>
            <FontAwesome name="close" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,  
    paddingHorizontal: 15,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 0,
    position: 'relative',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 10,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 45,
    marginTop: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
});

export default Header;
