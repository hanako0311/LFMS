import React from 'react';
import phonecall from '../assets/images/phonecall.svg';
import envelope from '../assets/images/envelopesimple.svg';
import socialicons3 from '../assets/images/social-icons3.svg';
import socialicons4 from '../assets/images/social-icons4.svg';
import socialicons5 from '../assets/images/social-icons5.svg';
import socialicons6 from '../assets/images/social-icons6.svg';
import arrowleft from '../assets/images/arrowleft.svg';
import user from '../assets/images/user.svg';
import envelopesimple1 from '../assets/images/envelopesimple1.svg';
import '../assets/Styles/Landing.css';


const ContactUs = () => {
  const onSocialIcons12Click = () => {
    window.open('https://media.tenor.com/cCYaLli5PWwAAAAd/krissed-kris-jenner.gif');
  };

  const onSocialIcons13Click = () => {
    window.open('https://media.tenor.com/cCYaLli5PWwAAAAd/krissed-kris-jenner.gif');
  };

  const onSocialIcons14Click = () => {
    window.open('https://media.tenor.com/cCYaLli5PWwAAAAd/krissed-kris-jenner.gif');
  };

  const onSocialIcons15Click = () => {
    window.open('https://media.tenor.com/cCYaLli5PWwAAAAd/krissed-kris-jenner.gif');
  };

  const onButtonContainer7Click = () => {
    window.open('https://media.tenor.com/cCYaLli5PWwAAAAd/krissed-kris-jenner.gif');
  };

  return (
    <div id="contact-section" className="contact-form">
      <div className="contact-form1">
        <div className="header3">
          <div className="headline-subhead2">
            <b className="lets-get-in">Let’s get in touch!</b>
            <div className="got-questions-about">
              Questions about LF Software? Contact our team for quick, friendly support.
            </div>
          </div>
        </div>
        <div className="header4">
          <div className="contact-details">
            <div className="input-fields-button">
              <div className="phone" style={{ display: 'flex', alignItems: 'center' }}>
                <img className="phonecall-icon" alt="" src={phonecall} />
                <div style={{ marginLeft: '8px' }}>+63 966 4635 268</div>
              </div>
              <div className="phone" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <img className="phonecall-icon" alt="" src={envelope} />
                <div style={{ marginLeft: '8px' }}>lfms@gmail.com</div>
              </div>
            </div>
            <div className="social-media">
              <div className="connect-with-us">Connect with us</div>
              <div className="social-links4">
                <img
                  className="social-icons12"
                  alt=""
                  src={socialicons3}
                  onClick={onSocialIcons12Click}
                />
                <img
                  className="social-icons12"
                  alt=""
                  src={socialicons4}
                  onClick={onSocialIcons13Click}
                />
                <img
                  className="social-icons14"
                  alt=""
                  src={socialicons5}
                  onClick={onSocialIcons14Click}
                />
                <img
                  className="social-icons12"
                  alt=""
                  src={socialicons6}
                  onClick={onSocialIcons15Click}
                />
              </div>
            </div>
          </div>
          <div className="input-fields-button">
            <div className="input-fields">
              <div className="input-field">
                <div className="icon4">
                  <img className="user-icon" alt="" src={user} />
                  <div className="divider" />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  style={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '8px',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div className="input-field">
                <div className="icon4">
                  <img className="user-icon" alt="" src={envelopesimple1} />
                  <div className="divider" />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  style={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '8px',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
            <div className="button7" onClick={onButtonContainer7Click}>
              <img className="arrowright-icon" alt="" src={arrowleft} />
              <div className="label">Submit</div>
              <img className="arrowright-icon" alt="" src={arrowleft} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
