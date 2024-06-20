import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/navigation/Navigation";
import axios from "axios";
import { StatusBar } from "expo-status-bar";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";
axios.defaults.params = {
  api_key: "6742659e5ab68787b8f6bb68e4d4ec00",
  lenguage: "es-ES"
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Navigation />
    </NavigationContainer>
  );
}