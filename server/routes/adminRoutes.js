import express from "express";
import auth from "../middleware/auth.js";
import {
  adminLogin,
  updateAdmin,
  addAdmin,
  addManager,
  getAllManager,
  getAllAdmin,
  updatedPassword,
  deleteAdmin,
  deleteManager,
  createNotice,
  getNotice,
} from "../controller/adminController.js";
const router = express.Router();

router.post("/login", adminLogin);
router.post("/updatepassword", auth, updatedPassword);
router.get("/getallmanager", auth, getAllManager);
router.post("/createnotice", auth, createNotice);
router.get("/getalladmin", auth, getAllAdmin);
router.post("/updateprofile", auth, updateAdmin);
router.post("/addadmin", auth, addAdmin);
router.post("/addmanager", auth, addManager);

router.post("/getnotice", auth, getNotice);

router.post("/deleteadmin", auth, deleteAdmin);

router.post("/deletemanager", auth, deleteManager);

export default router;
