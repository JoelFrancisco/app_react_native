import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width;

export default function NavigationBa() {
  const [navigationState, setNavigationState] = useState('Home');

  return (
    <View style={styles.navigationWrapper}>
      <TouchableOpacity 
        onPress={() => { setNavigationState("Home") }} 
        style={[styles.navigationButton, styles.navigationActive]}
      > 
        <Image source={require("../../assets/homeIcon.png")} />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => { setNavigationState("Search") }}
        style={[styles.navigationButton, styles.navigationDisabled]}
      > 
        <Image source={require("../../assets/searchIcon.png")} />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => { setNavigationState("Favorites") }}
        style={[styles.navigationButton, styles.navigationDisabled]}
      > 
        <Image source={require("../../assets/starIcon.png")} />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => { setNavigationState("Settings") }}
        style={[styles.navigationButton, styles.navigationDisabled]}
      > 
        <Image source={require("../../assets/settingsIcon.png")} />
      </TouchableOpacity>
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

  navigationWrapper: {   
    width: width,
    maxHeight: 80,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#2C3E50",
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    justifyContent: "space-around",
    alignItems: "center"
  },

  navigationButton: {
    height: 52,
    width: 52,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  navigationActive: {
    backgroundColor: "#1ABC9C",
  },

  navigationDisabled: {
    backgroundColor: "#2C3E50",
  }
});