// PrivateRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const PrivateRoute = ({ component: Component, requiresAuth, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        requiresAuth && !isAuthenticated ? (
          <Navigate to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
