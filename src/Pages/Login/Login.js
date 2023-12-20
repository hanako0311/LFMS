import React, { useState } from 'react';
import '../../assets/Styles/Login.css'; // Import the global CSS file
import { Link } from 'react-router-dom';
import backgroundImage from './Log-in.png';
import {useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Create history object

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Form data submitted:', formData);
    alert('Logged in successfully'); // Show a popup message for successful login

     // Navigate to the dashboard
     navigate('/home'); // Redirect to the dashboard

    setFormData({ // Reset the form fields
      email: '',
      password: ''
    });
  };

  return (
    <div className="register-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
              type="text"
              placeholder="Enter e-mail"
              className="email-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ textAlign: 'left', paddingLeft:'1em' }}
            />
          <input
              type="password"
              placeholder="Enter Password"
              className="password-input"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ textAlign: 'left', paddingLeft:'1em' }}
            />
          
          <button type="submit" style={{ marginTop: '1em', height: '38px', borderRadius: '30px', fontSize: '14px'}}>LOGIN</button>
          <p className="register-link">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
        <Link to="/" style={{ display: 'block', margin: '20px auto', textAlign: 'center', color: '#4f45b6', textDecoration: 'none' }}>Back to Home</Link>
      </div>
      <div>
    </div>  
    </div>
  );
};

export default Login;