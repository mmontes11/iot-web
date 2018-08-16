import React from "react";
import { shallow } from "enzyme";
import ThingDetail from "components/thingDetail";
import { thing } from "../constants";

describe("components/thingDetail", () => {
  const wrapper = shallow(<ThingDetail thing={thing} onStatsClick={() => undefined} />);
  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });
});