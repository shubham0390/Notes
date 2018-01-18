import { Actions, Scene } from "react-native-router-flux";
import React from "react";
import Landing from "./modules/splash";
import List from "./modules/notes";
import EditNote from "./modules/notes/pages/Edit";
import NoteDetail from "./modules/notes/pages/Detail";

export const navigate = () => {};

export const Scenes = Actions.create(
  <Scene key="root">
    <Scene initial key="landing" hideNavBar component={Landing} />
    <Scene key="home" hideNavBar component={List} />
    <Scene key="detail" hideNavBar component={NoteDetail} />
    <Scene key="edit" hideNavBar component={EditNote} />
  </Scene>
);
