import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../";

export function PrivateRoute({ children }) {
  const { token } = useContext(AuthContext);
  const location = useLocation();

  return token ? (children):(<Navigate to="/login" state={{from:location}} replace/>)
}
