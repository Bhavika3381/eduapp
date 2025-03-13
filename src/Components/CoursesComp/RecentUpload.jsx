

import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const courses = [
  { id: 1, image: 'https://i.pinimg.com/736x/35/61/a5/3561a5f45b9686646083952e98b83a1b.jpg', name: 'React Native Basics', description: 'Learn the fundamentals of React Native and build mobile apps.', duration: '3 Weeks', fees: '$49', viewers: '12K' },
  { id: 2, image: 'https://media.istockphoto.com/id/1202249079/photo/3d-illustration-of-advertising-signboard-of-javascript-webinar-coding-concept-of-javascript.jpg?s=612x612&w=0&k=20&c=AGEMC4irDR6nWnK5Aabomab2itx0cAmFUXt1LlRtAuE=', name: 'Advanced JavaScript', description: 'Deep dive into JavaScript concepts and best practices.', duration: '4 Weeks', fees: '$59', viewers: '18K' },
  { id: 3, image: 'https://media.istockphoto.com/id/1133750819/photo/as-a-leader-you-have-to-know-and-show-the-way.jpg?s=612x612&w=0&k=20&c=Uu0Dys0VbdsqqfR-w11hIbDWKjKmJXikAnss0STi-LA=', name: 'UI/UX Design', description: 'Learn how to design user-friendly interfaces and experiences.', duration: '5 Weeks', fees: '$69', viewers: '15K' },
  { id: 4, image: 'https://i.pinimg.com/236x/6b/b9/17/6bb9177f1f2075cab554dbb6276f3732.jpg', name: 'Python for Data Science', description: 'Analyze and visualize data with Python.', duration: '6 Weeks', fees: '$79', viewers: '20K' },
];

const RecentUpload= () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent Uploads</Text>
        <TouchableOpacity><Text style={styles.viewAll}>View All</Text></TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {courses.map((course) => (
          <TouchableOpacity 
            key={course.id} 
            style={styles.courseCard} 
            onPress={() => navigation.navigate('CourseDetail', { course })}
          >
            <Image source={{ uri: course.image }} style={styles.image} />
            <Text style={styles.courseName}>{course.name}</Text>
            <Text style={styles.subheading}>{course.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 15 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold', color: "#333" },
  viewAll: { color: '#0052D4', fontWeight: 'bold' },
  scrollView: { flexDirection: 'row' },
  courseCard: { width: 150, marginRight: 15 },
  image: { width: '100%', height: 100, borderRadius: 10 },
  courseName: { fontSize: 14, fontWeight: 'bold', marginTop: 5, color: "#333" },
  subheading: { fontSize: 12, color: '#555' },
});

export default RecentUpload;
