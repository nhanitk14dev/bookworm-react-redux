// https://v5.reactrouter.com/web/example/route-config
// https://github.com/remix-run/react-router/blob/c13b66939ef48eacf7067f7aec4752777be8b17c/docs/api-reference.md
// Here is a different implementation of PrivateRoute using Outlet
// https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5
// Type declaration route

type IRouteProps = {
  ComponentProp: any
}

const PublicRoute = ({ ComponentProp }: IRouteProps): JSX.Element =>{
  return (<ComponentProp />);
};

export default PublicRoute;