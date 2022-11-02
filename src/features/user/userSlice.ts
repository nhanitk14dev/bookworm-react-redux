/* 
  Redux Toolkit: We use createSlice which handles the action and reducer in a single function.
  Thunk: Promise Lifecycle Actions https://redux-toolkit.js.org/api/createAsyncThunk
  pending: 'users/requestStatus/pending'
  fulfilled: 'users/requestStatus/fulfilled'
  rejected: 'users/requestStatus/rejected'
*/

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
// https://www.typescriptlang.org/docs/handbook/modules.html#exporting-a-declaration
export interface ILoginForm {
  email: string;
  password: string;
  isLoggged?: boolean;
  isFetching?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
  user?: Object | null
}

// Define initial state using that type
const initialState: ILoginForm = {
  email: '',
  password: '',
  isFetching: false,
  isLoggged: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  user: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Reducer comes here
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByToken.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.user = action.payload;
      state.isLoggged = true;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    })
  },
});

// Get user State from store
export const userStateSelector = (state: RootState) => state.user;

// Generate token and set localstorage
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }: ILoginForm, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:8080/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      let data = await response.json();

      if (data.status === 200) {
        localStorage.setItem("token", data.token);
        return { ...data, email: email }
      } else {
        thunkAPI.rejectWithValue(data);
      }

    } catch (e) {
      console.log("Error", e);
      thunkAPI.rejectWithValue(e);
    }

  }
);

// Fetch User by token
export const fetchUserByToken = createAsyncThunk(
  'user/fetchUserByToken',
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


// Export userReducer as default
export default userSlice.reducer;