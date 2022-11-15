/*
 @deprecated
 We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
 Using configureStore: https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-configurestore
*/

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootReducers from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware],
});

// then run the saga
sagaMiddleware.run(rootSaga)
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
