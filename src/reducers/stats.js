import { TYPE_SELECT, TYPE_UPDATED } from "constants/actionTypes/stats";

const initialState = {
  type: {
    selected: null,
    items: ["event", "measurement"],
    isActive: false
  }
};

export default (state = initialState, { type, updatedType }) => {
  switch (type) {
    case TYPE_SELECT:
      return { ...state, type: { isActive: true } };
    case TYPE_UPDATED:
      return { ...state, type: { isActive: false, selected: updatedType } };
    default:
      return state;
  }
};