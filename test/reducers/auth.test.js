import authReducer from "reducers/auth";
import { IS_AUTH } from "constants/actionTypes/auth";

describe("reducers/history", () => {
  const initialState = {
    isAuth: false,
    username: null,
    password: null
  };

  it("has a default state", () => {
    expect(authReducer(undefined, { type: "@init" })).toMatchSnapshot();
  });
  it("reduces nothing", () => {
    expect(authReducer(initialState, { type: "WHATEVER" })).toMatchSnapshot();
  });
  it("reduces IS_AUTH", () => {
    expect(
      authReducer(initialState, { type: IS_AUTH, isAuth: true })
    ).toMatchSnapshot();
  });
});
