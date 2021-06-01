import React, { useState } from "react";
import { Image, Dimensions } from 'react-native';
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native';

import homeGrayIcon from '../../../assets/Icons/homeGrayIcon.png';
import homeGreenIcon from '../../../assets/Icons/homeGreenIcon.png';
import searchGrayIcon from '../../../assets/Icons/searchGrayIcon.png';
import searchGreenIcon from '../../../assets/Icons/searchGreenIcon.png';
import favoritesGrayIcon from '../../../assets/Icons/favoritesGrayIcon.png';
import favoritesGreenIcon from '../../../assets/Icons/favoritesGreenIcon.png';
import settingsGrayIcon from '../../../assets/Icons/settingsGrayIcon.png';
import settingsGreenIcon from '../../../assets/Icons/settingsGreenIcon.png';

import { handleBackgroundColorChange } from './handleBackgroundColorChange';
import { handleIconColorChange } from './handleIconColorChange';

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

const NavigationButton = styled.TouchableOpacity.attrs(props => ({
  backgroundColor: props.backgroundColor,
}))`
  height: 52px;
  width: 52px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
`;

export function Navbar() {
  const navigation = useNavigation();

  const [backgroundColors, setBackgroundColors] = useState({
    HomeBackground: "#1abc9c",
    SearchBackground: "#2c3e50",
    FavoritesBackground: "#2C3E50",
    SettingsBackground: "#2C3E50",
  });

  const [icons, setIcons] = useState({
    HomeIcon: homeGrayIcon,
    SearchIcon: searchGreenIcon,
    FavoritesIcon: favoritesGreenIcon,
    SettingsIcon: settingsGreenIcon,
  });

  return (
    <MainWrapper>
      <NavigationButton
        onPress={() => {
          const newBackgroundColors = handleBackgroundColorChange("Home");
          setBackgroundColors(newBackgroundColors);
          
          const newIcons = handleIconColorChange("Home");
          setIcons(newIcons);

          navigation.navigate("Home");
        }}
        backgroundColor={backgroundColors.HomeBackground}
      >
        <Image source={icons.HomeIcon} />
      </NavigationButton>

      <NavigationButton
        onPress={() => navigation.navigate("Search")}
        backgroundColor={backgroundColors.SearchBackground}
      >
        <Image source={icons.SearchIcon} />
      </NavigationButton>

      <NavigationButton
        onPress={() => navigation.navigate("Favorites")}
        backgroundColor={backgroundColors.FavoritesBackground}
      >
        <Image source={icons.FavoritesIcon} />
      </NavigationButton>

      <NavigationButton
        onPress={() => navigation.navigate("Settings")}
        backgroundColor={backgroundColors.SettingsBackground}
      >
        <Image source={icons.SettingsIcon} />
      </NavigationButton>
    </MainWrapper>
  );
}