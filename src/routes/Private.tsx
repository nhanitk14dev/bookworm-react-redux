/*
  Nested Routes: https://reactrouter.com/en/main/start/overview
*/

import { lazy } from 'react';

const ListUser = lazy(() => import('../pages/user/ListUser'));
const AddUser = lazy(() => import('../pages/user/AddUser'));
const EditUser = lazy(() => import('../pages/user/EditUser'));
const EditUserRTKQuery = lazy(() => import('../pages/user/EditUserRTKQuery'));

export default {
  ListUser: {
    path: '/users',
    component: ListUser
  },
  AddUser: {
    path: "/users/add-new",
    component: AddUser,
  },
  EditUser: {
    path: "/users/:userId/edit",
    component: EditUser,
  },
  EditUserRTKQuery: {
    path: "/users/:userId/edit-RTKquery",
    component: EditUserRTKQuery,
  }
};