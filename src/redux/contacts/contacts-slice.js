import { createSlice } from '@reduxjs/toolkit';
import {} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contactItems',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
});

// const filter = createSlice({
//     name: 'filter',
//     initialState:'',
//     reducers: {

//     }
// });

// const contactsReducer = combineReducers({ contacts: contactItems });

export default contactsSlice;
