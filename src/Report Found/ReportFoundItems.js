import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useCallback, useState } from "react";
import "./ReportFoundItems.css";
import { useNavigate } from "react-router-dom";

const ReportFoundItems = () => {
  const navigate = useNavigate();

  const [inputTextDateTimePickerValue, setInputTextDateTimePickerValue] =
    useState(null);

  const onHomePageClick = useCallback(() => {
    navigate("/home"); 
  }, [navigate]);

  const onUserContainerClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onSearchBarContainerClick = useCallback(() => {
    // Please sync "Search item" to the project
  }, []);

  const onSubmitButtonClick = useCallback(() => {
    // Please sync "Successful reported found items" to the project
  }, []);

  const onReportLostClick = useCallback(() => {
    navigate("/report-lost-items"); // Update with your form's route
  }, [navigate]);

  const onSignOutClick = useCallback(() => {
    navigate("/"); 
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="report-found-items">
        <div className="top-menu">
          <div className="bg" />
          <div className="user" onClick={onUserContainerClick}>
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
            <button className="home-button" id="home" onClick={onHomePageClick}/>
            <button className="profile-button" id="profile" />
            <button className="found" id="found" />
            <button className="lost" id="history" onClick={onReportLostClick}/>
            <button className="view-history" id="history" />
            <button className="back" id="back" onClick={onSignOutClick}/>
          </div>
        </div>
        <div className="report-found-items-child" />
        <div className="report-found-item-wrapper">
          <b className="report-found-item">Report Found Item</b>
        </div>
        <div className="found-item-form">
          <input
            className="inputtext"
            name="Item Found"
            placeholder="Name of item"
            type="text"
          />
          <div className="item-found">Item Found</div>
          <div className="inputtext1">
            <DateTimePicker
              label="Name of item"
              value={inputTextDateTimePickerValue}
              onChange={(newValue) => {
                setInputTextDateTimePickerValue(newValue);
              }}
              slotProps={{
                textField: {
                  variant: "standard",
                  size: "medium",
                  color: "primary",
                },
              }}
            />
          </div>
          <div className="date-found">Date Found</div>
          <input
            className="inputtext2"
            name="Location"
            placeholder="Location"
            type="text"
          />
          <div className="location-found">Location Found</div>
          <textarea className="inputtext3" placeholder="Describe the item" />
          <div className="item-description">Item Description</div>
          <div className="insert-image">Insert Image</div>
          <button className="choose-file" id="choose file">
            <button className="choose-file-child" id="Choose file" />
            <button className="choose-file1">Choose file</button>
          </button>
        </div>
        <button
          className="submit-button"
          id="submit"
          onClick={onSubmitButtonClick}
        >
          <button className="submit-button-child" id="submt" />
          <div className="submit">Submit</div>
        </button>
      </div>
    </LocalizationProvider>
  );
};

export default ReportFoundItems;
