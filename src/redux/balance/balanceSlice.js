import { createSlice } from '@reduxjs/toolkit';
import { changeBalance } from './balanceOperations';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    balance: 0,
  },

  extraReducers: {
    [changeBalance.pending]: state => {
      state.error = null;
    },
    [changeBalance.fulfilled]: (state, { payload }) => {
      state.balance = payload;
    },
    [changeBalance.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export default balanceSlice.reducer;
