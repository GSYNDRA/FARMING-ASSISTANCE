import React from "react";
import { Navigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const inforUser = JSON.parse(localStorage.getItem("infoUser")); // or get it from a context or global state

  if (inforUser) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default AuthWrapper;
