import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import errorReducer from "./errorReducer";
import managerReducer from "./managerReducer";

export default combineReducers({
  admin: adminReducer,
  errors: errorReducer,
  manager: managerReducer,
});
