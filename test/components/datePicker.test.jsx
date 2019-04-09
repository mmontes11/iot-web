import React from "react";
import { shallow } from "enzyme";
import DatePicker from "components/datePicker";
import IntlProvider from "containers/intlProvider";
import store from "config/store";

describe("components/datePicker", () => {
  it("renders in initial state", () => {
    const wrapper = shallow(
      <IntlProvider store={store}>
        <DatePicker placeholder="Select date:" selected={undefined} onChange={() => undefined} />
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
