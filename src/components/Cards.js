import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";

function Cards({ navigation }) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev")
      .then((response) => {
        setRestaurants(response.data.body.restaurants);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  function navigateToDetail(restaurant) {
    navigation.navigate("RestaurantDetailScreen", { restaurant });
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFD700" />
      </View>
    );
  }

  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigateToDetail(item)}
        >
          <Image
            source={{ uri: item.coverImageUrl }}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{item.name}</Text>
          </View>
          <FlatList
            data={item.menu}
            keyExtractor={(menuItem, index) => `${item.id}-${index}`}
            horizontal
            renderItem={({ item: menuItem }) => (
              <Image
                source={{ uri: menuItem.imageUrl }}
                style={styles.menuItemImage}
              />
            )}
          />
        </TouchableOpacity>
      )}
    />
  );
}

export default Cards;

const styles = StyleSheet.create({
  card: {
    width: 370,
    height: 150,
    flexShrink: 0,
    marginVertical: 10,
    marginHorizontal: 22,
    borderRadius: 12,
    backgroundColor: "rgba(0, 0, 0, 0.40)",
    overflow: "hidden",
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  cardInfo: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cardTitle: {
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 32,
    elevation: 5,
  },
  menuItemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
  },
});
