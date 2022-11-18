/*
  Nested Routes: https://reactrouter.com/en/main/start/overview
*/

import { lazy } from 'react';

const ListUser = lazy(() => import('../pages/user/ListUser'));
const AddUser = lazy(() => import('../pages/user/AddUser'));
const EditUser = lazy(() => import('../pages/user/EditUser'));
const Contact = lazy(() => import('../pages/Contact'));

const routes = [
  { 
    path: '/users', element: <ListUser /> },
  { path: '/users/add-new', element: <AddUser /> },
  { path: '/users/:userId/edit', element: <EditUser /> },
  { path: '/contact', element: <Contact /> },
];

export default routes;