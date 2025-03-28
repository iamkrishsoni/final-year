import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInformation: null,
  },
  reducers: {
    setUserInformation: (state, action) => {
      state.userInformation = action.payload;
    },
    clearUserInformation: (state) => {
      state.userInformation = null;
    },
  },
});

export const { setUserInformation, clearUserInformation } = userSlice.actions;

export default userSlice.reducer;
