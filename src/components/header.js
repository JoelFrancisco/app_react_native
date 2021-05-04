import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const width = Dimensions.get('window').width;

function Header({ message1, message2 }) {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={[styles.textFont, styles.textMessage1]}>{message1}</Text>
        <Text style={styles.textFont}>{message2}</Text>
      </View>
      <View style={styles.bubblesWrapper}>
        <Image source={require('../../assets/bubbles.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: "#fff1",
    alignItems: "center",
    justifyContent: "center",
  },

  bubblesWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
  },

  textFont: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  textWrapper: {
    width: "50%",
    position: "absolute",
    top: 20,
    left: 20
  },

  textMessage1: {
    color: "#1abc9c",
  }
});

export default Header;