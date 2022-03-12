import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });
// const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
});

// Admin

export const adminSignIn = (formData) => API.post("/api/admin/login", formData);

export const adminUpdatePassword = (updatedPassword) =>
  API.post("/api/admin/updatepassword", updatedPassword);

export const getAllManager = () => API.get("/api/admin/getallmanager");

export const getAllAdmin = () => API.get("/api/admin/getalladmin");

export const updateAdmin = (updatedAdmin) =>
  API.post("/api/admin/updateprofile", updatedAdmin);

export const addAdmin = (admin) => API.post("/api/admin/addadmin", admin);
export const createNotice = (notice) =>
  API.post("/api/admin/createnotice", notice);
export const deleteAdmin = (data) => API.post("/api/admin/deleteadmin", data);

export const deleteManager = (data) =>
  API.post("/api/admin/deletemanager", data);

export const addManager = (manager) =>
  API.post("/api/admin/addmanager", manager);

export const getNotice = (notice) => API.post("/api/admin/getnotice", notice);

// Manager

export const managerSignIn = (formData) =>
  API.post("/api/manager/login", formData);

export const managerUpdatePassword = (updatedPassword) =>
  API.post("/api/manager/updatepassword", updatedPassword);

export const updateManager = (updatedStudent) =>
  API.post("/api/manager/updateprofile", updatedStudent);
