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
    bookableItems: [
      {
        id: 1,
        type: 'Room',
        label: '1',
        availableForBooking: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        type: 'Seat',
        label: '2',
        availableForBooking: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        type: 'Seat',
        label: '3',
        availableForBooking: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        type: 'Seat',
        label: '4',
        availableForBooking: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    activeTimes: {
      start: addHours(startOfToday(), 6),
      end: subHours(endOfToday(), 5),
    },
    bookingLength: 120,
    reservations: undefined,
    createdAt: new Date(),
  },
  setOffice: (newOfficeInfo) => set(() => ({ office: newOfficeInfo })),
});
