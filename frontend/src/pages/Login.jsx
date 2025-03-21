import React from "react";
import "./Login.css"; 

const Login = () => {
  return (
    <div className="login-container">
      
      <h2 className="chill-text">Get into the world of Tasty Tales</h2>

      
      <div className="login-box">
       
        <label>Email</label>
        <input type="email" placeholder="Enter your email" className="input-field" />


        <label>Password</label>
        <input type="password" placeholder="Enter your password" className="input-field" />

        <button className="login-btn">Login</button>

        
        <p className="forgot-password">Forgot my password?</p>
      </div>
    </div>
  );
};

export default Login;
