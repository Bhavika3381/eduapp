import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import CourseTypes from '../Components/HomeComp/CourseTypes';
import TopCourses from '../Components/HomeComp/TopCourses';
import MyCourses from '../Components/HomeComp/MyCourses';
import Header from '../Components/Header';
import EduAdScreen from '../Components/HomeComp/EduAdScreen';
import PopularCourses from '../Components/HomeComp/PopularCourses';
import FeaturedWebCourses from '../Components/HomeComp/FeaturedWebCourses';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* <Text style={styles.title}>Welcome to EduApp</Text> */}
      <Header/>
      <EduAdScreen/>
      <CourseTypes />
      <TopCourses />
      <PopularCourses/>
      <FeaturedWebCourses/>
      <MyCourses/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    // paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
});

export default HomeScreen;
