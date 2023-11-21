import React from 'react';
import './FormFound.css'; // Import the CSS file

function FormFound() {
    
    return (
        <div className="form-found-container">
            <div className="header">
                <div className="user-info">
                    <img src="https://via.placeholder.com/67x60" alt="User Avatar" />
                    <div className="user-details">
                        <div className="user-name">Zara Wardani</div>
                        <div className="user-role">Admin</div>
                    </div>
                </div>
            </div>
            <div className="form-section">
                <div className="form-field">
                    <div className="field-label">Name of item</div>
                </div>
                <div className="separator" />
                <div className="form-field">
                    <div className="field-label">Date Found</div>
                </div>
                <div className="separator" />
                <div className="form-field">
                    <div className="field-label">Location Found</div>
                </div>
                <div className="separator" />
                <div className="form-field">
                    <div className="field-label">Item Description</div>
                </div>
            </div>
            <div className="image-upload">
                <div className="submit-button">
                    <div>Submit</div>
                </div>
                <div className="file-upload">
                    <div className="file-input">Choose file</div>
                </div>
            </div>
            <div className="question-mark">?</div>
            <div className="preview-images">
                <img src="https://via.placeholder.com/60x60" alt="Preview Image 1" />
                <img src="https://via.placeholder.com/66x65" alt="Preview Image 2" />
            </div>
            <div className="search-bar">
                <div className="search-input">
                    <div className="search-icon"></div>
                    <div className="search-text">Search here...</div>
                </div>
            </div>
        </div>
    );
}

export default FormFound;
