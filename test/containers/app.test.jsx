import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import App from "containers/app";

describe("components/app", () => {
  it("renders the app without auth", () => {
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
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <App store={store} />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders the app with auth", () => {
    const state = {
      app: {
        isHamburgerMenuExpanded: false,
      },
      auth: {
        isAuth: true,
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
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <App store={store} />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
