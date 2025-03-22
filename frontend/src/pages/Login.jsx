import React, { useState } from "react";
import axios from 'axios';
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const baseUrl = process.env.REACT_APP_API_URL;

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${baseUrl}/api/login`, {
        email,
        password
      });

      console.log("Login successful", res.data);
      alert("Login successful!");

      // Navigate or store token if needed
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="chill-text">Get into the world of Tasty Tales</h2>

      <div className="login-box">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button className="login-btn" onClick={handleLogin}>Login</button>

        <p className="forgot-password">Forgot my password?</p>
      </div>
    </div>
  );
};

export default Login;
