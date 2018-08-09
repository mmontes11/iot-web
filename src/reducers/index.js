import { combineReducers } from "redux";
import app from "reducers/app";
import request, * as requestHelpers from "reducers/request";
import auth from "reducers/auth";
import things from "reducers/things";

export default combineReducers({
  app,
  auth,
  request,
  things,
});

export const isLoading = state => requestHelpers.isLoading(state.request);
export const hasError = state => requestHelpers.hasError(state.request);
