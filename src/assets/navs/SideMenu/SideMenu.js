import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../../Styles/SideMenu.css';
import homeIcon from '../../../assets/images/homebtn.svg';
import userIcon from '../../../assets/images/userbtn.svg';
import foundIcon from '../../../assets/images/report found.png';
import lostIcon from '../../../assets/images/report lost.png';
import historyIcon from '../../../assets/images/history-btn.png';
import signoutIcon from '../../../assets/images/Subtract.png';

const SideMenu = () => {

  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const navigate = useNavigate(); // Initializing the navigate function from react-router-dom

  const handleNavigation = (path) => {
    navigate(path); // Function to navigate to a specific path when an icon is clicked
  };

  return (
    <SideNav className={`custom-side-menu ${collapsed ? 'collapsed' : ''}`}>
      <SideNav.Toggle onClick={handleToggle} />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home" onClick={() => handleNavigation('/home')}>
          <NavIcon>
            <img src={homeIcon} alt="Home" style={{ width: '1.75em' }} />
          </NavIcon>
          <NavText>
            Home
          </NavText>
        </NavItem>
        <NavItem eventKey="profile" onClick={() => handleNavigation('/profile')}>
          <NavIcon>
            <img src={userIcon} alt="Profile" style={{ width: '1.75em' }} />
          </NavIcon>
          <NavText>
            Profile
          </NavText>
        </NavItem>
        <NavItem eventKey="report-found-items" onClick={() => handleNavigation('/report-found-items')}>
          <NavIcon>
            <img src={foundIcon} alt="Report Found Items" style={{ width: '1.75em' }} />
          </NavIcon>
          <NavText>
            Report Found Items
          </NavText>
        </NavItem>
        <NavItem eventKey="report-lost-items" onClick={() => handleNavigation('/report-lost-items')}>
          <NavIcon>
            <img src={lostIcon} alt="Report Found Items" style={{ width: '1.75em' }} />
          </NavIcon>
          <NavText>
            Report Found Items
          </NavText>
        </NavItem>
        <NavItem eventKey="history" onClick={() => handleNavigation('/history')}>
          <NavIcon>
            <img src={historyIcon} alt="Report Lost Items" style={{ width: '1.75em' }} />
          </NavIcon>
          <NavText>
            History
          </NavText>
        </NavItem>
        <NavItem eventKey="signout" onClick={() => handleNavigation('/login')}>
          <NavIcon>
            <img src={signoutIcon} alt="SignOut" style={{ width: '1.75em' }} />
          </NavIcon>
          <NavText>
            Sign Out
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideMenu;