import React from 'react';
import { Navigate } from 'react-router';

function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/sign-in" replace />;
}

export default ProtectedRoute;
