import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  toolbar: {
    height: 56,
    paddingLeft: 16,
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
  contentContainer: {
    margin: 16,
    paddingHorizontal: 16
  },
  title: {
    fontSize: 24,
    color: "#2F2829",
    fontWeight: "bold"
  },
  description: {
    fontSize: 15,
    color: "#7B7B7B"
  },
  filterIcon: {
    backgroundColor: "#F5F5F5"
  },
  seprator: {
    height: 1,
    width: "86%",
    backgroundColor: "#CED0CE",
    marginLeft: "14%"
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#CED0CE"
  }
});
