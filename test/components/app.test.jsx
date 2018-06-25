import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import App from "components/app";

describe("components/app", () => {
  const state = {
    isAuth: false
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
