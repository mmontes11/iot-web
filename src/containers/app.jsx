import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import PropTypes from "prop-types";
import "styles/index.scss";
import * as fromState from "reducers";
import * as appActions from "actions/app";
import Login from "containers/login";
import Main from "components/main";
import Modal from "components/modal";

const App = ({ isAuth, shouldShowError, setShowError }) => (
  <Fragment>
    {isAuth ? <Main /> : <Login />}
    <Modal
      isActive={shouldShowError}
      onCloseClick={() => setShowError(false)}
      messageStyle="is-danger"
      title="Error"
      subTitle="Request failed"
    />
  </Fragment>
);

App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  shouldShowError: PropTypes.bool.isRequired,
  setShowError: PropTypes.func.isRequired,
};

const withConnect = connect(
  state => ({
    isAuth: state.auth.isAuth,
    shouldShowError: fromState.shouldShowError(state),
  }),
  { setShowError: appActions.setShowError },
);

export default compose(
  withRouter,
  withConnect,
)(App);
