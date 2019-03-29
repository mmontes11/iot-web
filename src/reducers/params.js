import {
  PARAM_SELECT,
  PARAM_UPDATED,
  PARAM_REQUEST,
  PARAM_REQUEST_SUCCESS,
  PARAM_REQUEST_ERROR,
  PARAM_ITEMS_UPDATED,
} from "constants/actionTypes/params";
import { RESET } from "constants/actionTypes/common";
import { FIRST_PARAM, SECOND_PARAM } from "constants/params";

const paramInitialState = {
  items: [],
  isActive: false,
  isLoading: false,
  isDisabled: true,
  selectedItem: null,
};

export const initialState = {
  [FIRST_PARAM]: paramInitialState,
  [SECOND_PARAM]: paramInitialState,
  reset: {
    isDisabled: true,
  },
};

export default (state = initialState, { type, param: paramName, selectedItem, items }) => {
  if (type === RESET) {
    return initialState;
  }
  if (!paramName) {
    return state;
  }
  const param = state[paramName];
  switch (type) {
    case PARAM_SELECT:
      return { ...state, [paramName]: { ...param, isActive: !param.isActive } };
    case PARAM_UPDATED: {
      let newState = {
        ...state,
        [paramName]: { ...param, isActive: false, selectedItem },
        reset: { ...state.reset, isDisabled: false },
      };
      if (paramName === FIRST_PARAM) {
        newState = {
          ...newState,
          [SECOND_PARAM]: paramInitialState,
        };
      }
      return newState;
    }
    case PARAM_REQUEST:
      return { ...state, [paramName]: { ...param, isLoading: true, isDisabled: true } };
    case PARAM_REQUEST_SUCCESS:
      return { ...state, [paramName]: { ...param, isLoading: false, isDisabled: false } };
    case PARAM_REQUEST_ERROR:
      return { ...state, [paramName]: { ...param, isLoading: false, isDisabled: true } };
    case PARAM_ITEMS_UPDATED:
      return { ...state, [paramName]: { ...param, items } };
    default:
      return state;
  }
};

export const getFirstParam = state => state[FIRST_PARAM];
export const getSecondParam = state => state[SECOND_PARAM];
