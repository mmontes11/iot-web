import React from "react";
import { shallow } from "enzyme";
import ThingActions from "components/thingActions";
import { thing } from "../constants";

describe("components/thingActions", () => {
  const onEventStatsClick = jest.fn();
  const onMeasurementStatsClick = jest.fn();
  const wrapper = shallow(
    <ThingActions
      thing={thing}
      onEventStatsClick={onEventStatsClick}
      onMeasurementStatsClick={onMeasurementStatsClick}
    />,
  );
  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("simulates clicks on actions", () => {
    wrapper.find("#google-maps-link").simulate("click");
    wrapper.find("#event-stats-button").simulate("click");
    wrapper.find("#measurement-stats-button").simulate("click");
    expect(onEventStatsClick).toHaveBeenCalled();
    expect(onMeasurementStatsClick).toHaveBeenCalled();
  });
});
