import { lazy } from "react";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

const routes = [
  {
    component: <Home />,
    path: "/",
  },
  {
    component: <About />,
    path: "/about",
  },
  {
    component: <Contact />,
    path: "/contact",
  },
];

export default routes;
