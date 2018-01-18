import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  toolbar: {
    height: 48,
    paddingLeft: 16,
    paddingTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F5F5"
  },

  toolbarActionButtonContainer: {
    flexDirection: "row",
    alignItems: "center"
  },

  actionStyle: {
    height: 24,
    marginRight: 16
  },

  actionText: {
    fontSize: 14,
    color: "#585858"
  },

  titleContainer: {
    paddingHorizontal: 48,
    backgroundColor: "#F5F5F5",
    paddingBottom: 16
  },

  title: {
    fontSize: 24,
    color: "#282F29",
    lineHeight: 30,
    fontWeight: "bold"
  },

  date: {
    fontSize: 12,
    marginTop: 4,
    color: "#CBCBCB"
  },

  contentContainer: {
    margin: 16,
    paddingHorizontal: 32
  },

  description: {
    fontSize: 15,
    color: "#7B7B7B"
  }
});
