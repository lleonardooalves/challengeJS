import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { loadFonts } from "./src/util/FontsLoader";
import Navigation from "./src/routes/Navigation";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <View style={styles.container} />;
  }

  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
