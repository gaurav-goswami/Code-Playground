const express = require("express");
const AuthController = require("../controllers/Auth");
const isAuthenticated = require("../middleware/authMiddleware");
const Router = express.Router();

Router.post("/signup", AuthController.signup);
Router.post("/login", AuthController.login);
Router.post("/send-otp", AuthController.sendOtp);
Router.get("/logout" , isAuthenticated ,AuthController.logout);

module.exports = Router;
