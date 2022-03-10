import {
  eachMinuteOfInterval,
  format,
  getHours,
  getMinutes,
  isSameMinute,
  isSameWeek,
  isWithinInterval,
  startOfDay
} from 'date-fns';
import React, { useEffect, useState } from 'react';

import { useCalendar } from '../../hooks/calendar';
import { useStore } from '../../store';
import { TimelineHoursWidth, TimelineItemHeight } from './constants';

const CalendarTimelineCurrTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  const { bookingLength, activeTimes } = useStore((state) => state.office);
  const { activeDate, view } = useCalendar();

  const currActiveTimes = {
    start: new Date(activeTimes.start),
    end: new Date(activeTimes.end),
  };

  useEffect(() => {
    setInterval(() => setDateTime(new Date()), 60000);
  }, [dateTime]);

  if (view === 'month') return <></>;
  if (!isSameWeek(dateTime, activeDate)) return <></>;
  if (!isWithinInterval(activeDate, currActiveTimes)) return <></>;

  const startOfDayActiveTimes = startOfDay(currActiveTimes.start);
  // total containers to remove from the position value
  const numberOfTimeValuesBefore = isSameMinute(startOfDayActiveTimes, currActiveTimes.start)
    ? 0
    : eachMinuteOfInterval(
        { start: startOfDayActiveTimes, end: currActiveTimes.start },
        { step: bookingLength }
      ).length - 1;

  const hoursInMinutes: number = getHours(dateTime) * 60;
  const minutes: number = getMinutes(dateTime);
  const time: number = hoursInMinutes + minutes;

  // containers sized correctly in minutes (or pixels) to be deducted
  const containersBeforeStart = numberOfTimeValuesBefore * bookingLength;

  const containerHeightScalingValue = TimelineItemHeight / bookingLength;
  const position = (time - containersBeforeStart) * containerHeightScalingValue;

  return (
    <div
      style={{ top: `${position}px` }}
      className="absolute w-full transition-all pointer-events-none"
    >
      <div
        style={{ width: `${TimelineHoursWidth}px` }}
        className="absolute -top-4 bg-blue-800 border-2 border-white h-8 text-white font-semibold flex justify-center items-center rounded-md"
      >
        {format(dateTime, 'HH:mm')}
      </div>
      <div className="border border-blue-800" />
    </div>
  );
};

export default CalendarTimelineCurrTime;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const placeholder = TimelineItemHeight; // this is literally here to stop the import vanishing
