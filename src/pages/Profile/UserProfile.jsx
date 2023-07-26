import "./UserProfile.css";
import { AuthContext } from "../../";
import { useContext } from "react";
import Avatar from "./Avatar/Avatar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export function UserProfile() {
  const { currentUser, logoutHandler } = useContext(AuthContext);

  //   console.log(currentUser);
  const navigate = useNavigate();
  const location = useLocation();

  if (!currentUser) {
    return navigate(location?.state?.from?.pathname ?? "/login");
  }

  const { firstName, lastName, email } = currentUser;

  return (
    <>
      {currentUser && (
        <div className="user-profile">
          <div className="user-avatar">
            <Avatar name={firstName} />
          </div>
          <div className="current-user-info">
            <h3>
              {firstName} {lastName}
            </h3>
            <p className="user-info">
              <span>Email: </span> {email}
            </p>
            <div className="action-btn">
              <button className="btn secondary">
                <NavLink to="/address">Manage address</NavLink>
              </button>
              <button onClick={() => logoutHandler()} className="btn primary">
                <NavLink to="/">Logout</NavLink>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
