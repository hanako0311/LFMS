import React from 'react';
import './home.css'; // Import CSS file
import backgroundImage from './home-btn.png';

function Home() {
    
    return (
        <div className="main-container">
            <div className="top-bar">
                <div className="top-bar-background"></div>
                <div className="top-bar-border"></div>
                <div className="user-profile">
                    <img className="user-avatar" src="https://via.placeholder.com/61x60" alt="User" />
                    <div className="user-info">
                        <div className="user-name">Zara Wardani</div>
                        <div className="user-role">Admin</div>
                    </div>
                </div>
            </div>
            <div className="dashboard-title">Dashboard</div>

            {/* New Search Bar Section */}
            <div className="search-bar-container">
                <div className="search-bar">
                    <div className="search-icon-container">
                        <div className="search-icon"></div>
                    </div>
                    <div className="search-text">Search here...</div>
                </div>
            </div>
          
            {/* Found Items Section */}
            <div className="found-items-section">
                <div className="found-items-box">
                    <div className="found-items-header">
                        <div className="found-items-title">Found Items</div>
                        <div className="found-items-count">15</div>
                    </div>
                </div>
            </div>

            {/* Lost Items Section */}
            <div className="lost-items-section">
                <div className="lost-items-box">
                    <div className="lost-items-header">
                        <div className="lost-items-title">Lost Items</div>
                        <div className="lost-items-count">34</div>
                    </div>
                </div>
            </div>

             {/* Sidebar Section */}
             <div className="sidebar">
                <div className="sidebar-background"></div>
                <div className="sidebar-btn" style={{ top: '242px' }}></div>
                <div className="sidebar-btn" style={{ top: '353px' }}></div>
                <div className="sidebar-btn" style={{ top: '490px' }}></div>
                <div className="sidebar-btn" style={{ top: '847px' }}></div>
            </div>

            {/* More JSX elements go here following the same pattern */}
            {/* ... */}
        </div>
    );
}

export default Home;
