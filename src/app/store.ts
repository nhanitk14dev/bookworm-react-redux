import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer
    }
});

// Type all states of store
export type RootState = ReturnType<typeof store.getState>
// Type dispatch of store
export type AppDispatch = typeof store.dispatch;

export default store;