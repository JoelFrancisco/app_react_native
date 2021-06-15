/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { FirstScreenBackground } from '@components/FirstScreenBackground'
import { Home } from './pages/Home'
import { Search } from './pages/Search'

const Stack = createStackNavigator()

export function Routes({ initialRouteName }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName} headerMode="none">
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Search" component={Search} />

        <Stack.Screen name="FirstScreen" component={FirstScreenBackground} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
