import React from "react";
import { shallow } from "enzyme";
import ThingActions from "components/thingActions";

describe("components/thingActions", () => {
  const onStatsClick = jest.fn();
  const wrapper = shallow(<ThingActions googleMapsUrl="https://www.google.es/maps" onStatsClick={onStatsClick} />);
  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("renders without actions", () => {
    const wrapperWithoutActions = shallow(<ThingActions />);
    expect(wrapperWithoutActions).toMatchSnapshot();
  });
  it("simulates clicks on actions", () => {
    wrapper.find("#google-maps-link").simulate("click");
    wrapper.find("#stats-button").simulate("click");
    expect(onStatsClick).toHaveBeenCalledTimes(1);
  });
});
