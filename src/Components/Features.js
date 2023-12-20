import React from 'react';
import MagicWand from '../assets/images/magicwand.svg';
import BoundingBox from '../assets/images/boundingbox.svg';
import FlyingSaucer from '../assets/images/flyingsaucer.svg';
import Confetti from '../assets/images/confetti.svg';
import '../assets/Styles/Landing.css';

const FeaturesSection = () => {
  return (
    <div id="features-section" className="features">
      <div className="headline-subhead">
        <b className="meet-our-team">Features</b>
        <div className="few-good-reasons">
          These are just a few features you’ll get using Lost and Found Software.
        </div>
      </div>
      <div className="cards-row">
      <div className="feature-card">
            <div className="card-info">
              <div className="icon">
                <img className="magicwand-icon" alt="" src={MagicWand} />
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
                  src={BoundingBox}
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
                  src={FlyingSaucer}
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
                <img className="magicwand-icon" alt="" src={Confetti} />
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
  );
};

export default FeaturesSection;
