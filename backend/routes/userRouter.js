const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");

// router.get()/post()
// router.route()

// for register ======== controller
router.route("/").post(registerUser);

// for login
router.post("/login", loginUser);

module.exports = router;
