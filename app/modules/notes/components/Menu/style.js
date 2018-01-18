import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#4F4F4F"
  },
  titleContaier: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 5,
    marginBottom: 32
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: "#4F4F4F",
    padding: 20
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  name: {
    position: "absolute",
    left: 70,
    top: 20
  },
  actionButtonContainer: {
    alignItems: "center",
    paddingBottom: 16
  },
  actionButton: {
    paddingHorizontal: 32,
    paddingVertical: 6,
    borderWidth: 2,
    textAlign: "center",
    color: "#FFFFFF",
    borderColor: "#FFFFFF"
  }
});
