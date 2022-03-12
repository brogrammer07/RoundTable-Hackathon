import {
  ADD_ADMIN,
  ADMIN_LOGIN,
  LOGOUT,
  UPDATE_ADMIN,
  GET_ALL_ADMIN,
  UPDATE_PASSWORD,
  DELETE_ADMIN,
  CREATE_NOTICE,
  GET_NOTICE,
  ADD_MANAGER,
  GET_ALL_MANAGER,
  DELETE_MANAGER,
  CSV_FILE,
} from "../actionTypes";

const initialState = {
  authData: null,
  updatedPassword: false,
  updatedAdmin: false,
  adminAdded: false,

  managerAdded: false,

  allManager: [],
  allAdmin: [],

  admins: [],
  csvFile: [],
  notices: [],
  adminDeleted: false,

  managerDeleted: false,

  noticeCreated: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN:
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
    case UPDATE_ADMIN:
      return {
        ...state,
        updatedAdmin: action.payload,
      };
    case ADD_ADMIN:
      return {
        ...state,
        adminAdded: action.payload,
      };
    case CSV_FILE:
      return {
        ...state,
        csvFile: action.payload,
      };
    case CREATE_NOTICE:
      return {
        ...state,
        noticeCreated: action.payload,
      };
    case DELETE_ADMIN:
      return {
        ...state,
        adminDeleted: action.payload,
      };

    case DELETE_MANAGER:
      return {
        ...state,
        managerDeleted: action.payload,
      };

    case GET_NOTICE:
      return {
        ...state,
        notices: action.payload,
      };

    case GET_ALL_ADMIN:
      return {
        ...state,
        allAdmin: action.payload,
      };

    case ADD_MANAGER:
      return {
        ...state,
        managerAdded: action.payload,
      };

    case GET_ALL_MANAGER:
      return {
        ...state,
        allManager: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
