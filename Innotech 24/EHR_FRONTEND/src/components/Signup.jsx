import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API requests
import './RegisterPage.css';
import { useNavigate } from 'react-router-dom'; // Correct import

function Signup() {
  const [name, setName] = useState(''); // Initialize state variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // For displaying errors
  const [success, setSuccess] = useState(''); // For success messages

  const navigate = useNavigate(); // To navigate to another page after registration

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(''); // Clear any previous error
    setSuccess(''); // Clear any previous success message

    axios
      .post('http://localhost:3001/register', { name, email, password })
      .then((result) => {
        console.log('Registration successful:', result);
        setSuccess('Account created successfully!');
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after 2 seconds
        }, 2000);
      })
      .catch((err) => {
        console.error('Registration failed:', err.response?.data || err.message);
        setError(
          err.response?.data?.error || 'An error occurred during registration.'
        );
      });
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Enter your full name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter a secure password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        {/* Display error or success messages */}
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <p className="login-text">
          Already have an account? <a href="/login">Login Here</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
