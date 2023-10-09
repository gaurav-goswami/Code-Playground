const bcrypt = require("bcryptjs");
const { Config } = require("../config/config");

exports.hashPassword = async (password, res) => {
    try {
        const genSalt = await bcrypt.genSalt(Number(Config.GEN_SALT));
        const hashedPassword = await bcrypt.hash(password, genSalt);
        return hashedPassword;
    } catch (error) {
        console.log("Error while hashing password");
        return res.status(500).json({
            success : false,
            message : "Internal server error"
        })
    }
}

exports.checkPassword = async (password, hashedPassword, res) => {
    try {

        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        return passwordMatch;
        
    } catch (error) {
        console.log("Error in validatePassword");
        return res.status(500).json({
            success : false,
            message : "Invalid credentials"
        })
    }
}