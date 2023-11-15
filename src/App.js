import React from 'react';
import './App.css'; // Import your CSS file for styling
import backgroundImage from './landingbg.png'; // Import your background image

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
        <h1 className="welcome-text">taena ni2</h1>
      </div>
    </div>
  );
};

export default App;

