import { View, Text, StyleSheet } from "react-native";

import Cards from "../components/Cards";

function RestaurantsListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Restaurantes</Text>
      </View>
      <Cards navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2C2E",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
  },
  header: {
    width: 414,
    height: 98,
    backgroundColor: "#1C1C1E",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#FFF",
    fontFamily: "Poppins-Light",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 32,
  },
});

export default RestaurantsListScreen;
