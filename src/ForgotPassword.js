import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  //const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    // Simulate forgot password process (replace with real API call)
    const isEmailValid = email === 'user@example.com'; // Example check

    if (isEmailValid) {
      setMessage('A password reset link has been sent to your email');
      setError('');
    }
    //  else {
    //   setError('Email not found');
    //   setMessage('');
    // }
    // const phoneRegex = /^[0-9]{10}$/;
    // if (!phoneRegex.test(phone)) {
    //   alert("Please enter a valid phone number (10 digits).");
    //   return; 
    // }
      alert("OTP Sending successful Register mail id ResetPassword!");
      navigate("/login");
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        {/* <div>
          <label>PhoneNumber:</label>
          <input 
            type="text" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
        </div> */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
