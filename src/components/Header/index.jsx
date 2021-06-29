/* eslint-disable react/prop-types */
import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

const MainWrapper = styled.View`
  flex: 1;
  min-width: ${width}px;
  max-height: 75px;
  background-color: #fff1;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const TextWrapper = styled.View`
  margin-top: 10px;
  padding: 30px;
`;

const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const HeaderGreenText = styled(HeaderText)`
  color: #1abc9c;
`;

const MainCircle = styled.View`
  background: #2c3e50;
  width: 120px;
  height: 90px;
  border-radius: ${width / 2}px;
  transform: scaleX(2);
  position: relative;
  top: -20px;
`;

const SmallMainCircle = styled.View`
  background: #34495e;
  width: 50px;
  height: 50px;
  border-radius: ${width / 2}px;
  transform: scaleX(2);
  position: relative;
  top: -100px;
  right: 85px;
`;

const Circle = styled.View`
  background: #34495e;
  width: 80px;
  height: 80px;
  border-radius: ${width / 2}px;
  position: relative;
  top: -110px;
  right: -50px;
`;

const TinyCircle1 = styled.View`
  background: #2c3e50;
  width: 25px;
  height: 25px;
  border-radius: ${width / 2}px;
  transform: scaleX(2);
  position: relative;
  top: -135px;
`;

const TinyCircle2 = styled.View`
  background: #2c3e50;
  width: 25px;
  height: 25px;
  border-radius: ${width / 2}px;
  transform: scaleX(2);
  position: relative;
  top: -185px;
  right: 105px;
`;

const BubblesWrapper = styled.View`
  top: 0;
  right: 0;
  position: absolute;
  width: 90px;
  height: 10px;
`;

export function Header({ message1, message2 }) {
  return (
    <MainWrapper>
      <TextWrapper>
        <HeaderGreenText> {message1} </HeaderGreenText>
        <HeaderText> {message2} </HeaderText>
      </TextWrapper>

      <BubblesWrapper>
        <MainCircle />
        <SmallMainCircle />
        <Circle />
        <TinyCircle1 />
        <TinyCircle2 />
      </BubblesWrapper>
    </MainWrapper>
  );
}
