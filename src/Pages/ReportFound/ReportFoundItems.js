import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useCallback, useState } from "react";
import "../../assets/Styles/ReportFoundItems.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoundItems } from '../../actions/foundItemActions';
import TopMenu from "../../assets/navs/TopMenu/TopMenu";
import SideMenu from "../../assets/navs/SideMenu/SideMenu";


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
        <TopMenu />
        <SideMenu />
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
        <button
          className="submit-button"
          id="submit"
          onClick={onSubmitButtonClick}
        >
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