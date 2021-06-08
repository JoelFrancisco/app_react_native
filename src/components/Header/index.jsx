import React from "react";
import { Image, Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get('window');

const MainWrapper = styled.View`
  flex: 1;
  width: ${width}px;
  background-color: #fff1;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.View`
  width: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const HeaderGreenText = styled(HeaderText)`
  color: #1abc9c;
`;

const BubblesImageWrapper = styled.View`
  position: absolute;
  top: 0px;
  right: 0px;
`;

export function Header({ message1, message2 }) {
  return (
    <MainWrapper>

      <TextWrapper>
        <HeaderGreenText> {message1} </HeaderGreenText>
        <HeaderText> {message2} </HeaderText>
      </TextWrapper>

      <BubblesImageWrapper>
        <Image source={require('../../../assets/bubbles.png')} />
      </BubblesImageWrapper>

    </MainWrapper>
  );
}
