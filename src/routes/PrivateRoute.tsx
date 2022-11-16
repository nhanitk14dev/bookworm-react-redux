// https://v5.reactrouter.com/web/example/route-config
// https://github.com/remix-run/react-router/blob/c13b66939ef48eacf7067f7aec4752777be8b17c/docs/api-reference.md
// Here is a different implementation of PrivateRoute using Outlet
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