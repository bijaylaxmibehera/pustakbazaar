import { createContext, useState } from "react";
import { loginService, signUpService } from "../services/AuthService";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));

  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async ({ email, password }) => {
    try {
      const response = await loginService(email, password);
      const {
        status,
        data: { foundUser, encodedToken },
      } = response;
      if (status === 200) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setCurrentUser(foundUser);
        setToken(encodedToken);
        toast.success("Successfully signed in!");
        navigate(location?.state?.from?.pathname ?? "/");
      }
    } catch (err) {
      const {
        response: { status },
      } = err;
      if (status === 401) {
        toast.error("Invalid password! Please try again!");
      } else if (status === 404) {
        toast.error("Credentials not found! Please signup before logging in!");
      } else {
        console.error(err);
        toast.error("Unable to sign in!");
      }
    }
  };
  

  const signUpHandler=async ({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
  })=>
    {
      if (password !== confirmPassword) {
        toast.error("Password fields are not matching!");
        navigate("/signup");
      } else {
        try {
          const response = await signUpService(
            email,
            password,
            firstName,
            lastName
          );
  
          const {
            status,
            data: { encodedToken },
          } = response;
  
          if (status === 201) {
            localStorage.setItem(
              "loginDetails",
              JSON.stringify({
                token: encodedToken,
              })
            );
            setToken(encodedToken);
            toast.success("Successfully signed up! Kindly login to continue!");
            navigate("/login");
          }
        } catch (err) {
          const {
            response: { status },
          } = err;
          if (status === 422) {
            toast.error(
              "User email already exists! Please try signing up with another email!"
            );
          } else {
            console.error(err);
            toast.error("Unable to sign up!");
          }
        }
      }
  }

  const logoutHandler = () => {
    setToken(null);
    setCurrentUser(null);
    localStorage.removeItem("loginDetails");
    toast.success("Logged out successfully!");
    navigate(location?.state?.from?.pathname ?? "/");
  };


  return (
    <>
      <AuthContext.Provider value={{loginHandler,signUpHandler,currentUser,token,logoutHandler}}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
