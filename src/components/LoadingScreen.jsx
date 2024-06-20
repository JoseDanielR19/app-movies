import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#FF4500" size="large" />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  loadingText: {
    fontSize: 18,
    color: "#FFFFFF",
    marginTop: 10,
  },
});
