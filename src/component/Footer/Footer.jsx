import { NavLink } from "react-router-dom";
import "./Footer.css";
export function Footer() {
  return (
    <>
      {/* <h1>Footer</h1> */}
      <div className="footer-section">
        <div className="left-sec">
          <h1>Connect with me</h1>
          <div>
            <a href="https://github.com/bijaylaxmibehera" target="_blank">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/bijaylaxmi_b"  target="_blank">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/bijaylaxmibehera/"  target="_blank">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="middle-sec">
            <h1>Pustak Bazaar</h1>
            <p>Your online bazaar for all books</p>
            <p>&copy; 2023 PUSTAK BAZAAR</p>
        </div>
        <div className="right-sec">
            <h1>Quick links</h1>
            <div>
                <NavLink to="/signup">Signup</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Books</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <NavLink to="/wishlist">Wishlist</NavLink>

                 
            </div>
        </div>
      </div>
    </>
  );
}