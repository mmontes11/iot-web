import { TOGGLE_HAMBURGER_MENU } from "constants/actionTypes/app";

export const toggleHamburgerMenu = () => dispatch => {
  dispatch({ type: TOGGLE_HAMBURGER_MENU });
};
