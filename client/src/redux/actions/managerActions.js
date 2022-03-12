import {
  SET_ERRORS,
  UPDATE_PASSWORD,
  UPDATE_STUDENT,
  MANAGER_LOGIN,
  UPDATE_MANAGER,
} from "../actionTypes";
import * as api from "../api";

export const managerSignIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.managerSignIn(formData);
    dispatch({ type: MANAGER_LOGIN, data });
    if (data.result.passwordUpdated) navigate("/manager/home");
    else navigate("/manager/password");
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const managerUpdatePassword =
  (formData, navigate) => async (dispatch) => {
    try {
      const { data } = await api.managerUpdatePassword(formData);
      dispatch({ type: UPDATE_PASSWORD, payload: true });
      alert("Password Updated");
      navigate("/manager/home");
    } catch (error) {
      dispatch({ type: SET_ERRORS, payload: error.response.data });
    }
  };

export const updateManager = (formData) => async (dispatch) => {
  try {
    const { data } = await api.updateManager(formData);
    dispatch({ type: UPDATE_MANAGER, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};
