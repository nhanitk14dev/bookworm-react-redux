/*
  https://reactjs.org/docs/code-splitting.html
  https://reactrouter.com/en/main/route/loader
  loader: function to provide data to the route element before it renders.
  type vs interface: https://www.typescriptlang.org/play#example/types-vs-interfaces
*/

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Spinner from "./components/Spinner";
import WrapRoute from "./routes/WrapRoute";
import Public from "./routes/Public";
import Private from "./routes/Private";
import { map } from "lodash";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

const SignUp = lazy(() => import("./pages/auth/SignUp"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AuthLayout = lazy(() => import("./pages/auth/AuthLayout"));
const Login = lazy(() => import("./pages/auth/Login"));

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="singup" element={<SignUp />} />
            </Route>
            <Route path="/" element={<Layout />}>
              {map(Private, (route, key: string) => {
                const { component, path } = route;
                return (
                  <Route
                    path={path}
                    key={key}
                    element={<WrapRoute children={component} checkAuth={true}/>}
                  />
                );
              })}
              {map(Public, (route, key: string) => {
                const { component, path } = route;
                return (
                  <Route
                    path={path}
                    key={key}
                    element={<WrapRoute children={component} />}
                  />
                );
              })}
            </Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </Router>
  );
};

export default App;
