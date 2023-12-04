import React from 'react';
import '../Landing/Landing.css';

const CTA = ({ reference }) => {
  const onButtonContainer6Click = () => {
    window.open('https://media.tenor.com/cCYaLli5PWwAAAAd/krissed-kris-jenner.gif');
  };

  return (
    <div id="cta-section" ref={reference} className="cta">
      <div className="highlighted-cta">
        <div className="header2">
          <b className="get-landing-page">
            Get LF's Lost and Found Software Today!
          </b>
          <div className="break-figma-limits">
            Redefine Lost and Found Efficiency – Discover Unlimited Potential
            with LF Software!
          </div>
        </div>
        <div className="ctas1">
          <div className="ctas2">
            <div className="button5" onClick={onButtonContainer6Click}>
              <img className="user-icon" alt="" src="/rocketlaunch1.svg" />
              <div className="label">Get Started</div>
              <img className="arrowright-icon" alt="" src="/arrowleft.svg" />
            </div>
          </div>
        </div>
        <img className="mockup-icon" alt="" src="/mockup@2x.png" />
      </div>
    </div>
  );
};

export default CTA;
