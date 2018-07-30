import {
  IS_AUTH,
  SET_USERNAME,
  SET_PASSWORD,
  SET_SHOW_ERROR,
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
} from "constants/actionTypes/auth";
import iotClient from "lib/iotClient";

export const isAuth = () => dispatch => {
  iotClient.authService
    .isAuth()
    .then(isAuthVal => dispatch({ type: IS_AUTH, isAuth: isAuthVal }))
    .catch(() => dispatch({ type: IS_AUTH, isAuth: false }));
};

export const setUsername = username => dispatch => {
  dispatch({ type: SET_USERNAME, username });
};

export const setPassword = password => dispatch => {
  dispatch({ type: SET_PASSWORD, password });
};

export const setShowError = showError => dispatch => {
  dispatch({ type: SET_SHOW_ERROR, showError });
};

export const login = () => (dispatch, getState) => {
  dispatch({ type: LOGIN_REQUEST });
  const { username, password } = getState().auth;
  iotClient.authService.setCredentials(username, password);
  iotClient.authService
    .getToken()
    .then(response => {
      dispatch({
        type: LOGIN_REQUEST_SUCCESS,
        statusCode: response.statusCode,
        error: null,
      });
      isAuth()(dispatch);
    })
    .catch(error => {
      dispatch({
        type: LOGIN_REQUEST_ERROR,
        statusCode: error.statusCode,
        error,
      });
      isAuth()(dispatch);
    });
};

export const logout = () => dispatch => {
  iotClient.authService
    .logout()
    .then(() => {
      isAuth()(dispatch);
    })
    .catch(() => {
      isAuth()(dispatch);
    });
};
