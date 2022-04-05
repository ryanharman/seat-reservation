import React, { useEffect } from 'react';

import { useReservationGet } from '../../api';
import { useStore } from '../../store';
import CalendarDays from './CalendarDays';
import CalendarHeader from './CalendarHeader';
import CalendarTimelineCurrTime from './CalendarTimelineCurrTime';
import CalendarWeekDays from './CalendarWeekDays';

const Calendar = () => {
  const { id: userId } = useStore((state) => state.user);
  const { data: reservations = [] } = useReservationGet({ userId });
  const setReservations = useStore((state) => state.setReservations);

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
