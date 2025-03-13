import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';

const learningData = [
  { id: 1, title: 'React Native Mastery', subheading: 'Advance your skills', progress: 0.75, colors: ['#6a11cb', '#2575fc'] },
  { id: 2, title: 'UI/UX Design', subheading: 'Enhance user experience', progress: 0.60, colors: ['#ff9966', '#ff5e62'] },
//   { id: 3, title: 'Data Science', subheading: 'Learn data analysis', progress: 0.85, colors: ['#00c6ff', '#0072ff'] },
//   { id: 4, title: 'Marketing Strategies', subheading: 'Grow your business', progress: 0.50, colors: ['#f7971e', '#ffd200'] },
];

const ImproveLearningScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Improve Your Learning</Text>
      {learningData.map((item) => (
        <LinearGradient key={item.id} colors={item.colors} style={styles.card}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subheading}>{item.subheading}</Text>
          </View>
          <View style={styles.progressContainer}>
            <Progress.Circle size={50} progress={item.progress} color={'#fff'} thickness={5} showsText={false} />
            <Text style={styles.percentage}>{Math.round(item.progress * 100)}%</Text>
          </View>
        </LinearGradient>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15 },
  header: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  card: { flexDirection: 'row', alignItems: 'center', borderRadius: 10, padding: 15, marginBottom: 10 },
  textContainer: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  subheading: { fontSize: 14, color: '#f0f0f0' },
  progressContainer: { alignItems: 'center', justifyContent: 'center' },
  percentage: { position: 'absolute', fontSize: 12, fontWeight: 'bold', color: '#fff' },
});

export default ImproveLearningScreen;
