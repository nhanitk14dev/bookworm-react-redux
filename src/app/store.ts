/*
 @deprecated
 We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
*/

import { compose, applyMiddleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer: {
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;