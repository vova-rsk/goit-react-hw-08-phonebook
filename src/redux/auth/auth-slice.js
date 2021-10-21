import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.signUp.pending]: state => {
      state.isLoading = true;
    },
    [authOperations.signUp.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.signUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authOperations.logIn.pending]: state => {
      state.isLoading = true;
    },
    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.logIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authOperations.logOut.pending]: state => {
      state.isLoading = true;
    },
    [authOperations.logOut.fulfilled]: (state, action) => {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [authOperations.logOut.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authOperations.refresh.pending]: state => {
      state.isLoading = true;
    },
    [authOperations.refresh.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.refresh.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
