import axios from 'axios';
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/Styles/FoundItems.css";
import SideMenu from '../../assets/navs/SideMenu/SideMenu';
import TopMenu from '../../assets/navs/TopMenu/TopMenu';


const FoundItems = () => {
  const navigate = useNavigate();
  const [localFoundItems, setLocalFoundItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [FoundItems, setFoundItems] = useState([]);

  useEffect(() => {
    const fetchFoundItems = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/found-items`);
        setFoundItems(response.data);
      } catch (error) {
        console.error('Error fetching found items:', error);
      }
    };

    fetchFoundItems();
  }, []);

  const handleRemove = async (itemId) => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to delete this record?");
  
    // Check if the user clicked "OK" in the confirmation dialog
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:8080/found-items/${itemId}`);
        // Update the state to re-render without the removed item
        setFoundItems((prevItems) => prevItems.filter(item => item.id !== itemId));
      } catch (error) {
        console.error("Error removing lost item:", error);
      }
    }
  };

  // Compute filtered items on-the-fly based on searchQuery
  /*const filteredItems = localFoundItems.filter(item =>
    item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
  ); */

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
    navigate("/dash-lost-items"); 
  }, [navigate]);

  return (
    <div>
      <b className="dashboard-title">Dashboard</b>
      <div>
        <div />
        <div className="align-btn">
          <button className="foundbtn" onClick={onFoundButtonClick}>
            <div className="content1">
              <div className="found-items-lbl">Found Items</div>
            </div>
          </button>
        </div>
        <div className="cards-container">
            {FoundItems.map(item => (
              <div key={item.id} className="cards">
                <Link to={`/found-items/${item.id}`}>
                  <img
                      src={`http://localhost:8080/found-items${item.imagePath}`}
                      alt={item.itemDescription}
                      style={{ maxWidth: '1000px', maxHeight: '200px' }} // Set your desired dimensions
                  />
                  <p className="detail">Item Found: {item.itemFound}</p>
                  <p className="detail">Item Description: {item.itemDescription}</p>
                  <p className="detail">Location Found: {item.locationFound}</p>
                  <p className="detail">Date Found: {new Date(item.dateFound).toLocaleString()}</p>
                  <button className="button-remove" onClick={() => handleRemove(item.id)}>Remove</button>
                  </Link>
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
      <TopMenu />
       <SideMenu />
    </div>
  );
};

export default FoundItems;