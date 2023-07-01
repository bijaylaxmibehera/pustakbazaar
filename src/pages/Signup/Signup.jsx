import "./Signup.css";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../";

export function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signUpHandler } = useContext(AuthContext);

  const handleUserSubmit = (e) => {
    e.preventDefault();
    signUpHandler(signupInfo);
    setSignupInfo({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <>
      <div className="signup-page">
        <h2>Sign up</h2>
        <form onSubmit={handleUserSubmit}>
          <label>
            <p>First name</p>
            <input
              type="text"
              className="signup-input"
              placeholder="John"
              name="firstName"
              required
              value={signupInfo.firstName}
              onChange={(e) =>
                setSignupInfo((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
            />
          </label>
          <label>
            <p>Last name</p>
            <input
              type="text"
              className="signup-input"
              placeholder="Doe"
              name="lastName"
              required
              value={signupInfo.lastName}
              onChange={(e) =>
                setSignupInfo((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
          </label>
          <label>
            <p>Email</p>
            <input
              type="email"
              className="signup-input"
              placeholder="john@pustakbazaar.com"
              name="email"
              required
              value={signupInfo.email}
              onChange={(e) =>
                setSignupInfo((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              className="signup-input"
              placeholder="*******"
              name="password"
              required
              value={signupInfo.password}
              onChange={(e) =>
                setSignupInfo((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </label>
          <label>
            <p>Confirm Password</p>
            <input
              type="password"
              className="signup-input"
              placeholder="*******"
              name="password"
              required
              value={signupInfo.confirmPassword}
              onChange={(e) =>
                setSignupInfo((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
          </label>
          <label className="signUp_label_accept">
            <input type="checkbox" required />
            <p>I accept terms and conditions</p>
          </label>
          <div className="btn-container">
            <button type="submit" className="signUp_btn">
              <p>Sign Up</p>
            </button>

            <button className="signUp_btn_login">
              <NavLink className="navlink" to="/login">
                <p>Already have an account?</p>
              </NavLink>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
