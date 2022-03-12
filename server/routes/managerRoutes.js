import express from "express";
import {
  managerLogin,
  updatedPassword,
  updateManager,
} from "../controller/managerController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/login", managerLogin);
router.post("/updatepassword", auth, updatedPassword);
router.post("/updateprofile", auth, updateManager);

export default router;
