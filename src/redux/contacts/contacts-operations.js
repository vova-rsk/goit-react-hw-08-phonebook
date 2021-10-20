import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceApi from '../../services/service-api';

export const fetch = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.contacts.getContacts();
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
);

export const post = createAsyncThunk(
  'contacts/post',
  async (contactData, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.contacts.postContact(contactData);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  },
);

export const remove = createAsyncThunk(
  'contacts/remove',
  async (contactId, { rejectWithValue }) => {
    try {
      await serviceApi.contacts.deleteContact(contactId);
      return contactId;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  },
);

export const patch = createAsyncThunk(
  'contacts/patch',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.contacts.patchContact(id, {
        name,
        number,
      });
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  },
);
