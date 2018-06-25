import { IS_AUTH } from "constants/actionTypes/auth";
import iotClient from "lib/iotClient";

export const isAuth = () => dispatch => {
  iotClient.authService
    .isAuth()
    .then(isAuthVal => dispatch({ type: IS_AUTH, isAuth: isAuthVal }))
    .catch(() => dispatch({ type: IS_AUTH, isAuth: false }));
};
