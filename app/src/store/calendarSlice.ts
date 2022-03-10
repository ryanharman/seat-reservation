import { endOfToday, startOfToday } from 'date-fns';

import { CalendarViewEnum, OfficeActiveTimes, Reservation } from '../types';
import { StoreSlice } from './index';

export interface SelectedDate {
  dateFrom: Date;
  dateTo: Date;
}

export interface CalendarStore {
  view: CalendarViewEnum;
  selectedDate: SelectedDate;
  activeDate: Date;
  activeTimes: OfficeActiveTimes;
  reservations: Reservation[];
  selectedItems: Reservation[];
}

export interface CalendarSlice {
  calendar: CalendarStore;
  setView: (view: CalendarViewEnum) => void;
  setSelectedDate: (selectedDate: SelectedDate) => void;
  setActiveDate: (date: Date) => void;
  setReservations: (reservations: Reservation[]) => void;
  setActiveTimes: (activeTimes: OfficeActiveTimes) => void;
  setCalendar: (calendar: CalendarStore) => void;
  setSelectedItems: (items: Reservation[]) => void;
}

export const calendarSlice: StoreSlice<CalendarSlice> = (set, get) => ({
  calendar: {
    view: 'month',
    // TODO: selected date needs to have the start and end time of the selection
    selectedDate: { dateFrom: new Date(), dateTo: new Date() },
    activeDate: new Date(),
    reservations: [],
    activeTimes: { start: startOfToday(), end: endOfToday() },
    selectedItems: [],
  },
  setView: (view) => set((state) => ({ ...state, calendar: { ...state.calendar, view } })),
  setSelectedDate: (selectedDate) =>
    set((state) => ({ ...state, calendar: { ...state.calendar, selectedDate } })),
  setActiveDate: (activeDate) =>
    set((state) => ({ ...state, calendar: { ...state.calendar, activeDate } })),
  setReservations: (reservations) =>
    set((state) => ({ ...state, calendar: { ...state.calendar, reservations } })),
  setActiveTimes: (activeTimes) =>
    set((state) => ({ ...state, calendar: { ...state.calendar, activeTimes } })),
  setCalendar: (newCalendarInfo) => set(() => ({ calendar: newCalendarInfo })),
  setSelectedItems: (selectedItems) =>
    set((state) => ({ ...state, calendar: { ...state.calendar, selectedItems } })),
});
