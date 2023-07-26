import { createContext, useEffect, useReducer, useState } from "react";
import { initialState,dataReducer } from "../reducer/DataReducer";
import { getProducts } from "../services/ProductService";

export const DataContext = createContext({
  cart: [],
  wishlist: [],
  products: [],
  addresses: [],
  loader: false,
  dataDispatch: () => {},
  setLoader: () => {}
});


export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [loader,setLoader]=useState(false);

  useEffect(() => {
    getProducts(dispatch,setLoader);
  }, []);

  const categories = state.products.reduce((acc, currProd) => {
    if (!acc.includes(currProd.category)) {
      acc.push(currProd.category)
    }
    return acc
  }, [])
  return (
    <>
      <DataContext.Provider value={{
        cart: state.cart,
        wishlist: state.wishlist,
        products: state.products,
        addresses: state.addresses,
        dataDispatch: dispatch,
        loader,
        setLoader,
        categories
      }}>{children}</DataContext.Provider>
    </>
  );
}
