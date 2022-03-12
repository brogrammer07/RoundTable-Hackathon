import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteManager,
  getAllAdmin,
  getAllManager,
} from "../../../redux/actions/adminActions";
import Spinner from "../../../utils/Spinner";
import * as classes from "../../../utils/styles";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  DELETE_ADMIN,
  DELETE_MANAGER,
  SET_ERRORS,
} from "../../../redux/actionTypes";

const Body = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const store = useSelector((state) => state);
  const [checkedValue, setCheckedValue] = useState([]);

  useEffect(() => {
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
      setLoading(false);
    }
  }, [store.errors]);
  console.log(store.errors);

  const handleInputChange = (e) => {
    const tempCheck = checkedValue;
    let index;
    if (e.target.checked) {
      tempCheck.push(e.target.value);
    } else {
      index = tempCheck.indexOf(e.target.value);
      tempCheck.splice(index, 1);
    }
    setCheckedValue(tempCheck);
  };

  const dltManager = (e) => {
    setError({});
    setLoading(true);
    dispatch(deleteManager(checkedValue));
  };
  const managers = useSelector((state) => state.admin.allManager);
  console.log(error);

  useEffect(() => {
    if (store.admin.managerDeleted) {
      setLoading(false);
      dispatch(getAllManager());
      dispatch({ type: DELETE_MANAGER, payload: false });
    }
  }, [store.admin.managerDeleted]);

  useEffect(() => {
    dispatch({ type: SET_ERRORS, payload: {} });
  }, []);

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <DeleteIcon />
          <h1>Delete Manager</h1>
        </div>
        <div className=" mr-10 bg-white rounded-xl pt-6 pl-6 h-[29.5rem]">
          <div className="col-span-3 mr-6">
            <div className={classes.loadingAndError}>
              {loading && (
                <Spinner
                  message="Loading"
                  height={50}
                  width={150}
                  color="#111111"
                  messageColor="blue"
                />
              )}
              {error.noManagerError && (
                <p className="text-red-500 text-2xl font-bold">
                  {error.noManagerError}
                </p>
              )}
            </div>
            {!loading &&
              Object.keys(error).length === 0 &&
              managers?.length !== 0 && (
                <div className={`${classes.adminData} h-[22rem]`}>
                  <div className="grid grid-cols-8">
                    <h1 className={`col-span-1 ${classes.adminDataHeading}`}>
                      Select
                    </h1>
                    <h1 className={`${classes.adminDataHeading} col-span-1`}>
                      Sr no.
                    </h1>
                    <h1 className={`${classes.adminDataHeading} col-span-2`}>
                      Name
                    </h1>
                    <h1 className={`${classes.adminDataHeading} col-span-3`}>
                      Email
                    </h1>
                    <h1 className={`${classes.adminDataHeading} col-span-1`}>
                      Username
                    </h1>
                  </div>
                  {managers?.map((sub, idx) => (
                    <div
                      key={idx}
                      className={`${classes.adminDataBody} grid-cols-8`}>
                      <input
                        onChange={handleInputChange}
                        value={sub._id}
                        className="col-span-1 border-2 w-16 h-4 mt-3 px-2 "
                        type="checkbox"
                      />
                      <h1
                        className={`col-span-1 ${classes.adminDataBodyFields}`}>
                        {idx + 1}
                      </h1>
                      <h1
                        className={`col-span-2 ${classes.adminDataBodyFields}`}>
                        {sub.name}
                      </h1>
                      <h1
                        className={`col-span-3 ${classes.adminDataBodyFields}`}>
                        {sub.email}
                      </h1>
                      <h1
                        className={`col-span-1 ${classes.adminDataBodyFields}`}>
                        {sub.username}
                      </h1>
                    </div>
                  ))}
                </div>
              )}
            {Object.keys(error).length === 0 && (
              <div className="space-x-3 flex items-center justify-center mt-5">
                <button
                  onClick={dltManager}
                  className={`${classes.adminFormSubmitButton} bg-blue-500`}>
                  Delete
                </button>
              </div>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
