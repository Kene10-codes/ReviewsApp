import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contact from '../screens/Contact';

// Components
import Menu from '../components/menu';

const Stack = createNativeStackNavigator ();

function ContactNavigator({navigation}) {
  // Open Drawer Function
  const openDrawer = () => {
    return navigation.openDrawer ();
  };
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Contact"
        name="Contact"
        component={Contact}
        screenOptions={{
          headerTitle: () => <Menu title="Contact Us" onPress={openDrawer} />,
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
          name="Contact"
          component={Contact}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ContactNavigator;
