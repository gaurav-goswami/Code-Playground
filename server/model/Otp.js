import mongoose from "mongoose";
import verificationMail from "../helper/verificationMail";

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

OtpSchema.pre("save" , async function(next) {
  await verificationMail(this.email , this.otp);
  next();
})

const Otp = mongoose.model("Otp", OtpSchema);
export default Otp;
