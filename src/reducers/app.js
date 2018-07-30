import { TOGGLE_HAMBURGER_MENU } from "constants/actionTypes/app";

const initialState = {
  isHamburgerMenuExpanded: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_HAMBURGER_MENU:
      return { ...state, isHamburgerMenuExpanded: !state.isHamburgerMenuExpanded };
    default:
      return state;
  }
};
