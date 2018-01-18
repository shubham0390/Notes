// store/configureStore.js

import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers/index";
import createLogger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

const middlewares = [promiseMiddleware()];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const store = (configureStore = () => {
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducers, {}, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("../reducers/index").default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
});

export default store;
