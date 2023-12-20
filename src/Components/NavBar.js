import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/images/lf-small.png';
import '../assets/Styles/Landing.css';

const Navbar = () => {
  const handleButtonClick = (sectionId) => {
    // You can handle any other functionality here if needed
  };

  return (
    <div className="navbar">
      <div className="logo-container">
      <img className="logo-image" alt="LFMS Logo" src={logo}/>
        <b className="landingpage1">LFMS</b>
      </div>
      <div className="navigation-menu">
        <ScrollLink to="hero-section" spy={true} smooth={true} duration={500}>
          <div className="button2">
            <div className="label">Home</div>
          </div>
        </ScrollLink>
        <ScrollLink to="features-section" spy={true} smooth={true} duration={500}>
          <div className="button2">
            <div className="label">Features</div>
          </div>
        </ScrollLink>
        <ScrollLink to="team-section" spy={true} smooth={true} duration={500}>
          <div className="button2">
            <div className="label">About Us</div>
          </div>
        </ScrollLink>
        <ScrollLink to="contact-section" spy={true} smooth={true} duration={500}>
          <div className="button2">
            <div className="label">Contact Us</div>
          </div>
        </ScrollLink>
        <RouterLink to="/login">
          <div className="button4">
            <div className="label">Login</div>
          </div>
        </RouterLink >
      </div>
    </div>
  );
};

export default Navbar;
