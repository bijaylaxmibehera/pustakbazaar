import "./CheckOut.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../";
import { AddressList } from "../../component/Addresses/AddressList";
import { OrderSummary } from "../../component/OrderSummary/OrderSummary";
import { OrderDetails } from "../../component/OrderDetails/Orderdetails";

export function CheckOut() {
  const { cart } = useContext(DataContext);
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState(null);
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/products");
    }
  }, [cart, navigate]);
  return (
    <>
      <div className="checkout-wrapper">
        <h1 className="text-center heading mb-2">Checkout</h1>
        <div className="checkout-container">
          <div className="flex-col-50">
            <AddressList
              setSelectedAddress={setSelectedAddress}
              selectedAddress={selectedAddress}
            />
          </div>
          <div className="flex-col-50">
            <OrderDetails selectedAddress={selectedAddress}/>
          </div>
        </div>
      </div>
    </>
  );
}
