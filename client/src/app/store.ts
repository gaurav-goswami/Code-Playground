import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "./service/Authentication";

const store = configureStore({
    reducer : {
        [AuthApi.reducerPath] : AuthApi.reducer
    },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat([AuthApi.middleware, ])
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;