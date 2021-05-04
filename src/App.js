import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

import Home from "./views/Home"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden="Hidden"/>
      <Home />
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
