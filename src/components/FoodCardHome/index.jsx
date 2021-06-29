/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import PlusIcon from '@assets/Icons/plus.png';
import MinusIcon from '@assets/Icons/minus.png';

const Wrapper = styled.View`
  width: 350px;
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

const QuantityContainer = styled.View`
  width: 40px;
  height: 40px;
  background: #ecf0f1;
  border: 1px #1abc9c;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

const QuantityValue = styled.Text`
  font-size: 16px;
`;

const IconOpacity = styled.TouchableOpacity`
  z-index: 2;
`;

export function FoodCardHome({
  foodName,
  image = null,
  quantity = 10,
  setDisplayCard,
}) {
  const [sanitizedFoodName, setSanitizedFoodName] = useState('Unknown');
  const [quantityValue, setQuantityValue] = useState(quantity);

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

  useEffect(() => {
    if (quantityValue < 0) {
      setQuantityValue(0);
    }
  }, [quantityValue]);

  return (
    <TouchableOpacity
      onPress={() => {
        setDisplayCard(true);
      }}
    >
      <Wrapper>
        <ImageContainer source={image} />
        <Title>{sanitizedFoodName}</Title>

        <IconOpacity
          onPress={() => {
            setQuantityValue(quantityValue + 1);
          }}
        >
          <Icon source={PlusIcon} />
        </IconOpacity>

        <IconOpacity
          onPress={() => {
            setQuantityValue(quantityValue - 1);
          }}
        >
          <Icon source={MinusIcon} />
        </IconOpacity>
        <QuantityContainer>
          <QuantityValue>{quantityValue}</QuantityValue>
        </QuantityContainer>
      </Wrapper>
    </TouchableOpacity>
  );
}
