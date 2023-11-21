import React from 'react';
import './home.css'; // Import CSS file

function Home() {
    return (
        <div className="main-container">
            <div className="top-bar">
                <div className="user-profile">
                    <img className="user-avatar" src="https://via.placeholder.com/61x60" alt="User" />
                    <div className="user-info">
                        <div className="user-name">Zara Wardani</div>
                        <div className="user-role">Admin</div>
                    </div>
                </div>
            </div>
            <div className="search-box">
                <div className="search-input">
                    <div className="search-icon">
                        <div className="search-icon-inner" />
                    </div>
                    <div className="search-text">Search here...</div>
                </div>
            </div>
            <div className="content-section">
                <div className="found-items">Found Items</div>
                <div className="items-count">15</div>
            </div>
            <div className="dashboard-section">
                <div className="dashboard-title">Dashboard</div>
            </div>
            <div className="lost-items-section">
                <div className="lost-items-title">Lost Items</div>
                <div className="lost-items-count">34</div>
            </div>
            <div className="image-section">
                <img className="placeholder-image" src="https://via.placeholder.com/512x512" alt="Placeholder" />
            </div>
        </div>
    );
};

export default Home;
