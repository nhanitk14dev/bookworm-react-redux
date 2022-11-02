/*
  https://reactjs.org/docs/code-splitting.html
  https://reactrouter.com/en/main/route/loader
  loader: function to provide data to the route element before it renders.
*/

import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Spinner from "./components/Spinner";
const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Card = lazy(() => import('./pages/card/Card'));
const SignUp = lazy(() => import('./pages/auth/SignUp'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const AuthLayout = lazy(() => import('./pages/auth/AuthLayout'));
const Login = lazy(() => import('./pages/auth/Login'));

const App = () => {

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='card' element={<Card />}></Route>
            <Route path='signup' element={<SignUp />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Route>
          <Route element={<AuthLayout />}>
            <Route
              path='login'
              element={<Login />}
            />
            <Route path='logout' />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;