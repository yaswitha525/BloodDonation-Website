import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BloodRequestsPage.css"; // Import the CSS file

const BloodRequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockRequests = [
      { id: 1, name: "John Doe", age: 25, bloodType: "A+", address: "Hyderabad", phone: "9876543210" },
      { id: 2, name: "Alice Smith", age: 30, bloodType: "O-", address: "Bangalore", phone: "8765432109" },
      { id: 3, name: "Rahul Kumar", age: 22, bloodType: "B+", address: "Mumbai", phone: "7654321098" },
    ];
    setRequests(mockRequests);
  }, []);

  const handleConnect = (request) => {
    alert(`Notification sent to ${request.name}!`);
  };

  const handleMessageClick = (request) => {
    navigate("/messages", { 
      state: { 
        newChat: {
          id: Date.now(),
          name: request.name,
          status: "Online",
          avatar: request.name.split(" ").map(word => word[0]).join(""),
          unread: 0,
          messages: []
        }
      }
    });
  };

  return (
    <div className="blood-requests-container">
      <div className="blood-requests-header">
        <h2>Blood Requests</h2>
        <p className="subtitle">People in need of blood donations</p>
      </div>
      
      {requests.length === 0 ? (
        <div className="no-requests">
          <i className="no-requests-icon">🔍</i>
          <p>No blood requests available</p>
          <span>Check back later for new requests</span>
        </div>
      ) : (
        <div className="blood-cards-container">
          {requests.map((request) => (
            <div key={request.id} className="blood-request-card">
              <div className="blood-request-header">
                <div className="blood-type-badge">{request.bloodType}</div>
                <h3 className="requester-name">{request.name}</h3>
                <p className="requester-age">{request.age} years</p>
              </div>
              
              <div className="blood-request-details">
                <div className="detail-item">
                  <i className="detail-icon location-icon">📍</i>
                  <p>{request.address}</p>
                </div>
                <div className="detail-item">
                  <i className="detail-icon phone-icon">📞</i>
                  <p>{request.phone}</p>
                </div>
              </div>
              
              <div className="blood-request-actions">
                <button 
                  className="connect-button"
                  onClick={() => handleConnect(request)}
                >
                  Connect
                </button>
                <button 
                  className="message-button"
                  onClick={() => handleMessageClick(request)}
                >
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BloodRequestsPage;