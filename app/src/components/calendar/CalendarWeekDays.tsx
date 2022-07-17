import { addDays, format, startOfWeek } from 'date-fns';
import React, { useMemo } from 'react';

import { useCalendar } from '../../hooks/calendar';
import { TimelineHoursWidth } from './constants';

const CalendarWeekDays = () => {
  const { activeDate, view } = useCalendar();

  const weekStartDate = useMemo(() => startOfWeek(activeDate, { weekStartsOn: 1 }), [activeDate]);
  const weekDays = [];

  for (let day = 0; day < 7; day++) {
    weekDays.push(<div className="text-right p-2">{format(addDays(weekStartDate, day), 'E')}</div>);
  }

  return (
    <div className="flex">
      {view === 'week' && <div style={{ width: `${TimelineHoursWidth}px` }}></div>}
      <div className="grow grid grid-cols-7 gap-2">{weekDays}</div>
    </div>
  );
};

export default CalendarWeekDays;
