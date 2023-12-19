import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const onReportLostContainerClick = useCallback(() => {
    // Please sync "Report Lost Items" to the project
  }, []);

  const onReportFoundClick = useCallback(() => {
    // Please sync "Report Found Items" to the project
  }, []);

  const onProfileClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    // Please sync "Dashboard Found Items - Default" to the project
  }, []);

  const onImage5Click = useCallback(() => {
    // Please sync "History" to the project
  }, []);

  return (
    <div className="profile">
      <div className="card">
        <div className="background" />
        <Button
          className="editprofilebutton"
          sx={{ width: 218.7190399169922 }}
          color="primary"
          variant="contained"
        >
          EDIT PROFILE
        </Button>
        <div className="address">
          <div className="address1">Address</div>
          <div className="skina-ubec-ytic">Skina, Ubec Ytic</div>
        </div>
        <div className="email">
          <div className="address1">Email</div>
          <div className="skina-ubec-ytic">zara.w@schl.edu</div>
        </div>
        <div className="name">
          <div className="address1">Name</div>
          <div className="zara-wardani">Zara Wardani</div>
        </div>
        <img className="picture-icon" alt="" src="/picture@2x.png" />
      </div>
      <div className="top-menu">
        <div className="side-menu">
          <div className="bg" />
          <img className="side-menu-child" alt="" src="/line@2x.png" />
          <div className="nav">
            <div className="report-lost" onClick={onReportLostContainerClick}>
              <img className="group-icon" alt="" src="/group@2x.png" />
              <div className="search-dollar-search-pay-prod">
                <img
                  className="search-dollar-search-pay-prod-icon"
                  alt=""
                  src="/searchdollarsearchpayproductcurrencyquerymagnifyingcashbusinessmoneyglass@2x.png"
                />
                <b className="b">?</b>
              </div>
            </div>
            <img
              className="report-found-icon"
              alt=""
              src="/report-found@2x.png"
              onClick={onReportFoundClick}
            />
            <img
              className="profile-icon"
              alt=""
              src="/profile@2x.png"
              onClick={onProfileClick}
            />
            <img
              className="home-icon"
              alt=""
              src="/home@2x.png"
              onClick={onHomeClick}
            />
            <img
              className="image-5-icon"
              alt=""
              src="/image-5@2x.png"
              onClick={onImage5Click}
            />
          </div>
          <img className="subtract-icon" alt="" src="/subtract@2x.png" />
        </div>
        <div className="bg1" />
        <div className="search-bar">
          <div className="content">
            <img className="magnifier-icon" alt="" src="/magnifier@2x.png" />
            <div className="search-here">Search here...</div>
          </div>
        </div>
        <div className="user">
          <img className="placeholder-icon" alt="" src="/placeholder@2x.png" />
          <div className="name2">
            <b className="zara-wardani1">Zara Wardani</b>
            <div className="admin">Admin</div>
          </div>
        </div>
        <img className="lf-splash-1" alt="" src="/lf-splash-1@2x.png" />
      </div>
    </div>
  );
};

export default Profile;
