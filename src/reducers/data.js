import { RESET } from "constants/actionTypes/common";
import { DATA_REQUEST, DATA_REQUEST_SUCCESS, DATA_REQUEST_ERROR, DATA_UPDATED } from "constants/actionTypes/data";

export const initialState = {
  items: [],
  isLoading: false,
};

export default (state = initialState, { type, items }) => {
  switch (type) {
    case DATA_REQUEST:
      return { ...state, isLoading: true };
    case DATA_REQUEST_SUCCESS:
      return { ...state, isLoading: false };
    case DATA_REQUEST_ERROR:
      return { ...state, isLoading: false };
    case DATA_UPDATED:
      return { ...state, items };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
