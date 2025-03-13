import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Circle, Svg, Rect } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';

const CourseDetailScreen = ({ route }) => {
  const { course } = route.params;
  const [selectedVideo, setSelectedVideo] = useState(null);

  const chapters = [
    { id: '1', title: 'Introduction to the Course', duration: '10 min', progress: 30, videoUrl: 'https://videos.pexels.com/video-files/8828895/8828895-sd_640_360_25fps.mp4' },
    { id: '2', title: 'Setting Up Your Environment', duration: '15 min', progress: 80, videoUrl: 'https://videos.pexels.com/video-files/2887463/2887463-sd_640_360_25fps.mp4' },
    { id: '3', title: 'Understanding Components', duration: '20 min', progress: 0, videoUrl: 'https://videos.pexels.com/video-files/852421/852421-sd_640_360_30fps.mp4' },
  ];

  const overallProgress = chapters.reduce((sum, chapter) => sum + chapter.progress, 0) / chapters.length;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: course.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.courseName}>{course.name}</Text>
        <Text style={styles.description}>{course.description}</Text>
        <View style={styles.infoRow}><Text style={styles.label}>Duration:</Text><Text style={styles.value}>{course.duration}</Text></View>
        <View style={styles.infoRow}><Text style={styles.label}>Course Fees:</Text><Text style={styles.value}>{course.fees}</Text></View>
        <View style={styles.viewersContainer}><FontAwesome name="eye" size={16} color="#0052D4" /><Text style={styles.viewers}>{course.viewers} viewers</Text></View>
        <TouchableOpacity style={styles.enrollButton}><LinearGradient colors={['#0052D4', '#4364F7', '#6FB1FC']} style={styles.gradientButton}><Text style={styles.enrollText}>Enroll Now</Text></LinearGradient></TouchableOpacity>
      </View>

      <View style={styles.chaptersContainer}>
        <Text style={styles.chaptersTitle}>Course Chapters</Text>
        <View style={styles.progressBar}><Text style={styles.progressTexts}>Overall Progress: {overallProgress.toFixed(1)}%</Text><Svg width="100%" height="10"><Rect x="0" y="0" width="100%" height="10" fill="#ddd" rx="5" /><Rect x="0" y="0" width={`${overallProgress}%`} height="10" fill="#0052D4" rx="5" /></Svg></View>
        <FlatList data={chapters} renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => setSelectedVideo(item.id === selectedVideo ? null : item.id)}>
              <View style={styles.chapterCard}>
                <View style={styles.chapterTextContainer}><Text style={styles.chapterNumber}>Chapter {item.id}</Text><Text style={styles.chapterTitle}>{item.title}</Text><Text style={styles.chapterDuration}><FontAwesome name="clock-o" size={14} color="#666" /> {item.duration}</Text></View>
               {/* < Text style={styles.chapterNumber}>Chapter {item.id}</Text>
            <Text style={styles.chapterTitle}>{item.title}</Text> */}
                <View style={styles.progressContainer}><Svg width={40} height={40}><Circle cx="20" cy="20" r="18" stroke="#ddd" strokeWidth="4" fill="none" /><Circle cx="20" cy="20" r="18" stroke="#0052D4" strokeWidth="4" fill="none" strokeDasharray={Math.PI * 2 * 18} strokeDashoffset={(1 - item.progress / 100) * Math.PI * 2 * 18} strokeLinecap="round" /></Svg><Text style={styles.progressText}>{item.progress}%</Text></View>
              </View>
            </TouchableOpacity>
            {selectedVideo === item.id && <View style={styles.videoContainer}><TouchableOpacity style={styles.closeButton} onPress={() => setSelectedVideo(null)}><FontAwesome name="times-circle" size={24} color="white" /></TouchableOpacity><Video source={{ uri: item.videoUrl }} style={styles.video} controls resizeMode="contain" /></View>}
          </View>
        )} keyExtractor={(item) => item.id} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  image: { width: '100%', height: 250, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  details: { padding: 20 },
  courseName: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  description: { fontSize: 14, color: '#666', marginBottom: 10 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  value: { fontSize: 14, color: '#555' },
  viewersContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  viewers: { fontSize: 14, color: '#0052D4', marginLeft: 5 },
  enrollButton: { borderRadius: 8, marginTop: 20, overflow: 'hidden' },
  gradientButton: { padding: 12, alignItems: 'center' },
  enrollText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  chaptersContainer: { padding: 20, marginTop: 10 },
  chaptersTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  chapterCard: { backgroundColor: '#fff', paddingVertical: 15, paddingHorizontal: 20, marginBottom: 5, borderBottomWidth: 1, borderBottomColor: '#ddd', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  progressContainer: { alignItems: 'center', justifyContent: 'center' },
  progressText: { position: 'absolute', fontSize: 12, fontWeight: 'bold', color: '#0052D4' },
  videoContainer: { height: 200, marginVertical: 10, borderRadius: 10, overflow: 'hidden', position: 'relative', backgroundColor: '#000' },
  video: { width: '100%', height: '100%' },
  closeButton: { position: 'absolute', top: 5, right: 5, zIndex: 1, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 12, padding: 5 },
  chapterCard: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',  // Keeps text left and progress right
    alignItems: 'center',
  },
  
  chapterTextContainer: {
    flexDirection: 'column', // Stack number & title vertically
    alignItems: 'flex-start', // Align text to the left
  },
  
  chapterNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0052D4',
  },
  
  chapterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 2,
  },
  
});

export default CourseDetailScreen;
