import { combineReducers } from "redux";
import auth from "reducers/auth";
import request, * as requestHelpers from "reducers/request";

export default combineReducers({
  auth,
  request
});

export const isLoading = state => requestHelpers.isLoading(state.request);
export const hasError = state => requestHelpers.hasError(state.error);
