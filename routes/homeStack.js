import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

// Components
import Menu from '../components/menu';

const Stack = createNativeStackNavigator ();

function RootNavigator({navigation}) {
  // Open Drawer Function
  const openDrawer = () => {
    return navigation.openDrawer ();
  };

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        component={Home}
        screenOptions={{
          headerShadowVisible: true,
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
          name="Home"
          component={Home}
          options={({route}) => ({
            headerTitle: props => <Menu title="Home" onPress={openDrawer} />,
          })}
        />
        <Stack.Screen
          name="Review"
          component={ReviewDetails}
          options={({route}) => ({
            title: route.params.name,
            headerShown: true,
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
