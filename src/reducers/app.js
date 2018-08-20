import { TOGGLE_HAMBURGER_MENU, TOGGLE_MAP_DIALOG } from "constants/actionTypes/app";

const initialState = {
  isHamburgerMenuExpanded: false,
  isMapDialogOpened: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_HAMBURGER_MENU:
      return { ...state, isHamburgerMenuExpanded: !state.isHamburgerMenuExpanded };
    case TOGGLE_MAP_DIALOG:
      return { ...state, isMapDialogOpened: !state.isMapDialogOpened };
    default:
      return state;
  }
};
