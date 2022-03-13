import { addDays, addHours, set } from 'date-fns';

import { User } from '../../types';
import { StoreSlice } from '../index';

export interface UserSlice {
  user: User;
  setUser: (user: User) => void;
}

const testDate = set(addDays(new Date(), 1), { hours: 10, minutes: 0, seconds: 0 });

export const userSlice: StoreSlice<UserSlice> = (set, get) => ({
  user: {
    id: 1,
    firstName: 'Ryan',
    lastName: 'Harman',
    role: 'Legend',
    createdAt: new Date(),
    updatedAt: undefined,
    reservations: [
      {
        id: 1,
        userId: 1,
        cancelled: false,
        officeId: 2,
        bookedItemId: 1,
        bookedItemType: 'Room',
        createdAt: new Date(),
        dateBookedFrom: new Date(),
        dateBookedTo: new Date(),
        isAllDay: true,
      },
      {
        id: 2,
        userId: 1,
        cancelled: false,
        officeId: 2,
        bookedItemId: 3,
        bookedItemType: 'Seat',
        createdAt: new Date(),
        dateBookedFrom: testDate,
        dateBookedTo: addHours(testDate, 2),
        isAllDay: false,
      },
      {
        id: 3,
        userId: 1,
        cancelled: false,
        officeId: 2,
        bookedItemId: 3,
        bookedItemType: 'Seat',
        createdAt: new Date(),
        dateBookedFrom: addHours(testDate, 2),
        dateBookedTo: addHours(testDate, 6),
        isAllDay: false,
      },
    ],
  },
  setUser: (newUserInfo) => set(() => ({ user: newUserInfo })),
});
