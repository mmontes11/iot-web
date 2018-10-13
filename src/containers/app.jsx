import React, { Fragment } from "react";
import { connect, Provider } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "recompose";
import "styles/index.scss";
import * as reducerHelpers from "reducers";
import * as appActions from "actions/app";
import Login from "containers/login";
import Main from "components/main";
import Modal from "components/modal";

const App = ({ store, isAuth, shouldShowError, setShowError }) => (
  <Provider store={store}>
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
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  isAuth: PropTypes.bool.isRequired,
  shouldShowError: PropTypes.bool.isRequired,
  setShowError: PropTypes.func.isRequired,
};

const withConnect = connect(
  state => ({
    isAuth: state.auth.isAuth,
    shouldShowError: reducerHelpers.hasError(state) && state.app.showError,
  }),
  { setShowError: appActions.setShowError },
);

export default compose(
  withRouter,
  withConnect,
)(App);
