import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change: (state, action) => (state = action.payload),
  },
});

export const { change } = filterSlice.actions;
export default filterSlice.reducer;
