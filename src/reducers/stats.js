import { RESET } from "constants/actionTypes/common";
import { STATS_REQUEST, STATS_REQUEST_SUCCESS, STATS_REQUEST_ERROR, STATS_UPDATED } from "constants/actionTypes/stats";
import paramsReducer from "reducers/params";

const initialState = {
  items: [],
  isLoadingStats: false,
};

export default (state = initialState, action) => {
  const params = paramsReducer(state.params, action);
  switch (action.type) {
    case STATS_REQUEST:
      return { ...state, params, isLoadingStats: true };
    case STATS_REQUEST_SUCCESS:
      return { ...state, params, isLoadingStats: false };
    case STATS_REQUEST_ERROR:
      return { ...state, params, isLoadingStats: false };
    case STATS_UPDATED:
      return { ...state, params, items: action.stats };
    case RESET:
      return { ...initialState, params };
    default:
      return { ...state, params };
  }
};
