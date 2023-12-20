// TopMenu.js

import React, { useState } from 'react';
import '../../Styles/TopMenu.css';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from '../../images/LF-Header.png';

const TopMenu = ({ data }) => {
  // Debounce function to optimize search functionality
  const debounceSearch = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data || []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = filterData(query, data);
    setFilteredData(filtered);
  };

  const delayedSearch = debounceSearch(handleSearch, 300);

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => d.toLowerCase().includes(query.toLowerCase()));
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform any action on search submit if needed
    // For instance, fetch new data or trigger a search action
  };

  // const handleMailClick = () => {
  //   console.log('Mail icon clicked!');
  //   // Add your logic for handling mail icon click
  // };

  // const handleNotificationsClick = () => {
  //   console.log('Notifications icon clicked!');
  //   // Add your logic for handling notifications icon click
  // };

  const handleProfileClick = () => {
    console.log('Profile icon clicked!');
    // Add your logic for handling profile icon click
  };

  return (
    <div className="top-menu">
      <div className="left-section">
        <img
          src={logo}
          alt="LFMS"
          className="logo-image"
        />
      </div>
      <div className="center-section">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <TextField
            className="text"
            label="Search Here..."
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </form>
      </div>
      <div className="right-section">
        {/* <div className="icon-container" onClick={handleMailClick}>
          <MailIcon className="icon" />
        </div>
        <div className="icon-container" onClick={handleNotificationsClick}>
          <NotificationsIcon className="icon" />
        </div> */}
        <div className="profile-container" onClick={handleProfileClick}>
          <AccountCircleIcon className="profile-icon" />
          <div className="user-details">
            <b className="user-name">Zara Wardani</b>
            <div className="user-role">Admin</div>
          </div>
        </div>
      </div>
      <div className="filtered-data">
        {filteredData && filteredData.map((d) => (
          <div className="text" key={d.id}>
            {d}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMenu;
