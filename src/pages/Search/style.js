import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const OutterCard = styled.View`
  background-color: #ecf0f1;
  width: ${width * 0.95}px;
  height: ${height * 0.95}px;
  border-radius: 17px;
  align-items: center;
  elevation: 5;
  justify-content: space-around;
`;

export const InnerCard = styled.View`
  background-color: #16a085;
  width: ${width * 0.9}px;
  height: 450px;
  border-radius: 17px;
  align-items: center;
  elevation: 5;
  margin-top: 20px;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #1abc9c;
  font-weight: 700;
  font-size: 24px;
  width: 300px;
  text-align: center;
`;

export const IconImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const MinimizeIconImage = styled(IconImage)`
  margin-top: 40px;
`;

export const Button = styled.TouchableOpacity`
  padding: 20px;
`;

export const CardsWrapper = styled.View`
  height: 75%;
  padding: 20px;
`;

export const ItemWrapper = styled.View`
  padding: 5px;
`;

export const SearchBarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SearchIcon = styled.Image`
  width: 24px;
  height: 24px;
  padding: 5px;
`;
