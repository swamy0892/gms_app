import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      // Call the backend API to reset the password
      const response = await axios.post('/api/reset-password', { password });
      if (response.data.success) {
        history.push('/login'); // Redirect to login page
      } else {
        setError('Failed to reset password. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>New Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter new password"
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm new password"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Resetting Password...' : 'Reset Password'}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
