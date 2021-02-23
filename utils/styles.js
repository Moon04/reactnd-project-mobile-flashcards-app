import { StyleSheet } from "react-native";
import { black, green, red } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "10px",
    width: "20%",
    margin: "20px",
  },
  button: {
    borderRadius: "5px",
    textAlign: "center",
    margin: "10px",
    padding: "10px",
    paddingRight: "35px",
    paddingLeft: "35px",
  },
  buttonText: {
    fontSize: "15px",
    fontWeight: "600",
  },
  blackButton: {
    backgroundColor: black,
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: "30px",
    marginBottom: "10px",
  },
  subTitle: {
    color: "rgb(118,118,118)",
    fontWeight: "600",
  },
});

export const decksStyles = StyleSheet.create({
  deck: {
    borderRadius: "5px",
    textAlign: "center",
    cursor: "pointer",
    margin: "auto",
    marginTop: "10px",
    marginBottom: "10px",
    padding: "15px",
    backgroundColor: "#fff",
    width: "70%",
  },
});

export const quizStyles = StyleSheet.create({
  correctButton: {
    backgroundColor: green,
    width: "10%",
  },
  incorrectButton: {
    backgroundColor: red,
    width: "10%",
  },
  toggleButtonText: {
    color: red,
    fontWeight: "bold",
  },
});
