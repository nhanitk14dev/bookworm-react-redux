/*
  basic rules of reducers: (state, action) => newState
  Redux: https://redux.js.org/usage/usage-with-typescript
*/

import { IUser, IAction, ActionType } from '../models/user.model'

export interface UsersReducerType {
  users: IUser[];
  error: string;
  isLoading: boolean
}

export const initalUsersState: UsersReducerType = {
  users: [],
  error: '',
  isLoading: false
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
    default:
      return state;
  }
}