import { useCallback } from "react";
import "./DashboardLostItems.css";
import logo from './LF splash 1.png';
import home from './Home.png';
import profile from './profile.png';
import found from './report found.png';
import lost from './report lost.png'
import history from './image 5.png';
import back from './Subtract.png';

const DashboardLostItems = () => {
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
    <div className="dashboard-lost-items">
      <div className="top-menudashlost">
        <div className="bgdashlost" />
        <div className="userdashlost" onClick={onUserContainerClick}>
          <img className="placeholder-icon" alt="" src="/placeholder@2x.png" />
          <div className="name">
            <b className="zara-wardani">Zara Wardani</b>
            <div className="admin">Admin</div>
          </div>
        </div>
        <input
          className="search-bar"
          name="Search"
          placeholder="Search here..."
          type="text"
          onClick={onSearchBarClick}
        />
      </div>
      <div className="side-menu">
        
        <div className="nav">
          <div className="report-lost" onClick={onReportLostContainerClick}>
            <img className="group-icon" alt="" src={lost} />
          </div>
          <div className="report-found">
            <button className="group" id="report found">
              <img className="vector-icon" alt="" src={found} />
              <img className="vector-icon1" alt="" src="/vector1.svg" />
            </button>
          </div>
          <button className="profile" id="profile">
            <img className="profile-child" alt="" src={profile} />
          </button>
          <button className="home" id="home" onClick={onHomeClick}>
            <img className="vector-icon2" alt="" src={home} />
          </button>
          <button className="view-history" id="history" >
            <img src={history} alt="History" />
            <img className="subtract-icondashlost" alt="" src={back} />
          </button>
            
        </div>
        <img
          className="lf-splash-5"
          alt=""
          src={logo}
          onClick={onLFSplash5Click}
        />
      </div>
      <b className="dashboard">Dashboard</b>
      <div className="content">
        <div className="overview">
          <button className="buttondashlost" onClick={onButtonClick}>
            <div className="content1">
              <div className="found-itemsdashlost">Found Items</div>
            </div>
            <b className="b1dashlost">15</b>
          </button>
        </div>
      </div>
      <div className="divdashlost">
        <div className="content2">
          <div className="lost-itemsdashlost">Lost Items</div>
        </div>
        <b className="b2dashlost">34</b>
      </div>
    </div>
  );
};

export default DashboardLostItems;
