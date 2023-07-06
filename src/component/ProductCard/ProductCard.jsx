import "./ProductCard.css";
import { CalculateDiscount } from "../../utilities/CalculateDiscount";
import { AuthContext, DataContext } from "../../";
import { addToCart } from "../../services/CartService";
import { isProductInCart,isProductInWishlist } from "../../utilities/ProductUtilities";
import { useNavigate,useLocation, NavLink } from "react-router-dom";
import { useContext } from "react";

export function ProductCard({ product }) {
  const navigate=useNavigate();
  const location=useLocation();
  const {
    _id: id,
    img,
    name,
    author,
    price,
    originalPrice,
    isBestSeller,
    rating,
  } = product;
const {token}=useContext(AuthContext);
const {dataDispatch, cart, wishlist}=useContext(DataContext);

const isInCart = isProductInCart(cart,id);
const isInWishlilst = isProductInWishlist(wishlist,id);

const addToCartHandler=(e)=>{
  e.stopPropagation();
  if (token) {
    if (isInCart) {
      navigate("/cart");
    } else {
      addToCart(dataDispatch, product, token);
    }
  } else {
    navigate("/signin", { state: { from: location } });
  }
}

  return (
    <>
      <div class="card">
        <img class="card-img" src={img} alt={name} />

        {isBestSeller && <span className="card-badge">Best Seller</span>}
        <span role="button" className="wishlist-icon">
          <i className="fa fa-heart" aria-hidden="true"></i>
        </span>

        <div className='card-info'>
          <div className=''>
            <div className='card-title'>
              <h3 className='card-title-header' title={name}>
                {name}
              </h3>
              <div className='card-star'>
                <p>{rating}</p>
                <i class='fa fa-star' aria-hidden='true'></i>
              </div>
            </div>
            <p className='card-description'>{author}</p>
          </div>
          <div className='price'>
            <p className='disc-price'>₹{price}</p>
            <p className='actual-price'>₹{originalPrice}</p>
          </div>
          <p className="price-percentage"><CalculateDiscount price={price} originalPrice={originalPrice}/>% Off</p>
        </div>
        {/* <div class="bottom-btn cart">
          <button class="btn default add-cart">
            Add to Cart</button>
        </div> */}
        <div>
          {isInCart ? (
            <button class="btn default add-cart goto-cart-btn">
            <NavLink to="/cart">Go to cart</NavLink></button>
          ):(
            <button class="btn default add-cart" onClick={addToCartHandler}>
            Add to Cart</button>
      
          )}
        </div>
       
      </div>
    </>
  );
}
