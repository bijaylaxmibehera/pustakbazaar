import { useContext, useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../";

export function Login() {
const {loginHandler,currentUser}=useContext(AuthContext);

const [loginDetails,setLoginDetails]=useState({email:"",password:""});
const testUserCredential={
    email: "bijaylaxmi@pustakbazaar.com",
    password: "bijaylaxmi",
}

const handleSubmit=(e)=>{
    e.preventDefault();
    loginHandler(loginDetails);
    setLoginDetails({email:"",password:""})
}
console.log(currentUser)
  return (
    <>
      <div className="login-page">
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <p>
              Email<span>*</span>
            </p>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="login-details"
              name="email"
              required
              value={loginDetails.email}
              onChange={(e) =>
                setLoginDetails((userInput) => ({
                  ...userInput,
                  email: e.target.value,
                }))
              }
            />
          </label>
          <label>
            <p>
              {" "}
              Password<span>*</span>
            </p>

            <input
              type="password"
              placeholder="*******"
              className="login-details"
              name="password"
              required
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails((userInput) => ({
                  ...userInput,
                  password: e.target.value,
                }))
              }
            />
          </label>
          <div className="btn-container">
          <button className="login-btn" type="submit">
            Login
          </button>
          <button
            className="testuser-btn"
            type="submit"
            onClick={() => setLoginDetails(testUserCredential)}
          >
            Login as test user
          </button>

          <button className="signup-btn">
            <NavLink to="/signup">Create new account <i class="fa fa-chevron-right" aria-hidden="true"></i></NavLink>
          </button>
          </div>
          
        </form>
      </div>
    </>
  );
}
