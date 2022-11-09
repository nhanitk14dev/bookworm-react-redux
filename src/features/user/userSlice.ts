/*
  createSlice: https://redux-toolkit.js.org/api/createSlice
  Redux Toolkit: We use createSlice which handles the action and reducer in a single function.
  Thunk: Promise Lifecycle Actions https://redux-toolkit.js.org/api/createAsyncThunk
  pending: 'users/requestStatus/pending'
  fulfilled: 'users/requestStatus/fulfilled'
  rejected: 'users/requestStatus/rejected'
// https://www.typescriptlang.org/docs/handbook/modules.html#exporting-a-declaration
*/

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { IUser } from '../../models/user.model';
import axios from 'axios';
export interface ILoginForm extends IUser {
  isFetching?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
}

//https://www.typescripttutorial.net/typescript-tutorial/typescript-array-type/
type UserState = {
  users: IUser[],
  auth: any,
  isLoggedIn: boolean
}

const initialState: UserState = {
  users: [],
  auth: null,
  isLoggedIn: false
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logout(state) {
      state.auth = null;
      localStorage.removeItem('userLoggedIn');
    }
    // Reducer comes here
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.isLoggedIn = true;
        // set local storage
        localStorage.setItem('userLoggedIn', JSON.stringify(action.payload));
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload || [];
      })
  },
});

// Generate token and set localstorage
/* fetch can't use GET method with body.
   Need to use axios https://www.npmjs.com/package/axios#features
*/
export const loginUser = createAsyncThunk(
  'users/loginUser',
  async ({ email, password }: ILoginForm, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:8080/users/1`, {
        params: {
          email: email,
          password: password
        }
      });
      return response.data;
    } catch (e) {
      console.log("Error", e);
      thunkAPI.rejectWithValue(e);
    }

  }
);

// Fetch User by token
export const fetchUserByToken = createAsyncThunk(
  'users/fetchUserByToken',
  async (token: string, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:8080/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });
      let data = await response.json();
      return data;
    } catch (e) {
      console.log("Error", e);
      thunkAPI.rejectWithValue(e);
    }

  }
);

// Fetch list Users
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (params: any, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:8080/users`, {
        params: params,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      return await response.data;

    } catch (e) {
      console.log("Error", e);
      thunkAPI.rejectWithValue(e);
    }

  }
);

// Export States
export const userStateSelector = (state: RootState) => state.user;

// Export actions
export const { logout } = userSlice.actions

// Export userReducer as default
export default userSlice.reducer;