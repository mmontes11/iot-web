import { combineReducers } from "redux";
import app from "reducers/app";
import request, * as fromRequest from "reducers/request";
import auth from "reducers/auth";
import things from "reducers/things";
import params, * as fromParams from "reducers/params";
import filters from "reducers/filters";
import data from "reducers/data";

export default combineReducers({
  app,
  auth,
  request,
  things,
  params,
  filters,
  data,
});

export const isLoading = state => fromRequest.isLoading(state.request);
export const hasError = state => fromRequest.hasError(state.request);
export const shouldShowError = state => hasError(state) && state.app.showError;
export const getFirstParam = state => fromParams.getFirstParam(state.params);
export const getSecondParam = state => fromParams.getSecondParam(state.params);
export const isResetDisabled = state => state.params.reset.isDisabled && state.filters.items.length === 0;
