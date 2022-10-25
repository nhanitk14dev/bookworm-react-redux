// https://reactjs.org/docs/code-splitting.html
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Card = lazy(() => import('./pages/card/Card'));
const SignUp = lazy(() => import('./pages/auth/SignUp'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='card' element={<Card />}></Route>
            <Route path='signup' element={<SignUp />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;