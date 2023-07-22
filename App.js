import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

// Components
import Home from './screens/Home.js';

// Get Fonts declarations
const getFonts = () =>
  Font.loadAsync ({
    'nunitosans-regular': require ('./fonts/NunitoSans_7pt-Regular.ttf'),
    'nunitosans-semibold': require ('./fonts/NunitoSans_7pt-SemiBold.ttf'),
  });

export default function App () {
  const [fontsLoaded, setFontsLoaded] = useState (false);

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded (true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
