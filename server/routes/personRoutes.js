const express = require("express");
const router = express.Router();
const Person = require("../models/personModel");
const { register, login, getPersonData } = require("../controllers/personControllers");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);

router.get("/", authMiddleware, getPersonData);


module.exports = router;