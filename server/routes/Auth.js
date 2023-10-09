const express = require("express");
const AuthController = require("../controllers/Auth");
const Router = express.Router();

Router.post("/signup", AuthController.signup);
Router.post("/login", AuthController.login);
Router.post("/send-otp", AuthController.sendOtp);

module.exports = Router;
