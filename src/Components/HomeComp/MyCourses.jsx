
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const courses = [
  { 
    id: '1', 
    title: 'Data Science', 
    description: 'Learn data analysis and ML.', 
    image: 'https://i.pinimg.com/236x/14/cb/c1/14cbc10e848a3e5e794c11b57bf1ba3c.jpg',
    progress: 80 
  },
  { 
    id: '2', 
    title: 'Web Development', 
    description: 'Master front-end & back-end.', 
    image: 'https://i.pinimg.com/236x/22/bc/8e/22bc8ebef610eb881071e1a7007a7a80.jpg',
    progress: 60 
  },
  { 
    id: '3', 
    title: 'Graphic Design', 
    description: 'Create stunning visuals.', 
    image: 'https://i.pinimg.com/236x/d3/d5/a3/d3d5a3e259ee8ca212d85f07e92c16cd.jpg',
    progress: 40 
  },
  { 
    id: '4', 
    title: 'Cybersecurity', 
    description: 'Protect systems from attacks.', 
    image: 'https://i.pinimg.com/236x/e6/ec/86/e6ec86d140147e8dc72514dbd2af546f.jpg',
    progress: 90 
  }
];

const CircularProgress = ({ percentage }) => {
  const radius = 20;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (percentage / 100) * circumference;

  return (
    <Svg width={50} height={50} viewBox="0 0 50 50">
      <Circle
        cx="25"
        cy="25"
        r={radius}
        stroke="#e6e6e6"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <Circle
        cx="25"
        cy="25"
        r={radius}
        stroke="#007bff"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
        strokeLinecap="round"
      />
      <Text style={styles.percentageText}>{percentage}%</Text>
    </Svg>
  );
};

const MyCourses = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <CircularProgress percentage={item.progress} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>My Courses</Text>
        <TouchableOpacity onPress={() => console.log('View All Pressed')}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAll: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 3,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginTop: 3,
  },
  percentageText: {
    position: 'absolute',
    top: 15,
    left: 15,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default MyCourses;
