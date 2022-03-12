import React from "react";
import { Routes, Route } from "react-router-dom";
import AddAdmin from "./components/admin/addAdmin/AddAdmin";

import AdminHome from "./components/admin/AdminHome";

import AdminProfile from "./components/admin/profile/Profile";
import AdminFirstTimePassword from "./components/admin/profile/update/firstTimePassword/FirstTimePassword";
import AdminPassword from "./components/admin/profile/update/password/Password";

import AdminUpdate from "./components/admin/profile/update/Update";

import AdminLogin from "./components/login/adminLogin/AdminLogin";

import Login from "./components/login/Login";
import CSVUpdate from "./components/admin/csv/update/Update";
import ManagerFirstTimePassword from "./components/manager/profile/update/firstTimePassword/FirstTimePassword";

import ManagerProfile from "./components/manager/profile/Profile";
import ManagerUpdate from "./components/manager/profile/update/Update";
import ManagerPassword from "./components/manager/profile/update/password/Password";
import DeleteAdmin from "./components/admin/deleteAdmin/DeleteAdmin";

import CreateNotice from "./components/admin/createNotice/CreateNotice";
import GetAdmin from "./components/admin/getAdmin/GetAdmin";
import DeleteManager from "./components/admin/deleteManager/DeleteManager";
import AddManager from "./components/admin/addManager/AddManager";
import GetManager from "./components/admin/getManager/GetManager";
import AdminCSV from "./components/admin/csv/CSV";
import Add from "./components/admin/csv/add/Add";
import Delete from "./components/admin/csv/delete/Delete";
import ManagerLogin from "./components/login/managerLogin/ManagerLogin";
import ManagerHome from "./components/manager/ManagerHome";
import ManagerCSV from "./components/manager/csv/CSV";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />

      {/* Admin  */}

      <Route path="/login/adminlogin" element={<AdminLogin />} />
      <Route path="/admin/home" element={<AdminHome />} />
      <Route path="/admin/profile" element={<AdminProfile />} />
      <Route path="/admin/update" element={<AdminUpdate />} />
      <Route path="/admin/update/password" element={<AdminPassword />} />
      <Route path="/admin/password" element={<AdminFirstTimePassword />} />
      <Route path="/admin/csv" element={<AdminCSV />} />
      <Route path="/admin/csv/add" element={<Add />} />
      <Route path="/admin/csv/delete" element={<Delete />} />
      <Route path="/admin/createnotice" element={<CreateNotice />} />
      <Route path="/admin/alladmin" element={<GetAdmin />} />
      <Route path="/admin/addadmin" element={<AddAdmin />} />
      <Route path="/admin/deleteadmin" element={<DeleteAdmin />} />
      <Route path="/admin/deletemanager" element={<DeleteManager />} />
      <Route path="/admin/addmanager" element={<AddManager />} />
      <Route path="/admin/csv/update" element={<CSVUpdate />} />
      <Route path="/admin/allmanager" element={<GetManager />} />

      {/* Student  */}

      <Route path="/login/managerlogin" element={<ManagerLogin />} />
      <Route path="/manager/home" element={<ManagerHome />} />
      <Route path="/manager/password" element={<ManagerFirstTimePassword />} />
      <Route path="/manager/profile" element={<ManagerProfile />} />
      <Route path="/manager/update" element={<ManagerUpdate />} />
      <Route path="/manager/csv" element={<ManagerCSV />} />
      <Route path="/manager/update/password" element={<ManagerPassword />} />
    </Routes>
  );
};

export default App;
