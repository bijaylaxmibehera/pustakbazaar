import "./Header.css";
import { NavLink } from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useContext } from "react";
import { DataContext } from "../../";

export function Header(){
  const {cart,wishlist}=useContext(DataContext);
    return (
        <>
       <nav>
        <div className='nav-left'>
          <h3>
            <NavLink to='/'><StorefrontIcon/>Pustakbazaar</NavLink>
          </h3>
        </div>
        <div className='nav-right'>
          <NavLink to='/' className='nav-list'>
          <i class="fa fa-home" aria-hidden="true"></i>
          </NavLink>
          {/* <NavLink to="/products" className="nav-list">Products</NavLink> */}
          <NavLink to='/wishlist' className='badge nav-list'>
            <div className='wishlist'>{wishlist.length}</div>
            <i className='fa fa-heart' aria-hidden='true'></i>
          </NavLink>
          <NavLink to='/cart' className='badge nav-list'>
            <div>{cart.length}</div>
            <i class='fa fa-shopping-cart' aria-hidden='true'></i>
          </NavLink>
          <NavLink to='/profile' className='nav-list'>
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          </NavLink>
        </div>
      </nav>
        </>
    )
}