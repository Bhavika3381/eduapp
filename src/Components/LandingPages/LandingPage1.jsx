
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <LinearGradient colors={['#0052D4', '#4364F7']} style={styles.header}>
        <Image source={require('../assets/logo.jpg')} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Learn Anytime, Anywhere</Text>
        <Text style={styles.heroSubtitle}>Join thousands of students and upskill yourself today!</Text>
        <TouchableOpacity 
          style={styles.getStartedButton} 
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
        <Image source={require('../assets/image 62.png')} style={styles.heroImage} />
      </View>

      {/* Features Section */}
      <View style={styles.features}>
        <Text style={styles.sectionTitle}>Why Choose Us?</Text>
        <View style={styles.featureItem}>
          <Image source={require('../assets/image 62.png')} style={styles.featureIcon} />
          <Text style={styles.featureText}>Interactive Learning</Text>
        </View>
        <View style={styles.featureItem}>
          <Image source={require('../assets/Rectangle 23.png')} style={styles.featureIcon} />
          <Text style={styles.featureText}>Expert Instructors</Text>
        </View>
        <View style={styles.featureItem}>
          <Image source={require('../assets/Rectangle 23.png')} style={styles.featureIcon} />
          <Text style={styles.featureText}>Certified Courses</Text>
        </View>
      </View>

      {/* Testimonials Section */}
      <View style={styles.testimonials}>
        <Text style={styles.sectionTitle}>What Our Students Say</Text>
        <View style={styles.testimonialCard}>
          <Text style={styles.testimonialText}>"This app has transformed my learning experience!"</Text>
          <Text style={styles.studentName}>- John Doe</Text>
        </View>
        <View style={styles.testimonialCard}>
          <Text style={styles.testimonialText}>"Highly recommended for anyone looking to upskill!"</Text>
          <Text style={styles.studentName}>- Sarah Lee</Text>
        </View>
      </View>

      {/* Get Started Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Start your learning journey today!</Text>
        <TouchableOpacity 
          style={styles.getStartedButton} 
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.getStartedText}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center' },
  logo: { width: 120, height: 40 },
  loginText: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
  hero: { alignItems: 'center', padding: 20 },
  heroTitle: { fontSize: 26, fontWeight: 'bold', color: '#333', textAlign: 'center' },
  heroSubtitle: { fontSize: 16, color: '#666', textAlign: 'center', marginTop: 5 },
  getStartedButton: { backgroundColor: '#0052D4', padding: 12, borderRadius: 8, marginTop: 15 },
  getStartedText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  heroImage: { width: 250, height: 250, marginTop: 20 },
  features: { padding: 20 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'center' },
  featureItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  featureIcon: { width: 40, height: 40, marginRight: 10 },
  featureText: { fontSize: 18, color: '#333' },
  testimonials: { padding: 20, backgroundColor: '#eef2f3' },
  testimonialCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10 },
  testimonialText: { fontSize: 16, color: '#555', fontStyle: 'italic' },
  studentName: { fontSize: 14, fontWeight: 'bold', marginTop: 5 },
  footer: { alignItems: 'center', padding: 20, backgroundColor: '#0052D4' },
  footerText: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
});

export default LandingPage;
