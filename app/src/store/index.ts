import create, { GetState, SetState } from 'zustand';

import {
  CalendarSlice,
  calendarSlice,
  OfficeSlice,
  officeSlice,
  UserSlice,
  userSlice
} from './slices';

// Typing slices
// https://github.com/pmndrs/zustand/issues/508#issuecomment-955722581

export type StoreSlice<T> = (set: SetState<StoreState>, get: GetState<StoreState>) => T;

type StoreState = UserSlice & CalendarSlice & OfficeSlice;

export const useStore = create<StoreState>((set, get) => ({
  ...userSlice(set, get),
  ...calendarSlice(set, get),
  ...officeSlice(set, get),
}));

export * from './slices';
