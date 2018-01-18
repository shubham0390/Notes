import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 36,
    color: "#2F2829",
    fontWeight: "bold",
    textAlign: "center"
  },
  bottomContainer: {
    justifyContent: "center",
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  line: {
    borderBottomColor: "#969696",
    width: 72,
    borderBottomWidth: 1
  },
  redCircle: {
    width: 5,
    height: 5,
    marginLeft: 5,
    borderRadius: 5 / 2,
    backgroundColor: "#DB233B"
  },
  greenCircle: {
    width: 5,
    height: 5,
    marginLeft: 5,
    borderRadius: 5 / 2,
    backgroundColor: "#8EE2C0"
  },
  yellowCircle: {
    width: 5,
    height: 5,
    marginLeft: 5,
    borderRadius: 5 / 2,
    backgroundColor: "#EDBC31"
  }
});

export default styles;
