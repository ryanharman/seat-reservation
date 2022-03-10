import React, { useEffect } from 'react';

import { useStore } from '../../store';
import CalendarDays from './CalendarDays';
import CalendarHeader from './CalendarHeader';
import CalendarTimelineCurrTime from './CalendarTimelineCurrTime';
import CalendarWeekDays from './CalendarWeekDays';

const Calendar = () => {
  const { reservations } = useStore((state) => state.user);
  const setReservations = useStore((state) => state.setReservations);

  // TODO: Revisit this. It needs to set user reservations AND calendar reservations
  useEffect(() => {
    setReservations(reservations);
  }, [reservations, setReservations]);

  return (
    <section className="w-full px-1 bg-white">
      <CalendarHeader />
      <CalendarWeekDays />
      <div className="relative">
        <CalendarDays />
        <CalendarTimelineCurrTime />
      </div>
    </section>
  );
};

export default Calendar;
