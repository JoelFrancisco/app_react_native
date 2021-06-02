import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import Maca from '../../../assets/maca.png';
import NextIcon from '../../../assets/icon/nextIcon.png';
import PrevIcon from '../../../assets/icon/prevIcon.png';
import PlusIcon from '../../../assets/icon/plusIcon.png';
import MinimizeIcon from '../../../assets/icon/minimizeIcon.png';
import EnergyIcon from '../../../assets/icon/energyIcon.png';
import ProteinIcon from '../../../assets/icon/proteinIcon.png';

const { width, height } = Dimensions.get('window');

const Background = styled.View`
  background-color: #000000;
  width: ${width}px;
  height: ${height}px;
  justify-content: center;
  align-items: center;
`;

const OutterCard = styled.View`
  background-color: #ECF0F1;
  width: ${width*0.95}px;
  height: ${height*0.95}px;
  border-radius: 17px;
  align-items: center;
  elevation: 5;
`;

const InnerCard = styled.View`
  background-color: #16A085;
  width: ${width*0.9}px;
  height: 315px;
  border-radius: 17px;
  align-items: center;
  elevation: 5;
  marginTop: 20px;
`;

const FoodPhoto = styled.Image`
  width: ${width*0.9}px;
  height: 210px;
  border-radius: 17px;
  margin: 10px;
`;

const Title = styled.Text`
  color: #1ABC9C;
  font-weight: 700;
  font-size: 24px;
  width: 300px;
  textAlign: center;
`;

const FoodName = styled.Text`
  color: #2C3E50;
  font-weight: 700;
  font-size: 24px;
  paddingTop: 15px;
`;

const FoodWrapper = styled.View`
  width: ${width}px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const IconImage = styled.Image`
  width: 24px;
  height: 24px;
`;

const NextIconImage = styled(IconImage)`
  marginTop: 15px;
`;

const SubTitle = styled.Text`
  color: #1ABC9C;
  font-weight: 500;
  font-size: 12px;
  marginTop: 20px;
`;

const Field = styled.View` 
  height: 40px;
  background-color: #ECF0F1;
  border-radius: 17px;
  elevation: 5;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const SmallField = styled(Field)`
  width: 80%;
`;

const FieldWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  marginTop: 30px;
`;

const FieldTitle = styled.Text`
  color: #1ABC9C;
  font-size: 12px;
`;

const FieldValue = styled.Text`
  color: #7F8C8D;
  font-size: 12px;
`;

const BigField = styled(Field)`
  width: 95%;
  marginTop: 30px;
`;

const MinimizeIconImage = styled(IconImage)`
  marginTop: 40px;
`;

const FieldTitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const FieldTitleIcon = styled(IconImage)`
  margin-right: 5px;
`;

const ProteinIconImage = styled.Image`
  width: 24px;
  height: 28px;
  margin-right: 5px;
`;


export function Card() {
  return (
    <Background>
      <OutterCard>
        <FoodPhoto source={Maca} />
        <Title> Tabela Nutricional: </Title>
        
        <FoodWrapper>
          <NextIconImage source={PrevIcon} />
          <FoodName> Maçã </FoodName>
          <NextIconImage source={NextIcon} />
        </FoodWrapper>

        <SubTitle> Quantidade em 100g de maçã sem casca </SubTitle>

        <InnerCard>
          <FieldWrapper> 
            <SmallField>
              <FieldTitle> Consumido hoje: </FieldTitle>
              <FieldValue> 400g </FieldValue>
            </SmallField>
            <IconImage source={PlusIcon} />
          </FieldWrapper>

          <BigField>
            <FieldTitleWrapper>
              <FieldTitleIcon source={EnergyIcon} />
              <FieldTitle> Energia: </FieldTitle>
            </FieldTitleWrapper>
            <FieldValue> 61 calorias </FieldValue>
          </BigField> 

          <BigField>
            <FieldTitleWrapper>
              <ProteinIconImage source={ProteinIcon} />
              <FieldTitle> Proteínas: </FieldTitle>
            </FieldTitleWrapper>
            <FieldValue> 0,2g </FieldValue>
          </BigField> 

          <MinimizeIconImage source={MinimizeIcon} />
        </InnerCard>
      </OutterCard>
    </Background>
  );
}

