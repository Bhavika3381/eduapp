import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Notification = ({ navigation }) => {
  const [notifications, setNotifications] = useState([
    { id: '1', type: 'course', message: 'New lesson added to React Native!', time: '2h ago', read: false },
    { id: '2', type: 'assignment', message: 'Your assignment is due tomorrow.', time: '1d ago', read: true },
    { id: '3', type: 'offer', message: '50% off on Web Development Course!', time: '3d ago', read: false },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  return (
    <View style={styles.container}>
      {/* Header with Gradient */}
      <LinearGradient colors={['#0052D4', '#65C7F7']} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <FontAwesome name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity onPress={() => alert("Help section coming soon!")} style={styles.iconButton}>
          <FontAwesome name="question-circle" size={22} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.notificationItem, item.read && styles.readNotification]} 
            onPress={() => markAsRead(item.id)}
          >
            <FontAwesome name={item.type === 'offer' ? 'tag' : 'book'} size={20} color={item.read ? 'gray' : '#0052D4'} />
            <View style={styles.textContainer}>
              <Text style={styles.message}>{item.message}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', },
  
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5
  },
  iconButton: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff' },

  notificationItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 10, 
    // elevation: 3,
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    // shadowRadius: 5 
  },
  readNotification: { opacity: 0.6 },
  textContainer: { marginLeft: 10 },
  message: { fontSize: 16, fontWeight: 'bold', color: "black" },
  time: { fontSize: 12, color: 'gray' },
});

export default Notification;
