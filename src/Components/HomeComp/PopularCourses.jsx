import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const courses = [
  {
    id: "1",
    image: "https://i.pinimg.com/236x/d7/2b/7a/d72b7ad4d052a75ad653378efcb6bae1.jpg",
    title: "React Native Masterclass",
    description: "Learn React Native",
    rating: 4.8,
    fees: "₹5,499",
  },
  {
    id: "2",
    image: "https://i.pinimg.com/236x/94/4c/ec/944ceca0fa23e91d017764d3224cacfb.jpg",
    title: "Startup & Entrepreneurship",
    description: "Build your business",
    rating: 4.7,
    fees: "₹3,999",
  },
  {
    id: "3",
    image: "https://i.pinimg.com/474x/5e/6d/e7/5e6de775f7a337e2a528a0867e66ab1f.jpg",
    title: "Python for Beginners",
    description: "Python advanced level.",
    rating: 4.9,
    fees: "₹4,299",
  },
  {
    id: "4",
    image: "https://i.pinimg.com/474x/d4/ba/96/d4ba9684dd8a90e13a22a005a6c1e0bc.jpg",
    title: "Graphic Design Essentials",
    description: "Learn Photoshop",
    rating: 4.6,
    fees: "₹2,999",
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Icon key={i} name="star" size={16} color="#FFD700" />);
  }
  if (halfStar) {
    stars.push(<Icon key="half" name="star-half" size={16} color="#FFD700" />);
  }
  return stars;
};

const CourseCard = ({ course }) => (
  <View style={styles.card}>
    {/* Course Image */}
    <Image source={{ uri: course.image }} style={styles.courseImage} />

    {/* Course Title */}
    <Text style={styles.title}>{course.title}</Text>

    {/* Description */}
    <Text style={styles.description}>{course.description}</Text>

    {/* Ratings */}
    <View style={styles.ratingContainer}>
      <View style={styles.starRow}>{renderStars(course.rating)}</View>
      <Text style={styles.ratingText}>{course.rating}</Text>
    </View>

    {/* Fees */}
    <Text style={styles.fees}>{course.fees}</Text>

    {/* Bestseller Badge */}
    <TouchableOpacity style={styles.badge}>
      <Text style={styles.badgeText}>🔥 Bestseller</Text>
    </TouchableOpacity>
  </View>
);

const PopularCourses = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Popular Courses</Text>
      <FlatList
        data={courses}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseCard course={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 10,
    backgroundColor: "#fff",
    flex: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    marginBottom: 20,
  },
  card: {
    width: 160,
    // borderRadius: 10,
    backgroundColor: "#fff",
    paddingBottom: 12,
    paddingLeft: 0,
    marginRight: 15,
    // elevation: 3,
  },
  courseImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 8,
    paddingHorizontal: 10,
    paddingLeft: 0,
  },
  description: {
    fontSize: 14,
    color: "#666",
    paddingHorizontal: 10,
    marginBottom: 5,
    paddingLeft: 0,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    paddingHorizontal: 10,
    paddingLeft: 0,
  },
  starRow: {
    flexDirection: "row",
  },
  ratingText: {
    fontSize: 14,
    color: "#444",
    marginLeft: 6,
    fontWeight: "bold",
  },
  fees: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#27ae60",
    marginTop: 6,
    paddingHorizontal: 10,
    paddingLeft: 0,
  },
  badge: {
    backgroundColor: "#E5F9E0",
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 10,
    // borderRadius: 15,
    // paddingLeft: 0,
    marginTop: 8,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});

export default PopularCourses;
