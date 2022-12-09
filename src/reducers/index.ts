/* 
  https://redux.js.org/api/combinereducers/
*/

import { combineReducers } from "redux";
import { UsersReducerType, usersReducer } from "./users.reducer";
import { AuthReducerType, authReducer } from "./auth.reducers";

export interface RootState {
  userState: UsersReducerType;
  authState: AuthReducerType;
}

export const rootReducers = combineReducers<RootState>({
  userState: usersReducer,
  authState: authReducer,
});

export default rootReducers;
