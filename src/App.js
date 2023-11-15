import React from 'react';
import './App.css'; 
import backgroundImage from './landingbg.png'; 

const App = () => {
  return (
    <div className="landing-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="header">
        <div>
          <button className="login-button">Login</button>
          <button className="register-button">Register</button>
        </div>
      </div>
      <div className="content">
        <h1 className="welcome-text">
        <h1 className="sampol"></h1>
        <span className="italic-text">Welcome to</span> <br /> 
        <span className="lf-text">LOST AND FOUND</span> <br />
        <span className="italic-text">  Find Lost Items, Report Found Items </span>
        </h1>
      </div>
    </div>
  );
};

export default App;