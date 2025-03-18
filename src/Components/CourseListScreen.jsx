import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const coursesData = {
  "Web Dev": [
    { id: '101', title: 'HTML & CSS Basics', instructor: 'John Doe', image: 'https://i.pinimg.com/236x/6e/66/69/6e666949d70441344cfb6f0ce9a44957.jpg' },
    { id: '102', title: 'JavaScript for Beginners', instructor: 'Jane Smith', image: 'https://i.pinimg.com/236x/d4/8d/dc/d48ddc557f7324e307f0dd135aa19019.jpg' },
  ],
  "App Dev": [
    { id: '201', title: 'React Native Fundamentals', instructor: 'Mike Johnson', image: 'https://i.pinimg.com/236x/56/ee/5e/56ee5ed8b4954396d11465c77966fd7c.jpg' },
    { id: '202', title: 'Swift for iOS', instructor: 'Emily Davis', image: 'https://i.pinimg.com/236x/f2/68/0f/f2680ffb4c75bc338a044f5126735110.jpg' },
  ],
  "AI & ML": [
    { id: '301', title: 'Machine Learning Basics', instructor: 'Andrew Ng', image: 'https://i.pinimg.com/474x/74/09/17/7409177d967faa8d5b6eccccaa906dd1.jpg' },
    { id: '302', title: 'Deep Learning with Python', instructor: 'Sara Lee', image: 'https://i.pinimg.com/236x/08/c4/e4/08c4e493366beb34b890a5a94a419f6a.jpg' },
  ],
  "Cybersecurity": [
    { id: '401', title: 'Ethical Hacking Fundamentals', instructor: 'Kevin Mitnick', image: 'https://i.pinimg.com/236x/6f/b7/ec/6fb7ec28d6ee0136eeba03dc3ea868cf.jpg' },
    { id: '402', title: 'Cybersecurity for Beginners', instructor: 'Lisa Wong', image: 'https://i.pinimg.com/236x/2c/90/98/2c9098ed5f56f2f6a93c379e2282c5a4.jpg' },
  ],
  "Cloud": [
    { id: '501', title: 'AWS Cloud Essentials', instructor: 'Jeff Bezos', image: 'https://i.pinimg.com/474x/24/eb/19/24eb194a1027a5b917cfdee3dcfe9369.jpg' },
    { id: '502', title: 'Azure Fundamentals', instructor: 'Satya Nadella', image: 'https://i.pinimg.com/236x/8c/1f/bc/8c1fbc1be9ba4168af65067897b2dc7c.jpg' },
  ],
  "Blockchain": [
    { id: '601', title: 'Blockchain Basics', instructor: 'Vitalik Buterin', image: 'https://i.pinimg.com/236x/77/6d/5b/776d5b3c59d0b06525058b9fe805cb5f.jpg' },
    { id: '602', title: 'Smart Contracts with Solidity', instructor: 'Gavin Wood', image: 'https://i.pinimg.com/236x/68/95/f3/6895f3405e041401703a1650e7caa9ee.jpg' },
  ],
  "UI/UX": [
    { id: '701', title: 'Introduction to UX Design', instructor: 'Don Norman', image: 'https://i.pinimg.com/236x/e6/03/03/e603030f4b3c67c230be9c878bb25fd8.jpg' },
    { id: '702', title: 'Figma & Prototyping', instructor: 'Jessica Green', image: 'https://i.pinimg.com/236x/30/e1/4f/30e14fdfd35a5331dea94a61d4732025.jpg' },
  ],
  "Game Dev": [
    { id: '801', title: 'Unity for Beginners', instructor: 'John Carmack', image: 'https://i.pinimg.com/236x/b6/e4/d9/b6e4d90e6549f56768d01ab6c5c0fcd8.jpg' },
    { id: '802', title: 'Unreal Engine Mastery', instructor: 'Tim Sweeney', image: 'https://i.pinimg.com/736x/a6/51/08/a651085c446679abee1ab811cc74fbe1.jpg' },
  ],
};

const CourseListScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const courses = coursesData[category] || [];

  return (
    <View style={styles.container}>
      
      {/* 🔹 White Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={22} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{category} Courses</Text>
      </View>

      {/* 🔹 Course List */}
      {courses.length > 0 ? (
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.courseItem}>
              <Image source={{ uri: item.image }} style={styles.courseImage} />
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseInstructor}>{item.instructor}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noCourses}>No courses available for this category.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  
  // 🔹 White Header Styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 3, 
  },
  backButton: { padding: 5 },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },

  // 🔹 Course List Styles
  courseItem: { 
    flexDirection: 'row', 
    padding: 10, 
    marginHorizontal: 15,
    marginBottom: 10, 
    borderBottomWidth: 1,  // ✅ Light underline
    borderBottomColor: '#ddd',  // ✅ Light gray color for subtle effect
    paddingBottom: 10, // ✅ Adds space between text and underline
  },
  
  courseImage: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
  courseInfo: { flex: 1, justifyContent: 'center' },
  courseTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  courseInstructor: { fontSize: 14, color: '#666' },

  noCourses: { fontSize: 16, textAlign: 'center', marginTop: 20, color: '#999' },
});

export default CourseListScreen;
