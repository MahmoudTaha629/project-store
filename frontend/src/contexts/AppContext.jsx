import React, { createContext, useContext } from "react";

const context = createContext();

export const AppProvider = ({ children }) => {
  // Define the shared state

  const contextValue = {
    // returned states
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export const AppContext = () => {
  return useContext(context);
};
