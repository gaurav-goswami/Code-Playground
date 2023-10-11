import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "./service/Authentication";
import { PlaygroundApi } from "./service/Playground";
import SignupSlice from "./feature/SignupSlice";
import AuthSlice from "./feature/AuthSlice";

const store = configureStore({
    reducer : {
        [AuthApi.reducerPath] : AuthApi.reducer,
        [PlaygroundApi.reducerPath] : PlaygroundApi.reducer,
        signUp : SignupSlice,
        auth : AuthSlice
    },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat([AuthApi.middleware, PlaygroundApi.middleware])
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;