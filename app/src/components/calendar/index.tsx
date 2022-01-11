import React, { Dispatch, SetStateAction } from 'react';

import { Reservation } from '../../types';
import CalendarDays from './CalendarDays';
import CalendarHeader from './CalendarHeader';
import CalendarTimelineCurrTime from './CalendarTimelineCurrTime';
import CalendarWeekDays from './CalendarWeekDays';
import { CalendarProvider } from './Context';

interface CalendarProps {
  onSelectedDateChange?: Dispatch<SetStateAction<Date>>;
  onActiveDateChange?: Dispatch<SetStateAction<Date>>;
  reservations: Reservation[];
}

const Calendar = ({ onSelectedDateChange, onActiveDateChange, reservations }: CalendarProps) => {
  return (
    <CalendarProvider
      onSelectedDateChange={onSelectedDateChange}
      onActiveDateChange={onActiveDateChange}
      reservations={reservations}
    >
      <section className="w-full px-1 bg-white">
        <CalendarHeader />
        <CalendarWeekDays />
        <div className="relative">
          <CalendarDays />
          <CalendarTimelineCurrTime />
        </div>
      </section>
    </CalendarProvider>
  );
};

export default Calendar;
