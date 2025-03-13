
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = ({ userName, profileImage }) => {
  return (
    <LinearGradient colors={['#0052D4', '#4364F7', '#6FB1FC']} style={styles.header}>
      {/* Top Row: Profile & Notification */}
      <View style={styles.topRow}>
        <View style={styles.userInfo}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
          <View>
            <Text style={styles.welcomeText}>Welcome,</Text>
            <Text style={styles.userName}>Bhavika Tambe {userName}</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.notificationButton}>
          <FontAwesome name="bell-o" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search Bar (Half Inside, Half Outside) */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput 
          placeholder="Search courses..." 
          placeholderTextColor="#555" 
          style={styles.searchInput} 
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 30,  // ✅ Fixed
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 5,
    position: 'relative', // Needed for absolute positioning of search bar
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
  notificationButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 45,
    position: 'absolute',  // Absolute position to move it out of the header
    bottom: -22,           // Move it half outside
    left: 20,              // Position from the left
    right: 20,             // Position from the right
    elevation: 5,          // Shadow effect
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
