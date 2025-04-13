import React, { useState, useEffect } from "react";
import "./hospitalProfile.css";

const HospitalProfile = () => {
  const [hospital, setHospital] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedStock, setEditedStock] = useState([]);

  // Simulated fetch of hospital data
  useEffect(() => {
    const mockHospital = {
      name: "City Hospital",
      email: "cityhospital@example.com",
      address: "123 Main Road, City Center",
      phone: "9876543210",
      bloodStock: ["A+", "B-", "O+", "A-", "B+", "o+", "o-", 'AB+', "AB-"],
      requestHistory: [
        { date: "2024-03-01", recipient: "John Doe", bloodType: "A+" },
        { date: "2024-01-15", recipient: "Maria White", bloodType: "B-" },
      ],
    };
    setHospital(mockHospital);
    setEditedStock(mockHospital.bloodStock);
  }, []);

  const toggleEdit = () => setEditing(!editing);

  const handleStockChange = (index, value) => {
    const updated = [...editedStock];
    updated[index] = value;
    setEditedStock(updated);
  };

  const addStockField = () => setEditedStock([...editedStock, ""]);

  const removeStockField = (index) => {
    const updated = editedStock.filter((_, i) => i !== index);
    setEditedStock(updated);
  };

  const saveStock = () => {
    setHospital({ ...hospital, bloodStock: editedStock });
    setEditing(false);
  };

  if (!hospital) return <div className="loading">Loading Hospital Profile...</div>;

  return (
    <div className="hospital-profile">
      <div className="hospital-card">
        <h2>{hospital.name}</h2>
        <p><strong>Email:</strong> {hospital.email}</p>
        <p><strong>Phone:</strong> {hospital.phone}</p>
        <p><strong>Address:</strong> {hospital.address}</p>

        <div className="blood-stock-section">
          <h3>Blood Stock</h3>
          {!editing ? (
            <>
              <ul>
                {hospital.bloodStock.map((type, i) => (
                  <li key={i}>{type}</li>
                ))}
              </ul>
              <button className="edit-btn" onClick={toggleEdit}>Edit Stock</button>
            </>
          ) : (
            <>
              {editedStock.map((type, i) => (
                <div key={i} className="stock-edit-row">
                  <input
                    value={type}
                    onChange={(e) => handleStockChange(i, e.target.value)}
                    placeholder="Blood Type"
                  />
                  <button onClick={() => removeStockField(i)}>Remove</button>
                </div>
              ))}
              <button onClick={addStockField}>+ Add Blood Type</button>
              <br />
              <button className="save-btn" onClick={saveStock}>Save</button>
              <button onClick={toggleEdit}>Cancel</button>
            </>
          )}
        </div>
      </div>

      <div className="history-box">
        <h3>Blood Request History</h3>
        {hospital.requestHistory.length === 0 ? (
          <p>No requests fulfilled yet.</p>
        ) : (
          hospital.requestHistory.map((req, i) => (
            <div key={i} className="history-item">
              <p><strong>Date:</strong> {req.date}</p>
              <p><strong>Recipient:</strong> {req.recipient}</p>
              <p><strong>Blood Type:</strong> {req.bloodType}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HospitalProfile;
