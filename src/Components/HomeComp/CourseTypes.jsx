

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const courseTypes = [
  { id: '1', title: 'Science', icon: 'flask', color: '#ff5733' },
  { id: '2', title: 'Mathematics', icon: 'calculator', color: '#33b5e5' },
  { id: '3', title: 'History', icon: 'university', color: '#ffbb33' },
  { id: '4', title: 'Technology', icon: 'laptop', color: '#00C851' },
  { id: '5', title: 'Arts', icon: 'paint-brush', color: '#aa66cc' },
  { id: '6', title: 'Business', icon: 'briefcase', color: '#ff4444' },
  { id: '7', title: 'Sports', icon: 'soccer-ball-o', color: '#0099cc' },
  { id: '8', title: 'Literature', icon: 'book', color: '#2E8B57' },
];

const CourseTypesGrid = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemWrapper}>
      <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.color }]} activeOpacity={0.7}>
        <Icon name={item.icon} size={32} color="#fff" />
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
   
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    paddingLeft: 15,
    color: '#333',
    marginTop: 20,
  },
 
  listContainer: {
    alignItems: 'center',
  },
  itemWrapper: {
    alignItems: 'center',
    margin: 10,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  itemText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#333',
    textAlign: 'center',
  },
});

export default CourseTypesGrid;

