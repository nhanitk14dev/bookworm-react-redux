import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import {
  IUser,
  UsersType,
  EditUserFormType,
  AuthDefault,
  UserDefault,
} from "../models";
import axios from "axios";

const baseAPI = process.env.REACT_APP_API_BASE_URL;
export const initialState: UsersType = {
  users: [],
  auth: AuthDefault,
  editUser: UserDefault,
  isLoggedIn: false,
  status: "",
  msgError: "",
  flashMessage: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        // Add new users to list users
        state.users = [...state.users, action.payload];
        state.status = "succeeded";
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed";
        state.msgError = action.error.message;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.editUser = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.msgError = "Not found";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.editUser = action.payload;
        state.status = "succeeded";
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.msgError = action.error.message;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.status = "loading";
      });
  },
});

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (id: string, thunkAPI) => {
    try {
      const response = await fetch(`${baseAPI}/users/${id}`);

      // Note: use Ok to check request, use 'status' not working to access rejected action
      if (!response.ok) {
        return thunkAPI.rejectWithValue(response);
      }

      return response.json();
    } catch (e: any) {
      if (!e.response) {
        throw e;
      }
      thunkAPI.rejectWithValue(e);
    }
  }
);

// Fetch list Users
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (params: any, thunkAPI) => {
    try {
      const response = await axios.get(`${baseAPI}/users`, { params: params });
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

// Add New User
export const addUser = createAsyncThunk(
  "users/addUser",
  async (params: IUser, thunkAPI) => {
    try {
      const response = await axios.post(`${baseAPI}/users/create`, params, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(params);
    }
  }
);

// Update User
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (params: EditUserFormType, thunkAPI) => {
    try {
      const response = await axios.put(
        `${baseAPI}/users/update/${params.id}`,
        params,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(params);
    }
  }
);

// Export States
export const userStateSelector = (state: RootState) => state.user;

const selectUsers = (state: UsersType) => state.users;
const selectUserId = (_: UsersType, userId: string) => userId;

export const getUserDetailSelector = createSelector(
  selectUsers,
  selectUserId,
  (users, userId) =>
    users.filter((x) => `${x.id}`.toString() === userId).shift()
);

export default userSlice;
