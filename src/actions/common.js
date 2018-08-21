import { RESET } from "constants/actionTypes/common";

export const reset = () => dispatch => {
  dispatch({ type: RESET });
};
