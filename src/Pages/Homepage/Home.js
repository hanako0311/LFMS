import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/Styles/TopMenu.css";
import TopMenu from "../../assets/navs/TopMenu/TopMenu";
import SideMenu from "../../assets/navs/SideMenu/SideMenu";


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
    navigate("/history"); //mao ni para ma click ang icon
  }, [navigate]);

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
      <TopMenu />
      <SideMenu />
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
    </div>
    </div>
  );
};

export default Home;