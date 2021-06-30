import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { getFoodInfo } from '@services/Nutritionix';

const { width } = Dimensions.get('window');

const SearchBarInput = styled.TextInput`
  width: ${width * 0.8}px;
  height: 30px;
  background: #ecf0f1;
  padding: 5px;
  border-radius: 20px;
  border: 1px #1abc9c;
`;

export function SearchBar() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    (async () => {
      // const response = await getFoodInfo(text);
      // TODO: API Call and state management
    })();
  }, [text]);
  return <SearchBarInput onChangeText={setText} />;
}
