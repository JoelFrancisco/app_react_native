import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import NextIconAsset from '@assets/Icons/arrow-right.png';

const WelcomeText = styled.Text`
  color: #33D9B2;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-bottom: 40px;
`;

const InputText = styled.TextInput`
  background: #ECF0F1;
  width: 239px;
  height: 28px;
  margin-top: -15px;
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.View `
  margin-top: -355px;
  z-index: 2;
`; 

const NextIcon = styled.Image`
  z-index: 2;
  width: 50px; 
  height: 50px;
  margin-left: 140px;
  margin-top: 10px;
`;

export function FirstRegisterInput() {
  const [text, setText] = useState("");
  const [userData, setUserData] = useContext(UserDataContext)
  
  useEffect(() => {
    
  }, [text])

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
