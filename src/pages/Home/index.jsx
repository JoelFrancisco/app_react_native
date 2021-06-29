/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Header } from '@components/Header';
import { Navbar } from '@components/Navbar';
import { Card } from '@components/Card';

import homeGrayIcon from '@assets/Icons/homeGrayIcon.png';
import settingsGreenIcon from '@assets/Icons/settingsGreenIcon.png';
import searchIcon from '@assets/Icons/searchGreenIcon.png';

import { CaloriesContainer } from '@components/CaloriesContainer';
import { FoodCardHome } from '@components/FoodCardHome';
import { Search } from '@pages/Search';

import {
  MainWrapper,
  InnerWrapper,
  Title,
  SectionWrapper,
  DummySearchBar,
  SecondSectionWrapper,
  SearchBarWrapper,
  Icon,
} from './style';

const name = 'Jorge!';

export function Home({ navigation }) {
  const backgroundColors = {
    home: '#1abc9c',
    settings: '#2C3E50',
  };

  const icons = {
    home: homeGrayIcon,
    settings: settingsGreenIcon,
  };

  const [displayCard, setDisplayCard] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);

  return (
    <MainWrapper>
      <StatusBar hidden />

      {displayCard && <Card setDisplayCard={setDisplayCard} />}
      {displaySearch && <Search setDisplaySearch={setDisplaySearch} />}

      <Header message1="Bem vindo" message2={name} />

      <InnerWrapper>
        <ScrollView>
          <SectionWrapper>
            <Title>Total consumido no dia:</Title>
            <CaloriesContainer />
          </SectionWrapper>

          <SectionWrapper>
            <Title>Pode-se consumir ainda no dia:</Title>
            <CaloriesContainer />
          </SectionWrapper>

          <SecondSectionWrapper>
            <Title>Pesquisar alimento:</Title>
            <TouchableOpacity
              onPress={() => {
                setDisplaySearch(true);
              }}
            >
              <SearchBarWrapper>
                <DummySearchBar />
                <Icon source={searchIcon} />
              </SearchBarWrapper>
            </TouchableOpacity>
          </SecondSectionWrapper>

          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
          <FoodCardHome setDisplayCard={setDisplayCard} />
        </ScrollView>
      </InnerWrapper>

      {/* <Menu setDisplayCard={setDisplayCard} /> */}
      <Navbar
        navigation={navigation}
        backgroundColors={backgroundColors}
        icons={icons}
      />
    </MainWrapper>
  );
}
