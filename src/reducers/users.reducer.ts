/*
  basic rules of reducers: (state, action) => newState
  Redux: https://redux.js.org/usage/usage-with-typescript
*/

import { createSelector } from '@reduxjs/toolkit';
import { IUser, IAction, ActionType } from '../models'

export type UsersReducerType = {
  users: IUser[];
  user: any;
  error: string;
  isLoading: boolean;
  userId: string;
  status: string;
  auth: any;
}

export const initalUsersState: UsersReducerType = {
  users: [],
  user: {},
  isLoading: false,
  userId: '',
  status: '',
  error: '',
  auth: {}
}

export const usersReducer = (
  state: UsersReducerType = initalUsersState,
  action: IAction<IUser[]>
) => {
  switch (action.type) {
    case ActionType.USERS_FETCH_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case ActionType.USERS_FETCH_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        users: action.payload
      }
    case ActionType.USERS_FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        error: 'Fetch users failed'
      }
    case ActionType.USER_DETAIL_FETCH_SUCCEEDED:
      return {
        ...state,
        user: action.payload
      }
    case ActionType.USER_DETAIL_FETCH_FAILED:
      return {
        ...state,
        error: 'Not found item'
      }
    case ActionType.USER_UPDATE_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case ActionType.USER_UPDATE_SUCCEEDED:
      return {
        ...state,
        user: action.payload,
        status: ActionType.USER_UPDATE_SUCCEEDED,
        isLoading: false
      }
    case ActionType.USER_UPDATE_FAILED:
      return {
        ...state,
        status: ActionType.USER_UPDATE_FAILED,
        isLoading: false
      }
    case ActionType.USER_CREATE_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case ActionType.USER_CREATE_SUCCEEDED:
      return {
        ...state,
        user: action.payload,
        status: ActionType.USER_CREATE_SUCCEEDED,
        isLoading: false
      }
    case ActionType.USER_CREATE_FAILED:
      return {
        ...state,
        status: ActionType.USER_CREATE_FAILED,
        isLoading: false
      }

    // authentication
    case ActionType.USER_LOGIN_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case ActionType.USER_LOGIN_SUCCEEDED:
      return {
        ...state,
        auth: action.payload,
        status: ActionType.USER_LOGIN_SUCCEEDED,
        isLoading: false
      }
    case ActionType.USER_LOGIN_FAILED:
      return {
        ...state,
        status: ActionType.USER_LOGIN_FAILED,
        isLoading: false
      }
    default:
      return state;
  }
}

/*
  https://redux.js.org/usage/deriving-data-selectors#createselector-overview
  Reselect provides a function called createSelector to generate memoized selectors.
*/

const selectUsers = (state: UsersReducerType) => state.users;
const selectUserId = (_: UsersReducerType, userId: string) => userId;

export const getUserDetailSelector = createSelector(
  selectUsers, selectUserId,
  (users, userId) => users.filter(x => (`${x.id}`).toString() === userId).shift()
);