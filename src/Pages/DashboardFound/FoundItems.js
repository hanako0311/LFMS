import "../../assets/Styles/FoundItems.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoundItems } from '../../actions/foundItemActions'
import TopMenu from "../../assets/navs/TopMenu/TopMenu";
import SideMenu from "../../assets/navs/SideMenu/SideMenu";

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

  const onHomePageClick = useCallback(() => {
    navigate("/home"); 
  }, [navigate]);

  const onReportLostClick = useCallback(() => {
    navigate("/report-lost-items"); 
  }, [navigate]); 

  const onReportFoundClick = useCallback(() => {
    navigate("/report-found-items"); 
  }, [navigate]);

  const onHistoryClick = useCallback(() => {
    navigate("/history"); 
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate("/profile"); 
  }, [navigate]);

  const onSignOutClick = useCallback(() => {
    navigate("/"); 
  }, [navigate]);

  const onFoundButtonClick = useCallback(() => {
    navigate("/dash-found-items"); 
  }, [navigate]);

  const onLostButtonClick = useCallback(() => {
    navigate("/home"); 
  }, [navigate]);

  return (
    <div>
      <TopMenu />
      <b className="dashboard-title">Dashboard</b>
      <div className="content">
        <div/>
        <div className="align">
          <button className="foundbtn" onClick={onFoundButtonClick}>
            <div className="content1">
              <div className="found-items-lbl">Found Items</div>
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
        <div>
          <div className="lost-items">Lost Items</div>
        </div>
        <b className="no-of-lost-items"></b>
      </button>
      <SideMenu />
    </div>
  );
};

export default FoundItems;