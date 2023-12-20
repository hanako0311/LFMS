import React from 'react';
import '../assets/Styles/Landing.css';
// Import the images here
import hannah from '../assets/images/Hannah.jpg';
import claude from '../assets/images/Claude.png';
import joshua from '../assets/images/joshua.png';
import denisse from '../assets/images/Denisse.png';
import twitter from '../assets/images/twitter.svg';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';

const AboutUs = () => {
  // Array of team members
  const teamMembers = [
    {
      name: 'Hannah Restauro',
      imageUrl: hannah, // Use the imported variable here
      description: 'When things get worse, drink redhorse extra strong.',
      socialLinks: {
        twitter: 'https://twitter.com/ohhhannaahh',
        facebook: 'https://facebook.com/hnnhr03/',
        instagram: 'https://instagram.com/ohhhannaahh/'
      }
    },
    {
      name: 'Claude Babatid',
      imageUrl: claude, // Use the imported variable here
      description: 'Coding with passion, building with purpose.',
      socialLinks: {
        twitter: 'https://twitter.com/claude',
        facebook: 'https://facebook.com/claude',
        instagram: 'https://instagram.com/claude'
      }
    },
    {
      name: 'John Joshua Jallorina',
      imageUrl: joshua, // Use the imported variable here
      description: 'Innovation is the key to unlock potential.',
      socialLinks: {
        twitter: 'https://twitter.com/claude',
        facebook: 'https://facebook.com/claude',
        instagram: 'https://instagram.com/claude'
      }
    },
    {
      name: 'Denisse Avila',
      imageUrl: denisse, // Use the imported variable here
      description: 'Designing with empathy, leading with integrity.',
      socialLinks: {
        twitter: 'https://twitter.com/claude',
        facebook: 'https://facebook.com/claude',
        instagram: 'https://instagram.com/claude'
      }
    },
  ];

  return (
    <div id="team-section" className="team">
      <div className="headline-subhead">
        <b className="meet-our-team">Meet our team</b>
        <div className="few-good-reasons">
          Get to know the faces behind the scenes and learn about the values that drive us.
        </div>
      </div>
      <div className="cards-row1">
        {teamMembers.map(member => (
          <div className="member-card" key={member.name}>
            <img
              className="profile-image-placeholder-1"
              alt={member.name}
              src={member.imageUrl} // Use the imageUrl property here
            />
            <div className="text4">
              <div className="hannah-restauro">{member.name}</div>
              <div className="when-things-get">
              {member.description}
              </div>
            </div>
            <div className="social-links">
              <img
                className="social-icons"
                alt="Twitter"
                src={twitter}
                onClick={() => window.open(member.socialLinks.twitter)}
              />
              <img
                className="social-icons"
                alt="Facebook"
                src={facebook}
                onClick={() => window.open(member.socialLinks.facebook)}
              />
              <img
                className="social-icons"
                alt="Instagram"
                src={instagram}
                onClick={() => window.open(member.socialLinks.instagram)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
