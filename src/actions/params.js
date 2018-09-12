import {
  TYPE_SELECT,
  TYPE_UPDATED,
  OBSERVATIONS_REQUEST,
  OBSERVATIONS_REQUEST_SUCCESS,
  OBSERVATIONS_REQUEST_ERROR,
  OBSERVATIONS_UPDATED,
} from "constants/actionTypes/params";
import { EVENT_TYPE, MEASUREMENT_TYPE } from "constants/observationTypes";
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
  dispatch({ type: TYPE_SELECT });
};

export const updateType = updatedType => dispatch => {
  dispatch({ type: TYPE_UPDATED, updatedType });
  requestTypes(
    updatedType,
    () => dispatch({ type: OBSERVATIONS_REQUEST }),
    res => {
      dispatch({ type: OBSERVATIONS_REQUEST_SUCCESS, statusCode: res.statusCode, error: null });
      dispatch({ type: OBSERVATIONS_UPDATED, things: res.body.types });
    },
    error => {
      dispatch({ type: OBSERVATIONS_REQUEST_ERROR, statusCode: error.statusCode, error });
    },
  );
};
