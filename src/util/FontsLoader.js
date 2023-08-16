import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    "Poppins-Light": require("../fonts/Poppins-Light.ttf"),
    "BebasNeue-Regular": require("../fonts/BebasNeue-Regular.ttf"),
  });
};
