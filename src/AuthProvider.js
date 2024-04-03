import { createContext, useContext, useState } from "react";

// Create a new context to manage authentication-related data
const AuthContext = createContext();

// Define a component called AuthProvider which takes 'children' as props
export const AuthProvider = ({ children }) => {
  // Define a state variable 'isLoggedIn' to track user's authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Return the AuthContext.Provider component with value set to an object containing 'isLoggedIn' and 'setIsLoggedIn' functions, wrapping around 'children'
  return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>;
};

// Define a custom hook called useAuth to access the authentication context
export const useAuth = () => {
  // Access the authentication context
  const context = useContext(AuthContext);

  // Throw an error if the hook is not used within an AuthProvider
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  // Return the authentication context
  return context;
};
