// import { createContext, useContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItem, setCartItem] = useState([]);

//   const addTocart = (orange) => {
//     setCartItem([...cartItem, orange]);
//   };

//   const removeCartItem = (item) => {
//     setCartItem(cartItem.filter((orange) => orange !== item));
//   };

//   return (
//     <CartContext.Provider value={{ cartItem, addTocart, removeCartItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((apple) => apple !== item));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};