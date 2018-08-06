import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Main from "components/main";

describe("components/main", () => {
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

  it("renders a main in / path", () => {
    const store = configureStore([])(state);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <Main />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find("Things")).toHaveLength(1);
    expect(wrapper.find("Stats")).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders a main in /foo path", () => {
    const store = configureStore([])(state);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/foo"]} keyLength={0}>
        <Provider store={store}>
          <Main />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find("Things")).toHaveLength(1);
    expect(wrapper.find("Stats")).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders a main in /things path", () => {
    const store = configureStore([])(state);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/things"]} keyLength={0}>
        <Provider store={store}>
          <Main />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find("Things")).toHaveLength(1);
    expect(wrapper.find("Stats")).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders a main in /stats path", () => {
    const store = configureStore([])(state);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/stats"]} keyLength={0}>
        <Provider store={store}>
          <Main />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find("Things")).toHaveLength(0);
    expect(wrapper.find("Stats")).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
