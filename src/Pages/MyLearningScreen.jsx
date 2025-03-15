
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const MyLearning = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Downloaded', 'Archived'];

  const courses = [
    {
      id: '1',
      title: 'React Native for Beginners',
      subTitle: 'Learn to build mobile apps',
      image: 'https://i.pinimg.com/236x/92/13/07/9213077464e1d398fa79a90d2c896179.jpg',
    },
    {
      id: '2',
      title: 'Full Stack Web Development',
      subTitle: 'Master frontend & backend',
      image: 'https://i.pinimg.com/236x/e5/05/89/e505893801ad5048cfd02a8200adc20f.jpg',
    },
    {
        id: '3',
        title: 'JavaScript Essentials',
        subTitle: 'Master the fundamentals of JavaScript',
        image: 'https://i.pinimg.com/236x/0c/de/d3/0cded3a3276425911d55a2552bf361bf.jpg',
      },
      {
        id: '4',
        title: 'UI/UX Design Principles',
        subTitle: 'Learn to create stunning user experiences',
        image: 'https://i.pinimg.com/236x/22/de/d1/22ded1349587588e033c7de713026611.jpg',
      },
      {
        id: '5',
        title: 'Python for Data Science',
        subTitle: 'Analyze data with Python and machine learning',
        image: 'https://i.pinimg.com/236x/c9/e1/86/c9e1865fc12448afb7f25a355dd7169b.jpg',
      },
      {
        id: '6',
        title: 'Cybersecurity Fundamentals',
        subTitle: 'Protect networks and secure data',
        image: 'https://i.pinimg.com/474x/69/e0/0b/69e00be05f7eb68fb22adfcff784f799.jpg',
      },
      
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Courses</Text>
        <View style={styles.headerIcons}>
          {/* <TouchableOpacity style={styles.icon}>
            <FontAwesome name="search" size={22} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="shopping-cart" size={22} color="#333" />
          </TouchableOpacity> */}
          {/* Cart Icon */}
                  <TouchableOpacity 
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')} // Navigate to Cart Page
                  >
                    <FontAwesome name="shopping-cart" size={24} color="grey" />
                  </TouchableOpacity>
                   {/* Notification Icon */}
                         <TouchableOpacity 
                            style={styles.notificationButton}
                            onPress={() => navigation.navigate('Notification')} // Open Notification Page
                          >
                            <FontAwesome name="bell-o" size={24} color="grey" />
                          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Course List */}
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseCard}>
            <Image source={{ uri: item.image }} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{item.title}</Text>
              <Text style={styles.courseSubTitle}>{item.subTitle}</Text>
            </View>
            <TouchableOpacity
              style={styles.visitIcon}
              onPress={() => navigation.navigate('CourseDetailss', { course: item })}
            >
              <FontAwesome name="arrow-right" size={20} color="#0052D4" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 8,
    marginTop: 10,
    marginBottom: 15,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    backgroundColor: '#0052D4',
    borderRadius: 8,
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  courseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    // elevation: 3,
  },
  courseImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  courseSubTitle: {
    fontSize: 14,
    color: '#777',
  },
  visitIcon: {
    padding: 8,
  },
  notificationButton: { marginLeft: 15, },
  cartButton: { marginLeft: 15, },
});

export default MyLearning;