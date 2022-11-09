/*
  https://reactjs.org/docs/code-splitting.html
  https://reactrouter.com/en/main/route/loader
  loader: function to provide data to the route element before it renders.
  type vs interface: https://www.typescriptlang.org/play#example/types-vs-interfaces
*/

import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Spinner from "./components/Spinner";
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Public from './routes/Public';
import Private from './routes/Private';
import _ from 'lodash';
const SignUp = lazy(() => import('./pages/auth/SignUp'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const AuthLayout = lazy(() => import('./pages/auth/AuthLayout'));
const Login = lazy(() => import('./pages/auth/Login'));

const App: React.FunctionComponent = () => {

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='singup' element={<SignUp />} />
            <Route path='logout' />
          </Route>
          <Route path='/' element={<Layout />}>
            {
              _.map(Private, (route, key: string) => {
                const { component, path } = route;
                return (
                  <Route
                    path={path}
                    key={key}
                    element={<PrivateRoute ComponentProp={component} />}
                  />
                );
              })
            }
            {
              _.map(Public, (route, key: string) => {
                const { component, path } = route;
                return (
                  <Route
                    path={path}
                    key={key}
                    element={<PublicRoute ComponentProp={component} />}
                  />
                );
              })
            }
            <Route path='*' element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;