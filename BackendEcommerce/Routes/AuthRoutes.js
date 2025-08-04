
const express = require("express");
const { register, getUser, login } = require("../Controllers/AuthControllers");
const authentication = require("../Middleware/AuthMiddleware");
const router = express.Router();



router.post("/register", register)

router.post("/login", login)

router.get("/getuser", authentication,getUser)

module.exports = router;