const express = require("express");
const { loginUser, registerUser } = require("../controllers/UserController");

const router = express.Router();

// ✅ User Authentication
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
