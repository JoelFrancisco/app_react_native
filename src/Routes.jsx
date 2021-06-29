/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Config } from '@pages/Settings';
import { LastScreenRegister } from '@pages/LastScreenRegister';
import { useUserData } from './contexts/UserDataContext';

import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { FirstScreenRegister } from './pages/FirstScreenRegister';
import { SecondRegisterScreen } from './components/SecondRegisterScreen';

const Stack = createStackNavigator();

export function Routes({ initialRouteName, userData }) {
  const { setUserData } = useUserData();

  useEffect(() => setUserData(userData), []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen" headerMode="none">
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Search" component={Search} />

        <Stack.Screen name="Settings" component={Config} />

        <Stack.Screen name="FirstScreen" component={FirstScreenRegister} />

        <Stack.Screen name="SecondScreen" component={SecondRegisterScreen} />

        <Stack.Screen name="LastScreen" component={LastScreenRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
