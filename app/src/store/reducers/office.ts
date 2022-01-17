import { addHours, endOfToday, startOfToday, subHours } from 'date-fns';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Office } from '../../types';

const initialState: Office = {
  id: 1,
  name: 'Generic Office Name',
  officeManagers: [],
  // TODO: dates need to be in string values yikes
  seats: [
    {
      id: 1,
      type: 'Seat',
      availableForBooking: true,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 2,
      type: 'Seat',
      availableForBooking: true,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 3,
      type: 'Seat',
      availableForBooking: false,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 4,
      type: 'Seat',
      availableForBooking: true,
      createdAt: new Date(),
      updatedAt: null,
    },
  ],
  activeTimes: {
    start: addHours(startOfToday(), 6).toISOString(),
    end: subHours(endOfToday(), 5).toISOString(),
  },
  bookingLength: 120,
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
