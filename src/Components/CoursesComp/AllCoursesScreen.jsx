
import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const allCourses = [
    { id: 1, image: 'https://i.pinimg.com/736x/41/22/16/4122169f8f4335cd0a90bf805a770a75.jpg', name: 'Full Stack Development', description: 'Learn frontend & backend', viewers: '25K', price: 199, discount: 20 },
    { id: 2, image: 'https://i.pinimg.com/474x/6d/9a/ce/6d9aced532d110a8215b944ff041b017.jpg', name: 'Cyber Security', description: 'Protect systems from attacks', viewers: '18K', price: 249, discount: 15 },
    { id: 3, image: 'https://i.pinimg.com/474x/fd/56/b2/fd56b2bce297c47137770a33a1160d0e.jpg', name: 'AI & Machine Learning', description: 'Build intelligent systems', viewers: '22K', price: 299, discount: 25 },
    { id: 4, image: 'https://i.pinimg.com/736x/1f/cc/ea/1fcceab4efc82ab112fcc70af2267ab7.jpg', name: 'Cloud Computing', description: 'Master AWS, Azure & GCP', viewers: '19K', price: 179, discount: 10 },
    { id: 5, image: 'https://i.pinimg.com/474x/9f/3b/93/9f3b93402afe6721704f372f9b4aad64.jpg', name: 'Data Science', description: 'Analyze & visualize data', viewers: '30K', price: 269, discount: 30 },
    { id: 6, image: 'https://i.pinimg.com/236x/77/6d/5b/776d5b3c59d0b06525058b9fe805cb5f.jpg', name: 'Blockchain Development', description: 'Build decentralized apps', viewers: '14K', price: 199, discount: 18 },
];

const AllCoursesScreen = () => {
  const navigation = useNavigation();

  const renderCourse = ({ item }) => {
    const discountedPrice = (item.price - (item.price * item.discount) / 100).toFixed(2);

    return (
      <TouchableOpacity 
        style={styles.courseCard} 
        onPress={() => navigation.navigate('CourseDetailScreen', { course: item })}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        
        <View style={styles.textContainer}>
          <Text style={styles.courseName}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>

          {/* Viewers count with eye icon */}
          <View style={styles.viewersContainer}>
            <FontAwesome name="eye" size={14} color="#0052D4" />
            <Text style={styles.viewers}>{item.viewers} viewers</Text>
          </View>

          {/* Price & Discount */}
          <View style={styles.priceContainer}>
            <Text style={styles.discountedPrice}>${discountedPrice}</Text>
            <Text style={styles.originalPrice}>${item.price}</Text>
            <Text style={styles.discount}>{item.discount}% OFF</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient colors={['#4A90E2', '#0052D4']} style={styles.header}>
        <Text style={styles.headerText}>Explore All Courses</Text>
      </LinearGradient>

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
  container: {   },
  
  header: { 
    padding: 15, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
    marginBottom: 10 
  },
  headerText: { fontSize: 22, fontWeight: 'bold', color: '#fff' },

  row: { justifyContent: 'space-between', paddingHorizontal: 10 },

  courseCard: { 
    backgroundColor: '#fff', 
    padding: 5, 
    width: '50%', 
    marginBottom: 15,  
    shadowOffset: { width: 0, height: 2 }, 
  },
  image: { width: '100%', height: 120, borderRadius: 10 },

  textContainer: { paddingVertical: 5 },
  
  courseName: { fontSize: 16, fontWeight: 'bold', color: '#333', textAlign: 'left' },
  
  description: { fontSize: 12, color: '#777', textAlign: 'left', marginTop: 2 },
  
  viewersContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 5 
  },
  viewers: { fontSize: 12, fontWeight: 'bold', color: '#0052D4', marginLeft: 4 },

  priceContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 8, 
    justifyContent: 'space-between' 
  },
  discountedPrice: { fontSize: 16, fontWeight: 'bold', color: '#28A745' },
  originalPrice: { fontSize: 12, textDecorationLine: 'line-through', color: '#999' },
  discount: { fontSize: 12, fontWeight: 'bold', color: '#FF5733',backgroundColor:"yellow" },
});

export default AllCoursesScreen;
