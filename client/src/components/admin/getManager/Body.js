import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Spinner from "../../../utils/Spinner";
import { SET_ERRORS } from "../../../redux/actionTypes";
import * as classes from "../../../utils/styles";
import BoyIcon from "@mui/icons-material/Boy";
const Body = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const store = useSelector((state) => state);

  useEffect(() => {
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
      setLoading(false);
    }
  }, [store.errors]);

  const managers = useSelector((state) => state.admin.allManager);

  useEffect(() => {
    if (managers?.length !== 0) setLoading(false);
  }, [managers]);

  useEffect(() => {
    dispatch({ type: SET_ERRORS, payload: {} });
  }, []);

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <BoyIcon />
          <h1>All Managers</h1>
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
                <div className={classes.adminData}>
                  <div className="grid grid-cols-7">
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
                      className={`${classes.adminDataBody} grid-cols-7`}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
