import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './src/Pages/Home';
import CoursesScreen from './src/Pages/CoursesScreen';
// import ChatScreen from './src/Pages/ChatScreen';
// import MenuScreen from './src/Pages/MenuScreen';
import Footer from './src/Components/Footer';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './src/Pages/HomeScreen';
import CourseDetailScreen from './src/Components/CoursesComp/CourseDetailScreen';
import BusinessCourseDetailScreen from './src/Components/CoursesComp/BusinessCourseDetailScreen';
import AccountScreen from './src/Pages/AccountScreen';
import WishlistScreen from './src/Pages/WishlistScreen';
import MyLearningScreen from './src/Pages/MyLearningScreen';
import CourseDetailss from './src/Components/MyLearningComp/CourseDetailss';
import Notification from './src/Components/HeaderComp/Notification';
import Cart from './src/Components/HeaderComp/Cart';
import Checkout from './src/Components/HeaderComp/Checkout';
import CourseListScreen from './src/Components/CourseListScreen';
import TopCourseDetailsScreen from './src/Components/HomeComp/TopCourseDetailsScreen';
import VideoPlayerScreen from './src/Components/HomeComp/VideoPlayerScreen';

// import CourseListScreen from './src/Components/CourseListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Courses" component={CoursesScreen} />
          {/* <Stack.Screen name="Chat" component={ChatScreen} /> */}
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="Wishlist" component={WishlistScreen} />
          <Stack.Screen name="MyLearning" component={MyLearningScreen} />
          {/* <Stack.Screen name="Menu" component={MenuScreen} /> */}

         
           {/* Course Details Screens */}
          <Stack.Screen name="CourseDetail" component={CourseDetailScreen} options={{ title: 'Course Details' }} />
          <Stack.Screen name="CourseDetails" component={BusinessCourseDetailScreen} options={{ title: 'Course Details' }} />
          <Stack.Screen name="CourseDetailss" component={CourseDetailss} options={{ title: 'Course Details' }} />

          {/* Utility Screens */}
          <Stack.Screen name="Notification" component={Notification} options={{ title: 'Notification' }} />
          <Stack.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
          <Stack.Screen name="Checkout" component={Checkout} options={{ title: 'Checkout' }} />
          <Stack.Screen name="CourseList" component={CourseListScreen} options={{ title: 'Courses' }} />

          <Stack.Screen name="TopCourseDetails" component={TopCourseDetailsScreen} options={{ title: 'TopCourseDetails' }} />
          <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} options={{ title: 'VideoPlayerScreen' }} />
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
