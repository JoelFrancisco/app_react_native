import React from "react";
import { StyleSheet, View, Text, Image, Dimensions, ScrollView } from "react-native";
import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar';

import { Header } from "@components/Header";
import { Navbar } from '@components/Navbar';
import { SearchBox } from "@components/SearchBox";
import { FoodBox } from "@components/FoodBox";

import lettuceImage from '@assets/alface.png';

import homeGreenIcon from '@assets/Icons/homeGreenIcon.png';
import searchGrayIcon from '@assets/Icons/searchGrayIcon.png';
import favoritesGreenIcon from '@assets/Icons/favoritesGreenIcon.png';
import settingsGreenIcon from '@assets/Icons/settingsGreenIcon.png';

const { width } = Dimensions.get('window');

const MainWrapper = styled.View`
  width: ${width}px; 
  flex: 1;
  background-color: #ECF0F1;
  align-items: center;
  justify-content: center;
`;

const BreadWrapper = styled.View`
  position: absolute;
  top: 290px;
`;

export function Search({ navigation }) {
  const backgroundColors = {
    home: "#2c3e50",
    search: "#1abc9c",
    favorites: "#2C3E50",
    settings: "#2C3E50",
  }

  const icons = {
    home: homeGreenIcon,
    search: searchGrayIcon,
    favorites: favoritesGreenIcon,
    settings: settingsGreenIcon,
  }

  return (
    <MainWrapper>
      <StatusBar hidden={true} />
      <Header message1="Faça sua" message2="Busca" />

      <SearchBox />
    
      <ScrollView>
        {/* <BreadWrapper>
          <View style={styles.img}>
            <Image source={require("../../../assets/menu1.png")} />
            <View style={styles.list}>
            </View>
          </View>
        </BreadWrapper> */}
        
        <FoodBox foodImageSource={lettuceImage}>
          {{
            foodName: "pão",
            caloricValue: "15 calorias a cada 100g"
          }}
        </FoodBox>
      </ScrollView>

      <Navbar navigation={navigation} backgroundColors={backgroundColors} icons={icons} />
    </MainWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff1",
    alignItems: "center",
    justifyContent: "center",
  },

  caloriesView: {
    width: width,

    position: "absolute",
    bottom: 20,
    left: 50,
    flex: 1,
  },

  grayFont: {
    fontSize: 20,
    color: "#7f8c8D"
  },

  editIcon: {
    width: 24
  },

  editIconWrapper: {
    position: "absolute",
    right: 50,
    top: 185
  },

  editIconWrapper2: {
    position: "absolute",
    right: 50,
    top: 210
  },

  consumedCaloriesWrapper: {
    position: "absolute",
    top: 140
  },

  consumedCaloriesWrapper2: {
    position: "absolute",
    top: 150,
  },
  list: {
    marginTop: -80,
    marginLeft: 10,
    paddingLeft: 5

  },
  textoImg: {
    fontSize: 15,
    color: "#1abc9c",
    fontWeight: 'bold'
  },
  containerr: {
    position: "absolute",
    top: 290
  },
  container2: {
    position: "absolute",
    top: 550
  },
  menu2: {
    position: "absolute",
    top: 550
  },
  bloco: {
    width: 277,
    height: 190,
    borderRadius: 20,
    backgroundColor: "#ECF0F1",
    shadowColor: "#ECF0F1",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,

  },
  txtAlface: {
    fontSize: 15,
    color: "#1abc9c",
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15,

  },
  infoAlface: {
    fontSize: 15,
    color: "#7F8C8D",
    textAlign: "center",
    marginTop: 10,

  },
  box: {
    textAlign: "center",
    marginLeft: 80,
    marginTop: -24
  }
});
