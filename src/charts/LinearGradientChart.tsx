import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

export default function LinearGradientChart2() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      />
      <LinearGradient
        // Button Linear Gradient
        colors={["#4c6f", "#3b5998", "#192f6a"]}
        style={styles.button}
      >
        <Text style={styles.text}>Sign in with Facebook</Text>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    height: 50,
    width: "80%",
    borderRadius: 25,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
