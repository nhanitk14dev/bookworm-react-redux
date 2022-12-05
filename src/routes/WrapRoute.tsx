import { Navigate } from "react-router-dom";
import { ChildComponentProps } from "../models";

const WrapRoute = ({
  children,
  checkAuth,
}: ChildComponentProps): JSX.Element => {
  let userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn") ?? "");
  if (checkAuth && !userLoggedIn?.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default WrapRoute;
