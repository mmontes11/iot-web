import {
  PARAM_SELECT,
  PARAM_UPDATE,
  PARAM_RESET,
  PARAM_REQUEST,
  PARAM_REQUEST_SUCCESS,
  PARAM_REQUEST_ERROR,
  PARAM_ITEMS_UPDATED,
} from "constants/actionTypes/params";
import { EVENT_TYPE, MEASUREMENT_TYPE, OBSERVATION_TYPES } from "constants/observationTypes";
import { TYPE, OBSERVATION, GROUPBY } from "constants/params";
import iotClient from "lib/iotClient";
import * as fromState from "reducers";

const requestObservations = (type, onStart, onSuccess, onError) => {
  if (type === EVENT_TYPE) {
    onStart();
    iotClient.eventService
      .getTypes()
      .then(res => onSuccess(res))
      .catch(err => onError(err));
  } else if (type === MEASUREMENT_TYPE) {
    onStart();
    iotClient.measurementService
      .getTypes()
      .then(res => onSuccess(res))
      .catch(err => onError(err));
  }
};

const requestObservationsDispatchingActions = (dispatch, type, cb) => {
  if (!type) {
    cb();
    return;
  }
  requestObservations(
    type,
    () => dispatch({ type: PARAM_REQUEST, param: OBSERVATION }),
    res => {
      dispatch({ type: PARAM_REQUEST_SUCCESS, param: OBSERVATION, statusCode: res.statusCode, error: null });
      dispatch({ type: PARAM_RESET, param: OBSERVATION });
      dispatch({ type: PARAM_ITEMS_UPDATED, param: OBSERVATION, items: res.body.types });
      cb();
    },
    error => {
      dispatch({ type: PARAM_REQUEST_ERROR, param: OBSERVATION, statusCode: error.statusCode, error });
      cb();
    },
  );
};

export const selectType = () => dispatch => {
  dispatch({ type: PARAM_ITEMS_UPDATED, param: TYPE, items: OBSERVATION_TYPES });
  dispatch({ type: PARAM_SELECT, param: TYPE });
};

export const updateType = type => dispatch => {
  dispatch({ type: PARAM_UPDATE, param: TYPE, selectedItem: type });
  requestObservationsDispatchingActions(dispatch, type, () => undefined);
};

export const selectObservation = () => (dispatch, getState) => {
  const state = getState();
  const observation = fromState.getParam(state, OBSERVATION);
  const dispatchSelectObservation = () => dispatch({ type: PARAM_SELECT, param: OBSERVATION });
  if (observation && observation.items && observation.items.length > 0) {
    dispatchSelectObservation();
  } else {
    const type = fromState.getParam(state, TYPE);
    if (type && type.selectedItem) {
      requestObservationsDispatchingActions(dispatch, type.selectedItem, dispatchSelectObservation);
    }
  }
};

export const updateObservation = observation => dispatch => {
  dispatch({ type: PARAM_UPDATE, param: OBSERVATION, selectedItem: observation });
};

export const selectGroupBy = () => (dispatch, getState) => {
  const state = getState();
  const groupBy = fromState.getParam(state, GROUPBY);
  if (groupBy && groupBy.items && groupBy.items.length > 0) {
    dispatch({ type: PARAM_SELECT, param: GROUPBY });
  } else {
    dispatch({ type: PARAM_REQUEST, param: GROUPBY });
    iotClient.timePeriodsService
      .getSupportedTimePeriods()
      .then(res => {
        dispatch({ type: PARAM_REQUEST_SUCCESS, param: GROUPBY, statusCode: res.statusCode, error: null });
        dispatch({ type: PARAM_ITEMS_UPDATED, param: GROUPBY, items: res.body.timePeriods });
        dispatch({ type: PARAM_SELECT, param: GROUPBY });
      })
      .catch(error => {
        dispatch({ type: PARAM_REQUEST_ERROR, param: GROUPBY, statusCode: error.statusCode, error });
      });
  }
};

export const updateGroupBy = groupBy => dispatch => {
  dispatch({ type: PARAM_UPDATE, param: GROUPBY, selectedItem: groupBy });
};

export const updateParams = (type, observation, groupBy) => dispatch => {
  if (type) {
    dispatch({ type: PARAM_UPDATE, param: TYPE, selectedItem: type });
  }
  if (observation) {
    dispatch({ type: PARAM_UPDATE, param: OBSERVATION, selectedItem: observation });
  }
  if (groupBy) {
    dispatch({ type: PARAM_UPDATE, param: GROUPBY, selectedItem: groupBy });
  }
};
