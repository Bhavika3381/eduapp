
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';

// const Footer = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.footer}>
//       {/* Home */}
//       <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
//         <FontAwesome name="home" size={20} color="#fff" />
//         <Text style={styles.iconText}>Home</Text>
//       </TouchableOpacity>

//       {/* Courses */}
//       <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Courses')}>
//         <FontAwesome name="book" size={20} color="#fff" />
//         <Text style={styles.iconText}>Courses</Text>
//       </TouchableOpacity>

//       {/* My Learning */}
//       <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('MyLearning')}>
//         <FontAwesome name="graduation-cap" size={20} color="#fff" />
//         <Text style={styles.iconText}>My Learning</Text>
//       </TouchableOpacity>

//       {/* Wishlist */}
//       <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Wishlist')}>
//         <FontAwesome name="heart" size={20} color="#fff" />
//         <Text style={styles.iconText}>Wishlist</Text>
//       </TouchableOpacity>

//       {/* Account */}
//       <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Account')}>
//         <FontAwesome name="user" size={20} color="#fff" />
//         <Text style={styles.iconText}>Account</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#0052D4',
//     paddingVertical: 14,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     // elevation: 5,
//   },
//   iconContainer: {
//     alignItems: 'center',
//   },
//   iconText: {
//     color: '#fff',
//     fontSize: 12,
//     marginTop: 4,
//   },
// });

// export default Footer;

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
