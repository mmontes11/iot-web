import { RESET } from "constants/actionTypes/common";
import { STATS_REQUEST, STATS_REQUEST_SUCCESS, STATS_REQUEST_ERROR, STATS_UPDATED } from "constants/actionTypes/stats";
import paramsReducer, { initialState as paramsInitialState } from "reducers/params";

const initialState = {
  items: [],
  isLoadingStats: false,
  params: paramsInitialState,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STATS_REQUEST:
      return { ...state, isLoadingStats: true };
    case STATS_REQUEST_SUCCESS:
      return { ...state, isLoadingStats: false };
    case STATS_REQUEST_ERROR:
      return { ...state, isLoadingStats: false };
    case STATS_UPDATED:
      return { ...state, items: action.stats };
    case RESET:
      return { ...initialState, paramsInitialState };
    default:
      return { ...state, params: paramsReducer(state.params, action) };
  }
};
