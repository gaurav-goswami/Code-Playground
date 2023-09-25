import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
    otp: {
        type: Number,
        trim: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Otp = mongoose.model("Otp", OtpSchema);
export default Otp;