import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Card = lazy(() => import('../pages/card/Card'));
const SignUp = lazy(() => import('../pages/auth/SignUp'));

const routes = [
    {
        component: Home,
        path: '/'
    }
]

export default routes;