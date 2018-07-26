import requestReducer from "reducers/request";
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR
} from "constants/actionTypes/auth";

describe("reducers/request", () => {
  const initialState = {
    pending: 0,
    statusCode: null,
    error: null
  };
  it("has a default state", () => {
    expect(requestReducer(undefined, { type: "@init" })).toMatchSnapshot();
  });
  it("reduces nothing", () => {
    expect(
      requestReducer(initialState, { type: "WHATEVER" })
    ).toMatchSnapshot();
  });
  it("reduces /_REQUEST$/", () => {
    expect(
      requestReducer(initialState, { type: LOGIN_REQUEST })
    ).toMatchSnapshot();
    requestReducer(initialState, { type: LOGIN_REQUEST_SUCCESS });
  });
  it("reduces /_REQUEST_SUCCESS$/", () => {
    requestReducer(initialState, { type: LOGIN_REQUEST });
    expect(
      requestReducer(initialState, { type: LOGIN_REQUEST_ERROR })
    ).toMatchSnapshot();
  });
  it("reduces /_REQUEST_ERROR$/", () => {
    requestReducer(initialState, { type: LOGIN_REQUEST });
    expect(
      requestReducer(initialState, { type: LOGIN_REQUEST_ERROR })
    ).toMatchSnapshot();
  });
  it("simulates a flow of requests", () => {
    requestReducer(initialState, { type: LOGIN_REQUEST });
    requestReducer(initialState, { type: LOGIN_REQUEST });
    requestReducer(initialState, { type: LOGIN_REQUEST });
    requestReducer(initialState, { type: LOGIN_REQUEST_SUCCESS });
    expect(
      requestReducer(initialState, { type: LOGIN_REQUEST_ERROR })
    ).toMatchSnapshot();
  });
});
