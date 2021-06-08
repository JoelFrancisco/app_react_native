import React from 'react'
import { Dimensions, Image } from 'react-native'
import styled from 'styled-components/native'

const { width } = Dimensions.get('window');

const CaloriesLeftWrapper = styled.View`
  position: absolute;
  top: 280px;
`;

const CaloriesLeftTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #1abc9c;
`;

const CaloriesLeftValueWrapper = styled.View`
  flex: 1;
  width: ${width}px;
  position: absolute;
  bottom: 20px;
  left: 50px;
`;

const CaloriesLeftValue = styled.Text`
  font-size: 20px;
  color: #7f8c8D;
`;

export function CaloriesLeft({ children }) {
  return (
    <CaloriesLeftWrapper>
      <CaloriesLeftTitle> Pode-se consumir {"\n"}ainda no dia: </CaloriesLeftTitle>
      <Image source={require("../../../assets/caloriesView.png")} />

      <CaloriesLeftValueWrapper>
        <CaloriesLeftValue> {children} </CaloriesLeftValue>
      </CaloriesLeftValueWrapper>
    </CaloriesLeftWrapper>
  )
}
