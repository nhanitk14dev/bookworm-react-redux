/*
  createSlice: https://redux-toolkit.js.org/api/createSlice
  Redux Toolkit: We use createSlice which handles the action and reducer in a single function.
  Thunk: Promise Lifecycle Actions https://redux-toolkit.js.org/api/createAsyncThunk
  pending: 'users/requestStatus/pending'
  fulfilled: 'users/requestStatus/fulfilled'
  rejected: 'users/requestStatus/rejected'
  https://www.typescriptlang.org/docs/handbook/modules.html#exporting-a-declaration
  Writing Logic with Thunks: https://redux.js.org/usage/writing-logic-thunks
*/

import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { IUser } from "../../models";
import axios from "axios";
export interface ILoginForm extends IUser {
  isFetching?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
}

const baseAPI = process.env.REACT_APP_API_BASE_URL;

type UserState = {
  users: IUser[];
  auth: any;
  isLoggedIn: boolean;
  status?: string;
  msgError?: string;
  flashMessage?: string;
  editingUser?: any;
};

const initialState: UserState = {
  users: [],
  auth: null,
  isLoggedIn: false,
  status: "",
  msgError: "",
  flashMessage: "",
  editingUser: "",
};


export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout(state) {
      state.auth = null;
      localStorage.removeItem("userLoggedIn");
    },
    // Reducer comes here
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "succeeded";
          state.isLoggedIn = true;
          const userLoggedIn = { ...action.payload, isLoggedIn: true };
          localStorage.setItem("userLoggedIn", JSON.stringify(userLoggedIn));
        } else {
          state.status = "failed";
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.msgError = action.error.message;
      })
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
        state.editingUser = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.msgError = "Not found";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.editingUser = action.payload;
        state.status = "succeeded";
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.msgError = action.error.message;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.status = "pending";
      });
  },
});

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ email, password }: IUser, thunkAPI) => {
    try {
      const res = await axios
        .get(`${baseAPI}/users`, {
          params: {
            email: email,
            password: password,
          },
        })
        .then((res) => {
          return Array.isArray(res.data) ? res.data.shift() : res.data;
        })
        .catch((error) => {
          thunkAPI.rejectWithValue(error);
        });

      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

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
  async (params: IUser, thunkAPI) => {
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

// Export actions
export const { logout } = userSlice.actions;

/*
  https://redux.js.org/usage/deriving-data-selectors#createselector-overview
  Reselect provides a function called createSelector to generate memoized selectors.
*/

const selectUsers = (state: UserState) => state.users;
const selectUserId = (_: UserState, userId: string) => userId;

export const getUserDetailSelector = createSelector(
  selectUsers,
  selectUserId,
  (users, userId) =>
    users.filter((x) => `${x.id}`.toString() === userId).shift()
);

// Export userReducer as default
export default userSlice.reducer;
