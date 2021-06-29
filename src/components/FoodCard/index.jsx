/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import PlusIcon from '@assets/Icons/plus.png';

const Wrapper = styled.View`
  width: 250px;
  height: 70px;
  border-radius: 17px;
  background: #ecf0f1;
  border: 1px #1abc9c;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ImageContainer = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: #1abc9c;
  border: 1px #1abc9c;
`;

const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;

const Title = styled.Text`
  font-weight: bold;
  color: #16a085;
  font-size: 22px;
`;

export function FoodCard({ foodName, image = null }) {
  const [sanitizedFoodName, setSanitizedFoodName] = useState('Unknown');

  useEffect(() => {
    if (foodName) {
      if (foodName.length > 10) {
        let innerSanitizedFoodName = foodName.slice(0, 8);
        innerSanitizedFoodName += '...';
        setSanitizedFoodName(innerSanitizedFoodName);
      } else {
        setSanitizedFoodName(foodName);
      }
    }
  }, []);

  return (
    <Wrapper>
      <ImageContainer source={image} />
      <Title>{sanitizedFoodName}</Title>
      <Icon source={PlusIcon} />
    </Wrapper>
  );
}
