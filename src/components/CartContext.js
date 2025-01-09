import React, { createContext, useContext, useState } from 'react';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const SwalAlert = withReactContent(Swal)

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

//   Add item to cart
  const handleAddToCart = (item) => {
    const index = cartItems.findIndex(el=>el.id == item.id );
    if(index == -1){
        setCartItems((prevItems) => [...prevItems, item]);
        setCartCount((prevCount) => prevCount + 1);
        setTotalAmount((prevAmount) => prevAmount + item.price);
    }
    else {
        // SwalAlert.fire({
        //     text: "Item is already in the cart.",
        // });
        alert("Item is already in the cart.")
    }
    
  };

//   Remove item from cart
  const removeFromCart = (item) => {
    const oldItems = JSON.parse(JSON.stringify(cartItems));
    const index = oldItems.findIndex(el=>el.id == item.id );
    if(index > -1){
        oldItems.splice(index, 1);
        setCartItems(oldItems);
        setCartCount((prevCount) => prevCount - 1);
        setTotalAmount((prevAmount) => prevAmount - item.price);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, totalAmount, handleAddToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};