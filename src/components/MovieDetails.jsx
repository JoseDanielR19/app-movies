import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import currencyForMatter from "currency-formatter";
import CastItme from "./CastItme";

export default function MovieDetails({ movieFull, cast }) {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 2 }}
        >
          <Ionicons
            name="star-outline"
            size={18}
            color="grey"
            style={{ marginRight: 5 }}
          />

          {/* Puntuación */}
          <Text style={{ color: "white" }}>{movieFull.vote_average}</Text>

          {/* Generos */}
          <Text style={{ color: "white" }}>
            {" "}
            - {movieFull.genres.map((g) => g.name).join(", ")}
          </Text>
        </View>

        {/* Historia */}
        <Text
          style={{
            color: "white",
            marginTop: 10,
            fontSize: 23,
            fontWeight: "bold",
          }}
        >
          Historia
        </Text>
        <Text style={{ color: "white", fontSize: 16 }}>
          {movieFull.overview}
        </Text>

        {/* Presupuesto */}
        <Text
          style={{
            color: "white",
            marginTop: 10,
            fontSize: 23,
            fontWeight: "bold",
          }}
        >
          Presupuesto
        </Text>
        <Text style={{ color: "white" }}>
          {currencyForMatter.format(movieFull.budget, {
            code: "USD",
          })}
        </Text>

        {/* Casting */}
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              color: "white",
              marginTop: 10,
              fontSize: 23,
              fontWeight: "bold",
            }}
          >
            Actores
          </Text>
          <FlatList
            data={cast}
            renderItem={({ item }) => <CastItme actor={item} />}
            keyExtractor={(item) => item.id.toString()}
            style={{ marginTop: 10, height: 70 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
