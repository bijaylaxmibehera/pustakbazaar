import "./Cart.css";
import { useContext } from "react";
import { DataContext } from "../../";
import { NavLink } from "react-router-dom";
import { CartProductCard } from "../../component/CartProductCard/CartProductCard";
import { OrderSummary } from "../../component/OrderSummary/OrderSummary";
import { Loading } from "../../component/Loading/Loading";

export function Cart() {
  const { cart, loader } = useContext(DataContext);

  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <div className="cart-page">
          <div className="heading-text">
            <h1>My cart ({cart.length})</h1>
          </div>
          <div className="cart-products">
            {cart?.length === 0 ? (
              <div className="empty">
                <p>Hey your cart looks empty</p>
                <NavLink to="/products">
                  <button className="btn add-btn">Add products</button>
                </NavLink>
              </div>
            ) : (
              <div className="cart-items-list">
                <ul>
                  {cart?.map((book) => (
                    <CartProductCard book={book} key={book._id} />
                  ))}
                </ul>
                <div className="order-summary-component">
                  <OrderSummary />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
