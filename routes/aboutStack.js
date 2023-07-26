import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from '../screens/About';

// Components
import Menu from '../components/menu';

const Stack = createNativeStackNavigator ();

function AboutNavigator({navigation}) {
  const openDrawer = () => {
    return navigation.openDrawer ();
  };
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="About"
        name="About"
        component={About}
        screenOptions={{
          headerTitle: () => <Menu title="About" onPress={openDrawer} />,
          headerShown: true,
          headerStyle: {
            backgroundColor: 'maroon',
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
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AboutNavigator;
