import { addHours, endOfToday, startOfToday, subHours } from 'date-fns';

import { Office } from '../../types';
import { StoreSlice } from '../index';

export interface OfficeSlice {
  office: Office;
  setOffice: (office: Office) => void;
}

export const officeSlice: StoreSlice<OfficeSlice> = (set, get) => ({
  office: {
    id: 1,
    name: 'Generic Office Name',
    officeManagers: [],
    seats: [
      {
        id: 1,
        type: 'Room',
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
      start: addHours(startOfToday(), 6),
      end: subHours(endOfToday(), 5),
    },
    bookingLength: 120,
    createdAt: new Date(),
  },
  setOffice: (newOfficeInfo) => set(() => ({ office: newOfficeInfo })),
});
