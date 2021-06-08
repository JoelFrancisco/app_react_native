import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native';

const FoodWrapper = styled.View`
  position: absolute;
  top: 550px;
  width: 277px;
  height: 190px;
  background: #ECF0F1;
  box-shadow: 0px 0.2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
`;   

const FoodTitle = styled.Text`
  font-size: 15px;
  color: #1abc9c;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 15px;
`;

const CaloricValue = styled.Text`
  font-size: 15px;
  color: #7F8C8D;
  text-align: center;
  margin-top: 10px;
`;

export function FoodBox({ children, foodImageSource }) {
  const { foodName, caloricValue } = children;
  return (
    <FoodWrapper>
      <Image source={foodImageSource} />
      <FoodTitle> {foodName} </FoodTitle>
      <CaloricValue> {caloricValue} </CaloricValue>
    </FoodWrapper>
  )
}
