/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import flexa from '@assets/Icons/arrow-right.png';
import concluido from '@assets/concluido.png';

const { width, height } = Dimensions.get('window');

const Bemvindo = styled.Text`
  color: #33d9b2;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

const Div = styled.View`
  padding: 10px;
`;

const TxtDiv = styled.View`
  z-index: 2;
`;

const styles = StyleSheet.create({
  fundo: {
    position: 'absolute',
    flex: 1,
    resizeMode: 'cover',
    width,
    height,
  },
  circle1: {
    marginTop: 80,
    zIndex: 1,
  },
  flexa: {
    zIndex: 2,
    width: 50,
    height: 50,
    marginTop: 20,
  },
  btn: {
    backgroundColor: 'green',
    width: 20,
  },
  concluido: {},
});

const Wrapper = styled.View`
  width: ${width}px;
  height: ${height}px;
  justify-content: center;
  align-items: center;
`;

export function LastRegisterInput({ navigation }) {
  return (
    <Wrapper>
      <TxtDiv>
        <Bemvindo>Concluído!</Bemvindo>

        <Div>
          <Image source={concluido} style={[styles.concluido]} />
        </Div>
      </TxtDiv>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={flexa} style={[styles.flexa]} />
      </TouchableOpacity>
    </Wrapper>
  );
}
