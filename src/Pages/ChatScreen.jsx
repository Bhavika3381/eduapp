import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

const LiveSessionsScreen = () => {
  const navigation = useNavigation();

  const [sessions, setSessions] = useState([
    { id: '1', name: 'Business Intelligence Basics', description: 'Learn the fundamentals of BI with industry experts.', image: 'https://media.istockphoto.com/id/1207581028/photo/futuristic-city-with-light-streaks-long-exposure-traffic-big-data-transmission-speed-abstract.jpg?s=612x612&w=0&k=20&c=d6v8gw6TEFexNz1vvxqBiRjd3MJZMTHrZgaJRaddUUM=', startTime: moment().add(1, 'hour').toISOString(), likes: 0 },
    { id: '2', name: 'AI in Marketing', description: 'How AI is transforming digital marketing.', image: 'https://media.istockphoto.com/id/1480239219/photo/an-analyst-uses-a-computer-and-dashboard-for-data-business-analysis-and-data-management.jpg?s=612x612&w=0&k=20&c=URv6HYZ8L3NCQnxT8-ITvInMW7mlsTE6EjnXHaqF-H4=', startTime: moment().add(2, 'hours').toISOString(), likes: 0 },
    { id: '3', name: 'Data Science Crash Course', description: 'A beginner-friendly guide to Data Science.', image: 'https://media.istockphoto.com/id/1083833700/photo/data-science-business-internet-and-technology-concept-on-server-room-background.jpg?s=612x612&w=0&k=20&c=zJLX7au-rd7-XliGpx02kFjyB-7wpybrYTJ-RkWTDn8=', startTime: moment().add(3, 'hours').toISOString(), likes: 0 },
    { id: '4', name: 'UX/UI Design Trends', description: 'Stay ahead with the latest UX/UI design trends.', image: 'https://media.istockphoto.com/id/1162109107/vector/online-statistics-ux-ui-and-data-analytics-digital-money-market-investment-finance-and.jpg?s=612x612&w=0&k=20&c=uWn1Bd9cMbC8XengkTJgz6EYeZGima0evdxoPNQUd68=', startTime: moment().add(4, 'hours').toISOString(), likes: 0 },
  ]);

  const [timers, setTimers] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimers = {};
      sessions.forEach(session => {
        const timeLeft = moment(session.startTime).diff(moment(), 'seconds');
        updatedTimers[session.id] = timeLeft > 0 ? moment.utc(timeLeft * 1000).format('HH:mm:ss') : 'Live Now!';
      });
      setTimers(updatedTimers);
    }, 1000);

    return () => clearInterval(interval);
  }, [sessions]);

  const handleLike = (id) => {
    setSessions(prevSessions =>
      prevSessions.map(session =>
        session.id === id ? { ...session, likes: session.likes + 1 } : session
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Live Sessions</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <FontAwesome name="bell" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Live Sessions List */}
      <FlatList
        data={sessions}
        renderItem={({ item }) => (
          <View style={styles.sessionCard}>
            <Image source={{ uri: item.image }} style={styles.sessionImage} />
            <View style={styles.sessionDetails}>
              <Text style={styles.sessionTitle}>{item.name}</Text>
              <Text style={styles.sessionDescription}>{item.description}</Text>
              <Text style={[styles.timer, timers[item.id] === 'Live Now!' && styles.liveNow]}>{timers[item.id]}</Text>
              <View style={styles.actions}>
                <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.iconButton}>
                  <FontAwesome name="thumbs-up" size={20} color="#0052D4" />
                  <Text style={styles.iconText}>{item.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <FontAwesome name="share" size={20} color="#4364F7" />
                  <Text style={styles.iconText}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },

  // Header styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0052D4',
    padding: 15,
    paddingTop: 20,
  },
  backButton: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', flex: 1, textAlign: 'center' },
  notificationButton: { padding: 5 },

  // Session card styles
  sessionCard: { backgroundColor: '#fff', borderRadius: 10, margin: 15, overflow: 'hidden', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  sessionImage: { width: '100%', height: 180 },
  sessionDetails: { padding: 15 },
  sessionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  sessionDescription: { fontSize: 14, color: '#666', marginVertical: 5 },
  timer: { fontSize: 16, fontWeight: 'bold', color: '#ff9800', marginTop: 5 },
  liveNow: { color: '#d32f2f' },

  // Actions (Like & Share)
  actions: { flexDirection: 'row', marginTop: 10 },
  iconButton: { flexDirection: 'row', alignItems: 'center', marginRight: 20 },
  iconText: { marginLeft: 5, fontSize: 14, color: '#333' },
});

export default LiveSessionsScreen;
