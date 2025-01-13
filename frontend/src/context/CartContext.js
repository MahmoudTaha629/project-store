import React, { createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Define the shared state

  const contextValue = {
    // returned states
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
