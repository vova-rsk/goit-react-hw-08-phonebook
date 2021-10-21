import { createSlice } from '@reduxjs/toolkit';
import * as contactsOperations from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contactItems',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    resetContacts: state => {
      state.items = [];
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [contactsOperations.fetch.pending]: state => {
      state.isLoading = true;
    },
    [contactsOperations.fetch.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [contactsOperations.fetch.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [contactsOperations.post.pending]: state => {
      state.isLoading = true;
    },
    [contactsOperations.post.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [contactsOperations.post.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [contactsOperations.remove.pending]: state => {
      state.isLoading = true;
    },
    [contactsOperations.remove.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    [contactsOperations.remove.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [contactsOperations.patch.pending]: state => {
      state.isLoading = true;
    },
    [contactsOperations.patch.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = state.items.map(item => {
        if (item.id !== action.payload.id) return item;
        return action.payload;
      });
    },
    [contactsOperations.patch.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { resetContacts, changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
