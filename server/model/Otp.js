const mongoose = require("mongoose");
const verificationMail = require("../helper/verificationMail");

const OtpSchema = new mongoose.Schema({
  otp: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 60 * 1,
  },
  email: {
    type: String,
    required: true,
  },

});

OtpSchema.pre("save", async function (next) {
  await verificationMail(this.email, this.otp);
  next();
})

const Otp = mongoose.model("Otp", OtpSchema);
module.exports = Otp;
