import "./ProductCard.css";
import { CalculateDiscount } from "../../utilities/CalculateDiscount";


export function ProductCard({ product }) {
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
        <div class="bottom-btn cart">
          <button class="btn default add-cart">
            Add to Cart</button>
        </div>
      </div>
    </>
  );
}
