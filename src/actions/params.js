import {
  PARAM_SELECT,
  PARAM_UPDATED,
  PARAM_REQUEST,
  PARAM_REQUEST_SUCCESS,
  PARAM_REQUEST_ERROR,
  PARAM_ITEMS_UPDATED,
} from "constants/actionTypes/params";
import { EVENT_TYPE, MEASUREMENT_TYPE, OBSERVATION_TYPES } from "constants/observationTypes";
import { FIRST_PARAM, SECOND_PARAM } from "constants/params";
import iotClient from "lib/iotClient";

const requestTypes = (type, onStart, onSuccess, onError) => {
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
  dispatch({ type: PARAM_ITEMS_UPDATED, param: FIRST_PARAM, items: OBSERVATION_TYPES });
  dispatch({ type: PARAM_SELECT, param: FIRST_PARAM });
};

export const updateType = type => dispatch => {
  dispatch({ type: PARAM_UPDATED, param: FIRST_PARAM, selectedItem: type });
  requestTypes(
    type,
    () => dispatch({ type: PARAM_REQUEST, param: SECOND_PARAM }),
    res => {
      dispatch({ type: PARAM_REQUEST_SUCCESS, param: SECOND_PARAM, statusCode: res.statusCode, error: null });
      dispatch({ type: PARAM_ITEMS_UPDATED, param: SECOND_PARAM, items: res.body.types });
    },
    error => {
      dispatch({ type: PARAM_REQUEST_ERROR, param: SECOND_PARAM, statusCode: error.statusCode, error });
    },
  );
};

export const selectObservation = () => dispatch => {
  dispatch({ type: PARAM_SELECT, param: SECOND_PARAM });
};

export const updateObservation = observation => dispatch => {
  dispatch({ type: PARAM_UPDATED, param: SECOND_PARAM, selectedItem: observation });
};

export const updateParams = (firstParam, secondParam) => dispatch => {
  dispatch({ type: PARAM_UPDATED, param: FIRST_PARAM, selectedItem: firstParam });
  dispatch({ type: PARAM_UPDATED, param: SECOND_PARAM, selectedItem: secondParam });
};
