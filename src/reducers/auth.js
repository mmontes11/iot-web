import { IS_AUTH } from "constants/actionTypes/auth";

const initialState = false;

export default (state = initialState, { type, isAuth }) => {
  switch (type) {
    case IS_AUTH:
      return isAuth;
    default:
      return state;
  }
};
