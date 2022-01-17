import { endOfToday, startOfToday } from 'date-fns';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CalendarViewEnum, OfficeActiveTimes, Reservation } from '../../types';

interface CalendarStore {
  view: CalendarViewEnum;
  selectedDate: string;
  activeDate: string;
  currReservations: Reservation[]; // TODO: Review whether this should be here at all and not in the user or office store?
  currActiveTimes: OfficeActiveTimes;
}

const initialState: CalendarStore = {
  view: 'month',
  selectedDate: new Date().toISOString(),
  activeDate: new Date().toISOString(),
  currReservations: [],
  currActiveTimes: { start: startOfToday().toISOString(), end: endOfToday().toISOString() },
};

// In order to update the dates within the store we use the useCalendar hook
// where it will convert the dates to and from strings

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<CalendarViewEnum>) => {
      state.view = action.payload;
    },
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    setActiveDate: (state, action: PayloadAction<string>) => {
      state.activeDate = action.payload;
    },
    setCurrReservations: (state, action: PayloadAction<Reservation[]>) => {
      state.currReservations = action.payload;
    },
    setCurrActiveTimes: (state, action: PayloadAction<OfficeActiveTimes>) => {
      state.currActiveTimes = action.payload;
    },
  },
});

export const { setView, setSelectedDate, setActiveDate, setCurrReservations, setCurrActiveTimes } =
  calendarSlice.actions;

export default calendarSlice.reducer;
