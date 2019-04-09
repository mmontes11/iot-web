import React from "react";
import DateFilter from "components/dateFilter";
import IntlProvider from "containers/intlProvider";
import store from "config/store";
import { shallow } from "enzyme";

describe("components/dateFilter", () => {
  it("renders DateFilter for selecting a time period", () => {
    const dateFilter = {
      selector: {
        isCustomSelected: false,
        onChange: () => undefined,
      },
      timePeriod: {
        label: "Select time period:",
        isLoading: false,
        isActive: true,
        isDisabled: false,
        items: ["foo", "bar"],
        selectedItem: null,
        onButtonClick: () => undefined,
        onItemClick: () => undefined,
      },
      custom: {
        startDate: {
          selected: null,
          onChange: () => undefined,
        },
        endDate: {
          selected: null,
          onChange: () => undefined,
        },
      },
      onDelete: () => undefined,
    };
    const wrapper = shallow(
      <IntlProvider store={store}>
        <DateFilter dateFilter={dateFilter} />
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders DateFilter for selecting a custom time period", () => {
    const dateFilter = {
      selector: {
        isCustomSelected: true,
        onChange: () => undefined,
      },
      timePeriod: {
        isLoading: false,
        isActive: true,
        isDisabled: false,
        items: ["foo", "bar"],
        selectedItem: null,
        onButtonClick: () => undefined,
        onItemClick: () => undefined,
      },
      custom: {
        startDate: {
          selected: null,
          onChange: () => undefined,
        },
        endDate: {
          selected: null,
          onChange: () => undefined,
        },
      },
      onDelete: () => undefined,
    };
    const wrapper = shallow(
      <IntlProvider store={store}>
        <DateFilter dateFilter={dateFilter} />
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("simulates clicks on buttons", () => {
    const onSelectorChange = jest.fn();
    const onDelete = jest.fn();
    const dateFilter = {
      selector: {
        isCustomSelected: true,
        onChange: onSelectorChange,
      },
      timePeriod: {
        isLoading: false,
        isActive: true,
        isDisabled: false,
        items: ["foo", "bar"],
        selectedItem: null,
        onButtonClick: () => undefined,
        onItemClick: () => undefined,
      },
      custom: {
        startDate: {
          selected: null,
          onChange: () => undefined,
        },
        endDate: {
          selected: null,
          onChange: () => undefined,
        },
      },
      onDelete,
    };
    const wrapper = shallow(
      <IntlProvider store={store}>
        <DateFilter dateFilter={dateFilter} />
      </IntlProvider>,
    );
    wrapper.find("#time-period-button").simulate("click");
    expect(onSelectorChange).toHaveBeenCalled();
    wrapper.find("#delete-button").simulate("click");
    expect(onDelete).toHaveBeenCalled();
  });
});
