import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CastItme({ actor }) {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  const notImage = `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`;

  return (
    <View style={styles.container}>
      {actor.profile_path ? (
        <Image source={{ uri }} style={styles.image} />
      ) : (
        <Image source={{ uri: notImage }} style={styles.image} />
      )}
      <View style={styles.actorInfo}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          {actor.name}
        </Text>

        <Text style={{ fontSize: 16, opacity: 0.7, color: "white" }}>
          {actor.character}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: 10,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 4,
    marginLeft: 10,
    paddingRight: 15,
  },

  actorInfo: {
    marginLeft: 10,
    marginTop: 2,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
