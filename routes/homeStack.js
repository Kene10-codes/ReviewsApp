import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import {Ionicons} from '@expo/vector-icons';
import {Image} from 'react-native';

const Stack = createNativeStackNavigator ();

function RootNavigator () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        name="Home"
        component={Home}
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Review"
          component={ReviewDetails}
          options={({route}) => ({
            title: route.params.name,
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
