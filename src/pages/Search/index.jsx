/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';

import Maca from '@assets/maca.png';
import MinimizeIcon from '@assets/Icons/minimizeIcon.png';
import SearchIconImage from '@assets/Icons/searchGreenIcon.png';

import { SearchBar } from '@components/SearchBar';
import { FoodCard } from '@components/FoodCard';

import {
  OutterCard,
  Title,
  SearchBarWrapper,
  SearchIcon,
  InnerCard,
  CardsWrapper,
  ItemWrapper,
  Button,
  MinimizeIconImage,
} from './style';

export function Search({ setDisplaySearch }) {
  const [data, ,] = useState([
    { name: 'maçã', image: Maca, key: '1' },
    { name: 'banana', image: null, key: '2' },
    { name: 'alface', image: null, key: '3' },
    { name: 'feijão', image: null, key: '4' },
    { name: 'pão', image: null, key: '5' },
    { name: 'arroz', image: null, key: '6' },
    { name: 'batata', image: null, key: '7' },
    { name: 'carne', image: null, key: '8' },
  ]);

  return (
    <BlurView
      intensity={100}
      style={[
        StyleSheet.absoluteFill,
        { alignItems: 'center', justifyContent: 'center', zIndex: 5 },
      ]}
    >
      <StatusBar hidden />
      <OutterCard>
        <Title> Digite o Alimento: </Title>

        <SearchBarWrapper>
          <SearchBar />
          <SearchIcon source={SearchIconImage} />
        </SearchBarWrapper>

        <InnerCard>
          <CardsWrapper>
            <ScrollView
              contentContainerStyle={{
                justifyContent: 'space-around',
                minHeight: '80%',
              }}
            >
              {data.map(item => (
                <ItemWrapper key={item.key}>
                  <FoodCard foodName={item.name} image={item.image} />
                </ItemWrapper>
              ))}
            </ScrollView>
          </CardsWrapper>
          <Button
            onPress={() => {
              setDisplaySearch(false);
            }}
          >
            <MinimizeIconImage source={MinimizeIcon} />
          </Button>
        </InnerCard>
      </OutterCard>
    </BlurView>
  );
}
