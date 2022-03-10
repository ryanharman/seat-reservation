import { eachMinuteOfInterval } from 'date-fns';

import { useStore } from '../../store';
import { CalendarViewEnum } from '../../types';
import { TimelineItemHeight } from './constants';

interface DayGridContainerProps {
  children: React.ReactNode;
  view: CalendarViewEnum;
}

export const DayGridContainer = ({ children, view }: DayGridContainerProps) => {
  const { activeTimes, bookingLength } = useStore((state) => state.office);

  const timesToDisplay = eachMinuteOfInterval(
    { start: activeTimes.start, end: activeTimes.end },
    { step: bookingLength }
  );

  return (
    <div
      className={`${view === 'month' ? 'gap-2' : 'grow'} grid grid-cols-7 overflow-hidden`}
      style={view === 'week' ? { maxHeight: timesToDisplay.length * TimelineItemHeight } : {}}
    >
      {children}
    </div>
  );
};
