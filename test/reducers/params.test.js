import deepFreeze from "deep-freeze";
import paramsReducer, { initialState as paramsInitialState } from "reducers/params";
import {
  TYPE_SELECT,
  TYPE_UPDATED,
  OBSERVATION_SELECT,
  OBSERVATION_UPDATED,
  OBSERVATIONS_REQUEST,
  OBSERVATIONS_REQUEST_SUCCESS,
  OBSERVATIONS_REQUEST_ERROR,
  OBSERVATIONS_UPDATED,
} from "constants/actionTypes/params";
import { RESET } from "constants/actionTypes/common";

deepFreeze(paramsInitialState);

describe("reducers/params", () => {
  it("has a default state", () => {
    expect(paramsReducer(undefined, { type: "@init" })).toMatchSnapshot();
  });
  it("reduces nothing", () => {
    expect(paramsReducer(paramsInitialState, { type: "WHATEVER" })).toMatchSnapshot();
  });
  it("reduces TYPE_SELECT", () => {
    expect(paramsReducer(paramsInitialState, { type: TYPE_SELECT })).toMatchSnapshot();
  });
  it("reduces TYPE_UPDATED", () => {
    expect(paramsReducer(paramsInitialState, { type: TYPE_UPDATED, updatedType: "foo" })).toMatchSnapshot();
  });
  it("reduces OBSERVATION_SELECT", () => {
    expect(paramsReducer(paramsInitialState, { type: OBSERVATION_SELECT })).toMatchSnapshot();
  });
  it("reduces OBSERVATION_UPDATED", () => {
    expect(
      paramsReducer(paramsInitialState, { type: OBSERVATION_UPDATED, updatedObservation: "foo" }),
    ).toMatchSnapshot();
  });
  it("reduces OBSERVATIONS_REQUEST", () => {
    expect(paramsReducer(paramsInitialState, { type: OBSERVATIONS_REQUEST })).toMatchSnapshot();
  });
  it("reduces OBSERVATIONS_REQUEST_SUCCESS", () => {
    expect(paramsReducer(paramsInitialState, { type: OBSERVATIONS_REQUEST_SUCCESS })).toMatchSnapshot();
  });
  it("reduces OBSERVATIONS_REQUEST_ERROR", () => {
    expect(paramsReducer(paramsInitialState, { type: OBSERVATIONS_REQUEST_ERROR })).toMatchSnapshot();
  });
  it("reduces OBSERVATIONS_UPDATED", () => {
    expect(paramsReducer(paramsInitialState, { type: OBSERVATIONS_UPDATED, observations: [] })).toMatchSnapshot();
  });
  it("reduces RESET", () => {
    expect(paramsReducer(paramsInitialState, { type: RESET })).toMatchSnapshot();
  });
});
