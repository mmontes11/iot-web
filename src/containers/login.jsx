import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import PropTypes from "prop-types";
import classNames from "classnames";
import * as authActions from "actions/auth";
import * as reducerHelpers from "reducers";
import Modal from "components/modal";
import { withResetOnUnmount } from "hocs/resetOnUnmount";

class Login extends React.Component {
  _onUsernameChange = ({ target: { value } }) => {
    this.props.setUsername(value);
  };
  _onPasswordChange = ({ target: { value } }) => {
    this.props.setPassword(value);
  };
  _onLoginClick = event => {
    event.preventDefault();
    this.props.login();
  };
  _onModalCloseClick = () => {
    this.props.setShowError(false);
  };
  render() {
    const { username, password, isLoading, shouldShowError } = this.props;
    const btnClass = classNames("button", "is-block", "is-primary", "is-large", "is-fullwidth", {
      "is-loading": isLoading,
    });
    const modalMessageStyle = {
      "is-danger": true,
    };
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div className="box">
                <p className="title is-1">IoT</p>
                <form>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        id="username-input"
                        className="input is-large"
                        placeholder="Username"
                        onChange={this._onUsernameChange}
                        value={username || ""}
                      />
                      <span className="icon is-large is-left">
                        <i className="fas fa-user" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        id="password-input"
                        className="input is-large"
                        type="password"
                        placeholder="Password"
                        onChange={this._onPasswordChange}
                        value={password || ""}
                      />
                      <span className="icon is-large is-left">
                        <i className="fas fa-lock" />
                      </span>
                    </div>
                  </div>
                  <button id="login-button" className={btnClass} onClick={this._onLoginClick} disabled={isLoading}>
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isActive={shouldShowError}
          onCloseClick={this._onModalCloseClick}
          messageStyle={modalMessageStyle}
          title="Error"
          subTitle="Invalid Credentials"
        />
      </section>
    );
  }
}

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  shouldShowError: PropTypes.bool.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  setShowError: PropTypes.func.isRequired,
};

Login.defaultProps = {
  username: "",
  password: "",
};

const withRouter = connect(
  state => ({
    username: state.auth.username,
    password: state.auth.password,
    isLoading: reducerHelpers.isLoading(state),
    shouldShowError: reducerHelpers.hasError(state) && state.auth.showError,
  }),
  authActions,
);

export default compose(
  withRouter,
  withResetOnUnmount,
)(Login);
