import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import the Provider
import store from './store'; // Import your Redux store
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap App with Provider and pass the store */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
