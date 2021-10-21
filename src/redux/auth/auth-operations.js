import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceApi from '../../services/service-api';
import notification from '../../utils/notification';

export const signUp = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.user.registerUser(userData);
      serviceApi.token.set(data.token);
      notification.signUpSuccess(data.user.name);
      return data;
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;
      notification.signUpError(status);
      return rejectWithValue({ status, statusText });
    }
  },
);

export const logIn = createAsyncThunk(
  'user/login',
  async (userAuthData, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.user.loginUser(userAuthData);
      serviceApi.token.set(data.token);
      notification.logInSuccess(data.user.name);
      return data;
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;
      notification.logInError(status);
      return rejectWithValue({ status, statusText });
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
      const {
        response: { status, statusText },
      } = error;
      notification.logOutError(status);
      return rejectWithValue({ status, statusText });
    }
  },
);

export const refresh = createAsyncThunk(
  'user/refresh',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const persistedToken = state.auth.token;

      if (!persistedToken) {
        return rejectWithValue({ status: null, statusText: 'No token found' });
      }

      serviceApi.token.set(persistedToken);
      const { data } = await serviceApi.user.getCurrentUser();
      return data;
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;
      notification.logOutError(status);
      return rejectWithValue({ status, statusText });
    }
  },
);
