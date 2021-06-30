/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

// import { getData } from '@services/AsyncStorage';

const MainContainer = styled.View`
  width: 250px;
  height: 60px;
  border-radius: 10px;
  border: 1px #1abc9c;
  justify-content: center;
  align-items: center;
  elevation: 5;
  background-color: #ecf0f1;
`;

const Value = styled.Text`
  font-size: 24px;
`;

export function CaloriesContainer({ keyValue }) {
  const [calories, setCalories] = useState(null);

  // TODO: state management

  useEffect(() => {
    (async () => {
      // const innerCalories = await getData(keyValue);
      // setCalories(innerCalories);
    })();
  }, []);

  return (
    <MainContainer>
      <Value>{calories}</Value>
    </MainContainer>
  );
}
