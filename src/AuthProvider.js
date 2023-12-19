// AuthProvider.js
import React, { createContext, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = useCallback(async (email, password) => {
    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.text();
        if (data === 'Login successful') {
          // Set authentication status and user data
          setAuthenticated(true);
          // You may fetch additional user data here if needed
          setUser({ email });
          // Redirect to the dashboard
          navigate('/home');
        } else {
          alert('Invalid Credentials');
        }
      } else {
        console.error('Login Failed: ', response.statusText);
        alert('Login failed. Please Try Again');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      alert('Login failed. Please try again.');
    }
  }, [navigate]);

  const logout = useCallback(() => {
    // Perform your logout logic here, e.g., invalidate the user session
    setAuthenticated(false);
    setUser(null);
    // Redirect the user to the login page after logout
    navigate('/login');
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
