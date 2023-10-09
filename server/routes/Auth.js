import express from "express";
import AuthController from "../controllers/Auth";
const Router = express.Router();

Router.post("/signup" , AuthController.signup);
Router.post("/login" , AuthController.login);
Router.post("/send-otp" , AuthController.sendOtp);

export default Router;
