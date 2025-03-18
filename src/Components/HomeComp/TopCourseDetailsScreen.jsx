import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Svg, { Circle } from "react-native-svg";

const TopCourseDetailsScreen = ({ route, navigation }) => {
  const { course } = route.params; // Get course data from navigation

  // Define topics for each course
  const courseTopics = {
    "1": [
      { id: "1", title: "Intro to Full-Stack", duration: "10 min", progress: 75, videoUrl: "https://videos.pexels.com/video-files/3252970/3252970-sd_640_360_25fps.mp4" },
      { id: "2", title: "Frontend Basics", duration: "15 min", progress: 50, videoUrl: "https://videos.pexels.com/video-files/3252923/3252923-sd_640_360_25fps.mp4" },
      { id: "3", title: "Backend Essentials", duration: "20 min", progress: 30, videoUrl: "https://videos.pexels.com/video-files/8814086/8814086-sd_640_360_25fps.mp4" },
    ],
    "2": [
      { id: "1", title: "Digital Marketing Basics", duration: "12 min", progress: 60, videoUrl: "https://videos.pexels.com/video-files/123456/123456.mp4" },
      { id: "2", title: "SEO Optimization", duration: "18 min", progress: 40, videoUrl: "https://videos.pexels.com/video-files/654321/654321.mp4" },
      { id: "3", title: "Social Media Marketing", duration: "25 min", progress: 20, videoUrl: "https://videos.pexels.com/video-files/789012/789012.mp4" },
    ],
    "3": [
      { id: "1", title: "Data Science Overview", duration: "15 min", progress: 80, videoUrl: "https://videos.pexels.com/video-files/123789/123789.mp4" },
      { id: "2", title: "Machine Learning Basics", duration: "20 min", progress: 50, videoUrl: "https://videos.pexels.com/video-files/987654/987654.mp4" },
    ],
    "4": [
      { id: "1", title: "Introduction to UI/UX", duration: "10 min", progress: 70, videoUrl: "https://videos.pexels.com/video-files/101112/101112.mp4" },
      { id: "2", title: "Wireframing & Prototyping", duration: "22 min", progress: 35, videoUrl: "https://videos.pexels.com/video-files/456789/456789.mp4" },
    ],
  };

  // Get topics for the selected course (default to empty array if not found)
  const topics = courseTopics[course.id] || [];

  // Circular Progress Component
  const CircularProgress = ({ percentage }) => {
    const size = 40;
    const strokeWidth = 4;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progressOffset = circumference - (percentage / 100) * circumference;

    return (
      <View style={styles.progressWrapper}>
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <Circle cx={size / 2} cy={size / 2} r={radius} stroke="#e0e0e0" strokeWidth={strokeWidth} fill="none" />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#2D9CDB"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            strokeLinecap="round"
          />
        </Svg>
        <Text style={styles.progressText}>{percentage}%</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Course Image */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: course.image }} style={styles.courseImage} />
        <View style={styles.overlay} />
        <Text style={styles.courseTitle}>{course.title}</Text>
      </View>

      {/* Course Details */}
      <Text style={styles.instructor}>{course.instructor}</Text>
      <View style={styles.ratingContainer}>
        <Icon name="star" size={16} color="#FFD700" />
        <Text style={styles.rating}>{course.rating}</Text>
      </View>
      <Text style={styles.fees}>{course.fees}</Text>

      {/* Topics List */}
      <Text style={styles.topicHeader}>Topics</Text>
      <FlatList
        data={topics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.topicItem}
            onPress={() => navigation.navigate("VideoPlayer", { videoUrl: item.videoUrl })}
          >
            <View>
              <Text style={styles.topicTitle}>{item.title}</Text>
              <Text style={styles.duration}>Duration: {item.duration}</Text>
            </View>
            <CircularProgress percentage={item.progress} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  imageContainer: { position: "relative", width: "100%", height: 200 },
  courseImage: { width: "100%", height: "100%", borderRadius: 10 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 10 },
  courseTitle: { position: "absolute", bottom: 20, left: 20, fontSize: 22, fontWeight: "bold", color: "#fff" },
  instructor: { fontSize: 16, color: "#666", marginTop: 10 },
  ratingContainer: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  rating: { fontSize: 16, fontWeight: "bold", marginLeft: 5 },
  fees: { fontSize: 18, fontWeight: "bold", color: "#27ae60", marginTop: 8 },
  topicHeader: { fontSize: 20, fontWeight: "bold", color: "#333", marginTop: 16, marginBottom: 8 },
  topicItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 15, borderBottomWidth: 1, borderColor: "#eee" },
  topicTitle: { fontSize: 16, color: "#333" },
  duration: { fontSize: 14, color: "#666", marginTop: 4 },
  progressWrapper: { position: "relative", alignItems: "center", justifyContent: "center" },
  progressText: { position: "absolute", fontSize: 12, fontWeight: "bold", color: "#000" },
});

export default TopCourseDetailsScreen;
