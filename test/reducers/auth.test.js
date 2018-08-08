import authReducer from "reducers/auth";
import { IS_AUTH, SET_USERNAME, SET_PASSWORD, SET_SHOW_ERROR } from "constants/actionTypes/auth";

describe("reducers/auth", () => {
  const initialState = {
    isAuth: false,
    username: null,
    password: null,
    showError: true,
  };
  it("has a default state", () => {
    expect(authReducer(undefined, { type: "@init" })).toMatchSnapshot();
  });
  it("reduces nothing", () => {
    expect(authReducer(initialState, { type: "WHATEVER" })).toMatchSnapshot();
  });
  it("reduces IS_AUTH", () => {
    expect(authReducer(initialState, { type: IS_AUTH, isAuth: true })).toMatchSnapshot();
  });
  it("reduces SET_USERNAME", () => {
    expect(authReducer(initialState, { type: SET_USERNAME, username: "USERNAME" })).toMatchSnapshot();
  });
  it("reduces SET_PASSWORD", () => {
    expect(authReducer(initialState, { type: SET_PASSWORD, password: "PASSWORD" })).toMatchSnapshot();
  });
  it("reduces SET_SHOW_ERROR", () => {
    expect(authReducer(initialState, { type: SET_SHOW_ERROR, showError: true })).toMatchSnapshot();
  });
});
