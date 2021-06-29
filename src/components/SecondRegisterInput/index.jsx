/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import NextIconAsset from '@assets/Icons/arrow-right.png';

const { height, width } = Dimensions.get('window');

const Bemvindo = styled.Text`
  color: #33d9b2;
  font-weight: bold;
  font-size: 24px;
  text-align: center;

  z-index: 99;
`;
const Bemvindo2 = styled.Text`
  color: #33d9b2;
  font-weight: bold;
  font-size: 22px;
  text-align: center;

  z-index: 99;
`;

const TxtInput = styled.TextInput`
  background: #ecf0f1;
  width: 239px;
  height: 28px;

  z-index: 99;
  border: 1px #1abc9c;
  border-radius: 17px;
  padding: 10px;
`;

const Div = styled.View`
  z-index: 99;
`;

const TxtDiv = styled.View`
  width: ${width}px;
  height: ${height}px;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const styles = StyleSheet.create({
  flexa: {
    zIndex: 2,
    width: 50,
    height: 50,
    marginLeft: 90,
    marginTop: 20,
  },
});

export function SecondRegisterInput({ navigation }) {
  return (
    <TxtDiv>
      <Bemvindo>Ótimo Jorge!</Bemvindo>
      <Bemvindo2>Agora informe seu peso e altura</Bemvindo2>
      <Div>
        <Bemvindo>Insira seu peso:</Bemvindo>
        <TxtInput />
      </Div>
      <Div>
        <Bemvindo>Insira sua altura:</Bemvindo>
        <TxtInput />
        <TouchableOpacity onPress={() => navigation.navigate('LastScreen')}>
          <Image source={NextIconAsset} style={[styles.flexa]} />
        </TouchableOpacity>
      </Div>
    </TxtDiv>
  );
}
