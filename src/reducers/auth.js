import { IS_AUTH, SET_PASSWORD, SET_USERNAME, SET_SHOW_ERROR } from "constants/actionTypes/auth";
import { RESET } from "constants/actionTypes/common";

const initialState = {
  isAuth: false,
  username: null,
  password: null,
  showError: true,
};

export default (state = initialState, { type, isAuth, username, password, showError }) => {
  switch (type) {
    case IS_AUTH:
      return { ...initialState, isAuth };
    case SET_USERNAME:
      return { ...state, username };
    case SET_PASSWORD:
      return { ...state, password };
    case SET_SHOW_ERROR:
      return { ...state, showError };
    case RESET:
      return { ...initialState, isAuth: state.isAuth };
    default:
      return state;
  }
};
