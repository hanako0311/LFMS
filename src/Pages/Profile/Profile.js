import { Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/Styles/profile.css";
import SideMenu from "../../assets/navs/SideMenu/SideMenu";
import TopMenu from "../../assets/navs/TopMenu/TopMenu";

const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');


  useEffect(() => {
    // Fetch user details when the component mounts
    fetchUserDetails();
  }, []);
  const fetchUserDetails = async () => {
    try {
      // Make an API request to fetch user details from your Spring Boot backend
      const email = window.sessionStorage.getItem("user")
      console.log(email);
      const response = await fetch(`http://localhost:8080/users/getUserDetails/${email}`, {
        method: 'GET',
      });
      if(!response.ok){
      console.error('Failed to fetch user details');
      }
      const data = await response.json();
      console.log(data);
      setUserDetails(data);
    } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

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
  const onHomePageClick = useCallback(() => {
    navigate("/home"); 
  }, [navigate]);

  const onSignOutClick = useCallback(() => {
    navigate("/"); 
  }, [navigate]);

  const onUserContainerClick = useCallback(() => {
    
  }, []);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    // Set the edited values to the current user details when entering edit mode
    if (!isEditMode) {
        setEditedFirstName(userDetails?.firstname || '');
        setEditedLastName(userDetails?.lastname || '');
    }
  };

  const userId = userDetails?.uid;
  const handleSaveProfile = async () => {
    try {
        const email = window.sessionStorage.getItem("user");
        const response = await fetch(`http://localhost:8080/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: editedFirstName,
                lastname: editedLastName,
            }),
        });

        if (response.ok) {
            // Update local state with saved changes
            setUserDetails({
                ...userDetails,
                firstname: editedFirstName,
                lastname: editedLastName,
            });

            // Exit edit mode
            setIsEditMode(false);
        } else {
            console.error('Failed to save profile changes');
        }
    } catch (error) {
        console.error('Error saving profile changes:', error);
    }
  };


  return (
    <div className="profilepage">
      <div className="card">
        <div className="background" />
        <Button
          className="editprofilebutton"
          sx={{ width: 218.7190399169922 }}
          color="primary"
          variant="contained"
          onClick={isEditMode ? handleSaveProfile : toggleEditMode}
        >
          {isEditMode ? 'SAVE' : 'EDIT PROFILE'}
        </Button>
        <div className="email">
          <div className="label">Email</div>
          <div className="data">{userDetails?.email || 'Loading...'}</div>
        </div>
        <div className="lname">
          <div className="label">Last Name</div>
            {isEditMode ? (
              <input
                type="text"
                value={editedLastName}
                onChange={(e) => setEditedLastName(e.target.value)}
                />
              ) : (
            <div className="data">{userDetails?.lastname || 'Loading...'}</div>
            )}
        </div>
        <div className="fname">
          <div className="label">First Name</div>
            {isEditMode ? (
              <input
               type="text"
               value={editedFirstName}
               onChange={(e) => setEditedFirstName(e.target.value)}
               />
            ):(
          <div className="data">{userDetails?.firstname || 'Loading...'}</div>
            )}
        </div>
        <img className="picture-icon" alt="" src="/picture@2x.png" />
      </div>
      <TopMenu />
      <SideMenu />
    </div>
  );
};

export default Profile;
