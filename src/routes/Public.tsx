import { lazy } from "react";

const Home = lazy(() => import("../pages/homePage"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const HookExample = lazy(() => import("../pages/hookExamplePage"))

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
  {
    component: <HookExample />,
    path: "/hooks",
  },
];

export default routes;
