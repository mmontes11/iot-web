import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import StatsParamsPanel from "containers/statsParamsPanel";
import { initialState } from "../constants";

describe("containers/statsParamsPanel", () => {
  it("renders in initial state", () => {
    const store = configureStore([thunk])(initialState);
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <StatsParamsPanel onParamsSelected={() => undefined} onReset={() => undefined} />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders before selecting type", () => {
    const state = {
      ...initialState,
      params: {
        ...initialState.params,
        type: {
          items: ["event", "measurement"],
          isActive: true,
          selectedItem: null,
        },
      },
    };
    const store = configureStore([thunk])(state);
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <StatsParamsPanel onParamsSelected={() => undefined} onReset={() => undefined} />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders when type is selected", () => {
    const state = {
      ...initialState,
      params: {
        ...initialState.params,
        type: {
          items: ["event", "measurement"],
          isActive: false,
          selectedItem: "event",
        },
      },
    };
    const store = configureStore([thunk])(state);
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <StatsParamsPanel onParamsSelected={() => undefined} onReset={() => undefined} />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders when loading observations", () => {
    const state = {
      ...initialState,
      params: {
        ...initialState.params,
        observation: {
          items: [],
          isActive: false,
          isLoading: true,
          isDisabled: true,
          selectedItem: null,
        },
      },
    };
    const store = configureStore([thunk])(state);
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <StatsParamsPanel onParamsSelected={() => undefined} onReset={() => undefined} />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders before selecting observation", () => {
    const state = {
      ...initialState,
      params: {
        ...initialState.params,
        observation: {
          items: ["temperature", "humidity"],
          isActive: false,
          isLoading: false,
          isDisabled: false,
          selectedItem: null,
        },
      },
    };
    const store = configureStore([thunk])(state);
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <StatsParamsPanel onParamsSelected={() => undefined} onReset={() => undefined} />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders before selecting observation", () => {
    const state = {
      ...initialState,
      params: {
        ...initialState.params,
        observation: {
          items: ["temperature", "humidity"],
          isActive: false,
          isLoading: false,
          isDisabled: false,
          selectedItem: null,
        },
      },
    };
    const store = configureStore([thunk])(state);
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <StatsParamsPanel onParamsSelected={() => undefined} onReset={() => undefined} />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders when observation is selected", () => {
    const state = {
      ...initialState,
      params: {
        ...initialState.params,
        observation: {
          items: ["temperature", "humidity"],
          isActive: false,
          isLoading: false,
          isDisabled: false,
          selectedItem: "temperature",
        },
      },
    };
    const store = configureStore([thunk])(state);
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <StatsParamsPanel onParamsSelected={() => undefined} onReset={() => undefined} />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
