import React, { Fragment } from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import "assets/style.scss";

const App = ({ store }) => (
  <Provider store={store}>
    <Fragment>{null}</Fragment>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired
};

export default App;
