import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../AuthProvider";

const PrivateRoutes = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
