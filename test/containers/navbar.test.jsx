import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import Navbar from "containers/navbar";
import { initialState } from "../constants/index";

describe("containers/navbar", () => {
  it("renders navbar in initial state", () => {
    const store = configureStore([thunk])(initialState);
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
      ...initialState,
      app: {
        isHamburgerMenuExpanded: true,
      },
    };
    const store = configureStore([thunk])(state);
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
    const store = configureStore([thunk])(initialState);
    const wrapper = mount(
      <MemoryRouter keyLength={0}>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>,
    );

    const hamburgerButton = wrapper.find(".navbar-burger .burger");
    hamburgerButton.first().simulate("click");

    expect(store.getState()).toMatchSnapshot();
  });
  it("simulates a click in logout button", () => {
    const store = configureStore([thunk])(initialState);
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
