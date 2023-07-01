import { createContext, useState } from "react";
import { loginService, signUpService } from "../services/AuthService";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const loginHandler=({email,password})=>{
    console.log("login handler called")
  }

  const signUpHandler=({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
  })=>{
    console.log("sign up handler called")
  }

  return (
    <>
      <AuthContext.Provider value={{loginHandler,signUpHandler}}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
