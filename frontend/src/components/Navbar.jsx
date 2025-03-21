import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "red",
      padding: "10px 20px",
      fontFamily: "Lato, sans-serif"
    }}>
      <div style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>
        Tasty Tales
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        <Link to="/register" style={{ color: "white", textDecoration: "none" }}>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
