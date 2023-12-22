import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { Alert } from "react-native";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register New User
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    const response = await authService.fetchUser("register", userData);
    return response;
  }
);

// Login User
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log(user, "from slice login");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, () => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

// import axios from "axios";

// const API_URL =
//   "http://ec2-18-191-219-31.us-east-2.compute.amazonaws.com:8000/v1";

// // Register User
// const fetchUser = async (endpoint, userData) => {
//   const response = await axios.post(`${API_URL}/${endpoint}`, userData);
//   console.log(response);

//   return response.data;
// };

// const authService = {
//   fetchUser,
// };

// export default authService;
