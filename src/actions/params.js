import { TYPE_SELECT, TYPE_UPDATED } from "constants/actionTypes/params";

export const selectType = () => dispatch => {
  dispatch({ type: TYPE_SELECT });
};

export const updateType = updatedType => dispatch => {
  dispatch({ type: TYPE_UPDATED, updatedType });
};
