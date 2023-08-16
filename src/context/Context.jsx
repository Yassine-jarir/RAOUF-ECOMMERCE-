import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext([]);

export const ShopingContext = createContext({});

const initialCartitemlocalstorage = localStorage.getItem("shopping-card")
  ? JSON.parse(localStorage.getItem("shopping-card"))
  : [];

const ShoppingContextProvider = ({ children }) => {
  const [prod, setprod] = useState([]);
  useEffect(() => {
    // Make the GET request when the component mounts
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        // Update the state with the fetched products
        setprod(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const [cartItems, setcart] = useState(initialCartitemlocalstorage);
  useEffect(() => {
    localStorage.setItem("shopping-card", JSON.stringify(cartItems));
  }, [cartItems]);
  const cardlenght = cartItems.reduce(
    (quantity, item) => item.quatity + quantity,
    0
  );

  const getitemsQuantity = (id) => {
    return cartItems.find((obj) => obj.id === id)?.quatity || 0;
  };
  const increaseCartQuantity = (id) => {
    return setcart((prev) => {
      if (prev.find((obj) => obj.id === id) == null) {
        // ila makanch litem f array
        return [...cartItems, { id, quatity: 1 }];
      } else {
        return prev.map((eachobj) => {
          if (eachobj.id === id) {
            return { ...eachobj, quatity: eachobj.quatity + 1 };
          } else {
            return eachobj;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    return setcart((prev) => {
      if (prev.find((obj) => obj.id === id) == null) {
        // ila makanch litem f array
        // return [...cartItems];
        return prev.filter((obj) => obj.id !== id);
      } else {
        return prev.map((eachobj) => {
          if (eachobj.id === id) {
            return { ...eachobj, quatity: eachobj.quatity - 1 };
          } else {
            return eachobj;
          }
        });
      }
    });
  };
  const removeitemfromcart = (id) => {
    return setcart((allobjcts) => {
      return allobjcts.filter((item) => item.id !== id);
    });
  };

  return (
    <ShopingContext.Provider
      value={{
        cartItems,
        getitemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeitemfromcart,
        prod,
        setprod,
        cardlenght,
      }}
    >
      {children}
    </ShopingContext.Provider>
  );
};
export default ShoppingContextProvider;
