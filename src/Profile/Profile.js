import { Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  
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

  return (
    <div className="profilepage">
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
        <div className="email">
          <div className="label">Email</div>
          <div className="data">{userDetails?.email || 'Loading...'}</div>
        </div>
        <div className="lname">
          <div className="label">Last Name</div>
          <div className="data">{userDetails?.lastname || 'Loading...'}</div>
        </div>
        <div className="fname">
          <div className="label">First Name</div>
          <div className="data">{userDetails?.firstname || 'Loading...'}</div>
        </div>
        <img className="picture-icon" alt="" src="/picture@2x.png" />
      </div>
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
              className="searchtextreportlost"
              name="Search"
              placeholder="Search Here..."
              type="text"
            />
        </div>
      <div className="side-menureportlost">
          <div className="bglost" />
            <button className="logo" id="logo" />
          <div className="nav">
            <button className="home-button" id="home" onClick={onHomePageClick} />
            <button className="profile-button" id="profile" />
            <button className="lost" id="lost" onClick={onReportFoundClick}/>
            <button className="lost" id="history" />
            <button className="view-historyreportlost" id="history" />
            <button className="back" id="back" onClick={onSignOutClick}/>
          </div>
      </div>
    </div>
  );
};

export default Profile;
