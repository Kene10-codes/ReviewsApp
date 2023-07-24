import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Components
import Navigator from './routes/homeStack';
import Home from './screens/Home';
import ReviewDetails from './screens/ReviewDetails';

const Stack = createNativeStackNavigator ();

export default function App () {
  const [appIsReady, setAppIsReady] = useState (false);

  // Load the Fonts
  useEffect (() => {
    async function prepare () {
      try {
        await Font.loadAsync ({
          'nunitosans-regular': require ('./fonts/NunitoSans_7pt-Regular.ttf'),
          'nunitosans-semibold': require ('./fonts/NunitoSans_7pt-SemiBold.ttf'),
          'nunitosans-italic': require ('./fonts/NunitoSans_10pt-Italic.ttf'),
        });

        await new Promise (resolve => setTimeout (resolve, 2000));
      } catch (err) {
        console.warn (err);
      } finally {
        setAppIsReady (true);
      }
    }

    prepare ();
  }, []);

  const onLayoutRootView = useCallback (
    async () => {
      if (appIsReady) {
        await SplashScreen.hideAsync ();
      }
    },
    [appIsReady]
  );

  if (!appIsReady) {
    return null;
  }

  return <Navigator />;
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
