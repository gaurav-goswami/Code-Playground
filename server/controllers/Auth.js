const User = require("../model/User");
const generateOtp = require("../helper/generateOtp");
const Otp = require("../model/Otp");
const { checkPassword, hashPassword } = require("../helper/bcryptHelper");
const { generateToken } = require("../helper/jwtHelper");
const ErrorHandler = require("../utils/ErrorHandler");

class AuthController {
    static sendOtp = async (req, res, next) => {
        try {
            const { email } = req.body;
            const user = await User.findOne({ email });
            if (user) return next(new ErrorHandler("User already exists", 401))

            const otp = generateOtp();
            // check if the otp already exists or not
            let otpExist = await Otp.findOne({ otp });
            while (otpExist) {
                otp = generateOtp();
                otpExist = await Otp.findOne({ otp });
            }

            await Otp.create({ email, otp });
            return res.status(200).json({
                success: true,
                message: "Otp send successfully",
            });
        } catch (error) {
            console.log("Error in send otp handler");
            return next(new ErrorHandler("Internal server error", 500))
        }
    };

    // signup
    static signup = async (req, res, next) => {
        try {
            const { username, email, password, otp } = req.body;
            if (!username || !email || !password || otp) return next(new ErrorHandler("All fields are required", 400));

            let user = await User.findOne({ email });
            if (user) return next(new ErrorHandler("User already exists with that email", 401));

            // validate the otp
            const latestOtp = await Otp.find({ email })
                .sort({ createdAt: -1 })
                .limit(1);
            if (latestOtp.length === 0) {
                return next(new ErrorHandler("OTP not found", 404))
            }
            else if (otp !== latestOtp[0].otp) {
                return next(new ErrorHandler("OTP did not match", 400));
            }

            let hashedPassword = await hashPassword(password, res);
            user = await User.create({ username, email, password: hashedPassword });

            const token = await generateToken(user._id, user.email);
            res.cookie("token", token, {
                expires: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
                httpOnly: true
            })

            return res.status(200).json({
                success: true,
                message: "Signup successfully",
                username: user.username,
            })
        } catch (error) {
            console.log(error.message);
            return next(new ErrorHandler("Internal server error", 500));
        }
    };

    static login = async (req, res, next) => {
        try {

            const { email, password } = req.body;
            if (!email || !password) return next(new ErrorHandler("All fields are required", 400));

            let user = await User.findOne({ email });
            if (!user) return next(new ErrorHandler("No account associated with this email. Please signup", 404));

            // check the password
            let passwordMatch = await checkPassword(password, user.password);
            console.log("pass match" , passwordMatch);
            if (user && passwordMatch) {
                const token = await generateToken(user._id, user.email);
                res.cookie("token", token, {
                    expires: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
                    httpOnly: true
                })
                return res.status(200).json({
                    success: true,
                    message: "Logged In",
                    username: user.username
                })
            }
            else {
                return next(new ErrorHandler("Invalid credentials", 401));
            }
        } catch (error) {
            return next(new ErrorHandler("Internal server error", 500));
        }
    }
}

module.exports = AuthController;
