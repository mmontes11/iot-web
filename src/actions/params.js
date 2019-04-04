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
import { TYPE, OBSERVATION } from "constants/params";
import iotClient from "lib/iotClient";

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

export const selectType = () => dispatch => {
  dispatch({ type: PARAM_ITEMS_UPDATED, param: TYPE, items: OBSERVATION_TYPES });
  dispatch({ type: PARAM_SELECT, param: TYPE });
};

export const updateType = type => dispatch => {
  dispatch({ type: PARAM_UPDATE, param: TYPE, selectedItem: type });
  requestObservations(
    type,
    () => dispatch({ type: PARAM_REQUEST, param: OBSERVATION }),
    res => {
      dispatch({ type: PARAM_REQUEST_SUCCESS, param: OBSERVATION, statusCode: res.statusCode, error: null });
      dispatch({ type: PARAM_RESET, param: OBSERVATION });
      dispatch({ type: PARAM_ITEMS_UPDATED, param: OBSERVATION, items: res.body.types });
    },
    error => {
      dispatch({ type: PARAM_REQUEST_ERROR, param: OBSERVATION, statusCode: error.statusCode, error });
    },
  );
};

export const selectObservation = () => dispatch => {
  dispatch({ type: PARAM_SELECT, param: OBSERVATION });
};

export const updateObservation = observation => dispatch => {
  dispatch({ type: PARAM_UPDATE, param: OBSERVATION, selectedItem: observation });
};

export const updateParams = (type, observation) => dispatch => {
  dispatch({ type: PARAM_UPDATE, param: TYPE, selectedItem: type });
  dispatch({ type: PARAM_UPDATE, param: OBSERVATION, selectedItem: observation });
};
