import {
  ADMIN_LOGIN,
  UPDATE_ADMIN,
  ADD_ADMIN,
  GET_ALL_MANAGER,
  GET_ALL_ADMIN,
  SET_ERRORS,
  UPDATE_PASSWORD,
  DELETE_ADMIN,
  CREATE_NOTICE,
  GET_NOTICE,
  ADD_MANAGER,
  DELETE_MANAGER,
} from "../actionTypes";
import * as api from "../api";

export const adminSignIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.adminSignIn(formData);
    dispatch({ type: ADMIN_LOGIN, data });
    if (data.result.passwordUpdated) navigate("/admin/home");
    else navigate("/admin/password");
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const adminUpdatePassword = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.adminUpdatePassword(formData);
    dispatch({ type: UPDATE_PASSWORD, payload: true });
    alert("Password Updated");
    navigate("/admin/home");
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const getAllManager = () => async (dispatch) => {
  try {
    const { data } = await api.getAllManager();
    dispatch({ type: GET_ALL_MANAGER, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const getAllAdmin = () => async (dispatch) => {
  try {
    const { data } = await api.getAllAdmin();
    dispatch({ type: GET_ALL_ADMIN, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const updateAdmin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.updateAdmin(formData);
    dispatch({ type: UPDATE_ADMIN, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const addAdmin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addAdmin(formData);
    alert("Admin Added Successfully");
    dispatch({ type: ADD_ADMIN, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};
export const createNotice = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createNotice(formData);
    alert("Notice Created Successfully");
    dispatch({ type: CREATE_NOTICE, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const deleteAdmin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.deleteAdmin(formData);
    alert("Admin Deleted");
    dispatch({ type: DELETE_ADMIN, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const deleteManager = (formData) => async (dispatch) => {
  try {
    const { data } = await api.deleteManager(formData);
    alert("Manager Deleted");
    dispatch({ type: DELETE_MANAGER, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const addManager = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addManager(formData);
    alert("Manager Added Successfully");
    dispatch({ type: ADD_MANAGER, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const getNotice = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getNotice(formData);
    dispatch({ type: GET_NOTICE, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};
