import { createSlice , PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  isAuth: localStorage.getItem("set_auth") || null
};
export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setAuth: (state, action : PayloadAction<string | null>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
