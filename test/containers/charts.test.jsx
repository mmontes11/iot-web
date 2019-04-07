import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import Charts from "containers/charts";
import { BARCHART, LINECHART } from "constants/chartTypes";
import { initialState, statsItem, eventDataItem, measurementDataItem } from "../constants";

describe("containers/charts", () => {
  it("renders nothing", () => {
    const store = configureStore([thunk])(initialState);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <Charts charType="foo" />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders when loading", () => {
    const state = {
      ...initialState,
      data: {
        items: [],
        things: [],
        isLoading: true,
      },
    };
    const store = configureStore([thunk])(state);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <Charts charType={BARCHART} />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders a bar chart", () => {
    const state = {
      ...initialState,
      data: {
        items: [statsItem],
        things: [],
        isLoading: false,
      },
    };
    const store = configureStore([thunk])(state);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <Charts charType={BARCHART} />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders a line chart of event data", () => {
    const state = {
      ...initialState,
      data: {
        items: [eventDataItem],
        things: [],
        isLoading: false,
      },
    };
    const store = configureStore([thunk])(state);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <Charts charType={LINECHART} />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders a line chart of measurement data", () => {
    const state = {
      ...initialState,
      data: {
        items: [measurementDataItem],
        things: ["foo", "bar"],
        isLoading: false,
      },
    };
    const store = configureStore([thunk])(state);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <Charts charType={LINECHART} />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
