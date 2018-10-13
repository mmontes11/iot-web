import deepFreeze from "deep-freeze";
import statsReducer from "reducers/stats";
import { RESET } from "constants/actionTypes/common";
import { STATS_REQUEST, STATS_REQUEST_SUCCESS, STATS_REQUEST_ERROR, STATS_UPDATED } from "constants/actionTypes/stats";
import { initialState } from "../constants/index";

const statsInitialState = initialState.stats;
deepFreeze(statsInitialState);

describe("reducers/stats", () => {
  it("has a default state", () => {
    expect(statsReducer(undefined, { type: "@init" })).toMatchSnapshot();
  });
  it("reduces nothing", () => {
    expect(statsReducer(statsInitialState, { type: "WHATEVER" })).toMatchSnapshot();
  });
  it("reduces STATS_REQUEST", () => {
    expect(statsReducer(statsInitialState, { type: STATS_REQUEST })).toMatchSnapshot();
  });
  it("reduces STATS_REQUEST_SUCCESS", () => {
    expect(statsReducer(statsInitialState, { type: STATS_REQUEST_SUCCESS })).toMatchSnapshot();
  });
  it("reduces STATS_REQUEST_ERROR", () => {
    expect(statsReducer(statsInitialState, { type: STATS_REQUEST_ERROR })).toMatchSnapshot();
  });
  it("reduces STATS_UPDATED", () => {
    expect(statsReducer(statsInitialState, { type: STATS_UPDATED, stats: [] })).toMatchSnapshot();
  });
  it("reduces RESET", () => {
    expect(statsReducer(statsInitialState, { type: RESET })).toMatchSnapshot();
  });
});
