const { verifyToken } = require("../helper/jwtHelper");
const ErrorHandler = require("../utils/ErrorHandler");

const isAuthenticated = async (req, res, next) => {
    try {

        const token = req.cookies.token || req.headers['authorization'].split(' ')[1] || req.headers['Authorization'].split(' ')[1];

        if (!token) return next(new ErrorHandler("Auth token not found. Login again", 404));

        const payload = await verifyToken(token);
        req.user = payload;
        next();

    } catch (error) {
        console.log("Auth token is invalid" , error.message);
        return next(new ErrorHandler("Auth token is invalid or expired"));
    }
}

module.exports = isAuthenticated;