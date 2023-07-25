import "./Home.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { DataContext, FilterContext } from "../../";
import { Loading } from "../../component/Loading/Loading";
import { Footer } from "../../component/Footer/Footer";

export function Home() {
  const { categories, loader } = useContext(DataContext);
  const { dispatchFilters } = useContext(FilterContext);

  const setCategory = (category) => {
    dispatchFilters({ type: "ADD_CATEGORY", payload: category });
  };

  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <>
          <main>
            <div className="background-overlay">
              <img
                src="https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div className="hero-section">
              <div className="main-text">
                <p>Welcome to pustakbazaar!</p>
                <h1>For all book lovers, a one-stop online shop</h1>
                <button className="btn secondary shop-btn">
                  <NavLink to="/products">
                    Browse Collection
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </NavLink>
                </button>
              </div>
              {/* <div className="hero-img">
                <img src="../../assets/undraw_book_lover_re_rwjy.svg" alt="hero image"/>
              </div> */}
            </div>
          </main>
          <section className="available-category">
            <h1>Shop by category</h1>
            <div className="category-btn responsive-grid">
              {categories.map((itemCat) => (
                <>
                  <div key={itemCat} className="category-card-overlay">
                    <NavLink to="/products">
                      <button onClick={() => setCategory(itemCat)}>
                        {itemCat}
                      </button>
                    </NavLink>
                  </div>
                </>
              ))}
            </div>
          </section>
          <section className="quality-service">
            <div className="service-heading">
              <h1>We provide best customer experience</h1>
              <small>
                We ensure our customers have best shopping experience
              </small>
            </div>

            <div className="responsive-grid quality">
              <div>
                <TaskAltIcon color="success" />
                <h4>Best quality paper</h4>
                <p>
                  We provide money back guarentee if the paper quality are not
                  good
                </p>
              </div>
              <div>
                <SwapHorizIcon color="secondary" />
                {/* <i class="fa fa-exchange" aria-hidden="true"></i> */}
                <h4>Easy return within 7 days</h4>
                <p>
                  We provide easy return policy if you are not satisfy with
                  product quality
                </p>
              </div>
              <div>
                <PhoneCallbackIcon color="success" />
                <h4>24 X 7 customer support</h4>
                <p>We are available to answer your query</p>
              </div>
              <div>
                <i class="fa fa-truck" aria-hidden="true"></i>
                <h4>Fast delivery</h4>
                <p>We offer fast and free shipping for our loyal customer</p>
              </div>
            </div>
          </section>
          <footer>
            <Footer/>
          </footer>
        </>
      )}
    </>
  );
}
