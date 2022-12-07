import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginFormType, AuthDefault, AuthType } from "../models";
import axios from "axios";

const baseAPI = process.env.REACT_APP_API_BASE_URL;
const userLocalStorage = localStorage.getItem("userLoggedIn");
const userLoggedIn = userLocalStorage
  ? JSON.parse(userLocalStorage)
  : AuthDefault;

const initialState: AuthType = {
  auth: userLoggedIn,
  status: "",
  msgError: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout() {
      localStorage.removeItem("userLoggedIn");
      return {
        ...initialState,
        auth: AuthDefault,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const data = Array.isArray(action.payload)
          ? action.payload.shift()
          : action.payload;

        state.status = "succeeded";
        if (data) {
          state.auth = { ...data, isLoggedIn: true };
          localStorage.setItem("userLoggedIn", JSON.stringify(state.auth));
        } else {
          state.msgError = "Email or password incorrect";
        }
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "failed";
        state.msgError = "Something is error.";
      });
  },
});

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ email, password }: LoginFormType, thunkAPI) => {
    try {
      const res = await axios.get(`${baseAPI}/users`, {
        params: {
          email: email,
          password: password,
        },
      });

      return await res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// Export actions
export const { logout } = authSlice.actions;

// Export reducer as default
export default authSlice;
