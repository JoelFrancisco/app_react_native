/* eslint-disable react/prop-types */
import * as React from 'react';
import { Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styled from 'styled-components/native';
import edit from '@assets/editicon.png';
// import header from '../Group 3 (1).png';
import { Header as HeaderComponent } from '@components/Header';
import { Navbar } from '@components/Navbar';

import homeGreenIcon from '@assets/Icons/homeGreenIcon.png';
import settingsGrayIcon from '@assets/Icons/settingsGrayIcon.png';

const { height, width } = Dimensions.get('window');

const Content = styled.View`
  position: absolute;
  flex-direction: column;
  align-items: center;
  height: ${height}px;
  width: ${width}px;
`;

const MainWrapper = styled.View`
  align-items: center;
  width: ${width}px;
  margin-right: 70px;
  margin-top: 20px;
`;

// const Header = styled.Image`
//   position: relative;
//   top: 0;
// `;
//  width:400px;

const H1 = styled.Text`
  width: 400px;
  position: relative;
  font-size: 24px;
  color: #1abc9c;
  margin-right: -70px;
  text-align: center;
  font-weight: bold;
`;

const H2 = styled.Text`
  position: relative;
  font-size: 24px;
  color: #1abc9c;
  margin-left: 20%;
  width: 300px;
  margin-top: 30px;
  text-align: center;
  font-weight: bold;
`;

const H3 = styled.Text`
  position: relative;
  font-size: 24px;
  color: #1abc9c;
  margin-left: 20%;
  width: 500px;
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
`;

const Txt = styled.Text`
  font-size: 24px;
  color: #1abc9c;
`;

const Edit = styled.Image`
  margin-left: 10px;
  margin-top: 4px;
`;

const Wrapper = styled.View`
  margin-left: 20%;
  margin-top: 30px;
  flex-direction: row;
  width: ${width}px;
  align-items: center;
  justify-content: center;
`;

const Wrapper2 = styled.View`
  margin-left: 20%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${width}px;
`;

const InputText = styled.TextInput`
  margin-top: 3px;
  width: 100px;
  height: 28px;
  background: #fff;
  border-radius: 20px;
  border: 1px #1abc9c;
`;

const Btn = styled.TouchableOpacity`
  background: #fff;
  width: 60px;
  height: 28px;
  border-radius: 20px;
  margin-top: 4px;
  margin-left: 10px;
  border: 1px #1abc9c;
`;
const Btn2 = styled.TouchableOpacity`
  background: #fff;
  width: 60px;
  height: 28px;
  border-radius: 20px;
  margin-top: 4px;
  margin-right: 10px;
  border: 1px #1abc9c;
`;
const Btn3 = styled.TouchableOpacity`
  background: transparent;
  width: 50px;
  height: 28px;
  border-radius: 20px;
  margin-top: 4px;
  margin-right: 10px;
  border: 1px #1abc9c;
`;
const TxtBtn = styled.Text`
  font-size: 10px;
  color: #7f8c8d;
  text-align: center;
  margin-top: 5px;
`;

export function Config({ navigation }) {
  const backgroundColors = {
    settings: '#1abc9c',
    home: '#2C3E50',
  };

  const icons = {
    home: homeGreenIcon,
    settings: settingsGrayIcon,
  };

  return (
    <Content>
      <StatusBar hidden />
      <HeaderComponent message1="Configure" message2="Seus dados" />
      <MainWrapper>
        <H1>Configurações</H1>

        <Wrapper>
          <Txt>Peso: </Txt>
          <InputText />
          <Edit source={edit} />
        </Wrapper>

        <Wrapper>
          <Txt>Altura: </Txt>
          <InputText />
          <Edit source={edit} />
        </Wrapper>

        <Wrapper>
          <Txt>Idade: </Txt>
          <InputText />
          <Edit source={edit} />
        </Wrapper>

        <Wrapper>
          <Txt>Sexo: </Txt>
          <Btn>
            <TxtBtn>Masculino</TxtBtn>
          </Btn>
          <Btn>
            <TxtBtn>Feminino</TxtBtn>
          </Btn>
        </Wrapper>

        <H2>Intensidade da atividade física:</H2>
        <Wrapper>
          <Btn2>
            <TxtBtn>Leve</TxtBtn>
          </Btn2>
          <Btn2>
            <TxtBtn>moderada</TxtBtn>
          </Btn2>
          <Btn2>
            <TxtBtn>Intensa</TxtBtn>
          </Btn2>
        </Wrapper>

        <H3>Dias de atividade:</H3>
        <Wrapper>
          <Btn3>
            <TxtBtn>Domingo</TxtBtn>
          </Btn3>
          <Btn3>
            <TxtBtn>Segunda</TxtBtn>
          </Btn3>
          <Btn3>
            <TxtBtn>Terça</TxtBtn>
          </Btn3>
          <Btn3>
            <TxtBtn>Quarta</TxtBtn>
          </Btn3>
        </Wrapper>

        <Wrapper2>
          <Btn3>
            <TxtBtn>Quinta</TxtBtn>
          </Btn3>
          <Btn3>
            <TxtBtn>Sexta</TxtBtn>
          </Btn3>
          <Btn3>
            <TxtBtn>Sábado</TxtBtn>
          </Btn3>
        </Wrapper2>
      </MainWrapper>
      <Navbar
        navigation={navigation}
        backgroundColors={backgroundColors}
        icons={icons}
      />
    </Content>
  );
}
