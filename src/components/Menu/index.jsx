import React from "react";
import { Image } from "react-native";
import styled from 'styled-components/native'

const MainWrapper = styled.View`
  position: absolute;
  top: 450px;
`;

const ListIconWrapper = styled.View`
  margin-top: -80px;
  margin-left: 10px;
  padding-left: 5px;
`;

const TextWrapper = styled.View`
  text-align: center;
  margin-left: 70px;
  margin-top: -24px;
`;

const MenuText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #1abc9c;
`;

export function Menu() {
  return (
    <MainWrapper>
      <Image source={require("../../../assets/menu.png")} />

      <ListIconWrapper>
        <Image source={require("../../../assets/list.png")} />
      </ListIconWrapper>

      <TextWrapper>
        <MenuText> Alimentos consumidos </MenuText>
      </TextWrapper>
    </MainWrapper>
  );
}

