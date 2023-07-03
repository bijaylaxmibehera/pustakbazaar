import { Route, Routes } from "react-router";
import Mockman from 'mockman-js'
import { Login } from "../pages/Login/Login";
import { Signup } from "../pages/Signup/Signup";
import { Home } from "../pages/Home/Home";
import { Product } from "../pages/Product/Product";
import { UserProfile } from "../pages/Profile/UserProfile";

export function PrivateRoutes(){
    return (
        <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mockman" element={<Mockman/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/profile" element={<UserProfile/>}/>
        </Routes>
        </>
    )
}