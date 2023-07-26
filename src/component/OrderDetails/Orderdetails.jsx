import "./OrderDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { DataContext, AuthContext } from "../../";
import { removeFromCart } from "../../services/CartService";
import {
  getTotalDiscount,
  getTotalPrice,
} from "../../utilities/ProductUtilities";

export function OrderDetails({selectedAddress}) {
  const { cart, dataDispatch } = useContext(DataContext);
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const discountedPrice = getTotalDiscount(cart);
  const totalPrice = getTotalPrice(cart);


  const placeOrderHandler = () => {
    if (!selectedAddress) {
      toast.warn("Please select an address.");
    } else {
      navigate("/placedorder");
      for (const item of cart) {
        removeFromCart(dataDispatch, item._id, token, () => {}, true);
      }
    }
  };

  return (
    <>
    <div className="order-details-container">
      <h3 className='text-center'>Order Details</h3>
      <div className="flex-col">
        <div className="flex-row font-bold">
          <p>Items</p>
          <p>Qty</p>
        </div>
        <div className="flex-col gap-8">
          {cart?.map(({ _id, name, qty }) => {
            return (
              <div className="flex-row" key={_id}>
                <p>{name}</p>
                <p>{qty}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h3 className='text-center' >Price Details</h3>
      <div className="price_details_container">
        <div className="flex-items-col gap-8">
          <div className="flex-row">
            <p>Total Price</p>
            <p>₹ {totalPrice}</p>
          </div>
          <div className="flex-row">
            <p>Total Discount</p>
            <p>₹ -{discountedPrice}</p>
          </div>
          <div className="flex-row">
            <p>
              <strong>
              Grand Amount
              </strong>
            </p>
            <p>
              <strong>
              ₹ {totalPrice - discountedPrice}
              </strong>
            </p>
          </div>
        </div>
      </div>
      <button className="place-order-btn btn secondary" onClick={placeOrderHandler}>
        Place Order
      </button>
    </div>
    </>
  );
}
