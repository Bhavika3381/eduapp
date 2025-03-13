import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      {/* Home */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
        <FontAwesome name="home" size={24} color="#fff" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      {/* Courses */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Courses')}>
        <FontAwesome name="book" size={24} color="#fff" />
        <Text style={styles.iconText}>Courses</Text>
      </TouchableOpacity>

      {/* Chat */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Chat')}>
        <FontAwesome name="comments" size={24} color="#fff" />
        <Text style={styles.iconText}>Chat</Text>
      </TouchableOpacity>

      {/* Menu */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Menu')}>
        <FontAwesome name="bars" size={24} color="#fff" />
        <Text style={styles.iconText}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0052D4',
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});

export default Footer;
