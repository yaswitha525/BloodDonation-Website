import React, { useState, useEffect } from "react";
import "./HospitalConnect.css"; 

const hospitals = [
  { id: 1, name: "City Hospital", location: { lat: 16.5, lng: 81.5 }, bloodStock: ["A+", "B-"] },
  { id: 2, name: "Green Care Hospital", location: { lat: 16.6, lng: 81.6 }, bloodStock: ["O+", "A-"] },
  { id: 3, name: "Sunrise Medical Center", location: { lat: 16.55, lng: 81.55 }, bloodStock: ["AB+", "O-"] },
  { id: 4, name: "Healing Touch Hospital", location: { lat: 16.52, lng: 81.52 }, bloodStock: ["B+", "A+"] }
];

const HospitalConnect = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [bloodType, setBloodType] = useState("");
  const [nearbyHospitals, setNearbyHospitals] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error("Error fetching location", error)
    );
  }, []);

  const findHospitals = () => {
    if (!userLocation || !bloodType) return;

    const filteredHospitals = hospitals.filter(hospital =>
      hospital.bloodStock.includes(bloodType)
    );

    setNearbyHospitals(filteredHospitals);
  };

  return (
    <div className="container">
      <h2 className="title">Find Blood Availability</h2>
      <div className="form-group">
        <label>Select Blood Type:</label>
        <select value={bloodType} onChange={(e) => setBloodType(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>
      <button className="find-button" onClick={findHospitals}>Find Nearby Hospitals</button>

      <div className="results">
        <h3>Matching Hospitals</h3>
        {nearbyHospitals.length === 0 ? (
          <p>No matching hospitals found.</p>
        ) : (
          <ul>
            {nearbyHospitals.map((hospital) => (
              <li key={hospital.id} className="hospital-card">
                <h4>{hospital.name}</h4>
                <p>Blood Available: {hospital.bloodStock.join(", ")}</p>
                <button className="contact-button">Contact</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HospitalConnect;