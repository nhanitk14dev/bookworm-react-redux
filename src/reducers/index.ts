/* 
  https://redux.js.org/api/combinereducers/
*/

import { combineReducers } from 'redux';
import { UsersReducerType, usersReducer } from './users.reducer'

export interface RootState {
    userState: UsersReducerType
}

// reducers: (state, action) => newState
export const rootReducers = combineReducers<RootState>({
    // todos: myTodosReducer
    userState: usersReducer
});

export default rootReducers;