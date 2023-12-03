import { useCallback } from "react";
import home from './Home.png';
import logo from './LF splash 1.png';
import back from './Subtract.png';
import "./home.css";
import history from './image 5.png';
import profile from './profile.png';
import found from './report found.png';
import lost from './report lost.png';

const Home = () => {
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
      <div className="top-menu">
        <div className="bghome" />
        <div className="userhome" onClick={onUserContainerClick}>
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
          <button className="button" onClick={onButtonClick}>
            <div className="content1">
              <div className="found-items">Found Items</div>
            </div>
            <b className="b1">15</b>
          </button>
        </div>
      </div>
      <div className="div">
        <div className="content2">
          <div className="lost-items">Lost Items</div>
        </div>
        <b className="b2">34</b>
      </div>
    </div>
  );
};

export default Home;
