/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FirstScreenRegister } from '@pages/FirstScreenRegister';
import { useUserData } from './contexts/UserDataContext';

import { Home } from './pages/Home';
import { Search } from './pages/Search';

const Stack = createStackNavigator();

export function Routes({ initialRouteName, userData }) {
  const { setUserData } = useUserData();

  useEffect(() => setUserData(userData), []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName} headerMode="none">
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Search" component={Search} />

        <Stack.Screen name="FirstScreen" component={FirstScreenRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
