import React from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import { compose } from "recompose";
import * as actionsAuth from "actions/auth";
import * as appActions from "actions/app";
import { withResetOnUnmount } from "hocs/resetOnUnmount";

const Navbar = ({ isHamburgerMenuExpanded, logout, toggleHamburgerMenu }) => {
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
          onClick={() => toggleHamburgerMenu()}
          onKeyPress={() => toggleHamburgerMenu()}
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
          <NavLink to="/data" className="navbar-item" activeClassName="navbar-item-active">
            <span className="icon">
              <i className="fas fa-database" />
            </span>
            <span>Data</span>
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field">
              <p className="control">
                <button id="logout-button" className="button is-primary" onClick={() => logout()}>
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
};

Navbar.propTypes = {
  isHamburgerMenuExpanded: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  toggleHamburgerMenu: PropTypes.func.isRequired,
};

const withConnect = connect(
  state => ({
    isHamburgerMenuExpanded: state.app.isHamburgerMenuExpanded,
  }),
  { logout: actionsAuth.logout, toggleHamburgerMenu: appActions.toggleHamburgerMenu },
);

export default compose(
  withRouter,
  withConnect,
  withResetOnUnmount,
)(Navbar);
