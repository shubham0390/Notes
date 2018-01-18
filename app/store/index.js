// store/configureStore.js

import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import reducers from "../reducers/index";

const middlewares = [promiseMiddleware()];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const noteStore = (configureStore = () => {
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

export default noteStore;
