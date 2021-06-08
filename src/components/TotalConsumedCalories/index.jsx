import React from "react";
import { Image, Dimensions } from "react-native";
import styled from 'styled-components/native'

const { width } = Dimensions.get('window');

const TotalConsumedCaloriesWrapper = styled.View`
  position: absolute;
  top: 140px;
`;

const TotalConsumedCaloriesTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #1abc9c;
`;

const TotalConsumedCaloriesValueWrapper = styled.View`
  flex: 1;
  width: ${width}px;
  position: absolute;
  bottom: 20px;
  left: 50px;
`;

const TotalConsumedCaloriesValue = styled.Text`
  font-size: 20px;
  color: #7f8c8D;
`;

export function TotalConsumedCalories({ children }) {
  return (
    <TotalConsumedCaloriesWrapper>
      <TotalConsumedCaloriesTitle> Total consumido no dia: </TotalConsumedCaloriesTitle>
      <Image source={require("../../../assets/caloriesView.png")} />

      <TotalConsumedCaloriesValueWrapper>
        <TotalConsumedCaloriesValue> {children} </TotalConsumedCaloriesValue>
      </TotalConsumedCaloriesValueWrapper>
    </TotalConsumedCaloriesWrapper>
  )
}
