import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Adjusted to the correct relative path

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Create history object

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    try{
      //Make POST request to the login endpoint
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('Form data submitted:', formData);

      if (response.ok){
        const data = await response.text();
        if(data === 'Login successful') {
          // Show a popup message for successful login
          alert('Logged in Successfully');
          // Navigate to the dashboard
          navigate('/home'); // Redirect to the dashboard
          } else {
            alert('Invalid Credentials');
          }
        } else {
          console.error('Login Failed: ', response.statusText);
          alert('Login failed. Please Try Again');
        }
      } catch (error) {
        console.error('Login failed:', error.message);
        alert('Login failed. Please try again.');
      }
  
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