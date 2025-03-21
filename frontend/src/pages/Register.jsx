import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; 

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    navigate('/');
  };

  return (
    <div className="register-wrapper">
      <div className="register-box">
        <h2 className="register-title">Join the World of Tasty Tales</h2>
        <form onSubmit={handleRegister}>
          <label>Name</label>
          <input type="text" required />

          <label>Email ID</label>
          <input type="email" required />

          <label>New Password</label>
          <input type="password" required />

          <label>Re-enter Password</label>
          <input type="password" required />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
