import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes,Switch } from 'react-router-dom';
import './App.css';
import SideMenu from './assets/navs/SideMenu/SideMenu.js';
import Home from './Pages/Homepage/Home.js';
import Login from './Pages/Login/Login.js'; 
import Profile from './Pages/Profile/Profile.js';
import Registration from './Pages/Register/Register.js';
import ReportFoundItems from './Pages/ReportFound/ReportFoundItems.js';
import ReportLostItems from './Pages/ReportLost/ReportLostItems.js';
import FoundItems from './Pages/DashboardFound/FoundItems.js';
import Landing from './Pages/Landing/Landing.js';
import LostItems from './Pages/DashboardLostItems/DashboardLostItems.js';


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
        <Route path="/home" element={<LostItems />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/report-found-items" element={<ReportFoundItems />} />
        <Route path="/report-lost-items" element={<ReportLostItems />} />
        <Route path="/dash-found-items" element={<FoundItems />} />
        <Route path="/dash-lost-items" element={<LostItems />} />
      </Routes>
    </Router>
  );
}; 

export default App;