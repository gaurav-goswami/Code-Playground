import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  open: boolean;
}

const initialState: IinitialState = {
  open: false,
};

export const ShowSlice = createSlice({
  name: "showSlice",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean, string>) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = ShowSlice.actions;
export default ShowSlice.reducer;
