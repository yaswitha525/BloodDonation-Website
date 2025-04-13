import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerLogin.css'; // Import the CSS

const CustomerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Customer login:', { email, password });
    navigate('/customer/dashboard');
  };

  return (
    <div className="customer-login-container">
      <div className="customer-login-box">
        <h2>Customer Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerLogin;
