import User from "../model/User";
import generateOtp from "../helper/generateOtp";
import Otp from "../model/Otp";
import { checkPassword, hashPassword } from "../helper/bcryptHelper";
import { generateToken } from "../helper/jwtHelper";

class AuthController {
    static sendOtp = async (req, res, next) => {
        try {
            const { email } = req.body;
            const user = await User.findOne({ email });
            if (user)
                return res.status(403).json({
                    success: false,
                    message: "User with that email already exists.",
                });

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
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    };

    // signup
    static signup = async (req, res, next) => {
        try {
            const { username, email, password, otp } = req.body;
            if (!username || !email || !password || !otp)
                return res.status(400).json({
                    success: false,
                    message: "All fields are required",
                });
            let user = await User.findOne({ email });
            if (user)
                return res.status(403).json({
                    success: false,
                    message: "User with that email already exists",
                });

            // validate the otp
            const latestOtp = await Otp.find({ email })
                .sort({ createdAt: -1 })
                .limit(1);
            if (latestOtp.length === 0)
                return res.status(404).json({
                    success: false,
                    message: "Otp not found",
                });
            else if (otp !== latestOtp[0].otp)
                return res.status(400).json({
                    success: false,
                    message: "OTP did not match",
                });

            let hashedPassword = hashPassword(password, res);
            console.log("hashed password is", hashedPassword);

            user = await User.create({username, email, password : hashPassword});

            return res.status(200).json({
                success : true,
                message : "Signup successfully"
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    };

    static login = async (req, res, next) => {
        try {
            
            const {email, password} = req.body;
            if(!email || !password) return res.status(400).json({
                success : false,
                message : "All fields are required"
            })

            let user = await User.findOne({email});
            if(!user) return res.status(404).json({
                success : false,
                message : "No account associated with this email. Please signup"
            });

            // check the password
            let passwordMatch = checkPassword(password, user.password);
            if(user && passwordMatch){
                const token = await generateToken(user._id, user.email);
                res.cookies("token" , token, {
                    expires : new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
                    httpOnly: true
                })

                return res.status(200).json({
                    success : true,
                    message : "Logged In",
                    token,
                    userId : user._id
                })
            }
            else{
                return res.status(401).json({
                    success : false,
                    message : "Invalid credentails"
                })
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    }
}

export default AuthController;
