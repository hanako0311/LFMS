import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './AuthProvider.js';
import DashboardLostItems from './Dashboard Lost/DashboardLostItems.js';
import Home from './Homepage/Home.js';
import Landing from './Landing/Landing.js';
import Login from './Login/Login.js';
import Profile from './Profile/Profile.js';
import Registration from './Register/Register.js';
import ReportFoundItems from './ReportFound/ReportFoundItems.js';
import ReportLostItems from './ReportLost/ReportLostItems.js';



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
        <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} requiresAuth />
          <Route path="/report-found-items" element={<ReportFoundItems />} requiresAuth />
          <Route path="/report-lost-items" element={<ReportLostItems />} requiresAuth />
          <Route path="/dashboard-lost-items" element={<DashboardLostItems />} requiresAuth />
          <Route path="/profile" element={<Profile />} requiresAuth />
        </Routes>
        </AuthProvider>
      </Router>
    
  ); 
}; 

export default App;