import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { setCurrReservations } from '../../store/reducers/calendar';
import { getUser } from '../../store/selectors/user';
import CalendarDays from './CalendarDays';
import CalendarHeader from './CalendarHeader';
import CalendarTimelineCurrTime from './CalendarTimelineCurrTime';
import CalendarWeekDays from './CalendarWeekDays';

const Calendar = () => {
  const dispatch = useAppDispatch();
  const { reservations } = useAppSelector(getUser);

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
