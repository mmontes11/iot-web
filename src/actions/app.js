import { TOGGLE_HAMBURGER_MENU, TOGGLE_MAP_DIALOG, SET_SHOW_ERROR } from "constants/actionTypes/app";

export const toggleHamburgerMenu = () => dispatch => {
  dispatch({ type: TOGGLE_HAMBURGER_MENU });
};

export const toggleMapDialog = () => dispatch => {
  dispatch({ type: TOGGLE_MAP_DIALOG });
};

export const setShowError = showError => dispatch => {
  dispatch({ type: SET_SHOW_ERROR, showError });
};
