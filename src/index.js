import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import IntlProvider from "containers/intlProvider";
import { BrowserRouter as Router } from "react-router-dom";
import App from "containers/app";
import store from "config/store";
import { isAuth } from "actions/auth";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";

addLocaleData([...en, ...es]);

render(
  <Provider store={store}>
    <IntlProvider>
      <Router>
        <App />
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById("app"),
);

store.dispatch(isAuth());
