import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import Login from "containers/login";
import { initialState } from "../helpers/redux";

describe("containers/login", () => {
  it("renders login in initial state", () => {
    const store = configureStore([thunk])(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders login in loading state", () => {
    const state = {
      ...initialState,
      auth: {
        isAuth: true,
        username: "username",
        password: "password",
        showError: true,
      },
      request: {
        pending: 1,
        statusCode: null,
        error: null,
      },
    };
    const store = configureStore([thunk])(state);
    const wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders login in error state", () => {
    const state = {
      ...initialState,
      auth: {
        isAuth: true,
        username: "username",
        password: "password",
        showError: true,
      },
      request: {
        pending: 1,
        statusCode: null,
        error: new Error(),
      },
    };
    const store = configureStore([thunk])(state);
    const wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("simulates closing dialog", () => {
    const store = configureStore([thunk])(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.find(".modal-close").simulate("click");
    expect(store.getState()).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
  });
  it("simulates successful login", () => {
    const store = configureStore([thunk])(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.find("#username-input").simulate("change", { target: { value: "username" } });
    wrapper.find("#password-input").simulate("change", { target: { value: "password" } });
    wrapper.find("#login-button").simulate("click");
    expect(store.getState()).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
  });
});
