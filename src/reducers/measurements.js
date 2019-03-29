import { RESET } from "constants/actionTypes/common";

export const initialState = {
  items: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return initialState;
    default:
      return state;
  }
};
