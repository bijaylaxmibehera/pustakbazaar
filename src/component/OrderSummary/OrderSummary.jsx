import "./OrderSummary.css";
import { useContext } from "react";
import { DataContext } from "../../";
import {
  getTotalPrice,
  getTotalDiscount,
} from "../../utilities/ProductUtilities";

export function OrderSummary() {
  const { cart } = useContext(DataContext);

  const deliveryCharges = 100;
  const totalItems = cart.reduce(
    (noOfItems, currItem) => (noOfItems += currItem.qty),
    0
  )
  const totalPrice=getTotalPrice(cart);
  const totalDiscount = getTotalDiscount(cart);
  const totalAmount =(totalPrice-totalDiscount)+deliveryCharges;
  return (
    <>
      <div className="order-summary">
        <p className="div-heading">Price Details</p>
        <hr />
        <div className="price-details">
          <p>Price ({totalItems} items) :</p>
          <p>₹{totalPrice}</p>
        </div>
        <div className="price-details">
          <p>Discount : </p>
          <p>- ₹{totalDiscount}</p>
        </div>
        <div className="price-details">
          <p>Delivery charges : </p>
          <p>₹{deliveryCharges}</p>
        </div>
        <hr />
        <div className="price-details total-amount">
          <p>Total Amount</p>
          <p>₹{totalAmount}</p>
        </div>
        <p>You will save ₹{totalDiscount} on this order.</p>
        <button className="order-btn">Place Order</button>
      </div>
    </>
  );
}
