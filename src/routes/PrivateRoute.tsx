import { Navigate } from "react-router-dom";

type IRouteProps = {
  ComponentProp: any
}

const PrivateRoute = ({ ComponentProp }: IRouteProps): JSX.Element => {

  const userLoggedIn = localStorage.getItem('userLoggedIn');

  return (
    <>
      {userLoggedIn ? <ComponentProp /> : <Navigate to="/login" />}
    </>);
};

export default PrivateRoute;