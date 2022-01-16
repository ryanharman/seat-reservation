import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../types';

const initialState: User = {
  id: 1,
  firstName: 'Ryan',
  lastName: 'Harman',
  role: 'Legend',
  createdAt: new Date().toDateString(),
  updatedAt: undefined,
  reservations: [],
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
