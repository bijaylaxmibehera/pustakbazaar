import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataContext, AuthContext } from "../../";
import { addToCart } from "../../services/CartService";
import { addToWishlist } from "../../services/WishlistService";
import {
  isProductInCart,
  isProductInWishlist,
} from "../../utilities/ProductUtilities";
import { getProducts } from "../../services/ProductService";
import { CalculateDiscount } from "../../utilities/CalculateDiscount";
import "./SingleProduct.css";

export function SingleProduct() {
  const { id } = useParams();
  // const [book,setBook]=useState(null);
  const { token } = useContext(AuthContext);
  const { cart, wishlist, products, dataDispatch } = useContext(DataContext);

  const navigate = useNavigate();

  const isInCart = isProductInCart(cart, id);
  const isInWishlist = isProductInWishlist(wishlist, id);

  const product = products.find((product) => product._id === id);

  if (!product) {
    return <p>Loading ....</p>;
  }

  const {
    _id,
    img,
    name,
    author,
    price,
    originalPrice,
    isBestSeller,
    rating,
    description,
  } = product;

  const clickHandler = () => {
    addToWishlist(dataDispatch, product, token);
  };

  const addCartHandler = () => {
    addToCart(dataDispatch, product, token);
  };

  return (
    <>
      {product && (
        <div className="single-product-page">
          <div className="left">
            <img src={img} alt={name} />
            
          </div>
          <div className="right">
            <div className="book-info">
              <h2>{name}
              {isBestSeller && <span className="best-seller-badge">Best Seller</span>}
              </h2>

              <p>
                <span className="book-heading">author: </span>
                {author}
              </p>
              <div className="price-info">
                <p>₹{price}</p>
                <p className="original-price">₹{originalPrice}</p>
                <p className="discount-price">
                  <CalculateDiscount
                    price={price}
                    originalPrice={originalPrice}
                  />{" "}
                  %Off
                </p>
              </div>
              <p className="book-rating">
                <span className="book-heading">rating:</span>
                {rating}
                <i class="fa fa-star" aria-hidden="true"></i>
              </p>
              <p className="book-heading">description: </p>
              <p className="book-description">{description}</p>
            </div>
            <div className="add-item-btn">
              {isInWishlist ? (
                <NavLink to="/wishlist">
                  <button className="add-item-wishlist goto-wishlist">Go to wishlist</button>
                </NavLink>
              ) : (
                <button onClick={clickHandler} className="add-item-wishlist">
                  Add to wishlist
                </button>
              )}
              {isInCart ? (
                <NavLink to="/cart">
                  <button className="add-item-cart">
                    <span className="cart-icon">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                    Go to cart
                  </button>
                </NavLink>
              ) : (
                <button onClick={addCartHandler} className="add-item-cart">
                  <span className="cart-icon">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  </span>
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
