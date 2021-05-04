import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: "#ECF0F1",
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

  textGreen: {
    color: "#1abc9c",
  }
});

export default styles;