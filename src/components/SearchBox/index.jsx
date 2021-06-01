import React from 'react'
import { Image, Dimensions } from "react-native";
import styled from 'styled-components/native'

const { width } = Dimensions.get('window');

const foodName = "pão";

const FoodTitleWrapper = styled.View`
  position: absolute;
  top: 150px;
`;

const FoodTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #1abc9c;
`;

const FoodNameWrapper = styled.View`
  width: ${width}px;
  position: absolute;
  bottom: 20px;
  left: 50px;
  flex: 1;
`;

const FoodNameText = styled.Text`
  font-size: 20px;
  color: #7f8c8D;
`;

const SearchIconWrapper = styled.View`
  position: absolute;
  right: 50px;
  top: 210px;
`;

const SearchIcon = styled.Image`
  width: 24px;
`;

export function SearchBox() {
  return (
    <>
      <FoodTitleWrapper>
        <FoodTitle> Digite o alimento: </FoodTitle>
        <Image source={require('../../../assets/caloriesView.png')} />
        <FoodNameWrapper>
          <FoodNameText> {foodName} </FoodNameText>
        </FoodNameWrapper>
      </FoodTitleWrapper>

      <SearchIconWrapper>
        <SearchIcon source={require('../../../assets/Icons/searchGreenIcon.png')} />
      </SearchIconWrapper>
    </>
  )
}
