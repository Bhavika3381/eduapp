

import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const businessCourses = [
  { id: 1, image: 'https://i.pinimg.com/236x/fe/65/12/fe65126e074be1508d6582b27def7e5b.jpg', name: 'Entrepreneurship 101', subheading: 'Start your business journey', description: 'Learn how to start and manage your own business.', duration: '10 hours', fees: '$99', viewers: 500 },
  { id: 2, image: 'https://i.pinimg.com/236x/75/66/64/7566640679a97f8f749ff357ad892140.jpg', name: 'Marketing Strategies', subheading: 'Master digital marketing', description: 'Develop marketing skills and grow your business.', duration: '8 hours', fees: '$79', viewers: 320 },
  { id: 3, image: 'https://i.pinimg.com/236x/46/6c/dd/466cdd993c110fe377b2fc9dc2278a6e.jpg', name: 'Financial Management', subheading: 'Manage business finances', description: 'Understand financial principles for business success.', duration: '12 hours', fees: '$119', viewers: 410 },
  { id: 4, image: 'https://i.pinimg.com/236x/d5/08/25/d50825942adde1b16c53308a4df366d1.jpg', name: 'Leadership & Management', subheading: 'Lead teams effectively', description: 'Enhance leadership and management skills.', duration: '9 hours', fees: '$89', viewers: 280 },
];

const BusinessCoursesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Business Courses</Text>
        <TouchableOpacity><Text style={styles.viewAll}>View All</Text></TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {businessCourses.map((course) => (
          <TouchableOpacity 
            key={course.id} 
            style={styles.courseCard} 
            onPress={() => navigation.navigate('CourseDetails', { course })}
          >
            <Image source={{ uri: course.image }} style={styles.image} />
            <Text style={styles.courseName}>{course.name}</Text>
            <Text style={styles.subheading}>{course.subheading}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold', color: "#333" },
  viewAll: { color: '#0052D4', fontWeight: 'bold' },
  scrollView: { flexDirection: 'row' },
  courseCard: { width: 150, marginRight: 15 },
  image: { width: '100%', height: 100, borderRadius: 10 },
  courseName: { fontSize: 14, fontWeight: 'bold', marginTop: 5, color: "#333" },
  subheading: { fontSize: 12, color: '#555' },
});

export default BusinessCoursesScreen;

