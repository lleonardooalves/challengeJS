import { StyleSheet, Text, TouchableOpacity } from "react-native";

function Button({ navigation }) {
  function navigateToRestaurants() {
    navigation.navigate("RestaurantsListScreen");
  }

  return (
    <TouchableOpacity onPress={navigateToRestaurants} style={styles.button}>
      <Text style={styles.buttonText}>Acessar</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
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
