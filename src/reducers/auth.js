import {
  IS_AUTH,
  SET_PASSWORD,
  SET_USERNAME
} from "constants/actionTypes/auth";

const initialState = {
  isAuth: false,
  username: null,
  password: null
};

export default (state = initialState, { type, isAuth, username, password }) => {
  switch (type) {
    case IS_AUTH:
      if (isAuth) {
        return { isAuth, username: null, password: null };
      }
      return { isAuth, username, password };
    case SET_USERNAME:
      return { ...state, username };
    case SET_PASSWORD:
      return { ...state, password };
    default:
      return state;
  }
};
