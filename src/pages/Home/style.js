import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const MainWrapper = styled.View`
  width: ${width}px;
  height: ${height}px;
  background-color: #ecf0f1;
  align-items: center;
  justify-content: space-between;
`;

export const InnerWrapper = styled.View`
  width: ${width}px;
  height: ${height * 0.6}px;
  background-color: #ecf0f1;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  width: 300px;
  height: 55px;
  color: #1abc9c;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const SectionWrapper = styled.View`
  height: 120px;
  justify-content: space-between;
  align-items: center;
`;

export const CaloriesWrapper = styled.View`
  height: 280px;
  justify-content: space-between;
  align-items: center;
`;

export const DummySearchBar = styled.View`
  width: ${width * 0.8}px;
  height: 30px;
  background: #ecf0f1;
  padding: 5px;
  border-radius: 20px;
  border: 1px #1abc9c;
`;

export const SecondSectionWrapper = styled(SectionWrapper)`
  justify-content: space-around;
`;

export const SearchBarWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;
