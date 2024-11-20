import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

const OTPVerification = () => {
  const location = useLocation();
  const history = useHistory();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const phoneNumber = location.state?.phoneNumber;

  const handleOtpChange = (e) => setOtp(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      setError('Please enter the OTP.');
      return;
    }

    setLoading(true);
    try {
      // Call backend API to verify OTP
      const response = await axios.post('/api/verify-otp', { phone: phoneNumber, otp });
      if (response.data.success) {
        setVerificationSuccess(true);
        // Redirect to password reset page
        history.push('/reset-password');
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <p>OTP sent to: {phoneNumber}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {verificationSuccess && <p style={{ color: 'green' }}>OTP Verified Successfully</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>OTP</label>
          <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter OTP"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Verifying OTP...' : 'Verify OTP'}
        </button>
      </form>
    </div>
  );
};

export default OTPVerification;
