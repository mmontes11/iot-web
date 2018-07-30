import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import App from "containers/app";
import rootReducer from "reducers";
import { isAuth } from "actions/auth";

const middlewares = [thunk];
if (process.env.NODE_ENV !== "production") {
  middlewares.push(createLogger());
}
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

render(
  <Router>
    <App store={store} />
  </Router>,
  document.getElementById("app"),
);

store.dispatch(isAuth());
