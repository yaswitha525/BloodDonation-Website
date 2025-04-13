import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './HospitalSignup.css'; // Import the CSS

const HospitalSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hospital signup:', formData);
    navigate('/hospital/login');
  };

  return (
    <div className="hospital-signup-container">
      <div className="hospital-signup-box">
        <h2>Hospital Signup</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required onChange={e => setFormData({ ...formData, name: e.target.value })} />
          <input type="text" placeholder="Address" required onChange={e => setFormData({ ...formData, address: e.target.value })} />
          <input type="email" placeholder="Email" required onChange={e => setFormData({ ...formData, email: e.target.value })} />
          <input type="tel" placeholder="Phone" required onChange={e => setFormData({ ...formData, phone: e.target.value })} />
          <input type="password" placeholder="Password" required onChange={e => setFormData({ ...formData, password: e.target.value })} />
          <button type="submit">Signup</button>
        </form>
        <p>Already have an account? <Link to="/hospital/login">Login</Link></p>
      </div>
    </div>
  );
};

export default HospitalSignup;
