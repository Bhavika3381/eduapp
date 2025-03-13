


import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const topCourses = [
  { 
    id: '1', 
    title: 'Data Science', 
    description: 'Learn data analysis and ML.', 
    image: 'https://i.pinimg.com/236x/14/cb/c1/14cbc10e848a3e5e794c11b57bf1ba3c.jpg'
  },
  { 
    id: '2', 
    title: 'Web Development', 
    description: 'Master front-end & back-end.', 
    image: 'https://i.pinimg.com/236x/22/bc/8e/22bc8ebef610eb881071e1a7007a7a80.jpg'
  },
  { 
    id: '3', 
    title: 'Graphic Design', 
    description: 'Create stunning visuals.', 
    image: 'https://i.pinimg.com/236x/d3/d5/a3/d3d5a3e259ee8ca212d85f07e92c16cd.jpg'
  },
  { 
    id: '4', 
    title: 'Cybersecurity', 
    description: 'Protect systems from attacks.', 
    image: 'https://i.pinimg.com/236x/e6/ec/86/e6ec86d140147e8dc72514dbd2af546f.jpg'
  }
];

const TopCourses = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Courses</Text>
      <FlatList
        data={topCourses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    paddingLeft: 15,
    color: '#333',
  },
  list: {
    paddingLeft: 15,
  },
  card: {
    width: 190,
    height: 140,
    backgroundColor: '#ffffff', // White background
    borderRadius: 10,
    padding: 12,
    marginRight: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: 70,
    borderRadius: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 6,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
    marginTop: 3,
  },
});

export default TopCourses;
