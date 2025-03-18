
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';

const CourseDetails = ({ route }) => {
  const { course } = route.params;
  const [activeTab, setActiveTab] = useState('Lectures');
  const [videoModal, setVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const sessions = [
    { 
      id: '1', title: 'Session 1: Introduction', topics: [
        { id: '1.1', title: 'What is React Native?', video: 'https://videos.pexels.com/video-files/6963744/6963744-sd_640_360_25fps.mp4' },
        { id: '1.2', title: 'Installation & Setup', video: 'https://videos.pexels.com/video-files/6963744/6963744-sd_640_360_25fps.mp4' }
      ] 
    },
    { 
      id: '2', title: 'Session 2: Core Concepts', topics: [
        { id: '2.1', title: 'Components & Props', video: 'https://videos.pexels.com/video-files/6953930/6953930-sd_640_360_25fps.mp4' },
        { id: '2.2', title: 'State & Lifecycle', video: 'https://videos.pexels.com/video-files/6953930/6953930-sd_640_360_25fps.mp4' }
      ] 
    },
    { 
      id: '3', title: 'Session 3: Advanced Topics', topics: [
        { id: '3.1', title: 'Navigation & Routing', video: 'https://videos.pexels.com/video-files/6962343/6962343-sd_640_360_25fps.mp4' },
        { id: '3.2', title: 'Performance Optimization', video: 'https://videos.pexels.com/video-files/6962343/6962343-sd_640_360_25fps.mp4' }
      ] 
    }
  ];

  return (
    <View style={styles.container}>
      {/* Course Image with Overlay */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: course.image }} style={styles.courseImage} />
        <View style={styles.overlay}>
          <Text style={styles.courseTitle}>{course.title}</Text>
        </View>
      </View>

      {/* Course Info */}
      <View style={styles.courseInfo}>
        <Text style={styles.lectureTitle}>Lecture: {course.title}</Text>
        <Text style={styles.teacherName}>Instructor: John Doe</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {['Lectures', 'More'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Sessions & Topics */}
      <FlatList
        data={sessions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.session}>
            <Text style={styles.sessionTitle}>{item.title}</Text>
            {item.topics.map((topic) => (
              <View key={topic.id} style={styles.topic}>
                <Text style={styles.topicTitle}>{topic.title}</Text>
                <View style={styles.actions}>
                  <TouchableOpacity onPress={() => { setSelectedVideo(topic.video); setVideoModal(true); }}>
                    <FontAwesome name="play-circle" size={24} color="#0052D4" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <FontAwesome name="cloud-download" size={24} color="#555" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      />

      {/* Video Modal */}
      <Modal visible={videoModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          {selectedVideo && (
            <Video 
              source={{ uri: selectedVideo }} 
              style={styles.videoPlayer} 
              controls
              resizeMode="contain"
            />
          )}
          <TouchableOpacity onPress={() => setVideoModal(false)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  imageContainer: { position: 'relative' },
  courseImage: { width: '100%', height: 200 },
  overlay: { 
    position: 'absolute', width: '100%', height: '100%', 
    justifyContent: 'center', alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.4)' 
  },
  courseTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  courseInfo: { padding: 15 },
  lectureTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  teacherName: { fontSize: 16, color: '#777', marginTop: 5 },
  tabContainer: { flexDirection: 'row', justifyContent: 'center', padding: 10 },
  tab: { paddingVertical: 10, paddingHorizontal: 20, borderBottomWidth: 2, borderBottomColor: 'transparent' },
  activeTab: { borderBottomColor: '#0052D4' },
  tabText: { fontSize: 16, color: '#777' },
  activeTabText: { color: '#0052D4', fontWeight: 'bold' },
  session: { padding: 15 },
  sessionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  topic: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
  topicTitle: { fontSize: 16, color: '#555' },
  actions: { flexDirection: 'row', gap: 15 },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.8)' },
  videoPlayer: { width: '90%', height: 250 },
  closeButton: { marginTop: 20, padding: 10, backgroundColor: '#ff4444', borderRadius: 5 },
  closeButtonText: { color: '#fff', fontWeight: 'bold' }
});

export default CourseDetails;
