import React from "react";
import { shallow } from "enzyme";
import BarChart from "components/barChart";
import IntlProvider from "containers/intlProvider";
import store from "config/store";
import { statsWithUnits, statsWithoutUnits } from "../constants";

describe("components/barChart", () => {
  it("renders chart with units in title", () => {
    const wrapper = shallow(
      <IntlProvider store={store}>
        <BarChart {...statsWithUnits} />
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders chart without units in title", () => {
    const wrapper = shallow(
      <IntlProvider store={store}>
        <BarChart {...statsWithoutUnits} />
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
