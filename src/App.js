import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

import Header from "./components/header";

const name = "Jorge!";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden="Hidden"/>
      <Header message1="Bem vindo" message2={name} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
