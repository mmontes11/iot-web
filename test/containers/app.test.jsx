import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import App from "containers/app";

describe("components/app", () => {
  const state = {
    auth: {
      isAuth: false,
      username: null,
      password: null
    },
    request: {
      pending: 0,
      statusCode: null,
      error: null
    }
  };

  it("renders the app", () => {
    const store = configureStore([])(state);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <App store={store} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
