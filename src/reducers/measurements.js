import { RESET } from "constants/actionTypes/common";
import paramsReducer, { initialState as paramsInitialState } from "reducers/measurementsParams";
import filtersReducer, { initialState as filtersInitialState } from "reducers/filters";

const initialState = {
  items: [],
  isLoading: false,
  params: paramsInitialState,
  filters: filtersInitialState,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return initialState;
    default:
      return { ...state, params: paramsReducer(state.params, action), filters: filtersReducer(state.filters, action) };
  }
};
