// DataContext.js
import React, { useContext, createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataSummary, setDataSummary] = useState({
    id: "",
    title: "",
    summary: "",
    image: "",
  });

  const updateDataSummary = (newData) => {
    setDataSummary(newData);
  };

  return <DataContext.Provider value={{ dataSummary, updateDataSummary }}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};
