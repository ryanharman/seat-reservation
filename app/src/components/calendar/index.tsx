import React, { Dispatch, SetStateAction } from 'react';
import CalendarDays from './CalendarDays';
import CalendarHeader from './CalendarHeader';
import CalendarWeekDays from './CalendarWeekDays';
import { CalendarProvider } from './Context';

interface CalendarProps {
  onSelectedDateChange?: Dispatch<SetStateAction<Date>>;
  onActiveDateChange?: Dispatch<SetStateAction<Date>>;
}

const Calendar = ({ onSelectedDateChange, onActiveDateChange }: CalendarProps) => {
  return (
    <CalendarProvider
      onSelectedDateChange={onSelectedDateChange}
      onActiveDateChange={onActiveDateChange}
    >
      <section className="w-full px-1 bg-white">
        <CalendarHeader />
        <CalendarWeekDays />
        <CalendarDays />
      </section>
    </CalendarProvider>
  );
};

export default Calendar;
