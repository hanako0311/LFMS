import axios from 'axios';

export const fetchFoundItems = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:8080/found-items');
    dispatch({ type: 'FETCH_FOUND_ITEMS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_FOUND_ITEMS_FAILURE', error });
  }
};

