import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

// Components
import HomeNavigator from './homeStack';
import AboutNavigator from './aboutStack';
import ContactNavigator from './contactStack';

const Drawer = createDrawerNavigator ();

const RootDrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="About" component={AboutNavigator} />
        <Drawer.Screen name="Contact" component={ContactNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootDrawerNavigator;
