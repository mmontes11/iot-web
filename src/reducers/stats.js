import { RESET } from "constants/actionTypes/common";
import paramsReducer from "reducers/params";

const initialState = {
  stats: null,
};

export default (state = initialState, action) => {
  const params = paramsReducer(state.params, action);
  switch (action.type) {
    case RESET:
      return { ...initialState, params };
    default:
      return { ...state, params };
  }
};
