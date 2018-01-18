// reducers/index.js

import { combineReducers } from "redux";
import routes from "./routes";
import notes from "../modules/notes/duck/home";
// ... other reducers

export default combineReducers({
  routes,
  notes
  // ... other reducers
});
