// import React from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import Icon from "react-native-vector-icons/FontAwesome";

// const EduAdScreen = () => {
//   return (
//     <LinearGradient colors={["#fff","#fff", "#fff"]} style={styles.container}>
//       {/* Offer Image */}
//       <Image 
//         source={{ uri: "https://media.istockphoto.com/id/673206728/photo/a-pretty-businesswoman-pointing-online-training-sign.jpg?s=612x612&w=0&k=20&c=OMtWTi7Gq0wypuFOl3Z2T92YkbVabEhBm7xmWCAcHao=" }} 
//         style={styles.offerImage} 
//       />

//       {/* Heading */}
//       <Text style={styles.heading}>Unlock Your Learning Potential!</Text>

//       {/* Description */}
//       <Text style={styles.description}>
//         Get access to premium courses, interactive lessons, and expert guidance at a discounted price.
//       </Text>

//       {/* Action Button */}
//       <TouchableOpacity style={styles.button}>
//         <LinearGradient colors={["#ff9800", "#ff5722"]} style={styles.buttonGradient}>
//           <Icon name="graduation-cap" size={20} color="#fff" style={styles.icon} />
//           <Text style={styles.buttonText}>Get Started</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//     marginTop: 40,
//   },
//   offerImage: {
//     width: "100%",
//     height: 200,
//     borderRadius: 0,
//     marginBottom: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: "#444",
//     textAlign: "center",
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   button: {
//     width: "80%",
//     borderRadius: 25,
//     overflow: "hidden",
//   },
//   buttonGradient: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 12,
//     borderRadius: 25,
//   },
//   icon: {
//     marginRight: 8,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });

// export default EduAdScreen;
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

const EduAdScreen = () => {
  return (
    <LinearGradient colors={["#ffffff", "#f8f9fa", "#e0e0e0"]} style={styles.container}>
      
      {/* Card Container */}
      <View style={styles.card}>
        
        {/* Offer Image */}
        <Image 
          source={{ uri: "https://media.istockphoto.com/id/1352606416/photo/young-woman-working-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=uKfBCoTeP54nA8KOzXDLIyoU31nZ4a4UreFE4p_x_3A=" }} 
          style={styles.offerImage} 
        />

        {/* Heading */}
        <Text style={styles.heading}>🚀 Unlock Your Learning Potential!</Text>

        {/* Description */}
        <Text style={styles.description}>
          Get access to premium courses, interactive lessons, and expert guidance at a discounted price.
        </Text>

        {/* Action Button */}
        <TouchableOpacity style={styles.button}>
          <LinearGradient colors={["#ff9800", "#ff5722"]} style={styles.buttonGradient}>
            <Icon name="graduation-cap" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    paddingBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  offerImage: {
    width: "100%",
    height: 240,
    // borderRadius: 10,
    marginBottom: 15,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  button: {
    width: "85%",
    borderRadius: 30,
    overflow: "hidden",
    elevation: 5, 
  },
  buttonGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 30,
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default EduAdScreen;
