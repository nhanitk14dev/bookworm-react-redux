import { Navigate } from "react-router-dom";
import { IRoute } from "../models";

const LoginAuthenticated = ({ children }: IRoute) => {

  const isLoggedIn = localStorage.getItem('token');
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default LoginAuthenticated;