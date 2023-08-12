import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

const imgBg = require("../images/background_img2.png");
const logoImage = require("../images/logo.png");

function InitialScreen({ navigation }) {
  function navigateToRestaurants() {
    navigation.navigate("RestaurantsListScreen");
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={imgBg} style={styles.backgroundImage}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image source={logoImage} style={styles.logo} />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToRestaurants}
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
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
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
    marginHorizontal: 25,
  },
  logo: {
    width: 260,
    height: 250,
    marginBottom: 280,
    marginTop: -95,
    alignSelf: "stretch",
  },
  button: {
    backgroundColor: "#E73030",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.20)",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
  },
  buttonText: {
    fontFamily: "Poppins-Light",
    fontSize: 20,
    color: "white",
  },
});

export default InitialScreen;
