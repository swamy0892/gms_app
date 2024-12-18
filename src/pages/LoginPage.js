// src/pages/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For simplicity, we will just check for non-empty fields
    if (email && password) {
      // Redirect to HomePage upon successful login
      navigate("/home");
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder=" Enter Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <a href="/ForgotPassword">forgotPassword</a>
      </div>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default LoginPage;
