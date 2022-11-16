/*
  basic rules of reducers: (state, action) => newState
  Redux: https://redux.js.org/usage/usage-with-typescript
*/

import { createSelector } from '@reduxjs/toolkit';
import { IUser, IAction, ActionType } from '../models/user.model'

export interface UsersReducerType {
  users: IUser[];
  user: any;
  error: string;
  isLoading: boolean;
  userId: string
}

export const initalUsersState: UsersReducerType = {
  users: [],
  user: undefined,
  error: '',
  isLoading: false,
  userId: ''
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
        error: 'Call Api fetch users is error'
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