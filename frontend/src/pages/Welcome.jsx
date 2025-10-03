import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1 className="welcome-title">Welcome to Combine Study</h1>
        <p className="welcome-text">
          Study smarter with friends — create or join study rooms, schedule meetings, and track your progress.
        </p>
        <div className="welcome-buttons">
          <a href="/signup" className="btn">Sign Up</a>
          <a href="/signin" className="btn">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
