import {
  eachMinuteOfInterval,
  format,
  getHours,
  getMinutes,
  isSameMinute,
  isSameWeek,
  isWithinInterval,
  startOfToday
} from 'date-fns';
import React, { useEffect, useState } from 'react';

import { StepValue, TimelineHoursWidth, TimelineItemHeight } from './constants';
import { useCalendar } from './Context';

const CalendarTimelineCurrTime = () => {
  const { activeDate, view, currActiveTimes } = useCalendar();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 60000);
  }, [date]);

  if (view === 'month') return <></>;
  if (!isSameWeek(date, activeDate)) return <></>;
  if (!isWithinInterval(activeDate, currActiveTimes)) return <></>;

  const numberOfTimeValuesBefore = isSameMinute(startOfToday(), currActiveTimes.start)
    ? 0
    : eachMinuteOfInterval(
        { start: startOfToday(), end: currActiveTimes.start },
        { step: StepValue }
      ).length - 1;

  const hoursInMinutes: number = getHours(date) * 60;
  const minutes: number = getMinutes(date);
  const time: number = hoursInMinutes + minutes;

  const containersBeforeStart = numberOfTimeValuesBefore * StepValue;

  const containerHeightScalingValue = TimelineItemHeight / StepValue;
  const position = (time - containersBeforeStart) * containerHeightScalingValue;

  return (
    <div style={{ top: `${position}px` }} className="absolute w-full transition-all">
      <div
        style={{ width: `${TimelineHoursWidth}px` }}
        className="absolute -top-4 bg-blue-800 border-2 border-white h-8 text-white font-semibold flex justify-center items-center rounded-md"
      >
        {format(date, 'HH:mm')}
      </div>
      <div className="border border-blue-800" />
    </div>
  );
};

export default CalendarTimelineCurrTime;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const placeholder = TimelineItemHeight; // this is literally here to stop the import vanishing
