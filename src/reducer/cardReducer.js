//reducer function that specifies how the application should change in response to a particular action. Reducer files should always have camelcase.

//Dispatch will give me the power to acll this func.
export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return;

    case "REMOVE_FROM_CART":
      return;

    case "UPDATE_TOTAL":
      return;

    default:
      throw new Error("No case found in cartReducer");
  }
};
