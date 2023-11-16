import React from 'react';
import './Login.css';
import backgroundImage from './Log-in.png';

function Login() {
  return (
    <div className="app-container">
      <img
        className="background-image"
        src={backgroundImage}
        alt="Background"
      />
      <div className="login-container">
        <div className="login-form">
          <div className="form-header">
            <h2 className="form-title">Log-in</h2>
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="E-mail"
              className="email-input"
            />
          </div>
          <div className="form-input">
            <input
              type="password"
              placeholder="Password"
              className="password-input"
            />
          </div>
          <div className="form-button">
            <button className="login-button">Log in</button>
          </div>
          <div className="form-footer">
            <p className="register-prompt">Don’t have an account?</p>
            <p className="register-link">Register here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
