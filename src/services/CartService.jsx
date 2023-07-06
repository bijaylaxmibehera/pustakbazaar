import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addToCart = async (dataDispatch, product, token) => {
  try {
    const {
      data: { cart },
    } = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    toast.success("Added to cart");
    dataDispatch({ type: "ADD_TO_CART", payload: cart });
  } catch (err) {
    console.error(err);
  }
};

export const removeFromCart = async (dataDispatch, productId, token) => {
  try {
    const {
      data: { cart },
    } = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    dataDispatch({ type: "REMOVE_FROM_CART", payload: cart });
    toast.warn("Removed from cart");
  } catch (err) {
    console.error(err);
  }
};

export const updateQuantity = async (
  dataDispatch,
  productId,
  token,
  actionType
) => {
  try {
    const {
      data: { cart },
    } = await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: actionType === "INCREMENT" ? "increment" : "decrement",
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );

    dataDispatch({type:"UPDATE_QTY_IN_CART",payload:cart});
    if(actionType==="INCREMENT"){
      toast.info("Quantity is incremented")
    }else{
      toast.info("Quantity is decremented");
    }
  } catch (err) {
    console.error(err);
  }
};
