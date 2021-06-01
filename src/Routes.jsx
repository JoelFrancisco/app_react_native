import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './pages/Home';
import { Search } from './pages/Search';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="Search"
          component={Search}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
