import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoundItemDetails = () => {
    const { itemId } = useParams(); // Access the itemId from the URL params
    const [itemDetails, setItemDetails] = useState({});
    const [error, setError] = useState(null);
  
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/found-items/${itemId}`);
        setItemDetails(response.data);
      } catch (error) {
        setError('Error fetching item details: ' + error.message);
      }
    };
  
    useEffect(() => {
      fetchItemDetails();
    }, [itemId]);
  
    const [claiming, setClaiming] = useState(false); // Track claiming status
  
    const handleClaim = async () => {
      setClaiming(true); // Update claiming state to indicate the claim process has started
  
      try {
        // Perform API call to claim the item
        await axios.put(`http://localhost:8080/found-items/${itemId}/claim`);
  
        // If successful, update the button text to show that it's under verification
        setClaiming(false); // Update the claiming status
      } catch (error) {
        setError('Error claiming item: ' + error.message);
        setClaiming(false); // Update the claiming status if there's an error
      }
    };
  
    if (error) {
      return <div>{error}</div>;
    }
  
    return (
      <div>
        {itemDetails ? (
          <div>
            {/* Display item details */}
            <img src={`http://localhost:8080/found-items${itemDetails.imagePath}`} alt={itemDetails.itemDescription} />
            {/* Display other details accordingly */}
            <p>Item Found: {itemDetails.itemFound}</p>
            <p>Item Description: {itemDetails.itemDescription}</p>
            <p>Location Found: {itemDetails.locationFound}</p>
            <p>Date Found: {new Date(itemDetails.dateFound).toLocaleString()}</p>
            <p>Item Status: {itemDetails.itemStatus}</p>
            {itemDetails.itemStatus === 'unclaimed' && (
              <button onClick={handleClaim} disabled={claiming}>
              {claiming ? 'Verifying...' : 'Claim'}
              </button>
            )}
            {itemDetails.item_status === 'claimed' && <p>Item has been claimed</p>}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default FoundItemDetails;