import {
  LOGOUT,
  MANAGER_LOGIN,
  UPDATE_MANAGER,
  UPDATE_PASSWORD,
} from "../actionTypes";

const initialState = {
  authData: null,
  updatedPassword: false,
  updatedManager: false,
};

const managerReducer = (state = initialState, action) => {
  switch (action.type) {
    case MANAGER_LOGIN:
      localStorage.setItem("user", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case UPDATE_PASSWORD:
      return {
        ...state,
        updatedPassword: action.payload,
      };
    case UPDATE_MANAGER:
      return {
        ...state,
        updatedManager: action.payload,
      };

    default:
      return state;
  }
};

export default managerReducer;
