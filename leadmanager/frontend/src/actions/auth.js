import axios from "axios";
import { returnError } from "./messages";
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from "./types";

export const loadUser = () => (dispatch, getState) => {
  //User Loading
  dispatch({ type: USER_LOADING });
  //get token from state
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  //If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios.get("/api/auth/user", config).then(res => {
    dispatch({
      type: USER_LOADING,
      payload: res.data
    }).catch(err => {
      dispatch(returnErrors(err.response.dat, err.reponse.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
  });
};
