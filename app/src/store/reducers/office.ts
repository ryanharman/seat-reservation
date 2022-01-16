import { addHours, endOfToday, startOfToday, subHours } from 'date-fns';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Office } from '../../types';

const initialState: Office = {
  id: 1,
  name: 'C1 Lower',
  officeManagers: [],
  activeTimes: { start: addHours(startOfToday(), 6), end: subHours(endOfToday(), 5) },
  bookingLength: 240,
  createdAt: new Date(),
};

export const officeSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setOffice: (state, action: PayloadAction<Office>) => {
      state = action.payload;
    },
  },
});

export const { setOffice } = officeSlice.actions;

export default officeSlice.reducer;
