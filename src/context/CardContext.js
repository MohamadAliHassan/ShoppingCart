//Using this file to store the information of my card. Context is used so that other files in the component tree has access to the global data.
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cardReducer";

const initialState = {
  cartList: [],
  total: 0,
};

//We have now created a context that will be used throughout the entire application. IMPORTANT:Whats left now is the provider. Its going to cover any part where we can access all the value/values.
const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.cartList.concat(product);
    dispatch({
      //What we need to perform.
      type: ,
      
      payload: 
    })
  };

  //TASK: Make this value accessible to any component
  const value = {
    total: state.total,
    cartList: state.cartList,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
