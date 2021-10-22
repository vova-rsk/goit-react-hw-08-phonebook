import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceApi from '../../services/service-api';
import notification from '../../utils/notification';

export const fetch = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.contacts.getContacts();
      return data;
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;
      notification.fetchContactsError(status);
      return rejectWithValue({ status, statusText });
    }
  },
);

export const post = createAsyncThunk(
  'contacts/post',
  async (contactData, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.contacts.postContact(contactData);
      notification.addContactSuccess();
      return data;
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;
      notification.addContactError(status);
      return rejectWithValue({ status, statusText });
    }
  },
);

export const remove = createAsyncThunk(
  'contacts/remove',
  async (contactId, { rejectWithValue }) => {
    try {
      await serviceApi.contacts.deleteContact(contactId);
      notification.deleteContactSuccess();
      return contactId;
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;
      notification.deleteContactError(status);
      return rejectWithValue({ status, statusText });
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
      notification.updateContactSuccess();
      return data;
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;
      notification.updateContactError(status);
      return rejectWithValue({ status, statusText });
    }
  },
);
