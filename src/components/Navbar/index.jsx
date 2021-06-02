import React from "react";
import { Image, Dimensions } from 'react-native';
import styled from 'styled-components/native'

const { width } = Dimensions.get('window');

const MainWrapper = styled.View`
  width: ${width}px;
  flex: 1;
  flex-direction: row;
  align-items: center; 
  justify-content: space-around;
  background-color: #2C3E50;
  max-height: 80px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

const NavigationButton = styled.TouchableOpacity`
  height: 52px;
  width: 52px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export function Navbar({ navigation, backgroundColors, icons }) {
  return (
    <MainWrapper>
      <NavigationButton
        onPress={() =>  navigation.navigate("Home")}
        style={{backgroundColor: backgroundColors.home }}
      >
        <Image source={icons.home} />
      </NavigationButton>

      <NavigationButton
        onPress={() => navigation.navigate("Search")}
        style={{backgroundColor: backgroundColors.search }}
      >
        <Image source={icons.search} />
      </NavigationButton>

      <NavigationButton
        onPress={() => navigation.navigate("Favorites")}
        style={{backgroundColor: backgroundColors.favorites }}
      >
        <Image source={icons.favorites} />
      </NavigationButton>

      <NavigationButton
        onPress={() => navigation.navigate("Settings")}
        style={{backgroundColor: backgroundColors.settings }}
      >
        <Image source={icons.settings} />
      </NavigationButton>
    </MainWrapper>
  );
}