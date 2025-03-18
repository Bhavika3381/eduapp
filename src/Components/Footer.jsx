

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const [pressedButton, setPressedButton] = useState(null);

  return (
    <View style={styles.footer}>
      {/** Menu Items **/}
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.iconContainer, pressedButton === item.name && styles.pressedIcon]}
          onPress={() => {
            setPressedButton(item.name);
            navigation.navigate(item.screen);
            setTimeout(() => setPressedButton(null), 200); // Reset press effect after 200ms
          }}
          activeOpacity={0.8}
        >
          <View style={styles.iconCircle}>
            <FontAwesome name={item.icon} size={22} color="#fff" />
          </View>
          <Text style={styles.iconText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const menuItems = [
  { name: 'Home', icon: 'home', screen: 'Home', label: 'Home' },
  { name: 'Courses', icon: 'book', screen: 'Courses', label: 'Courses' },
  { name: 'MyLearning', icon: 'graduation-cap', screen: 'MyLearning', label: 'My Learning' },
  { name: 'Wishlist', icon: 'heart', screen: 'Wishlist', label: 'Wishlist' },
  { name: 'Account', icon: 'user', screen: 'Account', label: 'Account' },
];

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0052D4',
    paddingVertical: 12,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  iconContainer: {
    alignItems: 'center',
  },
  pressedIcon: {
    opacity: 0.7, // Press effect
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  iconText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default Footer;
