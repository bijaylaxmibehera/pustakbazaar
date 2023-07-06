import { CalculateDiscount } from "../../utilities/CalculateDiscount";
import { removeFromCart,updateQuantity  } from "../../services/CartService";
import { useContext } from "react";
import { AuthContext, DataContext } from "../../";

export function CartProductCard({ book }) {
  const { _id: id, img, name, author, price, originalPrice, qty } = book;
  const {dataDispatch } = useContext(DataContext);
  const { token } = useContext(AuthContext);

  const removeItemFromCartHandler = (id) => {
    removeFromCart(dataDispatch, id, token);
  };

  const quantityHandler = (id, actionType, quantity) => {
    if (quantity === 1) {
      removeFromCart(dataDispatch, id, token);
    } else {
        updateQuantity (dataDispatch, id, token, actionType);
    }
  };

 
  return (
    <div className="itmes-card" key={id}>
      <div class="card horizontal-container">
        <div class="card-horizontal">
          <img class="card-img horizontal-img" src={img} alt={name} />
          <div class="card-info">
            <div class="card-title">
              <div>
                <h3>{name}</h3>
                <p class="card-description">{author}</p>
              </div>
            </div>
            <div class="price">
              <p class="disc-price">{price}</p>
              <p class="actual-price">{originalPrice}</p>
              <p class="price-percentage">
                <CalculateDiscount
                  price={price}
                  originalPrice={originalPrice}
                />
                % Off
              </p>
            </div>
            <div class="qty">
              <button
                class="minus"
                disabled={qty=== 1}
                onClick={() => quantityHandler(id, "DECREMENT", qty)}
              >
                -
              </button>
              {/* <input class="qty-count" type="number" value={quantity} /> */}
              <p>{ qty}</p>
              <button
                class="add"
                onClick={() => quantityHandler(id, "INCREMENT")}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div class="horizontal-btn">
          <button
            class="remove-btn"
            onClick={() => removeItemFromCartHandler(id)}
          >
            REMOVE
          </button>
          <button class="later-btn">MOVE TO WISHLIST</button>
        </div>
      </div>
    </div>
  );
}
