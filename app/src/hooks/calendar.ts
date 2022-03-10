import { addMonths, addWeeks, isAfter, isSameMonth, subMonths, subWeeks } from 'date-fns';

import { useStore } from '../store';
import { SelectedDate } from '../store/calendarSlice';
import { OfficeActiveTimes } from '../types';

// TODO: Consider breaking this down into a reducer and using the useStore hook for data collection
// on page level
export const useCalendar = () => {
  const { selectedDate, activeDate, activeTimes, reservations, view, selectedItems } = useStore(
    (state) => state.calendar
  );
  const { setSelectedDate, setActiveDate, setActiveTimes, setSelectedItems, setView } = useStore();

  const handleDateSelection = (
    date: SelectedDate,
    onActiveDateChange?: (date: Date) => void,
    onSelectedDateChange?: (date: SelectedDate) => void
  ) => {
    // both are helper functions to ensure that when the user passes a
    // callback to update the date on page level (if necessary) that it
    // gets invoked
    const selectedDateChange = (newSelectedDate: SelectedDate) => {
      if (onSelectedDateChange) onSelectedDateChange(newSelectedDate);
      setSelectedDate(newSelectedDate);
    };
    const activeDateChange = (newActiveDate: Date) => {
      if (onActiveDateChange) onActiveDateChange(newActiveDate);
      setActiveDate(newActiveDate);
    };

    // for the week view we dont need to account for the below logic
    if (view === 'week') {
      selectedDateChange(date);
      return;
    }

    // no need to change the active date as the selected date is not outside
    // of the current month
    if (isSameMonth(date.dateFrom, activeDate)) {
      selectedDateChange(date);
      return;
    }

    // need to change the active date as the selected date is outside
    // of the current month
    if (isAfter(date.dateFrom, activeDate)) {
      activeDateChange(view === 'month' ? addMonths(activeDate, 1) : addWeeks(activeDate, 1));
      selectedDateChange(date);
    } else {
      activeDateChange(view === 'month' ? subMonths(activeDate, 1) : subWeeks(activeDate, 1));
      selectedDateChange(date);
    }
  };

  const handleActiveDateChange = (newActiveDate: Date) => {
    const parsedDate = newActiveDate;
    setActiveDate(parsedDate);
  };

  const handleOfficeActiveTimes = (activeTimes: OfficeActiveTimes) => {
    const parsedStart = activeTimes.start;
    const parsedEnd = activeTimes.end;
    setActiveTimes({ start: parsedStart, end: parsedEnd });
  };

  return {
    selectedDate,
    activeDate,
    currActiveTimes: { start: activeTimes.start, end: activeTimes.end },
    currReservations: reservations,
    view,
    setView,
    handleDateSelection,
    handleActiveDateChange,
    handleOfficeActiveTimes,
    selectedItems,
    setSelectedItems,
  };
};
