import { combineReducers } from "redux";
import app from "reducers/app";
import request, * as fromRequest from "reducers/request";
import auth from "reducers/auth";
import things from "reducers/things";
import params, * as fromParams from "reducers/params";
import filters from "reducers/filters";
import stats from "reducers/stats";
import measurements from "reducers/measurements";

export default combineReducers({
  app,
  auth,
  request,
  params,
  filters,
  things,
  stats,
  measurements,
});

export const isLoading = state => fromRequest.isLoading(state.request);
export const hasError = state => fromRequest.hasError(state.request);
export const shouldShowError = state => hasError(state) && state.app.showError;
export const getFirstParam = state => fromParams.getFirstParam(state.params);
export const getSecondParam = state => fromParams.getSecondParam(state.params);
export const isResetDisabled = state => state.params.reset.isDisabled && state.filters.items.length === 0;
