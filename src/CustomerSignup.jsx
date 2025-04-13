import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './CustomerSignup.css'; // Import the CSS

const CustomerSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    bloodType: '',
    email: '',
    phone: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer signup:', formData);
    navigate('/customer/login');
  };

  return (
    <div className="customer-signup-container">
      <div className="customer-signup-box">
        <h2>Customer Signup</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required onChange={e => setFormData({ ...formData, name: e.target.value })} />
          <input type="text" placeholder="Address" required onChange={e => setFormData({ ...formData, address: e.target.value })} />
          <input type="text" placeholder="Blood Type" required onChange={e => setFormData({ ...formData, bloodType: e.target.value })} />
          <input type="email" placeholder="Email" required onChange={e => setFormData({ ...formData, email: e.target.value })} />
          <input type="tel" placeholder="Phone" required onChange={e => setFormData({ ...formData, phone: e.target.value })} />
          <input type="password" placeholder="Password" required onChange={e => setFormData({ ...formData, password: e.target.value })} />
          <button type="submit">Signup</button>
        </form>
        <p>Already have an account? <Link to="/customer/login">Login</Link></p>
      </div>
    </div>
  );
};

export default CustomerSignup;
