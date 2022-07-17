import {
  addHours,
  addMonths,
  addWeeks,
  endOfToday,
  isAfter,
  isSameMonth,
  startOfToday,
  subHours,
  subMonths,
  subWeeks
} from 'date-fns';
import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

import { CalendarView, OfficeActiveTimes, Reservation } from '../../types';
import useContextAndErrorIfNull from '../../utils/useContextAndErrorIfNull';

/*
 * Leaving this context here for reference for future contexts
 * if I ever make any. Redux is pretty good but I like storing
 * functions and non serialized data in a context it turns out
 */
// Later comment from this: Zustand is even better

interface CalendarContextInterface {
  view: string;
  setView: (viewType: CalendarView) => void;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<any>>;
  activeDate: Date;
  setActiveDate: (date: Date) => void;
  handleDateSelection: (date: Date) => void;
  currReservations: Reservation[];
  setCurrReservations: Dispatch<SetStateAction<Reservation[]>>;
  currActiveTimes: OfficeActiveTimes;
  setCurrActiveTimes: Dispatch<React.SetStateAction<OfficeActiveTimes>>;
}

const CalendarContext = createContext<CalendarContextInterface | null>(null);

interface CalendarProviderProps {
  onSelectedDateChange?: Dispatch<SetStateAction<any>>;
  onActiveDateChange?: (date: Date) => void;
  reservations: Reservation[];
  activeTimes?: OfficeActiveTimes;
  children: React.ReactNode;
}

const CalendarProvider = ({
  onSelectedDateChange,
  onActiveDateChange,
  reservations,
  activeTimes = {
    start: addHours(startOfToday(), 6),
    // start: startOfToday(),
    end: subHours(endOfToday(), 5),
  },
  children,
}: CalendarProviderProps) => {
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const [currReservations, setCurrReservations] = useState<Reservation[]>(reservations);
  const [currActiveTimes, setCurrActiveTimes] = useState<OfficeActiveTimes>(activeTimes);

  const selectedDateChange = (date: Date) => {
    if (onSelectedDateChange) onSelectedDateChange(date);
    setSelectedDate(date);
  };

  const activeDateChange = (date: Date) => {
    if (onActiveDateChange) onActiveDateChange(date);
    setActiveDate(date);
  };

  // Function to be used over setSelectedDate for UX on calendar
  const handleDateSelection = (date: Date) => {
    if (isSameMonth(date, activeDate)) {
      selectedDateChange(date);
      return;
    }

    if (isAfter(selectedDate, activeDate)) {
      activeDateChange(view === 'month' ? addMonths(activeDate, 1) : addWeeks(activeDate, 1));
      selectedDateChange(date);
    } else {
      activeDateChange(view === 'month' ? subMonths(activeDate, 1) : subWeeks(activeDate, 1));
      selectedDateChange(date);
    }
  };

  const values: CalendarContextInterface = {
    view,
    setView,
    selectedDate,
    setSelectedDate: selectedDateChange,
    activeDate,
    setActiveDate: activeDateChange,
    handleDateSelection,
    currReservations,
    setCurrReservations,
    currActiveTimes,
    setCurrActiveTimes,
  };

  return <CalendarContext.Provider value={values}>{children}</CalendarContext.Provider>;
};

const useCalendar = () => {
  const useCalendarContext = useContextAndErrorIfNull(CalendarContext);
  const {
    view,
    setView,
    selectedDate,
    setSelectedDate,
    activeDate,
    setActiveDate,
    handleDateSelection,
    currReservations,
    setCurrReservations,
    currActiveTimes,
    setCurrActiveTimes,
  } = useCalendarContext;

  return {
    view,
    setView,
    selectedDate,
    setSelectedDate,
    activeDate,
    setActiveDate,
    handleDateSelection,
    currReservations,
    setCurrReservations,
    currActiveTimes,
    setCurrActiveTimes,
  };
};

export { CalendarContext, CalendarProvider, useCalendar };
