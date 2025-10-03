const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

// Generate random 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Signup with OTP
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpires,
    });
// Send OTP email with welcome note
const welcomeMessage = `
  <div style="font-family: Arial, sans-serif; padding: 15px; background-color: #f4f4f4;">
    <h2 style="color: #4CAF50;">Welcome to the GenGrok thStudyApp 🎓</h2>
    <p>Hi <b>${name}</b>,</p>
    <p>We’re excited to have you join our learning community! 🚀</p>
    <p>Your OTP for completing signup is:</p>
    <h1 style="color: #333; letter-spacing: 5px;">${otp}</h1>
    <p><b>Note:</b> This OTP is valid for <span style="color:red;">10 minutes</span>.</p>
    <hr />
    <p>Happy studying,<br/>The StudyApp Team</p>
  </div>
`;

await sendEmail(email, "Welcome to GenGrok🎉 | Verify your OTP", welcomeMessage);

    res.status(201).json({ message: "Signup successful. OTP sent to email", userId: user._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Verify OTP
exports.verifyOTP = async (req, res) => {
  try {
    const { userId, otp } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.otp !== otp || user.otpExpires < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    user.otp = null;
    user.otpExpires = null;
    await user.save();   

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({ message: "OTP verified", token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
