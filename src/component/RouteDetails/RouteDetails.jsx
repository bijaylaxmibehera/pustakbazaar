import { Route, Routes } from "react-router";
import Mockman from "mockman-js";
import { Home } from "../../pages/Home/Home";
import { Login } from "../../pages/Login/Login";
import { Signup } from "../../pages/Signup/Signup";
import { Product } from "../../pages/Product/Product";
import { SingleProduct } from "../../pages/SingleProduct/SingleProduct";
import { Cart } from "../../pages/Cart/Cart";
import { Wishlist } from "../../pages/Wishlist/Wishlist";
import { UserProfile } from "../../pages/Profile/UserProfile";
import { PrivateRoute } from "../PrivateRoutes/PrivateRoutes";

export function RouteDetails() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Product />} />
        <Route path="/books/:name/:id" element={<SingleProduct />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
