import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { isAuthenticatedSelector } from 'store/selectors'
import { useSelector } from 'react-redux'

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector)
  const location = useLocation();
  return !isAuthenticated ? (
    <Navigate to={"/login"} state={{ from: location }} replace />
  ) : (
    children
  );
};

export default ProtectedRoute;