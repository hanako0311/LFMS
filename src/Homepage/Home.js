import { useCallback } from "react";
import "./home.css";
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

const Home = () => {
  const navigate = useNavigate();

  const onHomePageClick = useCallback(() => {
    navigate("/home"); //mao ni para ma click ang icon
  }, [navigate]);

  const onUserContainerClick = useCallback(() => {

  }, []);
  const onContainer1Click = useCallback(() => {
    
  }, []);


  const onRectangle1Click = useCallback(() => {
    
  }, []);

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
        <div className="overview">
          <div className="col-1" />
          <div className="col-2">
            <button className="foundbtn" onClick={onFoundButtonClick}>
              <div className="content1">
                <div className="found-items">Found Items</div>
              </div>
              <b className="no-of-found-items"></b>
            </button>
          </div>
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
              <img
                className="search-dollar-search-pay-prod-icon"
                alt=""
                src={lost2}
              />
              <b className="b2">?</b>
            </div>
          </div>
          <img
            className="report-found-icon"
            alt=""
            src={found}
            onClick={onReportFoundClick}
          />
          <img
            className="profile-icon"
            alt=""
            src={profile}
            onClick={onProfileClick}
          />
          <img className="home-icon" alt="" src={home}  onClick={onHomePageClick} /> 
          <img className="image-5-icon" alt="" src={history} onClick={onHistoryClick} />
        </div>
        <img
          className="subtract-icon"
          alt=""
          src={back}
          onClick={onSignOutClick}
        />
      </div>
      <input
              className="search-bar"
              name="Search"
              placeholder="Search Here..."
              type="text"
            />
      <img className="lf-splash-1" alt="" src={logo} />
    </div>
  );
};

export default Home;