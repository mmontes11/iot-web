import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import App from "containers/app";
import { initialState } from "../constants/index";

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
  const stateWithAuth = {
    ...initialState,
    auth: {
      isAuth: true,
      username: null,
      password: null,
      showError: true,
    },
  };
  it("renders the app with auth in /", () => {
    const store = configureStore([thunk])(stateWithAuth);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <App store={store} />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders the app with auth in /foo", () => {
    const store = configureStore([thunk])(stateWithAuth);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/foo"]} keyLength={0}>
        <App store={store} />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders the app with auth in /things", () => {
    const store = configureStore([thunk])(stateWithAuth);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/things"]} keyLength={0}>
        <App store={store} />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders the app with auth in /stats", () => {
    const store = configureStore([thunk])(stateWithAuth);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/stats"]} keyLength={0}>
        <App store={store} />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
