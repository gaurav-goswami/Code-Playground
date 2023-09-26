import jwt from "jsonwebtoken";
import { Config } from "../config/config";

export const generateToken = (userId, email) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId,
            email
        }
        const jwt_options = {
            expiresIn : "20d"
        }
        jwt.sign(payload, Config.JWT_SECRET , jwt_options, (error, token) => {
            if(error) {
                console.log("error in generate token" , error);
                return reject ("Something went wrong while issuing access token")
            }
            resolve(token);
        })
    })
}