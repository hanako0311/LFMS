import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import "../../assets/Styles/DashboardLostItems.css";
import TopMenu from "../../assets/navs/TopMenu/TopMenu";
import SideMenu from "../../assets/navs/SideMenu/SideMenu";

const DashboardLostItems = () => {
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchLostItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/lost-items");
        setLostItems(response.data);
      } catch (error) {
        console.error("Error fetching lost items:", error);
      }
    };

    // Call the fetch function
    fetchLostItems();
  }, []); // The empty dependency array ensures that this effect runs only once

  const handleRemove = async (itemId) => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to delete this record?");
  
    // Check if the user clicked "OK" in the confirmation dialog
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:8080/lost-items/${itemId}`);
        // Update the state to re-render without the removed item
        setLostItems((prevItems) => prevItems.filter(item => item.id !== itemId));
      } catch (error) {
        console.error("Error removing lost item:", error);
      }
    }
  };
  


  const onUserContainerClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onSearchBarClick = useCallback(() => {
    // Please sync "Search item" to the project
  }, []);

  const onReportLostContainerClick = useCallback(() => {
    // Please sync "Report Lost Items" to the project
  }, []);

  const onHomeClick = useCallback(() => {
    // Please sync "Dashboard Found Items - Default" to the project
  }, []);

  const onLFSplash5Click = useCallback(() => {
    // Please sync "Dashboard Found Items - Default" to the project
  }, []);

  const onButtonClick = useCallback(() => {
    // Please sync "Dashboard Found Items - Default" to the project
  }, []);

  return (
    <div className="dashboard-container">
    <TopMenu /> {/* Include the TopMenu component */}
    <SideMenu /> {/* Include the SideMenu component */}
    <div className="dashboard-lost-items">
      <b className="dashboard">Dashboard</b>
        <button className="buttondashlost" onClick={onButtonClick}>
            <div className="content1">
              <div className="found-itemsdashlost">Found Items</div>
            </div>
            <b className="b1dashlost"></b>
          </button>
          <div className="lost-items-container">
            {lostItems.map(item => (
              <div key={item.id} className="lost-item">
                  <img
                      src={`http://localhost:8080/lost-items${item.imagePath}`}
                      alt={item.itemDescription}
                      style={{ maxWidth: '1000px', maxHeight: '200px' }} // Set your desired dimensions
                  />
                  <p className="detail">Item Lost: {item.itemFound}</p>
                  <p className="detail">Item Description: {item.itemDescription}</p>
                  <p className="detail">Location Lost: {item.locationFound}</p>
                  <p className="detail">Date Lost: {new Date(item.dateFound).toLocaleString()}</p>
                  <button className="button-remove" onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            ))}
        </div>
      <div className="divdashlost">
        <div className="content2">
          <div className="lost-itemsdashlost">Lost Items</div>
        </div>
        <b className="b2dashlost"></b>
      </div>
    </div>
  </div>
  );  
};

export default DashboardLostItems;
