import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import BackgroundImage from '@assets/BackgroundImage.png';

const { width, height } = Dimensions.get('window');

const Wrapper = styled.ImageBackground`
  height: ${height + 20}px;
  width: ${width}px;
  align-items: center;
  justify-content: center;
  z-index: -2;
  position: absolute;
  top: -10px;
`;

const MainElipse = styled.View`
  background-color: #ecf0f1;
  width: 370px;
  height: 370px;
  border-radius: ${width / 2}px;
  transform: scaleX(2);
  z-index: 2;
`;

const BackgroundElipse = styled.View`
  background-color: #34495e;
  width: 313px;
  height: 313px;
  border-radius: ${width / 2}px;
  transform: scaleX(2);
`;

const TopBackgroundElipse = styled(BackgroundElipse)`
  position: relative;
  top: 280px;
  left: 110px;
`;

const BottomBackgroundElipse = styled(BackgroundElipse)`
  position: relative;
  bottom: 280px;
  right: 110px;
  z-index: 1;
`;

export function FirstScreenBackground() {
  return (
    <Wrapper source={BackgroundImage}>
      <TopBackgroundElipse />
      <MainElipse />
      <BottomBackgroundElipse />
    </Wrapper>
  );
}
