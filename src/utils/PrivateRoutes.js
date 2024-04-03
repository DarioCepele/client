import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../AuthProvider";

// Defining PrivateRoutes component
const PrivateRoutes = () => {
  // Using useAuth hook to check if user is logged in
  const { isLoggedIn } = useAuth();
  // If user is logged in, render Outlet (nested routes)
  // Otherwise, navigate to the login page
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

// Exporting PrivateRoutes component
export default PrivateRoutes;
