import React, { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  // Simulated API Call to Fetch User Data
  useEffect(() => {
    const mockUser = {
      name: "Alice Johnson",
      age: 26,
      gender: "Female",
      address: "456 Health Street, Cityname",
      bloodGroup: "A+",
      received: [
        { date: "2024-02-10", hospital: "General Hospital", bloodType: "A+" },
        { date: "2023-07-20", hospital: "City Care", bloodType: "A+" },
      ],
      donated: [
        { date: "2023-12-05", recipient: "Robert Brown", bloodType: "A+" },
        { date: "2023-05-18", recipient: "Sophia Wilson", bloodType: "A+" },
      ],
    };
    setUser(mockUser);
  }, []);

  if (!user) return <div className="loading">Loading Profile...</div>;

  return (
    <div className="profile-page">
  
      {/* Profile Section */}
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">{user.name[0]}</div>
            <h2>{user.name}</h2>
          </div>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
        </div>
      </div>

      {/* Past History */}
      <h2 className="past-history">Past History</h2>
      <div className="history-container">
        <div className="history-box">
          <h3>Received</h3>
          {user.received.map((item, index) => (
            <div className="history-item" key={index}>
              <p>Date: {item.date}</p>
              <p>Hospital: {item.hospital}</p>
              <p>Blood Type: {item.bloodType}</p>
            </div>
          ))}
        </div>
        <div className="history-box">
          <h3>Donated</h3>
          {user.donated.map((item, index) => (
            <div className="history-item" key={index}>
              <p>Date: {item.date}</p>
              <p>Recipient: {item.recipient}</p>
              <p>Blood Type: {item.bloodType}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="profile-buttons">
      <button className="button change-password-button">Change Password</button>
      <Link to= "/"><button className="button change-password-button">Logout</button></Link>
      </div>

    </div>
    
  );
};

export default Profile;