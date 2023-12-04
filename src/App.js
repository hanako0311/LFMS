import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes,Switch } from 'react-router-dom';
import './App.css';
import Home from './Homepage/Home.js';
import Login from './Login/Login.js'; 
import Registration from './Register/Register.js';
import ReportFoundItems from './ReportFound/ReportFoundItems.js';
import ReportLostItems from './ReportLost/ReportLostItems.js';
import backgroundImage from './landingbg.png';
import FoundItems from './DashboardFound/FoundItems.js';



/**const LandingPage = () => {
  return (
    <div className="landing-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="header">
        <div>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/register">
            <button className="register-btn">Register</button>
          </Link>
        </div>
      </div>
      <div className="content">
        <h1 className="welcome-text">
          <h1 className="sampol"></h1>
        <span className="italic-text">Welcome to</span> <br />
          <span className="lf-text">LOST AND FOUND</span> <br />
          <span className="italic-text">Find Lost Items, Report Found Items</span>
        </h1>
      </div>
    </div>
  );
};**/

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/report-found-items" element={<ReportFoundItems />} />
        <Route path="/report-lost-items" element={<ReportLostItems />} />
        <Route path="/dash-found-items" element={<FoundItems />} />
        
      </Routes>
    </Router>
  ); 
}; 

export default App;