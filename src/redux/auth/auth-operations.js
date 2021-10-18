import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceApi from '../../services/service-api';

export const signUp = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.user.registerUser(userData);
      serviceApi.token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'user/login',
  async (userAuthData, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.user.loginUser(userAuthData);
      serviceApi.token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await serviceApi.user.logoutUser();
      serviceApi.token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const refresh = createAsyncThunk('user/refresh', async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkApi.rejectWithValue('no token found');
    }

    serviceApi.token.set(persistedToken);

    const { data } = await serviceApi.user.getCurrentUser();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
