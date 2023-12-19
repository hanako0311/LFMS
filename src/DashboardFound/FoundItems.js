import "./FoundItems.css";
import userImage from './Placeholder.png';
import logo from './LF splash 1.png';
import home from './Home.png';
import profile from './profile.png';
import found from './report found.png';
import lost1 from './Group.png';
import lost2 from './search.png';
import history from './image 5.png';
import back from './Subtract.png';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoundItems } from '../actions/foundItemActions';

const FoundItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [localFoundItems, setLocalFoundItems] = useState([]);
  const reduxFoundItems = useSelector(state => state.foundItem.items);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/found-items');
        setLocalFoundItems(response.data);
      } catch (error) {
        console.error('Error fetching found items:', error);
      }
    };

    fetchItems();
    dispatch(fetchFoundItems());
  }, [dispatch]);

  // Compute filtered items on-the-fly based on searchQuery
  const filteredItems = localFoundItems.filter(item =>
    item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
  );

/*const FoundItems = () => {
  const navigate = useNavigate();
  const [foundItems, setFoundItems] = useState([]);

  const dispatch = useDispatch();
   foundItems = useSelector(state => state.foundItem.items); 
   
     useEffect(() => {
    const fetchFoundItems = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('http://localhost:8080/found-items');
        setFoundItems(response.data); // Assuming the response data is the array of found items
      } catch (error) {
        console.error('Error fetching found items:', error);
      }
    };

    fetchFoundItems();
  }, []);


    useEffect(() => {
      dispatch(fetchFoundItems());
    }, [dispatch]); 
*/

const onUserContainerClick = useCallback(() => {

}, []);

  const onHomePageClick = useCallback(() => {
    navigate("/home"); //mao ni para ma click ang icon
  }, [navigate]);

  const onReportLostClick = useCallback(() => {
    navigate("/report-lost-items");  //mao ni para ma click ang icon
  }, [navigate]); 

  const onReportFoundClick = useCallback(() => {
    navigate("/report-found-items"); //mao ni para ma click ang icon
  }, [navigate]);

  const onHistoryClick = useCallback(() => {

  }, []);

  const onProfileClick = useCallback(() => {
    navigate("/profile"); //mao ni para ma click ang icon
  }, [navigate]);

  const onSignOutClick = useCallback(() => {
    navigate("/"); //mao ni para ma click ang icon
  }, [navigate]);

  const onSearchBarContainerClick = useCallback(() => {
    // Please sync "Search item" to the project
  }, []);

  const onFoundButtonClick = useCallback(() => {
    navigate("/dash-found-items"); //mao ni para ma click ang icon
  }, [navigate]);

  const onLostButtonClick = useCallback(() => {
    navigate("/home"); //mao ni para ma click ang icon
  }, [navigate]);

  return (
    <div className="dashboard-found-items-defaul">
      <div className="top-menu">
        <div className="bg3" />
        <img className="top-menu-child" alt="" src="/line.svg" />
        <div className="user1" onClick={onUserContainerClick}>
          <img className="placeholder-icon" alt="" src={userImage} />
          <div className="name">
            <b className="zara-wardani">Zara Wardani</b>
            <div className="admin">Admin</div>
          </div>
        </div>
      </div>
      <b className="dashboard">Dashboard</b>
      <div className="content">
        <div className="col-1" />
        <div className="col-2">
          <button className="foundbtn" onClick={onFoundButtonClick}>
            <div className="content1">
              <div className="found-items">Found Items</div>
            </div>
            <b className="no-of-found-items"></b>
          </button>
        </div>
        {/* Render items based on filteredItems */}
      <div className="cards-container">
        {filteredItems.map((item, index) => (
          <div key={index} className="card">
            <div className="title">{item.itemName}</div>
            <div className="desc">{item.itemDescription}</div>
            <div>Found in {item.locationFound}</div>
            <div>{new Date(item.dateFound).toLocaleDateString()}</div>
            <div className="card-actions">
              <button className="claim-button">Claim</button>
              <button className="delete-button">X</button>
            </div>
          </div>
        ))}
      </div>
      </div>
      <button className="lostbtn" onClick={onLostButtonClick}>
        <div className="content2">
          <div className="lost-items">Lost Items</div>
        </div>
        <b className="no-of-lost-items"></b>
      </button>
      <div className="top-menu1">
        <div className="sidebar" />
        <div className="nav">
          <div className="report-lost" onClick={onReportLostClick}>
            <img className="group-icon" alt="" src={lost1} />
            <div className="search-dollar-search-pay-prod">
              <img className="search-dollar-search-pay-prod-icon" alt="" src={lost2} />
              <b className="b2">?</b>
            </div>
          </div>
          <img className="report-found-icon" alt="" src={found} onClick={onReportFoundClick} />
          <img className="profile-icon" alt="" src={profile} onClick={onProfileClick} />
          <img className="home-icon" alt="" src={home} onClick={onHomePageClick} />
          <img className="image-5-icon" alt="" src={history} onClick={onHistoryClick} />
        </div>
        <img className="subtract-icon" alt="" src={back} onClick={onSignOutClick} />
      </div>
      <div className="search-bar-container">
        <input
          className="search-bar"
          name="Search"
          placeholder="Search Here..."
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
       </div>
       <img className="lf-splash-1" alt="" src={logo} />
    </div>
  );
};

export default FoundItems;