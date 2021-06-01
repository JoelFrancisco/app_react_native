import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from './pages/Home';
import { Search } from './pages/Search';

const { width } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" tabBarOptions={{
          showLabel: false,
          showIcon: true,
          style: { ...styles.navbar }
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{color: focused ? '#1ABC9C' : '#2C3E50', borderRadius: 14, alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image
                  source={require('../assets/Icons/homeGrayIcon.png')}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#ECF0F1" : '#1ABC9C'
                  }}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{color: focused ? '#1ABC9C' : '#2C3E50', borderRadius: 14, alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image
                  source={require('../assets/Icons/searchGrayIcon.png')}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#ECF0F1" : '#1ABC9C'
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

styles = StyleSheet.create({
  navbar: {
    width: width,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#2C3E50',
    maxHeight: 80,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    }
})