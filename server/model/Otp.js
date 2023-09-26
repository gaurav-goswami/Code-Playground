import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
  otp: {
    type: Number,
    trim: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
  },
});

const Otp = mongoose.model("Otp", OtpSchema);
export default Otp;
