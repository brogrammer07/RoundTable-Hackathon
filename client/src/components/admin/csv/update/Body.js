import React, { useEffect, useState } from "react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import * as classes from "../../../../utils/styles";
import CSVReader from "react-csv-reader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CSVLink } from "react-csv";
const Body = () => {
  const csvFile = useSelector((state) => state.admin.csvFile);

  const [buttonClicked, setButtonClicked] = useState(false);
  const [updatedCsvFile, setUpdatedCsvFile] = useState(csvFile);
  console.log(updatedCsvFile);

  const updateFieldChanged = (i, j) => (e) => {
    let newArr = [...updatedCsvFile];
    newArr[i][j] = e.target.value;

    setUpdatedCsvFile(newArr);
  };

  const updateValues = () => {
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
            {csvFile?.map((col, i) => (
              <div
                style={{
                  gridTemplateColumns: `repeat(${col.length}, minmax(5rem, 1fr))`,
                }}
                key={i}
                className={`text-center border-b-4 border-gray-500 grid gap-10`}>
                {col.map((row, j) => (
                  <div key={j} className="text-ellipsis">
                    <input
                      key={j}
                      //   placeholder={row}
                      value={col[j]}
                      onChange={updateFieldChanged(i, j)}
                      type="text"
                      className="border-2 border-black px-1 py-1 outline-none"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex space-x-5 self-center pt-3">
            <button
              type="button"
              onClick={updateValues}
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
