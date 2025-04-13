import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import bloodImg from './assets/blood-donation.png'; // use your own path or URL

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="blood-drop-bg"></div>
      <img src={bloodImg} alt="Blood Donation" className="illustration" />
      <h1 className="homepage-title">Welcome to BloodConnect</h1>
      <div className="homepage-buttons">
        <button className="homepage-button" onClick={() => navigate('/hospital/signup')}>
          Hospital
        </button>
        <button className="homepage-button" onClick={() => navigate('/customer/signup')}>
          Customer
        </button>
      </div>
    </div>
  );
};

export default HomePage;
