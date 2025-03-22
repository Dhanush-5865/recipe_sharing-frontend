import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }

    const baseUrl = process.env.REACT_APP_API_URL;

    try {
      const res = await axios.post(`${baseUrl}/api/register`, {
        name,
        email,
        password
      });

      console.log("Registration successful:", res.data);
      alert("Registration successful, you can now login!");
      navigate('/login');
      
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-box">
        <h2 className="register-title">Join the World of Tasty Tales</h2>
        <form onSubmit={handleRegister}>
          <label>Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email ID</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>New Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Re-enter Password</label>
          <input
            type="password"
            required
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
