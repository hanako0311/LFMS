import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useCallback, useState } from "react";
import "./ReportFoundItems.css";
import { useNavigate } from "react-router-dom";

const ReportFoundItems = () => {
  const navigate = useNavigate();

  const [inputTextDateTimePickerValue, setInputTextDateTimePickerValue] = useState(null);
  const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false);

  const showSuccessPopup = () => {
    setIsSuccessPopupVisible(true);
  };
  const hideSuccessPopup = () => {
    setIsSuccessPopupVisible(false);
  };
  const onHomePageClick = useCallback(() => {
    navigate("/home"); 
  }, [navigate]);

  const onUserContainerClick = useCallback(() => {
   
  }, []);

  const onSearchBarContainerClick = useCallback(() => {
    
  }, []);

  const showPopup = (message) => {
    // Create a div element for the modal
    const modal = document.createElement('div');
    modal.classList.add('custom-modal');

    // Create content for the modal
    const content = document.createElement('div');
    content.textContent = message;

    // Create a close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
      // Close the modal when the button is clicked
      document.body.removeChild(modal);
    });

    // Append content and button to the modal
    modal.appendChild(content);
    modal.appendChild(closeButton);

    // Append the modal to the body
    document.body.appendChild(modal);
  };

  const onSubmitButtonClick = useCallback(() => {
    const itemName = document.querySelector('.inputtext').value;
    const dateLost = inputTextDateTimePickerValue;
    const locationLost = document.querySelector('.inputtext2').value;
    const itemDescription = document.querySelector('.inputtext3').value;

    // Validate if all required fields are filled
    if (!itemName || !dateLost || !locationLost || !itemDescription) {
      // Show error popup
      showPopup('Please fill in all required fields.');
      return;
    }

    // Assuming a successful submission, you can log the values or send them to a server
    console.log('Item Name:', itemName);
    console.log('Date Lost:', dateLost);
    console.log('Location Lost:', locationLost);
    console.log('Item Description:', itemDescription);

    // Show success popup
    showSuccessPopup();
  }, [inputTextDateTimePickerValue]);

  const onReportLostClick = useCallback(() => {
    navigate("/report-lost-items"); 
  }, [navigate]);

  const onSignOutClick = useCallback(() => {
    navigate("/"); 
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="report-found-items">
        <div className="top-menu2">
          <div className="bg1" />
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
          <div className="bg4" />
            <button className="logo" id="logo" />
          <div className="nav">
            <button className="home-button" id="home" onClick={onHomePageClick}/>
            <button className="profile-button" id="profile" />
            <button className="found" id="found"/>
            <button className="lost" id="lost" onClick={onReportLostClick}/>
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
        {isSuccessPopupVisible && (
          <div className="success-popup">
            <p>Successfully reported found item!</p>
            <button onClick={hideSuccessPopup}>Close</button>
          </div>
        )}
      </div>
    </LocalizationProvider>
  );
};

export default ReportFoundItems;