import React from "react";
import "./Dashboard.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <main className="dashboard-main">
        <h1>Welcome to the Study App Dashboard 🎓</h1>
        <p>This is your central hub to join study rooms, track progress, and more.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
