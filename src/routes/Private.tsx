/*
  Nested Routes: https://reactrouter.com/en/main/start/overview
*/

import { lazy } from "react";

const ListUser = lazy(() => import("../pages/users"));
const AddUser = lazy(() => import("../pages/users/AddUser"));
const EditUser = lazy(() => import("../pages/users/EditUser"));

const routes = [
  {
    path: "/users",
    element: <ListUser />,
  },
  { path: "/users/add-new", element: <AddUser /> },
  { path: "/users/:userId/edit", element: <EditUser /> }
];

export default routes;
