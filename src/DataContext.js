// DataContext.js
import React, { useContext, createContext, useState } from "react";

// Create a context to hold data
const DataContext = createContext();

// Create a provider component to manage the data state
export const DataProvider = ({ children }) => {
  // Define state for data summary and a function to update it
  const [dataSummary, setDataSummary] = useState({
    id: "",
    title: "",
    summary: "",
    image: "",
  });

  // Function to update the data summary
  const updateDataSummary = (newData) => {
    setDataSummary(newData);
  };

  // Provide the data summary and update function to children components
  return <DataContext.Provider value={{ dataSummary, updateDataSummary }}>{children}</DataContext.Provider>;
};

// Custom hook to access the data context
export const useDataContext = () => {
  return useContext(DataContext);
};
