import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './src/Pages/Home';
import CoursesScreen from './src/Pages/CoursesScreen';
import ChatScreen from './src/Pages/ChatScreen';
import MenuScreen from './src/Pages/MenuScreen';
import Footer from './src/Components/Footer';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './src/Pages/HomeScreen';
import CourseDetailScreen from './src/Components/CoursesComp/CourseDetailScreen';
import BusinessCourseDetailScreen from './src/Components/CoursesComp/BusinessCourseDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Courses" component={CoursesScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />

          {/* <Stack.Screen name="RecentUploads" component={RecentUploadsScreen} options={{ title: 'Recent Uploads' }} /> */}
          <Stack.Screen name="CourseDetail" component={CourseDetailScreen} options={{ title: 'Course Details' }} />
          <Stack.Screen name="CourseDetails" component={BusinessCourseDetailScreen} options={{ title: 'Course Details' }} />
        </Stack.Navigator>
        <Footer />
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
