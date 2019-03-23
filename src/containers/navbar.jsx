import React from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { logout } from "actions/auth";
import { toggleHamburgerMenu } from "actions/app";
import { withResetOnUnmount } from "hocs/resetOnUnmount";

class Navbar extends React.Component {
  _onHamburgerMenuClick = () => {
    this.props.toggleHamburgerMenu();
  };
  _onLogoutButtonClick = () => {
    this.props.logout();
  };
  render() {
    const { isHamburgerMenuExpanded } = this.props;
    const navbarBurgerClass = classNames("navbar-burger", "burger", {
      "is-active": isHamburgerMenuExpanded,
    });
    const navbarMenuClass = classNames("navbar-menu", {
      "is-active": isHamburgerMenuExpanded,
    });
    return (
      <nav className="navbar has-shadow is-spaced">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <h1 className="title">IoT</h1>
          </NavLink>
          <div
            className={navbarBurgerClass}
            data-target="navbar-menu"
            onClick={this._onHamburgerMenuClick}
            onKeyPress={this._onHamburgerMenuClick}
            role="button"
            tabIndex={0}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navbar-menu" className={navbarMenuClass}>
          <div className="navbar-start">
            <NavLink to="/things" className="navbar-item" activeClassName="navbar-item-active">
              <span className="icon">
                <i className="fas fa-microchip" />
              </span>
              <span>Things</span>
            </NavLink>
            <NavLink to="/stats" className="navbar-item" activeClassName="navbar-item-active">
              <span className="icon">
                <i className="fas fa-chart-bar" />
              </span>
              <span>Stats</span>
            </NavLink>
            <NavLink to="/measurements" className="navbar-item" activeClassName="navbar-item-active">
              <span className="icon">
                <i className="fas fa-database" />
              </span>
              <span>Measurements</span>
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field">
                <p className="control">
                  <button id="logout-button" className="button is-primary" onClick={this._onLogoutButtonClick}>
                    <span className="icon">
                      <i className="fa fa-user" />
                    </span>
                    <span>Logout</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  isHamburgerMenuExpanded: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  toggleHamburgerMenu: PropTypes.func.isRequired,
};

const withConnect = connect(
  state => ({
    isHamburgerMenuExpanded: state.app.isHamburgerMenuExpanded,
  }),
  { logout, toggleHamburgerMenu },
);

export default compose(
  withRouter,
  withConnect,
  withResetOnUnmount,
)(Navbar);
