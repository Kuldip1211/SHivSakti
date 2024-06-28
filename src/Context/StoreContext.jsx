/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets"; // Assuming this is where food_list is defined

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeCart = (itemId) => {
    setCartItems((prev) => {
      const updatedItems = { ...prev };
      if (updatedItems[itemId] > 1) {
        updatedItems[itemId] -= 1;
      } else {
        delete updatedItems[itemId];
      }
      return updatedItems;
    });
  };

  const getItemCount = (itemId) => {
    return cartItems[itemId] || 0;
  };


  const getCartTotalAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itenInfo = food_list.find((product)=>product._id === item);
        totalAmount += itenInfo.price*cartItems[item]
      }
    }
    return totalAmount;
  }



  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    getItemCount,
    addToCart,
    removeCart,
    getCartTotalAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
