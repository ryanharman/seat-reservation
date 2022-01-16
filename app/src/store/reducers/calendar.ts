import {
  addMonths,
  addWeeks,
  endOfToday,
  isAfter,
  isSameMonth,
  startOfToday,
  subMonths,
  subWeeks
} from 'date-fns';

import { createSlice } from '@reduxjs/toolkit';

import { CalendarViewEnum, OfficeActiveTimes, Reservation } from '../../types';

interface CalendarStore {
  view: CalendarViewEnum;
  selectedDate: Date;
  activeDate: Date;
  currReservations: Reservation[];
  currActiveTimes: OfficeActiveTimes;
}

const initialState: CalendarStore = {
  view: 'month',
  selectedDate: new Date(),
  activeDate: new Date(),
  currReservations: [],
  currActiveTimes: { start: startOfToday(), end: endOfToday() },
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setActiveDate: (state, action) => {
      state.activeDate = action.payload;
    },
    setCurrReservations: (state, action) => {
      state.currReservations = action.payload;
    },
    setCurrActiveTimes: (state, action) => {
      state.currActiveTimes = action.payload;
    },
    handleDateSelection: (state, action) => {
      const { date, onActiveDateChange, onSelectedDateChange } = action.payload;
      const { selectedDate, activeDate, view } = state;

      // both are helper functions to ensure that when the user passes a
      // callback to update the date on page level (if necessary) that it
      // gets invoked
      const selectedDateChange = (date: Date) => {
        if (onSelectedDateChange) onSelectedDateChange(date);
        state.selectedDate = date;
      };
      const activeDateChange = (date: Date) => {
        if (onActiveDateChange) onActiveDateChange(date);
        state.activeDate = date;
      };

      // no need to change the active date as the selected date is not outside
      // of the current month
      if (isSameMonth(date, activeDate)) {
        selectedDateChange(date);
        return;
      }

      // need to change the active date as the selected date is outside
      // of the current month
      if (isAfter(selectedDate, activeDate)) {
        activeDateChange(view === 'month' ? addMonths(activeDate, 1) : addWeeks(activeDate, 1));
        selectedDateChange(date);
      } else {
        activeDateChange(view === 'month' ? subMonths(activeDate, 1) : subWeeks(activeDate, 1));
        selectedDateChange(date);
      }
    },
  },
});

export const {
  setView,
  setSelectedDate,
  setActiveDate,
  handleDateSelection,
  setCurrReservations,
  setCurrActiveTimes,
} = calendarSlice.actions;

export default calendarSlice.reducer;
