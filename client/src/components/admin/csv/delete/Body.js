import React, { useState } from "react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import * as classes from "../../../../utils/styles";

import { useSelector } from "react-redux";
import { CSVLink } from "react-csv";
const Body = () => {
  const csvFile = useSelector((state) => state.admin.csvFile);

  const [buttonClicked, setButtonClicked] = useState(false);
  const [updatedCsvFile, setUpdatedCsvFile] = useState(csvFile);
  let arr = [];
  const handleInputChange = (i) => (e) => {
    arr.push(i);
  };

  const deleteValues = () => {
    let newArr = [...updatedCsvFile];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArr.splice(arr[i], 1);
    }
    setUpdatedCsvFile(newArr);
    setButtonClicked(true);
  };

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex  items-center justify-between mr-8">
          <div className="flex space-x-2 text-gray-400">
            <EngineeringIcon />
            <h1>Profile</h1>
          </div>
        </div>
        <div className="w-[98%] bg-white relative rounded-xl flex flex-col space-y-3 py-5 px-10 h-[29rem]">
          <div className="space-y-3 overflow-auto w-[70rem]">
            {csvFile?.map(
              (col, i) =>
                col.length !== 1 &&
                col[0] !== "" && (
                  <div
                    style={{
                      gridTemplateColumns: `repeat(${col.length}, minmax(5rem, 1fr))`,
                    }}
                    key={i}
                    className={`text-center border-b-4 border-gray-500 grid gap-10`}>
                    {col.map((row, j) => (
                      <div key={j} className="text-ellipsis flex">
                        {j === 0 && (
                          <input
                            onChange={handleInputChange(i)}
                            type="checkbox"
                            className="mr-10 border-2 w-16 h-4  px-2 "
                          />
                        )}
                        <h1>{row}</h1>
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>

          <div className="flex space-x-5 self-center pt-3">
            <button
              type="button"
              onClick={deleteValues}
              className={`${classes.adminFormSubmitButton} bg-blue-500 flex justify-center items-center`}>
              Submit
            </button>
            {buttonClicked && (
              <CSVLink
                className="flex justify-center items-center bg-red-500 px-2 py-1 text-white rounded-md hover:scale-105 transition-all duration-150"
                data={updatedCsvFile}
                filename={"updated"}
                target="_blank">
                Download
              </CSVLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
