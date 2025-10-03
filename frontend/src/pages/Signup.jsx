import { useState } from "react";
import { signup, verifyOTP } from "./api";
import "./Signup.css";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [otpStage, setOtpStage] = useState(false);
  const [userId, setUserId] = useState("");
  const [otp, setOtp] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async () => {
    const res = await signup(form);
    if (res.userId) {
      setUserId(res.userId);
      setOtpStage(true);
      alert("OTP sent to your email!");
    } else {
      alert(res.message);
    }
  };

  const handleVerifyOTP = async () => {
    const res = await verifyOTP({ userId, otp });
    if (res.token) {
      localStorage.setItem("token", res.token);
      alert("Signup successful!");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="signup-container">
      {!otpStage ? (
        <>
          <h2>Signup</h2>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
          <input name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password"/>
          <button onClick={handleSignup}>Signup</button>
        </>
      ) : (
        <div className="otp-container">
          <h2>Enter OTP</h2>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button onClick={handleVerifyOTP}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default Signup;
