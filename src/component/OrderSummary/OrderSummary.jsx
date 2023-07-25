import "./OrderSummary.css";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { DataContext } from "../../";
import {
  getTotalPrice,
  getTotalDiscount,
} from "../../utilities/ProductUtilities";

export function OrderSummary() {
  const { cart,dataDispatch } = useContext(DataContext);
  const navigate=useNavigate();

  const deliveryCharges = 100;
  const totalItems = cart.reduce(
    (noOfItems, currItem) => (noOfItems += currItem.qty),
    0
  )
  const totalPrice=getTotalPrice(cart);
  const totalDiscount = getTotalDiscount(cart);
  const totalAmount =(totalPrice-totalDiscount)+deliveryCharges;

  const handleOrder=()=>{
    dataDispatch({type:"CLEAR_CART" , payload:cart});
    navigate("/placedorder");
  }
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
        <button className="order-btn" onClick={handleOrder}>Place Order</button>
      </div>
    </>
  );
}
