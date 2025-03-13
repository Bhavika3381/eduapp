import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Switch, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const StudentAccount = () => {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleNotifications = () => setNotifications(!notifications);

  return (
    <ScrollView style={[styles.container, darkMode && styles.darkContainer]}>
      {/* Profile Section */}
      <LinearGradient colors={['#4A90E2', '#0052D4']} style={styles.profileSection}>
        <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.profileImage} />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>johndoe@example.com</Text>
        <TouchableOpacity style={styles.editProfile}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </LinearGradient>

     {/* Enrolled Courses */}
     <View style={styles.section}>
        <Text style={[styles.sectionTitle, darkMode && styles.darkText]}>Enrolled Courses</Text>
        <View style={styles.course}>
          <Text style={styles.courseTitle}>React Native for Beginners</Text>
          <View style={styles.progressBar}><View style={[styles.progress, { width: '70%' }]} /></View>
          <Text style={styles.progressText}>70% Complete</Text>
        </View>
        <View style={styles.course}>
          <Text style={styles.courseTitle}>Advanced JavaScript</Text>
          <View style={styles.progressBar}><View style={[styles.progress, { width: '40%' }]} /></View>
          <Text style={styles.progressText}>40% Complete</Text>
        </View>
      </View>

      {/* Subscription & Payments */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, darkMode && styles.darkText]}>Subscription & Payments</Text>
        <TouchableOpacity style={styles.card}>
          <FontAwesome name="credit-card" size={22} color="#0052D4" />
          <Text style={styles.optionText}>View Payment History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <FontAwesome name="arrow-up" size={22} color="#0052D4" />
          <Text style={styles.optionText}>Upgrade Subscription</Text>
        </TouchableOpacity>
      </View>

      {/* Certificates & Achievements */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, darkMode && styles.darkText]}>Certificates & Achievements</Text>
        <TouchableOpacity style={styles.card}>
          <FontAwesome name="certificate" size={22} color="#FFD700" />
          <Text style={styles.optionText}>Download Certificates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <FontAwesome name="trophy" size={22} color="#FF5733" />
          <Text style={styles.optionText}>View Achievements</Text>
        </TouchableOpacity>
      </View>

      {/* Settings */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, darkMode && styles.darkText]}>Settings</Text>
        <View style={styles.card}>
          <FontAwesome name="moon-o" size={22} color={darkMode ? "#FFD700" : "#0052D4"} />
          <Text style={styles.optionText}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={toggleDarkMode} />
        </View>
        <View style={styles.card}>
          <FontAwesome name="bell" size={22} color={notifications ? "#00C853" : "#555"} />
          <Text style={styles.optionText}>Notifications</Text>
          <Switch value={notifications} onValueChange={toggleNotifications} />
        </View>
      </View>

      {/* Support & Help */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, darkMode && styles.darkText]}>Support & Help</Text>
        <TouchableOpacity style={styles.card}>
          <FontAwesome name="question-circle" size={22} color="#0052D4" />
          <Text style={styles.optionText}>FAQs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <FontAwesome name="phone" size={22} color="#0052D4" />
          <Text style={styles.optionText}>Contact Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <FontAwesome name="exclamation-triangle" size={22} color="#FF5733" />
          <Text style={styles.optionText}>Report a Problem</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <FontAwesome name="sign-out" size={22} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  darkContainer: { backgroundColor: '#222' },
  profileSection: { alignItems: 'center', padding: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  profileImage: { width: 90, height: 90, borderRadius: 45, marginBottom: 10, borderWidth: 2, borderColor: '#fff' },
  userName: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  userEmail: { color: '#ddd', fontSize: 14 },
  editProfile: { backgroundColor: '#fff', paddingVertical: 6, paddingHorizontal: 15, borderRadius: 20, marginTop: 10 },
  editProfileText: { color: '#0052D4', fontWeight: 'bold' },
  section: { padding: 15 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  darkText: { color: '#fff' },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 12, marginVertical: 5, },
  optionText: { fontSize: 16, marginLeft: 15, flex: 1 ,color:"#333"},
  progressBar: { height: 8, backgroundColor: '#ddd', borderRadius: 5, marginTop: 5 },
  progress: { height: 8, backgroundColor: '#0052D4', borderRadius: 5 },
  progressText: { fontSize: 12, marginTop: 3, color: '#666' },
  course: { backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 8, },
  courseTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  logoutButton: { flexDirection: 'row', backgroundColor: '#FF4444', padding: 15, borderRadius: 12, margin: 20, alignItems: 'center', justifyContent: 'center' },
  logoutText: { color: '#fff', fontSize: 18, marginLeft: 10, fontWeight: 'bold' }
});

export default StudentAccount;
