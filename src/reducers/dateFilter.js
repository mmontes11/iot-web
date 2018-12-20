import {
  DATE_FILTER_SELECTOR_TOGGLE,
  DATE_FILTER_TIME_PERIOD_SELECT,
  DATE_FILTER_TIME_PERIOD_UPDATED,
  DATE_FILTER_TIME_PERIODS_REQUEST,
  DATE_FILTER_TIME_PERIODS_REQUEST_SUCCESS,
  DATE_FILTER_TIME_PERIODS_REQUEST_ERROR,
  DATE_FILTER_TIME_PERIODS_UPDATED,
  DATE_FILTER_START_DATE_UPDATED,
  DATE_FILTER_END_DATE_UPDATED
} from "constants/actionTypes/dateFilter";
import { RESET } from "constants/actionTypes/common";

const startDate = new Date();
const endDate = new Date(startDate);
endDate.setHours(endDate.getHours() + 1);

export const initialState = {
  isCustomSelected: false,
  timePeriod: {
    isLoading: false,
    isActive: false,
    isDisabled: false,
    items: [],
    selectedItem: null
  },
  custom: {
    startDate,
    endDate
  },
};

export default (state = initialState, { type, updatedTimePeriod }) => {
  switch (type) {
    case DATE_FILTER_SELECTOR_TOGGLE:
      return { ...state, isCustomSelected: !state.isCustomSelected };
    case DATE_FILTER_TIME_PERIOD_SELECT:
      return { 
        ...state,
        timePeriod: {
          ...state.timePeriod,
          isActive: !state.timePeriod.isActive,
        }
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
