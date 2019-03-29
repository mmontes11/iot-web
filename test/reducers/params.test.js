import deepFreeze from "deep-freeze";
import paramsReducer, { initialState as paramsInitialState } from "reducers/params";
import {
  PARAM_SELECT,
  PARAM_UPDATED,
  PARAM_REQUEST,
  PARAM_REQUEST_SUCCESS,
  PARAM_REQUEST_ERROR,
  PARAM_ITEMS_UPDATED,
} from "constants/actionTypes/params";
import { RESET } from "constants/actionTypes/common";
import { FIRST_PARAM, SECOND_PARAM } from "constants/params";

deepFreeze(paramsInitialState);

describe("reducers/params", () => {
  it("has a default state", () => {
    expect(paramsReducer(undefined, { type: "@init" })).toMatchSnapshot();
  });
  it("reduces nothing", () => {
    expect(paramsReducer(paramsInitialState, { type: "WHATEVER" })).toMatchSnapshot();
  });
  it("reduces PARAM_SELECT", () => {
    expect(paramsReducer(paramsInitialState, { type: PARAM_SELECT, param: FIRST_PARAM })).toMatchSnapshot();
  });
  it("updates FIRST_PARAM", () => {
    expect(
      paramsReducer(paramsInitialState, { type: PARAM_UPDATED, param: FIRST_PARAM, selectedItem: "foo" }),
    ).toMatchSnapshot();
  });
  it("updates SECOND_PARAM", () => {
    expect(
      paramsReducer(paramsInitialState, { type: PARAM_UPDATED, param: SECOND_PARAM, selectedItem: "bar" }),
    ).toMatchSnapshot();
  });
  it("reduces PARAM_REQUEST", () => {
    expect(paramsReducer(paramsInitialState, { type: PARAM_REQUEST, param: FIRST_PARAM })).toMatchSnapshot();
  });
  it("reduces PARAM_REQUEST_SUCCESS", () => {
    expect(paramsReducer(paramsInitialState, { type: PARAM_REQUEST_SUCCESS, param: FIRST_PARAM })).toMatchSnapshot();
  });
  it("reduces PARAM_REQUEST_ERROR", () => {
    expect(paramsReducer(paramsInitialState, { type: PARAM_REQUEST_ERROR, param: FIRST_PARAM })).toMatchSnapshot();
  });
  it("reduces PARAM_ITEMS_UPDATED", () => {
    expect(
      paramsReducer(paramsInitialState, {
        type: PARAM_ITEMS_UPDATED,
        param: FIRST_PARAM,
        items: [],
      }),
    ).toMatchSnapshot();
  });
  it("reduces RESET", () => {
    expect(paramsReducer(paramsInitialState, { type: RESET })).toMatchSnapshot();
  });
});
