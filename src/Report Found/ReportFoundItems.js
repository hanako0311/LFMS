import { useCallback } from "react";
import "./ReportFoundItems.css";

const ReportFoundItems = () => {
  const onUserContainerClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Successful reported found items" to the project
  }, []);

  const onReportLostContainerClick = useCallback(() => {
    // Please sync "Report Lost Items" to the project
  }, []);

  const onHomeClick = useCallback(() => {
    // Please sync "Dashboard Found Items - Default" to the project
  }, []);

  const onSubtract1Click = useCallback(() => {
    // Please sync "Landing" to the project
  }, []);

  const onProfile1Click = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onHome1Click = useCallback(() => {
    // Please sync "Dashboard Found Items - Default" to the project
  }, []);

  const onReportLostClick = useCallback(() => {
    // Please sync "Report Lost Items" to the project
  }, []);

  const onLFSplash5Click = useCallback(() => {
    // Please sync "Dashboard Found Items - Default" to the project
  }, []);

  const onSearchBarContainerClick = useCallback(() => {
    // Please sync "Search item" to the project
  }, []);

  return (
    <div className="report-found-items">
      <div className="top-menu">
        <div className="bg" />
        <img className="top-menu-child" alt="" src="/line.svg" />
        <div className="user" onClick={onUserContainerClick}>
          <img className="placeholder-icon" alt="" src="/placeholder@2x.png" />
          <div className="name">
            <b className="zara-wardani">Zara Wardani</b>
            <div className="admin">Admin</div>
          </div>
        </div>
      </div>
      <div className="inputtext">
        <div className="placeholder">Name of item</div>
      </div>
      <div className="report-found-items-child" />
      <div className="report-found-item-wrapper">
        <b className="report-found-item">Report Found Item</b>
      </div>
      <div className="item-found">Item Found</div>
      <div className="inputtext1">
        <div className="placeholder">Name of item</div>
      </div>
      <div className="date-found">Date Found</div>
      <div className="inputtext2">
        <div className="placeholder">Name of item</div>
      </div>
      <div className="location-found">Location Found</div>
      <div className="inputtext3">
        <div className="placeholder">Name of item</div>
      </div>
      <div className="item-description">Item Description</div>
      <div className="inputtext4">
        <div className="placeholder4">Name of item</div>
      </div>
      <div className="insert-image">Insert Image</div>
      <div className="rectangle-parent" onClick={onGroupContainerClick}>
        <button className="group-child" id="submt" />
        <div className="submit">Submit</div>
      </div>
      <div className="choose-file">
        <button className="choose-file-child" id="Choose file" />
        <button className="choose-file1">Choose file</button>
      </div>
      <div className="top-menu1">
        <div className="bg1" />
        <img className="top-menu-item" alt="" src="/line1.svg" />
        <img className="subtract-icon" alt="" src="/subtract.svg" />
        <img className="view-history-icon" alt="" src="/view-history@2x.png" />
        <div className="nav">
          <div className="report-lost" onClick={onReportLostContainerClick}>
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
          <img className="report-found-icon" alt="" src="/report-found.svg" />
          <img className="profile-icon" alt="" src="/profile.svg" />
          <img
            className="home-icon"
            alt=""
            src="/home.svg"
            onClick={onHomeClick}
          />
        </div>
      </div>
      <div className="top-menu2">
        <div className="bg1" />
        <img className="top-menu-item" alt="" src="/line2.svg" />
        <img
          className="subtract-icon1"
          alt=""
          src="/subtract1.svg"
          onClick={onSubtract1Click}
        />
        <a className="view-history" />
        <div className="nav1">
          <a className="profile" onClick={onProfile1Click}>
            <img className="profile-child" alt="" src="/group-33.svg" />
          </a>
          <a className="home" onClick={onHome1Click}>
            <img className="vector-icon" alt="" src="/vector.svg" />
          </a>
        </div>
      </div>
      <a className="report-found">
        <img className="group-icon" alt="" src="/group1.svg" />
        <img
          className="search-dollar-search-pay-prod-icon1"
          alt=""
          src="/searchdollarsearchpayproductcurrencyquerymagnifyingcashbusinessmoneyglass1.svg"
        />
      </a>
      <a className="report-lost1" onClick={onReportLostClick}>
        <img className="group-icon" alt="" src="/group2.svg" />
        <div className="search-dollar-search-pay-prod">
          <img
            className="search-dollar-search-pay-prod-icon"
            alt=""
            src="/searchdollarsearchpayproductcurrencyquerymagnifyingcashbusinessmoneyglass2.svg"
          />
          <b className="b">?</b>
        </div>
      </a>
      <div className="logout-1-arrow-exit-frame-lea" />
      <img
        className="lf-splash-5"
        alt=""
        src="/lf-splash-5@2x.png"
        onClick={onLFSplash5Click}
      />
      <div className="search-bar" onClick={onSearchBarContainerClick}>
        <div className="content">
          <img className="magnifier-icon" alt="" src="/magnifier.svg" />
          <div className="search-here">Search here...</div>
        </div>
      </div>
    </div>
  );
};

export default ReportFoundItems;
