export const initialState = {
  products: [],
  cart: [],
  wishlist: [],
  addresses: [
    {
      id: "1",
      name: "Bijaylaxmi Behera",
      phone: "9967208421",
      city: "Baripada",
      state: "Odisha",
      pin: "757001",
      addressText: "University road,Baripada, Mayurbhanj, Odisha 751020",
    },
  ],
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
    case "ADD_ADDRESS":
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };

    case " DELETE_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.filter(({ id }) => id !== action.payload),
      };

    case "EDIT_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    default:
      return state;
  }
};
