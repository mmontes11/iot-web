import { getStats } from "actions/stats";
import { EVENT_TYPE, MEASUREMENT_TYPE } from "constants/observationTypes";

describe("actions/stats", () => {
  it("dispatches a getStats action", () => {
    const thunk = getStats();
    const dispatch = jest.fn();
    let getState = jest.fn(() => ({
      stats: {
        params: {
          type: { selectedItem: EVENT_TYPE },
          observation: { selectedItem: "door-opened" },
        },
      },
    }));
    thunk(dispatch, getState);
    expect(thunk).toBeAThunk();
    expect(thunk).toMatchSnapshot();
    getState = jest.fn(() => ({
      stats: {
        params: {
          type: { selectedItem: MEASUREMENT_TYPE },
          observation: { selectedItem: "temperature-outdoor" },
        },
      },
    }));
    thunk(dispatch, getState);
    expect(thunk).toBeAThunk();
    expect(thunk).toMatchSnapshot();
  });
});
