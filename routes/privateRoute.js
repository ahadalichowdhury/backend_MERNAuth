const express = require("express");
const router = express.Router();

const { getPrivateData } = require("../controllers/privateController");

const { protect } = require("../middleware/authProtect");

router.get("/", protect, getPrivateData);
module.exports = router;
