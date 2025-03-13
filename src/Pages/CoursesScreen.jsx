import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import RecentUpload from '../Components/CoursesComp/RecentUpload';
import BusinessCoursesScreen from '../Components/CoursesComp/BusinessCoursesScreen';
import ImproveLearningScreen from '../Components/CoursesComp/ImproveLearningScreen';
import AllCoursesScreen from '../Components/CoursesComp/AllCoursesScreen';
import TopTabs from '../Components/CoursesComp/TopTabs';


const CoursesScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('All'); // Default selected tab

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Courses</Text>
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome name="search" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      

      {/* Scrollable Course Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.courseTitle}>{selectedTab} Courses</Text>
        <TopTabs/>
        <RecentUpload />
        <BusinessCoursesScreen />
        <ImproveLearningScreen />
        <AllCoursesScreen/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0052D4',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchButton: {
    padding: 8,
  },
  content: {
    marginTop: 15,
    paddingHorizontal: 15,
    flex: 1,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});

export default CoursesScreen;
