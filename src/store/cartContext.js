import { createContext, useContext, useState } from "react";
const CartContext = createContext();
export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };


  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };


  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}