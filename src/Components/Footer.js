import React from 'react';
import socialicons7 from '../assets/images/social-icons7.svg';
import socialicons8 from '../assets/images/social-icons8.svg';
import socialicons9 from '../assets/images/social-icons9.svg';
import socialicons10 from '../assets/images/social-icons10.svg';
import '../assets/Styles/Landing.css';

const Footer = () => {
  const openSocialLink = (url) => {
    // Open a new window with the specified URL
    window.open(url, '_blank');
  };

  const onSocialIcons16Click = () => {
    openSocialLink('https://media.tenor.com/cCYaLli5PWwAAAAd/krissed-kris-jenner.gif');
  };

  const onSocialIcons17Click = () => {
    openSocialLink('https://media.tenor.com/cCYaLli5PWwAAAAd/krissed-kris-jenner.gif');
  };

  const onSocialIcons18Click = () => {
    openSocialLink('https://media.tenor.com/cCYaLli5PWwAAAAd/krissed-kris-jenner.gif');
  };

  const onSocialIcons19Click = () => {
    openSocialLink('https://media.tenor.com/cCYaLli5PWwAAAAd/krissed-kris-jenner.gif');
  };

  return (
    <div id="footer-section" className="footer">
      <div className="anima-landing-page">{`© 2023 Lost and Found Management System. `}</div>
      <div className="social-links4">
        <img
          className="social-icons12"
          alt=""
          src={socialicons7}
          onClick={onSocialIcons16Click}
        />
        <img
          className="social-icons12"
          alt=""
          src={socialicons8}
          onClick={onSocialIcons17Click}
        />
        <img
          className="social-icons12"
          alt=""
          src={socialicons9}
          onClick={onSocialIcons18Click}
        />
        <img
          className="social-icons12"
          alt=""
          src={socialicons10}
          onClick={onSocialIcons19Click}
        />
      </div>
    </div>
  );
};

export default Footer;
