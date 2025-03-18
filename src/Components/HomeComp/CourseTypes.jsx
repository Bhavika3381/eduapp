
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const courseTypes = [
  { id: '1', title: 'Web Dev', icon: 'code', color: '#FF5733' },
  { id: '2', title: 'App Dev', icon: 'mobile', color: '#33B5E5' },
  { id: '3', title: 'AI & ML', icon: 'brain', color: '#F4C430' },
  { id: '4', title: 'Cybersecurity', icon: 'shield', color: '#00C851' },
  { id: '5', title: 'Cloud', icon: 'cloud', color: '#AA66CC' },
  { id: '6', title: 'Blockchain', icon: 'cubes', color: '#FF4444' },
  { id: '7', title: 'UI/UX', icon: 'paint-brush', color: '#0099CC' },
  { id: '8', title: 'Game Dev', icon: 'gamepad', color: '#2E8B57' },
];

const CourseTypesGrid = () => {
  const navigation = useNavigation(); // ✅ Get navigation object

  const handleCategoryPress = (category) => {
    navigation.navigate('CourseList', { category }); // ✅ Navigate to CourseList with category param
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemWrapper}>
      <TouchableOpacity 
        style={[styles.itemContainer, { backgroundColor: item.color }]} 
        activeOpacity={0.7}
        onPress={() => handleCategoryPress(item.title)}
      >
        <Icon name={item.icon} size={28} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Course Category</Text>
      <FlatList
        data={courseTypes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={4}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "#fff",
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  itemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%', 
    paddingVertical: 10,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  itemText: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333',
    textAlign: 'center',
  },
});

export default CourseTypesGrid;
