import React from "react";
import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from 'styled-components/native'

import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Menu } from "../../components/Menu";

import { TotalConsumedCalories } from "../../components/TotalConsumedCalories";
import { CaloriesLeft } from "../../components/CaloriesLeft";

const { width } = Dimensions.get('window');

const MainWrapper = styled.View`
  width: ${width}px;
  flex: 1;
  background-color: #ECF0F1;
  align-items: center;
  justify-content: center;
`;

const EditIcon = styled.Image`
  width: 24px;
`;

const EditIconTotalConsumedCaloriesWrapper = styled.View`
  position: absolute;
  right: 50px;
  top: 185px;
`;

const EditIconCaloriesLeftWrapper = styled.View`
  position: absolute;
  right: 50px;
  top: 350px;
`;

const name = "Jorge!";
const consumedCalories = "1000 calorias";
const caloriesLeft = "1000 calorias";

export function Home({ navigation }) {
  return (
    <MainWrapper>
      <StatusBar hidden={true} />

      <Header message1="Bem vindo" message2={name} />

      <TotalConsumedCalories> {consumedCalories} </TotalConsumedCalories>

      <EditIconTotalConsumedCaloriesWrapper>
        <EditIcon source={require("../../../assets/editicon.png")} />
      </EditIconTotalConsumedCaloriesWrapper>

      <CaloriesLeft> {caloriesLeft} </CaloriesLeft>

      <EditIconCaloriesLeftWrapper>
        <EditIcon source={require("../../../assets/editicon.png")} />
      </EditIconCaloriesLeftWrapper>

      <Menu />

    </MainWrapper>
  );
}
