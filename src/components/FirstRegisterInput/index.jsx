import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

import NextIconAsset from '@assets/Icons/arrow-right.png';
import { useUserData } from '../../contexts/UserDataContext';

const { height, width } = Dimensions.get('window');

const WelcomeText = styled.Text`
  color: #33d9b2;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-bottom: 40px;
  z-index: 99;
`;

const InputText = styled.TextInput`
  background: #ecf0f1;
  padding: 5px;
  width: 239px;
  height: 28px;
  margin-top: -15px;
  margin-left: auto;
  margin-right: auto;
  z-index: 99;
`;

const Wrapper = styled.View`
  width: ${width}px;
  height: ${height}px;
  margin-top: 255px;
  position: absolute;
  z-index: 99;
`;

const NextIcon = styled.Image`
  width: 50px;
  height: 50px;
  margin-left: 175px;
  margin-top: 10px;
  z-index: 99;
`;

export function FirstRegisterInput() {
  const [text, setText] = useState('');
  const { userData, setUserData } = useUserData();

  useEffect(() => setUserData({ ...userData, name: text }), [text]);

  return (
    <Wrapper>
      <WelcomeText>Bem vindo!</WelcomeText>
      <WelcomeText>Precisamos de algumas informações para começar.</WelcomeText>
      <WelcomeText>Informe seu nome:</WelcomeText>
      <InputText onChangeText={setText} />
      <NextIcon source={NextIconAsset} />
    </Wrapper>
  );
}
