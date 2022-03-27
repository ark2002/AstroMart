import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts";

const PrivateRoute = ({ children }) => {
  const { auth: { status }, } = useAuth();
  return status ? children : <Navigate replace to="/signin" />;
};

export { PrivateRoute };