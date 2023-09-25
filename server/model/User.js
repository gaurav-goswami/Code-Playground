import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        maxLength: 8
    },
    otp: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Otp"
    }
})

const User = mongoose.model("User", userSchema);
export default User;