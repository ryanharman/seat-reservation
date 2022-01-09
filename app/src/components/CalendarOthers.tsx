import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generateCalendar from 'antd/es/calendar/generateCalendar';
import 'antd/es/calendar/style';

import { Calendar as BigCalendarEl, dateFnsLocalizer, Event } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enGB from 'date-fns/locale/en-GB';
import { useState } from 'react';
import { addHours, endOfHour } from 'date-fns';

export const AntDCalendar = generateCalendar<Date>(dateFnsGenerateConfig);

// BIG CALENDAR CONFIG BELOW
const locales = {
  'en-GB': enGB,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface BigCalendarEventProps {
  event: Event;
}

const BigCalendarEvent = ({ event }: BigCalendarEventProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold">{event.title}</div>
      <div>Seat 1</div>
    </div>
  );
};

export const BigCalendar = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      title: 'Big fat reservation right here',
      start: endOfHour(new Date()),
      end: addHours(endOfHour(new Date()), 2),
    },
  ]);

  return (
    <div className="big-cal bg-white">
      <BigCalendarEl
        defaultView="week"
        localizer={localizer}
        events={events}
        style={{ height: '100vh' }}
        views={['week', 'agenda']}
        components={{
          event: BigCalendarEvent,
        }}
      />
    </div>
  );
};
