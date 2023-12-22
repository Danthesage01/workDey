import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  auth: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, actions) {
      [state.auth] = [...state.auth, actions.payload];
    },
  },
});

export const { setAuth } = authSlice.actions;

export const selectFromAuth = (state) => state.auth.auth;

export default authSlice.reducer;
