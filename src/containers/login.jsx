import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { setUsername, setPassword, login } from "actions/auth";
import { isLoading } from "reducers";

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
  render() {
    const btnClass = classNames(
      "button",
      "is-block",
      "is-primary",
      "is-large",
      "is-fullwidth",
      {
        "is-loading": this.props.isLoading
      }
    );
    const isDisabled = this.props.isLoading;
    return (
      <section className="hero has-background-light is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div className="box">
                <p className="title is-1">IoT</p>
                <form>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input is-large"
                        placeholder="Username"
                        onChange={this._onUsernameChange}
                      />
                      <span className="icon is-large is-left">
                        <i className="fas fa-user" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input is-large"
                        type="password"
                        placeholder="Password"
                        onChange={this._onPasswordChange}
                      />
                      <span className="icon is-large is-left">
                        <i className="fas fa-lock" />
                      </span>
                    </div>
                  </div>
                  <button
                    className={btnClass}
                    onClick={this._onLoginClick}
                    disabled={isDisabled}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

export default connect(
  state => ({
    isLoading: isLoading(state)
  }),
  {
    setUsername,
    setPassword,
    login
  }
)(Login);
