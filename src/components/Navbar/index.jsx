/* eslint-disable react/prop-types */
import React from 'react';
import { Image, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

const MainWrapper = styled.View`
  width: ${width}px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #2c3e50;
  max-height: 80px;
  border-top-right-radius: 45px;
  border-top-left-radius: 45px;
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
        onPress={() => navigation.navigate('Home')}
        style={{ backgroundColor: backgroundColors.home }}
      >
        <Image source={icons.home} />
      </NavigationButton>

      <NavigationButton
        onPress={() => navigation.navigate('Settings')}
        style={{ backgroundColor: backgroundColors.settings }}
      >
        <Image source={icons.settings} />
      </NavigationButton>
    </MainWrapper>
  );
}
