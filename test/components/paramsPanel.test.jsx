import React from "react";
import ParamsPanel from "components/paramsPanel";
import { shallow } from "enzyme";

describe("components/paramsPanel", () => {
  it("renders in normal state", () => {
    const wrapper = shallow(
      <ParamsPanel
        type={{
          label: "Select type",
          items: ["foo", "bar"],
          isActive: false,
          onButtonClick: () => undefined,
          onItemClick: () => undefined,
        }}
        observation={{
          label: "Select type",
          items: ["foo", "bar"],
          isActive: false,
          isLoading: false,
          isDisabled: false,
          onButtonClick: () => undefined,
          onItemClick: () => undefined,
        }}
        reset={{
          isDisabled: true,
          onReset: () => undefined,
        }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders after some params have been specified", () => {
    const wrapper = shallow(
      <ParamsPanel
        type={{
          label: "Select type",
          items: ["foo", "bar"],
          isActive: false,
          onButtonClick: () => undefined,
          onItemClick: () => undefined,
        }}
        observation={{
          label: "Select type",
          items: ["foo", "bar"],
          isActive: false,
          isLoading: false,
          isDisabled: false,
          onButtonClick: () => undefined,
          onItemClick: () => undefined,
        }}
        reset={{
          isDisabled: false,
          onReset: () => undefined,
        }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("simulates click on reset", () => {
    const onReset = jest.fn();
    const wrapper = shallow(
      <ParamsPanel
        type={{
          label: "Select type",
          items: ["foo", "bar"],
          isActive: false,
          onButtonClick: () => undefined,
          onItemClick: () => undefined,
        }}
        observation={{
          label: "Select type",
          items: ["foo", "bar"],
          isActive: false,
          isLoading: false,
          isDisabled: false,
          onButtonClick: () => undefined,
          onItemClick: () => undefined,
        }}
        reset={{
          isDisabled: false,
          onReset,
        }}
      />,
    );
    wrapper.find(".button").simulate("click");
    expect(onReset).toHaveBeenCalledTimes(1);
  });
});
