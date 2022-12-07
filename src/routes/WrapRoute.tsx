import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hook";
import { ChildComponentProps } from "../models";

const WrapRoute = ({
  children,
  checkAuth,
}: ChildComponentProps): JSX.Element => {
  const { auth } = useAppSelector((state) => state.auth);

  // Handle protect for private routes
  if (checkAuth) {
    if (checkAuth && !auth?.isLoggedIn) {
      return <Navigate to="/login" />;
    }
  }

  return children;
};

export default WrapRoute;
