import React from "react";
import { useState, createContext } from "react";


export const CartContext = createContext();

const ShoppingCartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartContextProvider;