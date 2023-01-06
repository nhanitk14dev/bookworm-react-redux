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
import Public from './routes/Public';
import Private from './routes/Private';
import LoginAuthenticated from './routes/LoginAuthenticated'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import { map } from 'lodash';
import { useState } from 'react';
import { ThemeContext } from './app/hooks/useTheme';
const SignUp = lazy(() => import('./pages/auth/SignUp'));
const AuthLayout = lazy(() => import('./pages/auth/AuthLayout'));
const Login = lazy(() => import('./pages/auth/Login'));

const App = () => {
  const [theme, setTheme] = useState('light')
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path='/' element={<AuthLayout />}>
                <Route path='login' element={<Login />} />
                <Route path='singup' element={<SignUp />} />
                <Route path='logout' />
              </Route>
              <Route path='/' element={<Layout />}>
                {
                  map(Public, (route, key) => {
                    const { index, element, path } = route;
                    return (
                      <Route
                        index={index}
                        path={path}
                        key={key}
                        element={element}
                      />
                    );
                  })
                }
                {
                  map(Private, (route, key) => {
                    const { element, path } = route;
                    return (
                      <Route
                        path={path}
                        key={key}
                        element={<LoginAuthenticated>{element}</LoginAuthenticated>}
                      />
                    );
                  })
                }
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;