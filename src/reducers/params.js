import {
  TYPE_SELECT,
  TYPE_UPDATED,
  OBSERVATION_SELECT,
  OBSERVATION_UPDATED,
  OBSERVATIONS_REQUEST,
  OBSERVATIONS_REQUEST_SUCCESS,
  OBSERVATIONS_REQUEST_ERROR,
  OBSERVATIONS_UPDATED,
} from "constants/actionTypes/params";
import { RESET } from "constants/actionTypes/common";
import { OBSERVATION_TYPES } from "constants/observationTypes";

const observationInitialState = {
  items: [],
  isActive: false,
  isLoading: false,
  isDisabled: true,
  selectedItem: null,
};

export const initialState = {
  type: {
    items: OBSERVATION_TYPES,
    isActive: false,
    selectedItem: null,
  },
  observation: observationInitialState,
  reset: {
    isDisabled: true,
  },
};

export default (state = initialState, { type, updatedType, updatedObservation, observations }) => {
  switch (type) {
    case TYPE_SELECT:
      return { ...state, type: { ...state.type, isActive: !state.type.isActive } };
    case TYPE_UPDATED:
      return {
        ...state,
        type: { ...state.type, isActive: false, selectedItem: updatedType },
        observation: observationInitialState,
        reset: { ...state.reset, isDisabled: false },
      };
    case OBSERVATION_SELECT:
      return { ...state, observation: { ...state.observation, isActive: !state.observation.isActive } };
    case OBSERVATION_UPDATED:
      return {
        ...state,
        observation: { ...state.observation, isActive: false, selectedItem: updatedObservation },
        reset: { ...state.reset, isDisabled: false },
      };
    case OBSERVATIONS_REQUEST:
      return { ...state, observation: { ...state.observation, isLoading: true, isDisabled: true } };
    case OBSERVATIONS_REQUEST_SUCCESS:
      return { ...state, observation: { ...state.observation, isLoading: false, isDisabled: false } };
    case OBSERVATIONS_REQUEST_ERROR:
      return { ...state, observation: { ...state.observation, isLoading: false, isDisabled: true } };
    case OBSERVATIONS_UPDATED:
      return { ...state, observation: { ...state.observation, items: observations } };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
