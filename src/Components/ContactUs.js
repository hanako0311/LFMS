import React from 'react';

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
                <img className="phonecall-icon" alt="" src="/phonecall.svg" />
                <div style={{ marginLeft: '8px' }}>+63 966 4635 268</div>
              </div>
              <div className="phone" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <img className="phonecall-icon" alt="" src="/envelopesimple.svg" />
                <div style={{ marginLeft: '8px' }}>lfms@gmail.com</div>
              </div>
            </div>
            <div className="social-media">
              <div className="connect-with-us">Connect with us</div>
              <div className="social-links4">
                <img
                  className="social-icons12"
                  alt=""
                  src="/social-icons3.svg"
                  onClick={onSocialIcons12Click}
                />
                <img
                  className="social-icons12"
                  alt=""
                  src="/social-icons4.svg"
                  onClick={onSocialIcons13Click}
                />
                <img
                  className="social-icons14"
                  alt=""
                  src="/social-icons5.svg"
                  onClick={onSocialIcons14Click}
                />
                <img
                  className="social-icons12"
                  alt=""
                  src="/social-icons6.svg"
                  onClick={onSocialIcons15Click}
                />
              </div>
            </div>
          </div>
          <div className="input-fields-button">
            <div className="input-fields">
              <div className="input-field">
                <div className="icon4">
                  <img className="user-icon" alt="" src="/user.svg" />
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
                  <img className="user-icon" alt="" src="/envelopesimple1.svg" />
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
              <img className="arrowright-icon" alt="" src="/arrowleft.svg" />
              <div className="label">Submit</div>
              <img className="arrowright-icon" alt="" src="/arrowleft.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
