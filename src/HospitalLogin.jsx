import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HospitalLogin.css'; // Import the CSS file

const HospitalLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Hospital login:', { email, password });
    navigate('/hospital/dashboard');
  };

  return (
    <div className="hospital-login-container">
      <div className="hospital-login-box">
        <h2>Hospital Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default HospitalLogin;
