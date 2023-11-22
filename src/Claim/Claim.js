import { useCallback } from "react";
import "./Claim.css";

const Claim = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "Claim Item Verification Owner Side" to the project
  }, []);

  const onHomeClick = useCallback(() => {
    // Please sync "Dashboard Found Items - Default" to the project
  }, []);

  const onLogoImageClick = useCallback(() => {
    // Please sync "Dashboard Found Items - Default" to the project
  }, []);

  return (
    <div className="claim">
        <div className="top-menu">
          <div className="bg" />
          <div className="user">
            <img className="placeholder-icon" alt="" src="Placeholder.png" />
            <div className="name">
              <b className="username">Zara Wardani</b>
              <div className="user-type">Admin</div>
            </div>
          </div>
          <input
              className="searchtext"
              name="Search"
              placeholder="Search Here..."
              type="text"
            />
        </div>
        <div className="side-menu">
          <div className="bg1" />
            <button className="logo" id="logo" />
          <div className="nav">
            <button className="home-button" id="home" />
            <button className="profile-button" id="profile" />
            <button className="found" id="found" />
            <button className="lost" id="lost" />
            <button className="view-history" id="history" />
            <button className="back" id="back" />
          </div>
        </div>
      <div className="content">
        <button className="claim-button" id="claim">
          <div className="claim1">CLAIM</div>
          <div className="claim-button-child" onClick={onRectangleClick} />
        </button>
        <div className="line" />
        <div className="item-details">
          <p className="description" Description>
            <span className="blue-automatic">Blue, Automatic</span>
            <span className="blue-automatic">Found in GLE Study Area</span>
            <span className="blue-automatic">&nbsp;</span>
            <span className="blue-automatic">Date Found: December 5, 2023</span>
            <span className="blue-automatic">Time: 1:45 P.M.</span>
          </p>
          <p className="status" Status>
            <span>{`Status: `}</span>
            <span className="not-yet-claimed">Not yet claimed</span>
          </p>
        </div>
        <div className="item-tags">
          <div className="tag">
            <div className="essentials">Essentials</div>
          </div>
        </div>
        <h1 className="item-name">
          <div className="blue-umbrella">Blue Umbrella</div>
        </h1>
        <img className="item-picture-icon" alt="" src="/item-picture@2x.png" />
      </div>
      <div className="claim-child" />
      <b className="item-status">Item Status</b>
    </div>
  );
};

export default Claim;
