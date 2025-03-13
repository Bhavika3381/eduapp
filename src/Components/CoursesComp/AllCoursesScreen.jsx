import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const allCourses = [
    { id: 1, image: 'https://i.pinimg.com/736x/41/22/16/4122169f8f4335cd0a90bf805a770a75.jpg', name: 'Full Stack Development', description: 'Learn frontend & backend', viewers: '25K' },
    { id: 2, image: 'https://i.pinimg.com/474x/6d/9a/ce/6d9aced532d110a8215b944ff041b017.jpg', name: 'Cyber Security', description: 'Protect systems from attacks', viewers: '18K' },
    { id: 3, image: 'https://i.pinimg.com/474x/fd/56/b2/fd56b2bce297c47137770a33a1160d0e.jpg', name: 'AI & Machine Learning', description: 'Build intelligent systems', viewers: '22K' },
    { id: 4, image: 'https://i.pinimg.com/736x/1f/cc/ea/1fcceab4efc82ab112fcc70af2267ab7.jpg', name: 'Cloud Computing', description: 'Master AWS, Azure & GCP', viewers: '19K' },
    { id: 5, image: 'https://i.pinimg.com/474x/9f/3b/93/9f3b93402afe6721704f372f9b4aad64.jpg', name: 'Data Science', description: 'Analyze & visualize data', viewers: '30K' },
    { id: 6, image: 'https://i.pinimg.com/236x/77/6d/5b/776d5b3c59d0b06525058b9fe805cb5f.jpg', name: 'Blockchain Development', description: 'Build decentralized apps', viewers: '14K' },
];

const AllCoursesScreen = () => {
  const navigation = useNavigation();

  const renderCourse = ({ item }) => (
    <TouchableOpacity style={styles.courseCard} onPress={() => navigation.navigate('CourseDetailScreen', { course: item })}>
      <Image source={{ uri: item.image }} style={styles.image} />
      
      <View style={styles.textContainer}>
        <Text style={styles.courseName}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>

        {/* Viewers count with eye icon */}
        <View style={styles.viewersContainer}>
          <FontAwesome name="eye" size={14} color="#0052D4" />
          <Text style={styles.viewers}>{item.viewers}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Courses</Text>
      <FlatList
        data={allCourses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, textAlign: 'center', color: '#333' },
  row: { justifyContent: 'space-between' },
  courseCard: { 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    padding: 10, 
    width: '48%', 
    marginBottom: 15, 
    elevation: 3 
  },
  image: { width: '100%', height: 100, borderRadius: 8 },
  textContainer: { paddingVertical: 5 },
  courseName: { fontSize: 14, fontWeight: 'bold', color: '#333', textAlign: 'left' },
  description: { fontSize: 12, color: '#777', textAlign: 'left', marginTop: 2 },
  viewersContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    marginTop: 5 
  },
  viewers: { fontSize: 12, fontWeight: 'bold', color: '#0052D4', marginLeft: 4 },
});

export default AllCoursesScreen;
