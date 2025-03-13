import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const webCourses = [
  {
    id: "1",
    image: "https://i.pinimg.com/236x/a7/58/49/a758499316370666df04791f12cb4f3f.jpg",
    title: "Full-Stack Web Development",
    description: "Master HTML, CSS, JavaScript & more.",
    rating: 4.9,
    fees: "₹6,999",
  },
  {
    id: "2",
    image: "https://i.pinimg.com/236x/dd/21/03/dd21037353cf8cd9afdeec4c78e65e42.jpg",
    title: "React & Next.js",
    description: "Learn modern frontend development.",
    rating: 4.8,
    fees: "₹5,499",
  },
  {
    id: "3",
    image: "https://i.pinimg.com/236x/e8/7b/0c/e87b0c522aafa62a53080e1baeb3ed3e.jpg",
    title: "Node.js & Express",
    description: "Backend development with JavaScript.",
    rating: 4.7,
    fees: "₹4,999",
  },
  {
    id: "4",
    image: "https://i.pinimg.com/236x/27/c3/cd/27c3cd1e3c2b86ba092bda0104d76205.jpg",
    title: "MERN Stack Masterclass",
    description: "MongoDB, Express, React, Node.js",
    rating: 4.9,
    fees: "₹7,499",
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

    {/* Top Pick Badge */}
    <TouchableOpacity style={styles.badge}>
      <Text style={styles.badgeText}>Top Pick</Text>
    </TouchableOpacity>
  </View>
);

const FeaturedWebCourses = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Featured <Text style={{color:"#0052D4"}}>Web Development</Text> Courses</Text>
      <FlatList
        data={webCourses}
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
    backgroundColor: "#fff",
    paddingBottom: 12,
    marginRight: 15,
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
  },
  description: {
    fontSize: 14,
    color: "#666",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    paddingHorizontal: 10,
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
  },
  badge: {
    backgroundColor: "#D0F0C0", // Light Green
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 8,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});

export default FeaturedWebCourses;
