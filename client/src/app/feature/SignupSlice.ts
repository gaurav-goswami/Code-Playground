import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterUserState } from "../../Interface/Interface";

interface InitialState {
  user: null | IRegisterUserState;
}
interface IPayload extends IRegisterUserState {}

const initialState: InitialState = {
  user: null,
};
export const signUpSlice = createSlice({
  name: "signUpSlice",
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<IPayload>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserDetails } = signUpSlice.actions;
export default signUpSlice.reducer;