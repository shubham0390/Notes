import React, { Component } from "react";
import { Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./../style";

export default class app extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.push("home", { loading: true });
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Notely</Text>
        <View style={styles.bottomContainer}>
          <View style={styles.line} />
          <View style={styles.greenCircle} />
          <View style={styles.yellowCircle} />
          <View style={styles.redCircle} />
        </View>
      </View>
    );
  }
}
