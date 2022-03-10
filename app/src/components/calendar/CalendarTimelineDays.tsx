import {
  addDays,
  addMinutes,
  eachMinuteOfInterval,
  format,
  getHours,
  getMinutes,
  isSameDay,
  isSameMinute,
  set,
  startOfWeek
} from 'date-fns';
import React from 'react';

import { useCalendar } from '../../hooks/calendar';
import { useStore } from '../../store';
import { SelectedDate } from '../../store/calendarSlice';
import { CalendarViewEnum, Reservation } from '../../types';
import { DayGridContainer } from './CalendarDayGridContainer';
import { TimelineHoursWidth, TimelineItemHeight } from './constants';

interface TimelineDayContainerProps {
  currentTime: SelectedDate;
  isToday: boolean;
  selectedDate: SelectedDate;
  handleDateSelection: (date: SelectedDate) => void;
  height: string;
  children?: React.ReactNode;
}

const TimelineDayContainer = ({
  currentTime,
  isToday,
  selectedDate,
  handleDateSelection,
  height,
  children,
}: TimelineDayContainerProps) => {
  const isSelected =
    isSameDay(currentTime.dateFrom, selectedDate.dateFrom) &&
    isSameMinute(currentTime.dateFrom, selectedDate.dateFrom);

  return (
    <div
      style={{ height }}
      className={`${isToday ? 'bg-blue-100 hover:bg-blue-200 ' : ''} ${
        isSelected ? 'bg-blue-200 text-blue-500' : 'hover:bg-gray-100'
      } cursor-pointer transition-all border-b border-gray-300 p-2`}
      onClick={() => handleDateSelection(currentTime)}
    >
      {children}
    </div>
  );
};

const generateTimesForTimeline = (date: Date, timesToDisplay: Date[]) => {
  return (
    <div className="flex flex-col">
      <div className={`${isSameDay(date, new Date()) ? '' : ''}`}>
        {timesToDisplay.map((time, idx) => {
          return (
            <div key={idx} style={{ height: `${TimelineItemHeight}px` }} className={`relative`}>
              <span className="absolute -top-3 right-2">{format(time, "HH':'mm")}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Helper function for use within CalendarDaysTimeline element
// i think this needs breaking apart to reduce size
const generateContentForTimeline = (
  date: Date,
  timesToDisplay: Date[],
  view: CalendarViewEnum,
  selectedDate: SelectedDate,
  handleDateSelection: (date: SelectedDate) => void,
  selectedItems: Reservation[],
  reservations: Reservation[],
  bookingLength: number
) => {
  const week = [];

  for (let day = 0; day < 7; day++) {
    const currentDate = set(addDays(date, day), {
      hours: getHours(timesToDisplay[0]),
      minutes: getMinutes(timesToDisplay[0]),
    });
    const isToday = isSameDay(currentDate, new Date());

    const selectedItemsForToday = selectedItems
      .filter((r) => isSameDay(r.dateBookedFrom, currentDate) && !r.cancelled)
      .sort((a, b) => a.dateBookedFrom.getTime() - b.dateBookedFrom.getTime());

    const reservationsForToday = reservations
      .filter((r) => isSameDay(r.dateBookedFrom, currentDate))
      .sort((a, b) => a.dateBookedFrom.getTime() - b.dateBookedFrom.getTime());

    // If the user has selected an all day booking
    if (selectedItemsForToday.length > 0 && selectedItemsForToday[0].isAllDay) {
      week.push(
        <div key={day} className="flex flex-col">
          <div className={`border-l border-gray-300`}>
            <TimelineDayContainer
              currentTime={{
                dateFrom: selectedItemsForToday[0].dateBookedFrom,
                dateTo: selectedItemsForToday[0].dateBookedTo,
              }}
              isToday={isToday}
              selectedDate={selectedDate}
              handleDateSelection={handleDateSelection}
              height={`${TimelineItemHeight * timesToDisplay.length}px`}
            >
              Seat {selectedItemsForToday[0].bookedItemId} selected.
            </TimelineDayContainer>
          </div>
        </div>
      );
      continue;
    }

    // If the user has an all day reservation booked
    if (reservationsForToday.length > 0 && reservationsForToday[0].isAllDay) {
      week.push(
        <div key={day} className="flex flex-col">
          <div className={`border-l border-gray-300`}>
            <TimelineDayContainer
              currentTime={{
                dateFrom: reservationsForToday[0].dateBookedFrom,
                dateTo: reservationsForToday[0].dateBookedTo,
              }}
              isToday={isToday}
              selectedDate={selectedDate}
              handleDateSelection={handleDateSelection}
              height={`${TimelineItemHeight * timesToDisplay.length}px`}
            >
              Seat {reservationsForToday[0].bookedItemId} reserved.
            </TimelineDayContainer>
          </div>
        </div>
      );
      continue;
    }

    interface ItemsToRenderType {
      dateFrom: Date;
      dateTo: Date;
      size: number;
      bookedItemId?: number;
    }

    // We use this to group reservations (booked and confirmed) together
    const itemsToRender = timesToDisplay.reduce((acc, curr) => {
      // curr doesn't iterate to the correct day so we have to calc it
      const accurateDate = set(currentDate, {
        hours: getHours(curr),
        minutes: getMinutes(curr),
      });
      const reservationForCurrentTime = reservationsForToday.find((r) =>
        isSameMinute(r.dateBookedFrom, accurateDate)
      );

      // First entry
      if (acc.length === 0)
        return [
          {
            dateFrom: accurateDate,
            dateTo: addMinutes(accurateDate, bookingLength),
            size: 1,
            bookedItemId: reservationForCurrentTime?.bookedItemId,
          },
        ];

      // Compare last entry against current time
      const lastEntry = acc[acc.length - 1];
      if (
        // TODO: Fix this query at some point
        isSameMinute(reservationForCurrentTime?.dateBookedFrom ?? new Date(), lastEntry.dateTo) &&
        reservationForCurrentTime?.bookedItemId === lastEntry.bookedItemId
      ) {
        const newAcc = acc.filter((i) => i.dateFrom !== lastEntry.dateFrom);
        const updatedLastEntry = {
          ...lastEntry,
          size: lastEntry.size + 1,
          dateTo: addMinutes(lastEntry.dateTo, bookingLength),
        };
        return [...newAcc, updatedLastEntry];
      }

      // New entry if no matches
      return [
        ...acc,
        {
          dateFrom: accurateDate,
          dateTo: addMinutes(accurateDate, bookingLength),
          size: 1,
          bookedItemId: reservationForCurrentTime?.bookedItemId,
        },
      ];
    }, [] as ItemsToRenderType[]);

    week.push(
      <div key={day} className="flex flex-col">
        <div className={`border-l border-gray-300`}>
          {itemsToRender.map((item) => {
            const accurateDateAndTimeFrom = set(currentDate, {
              hours: getHours(item.dateFrom),
              minutes: getMinutes(item.dateFrom),
            });
            const accurateDateAndTimeTo = set(currentDate, {
              hours: getHours(item.dateTo),
              minutes: getMinutes(item.dateTo),
            });
            const selectedItemOnTime = selectedItems.find(
              (i) =>
                isSameDay(i.dateBookedFrom, accurateDateAndTimeFrom) &&
                isSameMinute(i.dateBookedFrom, accurateDateAndTimeFrom)
            );

            return (
              <TimelineDayContainer
                currentTime={{ dateFrom: accurateDateAndTimeFrom, dateTo: accurateDateAndTimeTo }}
                isToday={isToday}
                selectedDate={selectedDate}
                handleDateSelection={handleDateSelection}
                height={`${TimelineItemHeight * item.size}px`}
              >
                {item.bookedItemId ? <div>Seat {item.bookedItemId} reserved.</div> : null}
                {selectedItemOnTime ? (
                  <div>Seat {selectedItemOnTime.bookedItemId} selected.</div>
                ) : null}
              </TimelineDayContainer>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div style={{ width: `${TimelineHoursWidth}px` }}>
        {generateTimesForTimeline(date, timesToDisplay)}
      </div>
      <DayGridContainer view={view}>{week}</DayGridContainer>
    </div>
  );
};

export const CalendarTimelineDays = () => {
  const { bookingLength, activeTimes } = useStore((state) => state.office);
  const { reservations } = useStore((state) => state.user);
  const { activeDate, view, selectedDate, handleDateSelection, selectedItems } = useCalendar();

  const startOfDatesToRender = startOfWeek(activeDate, { weekStartsOn: 1 });
  const startDate = startOfWeek(startOfDatesToRender, { weekStartsOn: 1 });
  const timesToDisplay = eachMinuteOfInterval(
    { start: activeTimes.start, end: activeTimes.end },
    { step: bookingLength }
  );

  const allWeeks = generateContentForTimeline(
    startDate,
    timesToDisplay,
    view,
    selectedDate,
    handleDateSelection,
    selectedItems,
    reservations,
    bookingLength
  );
  return <div>{allWeeks}</div>;
};
