import React from "react";
import { mount } from "enzyme";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import rootReducer from "reducers";
import Navbar from "containers/navbar";

describe("containers/navbar", () => {
  it("renders navbar in initial state", () => {
    const state = {
      app: {
        isHamburgerMenuExpanded: false,
      },
      auth: {
        isAuth: false,
        username: null,
        password: null,
        showError: true,
      },
      request: {
        pending: 0,
        statusCode: null,
        error: null,
      },
    };
    const store = configureStore([])(state);
    const wrapper = mount(
      <MemoryRouter keyLength={0}>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders navbar in toggled hamburguer menu state", () => {
    const state = {
      app: {
        isHamburgerMenuExpanded: true,
      },
      auth: {
        isAuth: false,
        username: null,
        password: null,
        showError: true,
      },
      request: {
        pending: 0,
        statusCode: null,
        error: null,
      },
    };
    const store = configureStore([])(state);
    const wrapper = mount(
      <MemoryRouter keyLength={0}>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();
  });
  it("simulates a click in hamburger menu button", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const wrapper = mount(
      <MemoryRouter keyLength={0}>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>,
    );

    const hamburgerButton = wrapper.find(".navbar-burger .burger");
    hamburgerButton.first().simulate("click");

    expect(store.getState().app.isHamburgerMenuExpanded).toBeTruthy();
    expect(store.getState()).toMatchSnapshot();
  });
  it("simulates a click in logout button", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const wrapper = mount(
      <MemoryRouter keyLength={0}>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>,
    );

    const logoutButton = wrapper.find("#logout-button");
    logoutButton.first().simulate("click");

    expect(store.getState().auth.isAuth).toBeFalsy();
    expect(store.getState()).toMatchSnapshot();
  });
});
