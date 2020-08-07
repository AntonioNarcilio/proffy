import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Componente dentro do expo de carregamento que mostrar o mesmo conteúdo da splash screen
import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

export default function App() {

  // Passando fonts a serem utilizadas
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  // Enquanto as fonts ainda não estiverem carregadas
  if (!fontsLoaded) {
    // Mostrar o AppLoading
    return <AppLoading/>
  } 
  else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }

  
}
