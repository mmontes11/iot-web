import { STATS_UPDATED, STATS_REQUEST, STATS_REQUEST_SUCCESS, STATS_REQUEST_ERROR } from "constants/actionTypes/stats";
import { EVENT_TYPE, MEASUREMENT_TYPE } from "constants/observationTypes";
import iotClient from "lib/iotClient";
import { THING_FILTER_TYPE, DATE_FILTER_TYPE } from "constants/filterTypes";
import { RESET } from "constants/actionTypes/common";
import * as fromState from "reducers";

const getParams = (filterItems, observation, thing, timePeriod, startDate, endDate) => {
  let params = {
    type: observation,
  };
  if (filterItems.includes(THING_FILTER_TYPE) && thing !== null) {
    params = {
      ...params,
      thing,
    };
  }
  if (filterItems.includes(DATE_FILTER_TYPE)) {
    if (timePeriod != null) {
      params = {
        ...params,
        timePeriod,
      };
    } else {
      if (startDate !== null) {
        params = {
          ...params,
          startDate: startDate.toISOString(),
        };
      }
      if (endDate != null) {
        params = {
          ...params,
          endDate: endDate.toISOString(),
        };
      }
    }
  }
  return params;
};

const requestStats = (
  filterItems,
  type,
  observation,
  thing,
  timePeriod,
  startDate,
  endDate,
  onStart,
  onSuccess,
  onError,
) => {
  const params = getParams(filterItems, observation, thing, timePeriod, startDate, endDate);
  if (type === EVENT_TYPE) {
    onStart();
    iotClient.eventService
      .getStats(params)
      .then(res => onSuccess(res))
      .catch(err => onError(err));
  } else if (type === MEASUREMENT_TYPE) {
    onStart();
    iotClient.measurementService
      .getStats(params)
      .then(res => onSuccess(res))
      .catch(err => onError(err));
  } else {
    onError(new Error("Invalid type"));
  }
};

export const getStats = () => (dispatch, getState) => {
  const state = getState();
  const filterItems = state.filters.items;
  const type = fromState.getFirstParam(state).selectedItem;
  const observation = fromState.getSecondParam(state).selectedItem;
  const thing = state.filters.thingFilter.selectedItem;
  const {
    timePeriod: { selectedItem: selectedTimePeriod },
    custom: { startDate, endDate },
  } = state.filters.dateFilter;
  if (!type || !observation) {
    return;
  }
  dispatch({ type: STATS_REQUEST });
  requestStats(
    filterItems,
    type,
    observation,
    thing,
    selectedTimePeriod,
    startDate,
    endDate,
    () => dispatch({ type: STATS_REQUEST }),
    res => {
      dispatch({ type: STATS_REQUEST_SUCCESS });
      dispatch({ type: STATS_UPDATED, stats: res.body.stats });
    },
    () => {
      dispatch({ type: STATS_REQUEST_ERROR });
      dispatch({ type: RESET, preserveError: true });
    },
  );
};
