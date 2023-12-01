import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import "./profile.css";

const Profile = () => {
    const navigate = useNavigate();

   /* const onHomePageClick = useCallback(() => {
        navigate("/home"); 
      }, [navigate]);
    
      const onReportLostClick = useCallback(() => {
        navigate("/report-lost-items"); 
      }, [navigate]);
    const onReportFoundClick = useCallback(() => {
        navigate("/report-found-items"); 
      }, [navigate]);
    
      const onSignOutClick = useCallback(() => {
        navigate("/"); 
      }, [navigate]); */

  return (
    <div className="profile">
      <img className="top-menu-icon" alt="" src="/top-menu.svg" />
      <img className="report-found-icon" alt="" src="/report-found.svg" />
      <div className="report-lost">
        <img className="group-icon" alt="" src="/group.svg" />
        <div className="search-dollar-search-pay-prod">
          <img
            className="search-dollar-search-pay-prod-icon"
            alt=""
            src="/searchdollarsearchpayproductcurrencyquerymagnifyingcashbusinessmoneyglass.svg"
          />
          <b className="b">?</b>
        </div>
      </div>
      <div className="top-menu">
        <div className="bg" />
      </div>
      <img className="lf-splash-5" alt="" src="/lf-splash-5@2x.png" />
      <div className="search-bar">
        <div className="content">
          <img className="magnifier-icon" alt="" src="/magnifier.svg" />
          <div className="search-here">Search here...</div>
        </div>
      </div>
      <div className="card">
        <div className="background" />
        <div className="button">
          <div className="button-child" />
          <div className="edit-profile">EDIT PROFILE</div>
        </div>
        <div className="info">
          <div className="name">Name</div>
          <div className="john-doe">John Doe</div>
        </div>
        <div className="info1">
          <div className="name">Email</div>
          <div className="johndoegmailcom">johndoe@gmail.com</div>
        </div>
        <div className="info2">
          <div className="name">Address</div>
          <div className="johndoegmailcom">Skina, Ubec Ytic</div>
        </div>
      </div>
      <img className="profile-child" alt="" src="/group-34.svg" />
    </div>
  );
};

export default Profile;
