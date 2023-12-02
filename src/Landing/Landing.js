import { useCallback } from "react";
import "./Landing.css";

const LandingPage = () => {
  const onButtonContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"
    );
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"
    );
  }, []);

  const onButtonContainer2Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"
    );
  }, []);

  const onButtonContainer3Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"
    );
  }, []);

  const onButtonContainer4Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"
    );
  }, []);

  const onButtonContainer5Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"
    );
  }, []);

  const onSocialIconsClick = useCallback(() => {
    window.open("https://twitter.com/animaapp");
  }, []);

  const onSocialIcons1Click = useCallback(() => {
    window.open("https://dribbble.com/animaapp");
  }, []);

  const onSocialIcons2Click = useCallback(() => {
    window.open("https://www.instagram.com/animaapp/");
  }, []);

  const onSocialIcons3Click = useCallback(() => {
    window.open("https://twitter.com/animaapp");
  }, []);

  const onSocialIcons4Click = useCallback(() => {
    window.open("https://dribbble.com/animaapp");
  }, []);

  const onSocialIcons5Click = useCallback(() => {
    window.open("https://www.instagram.com/animaapp/");
  }, []);

  const onSocialIcons6Click = useCallback(() => {
    window.open("https://twitter.com/animaapp");
  }, []);

  const onSocialIcons7Click = useCallback(() => {
    window.open("https://dribbble.com/animaapp");
  }, []);

  const onSocialIcons8Click = useCallback(() => {
    window.open("https://www.instagram.com/animaapp/");
  }, []);

  const onSocialIcons9Click = useCallback(() => {
    window.open("https://twitter.com/animaapp");
  }, []);

  const onSocialIcons10Click = useCallback(() => {
    window.open("https://dribbble.com/animaapp");
  }, []);

  const onSocialIcons11Click = useCallback(() => {
    window.open("https://www.instagram.com/animaapp/");
  }, []);

  const onButtonContainer6Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"
    );
  }, []);

  const onSocialIcons12Click = useCallback(() => {
    window.open("https://www.instagram.com/animaapp/");
  }, []);

  const onSocialIcons13Click = useCallback(() => {
    window.open("https://dribbble.com/animaapp");
  }, []);

  const onSocialIcons14Click = useCallback(() => {
    window.open("https://www.behance.net/Anima_design");
  }, []);

  const onSocialIcons15Click = useCallback(() => {
    window.open("https://twitter.com/animaapp");
  }, []);

  const onButtonContainer7Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"
    );
  }, []);

  const onSocialIcons16Click = useCallback(() => {
    window.open("https://www.youtube.com/c/Animaapp");
  }, []);

  const onSocialIcons17Click = useCallback(() => {
    window.open("https://www.instagram.com/animaapp/");
  }, []);

  const onSocialIcons18Click = useCallback(() => {
    window.open("https://github.com/AnimaApp");
  }, []);

  const onSocialIcons19Click = useCallback(() => {
    window.open("https://www.linkedin.com/company/anima-app");
  }, []);

  return (
    <div className="landingpage">
      <div className="navbar">
        <div className="logo">
          <img className="logo-mark-icon" alt="" src="../assets/logo-mark.svg" />
          <img className="lf-splash-1" alt="" src="assets/lf-splash-1@2x.png" />
          <b className="landingpage1">LFMS</b>
        </div>
        <div className="navigation-menu">
          <div className="button" onClick={onButtonContainerClick}>
            <img className="arrowright-icon" alt="" src="/arrowright.svg" />
            <div className="label">How it works</div>
            <img className="arrowright-icon" alt="" src="/arrowright.svg" />
          </div>
          <div className="button" onClick={onButtonContainer1Click}>
            <img className="arrowright-icon" alt="" src="/arrowright.svg" />
            <div className="label">Menu 2</div>
            <img className="arrowright-icon" alt="" src="/arrowright.svg" />
          </div>
          <div className="button2" onClick={onButtonContainer2Click}>
            <img className="arrowright-icon" alt="" src="/arrowright.svg" />
            <div className="label">Home</div>
            <img className="arrowright-icon" alt="" src="/arrowright.svg" />
          </div>
          <div className="button2" onClick={onButtonContainer3Click}>
            <img className="arrowright-icon" alt="" src="/arrowright.svg" />
            <div className="label">Features</div>
            <img className="arrowright-icon" alt="" src="/arrowright.svg" />
          </div>
          <div className="label">About Us</div>
          <div className="label">Contact Us</div>
          <div className="button4" onClick={onButtonContainer4Click}>
            <img className="arrowright-icon" alt="" src="/rocketlaunch.svg" />
            <div className="label">Login</div>
            <img className="arrowright-icon" alt="" src="/arrowright1.svg" />
          </div>
        </div>
      </div>
      <div className="hero-section">
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
              <img className="user-icon" alt="" src="/rocketlaunch1.svg" />
              <div className="label">Get Started</div>
              <img className="arrowright-icon" alt="" src="/arrowleft.svg" />
            </div>
          </div>
        </div>
        <img className="visuals-icon" alt="" src="/visuals.svg" />
      </div>
      <div className="features">
        <div className="headline-subhead">
          <b className="meet-our-team">Features</b>
          <div className="few-good-reasons">
            These are just a few features you’ll get using Lost and Found
            Software.
          </div>
        </div>
        <div className="cards-row">
          <div className="feature-card">
            <div className="card-info">
              <div className="icon">
                <img className="magicwand-icon" alt="" src="/magicwand.svg" />
              </div>
              <div className="text">
                <div className="user-friendly-reporting">
                  User-Friendly Reporting
                </div>
                <div className="allows-users-to">
                  Allows users to easily report lost items with descriptions and
                  photos.
                </div>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="card-info">
              <div className="icon1">
                <img
                  className="boundingbox-icon"
                  alt=""
                  src="/boundingbox.svg"
                />
              </div>
              <div className="text">
                <div className="user-friendly-reporting">
                  <p className="searchable">Searchable</p>
                  <p className="searchable"> Database</p>
                </div>
                <div className="allows-users-to">
                  Features a real-time, searchable database for lost and found
                  items.
                </div>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="card-info">
              <div className="icon2">
                <img
                  className="boundingbox-icon"
                  alt=""
                  src="/flyingsaucer.svg"
                />
              </div>
              <div className="text">
                <div className="user-friendly-reporting">
                  Efficient Item Categorization
                </div>
                <div className="allows-users-to">
                  {" "}
                  Enables quick and efficient categorization of lost items for
                  easier retrieval.
                </div>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="card-info">
              <div className="icon3">
                <img className="magicwand-icon" alt="" src="/confetti.svg" />
              </div>
              <div className="text">
                <div className="user-friendly-reporting">
                  Community Interaction
                </div>
                <div className="allows-users-to">
                  Facilitates community engagement within the university for
                  better collaboration in finding lost items.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="headline-subhead">
          <b className="meet-our-team">Meet our team</b>
          <div className="few-good-reasons">
            Get to know the faces behind the scenes and learn about the values
            that drive us.
          </div>
        </div>
        <div className="cards-row1">
          <div className="member-card">
            <img
              className="profile-image-placeholder-1"
              alt=""
              src="/profile-image-placeholder-1@2x.png"
            />
            <div className="text4">
              <div className="hannah-restauro">Hannah Restauro</div>
              <div className="when-things-get">
                When things get worse, drink redhorse
              </div>
            </div>
            <div className="social-links">
              <img
                className="social-icons"
                alt=""
                src="/social-icons.svg"
                onClick={onSocialIconsClick}
              />
              <img
                className="social-icons"
                alt=""
                src="/social-icons1.svg"
                onClick={onSocialIcons1Click}
              />
              <img
                className="social-icons"
                alt=""
                src="/social-icons2.svg"
                onClick={onSocialIcons2Click}
              />
            </div>
          </div>
          <div className="member-card">
            <img
              className="profile-image-placeholder-1"
              alt=""
              src="/profile-image-placeholder-11@2x.png"
            />
            <div className="text4">
              <div className="hannah-restauro">Claude Babatid</div>
              <div className="when-things-get">
                When things get worse, drink redhorse
              </div>
            </div>
            <div className="social-links">
              <img
                className="social-icons"
                alt=""
                src="/social-icons.svg"
                onClick={onSocialIcons3Click}
              />
              <img
                className="social-icons"
                alt=""
                src="/social-icons1.svg"
                onClick={onSocialIcons4Click}
              />
              <img
                className="social-icons"
                alt=""
                src="/social-icons2.svg"
                onClick={onSocialIcons5Click}
              />
            </div>
          </div>
          <div className="member-card">
            <img
              className="profile-image-placeholder-1"
              alt=""
              src="/profile-image-placeholder-12@2x.png"
            />
            <div className="text4">
              <div className="hannah-restauro">John Joshua Jallorina</div>
              <div className="when-things-get">
                When things get worse, drink redhorse
              </div>
            </div>
            <div className="social-links">
              <img
                className="social-icons"
                alt=""
                src="/social-icons.svg"
                onClick={onSocialIcons6Click}
              />
              <img
                className="social-icons"
                alt=""
                src="/social-icons1.svg"
                onClick={onSocialIcons7Click}
              />
              <img
                className="social-icons"
                alt=""
                src="/social-icons2.svg"
                onClick={onSocialIcons8Click}
              />
            </div>
          </div>
          <div className="member-card">
            <img
              className="profile-image-placeholder-1"
              alt=""
              src="/profile-image-placeholder-13@2x.png"
            />
            <div className="text4">
              <div className="hannah-restauro">Denisse Avila</div>
              <div className="when-things-get">
                When things get worse, drink redhorse
              </div>
            </div>
            <div className="social-links">
              <img
                className="social-icons"
                alt=""
                src="/social-icons.svg"
                onClick={onSocialIcons9Click}
              />
              <img
                className="social-icons"
                alt=""
                src="/social-icons1.svg"
                onClick={onSocialIcons10Click}
              />
              <img
                className="social-icons"
                alt=""
                src="/social-icons2.svg"
                onClick={onSocialIcons11Click}
              />
            </div>
          </div>
        </div>
      </div>
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
      <div className="contact-form">
        <div className="contact-form1">
          <div className="header3">
            <div className="headline-subhead2">
              <b className="lets-get-in">Let’s get in touch!</b>
              <div className="got-questions-about">
                Questions about LF Software? Contact our team for quick,
                friendly support.
              </div>
            </div>
          </div>
          <div className="header4">
            <div className="contact-details">
              <div className="input-fields-button">
                <div className="phone">
                  <img className="phonecall-icon" alt="" src="/phonecall.svg" />
                  <div className="div">+63 966 4635 268</div>
                </div>
                <div className="phone">
                  <img
                    className="phonecall-icon"
                    alt=""
                    src="/envelopesimple.svg"
                  />
                  <div className="div">lfms@gmail.com</div>
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
                  <div className="div">Full Name</div>
                </div>
                <div className="input-field">
                  <div className="icon4">
                    <img
                      className="user-icon"
                      alt=""
                      src="/envelopesimple1.svg"
                    />
                    <div className="divider" />
                  </div>
                  <div className="div">Email</div>
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
      <div className="footer">
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
    </div>
  );
};

export default LandingPage;
