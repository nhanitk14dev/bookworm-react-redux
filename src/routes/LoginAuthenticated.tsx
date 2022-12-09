import { Navigate } from "react-router-dom";
import { IRoute } from "../models";
import { useAppSelector } from "../app/hooks";

const LoginAuthenticated = ({ children }: IRoute) => {
  const { auth } = useAppSelector((state) => state.authState);

  if (!auth?.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default LoginAuthenticated;
