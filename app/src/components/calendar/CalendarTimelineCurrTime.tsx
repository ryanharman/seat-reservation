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

import { useAppSelector } from '../../store';
import { getCalendar } from '../../store/selectors/calendar';
import { StepValue, TimelineHoursWidth, TimelineItemHeight } from './constants';

const CalendarTimelineCurrTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  const { activeDate, view, currActiveTimes } = useAppSelector(getCalendar);

  useEffect(() => {
    setInterval(() => setDateTime(new Date()), 60000);
  }, [dateTime]);

  if (view === 'month') return <></>;
  if (!isSameWeek(dateTime, activeDate)) return <></>;
  if (!isWithinInterval(activeDate, currActiveTimes)) return <></>;

  const numberOfTimeValuesBefore = isSameMinute(startOfToday(), currActiveTimes.start)
    ? 0
    : eachMinuteOfInterval(
        { start: startOfToday(), end: currActiveTimes.start },
        { step: StepValue }
      ).length - 1;

  const hoursInMinutes: number = getHours(dateTime) * 60;
  const minutes: number = getMinutes(dateTime);
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
        {format(dateTime, 'HH:mm')}
      </div>
      <div className="border border-blue-800" />
    </div>
  );
};

export default CalendarTimelineCurrTime;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const placeholder = TimelineItemHeight; // this is literally here to stop the import vanishing
