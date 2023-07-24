import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from '../screens/About';
import Contact from '../screens/Contact';

const Stack = createNativeStackNavigator ();

function AboutNavigator () {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="About"
        name="About"
        component={About}
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="About"
          component={About}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AboutNavigator;
