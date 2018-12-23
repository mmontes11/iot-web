import React from "react";
import { shallow } from "enzyme";
import DatePicker from "components/datePicker";

describe("components/datePicker", () => {
  it("renders in initial state", () => {
    const wrapper = shallow(<DatePicker placeholder="Select date:" selected={undefined} onChange={() => undefined} />);
    expect(wrapper).toMatchSnapshot();
  });
});
