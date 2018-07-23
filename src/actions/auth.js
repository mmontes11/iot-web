import {
  IS_AUTH,
  SET_USERNAME,
  SET_PASSWORD,
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR
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

export const login = () => (dispatch, getState) => {
  dispatch({ type: LOGIN_REQUEST });
  const { username, password } = getState().auth;
  iotClient.authService.setCredentials(username, password);
  iotClient.authService
    .getToken()
    .then(res =>
      dispatch({ type: LOGIN_REQUEST_SUCCESS, statusCode: res.statusCode })
    )
    .catch(err =>
      dispatch({ type: LOGIN_REQUEST_ERROR, statusCode: err.statusCode, err })
    )
    .finally(() => isAuth()(dispatch));
};
