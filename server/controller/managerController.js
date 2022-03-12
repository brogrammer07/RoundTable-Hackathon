import Manager from "../models/manager.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const managerLogin = async (req, res) => {
  const { username, password } = req.body;
  const errors = { usernameError: String, passwordError: String };
  try {
    const existingManager = await Manager.findOne({ username });
    if (!existingManager) {
      errors.usernameError = "Manager doesn't exist.";
      return res.status(404).json(errors);
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingManager.password
    );
    if (!isPasswordCorrect) {
      errors.passwordError = "Invalid Credentials";
      return res.status(404).json(errors);
    }

    const token = jwt.sign(
      {
        email: existingManager.email,
        id: existingManager._id,
      },
      "sEcReT",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingManager, token: token });
  } catch (error) {
    console.log(error);
  }
};

export const updatedPassword = async (req, res) => {
  try {
    const { newPassword, confirmPassword, email } = req.body;
    const errors = { mismatchError: String };
    if (newPassword !== confirmPassword) {
      errors.mismatchError =
        "Your password and confirmation password do not match";
      return res.status(400).json(errors);
    }

    const manager = await Manager.findOne({ email });
    let hashedPassword;
    hashedPassword = await bcrypt.hash(newPassword, 10);
    manager.password = hashedPassword;
    await manager.save();
    if (manager.passwordUpdated === false) {
      manager.passwordUpdated = true;
      await manager.save();
    }

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
      response: manager,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateManager = async (req, res) => {
  try {
    const {
      name,
      dob,
      contactNumber,
      avatar,
      email,

      fatherName,
      motherName,
      fatherContactNumber,
    } = req.body;
    const updatedManager = await Manager.findOne({ email });
    if (name) {
      updatedManager.name = name;
      await updatedManager.save();
    }
    if (dob) {
      updatedManager.dob = dob;
      await updatedManager.save();
    }

    if (contactNumber) {
      updatedManager.contactNumber = contactNumber;
      await updatedManager.save();
    }

    if (motherName) {
      updatedManager.motherName = motherName;
      await updatedManager.save();
    }
    if (fatherName) {
      updatedManager.fatherName = fatherName;
      await updatedManager.save();
    }
    if (fatherContactNumber) {
      updatedManager.fatherContactNumber = fatherContactNumber;
      await updatedManager.save();
    }
    if (avatar) {
      updatedManager.avatar = avatar;
      await updatedManager.save();
    }
    res.status(200).json(updatedManager);
  } catch (error) {
    res.status(500).json(error);
  }
};
