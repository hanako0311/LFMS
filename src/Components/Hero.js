import React, { useCallback } from 'react';
import '../assets/Styles/Landing.css';
import arrowRightIcon from '../assets/images/arrowleft.svg';
import userIcon from '../assets/images/rocketlaunch1.svg';
import visualsIcon from '../assets/images/visuals.svg';

const Hero = () => {
  const onButtonContainer5Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div id="hero-section" className="hero-section">
      <div className="header">
        <div className="header1">
          <b className="lost-and-found">LOST AND FOUND SOFTWARE</b>
          <div className="lf-lost-and">
            LF (Lost and Found) is a web-based application that transforms
            university lost and found management with a user-friendly,
            efficient, and community-focused platform for easy reporting,
            tracking, and reclaiming of lost items.
          </div>
        </div>
        <div className="ctas">
          <div className="button5" onClick={onButtonContainer5Click}>
            <img className="user-icon" alt="" src={userIcon} />
            <div className="landing-label">Get Started</div>
            <img className="arrowright-icon" alt="" src={arrowRightIcon} />
          </div>
        </div>
      </div>
      <img className="visuals-icon" alt="" src={visualsIcon} />
    </div>
  );
};

export default Hero;
