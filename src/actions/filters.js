import { FILTER_TYPE_SELECT, ADD_FILTER_TYPE } from "constants/actionTypes/filters";

export const selectFilterType = () => dispatch => {
  dispatch({ type: FILTER_TYPE_SELECT });
};

export const addFilterType = addedFilterType => dispatch => {
  dispatch({ type: ADD_FILTER_TYPE, addedFilterType });
};
