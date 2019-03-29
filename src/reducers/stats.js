import { RESET } from "constants/actionTypes/common";
import { STATS_REQUEST, STATS_REQUEST_SUCCESS, STATS_REQUEST_ERROR, STATS_UPDATED } from "constants/actionTypes/stats";

export const initialState = {
  items: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STATS_REQUEST:
      return { ...state, isLoading: true };
    case STATS_REQUEST_SUCCESS:
      return { ...state, isLoading: false };
    case STATS_REQUEST_ERROR:
      return { ...state, isLoading: false };
    case STATS_UPDATED:
      return { ...state, items: action.stats };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
