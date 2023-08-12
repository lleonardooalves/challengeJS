import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InitialScreen from "../screens/InitialScreen";
import RestaurantsListScreen from "../screens/RestaurantListScreen";
import RestaurantDetailScreen from "../screens/RestaurantDetailsScreen";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="InitialScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen
        name="RestaurantsListScreen"
        component={RestaurantsListScreen}
      />
      <Stack.Screen
        name="RestaurantDetailScreen"
        component={RestaurantDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
