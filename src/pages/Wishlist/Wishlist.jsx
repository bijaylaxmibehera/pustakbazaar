import "./Wishlist.css";
import { useContext } from "react";
import { AuthContext, DataContext } from "../../";
import { CalculateDiscount } from "../../utilities/CalculateDiscount";
import { isProductInCart } from "../../utilities/ProductUtilities";
import { addToCart } from "../../services/CartService";
import { removedFromWishlist } from "../../services/WishlistService";
import { NavLink } from "react-router-dom";

export function Wishlist() {
  const { wishlist,cart,dataDispatch } = useContext(DataContext);
  const {token}=useContext(AuthContext);

 const handleRemoveFromWishlist=(product)=>{
    removedFromWishlist(dataDispatch, product._id, token)
 }

  const handleMoveToCart=(product)=>{
    addToCart(dataDispatch, product, token);
    removedFromWishlist(dataDispatch, product._id, token)
  }

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>
        My wishlist({wishlist.length})
      </h3>
      {wishlist.length === 0 ? (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh", fontWeight:"var(--font-semiBold)", fontSize:"1.2rem"}}>
        <p>Your wishlist is empty</p>
        </div>
      ) : (
        <div className='responsive-grid'>
          {wishlist.map(item => {
            const {
              _id: id,
              img,
              name,
              author,
              price,
              originalPrice,
              isBestSeller,
              rating
            } = item
            return (
              <div key={id} className='card'>
                <img className='card-img' src={img} alt={name} />
                {isBestSeller && (
                  <span className='card-badge'>Best Seller</span>
                )}
                <span
                  role='button'
                  className='wishlist-icon'
                  onClick={() => handleRemoveFromWishlist(item)}
                  style={{ color: 'var(--danger)' }}
                >
                  <i className='fa fa-heart' aria-hidden='true'></i>
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
                  <p className='price-percentage'>
                    <CalculateDiscount
                      price={price}
                      originalPrice={originalPrice}
                    />
                    % Off
                  </p>
                </div>
                {isProductInCart(cart, id) ? (
                     <NavLink to='/cart'>
                     <button
                       className='btn default add-cart'
                       style={{ backgroundColor: 'var(--link)' }}
                     >
                       Already in cart
                     </button>
                   </NavLink>
                ):(<button
                    className='btn default add-cart'
                    onClick={() => handleMoveToCart(item)}
                  >
                    Move to cart
                  </button>)}
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

