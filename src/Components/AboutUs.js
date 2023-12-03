import React from 'react';
import '../Landing/Landing.css';

const AboutUs = () => {
  // Array of team members
  const teamMembers = [
    {
      name: 'Hannah Restauro',
      imageUrl: '/profile-image-placeholder-1@2x.png',
      description: 'When things get worse, drink redhorse extra strong.',
      socialLinks: {
        twitter: 'https://twitter.com/ohhhannaahh',
        facebook: 'https://facebook.com/hnnhr03/',
        instagram: 'https://instagram.com/ohhhannaahh/'
      }
    },
    {
      name: 'Claude Babatid',
      imageUrl: '/profile-image-placeholder-11@2x.png',
      description: 'Coding with passion, building with purpose.',
      socialLinks: {
        twitter: 'https://twitter.com/claude',
        facebook: 'https://facebook.com/claude',
        instagram: 'https://instagram.com/claude'
      }
    },
    {
      name: 'John Joshua Jallorina',
      imageUrl: '/joshua.png',
      description: 'Innovation is the key to unlock potential.',
      socialLinks: {
        twitter: 'https://twitter.com/claude',
        facebook: 'https://facebook.com/claude',
        instagram: 'https://instagram.com/claude'
      }
    },
    {
      name: 'Denisse Avila',
      imageUrl: '/Denisse.png',
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
              src={member.imageUrl}
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
                src="/social-icons.svg"
                onClick={() => window.open(member.socialLinks.twitter)}
              />
              <img
                className="social-icons"
                alt="Facebook"
                src="/social-icons1.svg"
                onClick={() => window.open(member.socialLinks.facebook)}
              />
              <img
                className="social-icons"
                alt="Instagram"
                src="/social-icons2.svg"
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
