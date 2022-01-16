import React, { Dispatch, SetStateAction, useEffect } from 'react';

import { useAppDispatch } from '../../store';
import { setCurrReservations } from '../../store/reducers/calendar';
import { Reservation } from '../../types';
import CalendarDays from './CalendarDays';
import CalendarHeader from './CalendarHeader';
import CalendarTimelineCurrTime from './CalendarTimelineCurrTime';
import CalendarWeekDays from './CalendarWeekDays';

interface CalendarProps {
  onSelectedDateChange?: Dispatch<SetStateAction<Date>>;
  onActiveDateChange?: Dispatch<SetStateAction<Date>>;
  reservations: Reservation[];
}

const Calendar = ({ reservations }: CalendarProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrReservations(reservations));
  }, [reservations, dispatch]);

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
