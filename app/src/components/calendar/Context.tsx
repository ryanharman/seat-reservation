import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { CalendarViewEnum } from '../../types';
import useContextAndErrorIfNull from '../../utils/useContextAndErrorIfNull';
import { addMonths, addWeeks, isSameMonth, subMonths, subWeeks, isAfter } from 'date-fns';

interface CalendarContextInterface {
  view: string;
  setView: (viewType: CalendarViewEnum) => void;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<any>>;
  activeDate: Date;
  setActiveDate: (date: Date) => void;
  handleDateSelection: (date: Date) => void;
}

const CalendarContext = createContext<CalendarContextInterface | null>(null);

interface CalendarProviderProps {
  onSelectedDateChange?: Dispatch<SetStateAction<any>>;
  onActiveDateChange?: (date: Date) => void;
  children: React.ReactNode;
}

const CalendarProvider = ({
  onSelectedDateChange,
  onActiveDateChange,
  children,
}: CalendarProviderProps) => {
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());

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
  } = useCalendarContext;

  return {
    view,
    setView,
    selectedDate,
    setSelectedDate,
    activeDate,
    setActiveDate,
    handleDateSelection,
  };
};

export { CalendarContext, CalendarProvider, useCalendar };
