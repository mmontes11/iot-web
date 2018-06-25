import deepFreeze from "deep-freeze";
import rootReducer from "reducers";

jest.mock("reducers/auth", () => (state = false, { type }) => {
  switch (type) {
    case "ACTION":
      return "STATE_AUTH";
    default:
      return state;
  }
});

describe("reducers/index", () => {
  it("combines other reducers", () => {
    expect(rootReducer).toMatchSnapshot();
  });

  const state = {
    isAuth: "INITIAL_AUTH"
  };

  deepFreeze(state);

  it("has a default state", () => {
    expect(rootReducer(undefined, { type: "@init" })).toMatchSnapshot();
  });
  it("reduces nothing", () => {
    expect(rootReducer(state, { type: "WHATEVER" })).toMatchSnapshot();
  });
  it("reduces other actions", () => {
    expect(rootReducer(state, { type: "ACTION" })).toMatchSnapshot();
  });
});
