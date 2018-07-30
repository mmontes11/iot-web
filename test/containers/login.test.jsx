import React from "react";
import { mount } from "enzyme";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import rootReducer from "reducers";
import Login from "containers/login";

describe("components/login", () => {
  it("renders login in initial state", () => {
    const state = {
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
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders login in loading state", () => {
    const state = {
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
    const store = configureStore([])(state);
    const wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders login in error state and closes dialog", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
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
  it("renders login in error state and closes dialog", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
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
    const store = createStore(rootReducer, applyMiddleware(thunk));
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
