import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek
} from 'date-fns';
import React from 'react';

import { useCalendar } from '../../hooks/calendar';
import { CalendarView, Reservation } from '../../types';
import { DayGridContainer } from './CalendarDayGridContainer';
import { CalendarTimelineDays } from './CalendarTimelineDays';

interface MonthDayContainerProps {
  currentDate: Date;
  children?: React.ReactNode;
}

const MonthDayContainer = ({ currentDate, children }: MonthDayContainerProps) => {
  const { activeDate, selectedDate, handleDateSelection } = useCalendar(); // Potentially move this up a level and pass as props
  return (
    <div
      className={`transition-all ease-linear duration-300 text-right cursor-pointer border-t-2 h-32 py-1 px-2  ${
        isSameMonth(currentDate, activeDate) ? '' : 'text-gray-300'
      } ${
        isSameDay(currentDate, selectedDate.dateFrom)
          ? 'bg-blue-100 text-blue-500'
          : 'hover:bg-gray-100'
      }
          ${isSameDay(currentDate, new Date()) ? 'border-blue-600' : ''}`}
      onClick={() => handleDateSelection({ dateFrom: currentDate, dateTo: currentDate })}
    >
      {children}
    </div>
  );
};

// Helper function for use within CalendarDays element.
// Provides the containers for each day to display in the month view
const generateDatesForCurrentWeek = (
  date: Date,
  reservations: Reservation[],
  view: CalendarView,
  selectedItems: Reservation[]
) => {
  let currentDate = date;
  const week = [];

  for (let day = 0; day < 7; day++) {
    const currDayInLoop = currentDate;
    const reservationOnCurrentDate = reservations.find((r) =>
      isSameDay(r.dateBookedFrom, currDayInLoop)
    );
    const selectedItemOnToday = selectedItems.filter((i) =>
      isSameDay(i.dateBookedFrom, currDayInLoop)
    );

    if (reservationOnCurrentDate) {
      week.push(
        <MonthDayContainer key={day} currentDate={currentDate}>
          <div>{format(currentDate, 'd')}</div>
          <div className="text-left">
            {reservationOnCurrentDate.isAllDay ? (
              `${reservationOnCurrentDate.bookedItemType} ${reservationOnCurrentDate.bookedItemId} reserved.`
            ) : (
              <>
                {reservationOnCurrentDate.bookedItemType} {reservationOnCurrentDate.bookedItemId}{' '}
                reserved{' '}
                {selectedItemOnToday ? (
                  <>
                    {selectedItemOnToday.map((i) => (
                      <>
                        {i.bookedItemType} {i.bookedItemId} selected
                      </>
                    ))}
                  </>
                ) : null}
              </>
            )}
          </div>
        </MonthDayContainer>
      );
    } else {
      week.push(
        <MonthDayContainer key={day} currentDate={currentDate}>
          <div>{format(currentDate, 'd')}</div>
          {selectedItemOnToday ? (
            <div className="text-left">
              {selectedItemOnToday.map((i) => (
                <>
                  {i.bookedItemType} {i.bookedItemId} selected
                </>
              ))}
            </div>
          ) : null}
        </MonthDayContainer>
      );
    }

    currentDate = addDays(currentDate, 1);
  }

  return <DayGridContainer view={view}>{week}</DayGridContainer>;
};

const CalendarDaysMonth = () => {
  const { activeDate, currReservations, view, selectedItems } = useCalendar();

  const startOfDatesToRender = startOfMonth(activeDate);
  const endOfDatesToRender = endOfMonth(activeDate);
  // Dates used to iterate over each week
  const startDate = startOfWeek(startOfDatesToRender, { weekStartsOn: 1 });
  const endDate = endOfWeek(endOfDatesToRender);

  let currentDate = startDate;

  const allWeeks = [];

  while (currentDate <= endDate) {
    allWeeks.push(generateDatesForCurrentWeek(currentDate, currReservations, view, selectedItems));
    currentDate = addDays(currentDate, 7);
  }

  return <div>{allWeeks}</div>;
};

const CalendarDays = () => {
  const { view } = useCalendar();

  console.log('hit');

  return (
    <>
      {view === 'week' && <CalendarTimelineDays />}
      {view === 'month' && <CalendarDaysMonth />}
    </>
  );
};

export default CalendarDays;
