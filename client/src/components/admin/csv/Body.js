import React, { useEffect, useState } from "react";
import * as classes from "../../../utils/styles";
import CSVReader from "react-csv-reader";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CSV_FILE } from "../../../redux/actionTypes";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Body = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [csvFileInfo, setCsvFileInfo] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (csvFile) {
      dispatch({ type: CSV_FILE, payload: csvFile });
    }
  }, [csvFile]);

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex  items-center justify-between mr-8">
          <div className="flex space-x-2 text-gray-400">
            <MenuBookIcon />
            <h1>CSV</h1>
          </div>
        </div>
        <div className="w-[98%] bg-white relative rounded-xl flex flex-col space-y-3 py-5 px-10 h-[29rem]">
          <div className="self-center flex flex-col items-center space-y-3">
            <CSVReader
              className=""
              cssInputClass="hidden"
              cssLabelClass="font-bold cursor-pointer bg-red-500 text-white px-3 py-2 rounded-md "
              label={`${csvFile ? "Upload Another" : "Upload CSV File"}`}
              onFileLoaded={(data, fileInfo, originalFile) => {
                setCsvFile(data);
                setCsvFileInfo(fileInfo);
              }}
            />
            {csvFileInfo && <h1 className="">{csvFileInfo.name}</h1>}
          </div>
          {csvFile && (
            <div className="space-y-3 overflow-auto w-[70rem]">
              {csvFile.map(
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
                        <h1 key={j} className="text-ellipsis">
                          {row}
                        </h1>
                      ))}
                    </div>
                  )
              )}
            </div>
          )}
          {csvFile && (
            <div className="flex space-x-5 self-center pt-3">
              <Link
                to="/admin/csv/add"
                className={`${classes.adminFormSubmitButton} bg-blue-500 flex justify-center items-center`}>
                Add Data
              </Link>
              <Link
                to="/admin/csv/update"
                className={`${classes.adminFormSubmitButton} bg-blue-500 flex justify-center items-center`}>
                Update Data
              </Link>
              <Link
                to="/admin/csv/delete"
                className={`${classes.adminFormSubmitButton} bg-blue-500 flex justify-center items-center`}>
                Delete Data
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
