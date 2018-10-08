import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import Stats from "containers/stats";
import { initialState, statsWithUnits, statsWithoutUnits } from "../constants";

describe("containers/stats", () => {
  it("renders stats in initial state", () => {
    const store = configureStore([thunk])(initialState);
    const wrapperLoading = mount(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <Stats />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapperLoading).toMatchSnapshot();
  });
  it("renders when loading stats", () => {
    const state = {
      ...initialState,
      request: {
        pending: 1,
        statusCode: null,
        error: null,
      },
      stats: {
        ...initialState.stats,
        isLoadingStats: true,
        items: []
      }
    };
    const store = configureStore([thunk])(state);
    const wrapperLoading = mount(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <Stats />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapperLoading).toMatchSnapshot();
  });
  it("renders stats barcharts", () => {
    const state = {
      ...initialState,
      stats: {
        ...initialState.stats,
        isLoadingStats: false,
        items: [
          statsWithUnits, 
          statsWithoutUnits
        ]
      }
    };
    const store = configureStore([thunk])(state);
    const wrapperLoading = mount(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <Stats />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapperLoading).toMatchSnapshot();
  });
});