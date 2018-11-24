import { RESET } from "constants/actionTypes/common";

export const initialState = {
  isLoading: false,
  isActive: false,
  isDisabled: false,
  items: [],
  selectedItem: null,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case RESET:
      return initialState;
    default:
      return state;
  }
};
