import * as Font from 'expo-font';

// Carregue as fontes que você deseja usar
export const loadFonts = async () => {
  await Font.loadAsync({
    'Poppins-Light': require('../fonts/Poppins-Light.ttf'),
    'BebasNeue-Regular': require('../fonts/BebasNeue-Regular.ttf')
    // Adicione outras fontes aqui
  });
};