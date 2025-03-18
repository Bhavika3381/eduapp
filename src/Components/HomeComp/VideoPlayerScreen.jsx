import React, { useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import Video from "react-native-video";

const VideoPlayerScreen = ({ route }) => {
  const { videoUrl } = route.params;
  const videoRef = useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: videoUrl }}
        controls
        resizeMode="contain"
        style={styles.video}
      />
      <Text style={styles.text}>Playing Video...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  video: {
    width: "100%",
    height: 300,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
  },
});

export default VideoPlayerScreen;
