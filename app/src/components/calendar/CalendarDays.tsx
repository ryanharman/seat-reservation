import {
  addDays,
  eachMinuteOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getHours,
  getMinutes,
  isSameDay,
  isSameMinute,
  isSameMonth,
  set,
  startOfMonth,
  startOfWeek
} from 'date-fns';
import React from 'react';

import { Reservation } from '../../types';
import { StepValue, TimelineHoursWidth, TimelineItemHeight } from './constants';
import { useCalendar } from './Context';

// Helper function for use within CalendarDays element.
// Provides the containers for each day to display in the month view
const generateDatesForCurrentWeek = (date: Date, reservations: Reservation[]) => {
  let currentDate = date;
  const week = [];

  for (let day = 0; day < 7; day++) {
    const reservationsForToday = reservations.filter(
      // eslint-disable-next-line no-loop-func
      (r) => isSameDay(r.dateBookedFrom, currentDate) && r.allDay
    );
    week.push(
      <MonthDayContainer currentDate={currentDate}>
        <div>{format(currentDate, 'd')}</div>
        {reservationsForToday.length > 0 && (
          <div className="text-left">All day reservation in place.</div>
        )}
      </MonthDayContainer>
    );
    currentDate = addDays(currentDate, 1);
  }

  return <DayGridContainer>{week}</DayGridContainer>;
};

const CalendarDaysMonth = () => {
  const { activeDate, currReservations } = useCalendar();

  const startOfDatesToRender = startOfMonth(activeDate);
  const endOfDatesToRender = endOfMonth(activeDate);
  // Dates used to iterate over each week
  const startDate = startOfWeek(startOfDatesToRender);
  const endDate = endOfWeek(endOfDatesToRender);

  let currentDate = startDate;

  const allWeeks = [];

  while (currentDate <= endDate) {
    allWeeks.push(generateDatesForCurrentWeek(currentDate, currReservations));
    currentDate = addDays(currentDate, 7);
  }

  return <div>{allWeeks}</div>;
};

const generateTimesForTimeline = (date: Date, timesToDisplay: Date[]) => {
  let currentDate = date;

  return (
    <div className="flex flex-col">
      <div className={`${isSameDay(currentDate, new Date()) ? '' : ''}`}>
        {timesToDisplay.map((time) => {
          return (
            <div style={{ height: `${TimelineItemHeight}px` }} className={`relative`}>
              <span className="absolute -top-3 right-2">{format(time, "HH':'mm")}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Helper function for use within CalendarDaysTimeline element
const generateContentForTimeline = (date: Date, timesToDisplay: Date[]) => {
  let currentDate = date;
  const week = [];

  for (let day = 0; day < 7; day++) {
    const isToday = isSameDay(currentDate, new Date());
    week.push(
      <div className="flex flex-col">
        <div className={`border-l border-gray-300`}>
          {timesToDisplay.map((time) => {
            const accurateDateAndTime = set(addDays(date, day), {
              hours: getHours(time),
              minutes: getMinutes(time),
            });
            return (
              <TimelineDayContainer
                currentTime={accurateDateAndTime}
                isToday={isToday}
              ></TimelineDayContainer>
            );
          })}
        </div>
      </div>
    );
    currentDate = addDays(currentDate, 1);
  }

  return (
    <div className="flex">
      <div style={{ width: `${TimelineHoursWidth}px` }}>
        {generateTimesForTimeline(date, timesToDisplay)}
      </div>
      <DayGridContainer>{week}</DayGridContainer>
    </div>
  );
};

const CalendarDaysTimeline = () => {
  const { activeDate, currActiveTimes } = useCalendar();

  const startOfDatesToRender = startOfWeek(activeDate);
  const startDate = startOfWeek(startOfDatesToRender);
  const timesToDisplay = eachMinuteOfInterval(currActiveTimes, { step: StepValue });

  const allWeeks = generateContentForTimeline(startDate, timesToDisplay);
  return <div>{allWeeks}</div>;
};

const CalendarDays = () => {
  const { view } = useCalendar();

  return (
    <>
      {view === 'week' && <CalendarDaysTimeline />}
      {view === 'month' && <CalendarDaysMonth />}
    </>
  );
};

export default CalendarDays;

// CONTAINERS FOR DAYS
interface DayGridContainerProps {
  children: React.ReactNode;
}

const DayGridContainer = ({ children }: DayGridContainerProps) => {
  const { view } = useCalendar();

  return (
    <div className={`${view === 'month' ? 'gap-2' : 'grow'} grid grid-cols-7`}>{children}</div>
  );
};

// Week Day Container
interface TimelineDayContainerProps {
  currentTime: Date;
  isToday: boolean;
  children?: React.ReactNode;
}

const TimelineDayContainer = ({ currentTime, isToday, children }: TimelineDayContainerProps) => {
  const { selectedDate, handleDateSelection } = useCalendar();

  const isSelected =
    isSameDay(currentTime, selectedDate) && isSameMinute(currentTime, selectedDate);

  return (
    <div
      style={{ height: `${TimelineItemHeight}px` }}
      className={`${isToday ? 'bg-blue-100 hover:bg-blue-200 ' : ''} ${
        isSelected ? 'bg-blue-200 text-blue-500' : 'hover:bg-gray-100'
      } cursor-pointer transition-all border-b border-gray-300 p-2`}
      onClick={() => handleDateSelection(currentTime)}
    >
      {children}
    </div>
  );
};

// Month Day Container
interface MonthDayContainerProps {
  currentDate: Date;
  children?: React.ReactNode;
}

const MonthDayContainer = ({ currentDate, children }: MonthDayContainerProps) => {
  const { activeDate, selectedDate, handleDateSelection } = useCalendar();

  return (
    <div
      className={`transition-all ease-linear duration-300 text-right cursor-pointer border-t-2 h-32 py-1 px-2  ${
        isSameMonth(currentDate, activeDate) ? '' : 'text-gray-300'
      } ${isSameDay(currentDate, selectedDate) ? 'bg-blue-100 text-blue-500' : 'hover:bg-gray-100'}
          ${isSameDay(currentDate, new Date()) ? 'border-blue-600' : ''}`}
      onClick={() => handleDateSelection(currentDate)}
    >
      {children}
    </div>
  );
};
