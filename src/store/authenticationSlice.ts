import { createSlice } from "@reduxjs/toolkit";

const authenticationInitialState = {
  isAuthenticated: false,
};
const authenticationSlice = createSlice({
  name: "authentication",
  initialState: authenticationInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authenticationSlice.actions;
export default authenticationSlice.reducer;