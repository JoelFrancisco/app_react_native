import React from "react";
import { StyleSheet, View, Text, Image, Dimensions} from "react-native";
import { StatusBar } from 'expo-status-bar';

import Header from "../components/header";

import globalStyles from "../globalStyles"

const name = "Jorge!";
const consumedCalories = '1000 calorias'; 

const width = Dimensions.get('window').width;

function Home() {
  return (
    <View style={globalStyles.container}>
      <StatusBar hidden="Hidden"/>
      <Header message1="Bem vindo" message2={name} />

      <View style={styles.consumedCaloriesWrapper}>
        <Text style={[globalStyles.textGreen, globalStyles.textFont]}>Total consumido no dia:</Text>
        <Image source={require('../../assets/caloriesView.png')} />
        <View style={styles.caloriesView}>
          <Text style={styles.grayFont}>{consumedCalories}</Text>
        </View>
      </View>

      <View style={styles.editIconWrapper}> 
        <Image source={require('../../assets/editicon.png')} style={styles.editIcon}/>
      </View>

      <View style={styles.consumedCaloriesWrapper2}>
        <Text style={[globalStyles.textGreen, globalStyles.textFont]}>  Pode-se consumir {"\n"}ainda no dia:</Text>
        <Image source={require('../../assets/caloriesView.png')} />
        <View style={styles.caloriesView}>
          <Text style={styles.grayFont}>{consumedCalories}</Text>
        </View>
      </View>

      <View style={styles.editIconWrapper2}> 
        <Image source={require('../../assets/editicon.png')} style={styles.editIcon}/>
      </View>
    </View>
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
    top: 350
  },

  consumedCaloriesWrapper: {
    position: "absolute",
    top: 140
  },

  consumedCaloriesWrapper2: {
    position: "absolute",
    top: 280,
  },

});

export default Home;