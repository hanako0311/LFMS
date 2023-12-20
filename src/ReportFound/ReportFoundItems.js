import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import axios from 'axios';
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import "../ReportLost/ReportLostItems.css";
import { fetchFoundItems } from '../actions/foundItemActions';


const ReportFoundItems = () => {
  const [inputTextDateTimePickerValue, setInputTextDateTimePickerValue] = useState(null);
  const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false);

  const foundItems = useSelector(state => state.foundItem.items);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const showSuccessPopup = () => {
    setIsSuccessPopupVisible(true);
  };

  const hideSuccessPopup = () => {
    setIsSuccessPopupVisible(false);
  };


  const onHomePageClick = useCallback(() => {
    navigate("/home"); 
  }, [navigate]);

  const onReportLostClick = useCallback(() => {
    navigate("/report-lost-items"); 
  }, [navigate]);

  const onSignOutClick = useCallback(() => {
    navigate("/"); 
  }, [navigate]);

  const onUserContainerClick = useCallback(() => {
   
  }, []);


  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Process the selected file (e.g., store it in state)
    console.log('Selected file:', file);
  };

  const handleChooseFileClick = () => {
    document.getElementById('fileInput').click(); // Trigger file input click
  };

  /*const onSubmitBtnClick = useCallback(() => {
    navigate("/successpopup"); 
  }, [navigate]); */

  const onSubmitButtonClick = async () => {
    const itemName = document.querySelector('.inputtext').value;
    const dateFound = inputTextDateTimePickerValue;
    const locationFound = document.querySelector('.inputtext2').value;
    const itemDescription = document.querySelector('.inputtext3').value;
    const imageFile = document.querySelector('#fileInput').files[0];

    const formData = new FormData();
    formData.append('foundEntity', JSON.stringify({
      itemName,
      dateFound,
      locationFound,
      itemDescription
    }));
    formData.append('imageFile', imageFile);

    try {
      const response = await axios.post('http://localhost:8080/found-items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }); 
      console.log('Item reported successfully:', response.data);
      showSuccessPopup();

      dispatch(fetchFoundItems());
      
      navigate("/dash-found-items"); // Navigate back to dashboard after submission
    } catch (error) {
      console.error('Error reporting item:', error);
    }
  }; 


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="report-found-items">
        <div className="top-menu">
          <div className="bgreportlost" />
          <div className="userreportlost" onClick={onUserContainerClick}>
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
        <div className="side-menureportlost">
          <div className="bglost" />
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
        <div className="lost-item-form">
          <input
            className="inputtext"
            name="Item Found"
            placeholder="Name of item"
            type="text"
          />
          <div className="item-lost">Item Found</div>
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
          <div className="date-lost">Date Found</div>
          <input
            className="inputtext2"
            name="Location"
            placeholder="Location"
            type="text"
          />
          <div className="location-lost">Location Found</div>
          <textarea className="inputtext3" placeholder="Describe the item" />
          <div className="item-description">Item Description</div>
          <input
          type="file"
          id="fileInput"
          accept="image/*"
          className="fileInput"
          onChange={handleFileInputChange}
          style={{ display: 'none' }} // Hide the file input
        />
        <div className="insert-image" onClick={handleChooseFileClick}>
          Insert Image
        </div>
        {/* Optional button for choosing file */}
        <button className="choose-file" onClick={handleChooseFileClick}>
          Choose File
        </button>
        </div>
        <button className="submit-buttonreportlost" id="submit" onClick={onSubmitButtonClick}>
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