import React, { createContext, useContext } from "react";

const AuthContext = createContext();

export const AppProvider = ({ children }) => {
  // Define the shared state

  const contextValue = {
    // returned states
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
