/* eslint-disable react/prop-types */
import  { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

 
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems"); 
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems.filter((item) => item.id !== id);

      // Clear localStorage if cart is empty
      if (updatedCart.length === 0) {
        localStorage.removeItem("cartItems");
      } else {
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      }

      return updatedCart;
    });
  };

  const updateQuantity = (id, quantityChange) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + quantityChange) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
