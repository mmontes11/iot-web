import { TYPE_SELECT, TYPE_UPDATED } from "constants/actionTypes/stats";

export const selectType = () => dispatch => {
  dispatch({ type: TYPE_SELECT });
};

export const updateType = typeToUpdate => dispatch => {
  dispatch({ type: TYPE_UPDATED, updatedType: typeToUpdate });
};