import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "./service/Authentication";
import SignupSlice from "./feature/SignupSlice";

const store = configureStore({
    reducer : {
        [AuthApi.reducerPath] : AuthApi.reducer,
        SignUp : SignupSlice,
    },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat([AuthApi.middleware, ])
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;