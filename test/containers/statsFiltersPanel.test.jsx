import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import StatsFiltersPanel from "containers/statsFiltersPanel";
import { initialState } from "../constants";

describe("containers/statFiltersPanel", () => {
  it("renders in in initial state", () => {
    const store = configureStore([thunk])(initialState);
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <StatsFiltersPanel onFiltersChange={() => undefined} />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
