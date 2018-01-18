import { Actions, Router, Scene } from "react-native-router-flux";
import React, { Component } from "react";
import Landing from "./modules/splash";
import List from "./modules/notes";
import EditNote from "./modules/notes/pages/Edit";
import NoteDetail from "./modules/notes/pages/Detail";

export const navigate = () => {};

export const Scenes = Actions.create(
  <Scene key="root">
    <Scene key="landing" hideNavBar={true} component={Landing} />
    <Scene initial key="home" hideNavBar={true} component={List} />
    <Scene key="edit" hideNavBar={true} component={EditNote} />
    <Scene key="detail" hideNavBar={true} component={NoteDetail} />
  </Scene>
);