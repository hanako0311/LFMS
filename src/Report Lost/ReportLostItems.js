import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useCallback, useState } from "react";
import "./ReportLostItems.css";
import { useNavigate } from "react-router-dom";

const ReportLostItems = () => {
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
    // Please sync "Successful reported lost items" to the project
  }, []);

  const onReportFoundClick = useCallback(() => {
    navigate("/report-found-items"); // Update with your form's route
  }, [navigate]);

  const onSignOutClick = useCallback(() => {
    navigate("/"); // Update with your form's route
  }, [navigate])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="report-lost-items">
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
            <button className="home-button" id="home" onClick={onHomePageClick} />
            <button className="profile-button" id="profile" />
            <button className="found" id="found" onClick={onReportFoundClick} />
            <button className="lost" id="history" />
            <button className="view-history" id="history" />
            <button className="back" id="back" onClick={onSignOutClick}/>
          </div>
        </div>
        <div className="report-lost-items-child" />
        <div className="report-lost-item-wrapper">
          <b className="report-lost-item">Report Lost Item</b>
        </div>
        <div className="lost-item-form">
          <input
            className="inputtext"
            name="Item Found"
            placeholder="Name of item"
            type="text"
          />
          <div className="item-lost">Item Lost</div>
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
          <div className="date-lost">Date Lost</div>
          <input
            className="inputtext2"
            name="Location"
            placeholder="Location"
            type="text"
          />
          <div className="location-lost">Location Lost</div>
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

export default ReportLostItems;
