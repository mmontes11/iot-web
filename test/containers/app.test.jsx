import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import App from "containers/app";
import { initialState } from "../helpers/redux";

describe("containers/app", () => {
  it("renders the app without auth", () => {
    const store = configureStore([thunk])(initialState);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <App store={store} />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders the app with auth", () => {
    const state = {
      ...initialState,
      auth: {
        isAuth: true,
        username: null,
        password: null,
        showError: true,
      },
    };
    const store = configureStore([thunk])(state);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <App store={store} />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
