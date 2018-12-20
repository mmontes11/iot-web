import React from "react";
import { shallow } from "enzyme";
import BarChart from "components/barChart";
import { statsWithUnits, statsWithoutUnits } from "../constants";

describe("components/barChart", () => {
  it("renders chart with units in title", () => {
    const wrapper = shallow(<BarChart stats={statsWithUnits} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders chart withou units in title", () => {
    const wrapper = shallow(<BarChart stats={statsWithoutUnits} />);
    expect(wrapper).toMatchSnapshot();
  });
});