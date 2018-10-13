import { THINGS_UPDATED, THING_SELECTED } from "constants/actionTypes/things";
import { RESET } from "constants/actionTypes/common";

const initialState = {
  items: [],
  selectedItem: null,
};

export default (state = initialState, { type, things, thing }) => {
  switch (type) {
    case THINGS_UPDATED:
      return { ...state, items: things };
    case THING_SELECTED:
      if (state.selectedItem !== null && state.selectedItem.name === thing.name) {
        return { ...state, selectedItem: null };
      }
      return { ...state, selectedItem: thing };
    case RESET:
      return { ...initialState, items: state.items };
    default:
      return state;
  }
};
