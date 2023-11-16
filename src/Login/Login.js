import React, { useState } from 'react';
import './Login.css'; // Adjusted to the correct relative path
import { Link } from 'react-router-dom';
import backgroundImage from './Log-in.png';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Form data submitted:', formData);
    alert('Logged in successfully'); // Show a popup message for successful login
    setFormData({ // Reset the form fields
      email: '',
      password: ''
    });
  };

  return (
    <div className="app-container">
      <img
        className="background-image"
        src={backgroundImage}
        alt="Background"
      />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h2 className="form-title">Log-in</h2>
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="E-mail"
              className="email-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <input
              type="password"
              placeholder="Password"
              className="password-input"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-button">
            <button type="submit" className="login-button">Log in</button>
          </div>
          <div className="form-footer">
            <p className="register-link">
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </div>
          <Link to="/" className="back-home-link">Back to Home</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;