import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contact from '../screens/Contact';

const Stack = createNativeStackNavigator ();

function ContactNavigator () {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Contact"
        name="Contact"
        component={Contact}
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ContactNavigator;
