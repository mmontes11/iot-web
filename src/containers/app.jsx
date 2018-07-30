import React from "react";
import { connect, Provider } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "styles/index.scss";
import Login from "containers/login";
import Main from "components/main";

const App = ({ store, isAuth }) => <Provider store={store}>{isAuth ? <Main /> : <Login />}</Provider>;

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth: { isAuth } }) => ({ isAuth });

export default withRouter(connect(mapStateToProps)(App));
