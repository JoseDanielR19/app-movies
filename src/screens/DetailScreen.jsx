import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import MovieDetails from "../components/MovieDetails";
import { useMovieDetails } from "../hooks/useMovieDetails";

const screenHeight = Dimensions.get("screen").height;

export default function DetailScreen({ route }) {
  const movie = route.params;
  const navigation = useNavigation();

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, cast, movieFull } = useMovieDetails(movie);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri }} style={styles.image} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>

        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator
          color="#FF4500"
          size={45}
          style={{
            marginTop: 50,
          }}
        />
      ) : (
        <MovieDetails movieFull={movieFull} cast={cast} />
      )}

      {/* Boton para volver a HomeScreen */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-circle-outline" color="white" size={60} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: screenHeight * 0.7,
  },

  imageBorder: {
    flex: 1,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 5,
  },

  image: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  subtitle: {
    fontSize: 16,
    opacity: 0.8,
    color: "white",
  },

  backButton: {
    position: "absolute",
    top: 30,
    left: 10,
  },
});
