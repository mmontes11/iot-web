import { TOGGLE_HAMBURGER_MENU, TOGGLE_MAP_DIALOG } from "constants/actionTypes/app";

export const toggleHamburgerMenu = () => dispatch => {
  dispatch({ type: TOGGLE_HAMBURGER_MENU });
};

export const toggleMapDialog = () => dispatch => {
  dispatch({ type: TOGGLE_MAP_DIALOG });
};
