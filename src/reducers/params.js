import { TYPE_SELECT, TYPE_UPDATED } from "constants/actionTypes/params";
import { RESET } from "constants/actionTypes/common";

const initialState = {
  type: {
    items: ["event", "measurement"],
    isActive: false,
    selectedItem: null,
  },
  observation: {
    items: [],
    isActive: false,
    isLoading: false,
    isDisabled: true,
    selectedItem: null,
  },
  reset: {
    isDisabled: true,
  },
};

export default (state = initialState, { type, updatedType }) => {
  switch (type) {
    case TYPE_SELECT:
      return { ...state, type: { ...state.type, isActive: true } };
    case TYPE_UPDATED:
      return {
        ...state,
        type: { ...state.type, isActive: false, selectedItem: updatedType },
        reset: { ...state.type, isDisabled: false },
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
