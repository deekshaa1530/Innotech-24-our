import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Added missing axios import
import './LoginPage.css';
import Validation from './LoginValidation';

function LoginPage() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value })); // Fixed `setValue` typo
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    // Proceed only if there are no validation errors
    if (!validationErrors.email && !validationErrors.password) {
      axios
        .post('http://localhost:8081/login', values) // Corrected endpoint to `/login`
        .then((res) => {
          if (res.data === 'Success') {
            navigate('/home'); // Fixed `Navigate` to `navigate`
          } else {
            alert('No record found');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Swasthya</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={values.email} // Ensure controlled input
              onChange={handleInput}
              placeholder="Enter your email"
              required
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={values.password} // Ensure controlled input
              onChange={handleInput}
              placeholder="Enter your password"
              required
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-text">
          Don’t have an account? <Link to="/register">Register Here</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
