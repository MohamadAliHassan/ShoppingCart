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
    const updatedCartList = state.cartList.concat(product);
    updatedTotal(updatedCartList);
    dispatch({
      //What we need to perform.
      type: "ADD_TO_CART",

      payload: {
        products: updatedCartList,
      },
    });
  };
  const removeFromCart = (product) => {
    //Filter out products that doesnt match the id of our currentproducts. Easy way of removing stuff.
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );
    updatedTotal(updatedCartList);

    dispatch({
      type: "REMOVE_FROM_CART",

      payload: {
        products: updatedCartList,
      },
    });
  };

  const updatedTotal = (products) => {
    let total = 0;
    products.forEach((product) => (total = total + product.price));

    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total,
      },
    });
  };

  //TASK: Make this value accessible to any component
  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
