import appReducer from "reducers/app";
import { TOGGLE_HAMBURGER_MENU } from "constants/actionTypes/app";

describe("reducers/app", () => {
  const initialState = {
    isHamburgerMenuExpanded: false,
  };
  it("has a default state", () => {
    expect(appReducer(undefined, { type: "@init" })).toMatchSnapshot();
  });
  it("reduces nothing", () => {
    expect(appReducer(initialState, { type: "WHATEVER" })).toMatchSnapshot();
  });
  it("reduces TOGGLE_HAMBURGUER_MENU", () => {
    expect(appReducer(initialState, { type: TOGGLE_HAMBURGER_MENU })).toMatchSnapshot();
  });
});
