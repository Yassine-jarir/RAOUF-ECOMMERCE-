import { createContext, useState } from "react";

export const ShopingContext = createContext({});

export const ShoppingContextProvider = ({ children }) => {
  const [cartItems, setcart] = useState([]);
  const getitemsQuantity = (id) => {
    return;
  };
  return (
    <ShopingContext.Provider value={{ cartItems }}>
      {children}
    </ShopingContext.Provider>
  );
};
