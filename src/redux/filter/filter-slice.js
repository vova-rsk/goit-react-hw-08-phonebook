import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change: {
      reducer: (state, action) => {
        state = action.payload;
      },
    },
  },
});

export default filterSlice;
