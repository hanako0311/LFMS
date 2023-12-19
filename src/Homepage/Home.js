import { useCallback } from "react";
import lost1 from './Group.png';
import logo from './LF splash 1.png';
import back from './Subtract.png';
import "./home.css";
import history from './image 5.png';
import profile from './profile.png';
import found from './report found.png';
import lost2 from './search.png';


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

  const onFoundButtonClick = useCallback(() => {
    navigate("/dash-found-items"); //mao ni para ma click ang icon
  }, [navigate]);

  const onLostButtonClick = useCallback(() => {
    navigate("/home"); //mao ni para ma click ang icon
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
    </div>
  );
};

export default Home;
