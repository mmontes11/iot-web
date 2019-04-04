import { DATA_UPDATED, DATA_REQUEST, DATA_REQUEST_SUCCESS, DATA_REQUEST_ERROR } from "constants/actionTypes/data";
import { EVENT_TYPE, MEASUREMENT_TYPE } from "constants/observationTypes";
import iotClient from "lib/iotClient";
import { THING_FILTER_TYPE, DATE_FILTER_TYPE } from "constants/filterTypes";
import { RESET } from "constants/actionTypes/common";
import * as fromState from "reducers";
import { TYPE, OBSERVATION } from "constants/params";

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
  const type = fromState.getParam(state, TYPE).selectedItem;
  const observation = fromState.getParam(state, OBSERVATION).selectedItem;
  const thing = state.filters.thingFilter.selectedItem;
  const {
    timePeriod: { selectedItem: selectedTimePeriod },
    custom: { startDate, endDate },
  } = state.filters.dateFilter;
  if (!type || !observation) {
    return;
  }
  requestStats(
    filterItems,
    type,
    observation,
    thing,
    selectedTimePeriod,
    startDate,
    endDate,
    () => dispatch({ type: DATA_REQUEST }),
    res => {
      dispatch({ type: DATA_REQUEST_SUCCESS });
      dispatch({ type: DATA_UPDATED, items: res.body.stats });
    },
    () => {
      dispatch({ type: DATA_REQUEST_ERROR });
      dispatch({ type: RESET, preserveError: true });
    },
  );
};
