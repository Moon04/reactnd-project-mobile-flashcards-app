import { StyleSheet } from "react-native";
import { black, green, red, gray, white } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    backgroundColor: white,
    borderRadius: 5,
    padding: 10,
    width: 240,
    margin: 20,
  },
  button: {
    borderRadius: 5,
    textAlign: "center",
    margin: 10,
    padding: 10,
    paddingRight: 35,
    paddingLeft: 35,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 600,
  },
  blackButton: {
    backgroundColor: black,
  },
  title: {
    color: black,
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
    textAlign: "center"
  },
  subTitle: {
    color: gray,
    fontWeight: 600,
  },
});

export const decksStyles = StyleSheet.create({
  deck: {
    borderRadius: 5,
    textAlign: "center",
    cursor: "pointer",
    margin: "auto",
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    backgroundColor: white,
    width: 230,
  },
});

export const quizStyles = StyleSheet.create({
  correctButton: {
    backgroundColor: green,
    width: 140,
  },
  incorrectButton: {
    backgroundColor: red,
    width: 140,
  },
  toggleButtonText: {
    color: red,
    fontWeight: "bold",
  },
});
