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

function App() {
  return (
    <div>
      <AuthProvider>
        <DataProvider>
          <Router>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route element={<Home />} path="/" exact />
                <Route element={<Contact />} path="/contact" exact />
                <Route element={<Recipe />} path="recipe/:id" />
              </Route>
              <Route element={<SignForm />} path="/login" />
              <Route element={<RegisterForm />} path="/register" />
              <Route element={<ErrorPage />} path="*" />
            </Routes>
          </Router>
        </DataProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
