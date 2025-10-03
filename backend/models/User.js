const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  otpExpires: {
    type: Date,
  },
  bio: {
    type: String,
    default: "",
  },
  interests: {
    type: [String],
    default: [],
  },
  studyTime: {
    type: Number, // in minutes
    default: 0,
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
