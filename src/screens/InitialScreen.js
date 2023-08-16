import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";

import Button from "../components/Button";

const imgBg = require("../images/background_img2.png");

function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={imgBg} style={styles.backgroundImage}>
        <Text style={styles.titleH}>Find D Best</Text>
        <Text style={styles.subtitleH}>Restaurant</Text>
        <View style={styles.content}>
          <Button navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  content: {
    alignItems: "center",
    marginBottom: 40,
    marginHorizontal: 25,
  },
  titleH: {
    flex: 1,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "BebasNeue-Regular",
    fontSize: 72,
    fontStyle: "normal",
    lineHeight: 72,
    marginTop: 129,
  },
  subtitleH: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Poppins-Light",
    fontSize: 24,
    fontStyle: "normal",
    flex: 1,
    marginBottom: 540,
  },
});

export default InitialScreen;
