// app/index.js

import React, { Component } from "react";
import {  Router } from "react-native-router-flux";
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
