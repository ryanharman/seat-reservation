import React from 'react';
import {
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  startOfMonth,
  endOfWeek,
  startOfWeek,
  format,
  startOfDay,
  subHours,
  addHours,
} from 'date-fns';
import { useCalendar } from './Context';
import { eachMinuteOfInterval, endOfDay } from 'date-fns/esm';
import { TimelineHoursWidth, TimelineItemHeight } from './constants';

// Helper function for use within CalendarDays element.
// Provides the containers for each day to display in the month view
const generateDatesForCurrentWeek = (date: Date) => {
  let currentDate = date;
  const week = [];

  // TODO: Inclusion of child elements within this
  for (let day = 0; day < 7; day++) {
    week.push(
      <MonthDayContainer currentDate={currentDate}>{format(currentDate, 'd')}</MonthDayContainer>
    );
    currentDate = addDays(currentDate, 1);
  }

  return <DayGridContainer>{week}</DayGridContainer>;
};

const CalendarDaysMonth = () => {
  const { activeDate } = useCalendar();

  const startOfDatesToRender = startOfMonth(activeDate);
  const endOfDatesToRender = endOfMonth(activeDate);
  // Dates used to iterate over each week
  const startDate = startOfWeek(startOfDatesToRender);
  const endDate = endOfWeek(endOfDatesToRender);

  let currentDate = startDate;

  const allWeeks = [];

  while (currentDate <= endDate) {
    allWeeks.push(generateDatesForCurrentWeek(currentDate));
    currentDate = addDays(currentDate, 7);
  }

  return <div>{allWeeks}</div>;
};

const generateTimesForTimeline = (date: Date, timesToDisplay: Date[]) => {
  let currentDate = date;

  return (
    <div className="flex flex-col">
      <div className={`${isSameDay(currentDate, new Date()) ? 'bg-blue-600' : ''}`}>
        {timesToDisplay.map((time) => {
          return (
            <div className={`${TimelineItemHeight} relative`}>
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

  // TODO: Inclusion of child elements within this
  for (let day = 0; day < 7; day++) {
    week.push(
      <div className="flex flex-col">
        <div
          className={`${isSameDay(currentDate, new Date()) ? 'bg-blue-100' : ''} 
           border-l border-gray-200`}
        >
          {timesToDisplay.map((time) => {
            return (
              <div
                className={`${TimelineItemHeight} cursor-pointer transition-all border-b border-gray-200 p-2 hover:bg-gray-100`}
              ></div>
            );
          })}
        </div>
      </div>
    );
    currentDate = addDays(currentDate, 1);
  }

  return (
    <div className="flex">
      <div className={TimelineHoursWidth}>{generateTimesForTimeline(date, timesToDisplay)}</div>
      <DayGridContainer>{week}</DayGridContainer>
    </div>
  );
};

const CalendarDaysTimeline = () => {
  const { activeDate } = useCalendar();

  const startOfDatesToRender = startOfWeek(activeDate);
  const startDate = startOfWeek(startOfDatesToRender);
  const timesToDisplay = eachMinuteOfInterval(
    // TODO: These values are to come from the office config
    { start: addHours(startOfDay(startDate), 8), end: subHours(endOfDay(startDate), 7) },
    { step: 30 }
  );

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

// CONTAINERS FOR STYLING
interface DayGridContainerProps {
  children: React.ReactNode;
}

const DayGridContainer = ({ children }: DayGridContainerProps) => {
  const { view } = useCalendar();

  return (
    <div className={`${view === 'month' ? 'gap-2' : 'grow'} grid grid-cols-7`}>{children}</div>
  );
};

// Day Container
interface MonthDayContainerProps {
  currentDate: Date;
  children: React.ReactNode;
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
