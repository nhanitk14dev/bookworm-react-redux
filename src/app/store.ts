import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import { userServiceApi } from "../services/userService";
import { setupListeners } from '@reduxjs/toolkit/query'

// RTK's configureStore API already adds the thunk middleware by default:
const store = configureStore({
    reducer: {
        user: userReducer,
        // Add the generated reducer as a specific top-level slice use RTK Query
        [userServiceApi.reducerPath]: userServiceApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaulMiddleware) => getDefaulMiddleware().concat(userServiceApi.middleware)
});

// Type all states of store
export type RootState = ReturnType<typeof store.getState>
// Type dispatch of store
export type AppDispatch = typeof store.dispatch;

export default store;


// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)