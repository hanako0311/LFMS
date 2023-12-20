import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your Spring Boot backend
      const response = await fetch('http://localhost:8080/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful (status code 200-299)
      if (response.ok) {
        alert('Registration Successful'); // Show a success message
        setFormData({ // Reset the form fields
          email: '',
          firstName: '',
          lastName: '',
          password: ''
        });
      } else {
        // Handle registration failure
        const errorMessage = await response.text();
        alert(`Registration Failed: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration');
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ textAlign: 'left', paddingLeft:'1em' }}
          />
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{ textAlign: 'left', paddingLeft:'1em' }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{ textAlign: 'left', paddingLeft:'1em' }}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ textAlign: 'left', paddingLeft:'1em' }}
          />
          <button type="submit" style={{ marginTop: '1em', height: '38px', borderRadius: '30px'}}>REGISTER</button>
          <p className="login-link">
            Already have an account? <Link to="/login">Login now</Link>
          </p>
        </form>
        <Link to="/" style={{ display: 'block', margin: '20px auto', textAlign: 'center', color: '#4f45b6', textDecoration: 'none' }}>Back to Home</Link>
      </div>
      <div>
    </div>
    </div>
  );
};

export default Register;
