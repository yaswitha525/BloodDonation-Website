import React from "react";
import { Link } from "react-router-dom";
import "./HospitalDashboard.css";

const bloodStock = {
  "A+": 10,
  "A-": 5,
  "B+": 8,
  "B-": 3,
  "O+": 12,
  "O-": 4,
  "AB+": 6,
  "AB-": 2,
};

const HospitalDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <nav className="dashboard-sidebar">
        <div className="sidebar-content">
          <h2 className="sidebar-title">Hospital Panel</h2>
          <ul className="sidebar-nav">
            <li><Link to="/blood-requests">Blood Requests</Link></li>
            <li><Link to="/messages">Messages</Link></li>
            <li><Link to="/request-blood">Request Form</Link></li>
            <li><Link to="/hospital/profile">Profile</Link></li>
          </ul>
        </div>
        <div className="logout-container">
          <button className="logout-button">
            <Link to="/">Logout</Link>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        <h2>Blood Stock Overview</h2>
        <div className="stock-grid">
          {Object.entries(bloodStock).map(([type, count]) => (
            <div key={type} className="stock-card">
              <h3>{type}</h3>
              <p>{count} Units</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HospitalDashboard;