import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      {/* Top Section */}
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/120" // placeholder, later we add upload option
          alt="profile"
          className="profile-pic"
        />
        <div className="profile-info">
          <h2 className="username">Balaji</h2>
          <p className="bio">
            Cybersecurity + Full Stack Enthusiast 🚀 | Loves Hackathons 👨‍💻
          </p>
          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats">
        <div>
          <h3>120 hrs</h3>
          <p>Study Time</p>
        </div>
        <div>
          <h3>8</h3>
          <p>Study Rooms</p>
        </div>
        <div>
          <h3>75%</h3>
          <p>Progress</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <button className="tab active">Time Spent</button>
        <button className="tab">Study Rooms</button>
        <button className="tab">Progress</button>
      </div>

      {/* Content Section */}
      <div className="tab-content">
        <p>📊 Here we’ll show charts, study history, and progress later...</p>
      </div>
    </div>
  );
}

export default Profile;
