/*
  Nested Routes: https://reactrouter.com/en/main/start/overview
*/

import { lazy } from "react";

const ListUser = lazy(() => import("../pages/user/ListUser"));
const AddUser = lazy(() => import("../pages/user/AddUser"));
const EditUser = lazy(() => import("../pages/user/EditUser"));
const EditUserRTKQuery = lazy(() => import("../pages/user/EditUserRTKQuery"));

const routes = [
  {
    path: "/users",
    component: <ListUser />,
  },
  {
    path: "/users/add-new",
    component: <AddUser />,
  },
  {
    path: "/users/:userId/edit",
    component: <EditUser />,
  },
  {
    path: "/users/:userId/edit-RTKquery",
    component: <EditUserRTKQuery />,
  },
];

export default routes;
