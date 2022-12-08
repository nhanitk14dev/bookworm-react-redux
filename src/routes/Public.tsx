import { lazy } from 'react';
const Home = lazy(() => import('../pages/homePage'));
const About = lazy(() => import('../pages/About'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

const routes = [
  { index: true, element: <Home /> },
  { path: '/about', element: <About /> },
  { path: "*", element: <PageNotFound /> },
];

export default routes;