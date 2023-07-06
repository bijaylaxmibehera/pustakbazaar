import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addToWishlist = async (dataDispatch, product, token) => {
  try {
    const {
      data: { wishlist },
    } = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dataDispatch({ type: "ADD_TO_WISHLIST", payload: wishlist });
    toast.success("Added to wishlist");
  } catch (err) {
    console.error(err);
  }
};

export const removedFromWishlist = async (dataDispatch, productId, token) => {
  try {
    const {
      data: { wishlist },
    } = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    dataDispatch({ type: "REMOVE_FROM_WISHLIST", payload: wishlist });
    toast.warn("Removed from wishlist");
  } catch (err) {
    console.error(err);
  }
};
