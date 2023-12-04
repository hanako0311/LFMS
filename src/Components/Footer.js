import React from 'react';
import '../Landing/Landing.css';

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
          src="/social-icons7.svg"
          onClick={onSocialIcons16Click}
        />
        <img
          className="social-icons12"
          alt=""
          src="/social-icons8.svg"
          onClick={onSocialIcons17Click}
        />
        <img
          className="social-icons12"
          alt=""
          src="/social-icons9.svg"
          onClick={onSocialIcons18Click}
        />
        <img
          className="social-icons12"
          alt=""
          src="/social-icons10.svg"
          onClick={onSocialIcons19Click}
        />
      </div>
    </div>
  );
};

export default Footer;
