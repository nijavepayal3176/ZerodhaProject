import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Signup Successful!");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="left-section">
          <img
            src="https://zerodha.com/static/images/account_open.svg"
            alt="Signup"
            className="signup-image"
          />
        </div>

        <div className="right-section">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha Logo"
            className="logo"
          />

          <h2>Open a free demat and trading account online</h2>
          <p>Start investing brokerage free and join millions of investors.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit">Sign Up</button>
          </form>

          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;