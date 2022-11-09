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
  isLoggedIn: boolean,
  status?: string,
  msgError?: string;
  flashMessage?: string,
  editingUser?: any
}

const initialState: UserState = {
  users: [],
  auth: null,
  isLoggedIn: false,
  status: '',
  msgError: '',
  flashMessage: '',
  editingUser: ''
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
        state.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        // Add new users to list users
        state.users = [...state.users, action.payload]
        state.status = 'succeeded'
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = 'failed'
        state.msgError = action.error.message
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.editingUser = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.editingUser = action.payload;
        state.status = 'succeeded'
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed'
        state.msgError = action.error.message
      })
      .addCase(updateUser.pending, (state, action) => {
        state.status = 'pending'
      })
  },
});

// Generate token and set localstorage
/* fetch can't use GET method with body.
   Need to use axios https://www.npmjs.com/package/axios#features
*/
export const loginUser = createAsyncThunk(
  'users/loginUser',
  async ({ email, password }: IUser, thunkAPI) => {
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

// Fetch User by Id as a service, not create
export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (id: string, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${id}`);
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
      const response = await axios.get(`http://localhost:8080/users`, {params: params});
      return await response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }

  }
);

// Add New User
export const addUser = createAsyncThunk(
  'users/addUser',
  async (params: IUser, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:8080/users/create`, params, {
        headers: {'Content-Type': 'application/json'}
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(params);
    }
  }
);

// Update User
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (params: IUser, thunkAPI) => {
    try {
      const response = await axios.put(`http://localhost:8080/users/update/${params.id}`, params, {
        headers: {'Content-Type': 'application/json'}
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(params);
    }
  }
);

// Export States
export const userStateSelector = (state: RootState) => state.user;

// Export actions
export const { logout } = userSlice.actions

// Export userReducer as default
export default userSlice.reducer;