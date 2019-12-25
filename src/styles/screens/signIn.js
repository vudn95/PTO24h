import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  topSection: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000"
  },
  mainSection: {
    width: "80%",
    paddingTop: 100,
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  topText: {
    color: "#fff"
  }
});
