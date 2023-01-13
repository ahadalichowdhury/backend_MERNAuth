const express = require("express");
const router = express.Router();
const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/forgetpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);

module.exports = router;
