export const initialState = {
  products: [],
  cart: [],
  wishlist: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: [...action.payload] };
    case "SET_CART":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "SET_WISHLIST":
      return {
        ...state,
        wishlist: [...action.payload],
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "CLEAR_WISHLIST":
      return {
        ...state,
        wishlist: [],
      };
    case "ADD_TO_CART":
        return {
          ...state,
          cart: [...action.payload],
        };
    
     
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "UPDATE_QTY_IN_CART":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: [...action.payload],
      };
    default:
      return state;
  }
};
