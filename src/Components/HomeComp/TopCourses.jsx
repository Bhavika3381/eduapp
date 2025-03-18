import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const courses = [
  {
    id: "1",
    image: "https://i.pinimg.com/236x/14/cb/c1/14cbc10e848a3e5e794c11b57bf1ba3c.jpg",
    title: "Full-Stack Development",
    instructor: "By John Doe",
    rating: 4.5,
    fees: "₹4,999",
  },
  {
    id: "2",
    image: "https://i.pinimg.com/236x/22/bc/8e/22bc8ebef610eb881071e1a7007a7a80.jpg",
    title: "Digital Marketing",
    instructor: "By Jane Smith",
    rating: 4.7,
    fees: "₹3,499",
  },
  {
    id: "3",
    image: "https://i.pinimg.com/236x/d3/d5/a3/d3d5a3e259ee8ca212d85f07e92c16cd.jpg",
    title: "Data Science Mastery",
    instructor: "By Dr. Ravi Kumar",
    rating: 4.8,
    fees: "₹5,999",
  },
  {
    id: "4",
    image: "https://i.pinimg.com/236x/e6/ec/86/e6ec86d140147e8dc72514dbd2af546f.jpg",
    title: "UI/UX Design",
    instructor: "By Alex Johnson",
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

const CourseCard = ({ course }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("TopCourseDetails", { course })}>
      <View style={styles.card}>
        <Image source={{ uri: course.image }} style={styles.courseImage} />
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.subtitle}>{course.instructor}</Text>
        <View style={styles.ratingContainer}>{renderStars(course.rating)}</View>
        <Text style={styles.fees}>{course.fees}</Text>
      </View>
    </TouchableOpacity>
  );
};

const TopCourses = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header with View All Button */}
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Top Courses</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AllCourses")}>
          <Text style={styles.viewAllText}>View All →</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Course List */}
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
    backgroundColor: "#fff",
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    marginBottom: 20,
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2D9CDB",
  },
  card: {
    width: 250,
    backgroundColor: "#fff",
    paddingBottom: 10,
    marginRight: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  courseImage: {
    width: "100%",
    height: 140,
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
  subtitle: {
    fontSize: 14,
    color: "#666",
    paddingHorizontal: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    paddingHorizontal: 10,
  },
  fees: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#27ae60",
    marginTop: 8,
    paddingHorizontal: 10,
  },
});

export default TopCourses;
