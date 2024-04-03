import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignForm from "./pages/SignForm";
import PrivateRoutes from "./utils/PrivateRoutes";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";
import { AuthProvider } from "./AuthProvider";
import ErrorPage from "./ErrorPage";
import Contact from "./pages/Contact";
import { DataProvider } from "./DataContext";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/Favorites";
import FavoriteRecipe from "./pages/FavoriteRecipe";

function App() {
  return (
    // Wrapping the entire application with Authentication Provider and Data Provider
    <div>
      <AuthProvider>
        <DataProvider>
          {/* Setting up routing using BrowserRouter */}
          <Router>
            <Routes>
              {/* Defining routes with their corresponding components */}
              {/* Private routes accessible only after authentication */}
              <Route element={<PrivateRoutes />}>
                <Route element={<Home />} path="/" exact />
                <Route element={<Favorites />} path="/favorites" exact />
                <Route element={<Contact />} path="/contact" exact />
                <Route element={<Recipe />} path="/recipe/:id" />
                <Route element={<FavoriteRecipe />} path="/favorite/:id" />
              </Route>
              {/* Public routes accessible without authentication */}
              <Route element={<SignForm />} path="/login" />
              <Route element={<RegisterForm />} path="/register" />
              {/* Route for handling undefined paths */}
              <Route element={<ErrorPage />} path="*" />
            </Routes>
          </Router>
        </DataProvider>
      </AuthProvider>
    </div>
  );
}

// Exporting the App component as default
export default App;
