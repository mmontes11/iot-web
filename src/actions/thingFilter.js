import {
    THING_FILTER_SELECT,
    THING_FILTER_UPDATED,
    THING_FILTERS_REQUEST,
    THING_FILTERS_REQUEST_SUCCESS,
    THING_FILTERS_REQUEST_ERROR,
    THING_FILTERS_UPDATED
} from "constants/actionTypes/thingFilter";
import iotClient from "lib/iotClient";
import { EVENT_TYPE, MEASUREMENT_TYPE } from "constants/observationTypes";

export const selectThingFilter = type => dispatch => {
    dispatch({ type: THING_FILTER_SELECT });
    if (type === EVENT_TYPE) {
        dispatch({ type: THING_FILTERS_REQUEST });
    } else if (type === MEASUREMENT_TYPE) {
        dispatch({ type: THING_FILTERS_REQUEST });
    }
};

export const updateThingFilter = updatedThingFilter => dispatch => {
    dispatch({ type: THING_FILTER_UPDATED, updatedThingFilter });
};