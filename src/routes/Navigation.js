import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "../routes/AppNavigator";

function Navigation() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
