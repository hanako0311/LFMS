const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  const foundItemReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_FOUND_ITEMS_SUCCESS':
        return { ...state, items: action.payload, loading: false };
      case 'FETCH_FOUND_ITEMS_FAILURE':
        return { ...state, error: action.error, loading: false };
      // ... (other cases)
      default:
        return state;
    }
  };
  
  export default foundItemReducer;
  
  