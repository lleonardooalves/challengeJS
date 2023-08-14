import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InitialScreen from "../screens/InitialScreen";
import RestaurantsListScreen from "../screens/RestaurantListScreen";
import RestaurantDetailScreen from "../screens/RestaurantDetailsScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <>
      <StatusBar style="light" />
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
    </>
  );
}

export default AppNavigator;
