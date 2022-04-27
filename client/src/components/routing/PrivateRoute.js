import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ children }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  if (!isAuthenticated && !loading) {
    return <Navigate to='/login' />;
  }
  return children;
};

export default PrivateRoute;
