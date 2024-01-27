const jwt = require("jsonwebtoken");
const { Config } = require("../config/config");

exports.generateToken = (userId, email) => {
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

exports.verifyToken = (token) => {
    return new Promise ((resolve, reject) => {
        // const token = req.headers['authorization'].split(" ")[1] || req.headers['Authorization'].split(" ")[1] || req.cookies.token;
        console.log('here', token);

        jwt.verify(token , Config.JWT_SECRET , (error, payload) => {
            if(error) return reject("Error while verifying token");
            resolve(payload);
        })

    })
}