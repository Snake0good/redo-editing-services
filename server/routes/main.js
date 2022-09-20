const express = require('express');
const router = express.Router()
const homeController = require("../controllers/home");
const authController = require("../controllers/auth");


// Main Routes 
router.get("/", homeController.getIndex)
router.post("/login", authController.postLogin)
router.post("/signup", authController.postSignup)
module.exports = router