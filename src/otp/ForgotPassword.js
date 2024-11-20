import React, { useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

const ForgotPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
 // const history = useHistory();

  const handlePhoneChange = (e) => setPhoneNumber(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      setError('Please enter your phone number.');
      return;
    }

    setLoading(true);
    try {
      // Call the backend to send OTP
      const response = await axios.post('/api/send-otp', { phone: phoneNumber });
      if (response.data.success) {
        // Redirect to OTP verification screen
        history.push('/verify-otp', { phoneNumber });
      } else {
        setError('Failed to send OTP. Try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Enter your mobile number"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending OTP...' : 'Send OTP'}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
