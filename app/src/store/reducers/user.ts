import { addDays } from 'date-fns';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../types';

const initialState: User = {
  id: 1,
  firstName: 'Ryan',
  lastName: 'Harman',
  role: 'Legend',
  createdAt: new Date().toDateString(),
  updatedAt: undefined,
  // TODO: dates need to be in string values yikes
  reservations: [
    {
      id: 1,
      userId: 1,
      cancelled: false,
      officeId: 2,
      bookedItemId: 1,
      createdAt: new Date(),
      dateBookedFrom: new Date(),
      dateBookedTo: addDays(new Date(), 1),
      isAllDay: true,
    },
    {
      id: 2,
      userId: 2,
      cancelled: true,
      officeId: 1,
      bookedItemId: 1,
      createdAt: new Date(),
      dateBookedFrom: new Date(),
      dateBookedTo: addDays(new Date(), 1),
      isAllDay: true,
    },
    {
      id: 3,
      userId: 2,
      cancelled: true,
      officeId: 1,
      bookedItemId: 3,
      createdAt: new Date(),
      dateBookedFrom: new Date(),
      dateBookedTo: addDays(new Date(), 1),
      isAllDay: true,
    },
    {
      id: 6,
      userId: 2,
      cancelled: false,
      officeId: 1,
      bookedItemId: 3,
      createdAt: new Date(),
      dateBookedFrom: new Date(),
      dateBookedTo: addDays(new Date(), 1),
      isAllDay: false,
    },
  ],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
