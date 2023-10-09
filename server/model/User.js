const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  otp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Otp",
  },
});

const User = mongoose.model("User", userSchema);
module.exports= User;
