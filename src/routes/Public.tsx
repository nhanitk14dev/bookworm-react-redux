import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Card = lazy(() => import('../pages/card/Card'));

export default {
    Home: {
        component: Home,
        path: '/'
    },
    About: {
        component: About,
        path: '/about'
    },
    Contact: {
        component: Contact,
        path: '/contact'
    },
    Card: {
        component: Card,
        path: '/card'
    }
};