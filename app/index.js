// app/index.js

import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Actions, Router, Scene } from "react-native-router-flux";
import { connect, Provider } from "react-redux";
import { Scenes } from "./router";
import configureStore from "./store";

const store = configureStore();
const RouterWithRedux = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={Scenes} />
      </Provider>
    );
  }
}
