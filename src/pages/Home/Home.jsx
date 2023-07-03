import "./Home.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { DataContext ,FilterContext} from "../../";

export function Home() {
  const { categories } = useContext(DataContext);
  const { dispatchFilters } = useContext(FilterContext)

  const setCategory = category => {
    dispatchFilters({ type: 'ADD_CATEGORY', payload: category })
  }

  return (
    <>
      <main>
        <div className="background-overlay">
          <img
            src="https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div className="main-text">
          <p>Welcome to pustakbazaar!</p>
          <h1>
          For all book lovers, a one-stop online shop
          </h1>
          <button className="btn secondary shop-btn">
            <NavLink to="/products">
              Browse Collection
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </NavLink>
          </button>
        </div>
      </main>
      <section className="available-category">
        <h1>Shop by category</h1>
        <div className="category-btn responsive-grid">
          {categories.map((itemCat) => (
            <>
              <div key={itemCat} className="category-card-overlay">
                <NavLink to="/products">
                  <button onClick={() => setCategory(itemCat)}>{itemCat}</button>
                </NavLink>
              </div>
            </>
          ))}
        </div>
      </section>
      <section className="quality-service">
        <h1>We provide best customer experience</h1>
        <div className="responsive-grid quality">
          <div>
            <TaskAltIcon color="success" />
            <p>Best quality paper</p>
          </div>
          <div>
            <SwapHorizIcon color="secondary"/>
            {/* <i class="fa fa-exchange" aria-hidden="true"></i> */}
            <p>Easy return within 7 days</p>
          </div>
          <div>
            <PhoneCallbackIcon color="success" />
            <p>24 X 7 customer support</p>
          </div>
          <div>
            <i class="fa fa-truck" aria-hidden="true"></i>
            <p>Fast delivery</p>
          </div>
        </div>
      </section>
     
    </>
  );
}
